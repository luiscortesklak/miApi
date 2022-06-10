import { Schema,model } from "mongoose";

const empleadoShema=new Schema({
 legajo:{
     type:String,
     required:true,
     trim:true
 },
 nombre:{
    type:String,
    trim:true
 },
 apellido:{
    type:String,
    trim:true
 },
 id_base:{
    type:String,
    trim:true
 },
 clave:{
   type:String,
   trim:true
 }

});

export default model ('Empleado',empleadoShema);