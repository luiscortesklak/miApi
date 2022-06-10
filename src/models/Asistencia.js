import { Schema,model } from "mongoose";

const asistenciaShema=new Schema({
 id_asistencia:{
     type:String,
     required:true,
     trim:true
 },
 fecha:{
    type:String,
    trim:true
 },
 hora_entrada:{
    type:String,
    trim:true
 },
 hora_salida:{
    type:String,
    trim:true
 },
 legajo:{
    type:String,
    trim:true
 }



});

export default model ('Asistencia',asistenciaShema);