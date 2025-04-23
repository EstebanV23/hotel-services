import { TipoServicio } from '../../tiposervicio/enums/TipoServicioEnum'
import config from '../../../config/config'

import { Habitacion } from '../models/Habitacion'
import { EstadosCodigos, freeStates } from '../../estado/enums/EstadosCodigos'
import { HabitacionServiceInterface } from './HabitacionServiceInterface'

const prisma = config.prisma
export class HabitacionService implements HabitacionServiceInterface {
  async findByCantPersonas ({ cantPersonas, listaServicios, fecInicio, fecFinal }: { cantPersonas: number, listaServicios: number[], fecInicio: string, fecFinal: string }): Promise<Habitacion[]> {
    const codigoCama = TipoServicio.COD_CAMA
    const whereServices = listaServicios?.length > 0
      ? {
          id_servicio: {
            in: listaServicios
          }
        }
      : undefined

    const habitaciones = await prisma.habitacion_tbl.findMany({
      where: {
        servicio_habitacion: {
          some: {
            servicio_tbl: whereServices
          }
        }
      },
      include: {
        tipo_alojamiento_tbl: true,
        images_tbl: true,
        servicio_habitacion: {
          include: {
            servicio_tbl: {
              include: {
                tipo_servicio_tbl: true
              }
            }
          }
        },
        reserva_habitacion_tbl: {
          include: {
            reserva_tbl: true,
            estados_tbl: true
          }
        }
      }
    })
    return habitaciones.filter(habitacion => {
      const serviciosCama = habitacion.servicio_habitacion.filter(servicioHabitacion => (
        servicioHabitacion.servicio_tbl.tipo_servicio_tbl.cod_tipo_servicio === codigoCama
      ))
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const totalPersonas = serviciosCama.reduce((acc, servicioHabitacion) => (
        acc + ((servicioHabitacion.can_servicio_habitacion ?? 0) * (servicioHabitacion.servicio_tbl.can_per_servicio ?? 0))
      ), 0)

      const habitacionOcupada = habitacion.reserva_habitacion_tbl.some(reservaHabitacion => {
        const initDate = new Date(fecInicio)
        const finalDate = new Date(fecFinal)
        const reservasDeHabitacion = (reservaHabitacion.reserva_tbl.fec_ent_reserva as Date) >= initDate && (reservaHabitacion.reserva_tbl.fec_ent_reserva as Date) <= finalDate
        const estadoOcupado = !freeStates.includes(reservaHabitacion.estados_tbl.cod_estados as EstadosCodigos)
        return reservasDeHabitacion && estadoOcupado
      })
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      return (totalPersonas >= cantPersonas) && !habitacionOcupada
    })
  }

  async create ({ habitacion }: { habitacion: Habitacion }): Promise<Habitacion> {
    return await prisma.habitacion_tbl.create({
      data: habitacion
    })
  }

  async findAll (): Promise<Habitacion[]> {
    return await prisma.habitacion_tbl.findMany({
      include: {
        tipo_alojamiento_tbl: true,
        servicio_habitacion: {
          include: {
            servicio_tbl: {
              include: {
                tipo_servicio_tbl: true
              }
            }
          }
        }
      }
    })
  }

  async findOne ({ idHabitacion }: { idHabitacion: number }): Promise<Habitacion | null> {
    return await prisma.habitacion_tbl.findUnique({ where: { id_habitacion: idHabitacion } })
  }

  async update ({ idHabitacion, habitacion }: { idHabitacion: number, habitacion: Habitacion }): Promise<Habitacion> {
    return await prisma.habitacion_tbl.update({ where: { id_habitacion: idHabitacion }, data: habitacion })
  }

  async delete ({ idHabitacion }: { idHabitacion: number }): Promise<Habitacion> {
    return await prisma.habitacion_tbl.delete({ where: { id_habitacion: idHabitacion } })
  }

  async reservarHabitacion ({ fecInicio, fecFinal, desReserva, cantPersonas, costTotal, idUsuario, idHabitacion }: { fecInicio: Date, fecFinal: Date, desReserva: string, cantPersonas: number, costTotal: number, idUsuario: number, idHabitacion: number }): Promise<Habitacion | null> {
    try {
      const estado = await prisma.estados_tbl.findFirst({ where: { cod_estados: EstadosCodigos.RESE } })
      if (estado == null) {
        throw new Error('Estado not found')
      }
      const idEstado = estado.id_estado
      const reserva = await prisma.reserva_tbl.create({
        data: {
          fec_ent_reserva: fecInicio,
          fec_sal_reserva: fecFinal,
          des_reserva: desReserva,
          cos_tot_reserva: costTotal,
          id_usuario_reserva: idUsuario,
          id_estado_reserva: idEstado,
          can_per_reserva: cantPersonas,
          fec_reg_reserva: new Date()
        }
      })

      const estadoHabitacion = await prisma.estados_tbl.findFirst({ where: { cod_estados: EstadosCodigos.ENRE } })
      if (estadoHabitacion == null) {
        throw new Error('Estado not found')
      }
      const idEstadoHabitacion = estadoHabitacion?.id_estado
      await prisma.reserva_habitacion_tbl.create({
        data: {
          id_reserva_reserva_habitacion: reserva.id_reserva,
          id_habitacion_reserva_habitacion: idHabitacion,
          id_estado_reserva_habitacion: idEstadoHabitacion
        }
      })

      const habitacion = await prisma.habitacion_tbl.findFirst({ where: { id_habitacion: idHabitacion } })
      if (habitacion == null) {
        throw new Error('Habitacion not found')
      }
      return habitacion
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return null
    }
  }
}
