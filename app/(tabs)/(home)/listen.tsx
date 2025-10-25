
import React, { useState, useEffect } from 'react';
import * as Speech from 'expo-speech';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import {
  theftActSections,
  criminalDamageActSections,
  criminalAttemptsActSections,
  offencesAgainstPersonsActSections,
  criminalJusticeActSections,
  emergencyWorkersActSections,
  policeActSections,
  paceActSections,
  preventionOfCrimeActSections,
  publicOrderActSections,
  commonLawOffences,
} from '@/data/theftActData';
import { colors, commonStyles, buttonStyles } from '@/styles/commonStyles';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

interface LegislationSection {
  title: string;
  content: string;
  keywords: string[];
}

interface LegislationCategory {
  name: string;
  sections: LegislationSection[];
}

interface VoiceOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  pitch: number;
  rate: number;
  voiceIdentifier?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 30,
  },
  categoryCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      },
    }),
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  categorySubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  sectionButton: {
    backgroundColor: colors.primary + '15',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  selectedSection: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  selectedSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  selectedSectionContent: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 20,
  },
  voiceSelectionContainer: {
    marginBottom: 20,
  },
  voiceSelectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  voiceOptionsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  voiceOption: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.textSecondary + '30',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      },
    }),
  },
  voiceOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  voiceOptionIcon: {
    marginBottom: 8,
  },
  voiceOptionName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  voiceOptionDescription: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  controlsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  controlButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  controlButtonSecondary: {
    backgroundColor: colors.textSecondary + '20',
  },
  controlButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  controlButtonTextSecondary: {
    color: colors.text,
  },
  backButton: {
    backgroundColor: colors.textSecondary + '20',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default function ListenScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<LegislationSection | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<Speech.Voice[]>([]);
  const [selectedVoiceOption, setSelectedVoiceOption] = useState<string>('female');

  const categories: LegislationCategory[] = [
    { name: 'Theft Act 1968', sections: theftActSections },
    { name: 'Criminal Damage Act 1971', sections: criminalDamageActSections },
    { name: 'Criminal Attempts Act 1981', sections: criminalAttemptsActSections },
    { name: 'Offences Against the Person Act 1861', sections: offencesAgainstPersonsActSections },
    { name: 'Criminal Justice Act 1988', sections: criminalJusticeActSections },
    { name: 'Emergency Workers Act 2006', sections: emergencyWorkersActSections },
    { name: 'Police Act 1996', sections: policeActSections },
    { name: 'PACE 1984', sections: paceActSections },
    { name: 'Prevention of Crime Act 1953', sections: preventionOfCrimeActSections },
    { name: 'Public Order Act 1986', sections: publicOrderActSections },
    { name: 'Common Law Offences', sections: commonLawOffences },
  ];

  const voiceOptions: VoiceOption[] = [
    {
      id: 'male',
      name: 'Male',
      description: 'Professional male voice',
      icon: 'person.fill',
      pitch: 0.9,
      rate: 0.75,
    },
    {
      id: 'female',
      name: 'Female',
      description: 'Clear female voice',
      icon: 'person.fill',
      pitch: 1.1,
      rate: 0.75,
    },
  ];

  useEffect(() => {
    loadVoices();
    
    return () => {
      Speech.stop();
    };
  }, []);

  const loadVoices = async () => {
    try {
      const voices = await Speech.getAvailableVoicesAsync();
      console.log('Available voices:', voices.length);
      setAvailableVoices(voices);
    } catch (error) {
      console.error('Error loading voices:', error);
    }
  };

  const getVoiceForOption = (optionId: string): string | undefined => {
    if (availableVoices.length === 0) return undefined;

    let selectedVoice: Speech.Voice | undefined;

    switch (optionId) {
      case 'male':
        // Try to find a male British English voice
        selectedVoice = 
          availableVoices.find(voice => 
            voice.language.startsWith('en-GB') && 
            (voice.name.toLowerCase().includes('male') || 
             voice.name.toLowerCase().includes('daniel') ||
             voice.name.toLowerCase().includes('oliver') ||
             voice.name.toLowerCase().includes('arthur'))
          ) ||
          availableVoices.find(voice => 
            voice.language.startsWith('en-') && 
            (voice.name.toLowerCase().includes('male') ||
             voice.name.toLowerCase().includes('aaron'))
          ) ||
          availableVoices.find(voice => voice.language.startsWith('en-GB')) ||
          availableVoices.find(voice => voice.language.startsWith('en-'));
        break;

      case 'female':
        // Try to find a female British English voice
        selectedVoice = 
          availableVoices.find(voice => 
            voice.language.startsWith('en-GB') && 
            (voice.name.toLowerCase().includes('female') || 
             voice.name.toLowerCase().includes('kate') ||
             voice.name.toLowerCase().includes('serena') ||
             voice.name.toLowerCase().includes('martha'))
          ) ||
          availableVoices.find(voice => 
            voice.language.startsWith('en-') && 
            (voice.name.toLowerCase().includes('female') ||
             voice.name.toLowerCase().includes('samantha'))
          ) ||
          availableVoices.find(voice => voice.language.startsWith('en-GB')) ||
          availableVoices.find(voice => voice.language.startsWith('en-'));
        break;

      default:
        selectedVoice = availableVoices.find(voice => voice.language.startsWith('en-'));
    }

    if (selectedVoice) {
      console.log(`Selected ${optionId} voice:`, selectedVoice.name, selectedVoice.language);
      return selectedVoice.identifier;
    }

    return undefined;
  };

  const processTextForSpeech = (text: string) => {
    // Replace commas with a brief pause (using a single period for natural pause)
    let processedText = text.replace(/,\s*/g, ', ');
    
    // Add natural pauses using SSML-like markers that the speech engine understands
    // Short pause after commas
    processedText = processedText.replace(/,\s+/g, ',  ');
    
    // Medium pause after semicolons
    processedText = processedText.replace(/;\s+/g, ';   ');
    
    // Longer pause after periods
    processedText = processedText.replace(/\.\s+/g, '.    ');
    
    // Medium pause after colons
    processedText = processedText.replace(/:\s+/g, ':   ');
    
    // Brief pause around parentheses
    processedText = processedText.replace(/\(\s*/g, '  (');
    processedText = processedText.replace(/\s*\)/g, ')  ');
    
    // Add pauses around "or" for better clarity
    processedText = processedText.replace(/\s+or\s+/g, '  or  ');
    
    // Ensure proper spacing
    processedText = processedText.replace(/\s+/g, ' ').trim();
    
    return processedText;
  };

  const handleCategorySelect = (categoryName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedCategory(categoryName);
    setSelectedSection(null);
    Speech.stop();
    setIsPlaying(false);
  };

  const handleSectionSelect = (section: LegislationSection) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedSection(section);
    Speech.stop();
    setIsPlaying(false);
  };

  const handleVoiceSelect = (voiceId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedVoiceOption(voiceId);
    
    // Stop current playback if switching voices
    if (isPlaying) {
      Speech.stop();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    if (!selectedSection) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    const text = `${selectedSection.title}.    ${selectedSection.content}`;
    const processedText = processTextForSpeech(text);
    
    const voiceOption = voiceOptions.find(v => v.id === selectedVoiceOption);
    const voiceIdentifier = getVoiceForOption(selectedVoiceOption);
    
    console.log('Speaking with voice option:', selectedVoiceOption);
    console.log('Voice identifier:', voiceIdentifier);
    console.log('Pitch:', voiceOption?.pitch, 'Rate:', voiceOption?.rate);
    
    Speech.speak(processedText, {
      language: 'en-GB',
      pitch: voiceOption?.pitch || 1.0,
      rate: voiceOption?.rate || 0.75,
      voice: voiceIdentifier,
      onDone: () => {
        setIsPlaying(false);
      },
      onStopped: () => {
        setIsPlaying(false);
      },
      onError: (error) => {
        console.error('Speech error:', error);
        setIsPlaying(false);
        Alert.alert('Speech Error', 'There was an error playing the audio. Please try again.');
      },
    });
    
    setIsPlaying(true);
  };

  const handlePause = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.pause();
    setIsPlaying(false);
  };

  const stopSpeaking = () => {
    Speech.stop();
    setIsPlaying(false);
  };

  const handleStop = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    stopSpeaking();
  };

  const handleBack = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    stopSpeaking();
    if (selectedSection) {
      setSelectedSection(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const getSelectedCategorySections = () => {
    const category = categories.find(c => c.name === selectedCategory);
    return category?.sections || [];
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Listen to Legislation',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerShadowVisible: false,
        }}
      />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {!selectedCategory && (
          <>
            <Text style={styles.title}>Listen to Legislation</Text>
            <Text style={styles.subtitle}>
              Select a category to hear the legislation read aloud with natural pronunciation
            </Text>

            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                style={styles.categoryCard}
                onPress={() => handleCategorySelect(category.name)}
                activeOpacity={0.7}
              >
                <Text style={styles.categoryTitle}>{category.name}</Text>
                <Text style={styles.categorySubtitle}>
                  {category.sections.length} section{category.sections.length !== 1 ? 's' : ''}
                </Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {selectedCategory && !selectedSection && (
          <>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <IconSymbol name="chevron.left" size={20} color={colors.text} />
              <Text style={styles.backButtonText}>Back to Categories</Text>
            </TouchableOpacity>

            <Text style={styles.title}>{selectedCategory}</Text>
            <Text style={styles.subtitle}>Select a section to listen to</Text>

            {getSelectedCategorySections().map((section, index) => (
              <TouchableOpacity
                key={index}
                style={styles.sectionButton}
                onPress={() => handleSectionSelect(section)}
                activeOpacity={0.7}
              >
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {selectedSection && (
          <>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <IconSymbol name="chevron.left" size={20} color={colors.text} />
              <Text style={styles.backButtonText}>Back to Sections</Text>
            </TouchableOpacity>

            <View style={styles.selectedSection}>
              <Text style={styles.selectedSectionTitle}>{selectedSection.title}</Text>
              <Text style={styles.selectedSectionContent}>{selectedSection.content}</Text>

              <View style={styles.voiceSelectionContainer}>
                <Text style={styles.voiceSelectionTitle}>Choose Voice:</Text>
                <View style={styles.voiceOptionsContainer}>
                  {voiceOptions.map((voice) => (
                    <TouchableOpacity
                      key={voice.id}
                      style={[
                        styles.voiceOption,
                        selectedVoiceOption === voice.id && styles.voiceOptionSelected,
                      ]}
                      onPress={() => handleVoiceSelect(voice.id)}
                      activeOpacity={0.7}
                    >
                      <View style={styles.voiceOptionIcon}>
                        <IconSymbol 
                          name={voice.icon as any} 
                          size={24} 
                          color={selectedVoiceOption === voice.id ? colors.primary : colors.textSecondary} 
                        />
                      </View>
                      <Text style={styles.voiceOptionName}>{voice.name}</Text>
                      <Text style={styles.voiceOptionDescription}>{voice.description}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={styles.controlsContainer}>
                {!isPlaying ? (
                  <TouchableOpacity
                    style={styles.controlButton}
                    onPress={handlePlay}
                    activeOpacity={0.7}
                  >
                    <IconSymbol name="play.fill" size={20} color="#FFFFFF" />
                    <Text style={styles.controlButtonText}>Play</Text>
                  </TouchableOpacity>
                ) : (
                  <>
                    <TouchableOpacity
                      style={[styles.controlButton, styles.controlButtonSecondary]}
                      onPress={handlePause}
                      activeOpacity={0.7}
                    >
                      <IconSymbol name="pause.fill" size={20} color={colors.text} />
                      <Text style={[styles.controlButtonText, styles.controlButtonTextSecondary]}>
                        Pause
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.controlButton, styles.controlButtonSecondary]}
                      onPress={handleStop}
                      activeOpacity={0.7}
                    >
                      <IconSymbol name="stop.fill" size={20} color={colors.text} />
                      <Text style={[styles.controlButtonText, styles.controlButtonTextSecondary]}>
                        Stop
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}
