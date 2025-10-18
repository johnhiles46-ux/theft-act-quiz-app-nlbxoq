
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { Stack, useFocusEffect } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import {
  getQuizResults,
  getQuizStatistics,
  deleteQuizResult,
  clearAllQuizResults,
  QuizResult,
} from '@/utils/quizStorage';
import * as Haptics from 'expo-haptics';

export default function ResultsScreen() {
  const [results, setResults] = useState<QuizResult[]>([]);
  const [statistics, setStatistics] = useState({
    totalQuizzes: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    averageScore: 0,
  });
  const [expandedResultId, setExpandedResultId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadResults = async () => {
    try {
      setLoading(true);
      const [resultsData, statsData] = await Promise.all([
        getQuizResults(),
        getQuizStatistics(),
      ]);
      setResults(resultsData);
      setStatistics(statsData);
      console.log(`Loaded ${resultsData.length} quiz results`);
    } catch (error) {
      console.error('Error loading results:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadResults();
    }, [])
  );

  const handleDeleteResult = async (id: string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    Alert.alert(
      'Delete Result',
      'Are you sure you want to delete this quiz result?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteQuizResult(id);
              await loadResults();
              if (Platform.OS !== 'web') {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              }
            } catch (error) {
              console.error('Error deleting result:', error);
              Alert.alert('Error', 'Failed to delete quiz result');
            }
          },
        },
      ]
    );
  };

  const handleClearAll = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    Alert.alert(
      'Clear All Results',
      'Are you sure you want to delete all quiz results? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: async () => {
            try {
              await clearAllQuizResults();
              await loadResults();
              if (Platform.OS !== 'web') {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              }
            } catch (error) {
              console.error('Error clearing results:', error);
              Alert.alert('Error', 'Failed to clear quiz results');
            }
          },
        },
      ]
    );
  };

  const toggleExpanded = (id: string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setExpandedResultId(expandedResultId === id ? null : id);
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getScoreColor = (correct: number, total: number) => {
    const percentage = (correct / total) * 100;
    if (percentage === 100) return colors.success;
    if (percentage >= 70) return colors.accent;
    return colors.error;
  };

  if (loading) {
    return (
      <>
        <Stack.Screen
          options={{
            title: 'Results',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        />
        <View style={[commonStyles.container, styles.centerContainer]}>
          <Text style={commonStyles.text}>Loading results...</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Results',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerRight: () =>
            results.length > 0 ? (
              <TouchableOpacity
                onPress={handleClearAll}
                style={styles.headerButton}
              >
                <IconSymbol name="trash" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            ) : null,
        }}
      />
      <View style={commonStyles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Statistics Card */}
          <View style={[commonStyles.card, styles.statsCard]}>
            <Text style={styles.statsTitle}>Overall Statistics</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <IconSymbol
                  name="doc.text.fill"
                  size={24}
                  color={colors.primary}
                />
                <Text style={styles.statValue}>{statistics.totalQuizzes}</Text>
                <Text style={styles.statLabel}>Quizzes</Text>
              </View>
              <View style={styles.statItem}>
                <IconSymbol
                  name="questionmark.circle.fill"
                  size={24}
                  color={colors.primary}
                />
                <Text style={styles.statValue}>{statistics.totalQuestions}</Text>
                <Text style={styles.statLabel}>Questions</Text>
              </View>
              <View style={styles.statItem}>
                <IconSymbol
                  name="checkmark.circle.fill"
                  size={24}
                  color={colors.success}
                />
                <Text style={styles.statValue}>{statistics.totalCorrect}</Text>
                <Text style={styles.statLabel}>Correct</Text>
              </View>
              <View style={styles.statItem}>
                <IconSymbol
                  name="chart.bar.fill"
                  size={24}
                  color={colors.accent}
                />
                <Text style={styles.statValue}>
                  {statistics.averageScore.toFixed(0)}%
                </Text>
                <Text style={styles.statLabel}>Average</Text>
              </View>
            </View>
          </View>

          {/* Results List */}
          {results.length === 0 ? (
            <View style={styles.emptyContainer}>
              <IconSymbol
                name="doc.text"
                size={64}
                color={colors.textSecondary}
              />
              <Text style={styles.emptyTitle}>No Results Yet</Text>
              <Text style={styles.emptyText}>
                Complete a quiz and tap &quot;Finished&quot; to save your results here.
              </Text>
            </View>
          ) : (
            <View style={styles.resultsContainer}>
              <Text style={styles.resultsTitle}>Quiz History</Text>
              {results.map((result) => {
                const isExpanded = expandedResultId === result.id;
                const scoreColor = getScoreColor(
                  result.score.correct,
                  result.score.total
                );

                return (
                  <View key={result.id} style={[commonStyles.card, styles.resultCard]}>
                    {/* Result Header */}
                    <TouchableOpacity
                      onPress={() => toggleExpanded(result.id)}
                      style={styles.resultHeader}
                    >
                      <View style={styles.resultHeaderLeft}>
                        <View style={styles.resultTitleRow}>
                          <Text style={styles.resultSection}>
                            {result.section}
                          </Text>
                          <View
                            style={[
                              styles.modeBadge,
                              result.mode === 'advanced' && styles.modeBadgeAdvanced,
                            ]}
                          >
                            <Text
                              style={[
                                styles.modeBadgeText,
                                result.mode === 'advanced' &&
                                  styles.modeBadgeTextAdvanced,
                              ]}
                            >
                              {result.mode === 'advanced' ? 'Advanced' : 'Standard'}
                            </Text>
                          </View>
                        </View>
                        <Text style={styles.resultSectionTitle} numberOfLines={1}>
                          {result.sectionTitle}
                        </Text>
                        <Text style={styles.resultDate}>
                          {formatDate(result.timestamp)}
                        </Text>
                      </View>
                      <View style={styles.resultHeaderRight}>
                        <View style={styles.scoreContainer}>
                          <Text style={[styles.scoreValue, { color: scoreColor }]}>
                            {result.score.correct}/{result.score.total}
                          </Text>
                          <Text style={styles.scorePercentage}>
                            {Math.round(
                              (result.score.correct / result.score.total) * 100
                            )}
                            %
                          </Text>
                        </View>
                        <IconSymbol
                          name={isExpanded ? 'chevron.up' : 'chevron.down'}
                          size={20}
                          color={colors.textSecondary}
                        />
                      </View>
                    </TouchableOpacity>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <View style={styles.resultDetails}>
                        <View style={styles.detailsDivider} />
                        {result.items.map((item, index) => (
                          <View key={index} style={styles.detailItem}>
                            <View style={styles.detailItemHeader}>
                              <Text style={styles.detailItemNumber}>
                                Question {index + 1}
                              </Text>
                              <IconSymbol
                                name={
                                  item.isCorrect
                                    ? 'checkmark.circle.fill'
                                    : 'xmark.circle.fill'
                                }
                                size={20}
                                color={item.isCorrect ? colors.success : colors.error}
                              />
                            </View>
                            <View style={styles.detailItemContent}>
                              <View style={styles.answerRow}>
                                <Text style={styles.answerLabel}>Your answer:</Text>
                                <Text
                                  style={[
                                    styles.answerText,
                                    item.isCorrect
                                      ? styles.answerTextCorrect
                                      : styles.answerTextIncorrect,
                                  ]}
                                >
                                  {item.userAnswer || '(no answer)'}
                                </Text>
                              </View>
                              {!item.isCorrect && (
                                <View style={styles.answerRow}>
                                  <Text style={styles.answerLabel}>
                                    Correct answer:
                                  </Text>
                                  <Text style={styles.answerTextCorrect}>
                                    {item.correctAnswer}
                                  </Text>
                                </View>
                              )}
                            </View>
                          </View>
                        ))}

                        {/* Delete Button */}
                        <TouchableOpacity
                          style={styles.deleteButton}
                          onPress={() => handleDeleteResult(result.id)}
                        >
                          <IconSymbol
                            name="trash"
                            size={18}
                            color={colors.error}
                          />
                          <Text style={styles.deleteButtonText}>Delete Result</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 100,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,
    marginRight: 8,
  },
  statsCard: {
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  resultsContainer: {
    marginBottom: 20,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  resultCard: {
    marginBottom: 12,
    padding: 0,
    overflow: 'hidden',
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  resultHeaderLeft: {
    flex: 1,
    marginRight: 12,
  },
  resultTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  resultSection: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 8,
  },
  modeBadge: {
    backgroundColor: colors.highlight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  modeBadgeAdvanced: {
    backgroundColor: '#E3F2FD',
  },
  modeBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.text,
  },
  modeBadgeTextAdvanced: {
    color: colors.primary,
  },
  resultSectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  resultDate: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  resultHeaderRight: {
    alignItems: 'flex-end',
  },
  scoreContainer: {
    alignItems: 'flex-end',
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 20,
    fontWeight: '700',
  },
  scorePercentage: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  resultDetails: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  detailsDivider: {
    height: 1,
    backgroundColor: colors.textSecondary,
    opacity: 0.2,
    marginBottom: 12,
  },
  detailItem: {
    marginBottom: 16,
  },
  detailItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailItemNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  detailItemContent: {
    backgroundColor: colors.highlight,
    borderRadius: 8,
    padding: 12,
  },
  answerRow: {
    marginBottom: 6,
  },
  answerLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  answerText: {
    fontSize: 15,
    fontWeight: '600',
  },
  answerTextCorrect: {
    color: colors.success,
  },
  answerTextIncorrect: {
    color: colors.error,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFEBEE',
    marginTop: 8,
  },
  deleteButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.error,
    marginLeft: 8,
  },
});
