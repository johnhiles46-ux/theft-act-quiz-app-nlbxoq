
export interface QuizQuestion {
  id: string;
  section: string;
  sectionTitle: string;
  text: string;
  blanks: BlankItem[];
}

export interface BlankItem {
  word: string;
  position: number;
  options: string[]; // Array of 4 options (1 correct + 3 incorrect)
  selectedAnswer?: string;
}

// Theft Act 1968 Sections
export const theftActSections = [
  {
    title: 'Section 1 Theft',
    content: 'A person is guilty of an offence if they dishonestly appropriates property belonging to another with the intention of permanently depriving the other of it',
    keywords: ['dishonestly', 'appropriates', 'property', 'belonging', 'another', 'intention', 'permanently', 'depriving']
  },
  {
    title: 'Section 8 Robbery',
    content: 'A person is guilty of an offence if he steals and immediately before doing so or at the time of doing so, and in order to do so he uses force on any person or puts or seeks to put any person in fear of being then and there subjected to force',
    keywords: ['steals', 'immediately', 'before', 'time', 'force', 'person', 'fear', 'subjected']
  },
  {
    title: 'Section 9 (1) (a) Burglary',
    content: 'A person is guilty of an offence if they enter a building as a trespasser with the INTENT to steal anything therein, inflict GBH on any person therein and damage property therein',
    keywords: ['enter', 'building', 'trespasser', 'INTENT', 'steal', 'inflict', 'GBH', 'damage', 'property']
  },
  {
    title: 'Section 9 (1) (b) Burglary',
    content: 'A person is guilty of an offence if they enter a building as a trespasser and goes on to steal or attempt to steal anything, inflict GBH on any person therein',
    keywords: ['enter', 'building', 'trespasser', 'goes', 'steal', 'attempt', 'inflict', 'GBH', 'person']
  },
  {
    title: 'Section 10 Aggravated Burglary',
    content: 'A person is guilty of an offence if they commit any burglary and at the time, has with him any weapon of offence or imitation firearm or any explosive. Mnemonic WIFE Weapon of Offence Imitation Firearm Firearm Explosive',
    keywords: ['commit', 'burglary', 'time', 'weapon', 'offence', 'imitation', 'firearm', 'explosive', 'WIFE']
  },
  {
    title: 'Section 12 TWOC',
    content: 'A person is guilty of an offence if without the consent of the owner or other lawful authority he takes any conveyance for his own or another\'s use or knowing that any conveyance has been taken without such authority he drives it or allows himself to be carried in or on it',
    keywords: ['without', 'consent', 'owner', 'lawful', 'authority', 'takes', 'conveyance', 'knowing', 'drives', 'carried']
  },
  {
    title: 'Section 12(1) Aggravated TWOC',
    content: 'A person is guilty of an offence if commits an offence under Section 12(1) of the Theft Act 1968 in relation to a mechanically propelled vehicle and it is proved that, at any time after the vehicle was unlawfully taken (whether by him or another) before it was recovered, that the vehicle was driven dangerously on a road or other public place, owning to the driving of the vehicle, an accident occurred by which injury was caused to any person, owning to the driving of the vehicle, an accident occurred by which damage was cause to any property, other than the vehicle and that damage was caused to the vehicle',
    keywords: ['commits', 'offence', 'mechanically', 'propelled', 'vehicle', 'unlawfully', 'taken', 'recovered', 'driven', 'dangerously', 'road', 'public', 'accident', 'injury', 'damage', 'property']
  },
  {
    title: 'Section 13 Abstracting Electricity',
    content: 'A person is guilty of an offence if he or she dishonestly uses it without due authority or dishonestly causes it to be diverted or wasted',
    keywords: ['dishonestly', 'uses', 'without', 'due', 'authority', 'causes', 'diverted', 'wasted']
  },
  {
    title: 'Section 22 Handling Stolen Goods',
    content: 'A person is guilty of an offence if otherwise than in the course of stealing, knowing or believing them to be stolen goods, dishonestly receives the goods or dishonestly undertakes or assists in their retention, removal, disposal, or realisation, by or for the benefit of another, or arranges to do any of the above',
    keywords: ['otherwise', 'course', 'stealing', 'knowing', 'believing', 'stolen', 'goods', 'dishonestly', 'receives', 'undertakes', 'assists', 'retention', 'removal', 'disposal', 'realisation', 'benefit', 'another', 'arranges']
  }
];

