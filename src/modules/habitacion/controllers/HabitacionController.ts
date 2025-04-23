import { Request, Response } from 'express'

import { Habitacion } from '../models/Habitacion'

import { errorResponse, successReponse } from '../../../utils/reponseStructure'
import { RequestReservar } from '../models/RequestReservar'
import { performance } from 'node:perf_hooks'
import { HabitacionServiceInterface } from '../services/HabitacionServiceInterface'
import { HabitacionServiceProxy } from '../services/HabitacionServiceProxy'

const habitacionService: HabitacionServiceInterface = new HabitacionServiceProxy()

export async function findByCantPersonas (req: Request, res: Response): Promise<Response> {
  try {
    const { cantPersonas, servicios, fecInicio, fecFinal } = req.body // Parámetros

    const inicio = performance.now() // Guardar el tiempo de inicio de la ejecución

    const habitaciones: Habitacion[] = await habitacionService.findByCantPersonas({
      cantPersonas: Number(cantPersonas),
      listaServicios: servicios as number[],
      fecInicio: fecInicio as string,
      fecFinal: fecFinal as string
    }) // Obtener habitaciones según los parámetros

    const fin = performance.now() // Guardar el tiempo de fin de la ejecución

    // eslint-disable-next-line no-console
    console.log(`Tiempo de ejecución: ${fin - inicio} ms`)
    return successReponse({ data: habitaciones, message: 'Habitaciones encontradas', res }) // Respuesta del servidor con JSON
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(error)
    return errorResponse({ status: 500, message: 'Internal server error', res }) // Si ocurre un error, se devuelve un mensaje de error
  }
}

export async function getAllHabitaciones (_req: Request, res: Response): Promise<Response> {
  try {
    const inicio = performance.now()
    const habitaciones: Habitacion[] = await habitacionService.findAll()
    const fin = performance.now()
    const tiempo = fin - inicio
    // eslint-disable-next-line no-console
    console.log(`Tiempo de ejecución: ${tiempo} ms`)
    return res.json(habitaciones)
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log(error)
    return res.json({ error: error.message })
  }
}

export async function createHabitacion (req: Request, res: Response): Promise<Response> {
  try {
    const habitacion: Habitacion = req.body
    const newHabitacion: Habitacion = await habitacionService.create({ habitacion })
    return res.json(newHabitacion)
  } catch (error: any) {
    console.error(error)
    return res.json({ error: error.message })
  }
}

export async function findById (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const habitacion: Habitacion | null = await habitacionService.findOne({ idHabitacion: Number(id) })
    return res.json(habitacion)
  } catch (error: any) {
    console.error(error)
    return res.json({ error: error.message })
  }
}

export async function reservar (req: Request, res: Response): Promise<Response> {
  try {
    const habitaciones: RequestReservar[] = req.body.habitaciones
    const errores: RequestReservar[] = []
    habitaciones.forEach(async (rqHabitacion) => {
      const habitacion: Habitacion | null = await habitacionService.reservarHabitacion({
        idHabitacion: Number(rqHabitacion.idHabitacion),
        fecInicio: new Date(rqHabitacion.fecInicio),
        fecFinal: new Date(rqHabitacion.fecFinal),
        idUsuario: Number(req.headers.userid as string),
        cantPersonas: Number(rqHabitacion.canPersonas),
        costTotal: Number(rqHabitacion.cosTotal),
        desReserva: 'Reserva de habitacion'
      })

      if (habitacion === null) {
        console.error('Error al reservar habitacion')
        throw new Error('Error al reservar habitacion')
      }
    })

    return successReponse({
      data: {
        erroresPresentados: errores
      },
      message: 'Habitacion reservada',
      res
    })
  } catch (error: any) {
    console.error(error)
    return errorResponse({ status: 500, message: 'Internal server error', res })
  }
}
