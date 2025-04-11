import { hashPassword, comparePassword } from '../../../utils/bcryptUtils'
import { Usuario, UsuarioResponse } from '../../usuario/models/Usuario'
import UsuarioService from '../../usuario/services/UsuarioService'

export default class AuthService {
  private readonly usuarioService: UsuarioService

  constructor () {
    this.usuarioService = new UsuarioService()
  }

  async login ({ email, password }: { email: string, password: string }): Promise<Usuario | null> {
    try {
      const usuario = await this.usuarioService.findByEmail({ email })

      if (usuario === null) {
        return null
      }

      const isCorrectPassword = await comparePassword({ password, hash: usuario.con_usuario })

      if (!isCorrectPassword) {
        return null
      }

      return usuario
    } catch (error) {
      console.error('Error al hacer login')
      return null
    }
  }

  async register ({ usuario }: { usuario: Usuario }): Promise<Usuario | null> {
    try {
      const registerUser = await this.usuarioService.findByEmail({ email: usuario.ema_usuario })
      if (registerUser !== null) {
        registerUser.id_usuario = -1
        return registerUser
      }

      const hash = await hashPassword({ password: usuario.con_usuario })
      if (hash === null) {
        throw new Error('Error al hashear la contraseña')
      }

      usuario.con_usuario = hash

      return await this.usuarioService.create({ usuario })
    } catch (error) {
      console.error('Error al registrar usuario')
      console.error(error)
      return null
    }
  }
}
