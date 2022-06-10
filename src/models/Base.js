import { Schema,model } from "mongoose";

const baseShema=new Schema({
 id_base:{
     type:String,
     required:true,
     trim:true
 },
 barrio:{
    type:String,
    trim:true
 },
 id_coordenadas:{
    type:String,
    trim:true
 }

});

export default model ('Base',baseShema);