
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'About',
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
          {/* App Info Card */}
          <View style={[commonStyles.card, styles.infoCard]}>
            <View style={styles.iconContainer}>
              <IconSymbol name="info.circle.fill" size={48} color={colors.primary} />
            </View>
            <Text style={styles.appName}>Theft Act 1968 Quiz</Text>
            <Text style={styles.version}>Version 1.0.0</Text>
          </View>

          {/* Description Card */}
          <View style={[commonStyles.card, styles.descriptionCard]}>
            <Text style={styles.cardTitle}>About This App</Text>
            <Text style={styles.cardText}>
              This interactive quiz app helps users learn and memorize key elements
              of the Theft Act 1968 (UK) through fill-in-the-blank exercises and
              instant feedback.
            </Text>
          </View>

          {/* Features Card */}
          <View style={[commonStyles.card, styles.featuresCard]}>
            <Text style={styles.cardTitle}>Key Features</Text>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>
                Dynamic question generation
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>
                Instant answer validation
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>
                Score tracking
              </Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol name="checkmark.circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>
                Randomized practice questions
              </Text>
            </View>
          </View>

          {/* Legal Info Card */}
          <View style={[commonStyles.card, styles.legalCard]}>
            <Text style={styles.cardTitle}>Legal Information</Text>
            <Text style={styles.cardText}>
              All content is sourced from the Theft Act 1968 (UK), which is in the
              public domain. This app is designed for educational purposes to help
              students and professionals learn UK criminal law.
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Built with React Native & Expo
            </Text>
            <Text style={styles.footerText}>
              © 2024 Theft Act Quiz App
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
  infoCard: {
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  descriptionCard: {
    marginBottom: 16,
  },
  featuresCard: {
    marginBottom: 16,
  },
  legalCard: {
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 15,
    color: colors.text,
    marginLeft: 10,
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 4,
  },
});
