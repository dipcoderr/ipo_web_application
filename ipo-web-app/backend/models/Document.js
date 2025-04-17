import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  ipo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ipo',
    required: true
  },
  rhp_pdf: {
    type: String, // URL to file
    required: false
  },
  drhp_pdf: {
    type: String,
    required: false
  }
}, { timestamps: true });

export default mongoose.model('Document', documentSchema);
