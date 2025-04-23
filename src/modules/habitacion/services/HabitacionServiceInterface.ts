import { Habitacion } from '../models/Habitacion'

export interface HabitacionServiceInterface {
  findOne: ({ idHabitacion }: { idHabitacion: number }) => Promise<Habitacion | null>
  findAll: () => Promise<Habitacion[]>
  findByCantPersonas: ({ cantPersonas, listaServicios, fecInicio, fecFinal }: { cantPersonas: number, listaServicios: number[], fecInicio: string, fecFinal: string }) => Promise<Habitacion[]>
  create: ({ habitacion }: { habitacion: Habitacion }) => Promise<Habitacion>
  reservarHabitacion: ({ fecInicio, fecFinal, desReserva, cantPersonas, costTotal, idUsuario, idHabitacion }: { fecInicio: Date, fecFinal: Date, desReserva: string, cantPersonas: number, costTotal: number, idUsuario: number, idHabitacion: number }) => Promise<Habitacion | null>
  update: ({ idHabitacion, habitacion }: { idHabitacion: number, habitacion: Habitacion }) => Promise<Habitacion>
  delete: ({ idHabitacion }: { idHabitacion: number }) => Promise<Habitacion>
}
