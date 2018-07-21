'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var TaskSchema = exports.TaskSchema = new Schema({
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