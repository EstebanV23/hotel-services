import { Request, Response } from 'express'
import { ReservaService } from '../services/ReservaService'
import { errorResponse, successReponse } from '../../../utils/reponseStructure'

const reservaService = new ReservaService()

export default async function buscarMisReservas (req: Request, res: Response): Promise<Response> {
  try {
    const { userid } = req.headers
    const reservas = await reservaService.findByIdUsuario({ idUsuario: Number(userid) })
    return successReponse({ data: reservas, message: 'Reservas encontradas', res })
  } catch (error: any) {
    console.error(error)
    return errorResponse({ status: 500, message: 'Internal server error', res })
  }
}
