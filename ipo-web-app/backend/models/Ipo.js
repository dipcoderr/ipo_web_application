import mongoose from 'mongoose';

const ipoSchema = new mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  price_band: String,
  open_date: Date,
  close_date: Date,
  issue_size: String,
  issue_type: String,
  listing_date: Date,
  status: {
    type: String,
    enum: ['Upcoming', 'Open', 'Closed', 'Listed']
  },
  ipo_price: Number,
  listing_price: Number,
  listing_gain: Number,
  current_market_price: Number,
  current_return: Number
}, { timestamps: true });

export default mongoose.model('Ipo', ipoSchema);
