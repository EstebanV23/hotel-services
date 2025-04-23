export class HabitacionModel {
  idHabitacion = 0
  desHabitacion = ''
  idTipoAlojamientoHabitacion = 0

  constructor (idHabitacion: number, desHabitacion: string, idTipoAlojamientoHabitacion: number) {
    this.idHabitacion = idHabitacion
    this.desHabitacion = desHabitacion
    this.idTipoAlojamientoHabitacion = idTipoAlojamientoHabitacion
  }
}
