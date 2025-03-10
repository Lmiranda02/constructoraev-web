// models/Contact.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  projectType: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);