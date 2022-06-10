import express from "express";
import TareasRutas from './routes/tareas';
const app = express();
// configuracion
app.set("port", 4000);
app.get('/',(req,res)=>{
    res.json('Bienvenido a mi api');
    
});
// Middlewares
app.use(express.json());

// Rutas
app.use ('/api',TareasRutas);

export default app;