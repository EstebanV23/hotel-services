
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\dev\\my-hotel\\hotel-services\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\dev\\my-hotel\\hotel-services\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.20.0",
  "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel estados_tbl {\n  id_estado                         Int                      @unique @default(autoincrement())\n  nom_estados                       String?                  @db.VarChar(45)\n  cod_estados                       String?                  @db.VarChar(45)\n  ind_hab_estados                   Int?                     @db.TinyInt\n  grupo_estados_tbl_id_grupo_estado Int\n  grupo_estados_tbl                 grupo_estados_tbl        @relation(fields: [grupo_estados_tbl_id_grupo_estado], references: [id_grupo_estado], onDelete: NoAction, onUpdate: NoAction, map: \"fk_estados_tbl_grupo_estados_tbl1\")\n  reserva_habitacion_tbl            reserva_habitacion_tbl[]\n  reserva_tbl                       reserva_tbl[]\n\n  @@id([id_estado, grupo_estados_tbl_id_grupo_estado])\n  @@index([grupo_estados_tbl_id_grupo_estado], map: \"fk_estados_tbl_grupo_estados_tbl1_idx\")\n}\n\nmodel grupo_estados_tbl {\n  id_grupo_estado      Int           @id @default(autoincrement())\n  nom_grupo_estado     String?       @db.VarChar(45)\n  cod_grupo_estado     String?       @db.VarChar(45)\n  ind_hab_grupo_estado Int?          @db.TinyInt\n  estados_tbl          estados_tbl[]\n}\n\nmodel habitacion_tbl {\n  id_habitacion                  Int                      @unique @default(autoincrement())\n  des_habitacion                 String?                  @db.VarChar(200)\n  id_tipo_alojamiento_habitacion Int\n  tipo_alojamiento_tbl           tipo_alojamiento_tbl     @relation(fields: [id_tipo_alojamiento_habitacion], references: [id_tipo_alojamiento], onDelete: NoAction, onUpdate: NoAction, map: \"fk_habitacion_tbl_tipo_alojamiento_tbl1\")\n  reserva_habitacion_tbl         reserva_habitacion_tbl[]\n  servicio_habitacion            servicio_habitacion[]\n  images_tbl                     images_tbl[]\n\n  @@id([id_habitacion, id_tipo_alojamiento_habitacion])\n  @@index([id_tipo_alojamiento_habitacion], map: \"fk_habitacion_tbl_tipo_alojamiento_tbl1_idx\")\n}\n\nmodel reserva_habitacion_tbl {\n  id_reserva_reserva_habitacion    Int\n  id_habitacion_reserva_habitacion Int\n  id_estado_reserva_habitacion     Int\n  estados_tbl                      estados_tbl    @relation(fields: [id_estado_reserva_habitacion], references: [id_estado], onDelete: NoAction, onUpdate: NoAction, map: \"fk_reserva_tbl_has_habitacion_tbl_estados_tbl1\")\n  habitacion_tbl                   habitacion_tbl @relation(fields: [id_habitacion_reserva_habitacion], references: [id_habitacion], onDelete: NoAction, onUpdate: NoAction, map: \"fk_reserva_tbl_has_habitacion_tbl_habitacion_tbl1\")\n  reserva_tbl                      reserva_tbl    @relation(fields: [id_reserva_reserva_habitacion], references: [id_reserva], onDelete: NoAction, onUpdate: NoAction, map: \"fk_reserva_tbl_has_habitacion_tbl_reserva_tbl1\")\n\n  @@id([id_reserva_reserva_habitacion, id_habitacion_reserva_habitacion, id_estado_reserva_habitacion])\n  @@index([id_estado_reserva_habitacion], map: \"fk_reserva_tbl_has_habitacion_tbl_estados_tbl1_idx\")\n  @@index([id_habitacion_reserva_habitacion], map: \"fk_reserva_tbl_has_habitacion_tbl_habitacion_tbl1_idx\")\n  @@index([id_reserva_reserva_habitacion], map: \"fk_reserva_tbl_has_habitacion_tbl_reserva_tbl1_idx\")\n}\n\nmodel reserva_tbl {\n  id_reserva             Int                      @unique @default(autoincrement())\n  fec_ent_reserva        DateTime?                @db.DateTime(0)\n  fec_sal_reserva        DateTime?                @db.DateTime(0)\n  des_reserva            String?                  @db.VarChar(200)\n  can_per_reserva        Int?\n  cos_tot_reserva        Float?\n  fec_reg_reserva        DateTime?                @db.DateTime(0)\n  id_estado_reserva      Int\n  id_usuario_reserva     Int\n  reserva_habitacion_tbl reserva_habitacion_tbl[]\n  estados_tbl            estados_tbl              @relation(fields: [id_estado_reserva], references: [id_estado], onDelete: NoAction, onUpdate: NoAction, map: \"fk_reserva_tbl_estados_tbl1\")\n  usuario_tbl            usuario_tbl              @relation(fields: [id_usuario_reserva], references: [id_usuario], onDelete: NoAction, onUpdate: NoAction, map: \"fk_reserva_tbl_usuario_tbl1\")\n\n  @@id([id_reserva, id_estado_reserva, id_usuario_reserva])\n  @@index([id_estado_reserva], map: \"fk_reserva_tbl_estados_tbl1_idx\")\n  @@index([id_usuario_reserva], map: \"fk_reserva_tbl_usuario_tbl1_idx\")\n}\n\nmodel servicio_habitacion {\n  id_habitacion_servicio_habitacion Int\n  id_servicio_servicio_habitacion   Int\n  can_servicio_habitacion           Int?\n  habitacion_tbl                    habitacion_tbl @relation(fields: [id_habitacion_servicio_habitacion], references: [id_habitacion], onDelete: NoAction, onUpdate: NoAction, map: \"fk_habitacion_tbl_has_servicio_tbl_habitacion_tbl1\")\n  servicio_tbl                      servicio_tbl   @relation(fields: [id_servicio_servicio_habitacion], references: [id_servicio], onDelete: NoAction, onUpdate: NoAction, map: \"fk_habitacion_tbl_has_servicio_tbl_servicio_tbl1\")\n\n  @@id([id_habitacion_servicio_habitacion, id_servicio_servicio_habitacion])\n  @@index([id_habitacion_servicio_habitacion], map: \"fk_habitacion_tbl_has_servicio_tbl_habitacion_tbl1_idx\")\n  @@index([id_servicio_servicio_habitacion], map: \"fk_habitacion_tbl_has_servicio_tbl_servicio_tbl1_idx\")\n}\n\nmodel tipo_servicio_tbl {\n  id_tipo_servicio  Int            @id @default(autoincrement())\n  nom_tipo_servicio String?        @db.VarChar(45)\n  cod_tipo_servicio String?        @db.VarChar(45)\n  des_tipo_servicio String?        @db.VarChar(200)\n  ico_tipo_servicio String?        @db.VarChar(45)\n  servicio_tbl      servicio_tbl[]\n}\n\nmodel servicio_tbl {\n  id_servicio         Int                   @id @default(autoincrement())\n  nom_servicio        String?               @db.VarChar(45)\n  des_servicio        String?               @db.VarChar(200)\n  pre_servicio        Float?\n  ind_hab_servicio    Int?                  @db.TinyInt\n  can_per_servicio    Int?\n  id_tipo_servicio    Int\n  servicio_habitacion servicio_habitacion[]\n  tipo_servicio_tbl   tipo_servicio_tbl     @relation(fields: [id_tipo_servicio], references: [id_tipo_servicio], onDelete: NoAction, onUpdate: NoAction, map: \"fk_servicio_tbl_tipo_servicio_tbl1\")\n\n  @@index([id_tipo_servicio], map: \"fk_servicio_tbl_tipo_servicio_tbl1\")\n}\n\nmodel tipo_alojamiento_tbl {\n  id_tipo_alojamiento  Int              @id @default(autoincrement())\n  nom_tipo_alojamiento String?          @db.VarChar(45)\n  des_tipo_alojamiento String?          @db.VarChar(200)\n  ico_tipo_alojamiento String?          @db.VarChar(45)\n  habitacion_tbl       habitacion_tbl[]\n}\n\nmodel usuario_tbl {\n  id_usuario      Int           @id @default(autoincrement())\n  nom_usuario     String        @db.VarChar(45)\n  fec_nac_usuario DateTime      @db.DateTime(0)\n  tel_usuario     String        @db.VarChar(45)\n  ema_usuario     String        @db.VarChar(100)\n  dir_usuario     String?       @db.VarChar(100)\n  tip_doc_usuario String        @db.VarChar(45)\n  num_doc_usuario String        @db.VarChar(45)\n  con_usuario     String        @db.LongText\n  reserva_tbl     reserva_tbl[]\n}\n\nmodel images_tbl {\n  id_image       Int            @id @default(autoincrement())\n  url_image      String         @db.LongText\n  ind_pri_image  Int?           @db.TinyInt\n  id_habitacion  Int\n  habitacion_tbl habitacion_tbl @relation(fields: [id_habitacion], references: [id_habitacion], onDelete: NoAction, onUpdate: NoAction, map: \"fk_images_tbl_habitacion_tbl1\")\n\n  @@index([id_habitacion], map: \"fk_images_tbl_habitacion_tbl1_idx\")\n}\n",
  "inlineSchemaHash": "6c52778dc202551804da731653ef4df4d26464d275b6ba01043a86147d2de10d",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"estados_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_estados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_estados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ind_hab_estados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupo_estados_tbl_id_grupo_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"grupo_estados_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"grupo_estados_tbl\",\"relationName\":\"estados_tblTogrupo_estados_tbl\",\"relationFromFields\":[\"grupo_estados_tbl_id_grupo_estado\"],\"relationToFields\":[\"id_grupo_estado\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_habitacion_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_habitacion_tbl\",\"relationName\":\"estados_tblToreserva_habitacion_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_tbl\",\"relationName\":\"estados_tblToreserva_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_estado\",\"grupo_estados_tbl_id_grupo_estado\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"grupo_estados_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_grupo_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_grupo_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_grupo_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ind_hab_grupo_estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estados_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"estados_tbl\",\"relationName\":\"estados_tblTogrupo_estados_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"habitacion_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tipo_alojamiento_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_alojamiento_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_alojamiento_tbl\",\"relationName\":\"habitacion_tblTotipo_alojamiento_tbl\",\"relationFromFields\":[\"id_tipo_alojamiento_habitacion\"],\"relationToFields\":[\"id_tipo_alojamiento\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_habitacion_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_habitacion_tbl\",\"relationName\":\"habitacion_tblToreserva_habitacion_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicio_habitacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"servicio_habitacion\",\"relationName\":\"habitacion_tblToservicio_habitacion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"images_tbl\",\"relationName\":\"habitacion_tblToimages_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_habitacion\",\"id_tipo_alojamiento_habitacion\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reserva_habitacion_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_reserva_reserva_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_habitacion_reserva_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_estado_reserva_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estados_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"estados_tbl\",\"relationName\":\"estados_tblToreserva_habitacion_tbl\",\"relationFromFields\":[\"id_estado_reserva_habitacion\"],\"relationToFields\":[\"id_estado\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habitacion_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"habitacion_tbl\",\"relationName\":\"habitacion_tblToreserva_habitacion_tbl\",\"relationFromFields\":[\"id_habitacion_reserva_habitacion\"],\"relationToFields\":[\"id_habitacion\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_tbl\",\"relationName\":\"reserva_habitacion_tblToreserva_tbl\",\"relationFromFields\":[\"id_reserva_reserva_habitacion\"],\"relationToFields\":[\"id_reserva\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_reserva_reserva_habitacion\",\"id_habitacion_reserva_habitacion\",\"id_estado_reserva_habitacion\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reserva_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fec_ent_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fec_sal_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_per_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cos_tot_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fec_reg_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_estado_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_habitacion_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_habitacion_tbl\",\"relationName\":\"reserva_habitacion_tblToreserva_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estados_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"estados_tbl\",\"relationName\":\"estados_tblToreserva_tbl\",\"relationFromFields\":[\"id_estado_reserva\"],\"relationToFields\":[\"id_estado\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_tbl\",\"relationName\":\"reserva_tblTousuario_tbl\",\"relationFromFields\":[\"id_usuario_reserva\"],\"relationToFields\":[\"id_usuario\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_reserva\",\"id_estado_reserva\",\"id_usuario_reserva\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"servicio_habitacion\":{\"dbName\":null,\"fields\":[{\"name\":\"id_habitacion_servicio_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_servicio_servicio_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_servicio_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habitacion_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"habitacion_tbl\",\"relationName\":\"habitacion_tblToservicio_habitacion\",\"relationFromFields\":[\"id_habitacion_servicio_habitacion\"],\"relationToFields\":[\"id_habitacion\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicio_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"servicio_tbl\",\"relationName\":\"servicio_habitacionToservicio_tbl\",\"relationFromFields\":[\"id_servicio_servicio_habitacion\"],\"relationToFields\":[\"id_servicio\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id_habitacion_servicio_habitacion\",\"id_servicio_servicio_habitacion\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tipo_servicio_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_tipo_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_tipo_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_tipo_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des_tipo_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ico_tipo_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicio_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"servicio_tbl\",\"relationName\":\"servicio_tblTotipo_servicio_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"servicio_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pre_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ind_hab_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"can_per_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_tipo_servicio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"servicio_habitacion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"servicio_habitacion\",\"relationName\":\"servicio_habitacionToservicio_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_servicio_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tipo_servicio_tbl\",\"relationName\":\"servicio_tblTotipo_servicio_tbl\",\"relationFromFields\":[\"id_tipo_servicio\"],\"relationToFields\":[\"id_tipo_servicio\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tipo_alojamiento_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_tipo_alojamiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_tipo_alojamiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"des_tipo_alojamiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ico_tipo_alojamiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habitacion_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"habitacion_tbl\",\"relationName\":\"habitacion_tblTotipo_alojamiento_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"usuario_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fec_nac_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ema_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dir_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tip_doc_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_doc_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"con_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_tbl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_tbl\",\"relationName\":\"reserva_tblTousuario_tbl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"images_tbl\":{\"dbName\":null,\"fields\":[{\"name\":\"id_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ind_pri_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_habitacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"habitacion_tbl\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"habitacion_tbl\",\"relationName\":\"habitacion_tblToimages_tbl\",\"relationFromFields\":[\"id_habitacion\"],\"relationToFields\":[\"id_habitacion\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/client/schema.prisma")
