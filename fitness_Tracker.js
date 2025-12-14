const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['trainer', 'user'], required: true },
  followedTrainers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Only for users
});

module.exports = mongoose.model('User', userSchema);