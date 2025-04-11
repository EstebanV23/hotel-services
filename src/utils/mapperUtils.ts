import { Usuario, UsuarioResponse } from '../modules/usuario/models/Usuario'

export function usuarioToUsuarioResponse (usuario: Usuario): UsuarioResponse {
  return {
    id_usuario: usuario.id_usuario,
    nom_usuario: usuario.nom_usuario,
    ema_usuario: usuario.ema_usuario,
    fec_nac_usuario: usuario.fec_nac_usuario,
    dir_usuario: usuario.dir_usuario,
    tel_usuario: usuario.tel_usuario
  }
}
