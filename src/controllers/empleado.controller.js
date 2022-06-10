import Empleado from "../models/Empleado";

export const totalEmpleados = async (req, res) => {


    try {
        const empleados = await Empleado.find();
        res.json(empleados);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const nuevoEmpleado = async (req, res) => {


    try {
        const newEmpleado = new Empleado({
            legajo: req.body.legajo,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            id_base: req.body.id_base,
            clave: req.body.clave
        });
        await newEmpleado.save();
        console.log(newEmpleado);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};

export const buscarPorLegajo = async (req, res) => {

    try {

        const leg = (req.params.legajo);
        const empleado = await Empleado.find({ legajo: leg });
        res.json(empleado);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

};