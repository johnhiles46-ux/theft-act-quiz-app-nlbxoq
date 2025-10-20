
import React, { useState, useCallback } from 'react';
import { Stack, useRouter, useFocusEffect } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles, buttonStyles } from '@/styles/commonStyles';
import { getQuizResults, QuizResult } from '@/utils/quizStorage';

export default function HomeScreen() {
  const router = useRouter();
  const [recentResults, setRecentResults] = useState<QuizResult[]>([]);

  // Load recent results when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadRecentResults();
    }, [])
  );

  const loadRecentResults = async () => {
    try {
      const results = await getQuizResults();
      // Get the 3 most recent results
      setRecentResults(results.slice(0, 3));
      console.log('Loaded recent results:', results.length);
    } catch (error) {
      console.error('Error loading recent results:', error);
    }
  };

  const handleStartQuiz = () => {
    console.log('Starting quiz...');
    router.push('/(tabs)/(home)/quiz');
  };

  const handleListenToLegislation = () => {
    console.log('Opening listen to legislation...');
    router.push('/(tabs)/(home)/listen');
  };

  const handleViewAllResults = () => {
    console.log('Viewing all results...');
    router.push('/(tabs)/results');
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const getScoreColor = (correct: number, total: number) => {
    const percentage = (correct / total) * 100;
    if (percentage === 100) return colors.success;
    if (percentage >= 70) return colors.accent;
    return colors.error;
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'SWP Learning tool',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      />
      <View style={commonStyles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.logoContainer}>
              <Image
                source={require('@/assets/images/04f34e69-2e42-4854-be9e-410592f0e89c.jpeg')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.heroTitle}>SWP Learning tool</Text>
            <Text style={styles.heroSubtitle}>Master UK Legislation</Text>
          </View>

          {/* Recent Results Section */}
          {recentResults.length > 0 && (
            <View style={[commonStyles.card, styles.recentResultsCard]}>
              <View style={styles.recentResultsHeader}>
                <Text style={styles.recentResultsTitle}>Recent Results</Text>
                <TouchableOpacity onPress={handleViewAllResults}>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
              </View>
              
              {recentResults.map((result) => (
                <TouchableOpacity
                  key={result.id}
                  style={styles.resultItem}
                  onPress={handleViewAllResults}
                >
                  <View style={styles.resultLeft}>
                    <View style={[
                      styles.scoreCircle,
                      { backgroundColor: getScoreColor(result.score.correct, result.score.total) }
                    ]}>
                      <Text style={styles.scoreCircleText}>
                        {result.score.correct}/{result.score.total}
                      </Text>
                    </View>
                    <View style={styles.resultInfo}>
                      <Text style={styles.resultSection} numberOfLines={1}>
                        {result.sectionTitle}
                      </Text>
                      <Text style={styles.resultTime}>{formatDate(result.timestamp)}</Text>
                    </View>
                  </View>
                  <View style={styles.resultRight}>
                    <View style={[
                      styles.modeBadge,
                      result.mode === 'advanced' && styles.modeBadgeAdvanced
                    ]}>
                      <Text style={[
                        styles.modeBadgeText,
                        result.mode === 'advanced' && styles.modeBadgeTextAdvanced
                      ]}>
                        {result.mode === 'advanced' ? 'Advanced' : 'Standard'}
                      </Text>
                    </View>
                    <IconSymbol
                      name="chevron.right"
                      size={20}
                      color={colors.textSecondary}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Stats Card */}
          <View style={[commonStyles.card, styles.statsCard]}>
            <Text style={styles.statsTitle}>Available Content</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>11</Text>
                <Text style={styles.statLabel}>Theft Act 1968</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Criminal Damage Act 1971</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Offences Against Persons Act 1861</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Police Act 1996</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Criminal Attempts Act 1981</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statLabel}>Criminal Justice Act 1988</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Emergency Workers Act 2006</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5</Text>
                <Text style={styles.statLabel}>Public Order Act 1986</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1</Text>
                <Text style={styles.statLabel}>Common Law Offences</Text>
              </View>
            </View>
          </View>

          {/* Info Card */}
          <View style={[commonStyles.card, styles.infoCard]}>
            <Text style={styles.infoTitle}>How It Works</Text>
            <Text style={styles.infoText}>
              Test your knowledge of UK legislation with interactive fill-in-the-blank questions:
            </Text>
            <View style={styles.featureItem}>
              <IconSymbol name="1.circle.fill" size={24} color={colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureText}>Read the legal text with blanks</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="2.circle.fill" size={24} color={colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureText}>Select the correct words from multiple choices</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="3.circle.fill" size={24} color={colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureText}>Get instant feedback on your answers</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="4.circle.fill" size={24} color={colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureText}>Track your progress and improve</Text>
            </View>
          </View>

          {/* Legislation Coverage */}
          <View style={[commonStyles.card, styles.coverageCard]}>
            <Text style={styles.coverageTitle}>Legislation Covered</Text>
            
            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Theft Act 1968</Text>
                <Text style={styles.legislationDesc}>Theft, Robbery, Burglary, TWOC, Handling Stolen Goods</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Criminal Damage Act 1971</Text>
                <Text style={styles.legislationDesc}>Criminal Damage, Endangering Life, Arson</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Offences Against the Persons Act 1861</Text>
                <Text style={styles.legislationDesc}>Assault, ABH, Poisoning, Assault with Intent</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Police Act 1996</Text>
                <Text style={styles.legislationDesc}>Assault Police, Obstruct Police</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Criminal Attempts Act 1981</Text>
                <Text style={styles.legislationDesc}>Criminal Attempts, Vehicle Interference</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Criminal Justice Act 1988</Text>
                <Text style={styles.legislationDesc}>Common Assault, Battery</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Emergency Workers Act 2006</Text>
                <Text style={styles.legislationDesc}>Obstructing Emergency Workers</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Public Order Act 1986</Text>
                <Text style={styles.legislationDesc}>Riot, Violent Disorder, Harassment, Disorderly Conduct</Text>
              </View>
            </View>

            <View style={styles.legislationItem}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.success} style={styles.checkIcon} />
              <View style={styles.legislationContent}>
                <Text style={styles.legislationName}>Common Law Offences</Text>
                <Text style={styles.legislationDesc}>Breach of the Peace</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={[buttonStyles.primaryButton, styles.startButton]}
            onPress={handleStartQuiz}
          >
            <Text style={[buttonStyles.buttonText, styles.startButtonText]}>
              Start Quiz
            </Text>
            <IconSymbol
              name="arrow.right.circle.fill"
              size={24}
              color="#FFFFFF"
              style={styles.startButtonIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[buttonStyles.secondaryButton, styles.listenButton]}
            onPress={handleListenToLegislation}
          >
            <IconSymbol
              name="speaker.wave.2.fill"
              size={24}
              color="#FFFFFF"
              style={styles.listenButtonIcon}
            />
            <Text style={[buttonStyles.buttonText, styles.listenButtonText]}>
              Listen to Legislation
            </Text>
          </TouchableOpacity>

          {/* Footer Info */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>
              Questions are randomly generated from 34 sections of UK legislation
            </Text>
          </View>
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
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 100,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 20,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 100,
    height: 100,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  recentResultsCard: {
    marginBottom: 16,
  },
  recentResultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  recentResultsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  viewAllText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.highlight,
    borderRadius: 8,
    marginBottom: 8,
  },
  resultLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  scoreCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  scoreCircleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  resultInfo: {
    flex: 1,
  },
  resultSection: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  resultTime: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  resultRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  modeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: colors.primary + '20',
  },
  modeBadgeAdvanced: {
    backgroundColor: colors.accent + '20',
  },
  modeBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.primary,
  },
  modeBadgeTextAdvanced: {
    color: colors.accent,
  },
  statsCard: {
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    backgroundColor: colors.highlight,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },
  infoCard: {
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    marginRight: 12,
  },
  featureText: {
    fontSize: 15,
    color: colors.text,
    flex: 1,
    lineHeight: 22,
  },
  coverageCard: {
    marginBottom: 24,
  },
  coverageTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  legislationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  checkIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  legislationContent: {
    flex: 1,
  },
  legislationName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  legislationDesc: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    marginBottom: 12,
  },
  startButtonText: {
    fontSize: 18,
    marginRight: 8,
  },
  startButtonIcon: {
    marginLeft: 4,
  },
  listenButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    marginBottom: 24,
  },
  listenButtonIcon: {
    marginRight: 8,
  },
  listenButtonText: {
    fontSize: 18,
  },
  footerInfo: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 4,
  },
});
