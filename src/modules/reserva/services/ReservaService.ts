import config from '../../../config/config'
import { Reserva } from '../models/Reserva'

const prisma = config.prisma
export class ReservaService {
  async findByIdUsuario ({ idUsuario }: { idUsuario: number }): Promise<Reserva[]> {
    return await prisma.reserva_tbl.findMany({
      where: {
        id_usuario_reserva: idUsuario
      },
      include: {
        reserva_habitacion_tbl: {
          include: {
            habitacion_tbl: {
              include: {
                images_tbl: true
              }
            }
          }
        },
        estados_tbl: true
      }
    })
  }
}
