import config from '../../../config/config'
import { Servicio } from '../models/Servicio'

const prisma = config.prisma

export default class ServicioServices {
  async findAll (): Promise<Servicio[]> {
    return await prisma.servicio_tbl.findMany({
      include: {
        tipo_servicio_tbl: true
      }
    })
  }
}
