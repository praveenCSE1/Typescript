import mongoose from "mongoose"

const uri = 'mongodb://localhost:27017/typescript';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB eror:'));
db.once('open', () => {

  console.log('Database Connected');

});

export {mongoose};