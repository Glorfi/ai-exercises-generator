import { ISentence } from './sentence-with-input';

export interface IExercise {
  owner: string[];
  skill: 'grammar' | 'vocabulary';
  type: 'fillInGaps' | 'multipleChoice';
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  sentenceList: ISentence[];
  title?: string;
  taskDescription?: string;
  studentLevel?: string;
  studentAge?: number;
}
