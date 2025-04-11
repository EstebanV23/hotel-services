import { Router } from 'express'
import { getAllUsers, findById } from '../controllers/usuarioController'
import { authMiddleware } from '../../auth/middlewares/authMiddleware'

const usuarioRouter = Router()

usuarioRouter.get('/get', authMiddleware, getAllUsers)
usuarioRouter.get('/get/:id', authMiddleware, findById)

export default usuarioRouter
