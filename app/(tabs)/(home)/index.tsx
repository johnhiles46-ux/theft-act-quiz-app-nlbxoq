
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles, buttonStyles } from '@/styles/commonStyles';

export default function HomeScreen() {
  const router = useRouter();

  const handleStartQuiz = () => {
    console.log('Starting quiz...');
    router.push('/(tabs)/(home)/quiz');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz App',
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
            <View style={styles.iconContainer}>
              <IconSymbol name="book.fill" size={64} color={colors.primary} />
            </View>
            <Text style={styles.heroTitle}>Quiz App</Text>
            <Text style={styles.heroSubtitle}>Interactive Learning</Text>
          </View>

          {/* Empty State Card */}
          <View style={[commonStyles.card, styles.emptyStateCard]}>
            <IconSymbol 
              name="exclamationmark.triangle.fill" 
              size={48} 
              color={colors.textSecondary} 
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyStateTitle}>No Content Available</Text>
            <Text style={styles.emptyStateText}>
              All questions and information have been cleared. Please add new content to start using the quiz app.
            </Text>
          </View>

          {/* Info Card */}
          <View style={[commonStyles.card, styles.infoCard]}>
            <Text style={styles.infoTitle}>What&apos;s Next?</Text>
            <Text style={styles.infoText}>
              To use this quiz app, you&apos;ll need to add questions and content. The app supports:
            </Text>
            <View style={styles.featureItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.featureText}>Multiple-choice questions</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.featureText}>Fill-in-the-blank exercises</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.featureText}>Instant feedback and scoring</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.featureText}>Dynamic question generation</Text>
            </View>
          </View>

          {/* Start Button (Disabled) */}
          <TouchableOpacity
            style={[buttonStyles.primaryButton, styles.startButton, styles.disabledButton]}
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

          {/* Footer Info */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>
              Ready to learn? Add your content to get started!
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
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
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
  emptyStateCard: {
    marginBottom: 16,
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  infoCard: {
    marginBottom: 24,
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
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 8,
  },
  bulletPoint: {
    fontSize: 16,
    color: colors.primary,
    marginRight: 8,
    fontWeight: '700',
  },
  featureText: {
    fontSize: 15,
    color: colors.text,
    flex: 1,
    lineHeight: 22,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    marginBottom: 24,
  },
  disabledButton: {
    opacity: 0.6,
  },
  startButtonText: {
    fontSize: 18,
    marginRight: 8,
  },
  startButtonIcon: {
    marginLeft: 4,
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
