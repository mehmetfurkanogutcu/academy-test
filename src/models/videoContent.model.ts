import { model, Schema, Document } from 'mongoose';
import { VideoContent } from '@/interfaces/course.interface';

const VideoContentSchema: Schema = new Schema({
  title: String,
  description: String,
  url: String,
});

export const VideoContentModel = model<VideoContent & Document>('VideoContent', VideoContentSchema);
