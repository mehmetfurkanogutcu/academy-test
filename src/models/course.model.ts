import { model, Schema, Document } from 'mongoose';
import { Course } from '@/interfaces/course.interface';

const CourseSchema: Schema = new Schema({
  name: String,
  description: String,
  language: String,
  completionRate: Number,
  tags: String,
  contentTypes: [String],
  curriculums: Array,
  level: Number,
});

export const CourseModel = model<Course & Document>('Course', CourseSchema);
