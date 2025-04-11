import { Router } from 'express'
import { getAllServicios } from '../controllers/ServicioControllers'

const servicioRouter = Router()

servicioRouter.get('/', getAllServicios)

export default servicioRouter
