export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  videoUrl?: string;
  images?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Practice {
  id: string;
  slug: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  type: "quiz" | "map" | "matching";
}