// Criminal Damage Act 1971 Sections
export const criminalDamageActSections = [
  {
    title: 'Criminal Damage Act 1971 Section 1',
    content: 'A person who without lawful excuse destroys or damages any property belonging to another intending to destroy or damage any such property or being reckless as to whether any such property would be destroyed or damaged shall be guilty of an offence',
    keywords: ['without', 'lawful', 'excuse', 'destroys', 'damages', 'property', 'belonging', 'another', 'intending', 'destroy', 'damage', 'reckless', 'whether', 'destroyed', 'damaged', 'guilty', 'offence']
  },
  {
    title: 'Criminal Damage Act 1971 Section 1(2) Endangering Another\'s Life',
    content: 'A person who without lawful excuse, destroys or damages any property, whether belonging to himself or another (a) intending to destroy or damage any property or being reckless as to whether any property would be destroyed or damaged by the destruction or damage to endanger the life of another or being reckless as to whether the life of another would be thereby endangered',
    keywords: ['without', 'lawful', 'excuse', 'destroys', 'damages', 'property', 'whether', 'belonging', 'himself', 'another', 'intending', 'destroy', 'damage', 'reckless', 'destroyed', 'damaged', 'destruction', 'endanger', 'life', 'endangered']
  },
  {
    title: 'Criminal Damage Act 1971 Section 1(3) Arson',
    content: 'If the damage or destruction is caused by fire, then the offence of arson should be charged. For a person to be found guilty of this offence at least some of the damage must have been caused by fire. For this offence to be proved there must be an intent or an element of recklessness in relation to the use of fire',
    keywords: ['damage', 'destruction', 'caused', 'fire', 'offence', 'arson', 'charged', 'person', 'found', 'guilty', 'least', 'some', 'must', 'been', 'proved', 'intent', 'element', 'recklessness', 'relation', 'use']
  }
];

// Offences Against the Persons Act 1861 Sections
export const offencesAgainstPersonsActSections = [
  {
    title: 'Section 24 Offences Against the Persons Act 1861',
    content: 'Whosoever shall unlawfully & maliciously administer to or cause to be administered to or taken by any other person any poison or other destructive or noxious thing, with intent to injure, aggrieve, or annoy such person, shall be guilty of an offence',
    keywords: ['Whosoever', 'shall', 'unlawfully', 'maliciously', 'administer', 'cause', 'administered', 'taken', 'other', 'person', 'poison', 'destructive', 'noxious', 'thing', 'intent', 'injure', 'aggrieve', 'annoy', 'such', 'guilty', 'offence']
  },
  {
    title: 'Section 47 Offences Against the Persons Act 1861 [ABH]',
    content: 'A person is guilty of an offence if he intentionally or recklessly uses unlawful force on another, thereby occasioning actual bodily harm',
    keywords: ['person', 'guilty', 'offence', 'intentionally', 'recklessly', 'uses', 'unlawful', 'force', 'another', 'thereby', 'occasioning', 'actual', 'bodily', 'harm']
  },
  {
    title: 'Section 38 Offences Against the Persons Act 1861 [Assault with Intent to Resist Arrest]',
    content: 'It is an offence to assault any person with intent to resist or prevent the lawful apprehension or detainer of himself or of any other person',
    keywords: ['offence', 'assault', 'any', 'person', 'with', 'intent', 'resist', 'prevent', 'lawful', 'apprehension', 'detainer', 'himself', 'other']
  }
];

