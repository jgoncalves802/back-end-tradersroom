import mongoose from 'mongoose';
import configDb from '../config/config';

const { connectionString } = configDb.db
  if (connectionString) {
    mongoose.connect(connectionString, {
      'useNewUrlParser': true,
      'useCreateIndex': true,
      'useUnifiedTopology': true,
      'useFindAndModify': false,
    });
  } else {
    console.log('No connection string provided.');
}