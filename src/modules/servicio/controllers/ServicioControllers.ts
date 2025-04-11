import { Request, Response } from 'express'
import { errorResponse, successReponse } from '../../../utils/reponseStructure'
import ServicioServices from '../services/ServicioServices'

const servicioService = new ServicioServices()

export async function getAllServicios (req: Request, res: Response): Promise<Response> {
  try {
    return successReponse({ data: await servicioService.findAll(), message: 'Servicios encontrados', res })
  } catch (error) {
    console.error(error)
    return errorResponse({ status: 500, message: 'Internal server error', res })
  }
}
