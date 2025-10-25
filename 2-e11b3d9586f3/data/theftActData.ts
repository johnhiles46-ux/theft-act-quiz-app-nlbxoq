
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
    title: 'Section 1(1) Theft Act 1968',
    content: 'A person is guilty of theft if they dishonestly appropriate property belonging to another, with the intention of permanently depriving the other of it.',
    keywords: ['dishonestly', 'appropriate', 'property', 'belonging', 'another', 'intention', 'permanently', 'depriving']
  },
  {
    title: 'Section 8 Robbery - Theft Act 1968',
    content: 'A person commits robbery if they steal, and immediately before doing so, or at the time of doing so, and in order to do so, they use force on any person, or put, or seek to put, any person in fear of being then and there subjected to force.',
    keywords: ['commits', 'robbery', 'steal', 'immediately', 'before', 'time', 'order', 'use', 'force', 'person', 'put', 'seek', 'fear', 'subjected']
  },
  {
    title: 'Section 9(1)(a) Burglary - Theft Act 1968',
    content: 'A person is guilty of burglary if they enter a building, or part of a building, as a trespasser, with intent to steal anything therein, inflict grievous bodily harm on any person therein, or damage property therein.',
    keywords: ['guilty', 'burglary', 'enter', 'building', 'part', 'trespasser', 'intent', 'steal', 'anything', 'therein', 'inflict', 'grievous', 'bodily', 'harm', 'damage', 'property']
  },
  {
    title: 'Section 9(1)(b) Burglary - Theft Act 1968',
    content: 'A person is guilty of burglary if, having entered any building, or part of a building, as a trespasser, they then steal, or attempt to steal, anything therein, or inflict, or attempt to inflict, grievous bodily harm on any person therein.',
    keywords: ['guilty', 'burglary', 'having', 'entered', 'building', 'part', 'trespasser', 'then', 'steal', 'attempt', 'anything', 'therein', 'inflict', 'grievous', 'bodily', 'harm']
  },
  {
    title: 'Section 10 Aggravated Burglary - Theft Act 1968',
    content: 'A person is guilty of aggravated burglary if they commit any burglary, and at the time has with them a weapon of offence, imitation firearm, firearm, or explosive.',
    keywords: ['guilty', 'aggravated', 'burglary', 'commit', 'time', 'has', 'with', 'them', 'weapon', 'offence', 'imitation', 'firearm', 'explosive']
  },
  {
    title: 'Section 12 TWOC - Theft Act 1968',
    content: 'A person shall be guilty of an offence if, without the consent of the owner or other lawful authority, they take any conveyance for their own or another\'s use, or, knowing that any conveyance has been taken without such authority, they drive it, or allow themselves to be carried in or on it.',
    keywords: ['guilty', 'offence', 'without', 'consent', 'owner', 'lawful', 'authority', 'take', 'conveyance', 'their', 'own', 'another', 'use', 'knowing', 'taken', 'such', 'drive', 'allow', 'themselves', 'carried']
  },
  {
    title: 'Section 12A Aggravated TWOC - Theft Act 1968',
    content: 'A person is guilty of aggravated taking of a vehicle if they commit an offence under section 12(1) in relation to a mechanically propelled vehicle, and it is proved that, at any time after the vehicle was unlawfully taken, whether by them or another, and before it was recovered, the vehicle was driven dangerously on a road or other public place.',
    keywords: ['guilty', 'aggravated', 'taking', 'vehicle', 'commit', 'offence', 'section', 'relation', 'mechanically', 'propelled', 'proved', 'time', 'after', 'unlawfully', 'taken', 'whether', 'them', 'another', 'before', 'recovered', 'driven', 'dangerously', 'road', 'public', 'place']
  },
  {
    title: 'Section 12(5) Taking a Pedal Cycle - Theft Act 1968',
    content: 'A person shall be guilty of an offence if, without the consent of the owner or other lawful authority, they take a pedal cycle for their own or another\'s use, or ride a pedal cycle, knowing it to have been taken without such authority.',
    keywords: ['guilty', 'offence', 'without', 'consent', 'owner', 'lawful', 'authority', 'take', 'pedal', 'cycle', 'their', 'own', 'another', 'use', 'ride', 'knowing', 'taken', 'such']
  },
  {
    title: 'Section 13 Abstracting Electricity - Theft Act 1968',
    content: 'A person is guilty of an offence if they dishonestly use electricity without due authority, or dishonestly cause it to be wasted or diverted.',
    keywords: ['guilty', 'offence', 'dishonestly', 'use', 'electricity', 'without', 'due', 'authority', 'cause', 'wasted', 'diverted']
  },
  {
    title: 'Section 22 Handling Stolen Goods - Theft Act 1968',
    content: 'A person is guilty of an offence if, otherwise than in the course of the stealing, knowing or believing them to be stolen goods, they dishonestly receive the goods, or dishonestly undertake or assist in their retention, removal, disposal, or realisation by or for the benefit of another person, or if they arrange to do so.',
    keywords: ['guilty', 'offence', 'otherwise', 'course', 'stealing', 'knowing', 'believing', 'stolen', 'goods', 'dishonestly', 'receive', 'undertake', 'assist', 'retention', 'removal', 'disposal', 'realisation', 'benefit', 'another', 'person', 'arrange']
  },
  {
    title: 'Section 25 Going Equipped - Theft Act 1968',
    content: 'A person shall be guilty of an offence if, when not at their place of abode, they have with them any article for use in the course of, or in connection with, any burglary or theft.',
    keywords: ['guilty', 'offence', 'when', 'not', 'their', 'place', 'abode', 'have', 'with', 'them', 'any', 'article', 'use', 'course', 'connection', 'burglary', 'theft']
  }
];

