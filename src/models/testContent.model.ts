import { model, Schema, Document } from 'mongoose';
import { TestContent } from '@/interfaces/course.interface';

const TestOption: Schema = new Schema({
  order: Number,
  content: String,
});

const TestContentObject: Schema = new Schema({
  question: String,
  options: [TestOption],
});

const TestSchema: Schema = new Schema({
  title: String,
  description: String,
  content: [TestContentObject],
});

export const TestModel = model<TestContent & Document>('Test', TestSchema);
