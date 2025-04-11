import { Request, Response } from 'express'
import { TipoAlojamiento } from '../models/TipoAlojamiento'
import TipoAlojamientoService from '../services/TipoAlojamientoService'

const tipoAlojamientoService = new TipoAlojamientoService()

export async function getAllTipoAlojamiento (_req: Request, res: Response): Promise<Response> {
  try {
    const tipoAlojamiento: TipoAlojamiento[] = await tipoAlojamientoService.findAll()
    return res.json(tipoAlojamiento)
  } catch (error: any) {
    console.log(error)
    return res.json({ error: error.message })
  }
}

export async function createTipoAlojamiento (req: Request, res: Response): Promise<Response> {
  try {
    const tipoAlojamiento: TipoAlojamiento = req.body
    const newTipoAlojamiento: TipoAlojamiento = await tipoAlojamientoService.create({ tipoAlojamiento })
    return res.json(newTipoAlojamiento)
  } catch (error: any) {
    console.error(error)
    return res.json({ error: error.message })
  }
}
