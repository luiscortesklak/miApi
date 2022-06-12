import {Router} from "express";
import * as empleadoCtrl from "../controllers/empleado.controller";
import * as baseCtrl from "../controllers/base.controller";
import * as coorCtrl from "../controllers/coordenadas.controller";
import * as asisCtrl from "../controllers/asistencia.controller";
import * as limCtrl from "../controllers/limites.controller";
const router =Router();
//peticiones de empleado

router.get ('/empleado',empleadoCtrl.totalEmpleados);

router.post('/empleado',empleadoCtrl.nuevoEmpleado);

router.get ('/empleado/legajo/:legajo',empleadoCtrl.buscarPorLegajo);

//peticiones de base

router.get ('/base/:id_base',baseCtrl.buscarPorBase);

// peticiones de coordendas

router.get ('/coordenadas/:id_coordenadas',coorCtrl.buscarPorIdCoordenadas);

router.post ('/coordenadas',coorCtrl.nuevasCoordenadas);
// peticiones de asistencia

router.post ('/asis',asisCtrl.nuevaAsistencia);

router.get ('/asis',asisCtrl.totalDeRegistro);

router.get ('/asis/:legajo',asisCtrl.buscarPorlegajo);

// peticiones limites

router.get ('/limites/:id_base',limCtrl.buscarPorlimites);

router.post ('/limites',limCtrl.nuevosLimites);

router.get ('/limites',limCtrl.limitesTotal);


export default router;