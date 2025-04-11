import { Response, Request } from 'express'
import AuthService from '../services/AuthService'
import { errorResponse, successReponse } from '../../../utils/reponseStructure'
import { usuarioToUsuarioResponse } from '../../../utils/mapperUtils'
import { generateToken } from '../../../utils/jwtUtils'

const authService = new AuthService()

export async function login (req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body
  const usuario = await authService.login({ email, password })

  if (usuario === null) {
    return errorResponse({ message: 'Usuario o contraseña incorrectos', res, status: 401 })
  }

  const user = usuarioToUsuarioResponse(usuario)
  const token = await generateToken(user)

  return successReponse({ data: { token, user }, message: 'Usuario logueado', res })
}

export async function register (req: Request, res: Response): Promise<Response> {
  const usuario = req.body
  const userFound = await authService.register({ usuario })

  if (userFound === null) {
    return errorResponse({ status: 401, message: 'Error al registrar usuario', res })
  }

  const user = usuarioToUsuarioResponse(userFound)

  if (user.id_usuario === -1) {
    return errorResponse({ status: 400, message: `Usuario ya registrado con el correo ${user.ema_usuario}`, res })
  }

  const token = await generateToken(user)

  return successReponse({ data: { token, user }, message: 'Usuario registrado', res })
}
