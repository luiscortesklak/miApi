import { Schema,model } from "mongoose";

const limitesShema=new Schema({
 id_base:{
     type:String,
     required:true,
     trim:true
 },
 limite_uno:{
    type:String,
    trim:true
 },
 limite_dos:{
    type:String,
    trim:true
 },
 limite_tres:{
    type:String,
    trim:true
 }, 
 limite_cuatro:{
    type:String,
    trim:true
 }

});

export default model ('Limite',limitesShema);