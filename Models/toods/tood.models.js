import mongoose from 'mongoose';

const toodSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    Complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subToods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subTood',
      },
    ], //Array of subToods
  },
  { timestamps: true }
);

export const Toodo = mongoose.model('Toodo', toodSchema);