// Police Act 1996 Sections
export const policeActSections = [
  {
    title: 'Section 89(1) Assault Police Police Act 1996',
    content: 'It is an offence for any person to assault or resist a police officer or any person assisting the officer in the lawful execution of his duty',
    keywords: ['offence', 'any', 'person', 'assault', 'resist', 'police', 'officer', 'assisting', 'lawful', 'execution', 'duty']
  },
  {
    title: 'Section 89(2) Obstruct Police Police Act 1996',
    content: 'It is an offence for any person to wilfully obstruct a police officer or any person assisting the officer in the lawful execution of his duty',
    keywords: ['offence', 'any', 'person', 'wilfully', 'obstruct', 'police', 'officer', 'assisting', 'lawful', 'execution', 'duty']
  }
];

// Combine all sections for question generation
export const allSections = [
  ...theftActSections,
  ...criminalDamageActSections,
  ...offencesAgainstPersonsActSections,
  ...policeActSections
];

// Filler words to exclude from being keywords
const fillerWords = [
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'of', 'to', 'in', 'on', 'at', 'by', 'for',
  'with', 'from', 'as', 'is', 'was', 'are', 'were', 'be', 'been', 'being', 'have', 'has',
  'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must',
  'can', 'shall', 'it', 'its', 'this', 'that', 'these', 'those', 'he', 'she', 'they',
  'them', 'their', 'his', 'her', 'him', 'than', 'then', 'so', 'such', 'any', 'some',
  'all', 'each', 'every', 'both', 'either', 'neither', 'not', 'no', 'nor', 'only',
  'own', 'same', 'other', 'another', 'such', 'no', 'nor', 'not', 'only', 'own', 'same',
  'so', 'than', 'too', 'very', 'just', 'where', 'when', 'who', 'which', 'what', 'how',
  'why', 'there', 'here', 'up', 'down', 'out', 'off', 'over', 'under', 'again', 'further',
  'once', 'now', 'then', 'also', 'more', 'most', 'much', 'many', 'few', 'less', 'least'
];

// Expanded pool of incorrect options for generating distractors
const incorrectOptionsPool: string[] = [
  // Common legal terms
  'knowingly', 'intentionally', 'recklessly', 'negligently', 'deliberately',
  'possesses', 'obtains', 'acquires', 'receives', 'takes', 'steals', 'appropriates',
  'property', 'goods', 'items', 'belongings', 'possessions', 'assets',
  'owner', 'possessor', 'holder', 'keeper', 'custodian', 'another',
  'permanently', 'temporarily', 'indefinitely', 'briefly', 'momentarily',
  'depriving', 'denying', 'removing', 'withholding', 'taking',
  'force', 'violence', 'coercion', 'threat', 'intimidation',
  'building', 'structure', 'premises', 'dwelling', 'property',
  'trespasser', 'intruder', 'burglar', 'thief', 'offender',
  'damage', 'destroy', 'harm', 'injure', 'hurt',
  'consent', 'permission', 'authority', 'approval', 'authorization',
  'lawful', 'legal', 'legitimate', 'authorized', 'permitted',
  'unlawful', 'illegal', 'illegitimate', 'unauthorized', 'forbidden',
  'dishonestly', 'fraudulently', 'deceitfully', 'falsely', 'wrongfully',
  'person', 'individual', 'someone', 'anybody', 'anyone',
  'vehicle', 'conveyance', 'transport', 'automobile', 'car',
  'weapon', 'firearm', 'explosive', 'device', 'instrument',
  'offence', 'crime', 'violation', 'breach', 'infringement',
  'guilty', 'liable', 'responsible', 'culpable', 'accountable',
  'intent', 'intention', 'purpose', 'aim', 'objective',
  'knowing', 'aware', 'conscious', 'cognizant', 'informed',
  'believing', 'thinking', 'supposing', 'assuming', 'presuming',
  'stolen', 'taken', 'misappropriated', 'pilfered', 'purloined',
  'assault', 'attack', 'strike', 'hit', 'beat',
  'resist', 'oppose', 'fight', 'struggle', 'combat',
  'obstruct', 'hinder', 'impede', 'block', 'prevent',
  'officer', 'constable', 'policeman', 'official', 'authority',
  'duty', 'responsibility', 'obligation', 'task', 'function',
  'fire', 'flame', 'blaze', 'combustion', 'burning',
  'arson', 'burning', 'incineration', 'ignition', 'conflagration',
  'poison', 'toxin', 'venom', 'substance', 'chemical',
  'maliciously', 'spitefully', 'vindictively', 'cruelly', 'viciously',
  'bodily', 'physical', 'corporeal', 'tangible', 'material',
  'harm', 'injury', 'hurt', 'damage', 'wound',
  'GBH', 'ABH', 'injury', 'harm', 'hurt',
  'WIFE', 'PACE', 'TWOC', 'INTENT', 'fear'
];

