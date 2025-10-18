
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles, buttonStyles } from '@/styles/commonStyles';
import { generateQuestion, checkAnswer, QuizQuestion, BlankItem } from '@/data/theftActData';
import * as Haptics from 'expo-haptics';

export default function QuizScreen() {
  const router = useRouter();
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [noQuestionsAvailable, setNoQuestionsAvailable] = useState(false);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    const newQuestion = generateQuestion();
    if (!newQuestion) {
      setNoQuestionsAvailable(true);
      console.log('No questions available');
      return;
    }
    setQuestion(newQuestion);
    setCheckedAnswers(new Array(newQuestion.blanks.length).fill(false));
    setShowFeedback(false);
    setNoQuestionsAvailable(false);
    console.log('New question loaded:', newQuestion.section);
  };

  const handleOptionSelect = (blankIndex: number, selectedOption: string) => {
    if (showFeedback) return; // Don't allow changes after checking

    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    if (!question) return;

    // Update the selected answer in the blanks array
    const updatedBlanks = [...question.blanks];
    updatedBlanks[blankIndex] = {
      ...updatedBlanks[blankIndex],
      selectedAnswer: selectedOption
    };

    setQuestion({
      ...question,
      blanks: updatedBlanks
    });

    console.log(`Blank ${blankIndex} selected: ${selectedOption}`);
  };

  const handleCheckAnswers = () => {
    if (!question) return;

    // Check if all blanks have been answered
    const allAnswered = question.blanks.every(blank => blank.selectedAnswer !== undefined && blank.selectedAnswer !== '');
    if (!allAnswered) {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      }
      console.log('Please answer all questions before checking');
      return;
    }

    const results = question.blanks.map((blank) => {
      return checkAnswer(blank.selectedAnswer || '', blank.word);
    });

    setCheckedAnswers(results);
    setShowFeedback(true);

    const correctCount = results.filter(r => r).length;
    setScore({
      correct: score.correct + correctCount,
      total: score.total + question.blanks.length,
    });

    if (correctCount === question.blanks.length) {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      console.log('All answers correct!');
    } else {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
      console.log(`${correctCount} out of ${question.blanks.length} correct`);
    }
  };

  const handleRefresh = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    loadNewQuestion();
  };

  const renderTextWithBlanks = () => {
    if (!question) return null;

    const parts = question.text.split(/___\d+___/);
    const elements: JSX.Element[] = [];

    parts.forEach((part, index) => {
      // Add text part
      if (part) {
        elements.push(
          <Text key={`text-${index}`} style={styles.questionText}>
            {part}
          </Text>
        );
      }

      // Add blank indicator if not the last part
      if (index < question.blanks.length) {
        const isCorrect = checkedAnswers[index];
        const hasBeenChecked = showFeedback;
        const selectedAnswer = question.blanks[index].selectedAnswer;

        elements.push(
          <View key={`blank-${index}`} style={styles.blankIndicator}>
            <Text
              style={[
                styles.blankText,
                selectedAnswer && styles.blankTextFilled,
                hasBeenChecked && isCorrect && styles.blankTextCorrect,
                hasBeenChecked && !isCorrect && styles.blankTextIncorrect,
              ]}
            >
              {selectedAnswer || `[${index + 1}]`}
            </Text>
            {hasBeenChecked && (
              <IconSymbol
                name={isCorrect ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                size={16}
                color={isCorrect ? colors.success : colors.error}
                style={styles.blankIcon}
              />
            )}
          </View>
        );
      }
    });

    return <View style={styles.questionContainer}>{elements}</View>;
  };

  const renderMultipleChoiceOptions = () => {
    if (!question) return null;

    return question.blanks.map((blank, blankIndex) => {
      const isCorrect = checkedAnswers[blankIndex];
      const hasBeenChecked = showFeedback;
      const selectedAnswer = blank.selectedAnswer;

      return (
        <View key={`options-${blankIndex}`} style={styles.optionsContainer}>
          <Text style={styles.optionsLabel}>Blank {blankIndex + 1}:</Text>
          <View style={styles.optionsGrid}>
            {blank.options.map((option, optionIndex) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option.toLowerCase() === blank.word.toLowerCase();
              
              let buttonStyle = [styles.optionButton];
              let textStyle = [styles.optionText];

              if (isSelected && !hasBeenChecked) {
                buttonStyle.push(styles.optionButtonSelected);
                textStyle.push(styles.optionTextSelected);
              }

              if (hasBeenChecked) {
                if (isSelected && isCorrect) {
                  buttonStyle.push(styles.optionButtonCorrect);
                  textStyle.push(styles.optionTextCorrect);
                } else if (isSelected && !isCorrect) {
                  buttonStyle.push(styles.optionButtonIncorrect);
                  textStyle.push(styles.optionTextIncorrect);
                } else if (isCorrectOption) {
                  buttonStyle.push(styles.optionButtonShowCorrect);
                  textStyle.push(styles.optionTextShowCorrect);
                } else {
                  buttonStyle.push(styles.optionButtonDisabled);
                  textStyle.push(styles.optionTextDisabled);
                }
              }

              return (
                <TouchableOpacity
                  key={`option-${blankIndex}-${optionIndex}`}
                  style={buttonStyle}
                  onPress={() => handleOptionSelect(blankIndex, option)}
                  disabled={hasBeenChecked}
                >
                  <Text style={textStyle}>{option}</Text>
                  {hasBeenChecked && isCorrectOption && (
                    <IconSymbol
                      name="checkmark.circle.fill"
                      size={18}
                      color={colors.success}
                      style={styles.optionIcon}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      );
    });
  };

  if (noQuestionsAvailable) {
    return (
      <>
        <Stack.Screen
          options={{
            title: 'Quiz',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.headerButton}
              >
                <IconSymbol name="chevron.left" size={24} color={colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <View style={[commonStyles.container, styles.emptyContainer]}>
          <IconSymbol name="exclamationmark.triangle.fill" size={64} color={colors.textSecondary} />
          <Text style={styles.emptyTitle}>No Questions Available</Text>
          <Text style={styles.emptyText}>
            All questions have been cleared. Please add new content to start the quiz.
          </Text>
          <TouchableOpacity
            style={[buttonStyles.primaryButton, styles.backButton]}
            onPress={() => router.back()}
          >
            <IconSymbol name="chevron.left" size={20} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={buttonStyles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  if (!question) {
    return (
      <View style={[commonStyles.container, styles.loadingContainer]}>
        <Text style={commonStyles.text}>Loading question...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.headerButton}
            >
              <IconSymbol name="chevron.left" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={commonStyles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Score Display */}
          <View style={styles.scoreCard}>
            <Text style={styles.scoreText}>
              Score: {score.correct} / {score.total}
            </Text>
          </View>

          {/* Section Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionNumber}>{question.section}</Text>
            <Text style={styles.sectionTitle}>{question.sectionTitle}</Text>
          </View>

          {/* Question Card */}
          <View style={[commonStyles.card, styles.questionCard]}>
            <Text style={styles.instructionText}>
              Read the text and select the correct words for each blank. The selected words will appear in the paragraph:
            </Text>
            {renderTextWithBlanks()}
          </View>

          {/* Multiple Choice Options */}
          <View style={styles.multipleChoiceSection}>
            {renderMultipleChoiceOptions()}
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            {!showFeedback ? (
              <TouchableOpacity
                style={[buttonStyles.primaryButton, styles.button]}
                onPress={handleCheckAnswers}
              >
                <Text style={buttonStyles.buttonText}>Check Answers</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[buttonStyles.accentButton, styles.button]}
                onPress={handleRefresh}
              >
                <IconSymbol
                  name="arrow.clockwise"
                  size={20}
                  color="#FFFFFF"
                  style={styles.buttonIcon}
                />
                <Text style={buttonStyles.buttonText}>Next Question</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Feedback Message */}
          {showFeedback && (
            <View style={styles.feedbackCard}>
              {checkedAnswers.every(r => r) ? (
                <View style={styles.feedbackSuccess}>
                  <IconSymbol
                    name="checkmark.circle.fill"
                    size={32}
                    color={colors.success}
                  />
                  <Text style={styles.feedbackSuccessText}>
                    Perfect! All answers correct!
                  </Text>
                </View>
              ) : (
                <View style={styles.feedbackPartial}>
                  <IconSymbol
                    name="exclamationmark.circle.fill"
                    size={32}
                    color={colors.accent}
                  />
                  <Text style={styles.feedbackPartialText}>
                    {checkedAnswers.filter(r => r).length} out of{' '}
                    {question.blanks.length} correct. The correct answers are highlighted in green.
                  </Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  scoreCard: {
    backgroundColor: colors.highlight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  questionCard: {
    marginBottom: 16,
  },
  instructionText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  questionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 16,
    lineHeight: 28,
    color: colors.text,
  },
  blankIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 2,
  },
  blankText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textSecondary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: colors.highlight,
  },
  blankTextFilled: {
    color: colors.primary,
    backgroundColor: colors.highlight,
  },
  blankTextCorrect: {
    color: colors.success,
    backgroundColor: '#E8F5E9',
  },
  blankTextIncorrect: {
    color: colors.error,
    backgroundColor: '#FFEBEE',
  },
  blankIcon: {
    marginLeft: 4,
  },
  multipleChoiceSection: {
    marginBottom: 16,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionsLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.textSecondary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: '47%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.highlight,
  },
  optionButtonCorrect: {
    borderColor: colors.success,
    backgroundColor: '#E8F5E9',
  },
  optionButtonIncorrect: {
    borderColor: colors.error,
    backgroundColor: '#FFEBEE',
  },
  optionButtonShowCorrect: {
    borderColor: colors.success,
    backgroundColor: '#E8F5E9',
  },
  optionButtonDisabled: {
    opacity: 0.5,
  },
  optionText: {
    fontSize: 15,
    color: colors.text,
    textAlign: 'center',
  },
  optionTextSelected: {
    fontWeight: '600',
    color: colors.primary,
  },
  optionTextCorrect: {
    fontWeight: '600',
    color: colors.success,
  },
  optionTextIncorrect: {
    fontWeight: '600',
    color: colors.error,
  },
  optionTextShowCorrect: {
    fontWeight: '600',
    color: colors.success,
  },
  optionTextDisabled: {
    color: colors.textSecondary,
  },
  optionIcon: {
    marginLeft: 6,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  feedbackCard: {
    marginBottom: 16,
  },
  feedbackSuccess: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackSuccessText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.success,
    marginLeft: 12,
    flex: 1,
  },
  feedbackPartial: {
    backgroundColor: '#FFF8E1',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackPartialText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 12,
    flex: 1,
  },
});
