
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
    title: 'Section 12(5) Taking a Pedal Cycle',
    content: 'A person shall be guilty of the offence if without the consent of the owner or other lawful authority, they take a pedal cycle for their own or anothers use OR rides a pedal cycle knowing it to have been taken without such authority',
    keywords: ['guilty', 'offence', 'without', 'consent', 'owner', 'lawful', 'authority', 'take', 'pedal', 'cycle', 'their', 'own', 'anothers', 'use', 'rides', 'knowing', 'taken', 'such']
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
  },
  {
    title: 'Section 25 Going Equipped',
    content: 'A person shall be guilty of an offence if when not at their place of abode, they have with them any article for use in the course of or in connection with any burglary or theft',
    keywords: ['guilty', 'offence', 'when', 'not', 'their', 'place', 'abode', 'have', 'with', 'them', 'any', 'article', 'use', 'course', 'connection', 'burglary', 'theft']
  }
];

// Criminal Damage Act 1971 Sections
export const criminalDamageActSections = [
  {
    title: 'Section 1(1) Criminal Damage',
    content: 'A person who without lawful excuse destroys or damages any property belonging to another intending to destroy or damage such property or being reckless as to whether any such property would be destroyed or damaged shall be guilty of an offence',
    keywords: ['without', 'lawful', 'excuse', 'destroys', 'damages', 'property', 'belonging', 'another', 'intending', 'destroy', 'damage', 'reckless', 'whether', 'destroyed', 'damaged', 'guilty', 'offence']
  },
  {
    title: 'Section 1(2) Criminal Damage, Endangering another\'s life',
    content: 'A person without lawful excuse destroys or damages any property whether belonging to themselves or another: (a) Intending to destroy or damage any property or being reckless as to whether any property would be destroyed or damaged (b) Intending by the destruction or damage to endanger the life of another or being reckless as to whether the life of another would be thereby endangered',
    keywords: ['without', 'lawful', 'excuse', 'destroys', 'damages', 'property', 'whether', 'belonging', 'themselves', 'another', 'Intending', 'destroy', 'damage', 'reckless', 'destroyed', 'damaged', 'destruction', 'endanger', 'life', 'endangered']
  },
  {
    title: 'Section 1(3) Arson',
    content: 'If the damage or destruction is caused by fire, then the offence of Arson (under section 1(3)) should be charged',
    keywords: ['damage', 'destruction', 'caused', 'fire', 'offence', 'Arson', 'section', 'charged']
  },
  {
    title: 'Section 2 Threats to Destroy or Damage Property',
    content: 'A person who without lawful excuse makes to another a threat, intending that the other would fear it would be carried out: (a) To destroy or damage any property belonging to that other or a third person (b) To destroy or damage their own property in a way which they know is likely to endanger the life of that other or a third person',
    keywords: ['without', 'lawful', 'excuse', 'makes', 'another', 'threat', 'intending', 'fear', 'carried', 'destroy', 'damage', 'property', 'belonging', 'third', 'person', 'own', 'know', 'likely', 'endanger', 'life']
  },
  {
    title: 'Section 3 Possessing an article with intent to cause Criminal Damage',
    content: 'A person who has an article in their custody or under their control intending without lawful excuse, to use it or cause or permit another to use it (a) To destroy or damage any property belonging to another person (b) To destroy or damage their own or the user\'s property in a way which they know is likely to endanger the life of some other person',
    keywords: ['person', 'article', 'custody', 'control', 'intending', 'without', 'lawful', 'excuse', 'use', 'cause', 'permit', 'another', 'destroy', 'damage', 'property', 'belonging', 'own', 'user', 'know', 'likely', 'endanger', 'life', 'some']
  }
];

// Criminal Attempts Act 1981 Sections
export const criminalAttemptsActSections = [
  {
    title: 'S1 Criminal Attempts',
    content: 'If, with intent to commit an offence to which this section applies, a person does an act which is more than merely preparatory to the commission of the offence, they are guilty of attempting to commit the offence',
    keywords: ['intent', 'commit', 'offence', 'which', 'section', 'applies', 'person', 'does', 'act', 'more', 'than', 'merely', 'preparatory', 'commission', 'guilty', 'attempting']
  },
  {
    title: 'S9 Vehicle Interference',
    content: 'A person is guilty of vehicle interference if they: Interfere with a motor vehicle or trailer or with anything carried in or on a MV or trailer, with the intention that one of the following offences shall be committed by themselves or another person: a. Theft of a MV or trailer or part of it b. Theft of anything carried in or on the MV or trailer c. An offence under S12 (1) of the theft act (TWOC)',
    keywords: ['guilty', 'vehicle', 'interference', 'Interfere', 'motor', 'trailer', 'anything', 'carried', 'MV', 'intention', 'following', 'offences', 'committed', 'themselves', 'another', 'person', 'Theft', 'part', 'S12', 'theft', 'act', 'TWOC']
  }
];

