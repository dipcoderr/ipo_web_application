import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import ipoRoutes from './routes/ipoRoutes.js';

import companyRoutes from './routes/companyRoutes.js'; // 👈 Import route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/companies', companyRoutes); // 👈 Use the route
app.use('/api/ipos', ipoRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('IPO Web App Backend Running');
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.error(err));
