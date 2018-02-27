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
  id_utente: {
    type: String,
    required: true
  },
  data_creazione: {
    type: Date,
    default: Date.now
  }
});
