export interface Sentence {
  id: number;
  es: string;
  hy: string;
}

export interface DialogueLine {
  id: number;
  speaker: 'Lucía' | 'Carlos';
  speakerHy: 'Լուսիա' | 'Կառլոս';
  es: string;
  hy: string;
  gaps?: {
    word: string; // The correct word in Spanish
    index: number; // Index of the gap in the line or word number
    hint: string;  // Hint/translation of the missing word
  }[];
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: {
    key: string;
    es: string;
    hy: string;
  }[];
  correctKey: string;
  explanationEs: string;
  explanationHy: string;
}

export interface VocabularyItem {
  es: string;
  hy: string;
  category: string;
}
