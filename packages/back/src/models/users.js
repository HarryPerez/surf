import { schema as Schema, mongoose } from '../db.js';

const schema = new Schema({
  name: String,
  surname: String,
  email: { type: String, match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
  password: String,
  role: String,
  section: String,
  active: Boolean,
}, { timestamps: true });

export default mongoose.model('User', schema);
