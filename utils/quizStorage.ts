
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface QuizResultItem {
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface QuizResult {
  id: string;
  timestamp: string;
  section: string;
  sectionTitle: string;
  score: {
    correct: number;
    total: number;
  };
  mode: 'standard' | 'advanced';
  items: QuizResultItem[];
}

const STORAGE_KEY = '@quiz_results';

// Save a quiz result
export async function saveQuizResult(result: QuizResult): Promise<void> {
  try {
    const existingResults = await getQuizResults();
    const updatedResults = [result, ...existingResults];
    
    // Keep only the last 50 results to avoid storage bloat
    const trimmedResults = updatedResults.slice(0, 50);
    
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedResults));
    console.log('Quiz result saved successfully');
  } catch (error) {
    console.error('Error saving quiz result:', error);
    throw error;
  }
}

// Get all quiz results
export async function getQuizResults(): Promise<QuizResult[]> {
  try {
    const resultsJson = await AsyncStorage.getItem(STORAGE_KEY);
    if (resultsJson === null) {
      return [];
    }
    return JSON.parse(resultsJson);
  } catch (error) {
    console.error('Error getting quiz results:', error);
    return [];
  }
}

// Delete a specific quiz result
export async function deleteQuizResult(id: string): Promise<void> {
  try {
    const existingResults = await getQuizResults();
    const updatedResults = existingResults.filter(result => result.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
    console.log('Quiz result deleted successfully');
  } catch (error) {
    console.error('Error deleting quiz result:', error);
    throw error;
  }
}

// Clear all quiz results
export async function clearAllQuizResults(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('All quiz results cleared successfully');
  } catch (error) {
    console.error('Error clearing quiz results:', error);
    throw error;
  }
}

// Get quiz statistics
export async function getQuizStatistics(): Promise<{
  totalQuizzes: number;
  totalQuestions: number;
  totalCorrect: number;
  averageScore: number;
}> {
  try {
    const results = await getQuizResults();
    
    if (results.length === 0) {
      return {
        totalQuizzes: 0,
        totalQuestions: 0,
        totalCorrect: 0,
        averageScore: 0,
      };
    }
    
    const totalQuizzes = results.length;
    const totalQuestions = results.reduce((sum, result) => sum + result.score.total, 0);
    const totalCorrect = results.reduce((sum, result) => sum + result.score.correct, 0);
    const averageScore = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
    
    return {
      totalQuizzes,
      totalQuestions,
      totalCorrect,
      averageScore,
    };
  } catch (error) {
    console.error('Error getting quiz statistics:', error);
    return {
      totalQuizzes: 0,
      totalQuestions: 0,
      totalCorrect: 0,
      averageScore: 0,
    };
  }
}