// Function to check if a word is a filler word
function isFillerWord(word: string): boolean {
  return fillerWords.includes(word.toLowerCase());
}

// Function to generate contextually relevant incorrect options
function generateIncorrectOptions(correctAnswer: string, allKeywords: string[]): string[] {
  const incorrect: string[] = [];
  const lowerCorrect = correctAnswer.toLowerCase();
  
  // First, try to get similar words from the same section's keywords
  const similarWords = allKeywords.filter(
    keyword => keyword.toLowerCase() !== lowerCorrect && keyword.length > 2 && !isFillerWord(keyword)
  );
  
  // Add some similar words from the section
  while (incorrect.length < 3 && similarWords.length > 0) {
    const randomIndex = Math.floor(Math.random() * similarWords.length);
    const word = similarWords.splice(randomIndex, 1)[0];
    if (!incorrect.includes(word)) {
      incorrect.push(word);
    }
  }
  
  // Fill remaining slots with words from the general pool
  const availablePool = incorrectOptionsPool.filter(
    word => word.toLowerCase() !== lowerCorrect && !incorrect.includes(word)
  );
  
  while (incorrect.length < 3 && availablePool.length > 0) {
    const randomIndex = Math.floor(Math.random() * availablePool.length);
    const word = availablePool.splice(randomIndex, 1)[0];
    if (!incorrect.includes(word)) {
      incorrect.push(word);
    }
  }
  
  // If still not enough, add some generic options
  const genericOptions = ['such', 'each', 'every', 'both', 'none', 'either', 'neither', 'several'];
  while (incorrect.length < 3) {
    const randomIndex = Math.floor(Math.random() * genericOptions.length);
    const word = genericOptions[randomIndex];
    if (word.toLowerCase() !== lowerCorrect && !incorrect.includes(word)) {
      incorrect.push(word);
    }
  }
  
  return incorrect;
}

// Function to generate a random question with blanks and multiple choice options
export function generateQuestion(): QuizQuestion | null {
  if (allSections.length === 0) {
    console.log('No sections available to generate questions');
    return null;
  }

  // Select a random section
  const section = allSections[Math.floor(Math.random() * allSections.length)];
  
  if (!section.keywords || section.keywords.length === 0) {
    console.log('No keywords available in selected section');
    return null;
  }

  // Filter out filler words from keywords
  const meaningfulKeywords = section.keywords.filter(keyword => !isFillerWord(keyword));

  if (meaningfulKeywords.length < 5) {
    console.log('Not enough meaningful keywords in section, trying another section');
    // Try to find a section with at least 5 meaningful keywords
    const validSections = allSections.filter(s => {
      const meaningful = s.keywords.filter(k => !isFillerWord(k));
      return meaningful.length >= 5;
    });
    
    if (validSections.length === 0) {
      console.log('No sections with at least 5 meaningful keywords found');
      return null;
    }
    
    const validSection = validSections[Math.floor(Math.random() * validSections.length)];
    return generateQuestionFromSection(validSection);
  }

  return generateQuestionFromSection(section);
}

