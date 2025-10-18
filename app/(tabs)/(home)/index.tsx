
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
          title: 'Theft Act 1968 Quiz',
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
            <Text style={styles.heroTitle}>Theft Act 1968</Text>
            <Text style={styles.heroSubtitle}>Interactive Quiz App</Text>
          </View>

          {/* Description Card */}
          <View style={[commonStyles.card, styles.descriptionCard]}>
            <Text style={styles.descriptionTitle}>Learn Through Practice</Text>
            <Text style={styles.descriptionText}>
              Master the key elements of the Theft Act 1968 through interactive
              fill-in-the-blank exercises. Test your knowledge of essential legal
              terms and definitions.
            </Text>
          </View>

          {/* Features List */}
          <View style={[commonStyles.card, styles.featuresCard]}>
            <Text style={styles.featuresTitle}>Features</Text>
            <View style={styles.featureItem}>
              <IconSymbol
                name="checkmark.circle.fill"
                size={24}
                color={colors.success}
              />
              <Text style={styles.featureText}>
                Dynamic questions from all major sections
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol
                name="checkmark.circle.fill"
                size={24}
                color={colors.success}
              />
              <Text style={styles.featureText}>
                Instant feedback on your answers
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol
                name="checkmark.circle.fill"
                size={24}
                color={colors.success}
              />
              <Text style={styles.featureText}>
                Score tracking to monitor progress
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol
                name="checkmark.circle.fill"
                size={24}
                color={colors.success}
              />
              <Text style={styles.featureText}>
                Randomized questions for varied practice
              </Text>
            </View>
          </View>

          {/* Sections Covered */}
          <View style={[commonStyles.card, styles.sectionsCard]}>
            <Text style={styles.sectionsTitle}>Sections Covered</Text>
            <View style={styles.sectionsList}>
              <Text style={styles.sectionItem}>• Basic definition of theft</Text>
              <Text style={styles.sectionItem}>• Dishonesty</Text>
              <Text style={styles.sectionItem}>• Appropriation</Text>
              <Text style={styles.sectionItem}>• Property</Text>
              <Text style={styles.sectionItem}>• Belonging to another</Text>
              <Text style={styles.sectionItem}>
                • Intention of permanently depriving
              </Text>
              <Text style={styles.sectionItem}>• Robbery</Text>
              <Text style={styles.sectionItem}>• Burglary</Text>
              <Text style={styles.sectionItem}>• Handling stolen goods</Text>
              <Text style={styles.sectionItem}>
                • Obtaining property by deception
              </Text>
            </View>
          </View>

          {/* Start Button */}
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

          {/* Footer Info */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerText}>
              All content sourced from the Theft Act 1968 (UK)
            </Text>
            <Text style={styles.footerText}>Public Domain</Text>
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
  descriptionCard: {
    marginBottom: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
  },
  featuresCard: {
    marginBottom: 16,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
    flex: 1,
  },
  sectionsCard: {
    marginBottom: 24,
  },
  sectionsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  sectionsList: {
    paddingLeft: 8,
  },
  sectionItem: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    marginBottom: 24,
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
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 4,
  },
});
