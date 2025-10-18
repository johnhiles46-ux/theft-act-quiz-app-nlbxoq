
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles, buttonStyles } from '@/styles/commonStyles';
import { generateQuestion, checkAnswer, QuizQuestion } from '@/data/theftActData';
import * as Haptics from 'expo-haptics';

export default function QuizScreen() {
  const router = useRouter();
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    const newQuestion = generateQuestion();
    setQuestion(newQuestion);
    setUserAnswers(new Array(newQuestion.blanks.length).fill(''));
    setCheckedAnswers(new Array(newQuestion.blanks.length).fill(false));
    setShowFeedback(false);
    inputRefs.current = [];
    console.log('New question loaded:', newQuestion.section);
  };

  const handleAnswerChange = (text: string, index: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = text;
    setUserAnswers(newAnswers);
  };

  const handleCheckAnswers = () => {
    if (!question) return;

    Keyboard.dismiss();

    const results = userAnswers.map((answer, index) => {
      return checkAnswer(answer, question.blanks[index].word);
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
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
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

      // Add input field if not the last part
      if (index < question.blanks.length) {
        const isCorrect = checkedAnswers[index];
        const hasBeenChecked = showFeedback;

        elements.push(
          <View key={`input-${index}`} style={styles.inputWrapper}>
            <TextInput
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.blankInput,
                hasBeenChecked && isCorrect && commonStyles.inputCorrect,
                hasBeenChecked && !isCorrect && commonStyles.inputIncorrect,
              ]}
              value={userAnswers[index]}
              onChangeText={(text) => handleAnswerChange(text, index)}
              placeholder="..."
              placeholderTextColor={colors.textSecondary}
              autoCapitalize="none"
              autoCorrect={false}
              editable={!showFeedback}
              onSubmitEditing={() => {
                if (index < question.blanks.length - 1) {
                  inputRefs.current[index + 1]?.focus();
                } else {
                  Keyboard.dismiss();
                }
              }}
              returnKeyType={index < question.blanks.length - 1 ? 'next' : 'done'}
            />
            {hasBeenChecked && (
              <View style={styles.feedbackIcon}>
                <IconSymbol
                  name={isCorrect ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                  size={20}
                  color={isCorrect ? colors.success : colors.error}
                />
              </View>
            )}
          </View>
        );
      }
    });

    return <View style={styles.questionContainer}>{elements}</View>;
  };

  const renderCorrectAnswers = () => {
    if (!showFeedback || !question) return null;

    const hasErrors = checkedAnswers.some(result => !result);
    if (!hasErrors) return null;

    return (
      <View style={styles.correctAnswersCard}>
        <Text style={styles.correctAnswersTitle}>Correct Answers:</Text>
        {question.blanks.map((blank, index) => {
          if (checkedAnswers[index]) return null;
          return (
            <View key={index} style={styles.correctAnswerItem}>
              <Text style={styles.correctAnswerText}>
                <Text style={styles.correctAnswerLabel}>Blank {index + 1}:</Text>{' '}
                {blank.word}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

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
          keyboardShouldPersistTaps="handled"
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
              Fill in the blanks with the correct legal terms:
            </Text>
            {renderTextWithBlanks()}
          </View>

          {/* Correct Answers Display */}
          {renderCorrectAnswers()}

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
                    {question.blanks.length} correct. Review the answers above.
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
  inputWrapper: {
    position: 'relative',
    marginHorizontal: 4,
    marginVertical: 2,
  },
  blankInput: {
    minWidth: 120,
    paddingVertical: 6,
    paddingHorizontal: 12,
    paddingRight: 36,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    borderRadius: 6,
    backgroundColor: colors.card,
    color: colors.text,
  },
  feedbackIcon: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  correctAnswersCard: {
    backgroundColor: colors.highlight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  correctAnswersTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  correctAnswerItem: {
    marginBottom: 8,
  },
  correctAnswerText: {
    fontSize: 14,
    color: colors.text,
  },
  correctAnswerLabel: {
    fontWeight: '600',
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
