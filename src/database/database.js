import mongoose from 'mongoose';
import config from '../config';

(async()=>{
const db= await mongoose.connect(mongodb://localhost/basesTecnicas);   
 console.log(db.connection.name);
})();
 
