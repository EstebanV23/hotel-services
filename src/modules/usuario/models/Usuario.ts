import { Prisma } from '../../../generated/client'

export type Usuario = Prisma.usuario_tblGetPayload<Prisma.usuario_tblDefaultArgs>

export interface UsuarioResponse {
  id_usuario: number
  nom_usuario: string
  ema_usuario: string
  fec_nac_usuario: Date
  dir_usuario: string | null
  tel_usuario: string
}
