import { model, Schema, Document } from 'mongoose';
import { CurriculumObject } from '@/interfaces/course.interface';

const CurriculumSchema: Schema = new Schema({
  title: String,
  description: String,
  type: String,
  content: String,
  isComplete: Boolean,
  completionRate: Number,
});

export const CurriculumModel = model<CurriculumObject & Document>('Curriculum', CurriculumSchema);
