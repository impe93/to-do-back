import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  stato: {
    type: String,
    default: 'in_corso'
  },
  testo: {
    type: String,
    default: ''
  },
  data_creazione: {
    type: Date,
    default: Date.now
  }
});