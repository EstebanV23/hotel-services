import { Request, Response } from 'express'
import { Usuario } from '../models/Usuario'
import UsuarioService from '../services/UsuarioService'

const userService = new UsuarioService()

export async function getAllUsers (_req: Request, res: Response): Promise<Response> {
  try {
    const usuarios: Usuario[] = await userService.findAll()
    return res.json(usuarios)
  } catch (error: any) {
    console.log(error)
    return res.json({ error: error.message })
  }
}

export async function findById (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const usuario: Usuario | null = await userService.findOne({ idUsuario: Number(id) })
    return res.json(usuario)
  } catch (error: any) {
    console.error(error)
    return res.json({ error: error.message })
  }
}
