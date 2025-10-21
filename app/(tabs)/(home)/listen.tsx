
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
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import {
  theftActSections,
  criminalDamageActSections,
  criminalAttemptsActSections,
  offencesAgainstPersonsActSections,
  criminalJusticeActSections,
  emergencyWorkersActSections,
  policeActSections,
  publicOrderActSections,
  commonLawOffences,
} from '@/data/theftActData';

interface LegislationSection {
  title: string;
  content: string;
  keywords: string[];
}

interface LegislationCategory {
  name: string;
  sections: LegislationSection[];
}

export default function ListenScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<LegislationSection | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const categories: LegislationCategory[] = [
    { name: 'Theft Act 1968', sections: theftActSections },
    { name: 'Criminal Damage Act 1971', sections: criminalDamageActSections },
    { name: 'Criminal Attempts Act 1981', sections: criminalAttemptsActSections },
    { name: 'Offences Against the Persons Act 1861', sections: offencesAgainstPersonsActSections },
    { name: 'Criminal Justice Act 1988', sections: criminalJusticeActSections },
    { name: 'Emergency Workers (Obstruction) Act 2006', sections: emergencyWorkersActSections },
    { name: 'Police Act 1996', sections: policeActSections },
    { name: 'Public Order Act 1986', sections: publicOrderActSections },
    { name: 'Common Law Offences', sections: commonLawOffences },
  ];

  useEffect(() => {
    // Cleanup speech when component unmounts
    return () => {
      Speech.stop();
    };
  }, []);

  // Process text to add natural pauses for more human-like speech
  const processTextForSpeech = (text: string): string => {
    let processedText = text;
    
    // Add longer pauses after periods (full stops)
    processedText = processedText.replace(/\.\s+/g, '. ... ');
    
    // Add medium pauses after semicolons
    processedText = processedText.replace(/;\s+/g, '; .. ');
    
    // Add short pauses after commas
    processedText = processedText.replace(/,\s+/g, ', . ');
    
    // Add pauses after colons
    processedText = processedText.replace(/:\s+/g, ': .. ');
    
    // Add pauses after opening brackets/parentheses
    processedText = processedText.replace(/\(\s*/g, '( . ');
    
    // Add pauses before closing brackets/parentheses
    processedText = processedText.replace(/\s*\)/g, ' . )');
    
    return processedText;
  };

  const handleCategorySelect = (categoryName: string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSelectedCategory(categoryName);
    setSelectedSection(null);
    stopSpeaking();
    console.log('Selected category:', categoryName);
  };

  const handleSectionSelect = (section: LegislationSection) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSelectedSection(section);
    stopSpeaking();
    console.log('Selected section:', section.title);
  };

  const handlePlay = async () => {
    if (!selectedSection) return;

    if (isPaused) {
      // Resume speaking
      Speech.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      console.log('Resumed speaking');
    } else {
      // Start speaking
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }

      // Process the text to add natural pauses
      const processedContent = processTextForSpeech(selectedSection.content);
      const textToSpeak = `${selectedSection.title}. ... ... ${processedContent}`;

      console.log('Starting speech with enhanced natural pauses');

      Speech.speak(textToSpeak, {
        language: 'en-GB',
        pitch: 0.95, // Slightly lower pitch for more natural sound
        rate: 0.75, // Slower rate for better comprehension and natural flow
        onStart: () => {
          setIsSpeaking(true);
          setIsPaused(false);
          console.log('Started speaking');
        },
        onDone: () => {
          setIsSpeaking(false);
          setIsPaused(false);
          console.log('Finished speaking');
        },
        onStopped: () => {
          setIsSpeaking(false);
          setIsPaused(false);
          console.log('Stopped speaking');
        },
        onError: (error) => {
          console.error('Speech error:', error);
          setIsSpeaking(false);
          setIsPaused(false);
        },
      });
    }
  };

  const handlePause = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Speech.pause();
    setIsPaused(true);
    setIsSpeaking(false);
    console.log('Paused speaking');
  };

  const stopSpeaking = () => {
    Speech.stop();
    setIsSpeaking(false);
    setIsPaused(false);
    console.log('Stopped speaking');
  };

  const handleStop = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    stopSpeaking();
  };

  const handleBack = () => {
    if (selectedSection) {
      setSelectedSection(null);
      stopSpeaking();
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      router.back();
    }
  };

  const getSelectedCategorySections = (): LegislationSection[] => {
    const category = categories.find(cat => cat.name === selectedCategory);
    return category ? category.sections : [];
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Listen to Legislation',
          headerLeft: () => (
            <TouchableOpacity
              onPress={handleBack}
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
          {/* Info Card */}
          <View style={[commonStyles.card, styles.infoCard]}>
            <View style={styles.infoHeader}>
              <IconSymbol name="speaker.wave.2.fill" size={32} color={colors.primary} />
              <Text style={styles.infoTitle}>Audio Legislation Player</Text>
            </View>
            <Text style={styles.infoText}>
              Select any legislation section to listen to the full text read aloud with natural pauses. 
              Perfect for learning definitions while on the go!
            </Text>
          </View>

          {/* Category Selection */}
          {!selectedCategory && (
            <View style={styles.categorySection}>
              <Text style={styles.sectionTitle}>Select Legislation</Text>
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryCard}
                  onPress={() => handleCategorySelect(category.name)}
                >
                  <View style={styles.categoryContent}>
                    <IconSymbol
                      name="book.fill"
                      size={24}
                      color={colors.primary}
                      style={styles.categoryIcon}
                    />
                    <View style={styles.categoryTextContainer}>
                      <Text style={styles.categoryName}>{category.name}</Text>
                      <Text style={styles.categorySectionCount}>
                        {category.sections.length} section{category.sections.length !== 1 ? 's' : ''}
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

          {/* Section Selection */}
          {selectedCategory && !selectedSection && (
            <View style={styles.sectionListContainer}>
              <Text style={styles.sectionTitle}>{selectedCategory}</Text>
              <Text style={styles.sectionSubtitle}>
                Select a section to listen to
              </Text>
              {getSelectedCategorySections().map((section, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.sectionCard}
                  onPress={() => handleSectionSelect(section)}
                >
                  <View style={styles.sectionContent}>
                    <View style={styles.sectionNumberBadge}>
                      <Text style={styles.sectionNumberText}>{index + 1}</Text>
                    </View>
                    <View style={styles.sectionTextContainer}>
                      <Text style={styles.sectionName}>{section.title}</Text>
                      <Text style={styles.sectionPreview} numberOfLines={2}>
                        {section.content}
                      </Text>
                    </View>
                    <IconSymbol
                      name="play.circle.fill"
                      size={28}
                      color={colors.primary}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Audio Player */}
          {selectedSection && (
            <View style={styles.playerContainer}>
              <View style={[commonStyles.card, styles.playerCard]}>
                <View style={styles.playerHeader}>
                  <IconSymbol
                    name="waveform"
                    size={40}
                    color={colors.primary}
                    style={styles.playerIcon}
                  />
                  <Text style={styles.playerTitle}>Now Playing</Text>
                </View>

                <View style={styles.playerContent}>
                  <Text style={styles.playerSectionTitle}>
                    {selectedSection.title}
                  </Text>
                  <ScrollView style={styles.playerTextScroll}>
                    <Text style={styles.playerText}>
                      {selectedSection.content}
                    </Text>
                  </ScrollView>
                </View>

                {/* Speech Info Banner */}
                <View style={styles.speechInfoBanner}>
                  <IconSymbol
                    name="info.circle.fill"
                    size={16}
                    color={colors.primary}
                    style={styles.speechInfoIcon}
                  />
                  <Text style={styles.speechInfoText}>
                    Enhanced with natural pauses for better listening
                  </Text>
                </View>

                {/* Playback Controls */}
                <View style={styles.controlsContainer}>
                  {!isSpeaking && !isPaused && (
                    <TouchableOpacity
                      style={[buttonStyles.primaryButton, styles.controlButton]}
                      onPress={handlePlay}
                    >
                      <IconSymbol
                        name="play.fill"
                        size={24}
                        color="#FFFFFF"
                        style={styles.controlIcon}
                      />
                      <Text style={buttonStyles.buttonText}>Play</Text>
                    </TouchableOpacity>
                  )}

                  {isSpeaking && (
                    <TouchableOpacity
                      style={[buttonStyles.accentButton, styles.controlButton]}
                      onPress={handlePause}
                    >
                      <IconSymbol
                        name="pause.fill"
                        size={24}
                        color="#FFFFFF"
                        style={styles.controlIcon}
                      />
                      <Text style={buttonStyles.buttonText}>Pause</Text>
                    </TouchableOpacity>
                  )}

                  {isPaused && (
                    <TouchableOpacity
                      style={[buttonStyles.primaryButton, styles.controlButton]}
                      onPress={handlePlay}
                    >
                      <IconSymbol
                        name="play.fill"
                        size={24}
                        color="#FFFFFF"
                        style={styles.controlIcon}
                      />
                      <Text style={buttonStyles.buttonText}>Resume</Text>
                    </TouchableOpacity>
                  )}

                  {(isSpeaking || isPaused) && (
                    <TouchableOpacity
                      style={[styles.stopButton]}
                      onPress={handleStop}
                    >
                      <IconSymbol
                        name="stop.fill"
                        size={24}
                        color={colors.error}
                        style={styles.controlIcon}
                      />
                      <Text style={styles.stopButtonText}>Stop</Text>
                    </TouchableOpacity>
                  )}
                </View>

                {/* Status Indicator */}
                {(isSpeaking || isPaused) && (
                  <View style={styles.statusContainer}>
                    <View style={[
                      styles.statusIndicator,
                      isSpeaking && styles.statusIndicatorActive
                    ]} />
                    <Text style={styles.statusText}>
                      {isSpeaking ? 'Playing...' : 'Paused'}
                    </Text>
                  </View>
                )}
              </View>

              {/* Keywords Card */}
              <View style={[commonStyles.card, styles.keywordsCard]}>
                <Text style={styles.keywordsTitle}>Key Terms</Text>
                <View style={styles.keywordsContainer}>
                  {selectedSection.keywords.slice(0, 12).map((keyword, index) => (
                    <View key={index} style={styles.keywordBadge}>
                      <Text style={styles.keywordText}>{keyword}</Text>
                    </View>
                  ))}
                </View>
              </View>
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
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  infoCard: {
    marginBottom: 24,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 12,
  },
  infoText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },
  categorySection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginRight: 12,
  },
  categoryTextContainer: {
    flex: 1,
  },
  categoryName: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  categorySectionCount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  sectionListContainer: {
    marginBottom: 16,
  },
  sectionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionNumberBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionNumberText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  sectionTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  sectionName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  sectionPreview: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  playerContainer: {
    marginBottom: 16,
  },
  playerCard: {
    marginBottom: 16,
  },
  playerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.highlight,
  },
  playerIcon: {
    marginRight: 12,
  },
  playerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  playerContent: {
    marginBottom: 16,
  },
  playerSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
  },
  playerTextScroll: {
    maxHeight: 200,
  },
  playerText: {
    fontSize: 16,
    lineHeight: 26,
    color: colors.text,
  },
  speechInfoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.highlight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  speechInfoIcon: {
    marginRight: 8,
  },
  speechInfoText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '500',
    flex: 1,
  },
  controlsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  controlButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlIcon: {
    marginRight: 8,
  },
  stopButton: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.error,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  stopButtonText: {
    color: colors.error,
    fontSize: 16,
    fontWeight: '600',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.highlight,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.textSecondary,
    marginRight: 8,
  },
  statusIndicatorActive: {
    backgroundColor: colors.success,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  keywordsCard: {
    marginBottom: 16,
  },
  keywordsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  keywordBadge: {
    backgroundColor: colors.highlight,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  keywordText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
});
