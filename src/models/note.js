import { Schema } from 'mongoose';
import { model } from 'mongoose';

const notesSchema = new Schema(
  {
    content: {
      type: String,
      default: '',
      trim: true,
    },

    tag: {
      type: String,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: 'Todo',
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
