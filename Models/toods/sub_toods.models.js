import mongoose from 'mongoose';

const subToodsSchema = new mongoose.Schema({
  
}, { timestamps: true });

export const subTood = mongoose.model('subTood', subToodsSchema);