function generateQuestionFromSection(section: any): QuizQuestion | null {
  // Filter out filler words from keywords
  const meaningfulKeywords = section.keywords.filter((keyword: string) => !isFillerWord(keyword));

  // Ensure we have at least 5 meaningful keywords
  const numBlanks = Math.max(5, Math.min(meaningfulKeywords.length, 7));

  // Select random keywords to blank out
  const shuffledKeywords = [...meaningfulKeywords].sort(() => Math.random() - 0.5);
  const selectedKeywords = shuffledKeywords.slice(0, numBlanks);

  // Create blanks array with positions and options
  const blanks: BlankItem[] = [];
  let modifiedText = section.content;
  const replacements: { original: string; placeholder: string; position: number }[] = [];

  selectedKeywords.forEach((keyword: string, index: number) => {
    // Find the position of the keyword in the text (case-insensitive)
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    const match = modifiedText.match(regex);
    
    if (match && match.index !== undefined) {
      const position = match.index;
      const placeholder = `___${index}___`;
      
      // Generate incorrect options
      const incorrectOptions = generateIncorrectOptions(keyword, section.keywords);
      
      // Create options array with correct answer and 3 incorrect options
      const options = [keyword, ...incorrectOptions].sort(() => Math.random() - 0.5);
      
      blanks.push({
        word: keyword,
        position: position,
        options: options,
        selectedAnswer: undefined
      });

      replacements.push({
        original: keyword,
        placeholder: placeholder,
        position: position
      });
    }
  });

  if (blanks.length < 5) {
    console.log('Could not create at least 5 blanks for this section');
    return null;
  }

  // Sort replacements by position (descending) to replace from end to start
  replacements.sort((a, b) => b.position - a.position);

  // Replace keywords with placeholders
  replacements.forEach(replacement => {
    const regex = new RegExp(`\\b${replacement.original}\\b`, 'i');
    modifiedText = modifiedText.replace(regex, replacement.placeholder);
  });

  // Sort blanks by position
  blanks.sort((a, b) => a.position - b.position);

  return {
    id: `${section.title}-${Date.now()}`,
    section: section.title.split(' ')[0],
    sectionTitle: section.title,
    text: modifiedText,
    blanks: blanks
  };
}

// Function to check if an answer is correct (case-insensitive, trimmed)
export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = userAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();
  return normalizedUser === normalizedCorrect;
}
</write file>

<write file="app/(tabs)/(home)/quiz.tsx">
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

    const parts: JSX.Element[] = [];
    let currentText = question.text;
    
    // Process each blank placeholder
    question.blanks.forEach((blank, index) => {
      const placeholder = `___${index}___`;
      const placeholderIndex = currentText.indexOf(placeholder);
      
      if (placeholderIndex !== -1) {
        // Add text before the placeholder
        if (placeholderIndex > 0) {
          const textBefore = currentText.substring(0, placeholderIndex);
          parts.push(
            <Text key={`text-${index}`} style={styles.questionText}>
              {textBefore}
            </Text>
          );
        }
        
        // Add the blank with selected answer or placeholder
        const isCorrect = checkedAnswers[index];
        const hasBeenChecked = showFeedback;
        const selectedAnswer = blank.selectedAnswer;

        parts.push(
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
        
        // Update current text to the part after the placeholder
        currentText = currentText.substring(placeholderIndex + placeholder.length);
      }
    });
    
    // Add any remaining text
    if (currentText.length > 0) {
      parts.push(
        <Text key="text-final" style={styles.questionText}>
          {currentText}
        </Text>
      );
    }

    return <View style={styles.questionContainer}>{parts}</View>;
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