// Offences Against the Persons Act 1861 Sections
export const offencesAgainstPersonsActSections = [
  {
    title: 'Section 24 Offences Against the Persons Act 1861 (Basically spiking)',
    content: 'Whosoever shall unlawfully & maliciously administer to or cause to be administered to, or taken by any other person, any poison or other destructive or noxious thing, with intent to injure, aggrieve, or annoy such person, shall be guilty of an offence',
    keywords: ['Whosoever', 'shall', 'unlawfully', 'maliciously', 'administer', 'cause', 'administered', 'taken', 'other', 'person', 'poison', 'destructive', 'noxious', 'thing', 'intent', 'injure', 'aggrieve', 'annoy', 'such', 'guilty', 'offence']
  },
  {
    title: 'Section 47 Offences Against the Persons Act 1861 [ABH]',
    content: 'A person is guilty of an offence if they intentionally or recklessly uses unlawful force on another, thereby occasioning them actual bodily harm. Any hurt or injury calculated to interfere with a person\'s health or comfort & includes physical harm or shock & mental injury',
    keywords: ['person', 'guilty', 'offence', 'intentionally', 'recklessly', 'uses', 'unlawful', 'force', 'another', 'thereby', 'occasioning', 'actual', 'bodily', 'harm', 'hurt', 'injury', 'calculated', 'interfere', 'health', 'comfort', 'includes', 'physical', 'shock', 'mental']
  },
  {
    title: 'Section 20 Offences Against the Person Act 1861 [GBH]',
    content: 'Whomever shall unlawfully & maliciously wound or inflict any grievous bodily harm upon any other person. Either with or without any weapon or instrument shall be guilty of an offence',
    keywords: ['Whomever', 'shall', 'unlawfully', 'maliciously', 'wound', 'inflict', 'grievous', 'bodily', 'harm', 'upon', 'other', 'person', 'either', 'without', 'weapon', 'instrument', 'guilty', 'offence']
  },
  {
    title: 'Section 18 Offences Against the Person Act 1861 [GBH with intent]',
    content: 'Whomoever shall unlawfully & maliciously by any means whatsoever wound or cause any grievous bodily harm to any person, with INTENT to do some grievous bodily harm to any person, OR with intent to resist or prevent the lawful apprehension or detainer of any person shall be guilty of an offence',
    keywords: ['Whomoever', 'shall', 'unlawfully', 'maliciously', 'means', 'whatsoever', 'wound', 'cause', 'grievous', 'bodily', 'harm', 'person', 'INTENT', 'some', 'intent', 'resist', 'prevent', 'lawful', 'apprehension', 'detainer', 'guilty', 'offence']
  },
  {
    title: 'Section 38 Offences Against the Persons Act 1861 [Assault with Intent to Resist Arrest]',
    content: 'It is an offence to assault any person with intent to resist or prevent the lawful apprehension or detainer of himself or of any other person',
    keywords: ['offence', 'assault', 'any', 'person', 'with', 'intent', 'resist', 'prevent', 'lawful', 'apprehension', 'detainer', 'himself', 'other']
  }
];

// Criminal Justice Act 1988 Sections
export const criminalJusticeActSections = [
  {
    title: 'Section 39 Criminal Justice Act 1988 (Common Assault/Battery)',
    content: 'Common Assault: Any act which a person intentionally or recklessly causes another person to apprehend immediate and unlawful personal violence. Battery: A person is guilty of battery if they intentionally or recklessly apply unlawful force on another person',
    keywords: ['Common', 'Assault', 'act', 'person', 'intentionally', 'recklessly', 'causes', 'another', 'apprehend', 'immediate', 'unlawful', 'personal', 'violence', 'Battery', 'guilty', 'battery', 'apply', 'force']
  }
];

