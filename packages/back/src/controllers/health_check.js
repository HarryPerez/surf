import mongoose from 'mongoose';

export default (_, res) => res.status(200)
  .send({ uptime: process.uptime(), mongo: mongoose.STATES[mongoose.connection.readyState] });
