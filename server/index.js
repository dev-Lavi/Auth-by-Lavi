import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { UserRouter } from './routes/user.js';

dotenv.config();

const app = express();
app.use(express.json());

// Define routes
app.use('/auth', UserRouter);

// MongoDB connection with error handling
mongoose
  .connect('mongodb://localhost:27017/authentication', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

// Catch invalid routes
app.use((req, res) => {
  res.status(404).send({ message: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 3000; // Default to port 3000 if not in .env
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
