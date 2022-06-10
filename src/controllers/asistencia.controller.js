import Asistencia from "../models/Asistencia";




export const totalDeRegistro = async (req, res) => {
    try {

        const asistencia = await Asistencia.find();
        res.json(asistencia);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }



};


export const buscarPorlegajo = async (req, res) => {

    try {

        const num = (req.params.legajo);
        const asistencia = await Asistencia.find({ legajo: num });
        res.json(asistencia);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};

export const nuevaAsistencia = async (req, res) => {

    try {

        const newAsistencia = new Asistencia({
            id_asistencia: req.body.id_asistencia,
            fecha: req.body.fecha,
            hora_entrada: req.body.hora_entrada,
            hora_salida: req.body.hora_salida,
            legajo: req.body.legajo
        });
        await newAsistencia.save();
        console.log(newAsistencia);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};
