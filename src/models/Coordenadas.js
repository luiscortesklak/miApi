import { Schema,model } from "mongoose";

const coordenadasShema=new Schema({
 id_coordenadas:{
     type:String,
     required:true,
     trim:true
 },
 latitud_uno:{
    type:String,
    trim:true
 },
 latitud_dos:{
    type:String,
    trim:true
 },
 latitud_tres:{
    type:String,
    trim:true
 },
 latitud_cuatro:{
    type:String,
    trim:true
 },
 longitud_uno:{
    type:String,
    trim:true
 },
 longitud_dos:{
    type:String,
    trim:true
 },
 longitud_tres:{
    type:String,
    trim:true
 },
 longitud_cuatro:{
    type:String,
    trim:true
 }


});

export default model ('Coordenadas',coordenadasShema);