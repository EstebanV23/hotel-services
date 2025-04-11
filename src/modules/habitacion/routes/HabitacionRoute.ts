import { Router } from 'express'
import { getAllHabitaciones, createHabitacion, findByCantPersonas, findById, reservar } from '../controllers/HabitacionController'
import { authMiddleware } from '../../auth/middlewares/authMiddleware'

const habitacionRouter = Router()

habitacionRouter.get('/get', getAllHabitaciones)
habitacionRouter.post('/create', createHabitacion)
habitacionRouter.get('/get/:id', findById)
habitacionRouter.post('/tipohabitacion', findByCantPersonas)
habitacionRouter.post('/reservar', authMiddleware, reservar)

export default habitacionRouter