// Criminal Damage Act 1971 Sections
export const criminalDamageActSections = [
  {
    title: 'Section 1(1) Criminal Damage - Criminal Damage Act 1971',
    content: 'A person who, without lawful excuse, destroys or damages any property belonging to another, intending to destroy or damage such property, or being reckless as to whether any such property would be destroyed or damaged, shall be guilty of an offence.',
    keywords: ['without', 'lawful', 'excuse', 'destroys', 'damages', 'property', 'belonging', 'another', 'intending', 'destroy', 'damage', 'reckless', 'whether', 'destroyed', 'damaged', 'guilty', 'offence']
  },
  {
    title: 'Section 1(2) Criminal Damage Endangering Life - Criminal Damage Act 1971',
    content: 'A person who, without lawful excuse, destroys or damages any property, whether belonging to themselves or another, intending to destroy or damage any property, or being reckless as to whether any property would be destroyed or damaged, and intending by the destruction or damage to endanger the life of another, or being reckless as to whether the life of another would be thereby endangered, shall be guilty of an offence.',
    keywords: ['without', 'lawful', 'excuse', 'destroys', 'damages', 'property', 'whether', 'belonging', 'themselves', 'another', 'intending', 'destroy', 'damage', 'reckless', 'destroyed', 'damaged', 'destruction', 'endanger', 'life', 'endangered', 'guilty', 'offence']
  },
  {
    title: 'Section 1(3) Arson - Criminal Damage Act 1971',
    content: 'An offence committed under section 1(1), or section 1(2), by destroying or damaging property by fire, shall be charged as arson.',
    keywords: ['offence', 'committed', 'section', 'destroying', 'damaging', 'property', 'fire', 'charged', 'arson']
  },
  {
    title: 'Section 2 Threats to Destroy or Damage Property - Criminal Damage Act 1971',
    content: 'A person who, without lawful excuse, makes to another a threat, intending that the other would fear it would be carried out, to destroy or damage any property belonging to that other or a third person, or to destroy or damage their own property in a way which they know is likely to endanger the life of that other or a third person, shall be guilty of an offence.',
    keywords: ['without', 'lawful', 'excuse', 'makes', 'another', 'threat', 'intending', 'fear', 'carried', 'out', 'destroy', 'damage', 'property', 'belonging', 'third', 'person', 'own', 'know', 'likely', 'endanger', 'life', 'guilty', 'offence']
  },
  {
    title: 'Section 3 Possessing Article with Intent - Criminal Damage Act 1971',
    content: 'A person who has anything in their custody or under their control, intending without lawful excuse to use it, or cause or permit another to use it, to destroy or damage any property belonging to some other person, or to destroy or damage their own or the user\'s property in a way which they know is likely to endanger the life of some other person, shall be guilty of an offence.',
    keywords: ['person', 'anything', 'custody', 'control', 'intending', 'without', 'lawful', 'excuse', 'use', 'cause', 'permit', 'another', 'destroy', 'damage', 'property', 'belonging', 'some', 'other', 'own', 'user', 'know', 'likely', 'endanger', 'life', 'guilty', 'offence']
  }
];

