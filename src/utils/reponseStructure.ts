import { response, Response } from 'express'

interface ResponseStructure {
  status?: number
  message: string
  data?: any
  res: Response
}

export function successReponse ({ data, message, res }: ResponseStructure): Response<ResponseStructure> {
  const status = 200
  return res.status(status).json({ status, message, data: data ?? null })
}

export function errorResponse ({ data, message, status, res }: ResponseStructure): Response<ResponseStructure> {
  return res.status(status ?? 500).json({ status, error: message, message, data: data ?? null })
}
