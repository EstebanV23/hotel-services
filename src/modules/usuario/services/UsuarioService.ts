import config from '../../../config/config'
import { Usuario, UsuarioResponse } from '../models/Usuario'

const prisma = config.prisma

export default class UsuarioService {
  async create ({ usuario }: { usuario: Usuario }): Promise<Usuario> {
    usuario.fec_nac_usuario = new Date(usuario.fec_nac_usuario as unknown as string)
    return await prisma.usuario_tbl.create({ data: usuario })
  }

  async findAll (): Promise<Usuario[]> {
    return await prisma.usuario_tbl.findMany()
  }

  async findOne ({ idUsuario }: { idUsuario: number }): Promise<Usuario | null> {
    return await prisma.usuario_tbl.findUnique({ where: { id_usuario: idUsuario } })
  }

  async update ({ idUsuario, usuario }: { idUsuario: number, usuario: Usuario }): Promise<Usuario> {
    return await prisma.usuario_tbl.update({ where: { id_usuario: idUsuario }, data: usuario })
  }

  async delete ({ idUsuario }: { idUsuario: number }): Promise<Usuario> {
    return await prisma.usuario_tbl.delete({ where: { id_usuario: idUsuario } })
  }

  async findByEmail ({ email }: { email: string }): Promise<Usuario | null> {
    return await prisma.usuario_tbl.findFirst({
      where: {
        ema_usuario: email
      }
    })
  }
}
