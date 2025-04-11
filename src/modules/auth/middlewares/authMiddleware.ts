// Cerate a middleware to validate JWT token

import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../../../utils/jwtUtils'
import { validateData } from '../../../utils/validateDataUtils'
import { errorResponse } from '../../../utils/reponseStructure'

export async function authMiddleware (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tokenHeader = req.headers.authorization?.split(' ')

    if (!validateData(tokenHeader)) {
      errorResponse({ status: 401, message: 'No token provided', res })
      return
    }

    const [bearer, token] = tokenHeader as string[]

    if (bearer.toLowerCase() !== 'bearer' || !validateData(token)) {
      errorResponse({ status: 401, message: 'Invalid token, Unauthorized', res })
      return
    }

    const tokenData = await verifyToken(token)

    if (tokenData === null) {
      errorResponse({ status: 401, message: 'Invalid token, Unauthorized', res })
      return
    }
    req.headers.userid = String(tokenData.payload.id_usuario)
    next()
  } catch (error: any) {
    console.error(error)
    errorResponse({ status: 500, message: 'Internal server error', res })
  }
}
