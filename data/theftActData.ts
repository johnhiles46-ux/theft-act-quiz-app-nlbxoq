
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

// Function to generate contextually relevant incorrect options
function generateIncorrectOptions(correctAnswer: string, allKeywords: string[]): string[] {
  const incorrect: string[] = [];
  const lowerCorrect = correctAnswer.toLowerCase();
  
  // First, try to get similar words from the same section's keywords
  const similarWords = allKeywords.filter(
    keyword => keyword.toLowerCase() !== lowerCorrect && keyword.length > 2
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
  const genericOptions = ['other', 'such', 'any', 'some', 'all', 'each', 'every', 'both'];
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

  // Determine how many blanks to create (1-3 blanks)
  const numBlanks = Math.min(
    Math.floor(Math.random() * 3) + 1,
    section.keywords.length
  );

  // Select random keywords to blank out
  const shuffledKeywords = [...section.keywords].sort(() => Math.random() - 0.5);
  const selectedKeywords = shuffledKeywords.slice(0, numBlanks);

  // Create blanks array with positions and options
  const blanks: BlankItem[] = [];
  let modifiedText = section.content;

  selectedKeywords.forEach((keyword) => {
    // Find the position of the keyword in the text (case-insensitive)
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    const match = modifiedText.match(regex);
    
    if (match && match.index !== undefined) {
      const position = match.index;
      
      // Generate incorrect options
      const incorrectOptions = generateIncorrectOptions(keyword, section.keywords);
      
      // Create options array with correct answer and 3 incorrect options
      const options = [keyword, ...incorrectOptions].sort(() => Math.random() - 0.5);
      
      blanks.push({
        word: keyword,
        position: position,
        options: options
      });

      // Replace the keyword with a blank placeholder
      modifiedText = modifiedText.replace(regex, '______');
    }
  });

  if (blanks.length === 0) {
    console.log('No blanks could be created for this section');
    return null;
  }

  // Sort blanks by position
  blanks.sort((a, b) => a.position - b.position);

  return {
    id: `${section.title}-${Date.now()}`,
    section: section.title.split(' ')[0], // e.g., "Section"
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
