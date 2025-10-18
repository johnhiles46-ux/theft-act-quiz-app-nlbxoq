
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

// All sections cleared - no questions available
export const theftActSections: any[] = [];

// Criminal Damage Act 1971 content cleared
export const criminalDamageActSections: any[] = [];

// Combine all sections for question generation
export const allSections = [...theftActSections, ...criminalDamageActSections];

// Expanded pool of incorrect options for generating distractors
const incorrectOptionsPool: string[] = [];

// Function to generate contextually relevant incorrect options
function generateIncorrectOptions(correctAnswer: string, allKeywords: string[]): string[] {
  return [];
}

// Function to generate a random question with blanks and multiple choice options
export function generateQuestion(): QuizQuestion | null {
  // No questions available
  console.log('No questions available - all data has been cleared');
  return null;
}

// Function to check if an answer is correct (case-insensitive, trimmed)
export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = userAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();
  return normalizedUser === normalizedCorrect;
}
