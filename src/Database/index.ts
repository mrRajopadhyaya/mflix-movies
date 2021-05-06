import mongoose, { Mongoose } from 'mongoose';
require('dotenv').config();
// const { DB_URL } = process.env;

const DB_URL =
  'mongodb+srv://abhinab:sattapass123@cluster0.xo8yg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const mongooseInstance = (): Promise<Mongoose> => {
  return mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
};

export default mongooseInstance;
