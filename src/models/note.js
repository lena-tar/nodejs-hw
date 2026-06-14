import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const notesSchema = new Schema(
  {
    content: {
      type: String,
      default: '',
      trim: true,
    },

    tag: {
      type: String,
      enum: TAGS,
      default: 'Todo',
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

notesSchema.index({ tag: 1 });

export const Note = model('Note', notesSchema);