// Criminal Attempts Act 1981 Sections
export const criminalAttemptsActSections = [
  {
    title: 'Section 1 Criminal Attempts - Criminal Attempts Act 1981',
    content: 'If, with intent to commit an offence to which this section applies, a person does an act which is more than merely preparatory to the commission of the offence, they are guilty of attempting to commit the offence.',
    keywords: ['intent', 'commit', 'offence', 'which', 'section', 'applies', 'person', 'does', 'act', 'more', 'than', 'merely', 'preparatory', 'commission', 'guilty', 'attempting']
  },
  {
    title: 'Section 9 Vehicle Interference - Criminal Attempts Act 1981',
    content: 'A person is guilty of vehicle interference if they interfere with a motor vehicle or trailer, or with anything carried in or on a motor vehicle or trailer, with the intention that an offence of theft of the motor vehicle or trailer, or part of it, or theft of anything carried in or on the motor vehicle or trailer, or an offence under section 12(1) of the Theft Act 1968, shall be committed by themselves or some other person.',
    keywords: ['guilty', 'vehicle', 'interference', 'interfere', 'motor', 'trailer', 'anything', 'carried', 'intention', 'offence', 'theft', 'part', 'section', 'Theft', 'Act', 'committed', 'themselves', 'some', 'other', 'person']
  }
];

// Offences Against the Persons Act 1861 Sections
export const offencesAgainstPersonsActSections = [
  {
    title: 'Section 18 GBH with Intent - Offences Against the Person Act 1861',
    content: 'Whosoever shall unlawfully and maliciously, by any means whatsoever, wound or cause any grievous bodily harm to any person, with intent to do some grievous bodily harm to any person, or with intent to resist or prevent the lawful apprehension or detainer of any person, shall be guilty of an offence.',
    keywords: ['Whosoever', 'shall', 'unlawfully', 'maliciously', 'means', 'whatsoever', 'wound', 'cause', 'grievous', 'bodily', 'harm', 'person', 'intent', 'some', 'resist', 'prevent', 'lawful', 'apprehension', 'detainer', 'guilty', 'offence']
  },
  {
    title: 'Section 20 GBH - Offences Against the Person Act 1861',
    content: 'Whosoever shall unlawfully and maliciously wound, or inflict any grievous bodily harm upon any other person, either with or without any weapon or instrument, shall be guilty of an offence.',
    keywords: ['Whosoever', 'shall', 'unlawfully', 'maliciously', 'wound', 'inflict', 'grievous', 'bodily', 'harm', 'upon', 'other', 'person', 'either', 'with', 'without', 'weapon', 'instrument', 'guilty', 'offence']
  },
  {
    title: 'Section 24 Administering Poison - Offences Against the Person Act 1861',
    content: 'Whosoever shall unlawfully and maliciously administer to, or cause to be administered to, or taken by, any other person, any poison or other destructive or noxious thing, with intent to injure, aggrieve, or annoy such person, shall be guilty of an offence.',
    keywords: ['Whosoever', 'shall', 'unlawfully', 'maliciously', 'administer', 'cause', 'administered', 'taken', 'other', 'person', 'poison', 'destructive', 'noxious', 'thing', 'intent', 'injure', 'aggrieve', 'annoy', 'such', 'guilty', 'offence']
  },
  {
    title: 'Section 38 Assault with Intent to Resist Arrest - Offences Against the Person Act 1861',
    content: 'Whosoever shall assault any person, with intent to resist or prevent the lawful apprehension or detainer of himself, or of any other person, for any offence, shall be guilty of an offence.',
    keywords: ['Whosoever', 'shall', 'assault', 'person', 'intent', 'resist', 'prevent', 'lawful', 'apprehension', 'detainer', 'himself', 'other', 'offence', 'guilty']
  },
  {
    title: 'Section 47 ABH - Offences Against the Person Act 1861',
    content: 'Whosoever shall be convicted of any assault occasioning actual bodily harm shall be guilty of an offence. Actual bodily harm means any hurt or injury calculated to interfere with the health or comfort of the victim, and includes physical harm, shock, and psychiatric injury.',
    keywords: ['Whosoever', 'shall', 'convicted', 'assault', 'occasioning', 'actual', 'bodily', 'harm', 'guilty', 'offence', 'hurt', 'injury', 'calculated', 'interfere', 'health', 'comfort', 'victim', 'includes', 'physical', 'shock', 'psychiatric']
  }
];

