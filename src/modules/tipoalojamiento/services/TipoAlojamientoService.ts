import { TipoAlojamiento } from '../models/TipoAlojamiento'
import config from '../../../config/config'

const prisma = config.prisma

class TipoAlojamientoService {
  async create ({ tipoAlojamiento }: { tipoAlojamiento: TipoAlojamiento }): Promise<TipoAlojamiento> {
    return await prisma.tipo_alojamiento_tbl.create({ data: tipoAlojamiento })
  }

  async findAll (): Promise<TipoAlojamiento[]> {
    return await prisma.tipo_alojamiento_tbl.findMany()
  }

  async findOne ({ idTipoAlojamiento }: { idTipoAlojamiento: number }): Promise<TipoAlojamiento | null> {
    return await prisma.tipo_alojamiento_tbl.findUnique({ where: { id_tipo_alojamiento: idTipoAlojamiento } })
  }

  async update ({ idTipoAlojamiento, tipoAlojamiento }: { idTipoAlojamiento: number, tipoAlojamiento: TipoAlojamiento }): Promise<TipoAlojamiento> {
    return await prisma.tipo_alojamiento_tbl.update({ where: { id_tipo_alojamiento: idTipoAlojamiento }, data: tipoAlojamiento })
  }

  async delete ({ idTipoAlojamiento }: { idTipoAlojamiento: number }): Promise<TipoAlojamiento> {
    return await prisma.tipo_alojamiento_tbl.delete({ where: { id_tipo_alojamiento: idTipoAlojamiento } })
  }
}

export default TipoAlojamientoService
