import Limites from "../models/Limites";
import Coordenadas from "../models/Limites";


export const limitesTotal = async (req, res) => {


    try {
        const lim = await Limites.find();
        res.json(lim);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};
export const buscarPorlimites = async (req, res) => {

    try {
        const num = (req.params.id_base);
        const lim = await Coordenadas.find({ id_base: num });
        res.json(lim);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};

export const nuevosLimites = async (req, res) => {


    try {
        const lim = new Limites({
            id_base: req.body.id_base,
            limite_uno: req.body.limite_uno,
            limite_dos: req.body.limite_dos,
            limite_tres: req.body.limite_tres,
            limite_cuatro: req.body.limite_cuatro,
       
        });
        await lim.save();
        console.log(lim);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};