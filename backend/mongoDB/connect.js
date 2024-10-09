import mongoose from 'mongoose';

export const connectDB = (url) => {
  console.log('Connecting to DB...');
  return mongoose.connect(url);
};
