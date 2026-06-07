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
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', notesSchema);
