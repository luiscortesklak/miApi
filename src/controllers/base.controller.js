import Base from "../models/Base";

export const buscarPorBase = async (req, res) => {
    try {
        const num = (req.params.id_base);
        const base = await Base.find({ id_base: num });
        res.json(base);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};