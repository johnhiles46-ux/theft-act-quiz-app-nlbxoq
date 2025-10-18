
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
}

// Theft Act 1968 content with key terms
export const theftActSections = [
  {
    id: '1',
    section: 'Section 1',
    title: 'Basic definition of theft',
    fullText: 'A person is guilty of theft if he dishonestly appropriates property belonging to another with the intention of permanently depriving the other of it; and "thief" and "steal" shall be construed accordingly.',
    keywords: ['dishonestly', 'appropriates', 'property', 'belonging to another', 'intention', 'permanently depriving'],
  },
  {
    id: '2',
    section: 'Section 2',
    title: 'Dishonesty',
    fullText: 'A person\'s appropriation of property belonging to another is not to be regarded as dishonest if he appropriates the property in the belief that he has in law the right to deprive the other of it, on behalf of himself or of a third person.',
    keywords: ['dishonest', 'appropriation', 'property', 'belief', 'right to deprive'],
  },
  {
    id: '3',
    section: 'Section 3',
    title: 'Appropriates',
    fullText: 'Any assumption by a person of the rights of an owner amounts to an appropriation, and this includes, where he has come by the property (innocently or not) without stealing it, any later assumption of a right to it by keeping or dealing with it as owner.',
    keywords: ['assumption', 'rights of an owner', 'appropriation', 'keeping', 'dealing with it'],
  },
  {
    id: '4',
    section: 'Section 4',
    title: 'Property',
    fullText: 'Property includes money and all other property, real or personal, including things in action and other intangible property.',
    keywords: ['Property', 'money', 'real or personal', 'things in action', 'intangible property'],
  },
  {
    id: '5',
    section: 'Section 5',
    title: 'Belonging to another',
    fullText: 'Property shall be regarded as belonging to any person having possession or control of it, or having in it any proprietary right or interest.',
    keywords: ['belonging to', 'possession', 'control', 'proprietary right', 'interest'],
  },
  {
    id: '6',
    section: 'Section 6',
    title: 'Intention of permanently depriving',
    fullText: 'A person appropriating property belonging to another without meaning the other permanently to lose the thing itself is nevertheless to be regarded as having the intention of permanently depriving the other of it if his intention is to treat the thing as his own to dispose of regardless of the other\'s rights.',
    keywords: ['permanently to lose', 'intention', 'permanently depriving', 'dispose of', 'regardless of the other\'s rights'],
  },
  {
    id: '7',
    section: 'Section 8',
    title: 'Robbery',
    fullText: 'A person is guilty of robbery if he steals, and immediately before or at the time of doing so, and in order to do so, he uses force on any person or puts or seeks to put any person in fear of being then and there subjected to force.',
    keywords: ['robbery', 'steals', 'immediately before', 'uses force', 'fear', 'subjected to force'],
  },
  {
    id: '8',
    section: 'Section 9',
    title: 'Burglary',
    fullText: 'A person is guilty of burglary if he enters any building or part of a building as a trespasser with intent to steal anything in the building or part of a building in question, or to inflict on any person therein any grievous bodily harm.',
    keywords: ['burglary', 'enters', 'building', 'trespasser', 'intent to steal', 'grievous bodily harm'],
  },
  {
    id: '9',
    section: 'Section 22',
    title: 'Handling stolen goods',
    fullText: 'A person handles stolen goods if (otherwise than in the course of the stealing) knowing or believing them to be stolen goods he dishonestly receives the goods, or dishonestly undertakes or assists in their retention, removal, disposal or realisation by or for the benefit of another person.',
    keywords: ['handles', 'stolen goods', 'knowing or believing', 'dishonestly receives', 'retention', 'disposal', 'realisation'],
  },
  {
    id: '10',
    section: 'Section 15',
    title: 'Obtaining property by deception',
    fullText: 'A person who by any deception dishonestly obtains property belonging to another, with the intention of permanently depriving the other of it, shall be guilty of an offence.',
    keywords: ['deception', 'dishonestly obtains', 'property', 'belonging to another', 'permanently depriving'],
  },
];

// Function to generate a random question with blanks
export function generateQuestion(): QuizQuestion {
  // Select a random section
  const section = theftActSections[Math.floor(Math.random() * theftActSections.length)];
  
  // Determine how many blanks to create (1-3)
  const numBlanks = Math.min(
    Math.floor(Math.random() * 3) + 1,
    section.keywords.length
  );
  
  // Randomly select keywords to blank out
  const shuffledKeywords = [...section.keywords].sort(() => Math.random() - 0.5);
  const selectedKeywords = shuffledKeywords.slice(0, numBlanks);
  
  // Create blanks array with positions
  const blanks: BlankItem[] = [];
  let textWithBlanks = section.fullText;
  
  selectedKeywords.forEach((keyword, index) => {
    // Find the position of the keyword in the text (case-insensitive)
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    const match = textWithBlanks.match(regex);
    
    if (match && match.index !== undefined) {
      const position = match.index;
      blanks.push({
        word: keyword,
        position: position,
      });
      
      // Replace the keyword with a blank placeholder
      textWithBlanks = textWithBlanks.replace(regex, `___${index}___`);
    }
  });
  
  // Sort blanks by position
  blanks.sort((a, b) => a.position - b.position);
  
  return {
    id: section.id,
    section: section.section,
    sectionTitle: section.title,
    text: textWithBlanks,
    blanks: blanks,
  };
}

// Function to check if an answer is correct (case-insensitive, trimmed)
export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = userAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();
  return normalizedUser === normalizedCorrect;
}