// Criminal Justice Act 1988 Sections
export const criminalJusticeActSections = [
  {
    title: 'Section 39 Common Assault and Battery - Criminal Justice Act 1988',
    content: 'Common assault is committed when a person intentionally or recklessly causes another person to apprehend immediate and unlawful personal violence. Battery is committed when a person intentionally or recklessly applies unlawful force to another person.',
    keywords: ['Common', 'assault', 'committed', 'person', 'intentionally', 'recklessly', 'causes', 'another', 'apprehend', 'immediate', 'unlawful', 'personal', 'violence', 'Battery', 'applies', 'force']
  },
  {
    title: 'Section 139 Bladed or Sharply Pointed Articles - Criminal Justice Act 1988',
    content: 'Any person who has an article, to which this section applies, with them in a public place, shall be guilty of an offence. This section applies to any article which has a blade or is sharply pointed, except a folding pocketknife with a blade not exceeding three inches.',
    keywords: ['person', 'article', 'section', 'applies', 'with', 'them', 'public', 'place', 'guilty', 'offence', 'blade', 'sharply', 'pointed', 'except', 'folding', 'pocketknife', 'exceeding', 'three', 'inches']
  }
];

// Emergency Workers (Obstruction) Act 2006 Sections
export const emergencyWorkersActSections = [
  {
    title: 'Section 1 Obstructing Emergency Workers - Emergency Workers Act 2006',
    content: 'A person commits an offence if they, without reasonable excuse, obstruct or hinder a person who is, in a capacity mentioned in subsection (2), assisting an emergency worker responding to emergency circumstances.',
    keywords: ['person', 'commits', 'offence', 'without', 'reasonable', 'excuse', 'obstruct', 'hinder', 'capacity', 'mentioned', 'subsection', 'assisting', 'emergency', 'worker', 'responding', 'circumstances']
  },
  {
    title: 'Section 2 Obstructing Person Assisting Emergency Workers - Emergency Workers Act 2006',
    content: 'A person commits an offence if they, without reasonable excuse, obstruct or hinder a person who is assisting an emergency worker responding to emergency circumstances.',
    keywords: ['person', 'commits', 'offence', 'without', 'reasonable', 'excuse', 'obstruct', 'hinder', 'assisting', 'emergency', 'worker', 'responding', 'circumstances']
  }
];

// Police Act 1996 Sections
export const policeActSections = [
  {
    title: 'Section 89(1) Assault on Police - Police Act 1996',
    content: 'Any person who assaults a constable in the execution of their duty, or a person assisting a constable in the execution of their duty, shall be guilty of an offence.',
    keywords: ['person', 'assaults', 'constable', 'execution', 'duty', 'assisting', 'guilty', 'offence']
  },
  {
    title: 'Section 89(2) Obstruct Police - Police Act 1996',
    content: 'Any person who resists or wilfully obstructs a constable in the execution of their duty, or a person assisting a constable in the execution of their duty, shall be guilty of an offence.',
    keywords: ['person', 'resists', 'wilfully', 'obstructs', 'constable', 'execution', 'duty', 'assisting', 'guilty', 'offence']
  }
];

// PACE 1984 Sections
export const paceActSections = [
  {
    title: 'Section 24(1) Powers of Arrest - PACE 1984',
    content: 'A constable may arrest without a warrant anyone who is about to commit an offence, anyone who is in the act of committing an offence, anyone whom they have reasonable grounds for suspecting to be about to commit an offence, or anyone whom they have reasonable grounds for suspecting to be committing an offence.',
    keywords: ['constable', 'arrest', 'without', 'warrant', 'anyone', 'about', 'commit', 'offence', 'act', 'committing', 'whom', 'they', 'have', 'reasonable', 'grounds', 'suspecting']
  },
  {
    title: 'Section 24(2) Powers of Arrest - PACE 1984',
    content: 'If a constable has reasonable grounds for suspecting that an offence has been committed, they may arrest without a warrant anyone whom they have reasonable grounds to suspect of being guilty of it.',
    keywords: ['constable', 'reasonable', 'grounds', 'suspecting', 'offence', 'committed', 'arrest', 'without', 'warrant', 'anyone', 'whom', 'they', 'suspect', 'guilty']
  },
  {
    title: 'Section 32(1) Search upon Arrest - PACE 1984',
    content: 'A constable may search an arrested person, in any case where the person to be searched has been arrested at a place other than a police station, if the constable has reasonable grounds for believing that the arrested person may present a danger to themselves or others.',
    keywords: ['constable', 'search', 'arrested', 'person', 'case', 'where', 'place', 'other', 'than', 'police', 'station', 'reasonable', 'grounds', 'believing', 'present', 'danger', 'themselves', 'others']
  },
  {
    title: 'Section 32(2) Enter and Search Premises - PACE 1984',
    content: 'A constable may enter and search any premises in which the person was when arrested, or immediately before they were arrested, for evidence relating to the offence for which they have been arrested.',
    keywords: ['constable', 'enter', 'search', 'premises', 'person', 'when', 'arrested', 'immediately', 'before', 'they', 'were', 'evidence', 'relating', 'offence', 'which', 'have', 'been']
  }
];

