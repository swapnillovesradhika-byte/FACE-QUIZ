export interface Question {
  id: number;
  instruction?: string;
  tableHeaders?: string[];
  tableRows?: string[][];
  statements?: string[];
  questionText: string;
  options: string[];
  correctAnswerIndex: number; // 0-3 corresponding to a-d
}

export type QuizStatus = 'start' | 'active' | 'finished';
