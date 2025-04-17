import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true
  },
  company_logo: {
    type: String, // URL to logo
    required: false
  }
}, { timestamps: true });

export default mongoose.model('Company', companySchema);
