import { Router } from 'express'
// Controllers
import { getAllTipoAlojamiento, createTipoAlojamiento } from '../controllers/TipoAlojamientoController'

const tipoAlojamientoRouter = Router()

tipoAlojamientoRouter.get('/get', getAllTipoAlojamiento)
tipoAlojamientoRouter.post('/create', createTipoAlojamiento)

export default tipoAlojamientoRouter
