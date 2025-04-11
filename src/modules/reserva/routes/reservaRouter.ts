import { Router } from 'express'
import buscarMisReservas from '../controllers/reservaController'

const reservaRouter = Router()

reservaRouter.get('/misreservas', buscarMisReservas)

export default reservaRouter
