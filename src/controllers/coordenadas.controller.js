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