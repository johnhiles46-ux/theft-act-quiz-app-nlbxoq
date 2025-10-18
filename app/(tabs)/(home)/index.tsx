
import React from 'react';
import { Stack, useRouter } from 'expo-router';
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

export default function HomeScreen() {
  const router = useRouter();

  const handleStartQuiz = () => {
    console.log('Starting quiz...');
    router.push('/(tabs)/(home)/quiz');
  };

  const handleListenToLegislation = () => {
    console.log('Opening listen to legislation...');
    router.push('/(tabs)/(home)/listen');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'LegalFill UK',
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
            <Text style={styles.heroTitle}>LegalFill UK</Text>
            <Text style={styles.heroSubtitle}>Master UK Legislation</Text>
          </View>

          {/* Stats Card */}
          <View style={[commonStyles.card, styles.statsCard]}>
            <Text style={styles.statsTitle}>Available Content</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>9</Text>
                <Text style={styles.statLabel}>Theft Act 1968</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Criminal Damage Act 1971</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Offences Against Persons Act 1861</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>2</Text>
                <Text style={styles.statLabel}>Police Act 1996</Text>
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
              Questions are randomly generated from 17 sections of UK legislation
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
