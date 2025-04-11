
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Estados_tblScalarFieldEnum = {
  id_estado: 'id_estado',
  nom_estados: 'nom_estados',
  cod_estados: 'cod_estados',
  ind_hab_estados: 'ind_hab_estados',
  grupo_estados_tbl_id_grupo_estado: 'grupo_estados_tbl_id_grupo_estado'
};

exports.Prisma.Grupo_estados_tblScalarFieldEnum = {
  id_grupo_estado: 'id_grupo_estado',
  nom_grupo_estado: 'nom_grupo_estado',
  cod_grupo_estado: 'cod_grupo_estado',
  ind_hab_grupo_estado: 'ind_hab_grupo_estado'
};

exports.Prisma.Habitacion_tblScalarFieldEnum = {
  id_habitacion: 'id_habitacion',
  des_habitacion: 'des_habitacion',
  id_tipo_alojamiento_habitacion: 'id_tipo_alojamiento_habitacion'
};

exports.Prisma.Reserva_habitacion_tblScalarFieldEnum = {
  id_reserva_reserva_habitacion: 'id_reserva_reserva_habitacion',
  id_habitacion_reserva_habitacion: 'id_habitacion_reserva_habitacion',
  id_estado_reserva_habitacion: 'id_estado_reserva_habitacion'
};

exports.Prisma.Reserva_tblScalarFieldEnum = {
  id_reserva: 'id_reserva',
  fec_ent_reserva: 'fec_ent_reserva',
  fec_sal_reserva: 'fec_sal_reserva',
  des_reserva: 'des_reserva',
  can_per_reserva: 'can_per_reserva',
  cos_tot_reserva: 'cos_tot_reserva',
  fec_reg_reserva: 'fec_reg_reserva',
  id_estado_reserva: 'id_estado_reserva',
  id_usuario_reserva: 'id_usuario_reserva'
};

exports.Prisma.Servicio_habitacionScalarFieldEnum = {
  id_habitacion_servicio_habitacion: 'id_habitacion_servicio_habitacion',
  id_servicio_servicio_habitacion: 'id_servicio_servicio_habitacion',
  can_servicio_habitacion: 'can_servicio_habitacion'
};

exports.Prisma.Tipo_servicio_tblScalarFieldEnum = {
  id_tipo_servicio: 'id_tipo_servicio',
  nom_tipo_servicio: 'nom_tipo_servicio',
  cod_tipo_servicio: 'cod_tipo_servicio',
  des_tipo_servicio: 'des_tipo_servicio',
  ico_tipo_servicio: 'ico_tipo_servicio'
};

exports.Prisma.Servicio_tblScalarFieldEnum = {
  id_servicio: 'id_servicio',
  nom_servicio: 'nom_servicio',
  des_servicio: 'des_servicio',
  pre_servicio: 'pre_servicio',
  ind_hab_servicio: 'ind_hab_servicio',
  can_per_servicio: 'can_per_servicio',
  id_tipo_servicio: 'id_tipo_servicio'
};

exports.Prisma.Tipo_alojamiento_tblScalarFieldEnum = {
  id_tipo_alojamiento: 'id_tipo_alojamiento',
  nom_tipo_alojamiento: 'nom_tipo_alojamiento',
  des_tipo_alojamiento: 'des_tipo_alojamiento',
  ico_tipo_alojamiento: 'ico_tipo_alojamiento'
};

exports.Prisma.Usuario_tblScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nom_usuario: 'nom_usuario',
  fec_nac_usuario: 'fec_nac_usuario',
  tel_usuario: 'tel_usuario',
  ema_usuario: 'ema_usuario',
  dir_usuario: 'dir_usuario',
  tip_doc_usuario: 'tip_doc_usuario',
  num_doc_usuario: 'num_doc_usuario',
  con_usuario: 'con_usuario'
};

exports.Prisma.Images_tblScalarFieldEnum = {
  id_image: 'id_image',
  url_image: 'url_image',
  ind_pri_image: 'ind_pri_image',
  id_habitacion: 'id_habitacion'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  estados_tbl: 'estados_tbl',
  grupo_estados_tbl: 'grupo_estados_tbl',
  habitacion_tbl: 'habitacion_tbl',
  reserva_habitacion_tbl: 'reserva_habitacion_tbl',
  reserva_tbl: 'reserva_tbl',
  servicio_habitacion: 'servicio_habitacion',
  tipo_servicio_tbl: 'tipo_servicio_tbl',
  servicio_tbl: 'servicio_tbl',
  tipo_alojamiento_tbl: 'tipo_alojamiento_tbl',
  usuario_tbl: 'usuario_tbl',
  images_tbl: 'images_tbl'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
