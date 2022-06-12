import Coordenadas from "../models/Coordenadas";

export const buscarPorIdCoordenadas = async (req, res) => {

    try {
        const num = (req.params.id_coordenadas);
        const coor = await Coordenadas.find({ id_coordenadas: num });
        res.json(coor);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};
export const nuevasCoordenadas = async (req, res) => {


    try {
        const coors = new Coordenadas({
            id_coordenadas: req.body.id_coordenadas,
            latitud_uno: req.body.latitud_uno,
            latitud_dos: req.body.latitud_dos,
            latitud_tres: req.body.latitud_tres,
            latitud_cuatro: req.body.latitud_cuatro,
            longitud_uno: req.body.longitud_uno,
            longitud_dos: req.body.longitud_dos,
            longitud_tres: req.body.longitud_tres,
            longitud_cuatro: req.body.longitud_cuatro,
        });
        await coors.save();
        console.log(coors);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};