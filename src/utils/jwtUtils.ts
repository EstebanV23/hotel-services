import * as jose from 'jose'
import config from '../config/config'
import { UsuarioResponse } from '../modules/usuario/models/Usuario'

const secret = new TextEncoder().encode(config.jwtToken)
const alg = 'HS256'

export const generateToken = async (usuario: UsuarioResponse): Promise<string | null> => {
  try {
    const jwt = await new jose.SignJWT({ ...usuario })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime('12h')
      .sign(secret)
    return jwt
  } catch (error) {
    console.error('Error al generar token')
    console.error(error)
    return null
  }
}

export const verifyToken = async (token?: string): Promise<any> => {
  try {
    if (token === undefined) {
      return null
    }
    const payload = await jose.jwtVerify(token, secret)
    return payload
  } catch (error) {
    console.error('Error al verificar token')
    console.error(error)
    return null
  }
}
