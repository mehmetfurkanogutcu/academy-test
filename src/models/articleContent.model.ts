import { model, Schema, Document } from 'mongoose';
import { ArticleContent } from '@/interfaces/course.interface';

const ArticleSchema: Schema = new Schema({
  title: String,
  description: String,
  content: String, // html
});

export const ArticleModel = model<ArticleContent & Document>('Article', ArticleSchema);
