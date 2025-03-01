// models/Project.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);