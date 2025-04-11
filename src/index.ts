import express from 'express'
import cors from 'cors'
import config from './config/config'
import usuarioRouter from './modules/usuario/routes/usuarioRoute'
import tipoAlojamientoRouter from './modules/tipoalojamiento/routes/TipoAlojamientoRoutes'
import habitacionRouter from './modules/habitacion/routes/HabitacionRoute'
import authRouter from './modules/auth/routers/AuthRouter'
import { authMiddleware } from './modules/auth/middlewares/authMiddleware'
import servicioRouter from './modules/servicio/routes/ServicioRoute'
import reservaRouter from './modules/reserva/routes/reservaRouter'

const app = express()

// Config app
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/usuario', usuarioRouter)
app.use('/api/tipoalojamiento', authMiddleware, tipoAlojamientoRouter)
app.use('/api/habitacion', habitacionRouter)
app.use('/api/servicios', servicioRouter)
app.use('/api/auth', authRouter)
app.use('/api/reserva', authMiddleware, reservaRouter)

// Start server
const port: string | number = config.port

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
