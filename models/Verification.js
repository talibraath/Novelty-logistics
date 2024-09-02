// models/Verification.js

import mongoose from 'mongoose';

const VerificationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  documentType: {
    type: String,
    required: true,
  },
  additionalNotes: {
    type: String,
  },
  documents: [
    {
      name: String,
      path: String,
    },
  ],
}, { timestamps: true });

export default mongoose.models.Verification || mongoose.model('Verification', VerificationSchema);