// Prevention of Crime Act 1953 Sections
export const preventionOfCrimeActSections = [
  {
    title: 'Section 1 Offensive Weapon in Public - Prevention of Crime Act 1953',
    content: 'Any person who, without lawful authority or reasonable excuse, has with them in any public place any offensive weapon, shall be guilty of an offence.',
    keywords: ['person', 'without', 'lawful', 'authority', 'reasonable', 'excuse', 'has', 'with', 'them', 'any', 'public', 'place', 'offensive', 'weapon', 'guilty', 'offence']
  }
];

// Public Order Act 1986 Sections
export const publicOrderActSections = [
  {
    title: 'Section 1 Riot - Public Order Act 1986',
    content: 'Where twelve or more persons who are present together use or threaten unlawful violence for a common purpose, and the conduct of them, taken together, is such as would cause a person of reasonable firmness present at the scene to fear for their personal safety, each of the persons using unlawful violence for the common purpose is guilty of riot.',
    keywords: ['twelve', 'more', 'persons', 'present', 'together', 'use', 'threaten', 'unlawful', 'violence', 'common', 'purpose', 'conduct', 'taken', 'such', 'would', 'cause', 'person', 'reasonable', 'firmness', 'scene', 'fear', 'their', 'personal', 'safety', 'each', 'using', 'guilty', 'riot']
  },
  {
    title: 'Section 2 Violent Disorder - Public Order Act 1986',
    content: 'Where three or more persons who are present together use or threaten unlawful violence, and the conduct of them, taken together, is such as would cause a person of reasonable firmness present at the scene to fear for their personal safety, each of the persons using or threatening unlawful violence is guilty of violent disorder.',
    keywords: ['three', 'more', 'persons', 'present', 'together', 'use', 'threaten', 'unlawful', 'violence', 'conduct', 'taken', 'such', 'would', 'cause', 'person', 'reasonable', 'firmness', 'scene', 'fear', 'their', 'personal', 'safety', 'each', 'using', 'threatening', 'guilty', 'violent', 'disorder']
  },
  {
    title: 'Section 3 Affray - Public Order Act 1986',
    content: 'A person is guilty of affray if they use or threaten unlawful violence towards another, and their conduct is such as would cause a person of reasonable firmness present at the scene to fear for their personal safety.',
    keywords: ['person', 'guilty', 'affray', 'use', 'threaten', 'unlawful', 'violence', 'towards', 'another', 'their', 'conduct', 'such', 'would', 'cause', 'reasonable', 'firmness', 'present', 'scene', 'fear', 'personal', 'safety']
  },
  {
    title: 'Section 4 Fear or Provocation of Violence - Public Order Act 1986',
    content: 'A person is guilty of an offence if they use towards another person threatening, abusive, or insulting words or behaviour, or distribute or display to another person any writing, sign, or other visible representation which is threatening, abusive, or insulting, with intent to cause that person to believe that immediate unlawful violence will be used against them or another by any person, or to provoke the immediate use of unlawful violence by that person or another, or whereby that person is likely to believe that such violence will be used, or it is likely that such violence will be provoked.',
    keywords: ['person', 'guilty', 'offence', 'use', 'towards', 'another', 'threatening', 'abusive', 'insulting', 'words', 'behaviour', 'distribute', 'display', 'writing', 'sign', 'visible', 'representation', 'intent', 'cause', 'believe', 'immediate', 'unlawful', 'violence', 'used', 'against', 'them', 'provoke', 'whereby', 'likely', 'provoked']
  },
  {
    title: 'Section 4A Intentional Harassment, Alarm, or Distress - Public Order Act 1986',
    content: 'A person is guilty of an offence if, with intent to cause a person harassment, alarm, or distress, they use threatening, abusive, or insulting words or behaviour, or disorderly behaviour, or display any writing, sign, or other visible representation which is threatening, abusive, or insulting, thereby causing that or another person harassment, alarm, or distress.',
    keywords: ['person', 'guilty', 'offence', 'intent', 'cause', 'harassment', 'alarm', 'distress', 'use', 'threatening', 'abusive', 'insulting', 'words', 'behaviour', 'disorderly', 'display', 'writing', 'sign', 'visible', 'representation', 'thereby', 'causing', 'another']
  },
  {
    title: 'Section 4B Protection from Harassment in Public - Public Order Act 1986',
    content: 'A person commits an offence if they commit an offence under section 4A, and they carried out the conduct referred to in section 4A(1) because of the relevant person\'s sex, or presumed sex.',
    keywords: ['person', 'commits', 'offence', 'section', 'carried', 'out', 'conduct', 'referred', 'because', 'relevant', 'sex', 'presumed']
  },
  {
    title: 'Section 5 Disorderly Conduct - Public Order Act 1986',
    content: 'A person is guilty of an offence if they use threatening or abusive words or behaviour, or disorderly behaviour, within the hearing or sight of a person likely to be caused harassment, alarm, or distress thereby, or display any writing, sign, or other visible representation which is threatening or abusive, within the sight of a person likely to be caused harassment, alarm, or distress thereby.',
    keywords: ['person', 'guilty', 'offence', 'use', 'threatening', 'abusive', 'words', 'behaviour', 'disorderly', 'within', 'hearing', 'sight', 'likely', 'caused', 'harassment', 'alarm', 'distress', 'thereby', 'display', 'writing', 'sign', 'visible', 'representation']
  }
];

