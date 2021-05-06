import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongooseInstance from './Database';
import Routes from './Routes';
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
Routes(app);

app.listen(PORT, async () => {
  try {
    console.log(`Server has started on port ${PORT}`);
    await mongooseInstance();
    console.log('Successfully connected to database server');
  } catch (error) {
    console.log('Error: Could not connect to database server', error);
  }
});
