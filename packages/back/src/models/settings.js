import { schema as Schema, mongoose } from '../db.js';

const schema = new Schema({
  brandPrimary: String,
}, { timestamps: true });

export default mongoose.model('Settings', schema);