// Emergency Workers (Obstruction) Act 2006 Sections
export const emergencyWorkersActSections = [
  {
    title: 'S1 Emergency Workers (Obstruction Act 2006) - Obstructing emergency workers',
    content: 'Obstruction or hindering emergency workers responding to an emergency: A person who without reasonable excuse obstructs or hinders an emergency worker, responding to emergency circumstance, commits an offence',
    keywords: ['Obstruction', 'hindering', 'emergency', 'workers', 'responding', 'person', 'without', 'reasonable', 'excuse', 'obstructs', 'hinders', 'worker', 'circumstance', 'commits', 'offence']
  },
  {
    title: 'S2 Emergency Workers (Obstruction Act 2006) - Obstructing person assisting emergency workers',
    content: 'A person who without reasonable excuse obstructs or hinders another in assisting an emergency worker',
    keywords: ['person', 'without', 'reasonable', 'excuse', 'obstructs', 'hinders', 'another', 'assisting', 'emergency', 'worker']
  }
];

// Police Act 1996 Sections
export const policeActSections = [
  {
    title: 'Section 89(1) Assault Police Police Act 1996',
    content: 'It is an offence for any person to assault or resist a police officer or any person assisting the officer in their lawful execution of their duty',
    keywords: ['offence', 'any', 'person', 'assault', 'resist', 'police', 'officer', 'assisting', 'their', 'lawful', 'execution', 'duty']
  },
  {
    title: 'Section 89(2) Obstruct Police Police Act 1996',
    content: 'It is an offence for any person to wilfully obstruct a police officer or any person assisting the officer in the lawful execution of their duty',
    keywords: ['offence', 'any', 'person', 'wilfully', 'obstruct', 'police', 'officer', 'assisting', 'lawful', 'execution', 'their', 'duty']
  }
];

// Public Order Act 1986 Sections
export const publicOrderActSections = [
  {
    title: 'S1 Riot Public Order Act 1986',
    content: 'Where 12 or more persons who are present together use or threatens unlawful violence for a common purpose and the conduct of them (taken together) is such as would cause a person of reasonable firmness present at the scene to fear for his personal safety, each of the persons using unlawful violence for the common purpose is guilty of riot',
    keywords: ['Where', 'more', 'persons', 'present', 'together', 'use', 'threatens', 'unlawful', 'violence', 'common', 'purpose', 'conduct', 'taken', 'such', 'would', 'cause', 'person', 'reasonable', 'firmness', 'scene', 'fear', 'personal', 'safety', 'each', 'using', 'guilty', 'riot']
  }
];

// Combine all sections for question generation
export const allSections = [
  ...theftActSections,
  ...criminalDamageActSections,
  ...criminalAttemptsActSections,
  ...offencesAgainstPersonsActSections,
  ...criminalJusticeActSections,
  ...emergencyWorkersActSections,
  ...policeActSections,
  ...publicOrderActSections
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
  'WIFE', 'PACE', 'TWOC', 'INTENT', 'fear',
  'emergency', 'worker', 'responding', 'circumstance', 'obstructs',
  'hinders', 'reasonable', 'excuse', 'violence', 'riot',
  'threatens', 'common', 'purpose', 'firmness', 'safety',
  'apprehend', 'immediate', 'personal', 'battery', 'calculated',
  'interfere', 'comfort', 'shock', 'mental', 'grievous',
  'wound', 'inflict', 'whatsoever', 'detainer', 'endanger',
  'custody', 'control', 'permit', 'article', 'noxious',
  'destructive', 'aggrieve', 'annoy', 'spiking', 'preparatory',
  'commission', 'attempting', 'interference', 'Interfere', 'motor',
  'trailer', 'MV', 'pedal', 'cycle', 'abode', 'equipped',
  'diverted', 'wasted', 'retention', 'realisation', 'arranges'
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

  if (meaningfulKeywords.length < 6) {
    console.log('Not enough meaningful keywords in section, trying another section');
    // Try to find a section with at least 6 meaningful keywords
    const validSections = allSections.filter(s => {
      const meaningful = s.keywords.filter(k => !isFillerWord(k));
      return meaningful.length >= 6;
    });
    
    if (validSections.length === 0) {
      console.log('No sections with at least 6 meaningful keywords found');
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

  // Ensure we have exactly 6 keywords (or as close as possible)
  const numBlanks = Math.min(meaningfulKeywords.length, 6);

  if (numBlanks < 6) {
    console.log(`Section only has ${numBlanks} meaningful keywords, need 6`);
    return null;
  }

  // Select exactly 6 random keywords to blank out
  const shuffledKeywords = [...meaningfulKeywords].sort(() => Math.random() - 0.5);
  const selectedKeywords = shuffledKeywords.slice(0, 6);

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

  if (blanks.length < 6) {
    console.log('Could not create exactly 6 blanks for this section');
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

  console.log(`Generated question with exactly ${blanks.length} blanks`);

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
