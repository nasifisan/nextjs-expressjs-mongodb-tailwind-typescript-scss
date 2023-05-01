import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  last_visit: String,
  registration_date: String,
  is_active: Boolean,
});

export const user_model = mongoose.model('users', userSchema);
