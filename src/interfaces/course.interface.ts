export interface Course {
  _id?: string;
  name: string;
  description: string;
  language: string;
  completionRate: number;
  tags: string[]; // will be type
  contentTypes: string[];
  curriculums: CurriculumObject[];
  difficulty: number;
}

export interface CurriculumObject {
  title: string;
  description: string;
  type: string;
  content: VideoContent | TestContent | ArticleContent;
  isComplete: boolean;
  completionRate: number;
}

export interface VideoContent {
  title: string;
  description: string;
  url: string;
}

export interface ArticleContent {
  title: string;
  description: string;
  content: string; // html
}

export interface TestContent {
  title: string;
  description: string;
  content: TestContentObject[];
}

export interface TestContentObject {
  question: string;
  options: TestOption[];
}

export interface TestOption {
  order: number;
  content: string;
}
