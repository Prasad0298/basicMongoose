import mongoose from 'mongoose';

const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      unique: true,
    },
    isActive: {
      type: Boolean,
    },
  },
  { timeStamps: true }
);

export const User = mongoose.model('User', userschema);