// Common Law Offences
export const commonLawOffences = [
  {
    title: 'Breach of the Peace - Common Law',
    content: 'A breach of the peace is committed whenever harm is actually done, or is likely to be done, to a person, or in their presence to their property, or a person is in fear of being so harmed through an assault, affray, riot, unlawful assembly, or other disturbance.',
    keywords: ['breach', 'peace', 'committed', 'whenever', 'harm', 'actually', 'done', 'likely', 'person', 'their', 'presence', 'property', 'fear', 'being', 'harmed', 'through', 'assault', 'affray', 'riot', 'unlawful', 'assembly', 'other', 'disturbance']
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
  ...paceActSections,
  ...preventionOfCrimeActSections,
  ...publicOrderActSections,
  ...commonLawOffences
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
  'grievous', 'serious', 'severe', 'grave', 'critical',
  'actual', 'real', 'genuine', 'true', 'factual',
  'emergency', 'worker', 'responding', 'circumstance', 'obstructs',
  'hinders', 'reasonable', 'excuse', 'violence', 'riot',
  'threatens', 'common', 'purpose', 'firmness', 'safety',
  'apprehend', 'immediate', 'personal', 'battery', 'calculated',
  'interfere', 'comfort', 'shock', 'mental', 'psychiatric',
  'wound', 'inflict', 'whatsoever', 'detainer', 'endanger',
  'custody', 'control', 'permit', 'article', 'noxious',
  'destructive', 'aggrieve', 'annoy', 'spiking', 'preparatory',
  'commission', 'attempting', 'interference', 'interfere', 'motor',
  'trailer', 'mechanically', 'propelled', 'pedal', 'cycle', 'abode', 'equipped',
  'diverted', 'wasted', 'retention', 'realisation', 'arranges',
  'commits', 'robbery', 'immediately', 'order', 'puts', 'seeks',
  'subjected', 'having', 'entered', 'part', 'aggravated', 'imitation',
  'conveyance', 'allow', 'themselves', 'carried', 'drive', 'proved',
  'relation', 'unlawfully', 'recovered', 'driven', 'dangerously',
  'public', 'place', 'road', 'wilfully', 'harassment', 'alarm',
  'distress', 'abusive', 'insulting', 'disorderly', 'displays',
  'writing', 'sign', 'visible', 'representation', 'thereby', 'causing',
  'carried', 'conduct', 'referred', 'relevant', 'sex', 'presumed',
  'hearing', 'sight', 'likely', 'caused', 'breach', 'peace',
  'presence', 'harmed', 'affray', 'assembly', 'disturbance', 'violent',
  'disorder', 'scene', 'together', 'using', 'warrant', 'suspecting',
  'grounds', 'station', 'danger', 'offensive', 'blade', 'sharply',
  'pointed', 'folding', 'pocketknife', 'enter', 'search', 'evidence',
  'relating', 'committed', 'provoke', 'provocation', 'distributes',
  'whereby', 'provoked', 'towards', 'twelve', 'three', 'victim',
  'exceeding', 'inches', 'subsection', 'mentioned', 'capacity', 'assisting'
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
