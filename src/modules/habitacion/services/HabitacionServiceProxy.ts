import { Habitacion } from '../models/Habitacion'
import { HabitacionService } from './HabitacionService'
import { HabitacionServiceInterface } from './HabitacionServiceInterface'
import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 60 }) // TTL de 60 segundos

export class HabitacionServiceProxy implements HabitacionServiceInterface {
  habitacionService: HabitacionService

  constructor () {
    this.habitacionService = new HabitacionService()
  }

  async findByCantPersonas ({ cantPersonas, listaServicios, fecInicio, fecFinal }: { cantPersonas: number, listaServicios: number[], fecInicio: string, fecFinal: string }): Promise<Habitacion[]> {
    const keyCache = `habitaciones_${cantPersonas}_${listaServicios.join('_')}_${fecInicio}_${fecFinal}`

    // eslint-disable-next-line no-console
    console.log({ keyCache })

    if (cache.has(keyCache)) {
      return cache.get<Habitacion[]>(keyCache) as Habitacion[]
    }

    const habitaciones = await this.habitacionService.findByCantPersonas({ cantPersonas, listaServicios, fecInicio, fecFinal })

    cache.set(keyCache, habitaciones)

    return habitaciones
  }

  async findOne ({ idHabitacion }: { idHabitacion: number }): Promise<Habitacion | null> {
    return await this.habitacionService.findOne({ idHabitacion })
  }

  async findAll (): Promise<Habitacion[]> {
    const keyCache = 'habitaciones'

    if (cache.has(keyCache)) {
      return cache.get<Habitacion[]>(keyCache) as Habitacion[]
    }

    const habitaciones = await this.habitacionService.findAll()
    cache.set(keyCache, habitaciones)
    return habitaciones
  }

  async create ({ habitacion }: { habitacion: Habitacion }): Promise<Habitacion> {
    return await this.habitacionService.create({ habitacion })
  }

  async reservarHabitacion ({ fecInicio, fecFinal, desReserva, cantPersonas, costTotal, idUsuario, idHabitacion }: { fecInicio: Date, fecFinal: Date, desReserva: string, cantPersonas: number, costTotal: number, idUsuario: number, idHabitacion: number }): Promise<Habitacion | null> {
    return await this.habitacionService.reservarHabitacion({ fecInicio, fecFinal, desReserva, cantPersonas, costTotal, idUsuario, idHabitacion })
  }

  async update ({ idHabitacion, habitacion }: { idHabitacion: number, habitacion: Habitacion }): Promise<Habitacion> {
    return await this.habitacionService.update({ idHabitacion, habitacion })
  }

  async delete ({ idHabitacion }: { idHabitacion: number }): Promise<Habitacion> {
    return await this.habitacionService.delete({ idHabitacion })
  }
}
