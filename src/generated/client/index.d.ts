
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model estados_tbl
 * 
 */
export type estados_tbl = $Result.DefaultSelection<Prisma.$estados_tblPayload>
/**
 * Model grupo_estados_tbl
 * 
 */
export type grupo_estados_tbl = $Result.DefaultSelection<Prisma.$grupo_estados_tblPayload>
/**
 * Model habitacion_tbl
 * 
 */
export type habitacion_tbl = $Result.DefaultSelection<Prisma.$habitacion_tblPayload>
/**
 * Model reserva_habitacion_tbl
 * 
 */
export type reserva_habitacion_tbl = $Result.DefaultSelection<Prisma.$reserva_habitacion_tblPayload>
/**
 * Model reserva_tbl
 * 
 */
export type reserva_tbl = $Result.DefaultSelection<Prisma.$reserva_tblPayload>
/**
 * Model servicio_habitacion
 * 
 */
export type servicio_habitacion = $Result.DefaultSelection<Prisma.$servicio_habitacionPayload>
/**
 * Model tipo_servicio_tbl
 * 
 */
export type tipo_servicio_tbl = $Result.DefaultSelection<Prisma.$tipo_servicio_tblPayload>
/**
 * Model servicio_tbl
 * 
 */
export type servicio_tbl = $Result.DefaultSelection<Prisma.$servicio_tblPayload>
/**
 * Model tipo_alojamiento_tbl
 * 
 */
export type tipo_alojamiento_tbl = $Result.DefaultSelection<Prisma.$tipo_alojamiento_tblPayload>
/**
 * Model usuario_tbl
 * 
 */
export type usuario_tbl = $Result.DefaultSelection<Prisma.$usuario_tblPayload>
/**
 * Model images_tbl
 * 
 */
export type images_tbl = $Result.DefaultSelection<Prisma.$images_tblPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estados_tbls
 * const estados_tbls = await prisma.estados_tbl.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Estados_tbls
   * const estados_tbls = await prisma.estados_tbl.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.estados_tbl`: Exposes CRUD operations for the **estados_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados_tbls
    * const estados_tbls = await prisma.estados_tbl.findMany()
    * ```
    */
  get estados_tbl(): Prisma.estados_tblDelegate<ExtArgs>;

  /**
   * `prisma.grupo_estados_tbl`: Exposes CRUD operations for the **grupo_estados_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupo_estados_tbls
    * const grupo_estados_tbls = await prisma.grupo_estados_tbl.findMany()
    * ```
    */
  get grupo_estados_tbl(): Prisma.grupo_estados_tblDelegate<ExtArgs>;

  /**
   * `prisma.habitacion_tbl`: Exposes CRUD operations for the **habitacion_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habitacion_tbls
    * const habitacion_tbls = await prisma.habitacion_tbl.findMany()
    * ```
    */
  get habitacion_tbl(): Prisma.habitacion_tblDelegate<ExtArgs>;

  /**
   * `prisma.reserva_habitacion_tbl`: Exposes CRUD operations for the **reserva_habitacion_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reserva_habitacion_tbls
    * const reserva_habitacion_tbls = await prisma.reserva_habitacion_tbl.findMany()
    * ```
    */
  get reserva_habitacion_tbl(): Prisma.reserva_habitacion_tblDelegate<ExtArgs>;

  /**
   * `prisma.reserva_tbl`: Exposes CRUD operations for the **reserva_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reserva_tbls
    * const reserva_tbls = await prisma.reserva_tbl.findMany()
    * ```
    */
  get reserva_tbl(): Prisma.reserva_tblDelegate<ExtArgs>;

  /**
   * `prisma.servicio_habitacion`: Exposes CRUD operations for the **servicio_habitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicio_habitacions
    * const servicio_habitacions = await prisma.servicio_habitacion.findMany()
    * ```
    */
  get servicio_habitacion(): Prisma.servicio_habitacionDelegate<ExtArgs>;

  /**
   * `prisma.tipo_servicio_tbl`: Exposes CRUD operations for the **tipo_servicio_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_servicio_tbls
    * const tipo_servicio_tbls = await prisma.tipo_servicio_tbl.findMany()
    * ```
    */
  get tipo_servicio_tbl(): Prisma.tipo_servicio_tblDelegate<ExtArgs>;

  /**
   * `prisma.servicio_tbl`: Exposes CRUD operations for the **servicio_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicio_tbls
    * const servicio_tbls = await prisma.servicio_tbl.findMany()
    * ```
    */
  get servicio_tbl(): Prisma.servicio_tblDelegate<ExtArgs>;

  /**
   * `prisma.tipo_alojamiento_tbl`: Exposes CRUD operations for the **tipo_alojamiento_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_alojamiento_tbls
    * const tipo_alojamiento_tbls = await prisma.tipo_alojamiento_tbl.findMany()
    * ```
    */
  get tipo_alojamiento_tbl(): Prisma.tipo_alojamiento_tblDelegate<ExtArgs>;

  /**
   * `prisma.usuario_tbl`: Exposes CRUD operations for the **usuario_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_tbls
    * const usuario_tbls = await prisma.usuario_tbl.findMany()
    * ```
    */
  get usuario_tbl(): Prisma.usuario_tblDelegate<ExtArgs>;

  /**
   * `prisma.images_tbl`: Exposes CRUD operations for the **images_tbl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images_tbls
    * const images_tbls = await prisma.images_tbl.findMany()
    * ```
    */
  get images_tbl(): Prisma.images_tblDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "estados_tbl" | "grupo_estados_tbl" | "habitacion_tbl" | "reserva_habitacion_tbl" | "reserva_tbl" | "servicio_habitacion" | "tipo_servicio_tbl" | "servicio_tbl" | "tipo_alojamiento_tbl" | "usuario_tbl" | "images_tbl"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      estados_tbl: {
        payload: Prisma.$estados_tblPayload<ExtArgs>
        fields: Prisma.estados_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estados_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estados_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>
          }
          findFirst: {
            args: Prisma.estados_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estados_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>
          }
          findMany: {
            args: Prisma.estados_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>[]
          }
          create: {
            args: Prisma.estados_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>
          }
          createMany: {
            args: Prisma.estados_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estados_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>
          }
          update: {
            args: Prisma.estados_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>
          }
          deleteMany: {
            args: Prisma.estados_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estados_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estados_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estados_tblPayload>
          }
          aggregate: {
            args: Prisma.Estados_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstados_tbl>
          }
          groupBy: {
            args: Prisma.estados_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estados_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.estados_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Estados_tblCountAggregateOutputType> | number
          }
        }
      }
      grupo_estados_tbl: {
        payload: Prisma.$grupo_estados_tblPayload<ExtArgs>
        fields: Prisma.grupo_estados_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grupo_estados_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grupo_estados_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>
          }
          findFirst: {
            args: Prisma.grupo_estados_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grupo_estados_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>
          }
          findMany: {
            args: Prisma.grupo_estados_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>[]
          }
          create: {
            args: Prisma.grupo_estados_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>
          }
          createMany: {
            args: Prisma.grupo_estados_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.grupo_estados_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>
          }
          update: {
            args: Prisma.grupo_estados_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>
          }
          deleteMany: {
            args: Prisma.grupo_estados_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grupo_estados_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.grupo_estados_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grupo_estados_tblPayload>
          }
          aggregate: {
            args: Prisma.Grupo_estados_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrupo_estados_tbl>
          }
          groupBy: {
            args: Prisma.grupo_estados_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Grupo_estados_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.grupo_estados_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Grupo_estados_tblCountAggregateOutputType> | number
          }
        }
      }
      habitacion_tbl: {
        payload: Prisma.$habitacion_tblPayload<ExtArgs>
        fields: Prisma.habitacion_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.habitacion_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.habitacion_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>
          }
          findFirst: {
            args: Prisma.habitacion_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.habitacion_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>
          }
          findMany: {
            args: Prisma.habitacion_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>[]
          }
          create: {
            args: Prisma.habitacion_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>
          }
          createMany: {
            args: Prisma.habitacion_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.habitacion_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>
          }
          update: {
            args: Prisma.habitacion_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>
          }
          deleteMany: {
            args: Prisma.habitacion_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.habitacion_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.habitacion_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$habitacion_tblPayload>
          }
          aggregate: {
            args: Prisma.Habitacion_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitacion_tbl>
          }
          groupBy: {
            args: Prisma.habitacion_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Habitacion_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.habitacion_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Habitacion_tblCountAggregateOutputType> | number
          }
        }
      }
      reserva_habitacion_tbl: {
        payload: Prisma.$reserva_habitacion_tblPayload<ExtArgs>
        fields: Prisma.reserva_habitacion_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reserva_habitacion_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reserva_habitacion_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>
          }
          findFirst: {
            args: Prisma.reserva_habitacion_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reserva_habitacion_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>
          }
          findMany: {
            args: Prisma.reserva_habitacion_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>[]
          }
          create: {
            args: Prisma.reserva_habitacion_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>
          }
          createMany: {
            args: Prisma.reserva_habitacion_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reserva_habitacion_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>
          }
          update: {
            args: Prisma.reserva_habitacion_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>
          }
          deleteMany: {
            args: Prisma.reserva_habitacion_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reserva_habitacion_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reserva_habitacion_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_habitacion_tblPayload>
          }
          aggregate: {
            args: Prisma.Reserva_habitacion_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva_habitacion_tbl>
          }
          groupBy: {
            args: Prisma.reserva_habitacion_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reserva_habitacion_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.reserva_habitacion_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Reserva_habitacion_tblCountAggregateOutputType> | number
          }
        }
      }
      reserva_tbl: {
        payload: Prisma.$reserva_tblPayload<ExtArgs>
        fields: Prisma.reserva_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reserva_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reserva_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>
          }
          findFirst: {
            args: Prisma.reserva_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reserva_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>
          }
          findMany: {
            args: Prisma.reserva_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>[]
          }
          create: {
            args: Prisma.reserva_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>
          }
          createMany: {
            args: Prisma.reserva_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reserva_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>
          }
          update: {
            args: Prisma.reserva_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>
          }
          deleteMany: {
            args: Prisma.reserva_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reserva_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reserva_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_tblPayload>
          }
          aggregate: {
            args: Prisma.Reserva_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva_tbl>
          }
          groupBy: {
            args: Prisma.reserva_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reserva_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.reserva_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Reserva_tblCountAggregateOutputType> | number
          }
        }
      }
      servicio_habitacion: {
        payload: Prisma.$servicio_habitacionPayload<ExtArgs>
        fields: Prisma.servicio_habitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicio_habitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicio_habitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>
          }
          findFirst: {
            args: Prisma.servicio_habitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicio_habitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>
          }
          findMany: {
            args: Prisma.servicio_habitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>[]
          }
          create: {
            args: Prisma.servicio_habitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>
          }
          createMany: {
            args: Prisma.servicio_habitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.servicio_habitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>
          }
          update: {
            args: Prisma.servicio_habitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>
          }
          deleteMany: {
            args: Prisma.servicio_habitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicio_habitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servicio_habitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_habitacionPayload>
          }
          aggregate: {
            args: Prisma.Servicio_habitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio_habitacion>
          }
          groupBy: {
            args: Prisma.servicio_habitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Servicio_habitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicio_habitacionCountArgs<ExtArgs>
            result: $Utils.Optional<Servicio_habitacionCountAggregateOutputType> | number
          }
        }
      }
      tipo_servicio_tbl: {
        payload: Prisma.$tipo_servicio_tblPayload<ExtArgs>
        fields: Prisma.tipo_servicio_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_servicio_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_servicio_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>
          }
          findFirst: {
            args: Prisma.tipo_servicio_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_servicio_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>
          }
          findMany: {
            args: Prisma.tipo_servicio_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>[]
          }
          create: {
            args: Prisma.tipo_servicio_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>
          }
          createMany: {
            args: Prisma.tipo_servicio_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_servicio_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>
          }
          update: {
            args: Prisma.tipo_servicio_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>
          }
          deleteMany: {
            args: Prisma.tipo_servicio_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_servicio_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_servicio_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_servicio_tblPayload>
          }
          aggregate: {
            args: Prisma.Tipo_servicio_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_servicio_tbl>
          }
          groupBy: {
            args: Prisma.tipo_servicio_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_servicio_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_servicio_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_servicio_tblCountAggregateOutputType> | number
          }
        }
      }
      servicio_tbl: {
        payload: Prisma.$servicio_tblPayload<ExtArgs>
        fields: Prisma.servicio_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicio_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicio_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>
          }
          findFirst: {
            args: Prisma.servicio_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicio_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>
          }
          findMany: {
            args: Prisma.servicio_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>[]
          }
          create: {
            args: Prisma.servicio_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>
          }
          createMany: {
            args: Prisma.servicio_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.servicio_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>
          }
          update: {
            args: Prisma.servicio_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>
          }
          deleteMany: {
            args: Prisma.servicio_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicio_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servicio_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicio_tblPayload>
          }
          aggregate: {
            args: Prisma.Servicio_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio_tbl>
          }
          groupBy: {
            args: Prisma.servicio_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Servicio_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicio_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Servicio_tblCountAggregateOutputType> | number
          }
        }
      }
      tipo_alojamiento_tbl: {
        payload: Prisma.$tipo_alojamiento_tblPayload<ExtArgs>
        fields: Prisma.tipo_alojamiento_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_alojamiento_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_alojamiento_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>
          }
          findFirst: {
            args: Prisma.tipo_alojamiento_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_alojamiento_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>
          }
          findMany: {
            args: Prisma.tipo_alojamiento_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>[]
          }
          create: {
            args: Prisma.tipo_alojamiento_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>
          }
          createMany: {
            args: Prisma.tipo_alojamiento_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipo_alojamiento_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>
          }
          update: {
            args: Prisma.tipo_alojamiento_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>
          }
          deleteMany: {
            args: Prisma.tipo_alojamiento_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_alojamiento_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipo_alojamiento_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_alojamiento_tblPayload>
          }
          aggregate: {
            args: Prisma.Tipo_alojamiento_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_alojamiento_tbl>
          }
          groupBy: {
            args: Prisma.tipo_alojamiento_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_alojamiento_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_alojamiento_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_alojamiento_tblCountAggregateOutputType> | number
          }
        }
      }
      usuario_tbl: {
        payload: Prisma.$usuario_tblPayload<ExtArgs>
        fields: Prisma.usuario_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>
          }
          findFirst: {
            args: Prisma.usuario_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>
          }
          findMany: {
            args: Prisma.usuario_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>[]
          }
          create: {
            args: Prisma.usuario_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>
          }
          createMany: {
            args: Prisma.usuario_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuario_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>
          }
          update: {
            args: Prisma.usuario_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>
          }
          deleteMany: {
            args: Prisma.usuario_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuario_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_tblPayload>
          }
          aggregate: {
            args: Prisma.Usuario_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_tbl>
          }
          groupBy: {
            args: Prisma.usuario_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_tblCountAggregateOutputType> | number
          }
        }
      }
      images_tbl: {
        payload: Prisma.$images_tblPayload<ExtArgs>
        fields: Prisma.images_tblFieldRefs
        operations: {
          findUnique: {
            args: Prisma.images_tblFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.images_tblFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>
          }
          findFirst: {
            args: Prisma.images_tblFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.images_tblFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>
          }
          findMany: {
            args: Prisma.images_tblFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>[]
          }
          create: {
            args: Prisma.images_tblCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>
          }
          createMany: {
            args: Prisma.images_tblCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.images_tblDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>
          }
          update: {
            args: Prisma.images_tblUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>
          }
          deleteMany: {
            args: Prisma.images_tblDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.images_tblUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.images_tblUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$images_tblPayload>
          }
          aggregate: {
            args: Prisma.Images_tblAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages_tbl>
          }
          groupBy: {
            args: Prisma.images_tblGroupByArgs<ExtArgs>
            result: $Utils.Optional<Images_tblGroupByOutputType>[]
          }
          count: {
            args: Prisma.images_tblCountArgs<ExtArgs>
            result: $Utils.Optional<Images_tblCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Estados_tblCountOutputType
   */

  export type Estados_tblCountOutputType = {
    reserva_habitacion_tbl: number
    reserva_tbl: number
  }

  export type Estados_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_habitacion_tbl?: boolean | Estados_tblCountOutputTypeCountReserva_habitacion_tblArgs
    reserva_tbl?: boolean | Estados_tblCountOutputTypeCountReserva_tblArgs
  }

  // Custom InputTypes
  /**
   * Estados_tblCountOutputType without action
   */
  export type Estados_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estados_tblCountOutputType
     */
    select?: Estados_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Estados_tblCountOutputType without action
   */
  export type Estados_tblCountOutputTypeCountReserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_habitacion_tblWhereInput
  }

  /**
   * Estados_tblCountOutputType without action
   */
  export type Estados_tblCountOutputTypeCountReserva_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_tblWhereInput
  }


  /**
   * Count Type Grupo_estados_tblCountOutputType
   */

  export type Grupo_estados_tblCountOutputType = {
    estados_tbl: number
  }

  export type Grupo_estados_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estados_tbl?: boolean | Grupo_estados_tblCountOutputTypeCountEstados_tblArgs
  }

  // Custom InputTypes
  /**
   * Grupo_estados_tblCountOutputType without action
   */
  export type Grupo_estados_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupo_estados_tblCountOutputType
     */
    select?: Grupo_estados_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Grupo_estados_tblCountOutputType without action
   */
  export type Grupo_estados_tblCountOutputTypeCountEstados_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estados_tblWhereInput
  }


  /**
   * Count Type Habitacion_tblCountOutputType
   */

  export type Habitacion_tblCountOutputType = {
    reserva_habitacion_tbl: number
    servicio_habitacion: number
    images_tbl: number
  }

  export type Habitacion_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_habitacion_tbl?: boolean | Habitacion_tblCountOutputTypeCountReserva_habitacion_tblArgs
    servicio_habitacion?: boolean | Habitacion_tblCountOutputTypeCountServicio_habitacionArgs
    images_tbl?: boolean | Habitacion_tblCountOutputTypeCountImages_tblArgs
  }

  // Custom InputTypes
  /**
   * Habitacion_tblCountOutputType without action
   */
  export type Habitacion_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion_tblCountOutputType
     */
    select?: Habitacion_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Habitacion_tblCountOutputType without action
   */
  export type Habitacion_tblCountOutputTypeCountReserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_habitacion_tblWhereInput
  }

  /**
   * Habitacion_tblCountOutputType without action
   */
  export type Habitacion_tblCountOutputTypeCountServicio_habitacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicio_habitacionWhereInput
  }

  /**
   * Habitacion_tblCountOutputType without action
   */
  export type Habitacion_tblCountOutputTypeCountImages_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: images_tblWhereInput
  }


  /**
   * Count Type Reserva_tblCountOutputType
   */

  export type Reserva_tblCountOutputType = {
    reserva_habitacion_tbl: number
  }

  export type Reserva_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_habitacion_tbl?: boolean | Reserva_tblCountOutputTypeCountReserva_habitacion_tblArgs
  }

  // Custom InputTypes
  /**
   * Reserva_tblCountOutputType without action
   */
  export type Reserva_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva_tblCountOutputType
     */
    select?: Reserva_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Reserva_tblCountOutputType without action
   */
  export type Reserva_tblCountOutputTypeCountReserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_habitacion_tblWhereInput
  }


  /**
   * Count Type Tipo_servicio_tblCountOutputType
   */

  export type Tipo_servicio_tblCountOutputType = {
    servicio_tbl: number
  }

  export type Tipo_servicio_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio_tbl?: boolean | Tipo_servicio_tblCountOutputTypeCountServicio_tblArgs
  }

  // Custom InputTypes
  /**
   * Tipo_servicio_tblCountOutputType without action
   */
  export type Tipo_servicio_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_servicio_tblCountOutputType
     */
    select?: Tipo_servicio_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_servicio_tblCountOutputType without action
   */
  export type Tipo_servicio_tblCountOutputTypeCountServicio_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicio_tblWhereInput
  }


  /**
   * Count Type Servicio_tblCountOutputType
   */

  export type Servicio_tblCountOutputType = {
    servicio_habitacion: number
  }

  export type Servicio_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio_habitacion?: boolean | Servicio_tblCountOutputTypeCountServicio_habitacionArgs
  }

  // Custom InputTypes
  /**
   * Servicio_tblCountOutputType without action
   */
  export type Servicio_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio_tblCountOutputType
     */
    select?: Servicio_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Servicio_tblCountOutputType without action
   */
  export type Servicio_tblCountOutputTypeCountServicio_habitacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicio_habitacionWhereInput
  }


  /**
   * Count Type Tipo_alojamiento_tblCountOutputType
   */

  export type Tipo_alojamiento_tblCountOutputType = {
    habitacion_tbl: number
  }

  export type Tipo_alojamiento_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion_tbl?: boolean | Tipo_alojamiento_tblCountOutputTypeCountHabitacion_tblArgs
  }

  // Custom InputTypes
  /**
   * Tipo_alojamiento_tblCountOutputType without action
   */
  export type Tipo_alojamiento_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_alojamiento_tblCountOutputType
     */
    select?: Tipo_alojamiento_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_alojamiento_tblCountOutputType without action
   */
  export type Tipo_alojamiento_tblCountOutputTypeCountHabitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: habitacion_tblWhereInput
  }


  /**
   * Count Type Usuario_tblCountOutputType
   */

  export type Usuario_tblCountOutputType = {
    reserva_tbl: number
  }

  export type Usuario_tblCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_tbl?: boolean | Usuario_tblCountOutputTypeCountReserva_tblArgs
  }

  // Custom InputTypes
  /**
   * Usuario_tblCountOutputType without action
   */
  export type Usuario_tblCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario_tblCountOutputType
     */
    select?: Usuario_tblCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Usuario_tblCountOutputType without action
   */
  export type Usuario_tblCountOutputTypeCountReserva_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_tblWhereInput
  }


  /**
   * Models
   */

  /**
   * Model estados_tbl
   */

  export type AggregateEstados_tbl = {
    _count: Estados_tblCountAggregateOutputType | null
    _avg: Estados_tblAvgAggregateOutputType | null
    _sum: Estados_tblSumAggregateOutputType | null
    _min: Estados_tblMinAggregateOutputType | null
    _max: Estados_tblMaxAggregateOutputType | null
  }

  export type Estados_tblAvgAggregateOutputType = {
    id_estado: number | null
    ind_hab_estados: number | null
    grupo_estados_tbl_id_grupo_estado: number | null
  }

  export type Estados_tblSumAggregateOutputType = {
    id_estado: number | null
    ind_hab_estados: number | null
    grupo_estados_tbl_id_grupo_estado: number | null
  }

  export type Estados_tblMinAggregateOutputType = {
    id_estado: number | null
    nom_estados: string | null
    cod_estados: string | null
    ind_hab_estados: number | null
    grupo_estados_tbl_id_grupo_estado: number | null
  }

  export type Estados_tblMaxAggregateOutputType = {
    id_estado: number | null
    nom_estados: string | null
    cod_estados: string | null
    ind_hab_estados: number | null
    grupo_estados_tbl_id_grupo_estado: number | null
  }

  export type Estados_tblCountAggregateOutputType = {
    id_estado: number
    nom_estados: number
    cod_estados: number
    ind_hab_estados: number
    grupo_estados_tbl_id_grupo_estado: number
    _all: number
  }


  export type Estados_tblAvgAggregateInputType = {
    id_estado?: true
    ind_hab_estados?: true
    grupo_estados_tbl_id_grupo_estado?: true
  }

  export type Estados_tblSumAggregateInputType = {
    id_estado?: true
    ind_hab_estados?: true
    grupo_estados_tbl_id_grupo_estado?: true
  }

  export type Estados_tblMinAggregateInputType = {
    id_estado?: true
    nom_estados?: true
    cod_estados?: true
    ind_hab_estados?: true
    grupo_estados_tbl_id_grupo_estado?: true
  }

  export type Estados_tblMaxAggregateInputType = {
    id_estado?: true
    nom_estados?: true
    cod_estados?: true
    ind_hab_estados?: true
    grupo_estados_tbl_id_grupo_estado?: true
  }

  export type Estados_tblCountAggregateInputType = {
    id_estado?: true
    nom_estados?: true
    cod_estados?: true
    ind_hab_estados?: true
    grupo_estados_tbl_id_grupo_estado?: true
    _all?: true
  }

  export type Estados_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados_tbl to aggregate.
     */
    where?: estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados_tbls to fetch.
     */
    orderBy?: estados_tblOrderByWithRelationInput | estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estados_tbls
    **/
    _count?: true | Estados_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estados_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estados_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estados_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estados_tblMaxAggregateInputType
  }

  export type GetEstados_tblAggregateType<T extends Estados_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateEstados_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstados_tbl[P]>
      : GetScalarType<T[P], AggregateEstados_tbl[P]>
  }




  export type estados_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estados_tblWhereInput
    orderBy?: estados_tblOrderByWithAggregationInput | estados_tblOrderByWithAggregationInput[]
    by: Estados_tblScalarFieldEnum[] | Estados_tblScalarFieldEnum
    having?: estados_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estados_tblCountAggregateInputType | true
    _avg?: Estados_tblAvgAggregateInputType
    _sum?: Estados_tblSumAggregateInputType
    _min?: Estados_tblMinAggregateInputType
    _max?: Estados_tblMaxAggregateInputType
  }

  export type Estados_tblGroupByOutputType = {
    id_estado: number
    nom_estados: string | null
    cod_estados: string | null
    ind_hab_estados: number | null
    grupo_estados_tbl_id_grupo_estado: number
    _count: Estados_tblCountAggregateOutputType | null
    _avg: Estados_tblAvgAggregateOutputType | null
    _sum: Estados_tblSumAggregateOutputType | null
    _min: Estados_tblMinAggregateOutputType | null
    _max: Estados_tblMaxAggregateOutputType | null
  }

  type GetEstados_tblGroupByPayload<T extends estados_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estados_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estados_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estados_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Estados_tblGroupByOutputType[P]>
        }
      >
    >


  export type estados_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estado?: boolean
    nom_estados?: boolean
    cod_estados?: boolean
    ind_hab_estados?: boolean
    grupo_estados_tbl_id_grupo_estado?: boolean
    grupo_estados_tbl?: boolean | grupo_estados_tblDefaultArgs<ExtArgs>
    reserva_habitacion_tbl?: boolean | estados_tbl$reserva_habitacion_tblArgs<ExtArgs>
    reserva_tbl?: boolean | estados_tbl$reserva_tblArgs<ExtArgs>
    _count?: boolean | Estados_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estados_tbl"]>


  export type estados_tblSelectScalar = {
    id_estado?: boolean
    nom_estados?: boolean
    cod_estados?: boolean
    ind_hab_estados?: boolean
    grupo_estados_tbl_id_grupo_estado?: boolean
  }

  export type estados_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grupo_estados_tbl?: boolean | grupo_estados_tblDefaultArgs<ExtArgs>
    reserva_habitacion_tbl?: boolean | estados_tbl$reserva_habitacion_tblArgs<ExtArgs>
    reserva_tbl?: boolean | estados_tbl$reserva_tblArgs<ExtArgs>
    _count?: boolean | Estados_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $estados_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estados_tbl"
    objects: {
      grupo_estados_tbl: Prisma.$grupo_estados_tblPayload<ExtArgs>
      reserva_habitacion_tbl: Prisma.$reserva_habitacion_tblPayload<ExtArgs>[]
      reserva_tbl: Prisma.$reserva_tblPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estado: number
      nom_estados: string | null
      cod_estados: string | null
      ind_hab_estados: number | null
      grupo_estados_tbl_id_grupo_estado: number
    }, ExtArgs["result"]["estados_tbl"]>
    composites: {}
  }

  type estados_tblGetPayload<S extends boolean | null | undefined | estados_tblDefaultArgs> = $Result.GetResult<Prisma.$estados_tblPayload, S>

  type estados_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<estados_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Estados_tblCountAggregateInputType | true
    }

  export interface estados_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estados_tbl'], meta: { name: 'estados_tbl' } }
    /**
     * Find zero or one Estados_tbl that matches the filter.
     * @param {estados_tblFindUniqueArgs} args - Arguments to find a Estados_tbl
     * @example
     * // Get one Estados_tbl
     * const estados_tbl = await prisma.estados_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estados_tblFindUniqueArgs>(args: SelectSubset<T, estados_tblFindUniqueArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Estados_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {estados_tblFindUniqueOrThrowArgs} args - Arguments to find a Estados_tbl
     * @example
     * // Get one Estados_tbl
     * const estados_tbl = await prisma.estados_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estados_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, estados_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Estados_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estados_tblFindFirstArgs} args - Arguments to find a Estados_tbl
     * @example
     * // Get one Estados_tbl
     * const estados_tbl = await prisma.estados_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estados_tblFindFirstArgs>(args?: SelectSubset<T, estados_tblFindFirstArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Estados_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estados_tblFindFirstOrThrowArgs} args - Arguments to find a Estados_tbl
     * @example
     * // Get one Estados_tbl
     * const estados_tbl = await prisma.estados_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estados_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, estados_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Estados_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estados_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados_tbls
     * const estados_tbls = await prisma.estados_tbl.findMany()
     * 
     * // Get first 10 Estados_tbls
     * const estados_tbls = await prisma.estados_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_estado`
     * const estados_tblWithId_estadoOnly = await prisma.estados_tbl.findMany({ select: { id_estado: true } })
     * 
     */
    findMany<T extends estados_tblFindManyArgs>(args?: SelectSubset<T, estados_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Estados_tbl.
     * @param {estados_tblCreateArgs} args - Arguments to create a Estados_tbl.
     * @example
     * // Create one Estados_tbl
     * const Estados_tbl = await prisma.estados_tbl.create({
     *   data: {
     *     // ... data to create a Estados_tbl
     *   }
     * })
     * 
     */
    create<T extends estados_tblCreateArgs>(args: SelectSubset<T, estados_tblCreateArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Estados_tbls.
     * @param {estados_tblCreateManyArgs} args - Arguments to create many Estados_tbls.
     * @example
     * // Create many Estados_tbls
     * const estados_tbl = await prisma.estados_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estados_tblCreateManyArgs>(args?: SelectSubset<T, estados_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estados_tbl.
     * @param {estados_tblDeleteArgs} args - Arguments to delete one Estados_tbl.
     * @example
     * // Delete one Estados_tbl
     * const Estados_tbl = await prisma.estados_tbl.delete({
     *   where: {
     *     // ... filter to delete one Estados_tbl
     *   }
     * })
     * 
     */
    delete<T extends estados_tblDeleteArgs>(args: SelectSubset<T, estados_tblDeleteArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Estados_tbl.
     * @param {estados_tblUpdateArgs} args - Arguments to update one Estados_tbl.
     * @example
     * // Update one Estados_tbl
     * const estados_tbl = await prisma.estados_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estados_tblUpdateArgs>(args: SelectSubset<T, estados_tblUpdateArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Estados_tbls.
     * @param {estados_tblDeleteManyArgs} args - Arguments to filter Estados_tbls to delete.
     * @example
     * // Delete a few Estados_tbls
     * const { count } = await prisma.estados_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estados_tblDeleteManyArgs>(args?: SelectSubset<T, estados_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estados_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados_tbls
     * const estados_tbl = await prisma.estados_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estados_tblUpdateManyArgs>(args: SelectSubset<T, estados_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estados_tbl.
     * @param {estados_tblUpsertArgs} args - Arguments to update or create a Estados_tbl.
     * @example
     * // Update or create a Estados_tbl
     * const estados_tbl = await prisma.estados_tbl.upsert({
     *   create: {
     *     // ... data to create a Estados_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estados_tbl we want to update
     *   }
     * })
     */
    upsert<T extends estados_tblUpsertArgs>(args: SelectSubset<T, estados_tblUpsertArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Estados_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estados_tblCountArgs} args - Arguments to filter Estados_tbls to count.
     * @example
     * // Count the number of Estados_tbls
     * const count = await prisma.estados_tbl.count({
     *   where: {
     *     // ... the filter for the Estados_tbls we want to count
     *   }
     * })
    **/
    count<T extends estados_tblCountArgs>(
      args?: Subset<T, estados_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estados_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estados_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estados_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estados_tblAggregateArgs>(args: Subset<T, Estados_tblAggregateArgs>): Prisma.PrismaPromise<GetEstados_tblAggregateType<T>>

    /**
     * Group by Estados_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estados_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estados_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estados_tblGroupByArgs['orderBy'] }
        : { orderBy?: estados_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estados_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstados_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estados_tbl model
   */
  readonly fields: estados_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estados_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estados_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    grupo_estados_tbl<T extends grupo_estados_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, grupo_estados_tblDefaultArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reserva_habitacion_tbl<T extends estados_tbl$reserva_habitacion_tblArgs<ExtArgs> = {}>(args?: Subset<T, estados_tbl$reserva_habitacion_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findMany"> | Null>
    reserva_tbl<T extends estados_tbl$reserva_tblArgs<ExtArgs> = {}>(args?: Subset<T, estados_tbl$reserva_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estados_tbl model
   */ 
  interface estados_tblFieldRefs {
    readonly id_estado: FieldRef<"estados_tbl", 'Int'>
    readonly nom_estados: FieldRef<"estados_tbl", 'String'>
    readonly cod_estados: FieldRef<"estados_tbl", 'String'>
    readonly ind_hab_estados: FieldRef<"estados_tbl", 'Int'>
    readonly grupo_estados_tbl_id_grupo_estado: FieldRef<"estados_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * estados_tbl findUnique
   */
  export type estados_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which estados_tbl to fetch.
     */
    where: estados_tblWhereUniqueInput
  }

  /**
   * estados_tbl findUniqueOrThrow
   */
  export type estados_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which estados_tbl to fetch.
     */
    where: estados_tblWhereUniqueInput
  }

  /**
   * estados_tbl findFirst
   */
  export type estados_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which estados_tbl to fetch.
     */
    where?: estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados_tbls to fetch.
     */
    orderBy?: estados_tblOrderByWithRelationInput | estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados_tbls.
     */
    cursor?: estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados_tbls.
     */
    distinct?: Estados_tblScalarFieldEnum | Estados_tblScalarFieldEnum[]
  }

  /**
   * estados_tbl findFirstOrThrow
   */
  export type estados_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which estados_tbl to fetch.
     */
    where?: estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados_tbls to fetch.
     */
    orderBy?: estados_tblOrderByWithRelationInput | estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados_tbls.
     */
    cursor?: estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados_tbls.
     */
    distinct?: Estados_tblScalarFieldEnum | Estados_tblScalarFieldEnum[]
  }

  /**
   * estados_tbl findMany
   */
  export type estados_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which estados_tbls to fetch.
     */
    where?: estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados_tbls to fetch.
     */
    orderBy?: estados_tblOrderByWithRelationInput | estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estados_tbls.
     */
    cursor?: estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados_tbls.
     */
    skip?: number
    distinct?: Estados_tblScalarFieldEnum | Estados_tblScalarFieldEnum[]
  }

  /**
   * estados_tbl create
   */
  export type estados_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a estados_tbl.
     */
    data: XOR<estados_tblCreateInput, estados_tblUncheckedCreateInput>
  }

  /**
   * estados_tbl createMany
   */
  export type estados_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estados_tbls.
     */
    data: estados_tblCreateManyInput | estados_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estados_tbl update
   */
  export type estados_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a estados_tbl.
     */
    data: XOR<estados_tblUpdateInput, estados_tblUncheckedUpdateInput>
    /**
     * Choose, which estados_tbl to update.
     */
    where: estados_tblWhereUniqueInput
  }

  /**
   * estados_tbl updateMany
   */
  export type estados_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estados_tbls.
     */
    data: XOR<estados_tblUpdateManyMutationInput, estados_tblUncheckedUpdateManyInput>
    /**
     * Filter which estados_tbls to update
     */
    where?: estados_tblWhereInput
  }

  /**
   * estados_tbl upsert
   */
  export type estados_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the estados_tbl to update in case it exists.
     */
    where: estados_tblWhereUniqueInput
    /**
     * In case the estados_tbl found by the `where` argument doesn't exist, create a new estados_tbl with this data.
     */
    create: XOR<estados_tblCreateInput, estados_tblUncheckedCreateInput>
    /**
     * In case the estados_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estados_tblUpdateInput, estados_tblUncheckedUpdateInput>
  }

  /**
   * estados_tbl delete
   */
  export type estados_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    /**
     * Filter which estados_tbl to delete.
     */
    where: estados_tblWhereUniqueInput
  }

  /**
   * estados_tbl deleteMany
   */
  export type estados_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados_tbls to delete
     */
    where?: estados_tblWhereInput
  }

  /**
   * estados_tbl.reserva_habitacion_tbl
   */
  export type estados_tbl$reserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    where?: reserva_habitacion_tblWhereInput
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    cursor?: reserva_habitacion_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_habitacion_tblScalarFieldEnum | Reserva_habitacion_tblScalarFieldEnum[]
  }

  /**
   * estados_tbl.reserva_tbl
   */
  export type estados_tbl$reserva_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    where?: reserva_tblWhereInput
    orderBy?: reserva_tblOrderByWithRelationInput | reserva_tblOrderByWithRelationInput[]
    cursor?: reserva_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_tblScalarFieldEnum | Reserva_tblScalarFieldEnum[]
  }

  /**
   * estados_tbl without action
   */
  export type estados_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
  }


  /**
   * Model grupo_estados_tbl
   */

  export type AggregateGrupo_estados_tbl = {
    _count: Grupo_estados_tblCountAggregateOutputType | null
    _avg: Grupo_estados_tblAvgAggregateOutputType | null
    _sum: Grupo_estados_tblSumAggregateOutputType | null
    _min: Grupo_estados_tblMinAggregateOutputType | null
    _max: Grupo_estados_tblMaxAggregateOutputType | null
  }

  export type Grupo_estados_tblAvgAggregateOutputType = {
    id_grupo_estado: number | null
    ind_hab_grupo_estado: number | null
  }

  export type Grupo_estados_tblSumAggregateOutputType = {
    id_grupo_estado: number | null
    ind_hab_grupo_estado: number | null
  }

  export type Grupo_estados_tblMinAggregateOutputType = {
    id_grupo_estado: number | null
    nom_grupo_estado: string | null
    cod_grupo_estado: string | null
    ind_hab_grupo_estado: number | null
  }

  export type Grupo_estados_tblMaxAggregateOutputType = {
    id_grupo_estado: number | null
    nom_grupo_estado: string | null
    cod_grupo_estado: string | null
    ind_hab_grupo_estado: number | null
  }

  export type Grupo_estados_tblCountAggregateOutputType = {
    id_grupo_estado: number
    nom_grupo_estado: number
    cod_grupo_estado: number
    ind_hab_grupo_estado: number
    _all: number
  }


  export type Grupo_estados_tblAvgAggregateInputType = {
    id_grupo_estado?: true
    ind_hab_grupo_estado?: true
  }

  export type Grupo_estados_tblSumAggregateInputType = {
    id_grupo_estado?: true
    ind_hab_grupo_estado?: true
  }

  export type Grupo_estados_tblMinAggregateInputType = {
    id_grupo_estado?: true
    nom_grupo_estado?: true
    cod_grupo_estado?: true
    ind_hab_grupo_estado?: true
  }

  export type Grupo_estados_tblMaxAggregateInputType = {
    id_grupo_estado?: true
    nom_grupo_estado?: true
    cod_grupo_estado?: true
    ind_hab_grupo_estado?: true
  }

  export type Grupo_estados_tblCountAggregateInputType = {
    id_grupo_estado?: true
    nom_grupo_estado?: true
    cod_grupo_estado?: true
    ind_hab_grupo_estado?: true
    _all?: true
  }

  export type Grupo_estados_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grupo_estados_tbl to aggregate.
     */
    where?: grupo_estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupo_estados_tbls to fetch.
     */
    orderBy?: grupo_estados_tblOrderByWithRelationInput | grupo_estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grupo_estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupo_estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupo_estados_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grupo_estados_tbls
    **/
    _count?: true | Grupo_estados_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Grupo_estados_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Grupo_estados_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Grupo_estados_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Grupo_estados_tblMaxAggregateInputType
  }

  export type GetGrupo_estados_tblAggregateType<T extends Grupo_estados_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupo_estados_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupo_estados_tbl[P]>
      : GetScalarType<T[P], AggregateGrupo_estados_tbl[P]>
  }




  export type grupo_estados_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grupo_estados_tblWhereInput
    orderBy?: grupo_estados_tblOrderByWithAggregationInput | grupo_estados_tblOrderByWithAggregationInput[]
    by: Grupo_estados_tblScalarFieldEnum[] | Grupo_estados_tblScalarFieldEnum
    having?: grupo_estados_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Grupo_estados_tblCountAggregateInputType | true
    _avg?: Grupo_estados_tblAvgAggregateInputType
    _sum?: Grupo_estados_tblSumAggregateInputType
    _min?: Grupo_estados_tblMinAggregateInputType
    _max?: Grupo_estados_tblMaxAggregateInputType
  }

  export type Grupo_estados_tblGroupByOutputType = {
    id_grupo_estado: number
    nom_grupo_estado: string | null
    cod_grupo_estado: string | null
    ind_hab_grupo_estado: number | null
    _count: Grupo_estados_tblCountAggregateOutputType | null
    _avg: Grupo_estados_tblAvgAggregateOutputType | null
    _sum: Grupo_estados_tblSumAggregateOutputType | null
    _min: Grupo_estados_tblMinAggregateOutputType | null
    _max: Grupo_estados_tblMaxAggregateOutputType | null
  }

  type GetGrupo_estados_tblGroupByPayload<T extends grupo_estados_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Grupo_estados_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Grupo_estados_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Grupo_estados_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Grupo_estados_tblGroupByOutputType[P]>
        }
      >
    >


  export type grupo_estados_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_grupo_estado?: boolean
    nom_grupo_estado?: boolean
    cod_grupo_estado?: boolean
    ind_hab_grupo_estado?: boolean
    estados_tbl?: boolean | grupo_estados_tbl$estados_tblArgs<ExtArgs>
    _count?: boolean | Grupo_estados_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupo_estados_tbl"]>


  export type grupo_estados_tblSelectScalar = {
    id_grupo_estado?: boolean
    nom_grupo_estado?: boolean
    cod_grupo_estado?: boolean
    ind_hab_grupo_estado?: boolean
  }

  export type grupo_estados_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estados_tbl?: boolean | grupo_estados_tbl$estados_tblArgs<ExtArgs>
    _count?: boolean | Grupo_estados_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $grupo_estados_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grupo_estados_tbl"
    objects: {
      estados_tbl: Prisma.$estados_tblPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_grupo_estado: number
      nom_grupo_estado: string | null
      cod_grupo_estado: string | null
      ind_hab_grupo_estado: number | null
    }, ExtArgs["result"]["grupo_estados_tbl"]>
    composites: {}
  }

  type grupo_estados_tblGetPayload<S extends boolean | null | undefined | grupo_estados_tblDefaultArgs> = $Result.GetResult<Prisma.$grupo_estados_tblPayload, S>

  type grupo_estados_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<grupo_estados_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Grupo_estados_tblCountAggregateInputType | true
    }

  export interface grupo_estados_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grupo_estados_tbl'], meta: { name: 'grupo_estados_tbl' } }
    /**
     * Find zero or one Grupo_estados_tbl that matches the filter.
     * @param {grupo_estados_tblFindUniqueArgs} args - Arguments to find a Grupo_estados_tbl
     * @example
     * // Get one Grupo_estados_tbl
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grupo_estados_tblFindUniqueArgs>(args: SelectSubset<T, grupo_estados_tblFindUniqueArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Grupo_estados_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {grupo_estados_tblFindUniqueOrThrowArgs} args - Arguments to find a Grupo_estados_tbl
     * @example
     * // Get one Grupo_estados_tbl
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grupo_estados_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, grupo_estados_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Grupo_estados_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grupo_estados_tblFindFirstArgs} args - Arguments to find a Grupo_estados_tbl
     * @example
     * // Get one Grupo_estados_tbl
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grupo_estados_tblFindFirstArgs>(args?: SelectSubset<T, grupo_estados_tblFindFirstArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Grupo_estados_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grupo_estados_tblFindFirstOrThrowArgs} args - Arguments to find a Grupo_estados_tbl
     * @example
     * // Get one Grupo_estados_tbl
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grupo_estados_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, grupo_estados_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Grupo_estados_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grupo_estados_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupo_estados_tbls
     * const grupo_estados_tbls = await prisma.grupo_estados_tbl.findMany()
     * 
     * // Get first 10 Grupo_estados_tbls
     * const grupo_estados_tbls = await prisma.grupo_estados_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_grupo_estado`
     * const grupo_estados_tblWithId_grupo_estadoOnly = await prisma.grupo_estados_tbl.findMany({ select: { id_grupo_estado: true } })
     * 
     */
    findMany<T extends grupo_estados_tblFindManyArgs>(args?: SelectSubset<T, grupo_estados_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Grupo_estados_tbl.
     * @param {grupo_estados_tblCreateArgs} args - Arguments to create a Grupo_estados_tbl.
     * @example
     * // Create one Grupo_estados_tbl
     * const Grupo_estados_tbl = await prisma.grupo_estados_tbl.create({
     *   data: {
     *     // ... data to create a Grupo_estados_tbl
     *   }
     * })
     * 
     */
    create<T extends grupo_estados_tblCreateArgs>(args: SelectSubset<T, grupo_estados_tblCreateArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Grupo_estados_tbls.
     * @param {grupo_estados_tblCreateManyArgs} args - Arguments to create many Grupo_estados_tbls.
     * @example
     * // Create many Grupo_estados_tbls
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grupo_estados_tblCreateManyArgs>(args?: SelectSubset<T, grupo_estados_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grupo_estados_tbl.
     * @param {grupo_estados_tblDeleteArgs} args - Arguments to delete one Grupo_estados_tbl.
     * @example
     * // Delete one Grupo_estados_tbl
     * const Grupo_estados_tbl = await prisma.grupo_estados_tbl.delete({
     *   where: {
     *     // ... filter to delete one Grupo_estados_tbl
     *   }
     * })
     * 
     */
    delete<T extends grupo_estados_tblDeleteArgs>(args: SelectSubset<T, grupo_estados_tblDeleteArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Grupo_estados_tbl.
     * @param {grupo_estados_tblUpdateArgs} args - Arguments to update one Grupo_estados_tbl.
     * @example
     * // Update one Grupo_estados_tbl
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grupo_estados_tblUpdateArgs>(args: SelectSubset<T, grupo_estados_tblUpdateArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Grupo_estados_tbls.
     * @param {grupo_estados_tblDeleteManyArgs} args - Arguments to filter Grupo_estados_tbls to delete.
     * @example
     * // Delete a few Grupo_estados_tbls
     * const { count } = await prisma.grupo_estados_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grupo_estados_tblDeleteManyArgs>(args?: SelectSubset<T, grupo_estados_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupo_estados_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grupo_estados_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupo_estados_tbls
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grupo_estados_tblUpdateManyArgs>(args: SelectSubset<T, grupo_estados_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grupo_estados_tbl.
     * @param {grupo_estados_tblUpsertArgs} args - Arguments to update or create a Grupo_estados_tbl.
     * @example
     * // Update or create a Grupo_estados_tbl
     * const grupo_estados_tbl = await prisma.grupo_estados_tbl.upsert({
     *   create: {
     *     // ... data to create a Grupo_estados_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupo_estados_tbl we want to update
     *   }
     * })
     */
    upsert<T extends grupo_estados_tblUpsertArgs>(args: SelectSubset<T, grupo_estados_tblUpsertArgs<ExtArgs>>): Prisma__grupo_estados_tblClient<$Result.GetResult<Prisma.$grupo_estados_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Grupo_estados_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grupo_estados_tblCountArgs} args - Arguments to filter Grupo_estados_tbls to count.
     * @example
     * // Count the number of Grupo_estados_tbls
     * const count = await prisma.grupo_estados_tbl.count({
     *   where: {
     *     // ... the filter for the Grupo_estados_tbls we want to count
     *   }
     * })
    **/
    count<T extends grupo_estados_tblCountArgs>(
      args?: Subset<T, grupo_estados_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Grupo_estados_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupo_estados_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Grupo_estados_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Grupo_estados_tblAggregateArgs>(args: Subset<T, Grupo_estados_tblAggregateArgs>): Prisma.PrismaPromise<GetGrupo_estados_tblAggregateType<T>>

    /**
     * Group by Grupo_estados_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grupo_estados_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grupo_estados_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grupo_estados_tblGroupByArgs['orderBy'] }
        : { orderBy?: grupo_estados_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grupo_estados_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupo_estados_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grupo_estados_tbl model
   */
  readonly fields: grupo_estados_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grupo_estados_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grupo_estados_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estados_tbl<T extends grupo_estados_tbl$estados_tblArgs<ExtArgs> = {}>(args?: Subset<T, grupo_estados_tbl$estados_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grupo_estados_tbl model
   */ 
  interface grupo_estados_tblFieldRefs {
    readonly id_grupo_estado: FieldRef<"grupo_estados_tbl", 'Int'>
    readonly nom_grupo_estado: FieldRef<"grupo_estados_tbl", 'String'>
    readonly cod_grupo_estado: FieldRef<"grupo_estados_tbl", 'String'>
    readonly ind_hab_grupo_estado: FieldRef<"grupo_estados_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * grupo_estados_tbl findUnique
   */
  export type grupo_estados_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which grupo_estados_tbl to fetch.
     */
    where: grupo_estados_tblWhereUniqueInput
  }

  /**
   * grupo_estados_tbl findUniqueOrThrow
   */
  export type grupo_estados_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which grupo_estados_tbl to fetch.
     */
    where: grupo_estados_tblWhereUniqueInput
  }

  /**
   * grupo_estados_tbl findFirst
   */
  export type grupo_estados_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which grupo_estados_tbl to fetch.
     */
    where?: grupo_estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupo_estados_tbls to fetch.
     */
    orderBy?: grupo_estados_tblOrderByWithRelationInput | grupo_estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grupo_estados_tbls.
     */
    cursor?: grupo_estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupo_estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupo_estados_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grupo_estados_tbls.
     */
    distinct?: Grupo_estados_tblScalarFieldEnum | Grupo_estados_tblScalarFieldEnum[]
  }

  /**
   * grupo_estados_tbl findFirstOrThrow
   */
  export type grupo_estados_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which grupo_estados_tbl to fetch.
     */
    where?: grupo_estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupo_estados_tbls to fetch.
     */
    orderBy?: grupo_estados_tblOrderByWithRelationInput | grupo_estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grupo_estados_tbls.
     */
    cursor?: grupo_estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupo_estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupo_estados_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grupo_estados_tbls.
     */
    distinct?: Grupo_estados_tblScalarFieldEnum | Grupo_estados_tblScalarFieldEnum[]
  }

  /**
   * grupo_estados_tbl findMany
   */
  export type grupo_estados_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * Filter, which grupo_estados_tbls to fetch.
     */
    where?: grupo_estados_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupo_estados_tbls to fetch.
     */
    orderBy?: grupo_estados_tblOrderByWithRelationInput | grupo_estados_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grupo_estados_tbls.
     */
    cursor?: grupo_estados_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupo_estados_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupo_estados_tbls.
     */
    skip?: number
    distinct?: Grupo_estados_tblScalarFieldEnum | Grupo_estados_tblScalarFieldEnum[]
  }

  /**
   * grupo_estados_tbl create
   */
  export type grupo_estados_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a grupo_estados_tbl.
     */
    data?: XOR<grupo_estados_tblCreateInput, grupo_estados_tblUncheckedCreateInput>
  }

  /**
   * grupo_estados_tbl createMany
   */
  export type grupo_estados_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grupo_estados_tbls.
     */
    data: grupo_estados_tblCreateManyInput | grupo_estados_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grupo_estados_tbl update
   */
  export type grupo_estados_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a grupo_estados_tbl.
     */
    data: XOR<grupo_estados_tblUpdateInput, grupo_estados_tblUncheckedUpdateInput>
    /**
     * Choose, which grupo_estados_tbl to update.
     */
    where: grupo_estados_tblWhereUniqueInput
  }

  /**
   * grupo_estados_tbl updateMany
   */
  export type grupo_estados_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grupo_estados_tbls.
     */
    data: XOR<grupo_estados_tblUpdateManyMutationInput, grupo_estados_tblUncheckedUpdateManyInput>
    /**
     * Filter which grupo_estados_tbls to update
     */
    where?: grupo_estados_tblWhereInput
  }

  /**
   * grupo_estados_tbl upsert
   */
  export type grupo_estados_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the grupo_estados_tbl to update in case it exists.
     */
    where: grupo_estados_tblWhereUniqueInput
    /**
     * In case the grupo_estados_tbl found by the `where` argument doesn't exist, create a new grupo_estados_tbl with this data.
     */
    create: XOR<grupo_estados_tblCreateInput, grupo_estados_tblUncheckedCreateInput>
    /**
     * In case the grupo_estados_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grupo_estados_tblUpdateInput, grupo_estados_tblUncheckedUpdateInput>
  }

  /**
   * grupo_estados_tbl delete
   */
  export type grupo_estados_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
    /**
     * Filter which grupo_estados_tbl to delete.
     */
    where: grupo_estados_tblWhereUniqueInput
  }

  /**
   * grupo_estados_tbl deleteMany
   */
  export type grupo_estados_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grupo_estados_tbls to delete
     */
    where?: grupo_estados_tblWhereInput
  }

  /**
   * grupo_estados_tbl.estados_tbl
   */
  export type grupo_estados_tbl$estados_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estados_tbl
     */
    select?: estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estados_tblInclude<ExtArgs> | null
    where?: estados_tblWhereInput
    orderBy?: estados_tblOrderByWithRelationInput | estados_tblOrderByWithRelationInput[]
    cursor?: estados_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estados_tblScalarFieldEnum | Estados_tblScalarFieldEnum[]
  }

  /**
   * grupo_estados_tbl without action
   */
  export type grupo_estados_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupo_estados_tbl
     */
    select?: grupo_estados_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grupo_estados_tblInclude<ExtArgs> | null
  }


  /**
   * Model habitacion_tbl
   */

  export type AggregateHabitacion_tbl = {
    _count: Habitacion_tblCountAggregateOutputType | null
    _avg: Habitacion_tblAvgAggregateOutputType | null
    _sum: Habitacion_tblSumAggregateOutputType | null
    _min: Habitacion_tblMinAggregateOutputType | null
    _max: Habitacion_tblMaxAggregateOutputType | null
  }

  export type Habitacion_tblAvgAggregateOutputType = {
    id_habitacion: number | null
    id_tipo_alojamiento_habitacion: number | null
  }

  export type Habitacion_tblSumAggregateOutputType = {
    id_habitacion: number | null
    id_tipo_alojamiento_habitacion: number | null
  }

  export type Habitacion_tblMinAggregateOutputType = {
    id_habitacion: number | null
    des_habitacion: string | null
    id_tipo_alojamiento_habitacion: number | null
  }

  export type Habitacion_tblMaxAggregateOutputType = {
    id_habitacion: number | null
    des_habitacion: string | null
    id_tipo_alojamiento_habitacion: number | null
  }

  export type Habitacion_tblCountAggregateOutputType = {
    id_habitacion: number
    des_habitacion: number
    id_tipo_alojamiento_habitacion: number
    _all: number
  }


  export type Habitacion_tblAvgAggregateInputType = {
    id_habitacion?: true
    id_tipo_alojamiento_habitacion?: true
  }

  export type Habitacion_tblSumAggregateInputType = {
    id_habitacion?: true
    id_tipo_alojamiento_habitacion?: true
  }

  export type Habitacion_tblMinAggregateInputType = {
    id_habitacion?: true
    des_habitacion?: true
    id_tipo_alojamiento_habitacion?: true
  }

  export type Habitacion_tblMaxAggregateInputType = {
    id_habitacion?: true
    des_habitacion?: true
    id_tipo_alojamiento_habitacion?: true
  }

  export type Habitacion_tblCountAggregateInputType = {
    id_habitacion?: true
    des_habitacion?: true
    id_tipo_alojamiento_habitacion?: true
    _all?: true
  }

  export type Habitacion_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which habitacion_tbl to aggregate.
     */
    where?: habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacion_tbls to fetch.
     */
    orderBy?: habitacion_tblOrderByWithRelationInput | habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacion_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned habitacion_tbls
    **/
    _count?: true | Habitacion_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Habitacion_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Habitacion_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Habitacion_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Habitacion_tblMaxAggregateInputType
  }

  export type GetHabitacion_tblAggregateType<T extends Habitacion_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitacion_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitacion_tbl[P]>
      : GetScalarType<T[P], AggregateHabitacion_tbl[P]>
  }




  export type habitacion_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: habitacion_tblWhereInput
    orderBy?: habitacion_tblOrderByWithAggregationInput | habitacion_tblOrderByWithAggregationInput[]
    by: Habitacion_tblScalarFieldEnum[] | Habitacion_tblScalarFieldEnum
    having?: habitacion_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Habitacion_tblCountAggregateInputType | true
    _avg?: Habitacion_tblAvgAggregateInputType
    _sum?: Habitacion_tblSumAggregateInputType
    _min?: Habitacion_tblMinAggregateInputType
    _max?: Habitacion_tblMaxAggregateInputType
  }

  export type Habitacion_tblGroupByOutputType = {
    id_habitacion: number
    des_habitacion: string | null
    id_tipo_alojamiento_habitacion: number
    _count: Habitacion_tblCountAggregateOutputType | null
    _avg: Habitacion_tblAvgAggregateOutputType | null
    _sum: Habitacion_tblSumAggregateOutputType | null
    _min: Habitacion_tblMinAggregateOutputType | null
    _max: Habitacion_tblMaxAggregateOutputType | null
  }

  type GetHabitacion_tblGroupByPayload<T extends habitacion_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Habitacion_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Habitacion_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Habitacion_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Habitacion_tblGroupByOutputType[P]>
        }
      >
    >


  export type habitacion_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habitacion?: boolean
    des_habitacion?: boolean
    id_tipo_alojamiento_habitacion?: boolean
    tipo_alojamiento_tbl?: boolean | tipo_alojamiento_tblDefaultArgs<ExtArgs>
    reserva_habitacion_tbl?: boolean | habitacion_tbl$reserva_habitacion_tblArgs<ExtArgs>
    servicio_habitacion?: boolean | habitacion_tbl$servicio_habitacionArgs<ExtArgs>
    images_tbl?: boolean | habitacion_tbl$images_tblArgs<ExtArgs>
    _count?: boolean | Habitacion_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion_tbl"]>


  export type habitacion_tblSelectScalar = {
    id_habitacion?: boolean
    des_habitacion?: boolean
    id_tipo_alojamiento_habitacion?: boolean
  }

  export type habitacion_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo_alojamiento_tbl?: boolean | tipo_alojamiento_tblDefaultArgs<ExtArgs>
    reserva_habitacion_tbl?: boolean | habitacion_tbl$reserva_habitacion_tblArgs<ExtArgs>
    servicio_habitacion?: boolean | habitacion_tbl$servicio_habitacionArgs<ExtArgs>
    images_tbl?: boolean | habitacion_tbl$images_tblArgs<ExtArgs>
    _count?: boolean | Habitacion_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $habitacion_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "habitacion_tbl"
    objects: {
      tipo_alojamiento_tbl: Prisma.$tipo_alojamiento_tblPayload<ExtArgs>
      reserva_habitacion_tbl: Prisma.$reserva_habitacion_tblPayload<ExtArgs>[]
      servicio_habitacion: Prisma.$servicio_habitacionPayload<ExtArgs>[]
      images_tbl: Prisma.$images_tblPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_habitacion: number
      des_habitacion: string | null
      id_tipo_alojamiento_habitacion: number
    }, ExtArgs["result"]["habitacion_tbl"]>
    composites: {}
  }

  type habitacion_tblGetPayload<S extends boolean | null | undefined | habitacion_tblDefaultArgs> = $Result.GetResult<Prisma.$habitacion_tblPayload, S>

  type habitacion_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<habitacion_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Habitacion_tblCountAggregateInputType | true
    }

  export interface habitacion_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['habitacion_tbl'], meta: { name: 'habitacion_tbl' } }
    /**
     * Find zero or one Habitacion_tbl that matches the filter.
     * @param {habitacion_tblFindUniqueArgs} args - Arguments to find a Habitacion_tbl
     * @example
     * // Get one Habitacion_tbl
     * const habitacion_tbl = await prisma.habitacion_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends habitacion_tblFindUniqueArgs>(args: SelectSubset<T, habitacion_tblFindUniqueArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Habitacion_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {habitacion_tblFindUniqueOrThrowArgs} args - Arguments to find a Habitacion_tbl
     * @example
     * // Get one Habitacion_tbl
     * const habitacion_tbl = await prisma.habitacion_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends habitacion_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, habitacion_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Habitacion_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacion_tblFindFirstArgs} args - Arguments to find a Habitacion_tbl
     * @example
     * // Get one Habitacion_tbl
     * const habitacion_tbl = await prisma.habitacion_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends habitacion_tblFindFirstArgs>(args?: SelectSubset<T, habitacion_tblFindFirstArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Habitacion_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacion_tblFindFirstOrThrowArgs} args - Arguments to find a Habitacion_tbl
     * @example
     * // Get one Habitacion_tbl
     * const habitacion_tbl = await prisma.habitacion_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends habitacion_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, habitacion_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Habitacion_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacion_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habitacion_tbls
     * const habitacion_tbls = await prisma.habitacion_tbl.findMany()
     * 
     * // Get first 10 Habitacion_tbls
     * const habitacion_tbls = await prisma.habitacion_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_habitacion`
     * const habitacion_tblWithId_habitacionOnly = await prisma.habitacion_tbl.findMany({ select: { id_habitacion: true } })
     * 
     */
    findMany<T extends habitacion_tblFindManyArgs>(args?: SelectSubset<T, habitacion_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Habitacion_tbl.
     * @param {habitacion_tblCreateArgs} args - Arguments to create a Habitacion_tbl.
     * @example
     * // Create one Habitacion_tbl
     * const Habitacion_tbl = await prisma.habitacion_tbl.create({
     *   data: {
     *     // ... data to create a Habitacion_tbl
     *   }
     * })
     * 
     */
    create<T extends habitacion_tblCreateArgs>(args: SelectSubset<T, habitacion_tblCreateArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Habitacion_tbls.
     * @param {habitacion_tblCreateManyArgs} args - Arguments to create many Habitacion_tbls.
     * @example
     * // Create many Habitacion_tbls
     * const habitacion_tbl = await prisma.habitacion_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends habitacion_tblCreateManyArgs>(args?: SelectSubset<T, habitacion_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Habitacion_tbl.
     * @param {habitacion_tblDeleteArgs} args - Arguments to delete one Habitacion_tbl.
     * @example
     * // Delete one Habitacion_tbl
     * const Habitacion_tbl = await prisma.habitacion_tbl.delete({
     *   where: {
     *     // ... filter to delete one Habitacion_tbl
     *   }
     * })
     * 
     */
    delete<T extends habitacion_tblDeleteArgs>(args: SelectSubset<T, habitacion_tblDeleteArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Habitacion_tbl.
     * @param {habitacion_tblUpdateArgs} args - Arguments to update one Habitacion_tbl.
     * @example
     * // Update one Habitacion_tbl
     * const habitacion_tbl = await prisma.habitacion_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends habitacion_tblUpdateArgs>(args: SelectSubset<T, habitacion_tblUpdateArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Habitacion_tbls.
     * @param {habitacion_tblDeleteManyArgs} args - Arguments to filter Habitacion_tbls to delete.
     * @example
     * // Delete a few Habitacion_tbls
     * const { count } = await prisma.habitacion_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends habitacion_tblDeleteManyArgs>(args?: SelectSubset<T, habitacion_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacion_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacion_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habitacion_tbls
     * const habitacion_tbl = await prisma.habitacion_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends habitacion_tblUpdateManyArgs>(args: SelectSubset<T, habitacion_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habitacion_tbl.
     * @param {habitacion_tblUpsertArgs} args - Arguments to update or create a Habitacion_tbl.
     * @example
     * // Update or create a Habitacion_tbl
     * const habitacion_tbl = await prisma.habitacion_tbl.upsert({
     *   create: {
     *     // ... data to create a Habitacion_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habitacion_tbl we want to update
     *   }
     * })
     */
    upsert<T extends habitacion_tblUpsertArgs>(args: SelectSubset<T, habitacion_tblUpsertArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Habitacion_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacion_tblCountArgs} args - Arguments to filter Habitacion_tbls to count.
     * @example
     * // Count the number of Habitacion_tbls
     * const count = await prisma.habitacion_tbl.count({
     *   where: {
     *     // ... the filter for the Habitacion_tbls we want to count
     *   }
     * })
    **/
    count<T extends habitacion_tblCountArgs>(
      args?: Subset<T, habitacion_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Habitacion_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habitacion_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habitacion_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Habitacion_tblAggregateArgs>(args: Subset<T, Habitacion_tblAggregateArgs>): Prisma.PrismaPromise<GetHabitacion_tblAggregateType<T>>

    /**
     * Group by Habitacion_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {habitacion_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends habitacion_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: habitacion_tblGroupByArgs['orderBy'] }
        : { orderBy?: habitacion_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, habitacion_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitacion_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the habitacion_tbl model
   */
  readonly fields: habitacion_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for habitacion_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__habitacion_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo_alojamiento_tbl<T extends tipo_alojamiento_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_alojamiento_tblDefaultArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reserva_habitacion_tbl<T extends habitacion_tbl$reserva_habitacion_tblArgs<ExtArgs> = {}>(args?: Subset<T, habitacion_tbl$reserva_habitacion_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findMany"> | Null>
    servicio_habitacion<T extends habitacion_tbl$servicio_habitacionArgs<ExtArgs> = {}>(args?: Subset<T, habitacion_tbl$servicio_habitacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findMany"> | Null>
    images_tbl<T extends habitacion_tbl$images_tblArgs<ExtArgs> = {}>(args?: Subset<T, habitacion_tbl$images_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the habitacion_tbl model
   */ 
  interface habitacion_tblFieldRefs {
    readonly id_habitacion: FieldRef<"habitacion_tbl", 'Int'>
    readonly des_habitacion: FieldRef<"habitacion_tbl", 'String'>
    readonly id_tipo_alojamiento_habitacion: FieldRef<"habitacion_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * habitacion_tbl findUnique
   */
  export type habitacion_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which habitacion_tbl to fetch.
     */
    where: habitacion_tblWhereUniqueInput
  }

  /**
   * habitacion_tbl findUniqueOrThrow
   */
  export type habitacion_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which habitacion_tbl to fetch.
     */
    where: habitacion_tblWhereUniqueInput
  }

  /**
   * habitacion_tbl findFirst
   */
  export type habitacion_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which habitacion_tbl to fetch.
     */
    where?: habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacion_tbls to fetch.
     */
    orderBy?: habitacion_tblOrderByWithRelationInput | habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for habitacion_tbls.
     */
    cursor?: habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacion_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of habitacion_tbls.
     */
    distinct?: Habitacion_tblScalarFieldEnum | Habitacion_tblScalarFieldEnum[]
  }

  /**
   * habitacion_tbl findFirstOrThrow
   */
  export type habitacion_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which habitacion_tbl to fetch.
     */
    where?: habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacion_tbls to fetch.
     */
    orderBy?: habitacion_tblOrderByWithRelationInput | habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for habitacion_tbls.
     */
    cursor?: habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacion_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of habitacion_tbls.
     */
    distinct?: Habitacion_tblScalarFieldEnum | Habitacion_tblScalarFieldEnum[]
  }

  /**
   * habitacion_tbl findMany
   */
  export type habitacion_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which habitacion_tbls to fetch.
     */
    where?: habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of habitacion_tbls to fetch.
     */
    orderBy?: habitacion_tblOrderByWithRelationInput | habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing habitacion_tbls.
     */
    cursor?: habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` habitacion_tbls.
     */
    skip?: number
    distinct?: Habitacion_tblScalarFieldEnum | Habitacion_tblScalarFieldEnum[]
  }

  /**
   * habitacion_tbl create
   */
  export type habitacion_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a habitacion_tbl.
     */
    data: XOR<habitacion_tblCreateInput, habitacion_tblUncheckedCreateInput>
  }

  /**
   * habitacion_tbl createMany
   */
  export type habitacion_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many habitacion_tbls.
     */
    data: habitacion_tblCreateManyInput | habitacion_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * habitacion_tbl update
   */
  export type habitacion_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a habitacion_tbl.
     */
    data: XOR<habitacion_tblUpdateInput, habitacion_tblUncheckedUpdateInput>
    /**
     * Choose, which habitacion_tbl to update.
     */
    where: habitacion_tblWhereUniqueInput
  }

  /**
   * habitacion_tbl updateMany
   */
  export type habitacion_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update habitacion_tbls.
     */
    data: XOR<habitacion_tblUpdateManyMutationInput, habitacion_tblUncheckedUpdateManyInput>
    /**
     * Filter which habitacion_tbls to update
     */
    where?: habitacion_tblWhereInput
  }

  /**
   * habitacion_tbl upsert
   */
  export type habitacion_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the habitacion_tbl to update in case it exists.
     */
    where: habitacion_tblWhereUniqueInput
    /**
     * In case the habitacion_tbl found by the `where` argument doesn't exist, create a new habitacion_tbl with this data.
     */
    create: XOR<habitacion_tblCreateInput, habitacion_tblUncheckedCreateInput>
    /**
     * In case the habitacion_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<habitacion_tblUpdateInput, habitacion_tblUncheckedUpdateInput>
  }

  /**
   * habitacion_tbl delete
   */
  export type habitacion_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter which habitacion_tbl to delete.
     */
    where: habitacion_tblWhereUniqueInput
  }

  /**
   * habitacion_tbl deleteMany
   */
  export type habitacion_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which habitacion_tbls to delete
     */
    where?: habitacion_tblWhereInput
  }

  /**
   * habitacion_tbl.reserva_habitacion_tbl
   */
  export type habitacion_tbl$reserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    where?: reserva_habitacion_tblWhereInput
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    cursor?: reserva_habitacion_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_habitacion_tblScalarFieldEnum | Reserva_habitacion_tblScalarFieldEnum[]
  }

  /**
   * habitacion_tbl.servicio_habitacion
   */
  export type habitacion_tbl$servicio_habitacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    where?: servicio_habitacionWhereInput
    orderBy?: servicio_habitacionOrderByWithRelationInput | servicio_habitacionOrderByWithRelationInput[]
    cursor?: servicio_habitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Servicio_habitacionScalarFieldEnum | Servicio_habitacionScalarFieldEnum[]
  }

  /**
   * habitacion_tbl.images_tbl
   */
  export type habitacion_tbl$images_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    where?: images_tblWhereInput
    orderBy?: images_tblOrderByWithRelationInput | images_tblOrderByWithRelationInput[]
    cursor?: images_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Images_tblScalarFieldEnum | Images_tblScalarFieldEnum[]
  }

  /**
   * habitacion_tbl without action
   */
  export type habitacion_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
  }


  /**
   * Model reserva_habitacion_tbl
   */

  export type AggregateReserva_habitacion_tbl = {
    _count: Reserva_habitacion_tblCountAggregateOutputType | null
    _avg: Reserva_habitacion_tblAvgAggregateOutputType | null
    _sum: Reserva_habitacion_tblSumAggregateOutputType | null
    _min: Reserva_habitacion_tblMinAggregateOutputType | null
    _max: Reserva_habitacion_tblMaxAggregateOutputType | null
  }

  export type Reserva_habitacion_tblAvgAggregateOutputType = {
    id_reserva_reserva_habitacion: number | null
    id_habitacion_reserva_habitacion: number | null
    id_estado_reserva_habitacion: number | null
  }

  export type Reserva_habitacion_tblSumAggregateOutputType = {
    id_reserva_reserva_habitacion: number | null
    id_habitacion_reserva_habitacion: number | null
    id_estado_reserva_habitacion: number | null
  }

  export type Reserva_habitacion_tblMinAggregateOutputType = {
    id_reserva_reserva_habitacion: number | null
    id_habitacion_reserva_habitacion: number | null
    id_estado_reserva_habitacion: number | null
  }

  export type Reserva_habitacion_tblMaxAggregateOutputType = {
    id_reserva_reserva_habitacion: number | null
    id_habitacion_reserva_habitacion: number | null
    id_estado_reserva_habitacion: number | null
  }

  export type Reserva_habitacion_tblCountAggregateOutputType = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
    _all: number
  }


  export type Reserva_habitacion_tblAvgAggregateInputType = {
    id_reserva_reserva_habitacion?: true
    id_habitacion_reserva_habitacion?: true
    id_estado_reserva_habitacion?: true
  }

  export type Reserva_habitacion_tblSumAggregateInputType = {
    id_reserva_reserva_habitacion?: true
    id_habitacion_reserva_habitacion?: true
    id_estado_reserva_habitacion?: true
  }

  export type Reserva_habitacion_tblMinAggregateInputType = {
    id_reserva_reserva_habitacion?: true
    id_habitacion_reserva_habitacion?: true
    id_estado_reserva_habitacion?: true
  }

  export type Reserva_habitacion_tblMaxAggregateInputType = {
    id_reserva_reserva_habitacion?: true
    id_habitacion_reserva_habitacion?: true
    id_estado_reserva_habitacion?: true
  }

  export type Reserva_habitacion_tblCountAggregateInputType = {
    id_reserva_reserva_habitacion?: true
    id_habitacion_reserva_habitacion?: true
    id_estado_reserva_habitacion?: true
    _all?: true
  }

  export type Reserva_habitacion_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva_habitacion_tbl to aggregate.
     */
    where?: reserva_habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_habitacion_tbls to fetch.
     */
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reserva_habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_habitacion_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reserva_habitacion_tbls
    **/
    _count?: true | Reserva_habitacion_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reserva_habitacion_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reserva_habitacion_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reserva_habitacion_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reserva_habitacion_tblMaxAggregateInputType
  }

  export type GetReserva_habitacion_tblAggregateType<T extends Reserva_habitacion_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva_habitacion_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva_habitacion_tbl[P]>
      : GetScalarType<T[P], AggregateReserva_habitacion_tbl[P]>
  }




  export type reserva_habitacion_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_habitacion_tblWhereInput
    orderBy?: reserva_habitacion_tblOrderByWithAggregationInput | reserva_habitacion_tblOrderByWithAggregationInput[]
    by: Reserva_habitacion_tblScalarFieldEnum[] | Reserva_habitacion_tblScalarFieldEnum
    having?: reserva_habitacion_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reserva_habitacion_tblCountAggregateInputType | true
    _avg?: Reserva_habitacion_tblAvgAggregateInputType
    _sum?: Reserva_habitacion_tblSumAggregateInputType
    _min?: Reserva_habitacion_tblMinAggregateInputType
    _max?: Reserva_habitacion_tblMaxAggregateInputType
  }

  export type Reserva_habitacion_tblGroupByOutputType = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
    _count: Reserva_habitacion_tblCountAggregateOutputType | null
    _avg: Reserva_habitacion_tblAvgAggregateOutputType | null
    _sum: Reserva_habitacion_tblSumAggregateOutputType | null
    _min: Reserva_habitacion_tblMinAggregateOutputType | null
    _max: Reserva_habitacion_tblMaxAggregateOutputType | null
  }

  type GetReserva_habitacion_tblGroupByPayload<T extends reserva_habitacion_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reserva_habitacion_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reserva_habitacion_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reserva_habitacion_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Reserva_habitacion_tblGroupByOutputType[P]>
        }
      >
    >


  export type reserva_habitacion_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva_reserva_habitacion?: boolean
    id_habitacion_reserva_habitacion?: boolean
    id_estado_reserva_habitacion?: boolean
    estados_tbl?: boolean | estados_tblDefaultArgs<ExtArgs>
    habitacion_tbl?: boolean | habitacion_tblDefaultArgs<ExtArgs>
    reserva_tbl?: boolean | reserva_tblDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva_habitacion_tbl"]>


  export type reserva_habitacion_tblSelectScalar = {
    id_reserva_reserva_habitacion?: boolean
    id_habitacion_reserva_habitacion?: boolean
    id_estado_reserva_habitacion?: boolean
  }

  export type reserva_habitacion_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estados_tbl?: boolean | estados_tblDefaultArgs<ExtArgs>
    habitacion_tbl?: boolean | habitacion_tblDefaultArgs<ExtArgs>
    reserva_tbl?: boolean | reserva_tblDefaultArgs<ExtArgs>
  }

  export type $reserva_habitacion_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserva_habitacion_tbl"
    objects: {
      estados_tbl: Prisma.$estados_tblPayload<ExtArgs>
      habitacion_tbl: Prisma.$habitacion_tblPayload<ExtArgs>
      reserva_tbl: Prisma.$reserva_tblPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva_reserva_habitacion: number
      id_habitacion_reserva_habitacion: number
      id_estado_reserva_habitacion: number
    }, ExtArgs["result"]["reserva_habitacion_tbl"]>
    composites: {}
  }

  type reserva_habitacion_tblGetPayload<S extends boolean | null | undefined | reserva_habitacion_tblDefaultArgs> = $Result.GetResult<Prisma.$reserva_habitacion_tblPayload, S>

  type reserva_habitacion_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reserva_habitacion_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Reserva_habitacion_tblCountAggregateInputType | true
    }

  export interface reserva_habitacion_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserva_habitacion_tbl'], meta: { name: 'reserva_habitacion_tbl' } }
    /**
     * Find zero or one Reserva_habitacion_tbl that matches the filter.
     * @param {reserva_habitacion_tblFindUniqueArgs} args - Arguments to find a Reserva_habitacion_tbl
     * @example
     * // Get one Reserva_habitacion_tbl
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reserva_habitacion_tblFindUniqueArgs>(args: SelectSubset<T, reserva_habitacion_tblFindUniqueArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reserva_habitacion_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {reserva_habitacion_tblFindUniqueOrThrowArgs} args - Arguments to find a Reserva_habitacion_tbl
     * @example
     * // Get one Reserva_habitacion_tbl
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reserva_habitacion_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, reserva_habitacion_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reserva_habitacion_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_habitacion_tblFindFirstArgs} args - Arguments to find a Reserva_habitacion_tbl
     * @example
     * // Get one Reserva_habitacion_tbl
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reserva_habitacion_tblFindFirstArgs>(args?: SelectSubset<T, reserva_habitacion_tblFindFirstArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reserva_habitacion_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_habitacion_tblFindFirstOrThrowArgs} args - Arguments to find a Reserva_habitacion_tbl
     * @example
     * // Get one Reserva_habitacion_tbl
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reserva_habitacion_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, reserva_habitacion_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reserva_habitacion_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_habitacion_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reserva_habitacion_tbls
     * const reserva_habitacion_tbls = await prisma.reserva_habitacion_tbl.findMany()
     * 
     * // Get first 10 Reserva_habitacion_tbls
     * const reserva_habitacion_tbls = await prisma.reserva_habitacion_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva_reserva_habitacion`
     * const reserva_habitacion_tblWithId_reserva_reserva_habitacionOnly = await prisma.reserva_habitacion_tbl.findMany({ select: { id_reserva_reserva_habitacion: true } })
     * 
     */
    findMany<T extends reserva_habitacion_tblFindManyArgs>(args?: SelectSubset<T, reserva_habitacion_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reserva_habitacion_tbl.
     * @param {reserva_habitacion_tblCreateArgs} args - Arguments to create a Reserva_habitacion_tbl.
     * @example
     * // Create one Reserva_habitacion_tbl
     * const Reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.create({
     *   data: {
     *     // ... data to create a Reserva_habitacion_tbl
     *   }
     * })
     * 
     */
    create<T extends reserva_habitacion_tblCreateArgs>(args: SelectSubset<T, reserva_habitacion_tblCreateArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reserva_habitacion_tbls.
     * @param {reserva_habitacion_tblCreateManyArgs} args - Arguments to create many Reserva_habitacion_tbls.
     * @example
     * // Create many Reserva_habitacion_tbls
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reserva_habitacion_tblCreateManyArgs>(args?: SelectSubset<T, reserva_habitacion_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reserva_habitacion_tbl.
     * @param {reserva_habitacion_tblDeleteArgs} args - Arguments to delete one Reserva_habitacion_tbl.
     * @example
     * // Delete one Reserva_habitacion_tbl
     * const Reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.delete({
     *   where: {
     *     // ... filter to delete one Reserva_habitacion_tbl
     *   }
     * })
     * 
     */
    delete<T extends reserva_habitacion_tblDeleteArgs>(args: SelectSubset<T, reserva_habitacion_tblDeleteArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reserva_habitacion_tbl.
     * @param {reserva_habitacion_tblUpdateArgs} args - Arguments to update one Reserva_habitacion_tbl.
     * @example
     * // Update one Reserva_habitacion_tbl
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reserva_habitacion_tblUpdateArgs>(args: SelectSubset<T, reserva_habitacion_tblUpdateArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reserva_habitacion_tbls.
     * @param {reserva_habitacion_tblDeleteManyArgs} args - Arguments to filter Reserva_habitacion_tbls to delete.
     * @example
     * // Delete a few Reserva_habitacion_tbls
     * const { count } = await prisma.reserva_habitacion_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reserva_habitacion_tblDeleteManyArgs>(args?: SelectSubset<T, reserva_habitacion_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reserva_habitacion_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_habitacion_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reserva_habitacion_tbls
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reserva_habitacion_tblUpdateManyArgs>(args: SelectSubset<T, reserva_habitacion_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reserva_habitacion_tbl.
     * @param {reserva_habitacion_tblUpsertArgs} args - Arguments to update or create a Reserva_habitacion_tbl.
     * @example
     * // Update or create a Reserva_habitacion_tbl
     * const reserva_habitacion_tbl = await prisma.reserva_habitacion_tbl.upsert({
     *   create: {
     *     // ... data to create a Reserva_habitacion_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva_habitacion_tbl we want to update
     *   }
     * })
     */
    upsert<T extends reserva_habitacion_tblUpsertArgs>(args: SelectSubset<T, reserva_habitacion_tblUpsertArgs<ExtArgs>>): Prisma__reserva_habitacion_tblClient<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reserva_habitacion_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_habitacion_tblCountArgs} args - Arguments to filter Reserva_habitacion_tbls to count.
     * @example
     * // Count the number of Reserva_habitacion_tbls
     * const count = await prisma.reserva_habitacion_tbl.count({
     *   where: {
     *     // ... the filter for the Reserva_habitacion_tbls we want to count
     *   }
     * })
    **/
    count<T extends reserva_habitacion_tblCountArgs>(
      args?: Subset<T, reserva_habitacion_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reserva_habitacion_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva_habitacion_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reserva_habitacion_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reserva_habitacion_tblAggregateArgs>(args: Subset<T, Reserva_habitacion_tblAggregateArgs>): Prisma.PrismaPromise<GetReserva_habitacion_tblAggregateType<T>>

    /**
     * Group by Reserva_habitacion_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_habitacion_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reserva_habitacion_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reserva_habitacion_tblGroupByArgs['orderBy'] }
        : { orderBy?: reserva_habitacion_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reserva_habitacion_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserva_habitacion_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserva_habitacion_tbl model
   */
  readonly fields: reserva_habitacion_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserva_habitacion_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reserva_habitacion_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estados_tbl<T extends estados_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estados_tblDefaultArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    habitacion_tbl<T extends habitacion_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, habitacion_tblDefaultArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reserva_tbl<T extends reserva_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reserva_tblDefaultArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reserva_habitacion_tbl model
   */ 
  interface reserva_habitacion_tblFieldRefs {
    readonly id_reserva_reserva_habitacion: FieldRef<"reserva_habitacion_tbl", 'Int'>
    readonly id_habitacion_reserva_habitacion: FieldRef<"reserva_habitacion_tbl", 'Int'>
    readonly id_estado_reserva_habitacion: FieldRef<"reserva_habitacion_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reserva_habitacion_tbl findUnique
   */
  export type reserva_habitacion_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_habitacion_tbl to fetch.
     */
    where: reserva_habitacion_tblWhereUniqueInput
  }

  /**
   * reserva_habitacion_tbl findUniqueOrThrow
   */
  export type reserva_habitacion_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_habitacion_tbl to fetch.
     */
    where: reserva_habitacion_tblWhereUniqueInput
  }

  /**
   * reserva_habitacion_tbl findFirst
   */
  export type reserva_habitacion_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_habitacion_tbl to fetch.
     */
    where?: reserva_habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_habitacion_tbls to fetch.
     */
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserva_habitacion_tbls.
     */
    cursor?: reserva_habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_habitacion_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserva_habitacion_tbls.
     */
    distinct?: Reserva_habitacion_tblScalarFieldEnum | Reserva_habitacion_tblScalarFieldEnum[]
  }

  /**
   * reserva_habitacion_tbl findFirstOrThrow
   */
  export type reserva_habitacion_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_habitacion_tbl to fetch.
     */
    where?: reserva_habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_habitacion_tbls to fetch.
     */
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserva_habitacion_tbls.
     */
    cursor?: reserva_habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_habitacion_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserva_habitacion_tbls.
     */
    distinct?: Reserva_habitacion_tblScalarFieldEnum | Reserva_habitacion_tblScalarFieldEnum[]
  }

  /**
   * reserva_habitacion_tbl findMany
   */
  export type reserva_habitacion_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_habitacion_tbls to fetch.
     */
    where?: reserva_habitacion_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_habitacion_tbls to fetch.
     */
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reserva_habitacion_tbls.
     */
    cursor?: reserva_habitacion_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_habitacion_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_habitacion_tbls.
     */
    skip?: number
    distinct?: Reserva_habitacion_tblScalarFieldEnum | Reserva_habitacion_tblScalarFieldEnum[]
  }

  /**
   * reserva_habitacion_tbl create
   */
  export type reserva_habitacion_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a reserva_habitacion_tbl.
     */
    data: XOR<reserva_habitacion_tblCreateInput, reserva_habitacion_tblUncheckedCreateInput>
  }

  /**
   * reserva_habitacion_tbl createMany
   */
  export type reserva_habitacion_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reserva_habitacion_tbls.
     */
    data: reserva_habitacion_tblCreateManyInput | reserva_habitacion_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserva_habitacion_tbl update
   */
  export type reserva_habitacion_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a reserva_habitacion_tbl.
     */
    data: XOR<reserva_habitacion_tblUpdateInput, reserva_habitacion_tblUncheckedUpdateInput>
    /**
     * Choose, which reserva_habitacion_tbl to update.
     */
    where: reserva_habitacion_tblWhereUniqueInput
  }

  /**
   * reserva_habitacion_tbl updateMany
   */
  export type reserva_habitacion_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reserva_habitacion_tbls.
     */
    data: XOR<reserva_habitacion_tblUpdateManyMutationInput, reserva_habitacion_tblUncheckedUpdateManyInput>
    /**
     * Filter which reserva_habitacion_tbls to update
     */
    where?: reserva_habitacion_tblWhereInput
  }

  /**
   * reserva_habitacion_tbl upsert
   */
  export type reserva_habitacion_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the reserva_habitacion_tbl to update in case it exists.
     */
    where: reserva_habitacion_tblWhereUniqueInput
    /**
     * In case the reserva_habitacion_tbl found by the `where` argument doesn't exist, create a new reserva_habitacion_tbl with this data.
     */
    create: XOR<reserva_habitacion_tblCreateInput, reserva_habitacion_tblUncheckedCreateInput>
    /**
     * In case the reserva_habitacion_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reserva_habitacion_tblUpdateInput, reserva_habitacion_tblUncheckedUpdateInput>
  }

  /**
   * reserva_habitacion_tbl delete
   */
  export type reserva_habitacion_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    /**
     * Filter which reserva_habitacion_tbl to delete.
     */
    where: reserva_habitacion_tblWhereUniqueInput
  }

  /**
   * reserva_habitacion_tbl deleteMany
   */
  export type reserva_habitacion_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva_habitacion_tbls to delete
     */
    where?: reserva_habitacion_tblWhereInput
  }

  /**
   * reserva_habitacion_tbl without action
   */
  export type reserva_habitacion_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
  }


  /**
   * Model reserva_tbl
   */

  export type AggregateReserva_tbl = {
    _count: Reserva_tblCountAggregateOutputType | null
    _avg: Reserva_tblAvgAggregateOutputType | null
    _sum: Reserva_tblSumAggregateOutputType | null
    _min: Reserva_tblMinAggregateOutputType | null
    _max: Reserva_tblMaxAggregateOutputType | null
  }

  export type Reserva_tblAvgAggregateOutputType = {
    id_reserva: number | null
    can_per_reserva: number | null
    cos_tot_reserva: number | null
    id_estado_reserva: number | null
    id_usuario_reserva: number | null
  }

  export type Reserva_tblSumAggregateOutputType = {
    id_reserva: number | null
    can_per_reserva: number | null
    cos_tot_reserva: number | null
    id_estado_reserva: number | null
    id_usuario_reserva: number | null
  }

  export type Reserva_tblMinAggregateOutputType = {
    id_reserva: number | null
    fec_ent_reserva: Date | null
    fec_sal_reserva: Date | null
    des_reserva: string | null
    can_per_reserva: number | null
    cos_tot_reserva: number | null
    fec_reg_reserva: Date | null
    id_estado_reserva: number | null
    id_usuario_reserva: number | null
  }

  export type Reserva_tblMaxAggregateOutputType = {
    id_reserva: number | null
    fec_ent_reserva: Date | null
    fec_sal_reserva: Date | null
    des_reserva: string | null
    can_per_reserva: number | null
    cos_tot_reserva: number | null
    fec_reg_reserva: Date | null
    id_estado_reserva: number | null
    id_usuario_reserva: number | null
  }

  export type Reserva_tblCountAggregateOutputType = {
    id_reserva: number
    fec_ent_reserva: number
    fec_sal_reserva: number
    des_reserva: number
    can_per_reserva: number
    cos_tot_reserva: number
    fec_reg_reserva: number
    id_estado_reserva: number
    id_usuario_reserva: number
    _all: number
  }


  export type Reserva_tblAvgAggregateInputType = {
    id_reserva?: true
    can_per_reserva?: true
    cos_tot_reserva?: true
    id_estado_reserva?: true
    id_usuario_reserva?: true
  }

  export type Reserva_tblSumAggregateInputType = {
    id_reserva?: true
    can_per_reserva?: true
    cos_tot_reserva?: true
    id_estado_reserva?: true
    id_usuario_reserva?: true
  }

  export type Reserva_tblMinAggregateInputType = {
    id_reserva?: true
    fec_ent_reserva?: true
    fec_sal_reserva?: true
    des_reserva?: true
    can_per_reserva?: true
    cos_tot_reserva?: true
    fec_reg_reserva?: true
    id_estado_reserva?: true
    id_usuario_reserva?: true
  }

  export type Reserva_tblMaxAggregateInputType = {
    id_reserva?: true
    fec_ent_reserva?: true
    fec_sal_reserva?: true
    des_reserva?: true
    can_per_reserva?: true
    cos_tot_reserva?: true
    fec_reg_reserva?: true
    id_estado_reserva?: true
    id_usuario_reserva?: true
  }

  export type Reserva_tblCountAggregateInputType = {
    id_reserva?: true
    fec_ent_reserva?: true
    fec_sal_reserva?: true
    des_reserva?: true
    can_per_reserva?: true
    cos_tot_reserva?: true
    fec_reg_reserva?: true
    id_estado_reserva?: true
    id_usuario_reserva?: true
    _all?: true
  }

  export type Reserva_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva_tbl to aggregate.
     */
    where?: reserva_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_tbls to fetch.
     */
    orderBy?: reserva_tblOrderByWithRelationInput | reserva_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reserva_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reserva_tbls
    **/
    _count?: true | Reserva_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reserva_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reserva_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reserva_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reserva_tblMaxAggregateInputType
  }

  export type GetReserva_tblAggregateType<T extends Reserva_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva_tbl[P]>
      : GetScalarType<T[P], AggregateReserva_tbl[P]>
  }




  export type reserva_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_tblWhereInput
    orderBy?: reserva_tblOrderByWithAggregationInput | reserva_tblOrderByWithAggregationInput[]
    by: Reserva_tblScalarFieldEnum[] | Reserva_tblScalarFieldEnum
    having?: reserva_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reserva_tblCountAggregateInputType | true
    _avg?: Reserva_tblAvgAggregateInputType
    _sum?: Reserva_tblSumAggregateInputType
    _min?: Reserva_tblMinAggregateInputType
    _max?: Reserva_tblMaxAggregateInputType
  }

  export type Reserva_tblGroupByOutputType = {
    id_reserva: number
    fec_ent_reserva: Date | null
    fec_sal_reserva: Date | null
    des_reserva: string | null
    can_per_reserva: number | null
    cos_tot_reserva: number | null
    fec_reg_reserva: Date | null
    id_estado_reserva: number
    id_usuario_reserva: number
    _count: Reserva_tblCountAggregateOutputType | null
    _avg: Reserva_tblAvgAggregateOutputType | null
    _sum: Reserva_tblSumAggregateOutputType | null
    _min: Reserva_tblMinAggregateOutputType | null
    _max: Reserva_tblMaxAggregateOutputType | null
  }

  type GetReserva_tblGroupByPayload<T extends reserva_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reserva_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reserva_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reserva_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Reserva_tblGroupByOutputType[P]>
        }
      >
    >


  export type reserva_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fec_ent_reserva?: boolean
    fec_sal_reserva?: boolean
    des_reserva?: boolean
    can_per_reserva?: boolean
    cos_tot_reserva?: boolean
    fec_reg_reserva?: boolean
    id_estado_reserva?: boolean
    id_usuario_reserva?: boolean
    reserva_habitacion_tbl?: boolean | reserva_tbl$reserva_habitacion_tblArgs<ExtArgs>
    estados_tbl?: boolean | estados_tblDefaultArgs<ExtArgs>
    usuario_tbl?: boolean | usuario_tblDefaultArgs<ExtArgs>
    _count?: boolean | Reserva_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva_tbl"]>


  export type reserva_tblSelectScalar = {
    id_reserva?: boolean
    fec_ent_reserva?: boolean
    fec_sal_reserva?: boolean
    des_reserva?: boolean
    can_per_reserva?: boolean
    cos_tot_reserva?: boolean
    fec_reg_reserva?: boolean
    id_estado_reserva?: boolean
    id_usuario_reserva?: boolean
  }

  export type reserva_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_habitacion_tbl?: boolean | reserva_tbl$reserva_habitacion_tblArgs<ExtArgs>
    estados_tbl?: boolean | estados_tblDefaultArgs<ExtArgs>
    usuario_tbl?: boolean | usuario_tblDefaultArgs<ExtArgs>
    _count?: boolean | Reserva_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $reserva_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserva_tbl"
    objects: {
      reserva_habitacion_tbl: Prisma.$reserva_habitacion_tblPayload<ExtArgs>[]
      estados_tbl: Prisma.$estados_tblPayload<ExtArgs>
      usuario_tbl: Prisma.$usuario_tblPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      fec_ent_reserva: Date | null
      fec_sal_reserva: Date | null
      des_reserva: string | null
      can_per_reserva: number | null
      cos_tot_reserva: number | null
      fec_reg_reserva: Date | null
      id_estado_reserva: number
      id_usuario_reserva: number
    }, ExtArgs["result"]["reserva_tbl"]>
    composites: {}
  }

  type reserva_tblGetPayload<S extends boolean | null | undefined | reserva_tblDefaultArgs> = $Result.GetResult<Prisma.$reserva_tblPayload, S>

  type reserva_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<reserva_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Reserva_tblCountAggregateInputType | true
    }

  export interface reserva_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserva_tbl'], meta: { name: 'reserva_tbl' } }
    /**
     * Find zero or one Reserva_tbl that matches the filter.
     * @param {reserva_tblFindUniqueArgs} args - Arguments to find a Reserva_tbl
     * @example
     * // Get one Reserva_tbl
     * const reserva_tbl = await prisma.reserva_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reserva_tblFindUniqueArgs>(args: SelectSubset<T, reserva_tblFindUniqueArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reserva_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {reserva_tblFindUniqueOrThrowArgs} args - Arguments to find a Reserva_tbl
     * @example
     * // Get one Reserva_tbl
     * const reserva_tbl = await prisma.reserva_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reserva_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, reserva_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reserva_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_tblFindFirstArgs} args - Arguments to find a Reserva_tbl
     * @example
     * // Get one Reserva_tbl
     * const reserva_tbl = await prisma.reserva_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reserva_tblFindFirstArgs>(args?: SelectSubset<T, reserva_tblFindFirstArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reserva_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_tblFindFirstOrThrowArgs} args - Arguments to find a Reserva_tbl
     * @example
     * // Get one Reserva_tbl
     * const reserva_tbl = await prisma.reserva_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reserva_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, reserva_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reserva_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reserva_tbls
     * const reserva_tbls = await prisma.reserva_tbl.findMany()
     * 
     * // Get first 10 Reserva_tbls
     * const reserva_tbls = await prisma.reserva_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reserva_tblWithId_reservaOnly = await prisma.reserva_tbl.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reserva_tblFindManyArgs>(args?: SelectSubset<T, reserva_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reserva_tbl.
     * @param {reserva_tblCreateArgs} args - Arguments to create a Reserva_tbl.
     * @example
     * // Create one Reserva_tbl
     * const Reserva_tbl = await prisma.reserva_tbl.create({
     *   data: {
     *     // ... data to create a Reserva_tbl
     *   }
     * })
     * 
     */
    create<T extends reserva_tblCreateArgs>(args: SelectSubset<T, reserva_tblCreateArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reserva_tbls.
     * @param {reserva_tblCreateManyArgs} args - Arguments to create many Reserva_tbls.
     * @example
     * // Create many Reserva_tbls
     * const reserva_tbl = await prisma.reserva_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reserva_tblCreateManyArgs>(args?: SelectSubset<T, reserva_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reserva_tbl.
     * @param {reserva_tblDeleteArgs} args - Arguments to delete one Reserva_tbl.
     * @example
     * // Delete one Reserva_tbl
     * const Reserva_tbl = await prisma.reserva_tbl.delete({
     *   where: {
     *     // ... filter to delete one Reserva_tbl
     *   }
     * })
     * 
     */
    delete<T extends reserva_tblDeleteArgs>(args: SelectSubset<T, reserva_tblDeleteArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reserva_tbl.
     * @param {reserva_tblUpdateArgs} args - Arguments to update one Reserva_tbl.
     * @example
     * // Update one Reserva_tbl
     * const reserva_tbl = await prisma.reserva_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reserva_tblUpdateArgs>(args: SelectSubset<T, reserva_tblUpdateArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reserva_tbls.
     * @param {reserva_tblDeleteManyArgs} args - Arguments to filter Reserva_tbls to delete.
     * @example
     * // Delete a few Reserva_tbls
     * const { count } = await prisma.reserva_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reserva_tblDeleteManyArgs>(args?: SelectSubset<T, reserva_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reserva_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reserva_tbls
     * const reserva_tbl = await prisma.reserva_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reserva_tblUpdateManyArgs>(args: SelectSubset<T, reserva_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reserva_tbl.
     * @param {reserva_tblUpsertArgs} args - Arguments to update or create a Reserva_tbl.
     * @example
     * // Update or create a Reserva_tbl
     * const reserva_tbl = await prisma.reserva_tbl.upsert({
     *   create: {
     *     // ... data to create a Reserva_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva_tbl we want to update
     *   }
     * })
     */
    upsert<T extends reserva_tblUpsertArgs>(args: SelectSubset<T, reserva_tblUpsertArgs<ExtArgs>>): Prisma__reserva_tblClient<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reserva_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_tblCountArgs} args - Arguments to filter Reserva_tbls to count.
     * @example
     * // Count the number of Reserva_tbls
     * const count = await prisma.reserva_tbl.count({
     *   where: {
     *     // ... the filter for the Reserva_tbls we want to count
     *   }
     * })
    **/
    count<T extends reserva_tblCountArgs>(
      args?: Subset<T, reserva_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reserva_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reserva_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reserva_tblAggregateArgs>(args: Subset<T, Reserva_tblAggregateArgs>): Prisma.PrismaPromise<GetReserva_tblAggregateType<T>>

    /**
     * Group by Reserva_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reserva_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reserva_tblGroupByArgs['orderBy'] }
        : { orderBy?: reserva_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reserva_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserva_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserva_tbl model
   */
  readonly fields: reserva_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserva_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reserva_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva_habitacion_tbl<T extends reserva_tbl$reserva_habitacion_tblArgs<ExtArgs> = {}>(args?: Subset<T, reserva_tbl$reserva_habitacion_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_habitacion_tblPayload<ExtArgs>, T, "findMany"> | Null>
    estados_tbl<T extends estados_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estados_tblDefaultArgs<ExtArgs>>): Prisma__estados_tblClient<$Result.GetResult<Prisma.$estados_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usuario_tbl<T extends usuario_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuario_tblDefaultArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reserva_tbl model
   */ 
  interface reserva_tblFieldRefs {
    readonly id_reserva: FieldRef<"reserva_tbl", 'Int'>
    readonly fec_ent_reserva: FieldRef<"reserva_tbl", 'DateTime'>
    readonly fec_sal_reserva: FieldRef<"reserva_tbl", 'DateTime'>
    readonly des_reserva: FieldRef<"reserva_tbl", 'String'>
    readonly can_per_reserva: FieldRef<"reserva_tbl", 'Int'>
    readonly cos_tot_reserva: FieldRef<"reserva_tbl", 'Float'>
    readonly fec_reg_reserva: FieldRef<"reserva_tbl", 'DateTime'>
    readonly id_estado_reserva: FieldRef<"reserva_tbl", 'Int'>
    readonly id_usuario_reserva: FieldRef<"reserva_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reserva_tbl findUnique
   */
  export type reserva_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_tbl to fetch.
     */
    where: reserva_tblWhereUniqueInput
  }

  /**
   * reserva_tbl findUniqueOrThrow
   */
  export type reserva_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_tbl to fetch.
     */
    where: reserva_tblWhereUniqueInput
  }

  /**
   * reserva_tbl findFirst
   */
  export type reserva_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_tbl to fetch.
     */
    where?: reserva_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_tbls to fetch.
     */
    orderBy?: reserva_tblOrderByWithRelationInput | reserva_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserva_tbls.
     */
    cursor?: reserva_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserva_tbls.
     */
    distinct?: Reserva_tblScalarFieldEnum | Reserva_tblScalarFieldEnum[]
  }

  /**
   * reserva_tbl findFirstOrThrow
   */
  export type reserva_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_tbl to fetch.
     */
    where?: reserva_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_tbls to fetch.
     */
    orderBy?: reserva_tblOrderByWithRelationInput | reserva_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserva_tbls.
     */
    cursor?: reserva_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserva_tbls.
     */
    distinct?: Reserva_tblScalarFieldEnum | Reserva_tblScalarFieldEnum[]
  }

  /**
   * reserva_tbl findMany
   */
  export type reserva_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * Filter, which reserva_tbls to fetch.
     */
    where?: reserva_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_tbls to fetch.
     */
    orderBy?: reserva_tblOrderByWithRelationInput | reserva_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reserva_tbls.
     */
    cursor?: reserva_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_tbls.
     */
    skip?: number
    distinct?: Reserva_tblScalarFieldEnum | Reserva_tblScalarFieldEnum[]
  }

  /**
   * reserva_tbl create
   */
  export type reserva_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a reserva_tbl.
     */
    data: XOR<reserva_tblCreateInput, reserva_tblUncheckedCreateInput>
  }

  /**
   * reserva_tbl createMany
   */
  export type reserva_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reserva_tbls.
     */
    data: reserva_tblCreateManyInput | reserva_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserva_tbl update
   */
  export type reserva_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a reserva_tbl.
     */
    data: XOR<reserva_tblUpdateInput, reserva_tblUncheckedUpdateInput>
    /**
     * Choose, which reserva_tbl to update.
     */
    where: reserva_tblWhereUniqueInput
  }

  /**
   * reserva_tbl updateMany
   */
  export type reserva_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reserva_tbls.
     */
    data: XOR<reserva_tblUpdateManyMutationInput, reserva_tblUncheckedUpdateManyInput>
    /**
     * Filter which reserva_tbls to update
     */
    where?: reserva_tblWhereInput
  }

  /**
   * reserva_tbl upsert
   */
  export type reserva_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the reserva_tbl to update in case it exists.
     */
    where: reserva_tblWhereUniqueInput
    /**
     * In case the reserva_tbl found by the `where` argument doesn't exist, create a new reserva_tbl with this data.
     */
    create: XOR<reserva_tblCreateInput, reserva_tblUncheckedCreateInput>
    /**
     * In case the reserva_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reserva_tblUpdateInput, reserva_tblUncheckedUpdateInput>
  }

  /**
   * reserva_tbl delete
   */
  export type reserva_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    /**
     * Filter which reserva_tbl to delete.
     */
    where: reserva_tblWhereUniqueInput
  }

  /**
   * reserva_tbl deleteMany
   */
  export type reserva_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva_tbls to delete
     */
    where?: reserva_tblWhereInput
  }

  /**
   * reserva_tbl.reserva_habitacion_tbl
   */
  export type reserva_tbl$reserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_habitacion_tbl
     */
    select?: reserva_habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_habitacion_tblInclude<ExtArgs> | null
    where?: reserva_habitacion_tblWhereInput
    orderBy?: reserva_habitacion_tblOrderByWithRelationInput | reserva_habitacion_tblOrderByWithRelationInput[]
    cursor?: reserva_habitacion_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_habitacion_tblScalarFieldEnum | Reserva_habitacion_tblScalarFieldEnum[]
  }

  /**
   * reserva_tbl without action
   */
  export type reserva_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
  }


  /**
   * Model servicio_habitacion
   */

  export type AggregateServicio_habitacion = {
    _count: Servicio_habitacionCountAggregateOutputType | null
    _avg: Servicio_habitacionAvgAggregateOutputType | null
    _sum: Servicio_habitacionSumAggregateOutputType | null
    _min: Servicio_habitacionMinAggregateOutputType | null
    _max: Servicio_habitacionMaxAggregateOutputType | null
  }

  export type Servicio_habitacionAvgAggregateOutputType = {
    id_habitacion_servicio_habitacion: number | null
    id_servicio_servicio_habitacion: number | null
    can_servicio_habitacion: number | null
  }

  export type Servicio_habitacionSumAggregateOutputType = {
    id_habitacion_servicio_habitacion: number | null
    id_servicio_servicio_habitacion: number | null
    can_servicio_habitacion: number | null
  }

  export type Servicio_habitacionMinAggregateOutputType = {
    id_habitacion_servicio_habitacion: number | null
    id_servicio_servicio_habitacion: number | null
    can_servicio_habitacion: number | null
  }

  export type Servicio_habitacionMaxAggregateOutputType = {
    id_habitacion_servicio_habitacion: number | null
    id_servicio_servicio_habitacion: number | null
    can_servicio_habitacion: number | null
  }

  export type Servicio_habitacionCountAggregateOutputType = {
    id_habitacion_servicio_habitacion: number
    id_servicio_servicio_habitacion: number
    can_servicio_habitacion: number
    _all: number
  }


  export type Servicio_habitacionAvgAggregateInputType = {
    id_habitacion_servicio_habitacion?: true
    id_servicio_servicio_habitacion?: true
    can_servicio_habitacion?: true
  }

  export type Servicio_habitacionSumAggregateInputType = {
    id_habitacion_servicio_habitacion?: true
    id_servicio_servicio_habitacion?: true
    can_servicio_habitacion?: true
  }

  export type Servicio_habitacionMinAggregateInputType = {
    id_habitacion_servicio_habitacion?: true
    id_servicio_servicio_habitacion?: true
    can_servicio_habitacion?: true
  }

  export type Servicio_habitacionMaxAggregateInputType = {
    id_habitacion_servicio_habitacion?: true
    id_servicio_servicio_habitacion?: true
    can_servicio_habitacion?: true
  }

  export type Servicio_habitacionCountAggregateInputType = {
    id_habitacion_servicio_habitacion?: true
    id_servicio_servicio_habitacion?: true
    can_servicio_habitacion?: true
    _all?: true
  }

  export type Servicio_habitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio_habitacion to aggregate.
     */
    where?: servicio_habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_habitacions to fetch.
     */
    orderBy?: servicio_habitacionOrderByWithRelationInput | servicio_habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicio_habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicio_habitacions
    **/
    _count?: true | Servicio_habitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Servicio_habitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Servicio_habitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Servicio_habitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Servicio_habitacionMaxAggregateInputType
  }

  export type GetServicio_habitacionAggregateType<T extends Servicio_habitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio_habitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio_habitacion[P]>
      : GetScalarType<T[P], AggregateServicio_habitacion[P]>
  }




  export type servicio_habitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicio_habitacionWhereInput
    orderBy?: servicio_habitacionOrderByWithAggregationInput | servicio_habitacionOrderByWithAggregationInput[]
    by: Servicio_habitacionScalarFieldEnum[] | Servicio_habitacionScalarFieldEnum
    having?: servicio_habitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Servicio_habitacionCountAggregateInputType | true
    _avg?: Servicio_habitacionAvgAggregateInputType
    _sum?: Servicio_habitacionSumAggregateInputType
    _min?: Servicio_habitacionMinAggregateInputType
    _max?: Servicio_habitacionMaxAggregateInputType
  }

  export type Servicio_habitacionGroupByOutputType = {
    id_habitacion_servicio_habitacion: number
    id_servicio_servicio_habitacion: number
    can_servicio_habitacion: number | null
    _count: Servicio_habitacionCountAggregateOutputType | null
    _avg: Servicio_habitacionAvgAggregateOutputType | null
    _sum: Servicio_habitacionSumAggregateOutputType | null
    _min: Servicio_habitacionMinAggregateOutputType | null
    _max: Servicio_habitacionMaxAggregateOutputType | null
  }

  type GetServicio_habitacionGroupByPayload<T extends servicio_habitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Servicio_habitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Servicio_habitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Servicio_habitacionGroupByOutputType[P]>
            : GetScalarType<T[P], Servicio_habitacionGroupByOutputType[P]>
        }
      >
    >


  export type servicio_habitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_habitacion_servicio_habitacion?: boolean
    id_servicio_servicio_habitacion?: boolean
    can_servicio_habitacion?: boolean
    habitacion_tbl?: boolean | habitacion_tblDefaultArgs<ExtArgs>
    servicio_tbl?: boolean | servicio_tblDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio_habitacion"]>


  export type servicio_habitacionSelectScalar = {
    id_habitacion_servicio_habitacion?: boolean
    id_servicio_servicio_habitacion?: boolean
    can_servicio_habitacion?: boolean
  }

  export type servicio_habitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion_tbl?: boolean | habitacion_tblDefaultArgs<ExtArgs>
    servicio_tbl?: boolean | servicio_tblDefaultArgs<ExtArgs>
  }

  export type $servicio_habitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicio_habitacion"
    objects: {
      habitacion_tbl: Prisma.$habitacion_tblPayload<ExtArgs>
      servicio_tbl: Prisma.$servicio_tblPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_habitacion_servicio_habitacion: number
      id_servicio_servicio_habitacion: number
      can_servicio_habitacion: number | null
    }, ExtArgs["result"]["servicio_habitacion"]>
    composites: {}
  }

  type servicio_habitacionGetPayload<S extends boolean | null | undefined | servicio_habitacionDefaultArgs> = $Result.GetResult<Prisma.$servicio_habitacionPayload, S>

  type servicio_habitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<servicio_habitacionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Servicio_habitacionCountAggregateInputType | true
    }

  export interface servicio_habitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicio_habitacion'], meta: { name: 'servicio_habitacion' } }
    /**
     * Find zero or one Servicio_habitacion that matches the filter.
     * @param {servicio_habitacionFindUniqueArgs} args - Arguments to find a Servicio_habitacion
     * @example
     * // Get one Servicio_habitacion
     * const servicio_habitacion = await prisma.servicio_habitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicio_habitacionFindUniqueArgs>(args: SelectSubset<T, servicio_habitacionFindUniqueArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Servicio_habitacion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {servicio_habitacionFindUniqueOrThrowArgs} args - Arguments to find a Servicio_habitacion
     * @example
     * // Get one Servicio_habitacion
     * const servicio_habitacion = await prisma.servicio_habitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicio_habitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, servicio_habitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Servicio_habitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_habitacionFindFirstArgs} args - Arguments to find a Servicio_habitacion
     * @example
     * // Get one Servicio_habitacion
     * const servicio_habitacion = await prisma.servicio_habitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicio_habitacionFindFirstArgs>(args?: SelectSubset<T, servicio_habitacionFindFirstArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Servicio_habitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_habitacionFindFirstOrThrowArgs} args - Arguments to find a Servicio_habitacion
     * @example
     * // Get one Servicio_habitacion
     * const servicio_habitacion = await prisma.servicio_habitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicio_habitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, servicio_habitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Servicio_habitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_habitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicio_habitacions
     * const servicio_habitacions = await prisma.servicio_habitacion.findMany()
     * 
     * // Get first 10 Servicio_habitacions
     * const servicio_habitacions = await prisma.servicio_habitacion.findMany({ take: 10 })
     * 
     * // Only select the `id_habitacion_servicio_habitacion`
     * const servicio_habitacionWithId_habitacion_servicio_habitacionOnly = await prisma.servicio_habitacion.findMany({ select: { id_habitacion_servicio_habitacion: true } })
     * 
     */
    findMany<T extends servicio_habitacionFindManyArgs>(args?: SelectSubset<T, servicio_habitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Servicio_habitacion.
     * @param {servicio_habitacionCreateArgs} args - Arguments to create a Servicio_habitacion.
     * @example
     * // Create one Servicio_habitacion
     * const Servicio_habitacion = await prisma.servicio_habitacion.create({
     *   data: {
     *     // ... data to create a Servicio_habitacion
     *   }
     * })
     * 
     */
    create<T extends servicio_habitacionCreateArgs>(args: SelectSubset<T, servicio_habitacionCreateArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Servicio_habitacions.
     * @param {servicio_habitacionCreateManyArgs} args - Arguments to create many Servicio_habitacions.
     * @example
     * // Create many Servicio_habitacions
     * const servicio_habitacion = await prisma.servicio_habitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicio_habitacionCreateManyArgs>(args?: SelectSubset<T, servicio_habitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicio_habitacion.
     * @param {servicio_habitacionDeleteArgs} args - Arguments to delete one Servicio_habitacion.
     * @example
     * // Delete one Servicio_habitacion
     * const Servicio_habitacion = await prisma.servicio_habitacion.delete({
     *   where: {
     *     // ... filter to delete one Servicio_habitacion
     *   }
     * })
     * 
     */
    delete<T extends servicio_habitacionDeleteArgs>(args: SelectSubset<T, servicio_habitacionDeleteArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Servicio_habitacion.
     * @param {servicio_habitacionUpdateArgs} args - Arguments to update one Servicio_habitacion.
     * @example
     * // Update one Servicio_habitacion
     * const servicio_habitacion = await prisma.servicio_habitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicio_habitacionUpdateArgs>(args: SelectSubset<T, servicio_habitacionUpdateArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Servicio_habitacions.
     * @param {servicio_habitacionDeleteManyArgs} args - Arguments to filter Servicio_habitacions to delete.
     * @example
     * // Delete a few Servicio_habitacions
     * const { count } = await prisma.servicio_habitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicio_habitacionDeleteManyArgs>(args?: SelectSubset<T, servicio_habitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicio_habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_habitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicio_habitacions
     * const servicio_habitacion = await prisma.servicio_habitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicio_habitacionUpdateManyArgs>(args: SelectSubset<T, servicio_habitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicio_habitacion.
     * @param {servicio_habitacionUpsertArgs} args - Arguments to update or create a Servicio_habitacion.
     * @example
     * // Update or create a Servicio_habitacion
     * const servicio_habitacion = await prisma.servicio_habitacion.upsert({
     *   create: {
     *     // ... data to create a Servicio_habitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio_habitacion we want to update
     *   }
     * })
     */
    upsert<T extends servicio_habitacionUpsertArgs>(args: SelectSubset<T, servicio_habitacionUpsertArgs<ExtArgs>>): Prisma__servicio_habitacionClient<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Servicio_habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_habitacionCountArgs} args - Arguments to filter Servicio_habitacions to count.
     * @example
     * // Count the number of Servicio_habitacions
     * const count = await prisma.servicio_habitacion.count({
     *   where: {
     *     // ... the filter for the Servicio_habitacions we want to count
     *   }
     * })
    **/
    count<T extends servicio_habitacionCountArgs>(
      args?: Subset<T, servicio_habitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Servicio_habitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio_habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Servicio_habitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Servicio_habitacionAggregateArgs>(args: Subset<T, Servicio_habitacionAggregateArgs>): Prisma.PrismaPromise<GetServicio_habitacionAggregateType<T>>

    /**
     * Group by Servicio_habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_habitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicio_habitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicio_habitacionGroupByArgs['orderBy'] }
        : { orderBy?: servicio_habitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicio_habitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicio_habitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicio_habitacion model
   */
  readonly fields: servicio_habitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicio_habitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicio_habitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habitacion_tbl<T extends habitacion_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, habitacion_tblDefaultArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    servicio_tbl<T extends servicio_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicio_tblDefaultArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the servicio_habitacion model
   */ 
  interface servicio_habitacionFieldRefs {
    readonly id_habitacion_servicio_habitacion: FieldRef<"servicio_habitacion", 'Int'>
    readonly id_servicio_servicio_habitacion: FieldRef<"servicio_habitacion", 'Int'>
    readonly can_servicio_habitacion: FieldRef<"servicio_habitacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * servicio_habitacion findUnique
   */
  export type servicio_habitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * Filter, which servicio_habitacion to fetch.
     */
    where: servicio_habitacionWhereUniqueInput
  }

  /**
   * servicio_habitacion findUniqueOrThrow
   */
  export type servicio_habitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * Filter, which servicio_habitacion to fetch.
     */
    where: servicio_habitacionWhereUniqueInput
  }

  /**
   * servicio_habitacion findFirst
   */
  export type servicio_habitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * Filter, which servicio_habitacion to fetch.
     */
    where?: servicio_habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_habitacions to fetch.
     */
    orderBy?: servicio_habitacionOrderByWithRelationInput | servicio_habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicio_habitacions.
     */
    cursor?: servicio_habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicio_habitacions.
     */
    distinct?: Servicio_habitacionScalarFieldEnum | Servicio_habitacionScalarFieldEnum[]
  }

  /**
   * servicio_habitacion findFirstOrThrow
   */
  export type servicio_habitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * Filter, which servicio_habitacion to fetch.
     */
    where?: servicio_habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_habitacions to fetch.
     */
    orderBy?: servicio_habitacionOrderByWithRelationInput | servicio_habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicio_habitacions.
     */
    cursor?: servicio_habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicio_habitacions.
     */
    distinct?: Servicio_habitacionScalarFieldEnum | Servicio_habitacionScalarFieldEnum[]
  }

  /**
   * servicio_habitacion findMany
   */
  export type servicio_habitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * Filter, which servicio_habitacions to fetch.
     */
    where?: servicio_habitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_habitacions to fetch.
     */
    orderBy?: servicio_habitacionOrderByWithRelationInput | servicio_habitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicio_habitacions.
     */
    cursor?: servicio_habitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_habitacions.
     */
    skip?: number
    distinct?: Servicio_habitacionScalarFieldEnum | Servicio_habitacionScalarFieldEnum[]
  }

  /**
   * servicio_habitacion create
   */
  export type servicio_habitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a servicio_habitacion.
     */
    data: XOR<servicio_habitacionCreateInput, servicio_habitacionUncheckedCreateInput>
  }

  /**
   * servicio_habitacion createMany
   */
  export type servicio_habitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicio_habitacions.
     */
    data: servicio_habitacionCreateManyInput | servicio_habitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicio_habitacion update
   */
  export type servicio_habitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a servicio_habitacion.
     */
    data: XOR<servicio_habitacionUpdateInput, servicio_habitacionUncheckedUpdateInput>
    /**
     * Choose, which servicio_habitacion to update.
     */
    where: servicio_habitacionWhereUniqueInput
  }

  /**
   * servicio_habitacion updateMany
   */
  export type servicio_habitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicio_habitacions.
     */
    data: XOR<servicio_habitacionUpdateManyMutationInput, servicio_habitacionUncheckedUpdateManyInput>
    /**
     * Filter which servicio_habitacions to update
     */
    where?: servicio_habitacionWhereInput
  }

  /**
   * servicio_habitacion upsert
   */
  export type servicio_habitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the servicio_habitacion to update in case it exists.
     */
    where: servicio_habitacionWhereUniqueInput
    /**
     * In case the servicio_habitacion found by the `where` argument doesn't exist, create a new servicio_habitacion with this data.
     */
    create: XOR<servicio_habitacionCreateInput, servicio_habitacionUncheckedCreateInput>
    /**
     * In case the servicio_habitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicio_habitacionUpdateInput, servicio_habitacionUncheckedUpdateInput>
  }

  /**
   * servicio_habitacion delete
   */
  export type servicio_habitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    /**
     * Filter which servicio_habitacion to delete.
     */
    where: servicio_habitacionWhereUniqueInput
  }

  /**
   * servicio_habitacion deleteMany
   */
  export type servicio_habitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio_habitacions to delete
     */
    where?: servicio_habitacionWhereInput
  }

  /**
   * servicio_habitacion without action
   */
  export type servicio_habitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
  }


  /**
   * Model tipo_servicio_tbl
   */

  export type AggregateTipo_servicio_tbl = {
    _count: Tipo_servicio_tblCountAggregateOutputType | null
    _avg: Tipo_servicio_tblAvgAggregateOutputType | null
    _sum: Tipo_servicio_tblSumAggregateOutputType | null
    _min: Tipo_servicio_tblMinAggregateOutputType | null
    _max: Tipo_servicio_tblMaxAggregateOutputType | null
  }

  export type Tipo_servicio_tblAvgAggregateOutputType = {
    id_tipo_servicio: number | null
  }

  export type Tipo_servicio_tblSumAggregateOutputType = {
    id_tipo_servicio: number | null
  }

  export type Tipo_servicio_tblMinAggregateOutputType = {
    id_tipo_servicio: number | null
    nom_tipo_servicio: string | null
    cod_tipo_servicio: string | null
    des_tipo_servicio: string | null
    ico_tipo_servicio: string | null
  }

  export type Tipo_servicio_tblMaxAggregateOutputType = {
    id_tipo_servicio: number | null
    nom_tipo_servicio: string | null
    cod_tipo_servicio: string | null
    des_tipo_servicio: string | null
    ico_tipo_servicio: string | null
  }

  export type Tipo_servicio_tblCountAggregateOutputType = {
    id_tipo_servicio: number
    nom_tipo_servicio: number
    cod_tipo_servicio: number
    des_tipo_servicio: number
    ico_tipo_servicio: number
    _all: number
  }


  export type Tipo_servicio_tblAvgAggregateInputType = {
    id_tipo_servicio?: true
  }

  export type Tipo_servicio_tblSumAggregateInputType = {
    id_tipo_servicio?: true
  }

  export type Tipo_servicio_tblMinAggregateInputType = {
    id_tipo_servicio?: true
    nom_tipo_servicio?: true
    cod_tipo_servicio?: true
    des_tipo_servicio?: true
    ico_tipo_servicio?: true
  }

  export type Tipo_servicio_tblMaxAggregateInputType = {
    id_tipo_servicio?: true
    nom_tipo_servicio?: true
    cod_tipo_servicio?: true
    des_tipo_servicio?: true
    ico_tipo_servicio?: true
  }

  export type Tipo_servicio_tblCountAggregateInputType = {
    id_tipo_servicio?: true
    nom_tipo_servicio?: true
    cod_tipo_servicio?: true
    des_tipo_servicio?: true
    ico_tipo_servicio?: true
    _all?: true
  }

  export type Tipo_servicio_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_servicio_tbl to aggregate.
     */
    where?: tipo_servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_servicio_tbls to fetch.
     */
    orderBy?: tipo_servicio_tblOrderByWithRelationInput | tipo_servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_servicio_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_servicio_tbls
    **/
    _count?: true | Tipo_servicio_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_servicio_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_servicio_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_servicio_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_servicio_tblMaxAggregateInputType
  }

  export type GetTipo_servicio_tblAggregateType<T extends Tipo_servicio_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_servicio_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_servicio_tbl[P]>
      : GetScalarType<T[P], AggregateTipo_servicio_tbl[P]>
  }




  export type tipo_servicio_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_servicio_tblWhereInput
    orderBy?: tipo_servicio_tblOrderByWithAggregationInput | tipo_servicio_tblOrderByWithAggregationInput[]
    by: Tipo_servicio_tblScalarFieldEnum[] | Tipo_servicio_tblScalarFieldEnum
    having?: tipo_servicio_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_servicio_tblCountAggregateInputType | true
    _avg?: Tipo_servicio_tblAvgAggregateInputType
    _sum?: Tipo_servicio_tblSumAggregateInputType
    _min?: Tipo_servicio_tblMinAggregateInputType
    _max?: Tipo_servicio_tblMaxAggregateInputType
  }

  export type Tipo_servicio_tblGroupByOutputType = {
    id_tipo_servicio: number
    nom_tipo_servicio: string | null
    cod_tipo_servicio: string | null
    des_tipo_servicio: string | null
    ico_tipo_servicio: string | null
    _count: Tipo_servicio_tblCountAggregateOutputType | null
    _avg: Tipo_servicio_tblAvgAggregateOutputType | null
    _sum: Tipo_servicio_tblSumAggregateOutputType | null
    _min: Tipo_servicio_tblMinAggregateOutputType | null
    _max: Tipo_servicio_tblMaxAggregateOutputType | null
  }

  type GetTipo_servicio_tblGroupByPayload<T extends tipo_servicio_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_servicio_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_servicio_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_servicio_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_servicio_tblGroupByOutputType[P]>
        }
      >
    >


  export type tipo_servicio_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_servicio?: boolean
    nom_tipo_servicio?: boolean
    cod_tipo_servicio?: boolean
    des_tipo_servicio?: boolean
    ico_tipo_servicio?: boolean
    servicio_tbl?: boolean | tipo_servicio_tbl$servicio_tblArgs<ExtArgs>
    _count?: boolean | Tipo_servicio_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_servicio_tbl"]>


  export type tipo_servicio_tblSelectScalar = {
    id_tipo_servicio?: boolean
    nom_tipo_servicio?: boolean
    cod_tipo_servicio?: boolean
    des_tipo_servicio?: boolean
    ico_tipo_servicio?: boolean
  }

  export type tipo_servicio_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio_tbl?: boolean | tipo_servicio_tbl$servicio_tblArgs<ExtArgs>
    _count?: boolean | Tipo_servicio_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipo_servicio_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_servicio_tbl"
    objects: {
      servicio_tbl: Prisma.$servicio_tblPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_servicio: number
      nom_tipo_servicio: string | null
      cod_tipo_servicio: string | null
      des_tipo_servicio: string | null
      ico_tipo_servicio: string | null
    }, ExtArgs["result"]["tipo_servicio_tbl"]>
    composites: {}
  }

  type tipo_servicio_tblGetPayload<S extends boolean | null | undefined | tipo_servicio_tblDefaultArgs> = $Result.GetResult<Prisma.$tipo_servicio_tblPayload, S>

  type tipo_servicio_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tipo_servicio_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tipo_servicio_tblCountAggregateInputType | true
    }

  export interface tipo_servicio_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_servicio_tbl'], meta: { name: 'tipo_servicio_tbl' } }
    /**
     * Find zero or one Tipo_servicio_tbl that matches the filter.
     * @param {tipo_servicio_tblFindUniqueArgs} args - Arguments to find a Tipo_servicio_tbl
     * @example
     * // Get one Tipo_servicio_tbl
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_servicio_tblFindUniqueArgs>(args: SelectSubset<T, tipo_servicio_tblFindUniqueArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tipo_servicio_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tipo_servicio_tblFindUniqueOrThrowArgs} args - Arguments to find a Tipo_servicio_tbl
     * @example
     * // Get one Tipo_servicio_tbl
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_servicio_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_servicio_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tipo_servicio_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_servicio_tblFindFirstArgs} args - Arguments to find a Tipo_servicio_tbl
     * @example
     * // Get one Tipo_servicio_tbl
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_servicio_tblFindFirstArgs>(args?: SelectSubset<T, tipo_servicio_tblFindFirstArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tipo_servicio_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_servicio_tblFindFirstOrThrowArgs} args - Arguments to find a Tipo_servicio_tbl
     * @example
     * // Get one Tipo_servicio_tbl
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_servicio_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_servicio_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tipo_servicio_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_servicio_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_servicio_tbls
     * const tipo_servicio_tbls = await prisma.tipo_servicio_tbl.findMany()
     * 
     * // Get first 10 Tipo_servicio_tbls
     * const tipo_servicio_tbls = await prisma.tipo_servicio_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_servicio`
     * const tipo_servicio_tblWithId_tipo_servicioOnly = await prisma.tipo_servicio_tbl.findMany({ select: { id_tipo_servicio: true } })
     * 
     */
    findMany<T extends tipo_servicio_tblFindManyArgs>(args?: SelectSubset<T, tipo_servicio_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tipo_servicio_tbl.
     * @param {tipo_servicio_tblCreateArgs} args - Arguments to create a Tipo_servicio_tbl.
     * @example
     * // Create one Tipo_servicio_tbl
     * const Tipo_servicio_tbl = await prisma.tipo_servicio_tbl.create({
     *   data: {
     *     // ... data to create a Tipo_servicio_tbl
     *   }
     * })
     * 
     */
    create<T extends tipo_servicio_tblCreateArgs>(args: SelectSubset<T, tipo_servicio_tblCreateArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tipo_servicio_tbls.
     * @param {tipo_servicio_tblCreateManyArgs} args - Arguments to create many Tipo_servicio_tbls.
     * @example
     * // Create many Tipo_servicio_tbls
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_servicio_tblCreateManyArgs>(args?: SelectSubset<T, tipo_servicio_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_servicio_tbl.
     * @param {tipo_servicio_tblDeleteArgs} args - Arguments to delete one Tipo_servicio_tbl.
     * @example
     * // Delete one Tipo_servicio_tbl
     * const Tipo_servicio_tbl = await prisma.tipo_servicio_tbl.delete({
     *   where: {
     *     // ... filter to delete one Tipo_servicio_tbl
     *   }
     * })
     * 
     */
    delete<T extends tipo_servicio_tblDeleteArgs>(args: SelectSubset<T, tipo_servicio_tblDeleteArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tipo_servicio_tbl.
     * @param {tipo_servicio_tblUpdateArgs} args - Arguments to update one Tipo_servicio_tbl.
     * @example
     * // Update one Tipo_servicio_tbl
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_servicio_tblUpdateArgs>(args: SelectSubset<T, tipo_servicio_tblUpdateArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tipo_servicio_tbls.
     * @param {tipo_servicio_tblDeleteManyArgs} args - Arguments to filter Tipo_servicio_tbls to delete.
     * @example
     * // Delete a few Tipo_servicio_tbls
     * const { count } = await prisma.tipo_servicio_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_servicio_tblDeleteManyArgs>(args?: SelectSubset<T, tipo_servicio_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_servicio_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_servicio_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_servicio_tbls
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_servicio_tblUpdateManyArgs>(args: SelectSubset<T, tipo_servicio_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_servicio_tbl.
     * @param {tipo_servicio_tblUpsertArgs} args - Arguments to update or create a Tipo_servicio_tbl.
     * @example
     * // Update or create a Tipo_servicio_tbl
     * const tipo_servicio_tbl = await prisma.tipo_servicio_tbl.upsert({
     *   create: {
     *     // ... data to create a Tipo_servicio_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_servicio_tbl we want to update
     *   }
     * })
     */
    upsert<T extends tipo_servicio_tblUpsertArgs>(args: SelectSubset<T, tipo_servicio_tblUpsertArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tipo_servicio_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_servicio_tblCountArgs} args - Arguments to filter Tipo_servicio_tbls to count.
     * @example
     * // Count the number of Tipo_servicio_tbls
     * const count = await prisma.tipo_servicio_tbl.count({
     *   where: {
     *     // ... the filter for the Tipo_servicio_tbls we want to count
     *   }
     * })
    **/
    count<T extends tipo_servicio_tblCountArgs>(
      args?: Subset<T, tipo_servicio_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_servicio_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_servicio_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_servicio_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_servicio_tblAggregateArgs>(args: Subset<T, Tipo_servicio_tblAggregateArgs>): Prisma.PrismaPromise<GetTipo_servicio_tblAggregateType<T>>

    /**
     * Group by Tipo_servicio_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_servicio_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_servicio_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_servicio_tblGroupByArgs['orderBy'] }
        : { orderBy?: tipo_servicio_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_servicio_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_servicio_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_servicio_tbl model
   */
  readonly fields: tipo_servicio_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_servicio_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_servicio_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio_tbl<T extends tipo_servicio_tbl$servicio_tblArgs<ExtArgs> = {}>(args?: Subset<T, tipo_servicio_tbl$servicio_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipo_servicio_tbl model
   */ 
  interface tipo_servicio_tblFieldRefs {
    readonly id_tipo_servicio: FieldRef<"tipo_servicio_tbl", 'Int'>
    readonly nom_tipo_servicio: FieldRef<"tipo_servicio_tbl", 'String'>
    readonly cod_tipo_servicio: FieldRef<"tipo_servicio_tbl", 'String'>
    readonly des_tipo_servicio: FieldRef<"tipo_servicio_tbl", 'String'>
    readonly ico_tipo_servicio: FieldRef<"tipo_servicio_tbl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_servicio_tbl findUnique
   */
  export type tipo_servicio_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_servicio_tbl to fetch.
     */
    where: tipo_servicio_tblWhereUniqueInput
  }

  /**
   * tipo_servicio_tbl findUniqueOrThrow
   */
  export type tipo_servicio_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_servicio_tbl to fetch.
     */
    where: tipo_servicio_tblWhereUniqueInput
  }

  /**
   * tipo_servicio_tbl findFirst
   */
  export type tipo_servicio_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_servicio_tbl to fetch.
     */
    where?: tipo_servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_servicio_tbls to fetch.
     */
    orderBy?: tipo_servicio_tblOrderByWithRelationInput | tipo_servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_servicio_tbls.
     */
    cursor?: tipo_servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_servicio_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_servicio_tbls.
     */
    distinct?: Tipo_servicio_tblScalarFieldEnum | Tipo_servicio_tblScalarFieldEnum[]
  }

  /**
   * tipo_servicio_tbl findFirstOrThrow
   */
  export type tipo_servicio_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_servicio_tbl to fetch.
     */
    where?: tipo_servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_servicio_tbls to fetch.
     */
    orderBy?: tipo_servicio_tblOrderByWithRelationInput | tipo_servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_servicio_tbls.
     */
    cursor?: tipo_servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_servicio_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_servicio_tbls.
     */
    distinct?: Tipo_servicio_tblScalarFieldEnum | Tipo_servicio_tblScalarFieldEnum[]
  }

  /**
   * tipo_servicio_tbl findMany
   */
  export type tipo_servicio_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_servicio_tbls to fetch.
     */
    where?: tipo_servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_servicio_tbls to fetch.
     */
    orderBy?: tipo_servicio_tblOrderByWithRelationInput | tipo_servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_servicio_tbls.
     */
    cursor?: tipo_servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_servicio_tbls.
     */
    skip?: number
    distinct?: Tipo_servicio_tblScalarFieldEnum | Tipo_servicio_tblScalarFieldEnum[]
  }

  /**
   * tipo_servicio_tbl create
   */
  export type tipo_servicio_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_servicio_tbl.
     */
    data?: XOR<tipo_servicio_tblCreateInput, tipo_servicio_tblUncheckedCreateInput>
  }

  /**
   * tipo_servicio_tbl createMany
   */
  export type tipo_servicio_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_servicio_tbls.
     */
    data: tipo_servicio_tblCreateManyInput | tipo_servicio_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_servicio_tbl update
   */
  export type tipo_servicio_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_servicio_tbl.
     */
    data: XOR<tipo_servicio_tblUpdateInput, tipo_servicio_tblUncheckedUpdateInput>
    /**
     * Choose, which tipo_servicio_tbl to update.
     */
    where: tipo_servicio_tblWhereUniqueInput
  }

  /**
   * tipo_servicio_tbl updateMany
   */
  export type tipo_servicio_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_servicio_tbls.
     */
    data: XOR<tipo_servicio_tblUpdateManyMutationInput, tipo_servicio_tblUncheckedUpdateManyInput>
    /**
     * Filter which tipo_servicio_tbls to update
     */
    where?: tipo_servicio_tblWhereInput
  }

  /**
   * tipo_servicio_tbl upsert
   */
  export type tipo_servicio_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_servicio_tbl to update in case it exists.
     */
    where: tipo_servicio_tblWhereUniqueInput
    /**
     * In case the tipo_servicio_tbl found by the `where` argument doesn't exist, create a new tipo_servicio_tbl with this data.
     */
    create: XOR<tipo_servicio_tblCreateInput, tipo_servicio_tblUncheckedCreateInput>
    /**
     * In case the tipo_servicio_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_servicio_tblUpdateInput, tipo_servicio_tblUncheckedUpdateInput>
  }

  /**
   * tipo_servicio_tbl delete
   */
  export type tipo_servicio_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
    /**
     * Filter which tipo_servicio_tbl to delete.
     */
    where: tipo_servicio_tblWhereUniqueInput
  }

  /**
   * tipo_servicio_tbl deleteMany
   */
  export type tipo_servicio_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_servicio_tbls to delete
     */
    where?: tipo_servicio_tblWhereInput
  }

  /**
   * tipo_servicio_tbl.servicio_tbl
   */
  export type tipo_servicio_tbl$servicio_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    where?: servicio_tblWhereInput
    orderBy?: servicio_tblOrderByWithRelationInput | servicio_tblOrderByWithRelationInput[]
    cursor?: servicio_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Servicio_tblScalarFieldEnum | Servicio_tblScalarFieldEnum[]
  }

  /**
   * tipo_servicio_tbl without action
   */
  export type tipo_servicio_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_servicio_tbl
     */
    select?: tipo_servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_servicio_tblInclude<ExtArgs> | null
  }


  /**
   * Model servicio_tbl
   */

  export type AggregateServicio_tbl = {
    _count: Servicio_tblCountAggregateOutputType | null
    _avg: Servicio_tblAvgAggregateOutputType | null
    _sum: Servicio_tblSumAggregateOutputType | null
    _min: Servicio_tblMinAggregateOutputType | null
    _max: Servicio_tblMaxAggregateOutputType | null
  }

  export type Servicio_tblAvgAggregateOutputType = {
    id_servicio: number | null
    pre_servicio: number | null
    ind_hab_servicio: number | null
    can_per_servicio: number | null
    id_tipo_servicio: number | null
  }

  export type Servicio_tblSumAggregateOutputType = {
    id_servicio: number | null
    pre_servicio: number | null
    ind_hab_servicio: number | null
    can_per_servicio: number | null
    id_tipo_servicio: number | null
  }

  export type Servicio_tblMinAggregateOutputType = {
    id_servicio: number | null
    nom_servicio: string | null
    des_servicio: string | null
    pre_servicio: number | null
    ind_hab_servicio: number | null
    can_per_servicio: number | null
    id_tipo_servicio: number | null
  }

  export type Servicio_tblMaxAggregateOutputType = {
    id_servicio: number | null
    nom_servicio: string | null
    des_servicio: string | null
    pre_servicio: number | null
    ind_hab_servicio: number | null
    can_per_servicio: number | null
    id_tipo_servicio: number | null
  }

  export type Servicio_tblCountAggregateOutputType = {
    id_servicio: number
    nom_servicio: number
    des_servicio: number
    pre_servicio: number
    ind_hab_servicio: number
    can_per_servicio: number
    id_tipo_servicio: number
    _all: number
  }


  export type Servicio_tblAvgAggregateInputType = {
    id_servicio?: true
    pre_servicio?: true
    ind_hab_servicio?: true
    can_per_servicio?: true
    id_tipo_servicio?: true
  }

  export type Servicio_tblSumAggregateInputType = {
    id_servicio?: true
    pre_servicio?: true
    ind_hab_servicio?: true
    can_per_servicio?: true
    id_tipo_servicio?: true
  }

  export type Servicio_tblMinAggregateInputType = {
    id_servicio?: true
    nom_servicio?: true
    des_servicio?: true
    pre_servicio?: true
    ind_hab_servicio?: true
    can_per_servicio?: true
    id_tipo_servicio?: true
  }

  export type Servicio_tblMaxAggregateInputType = {
    id_servicio?: true
    nom_servicio?: true
    des_servicio?: true
    pre_servicio?: true
    ind_hab_servicio?: true
    can_per_servicio?: true
    id_tipo_servicio?: true
  }

  export type Servicio_tblCountAggregateInputType = {
    id_servicio?: true
    nom_servicio?: true
    des_servicio?: true
    pre_servicio?: true
    ind_hab_servicio?: true
    can_per_servicio?: true
    id_tipo_servicio?: true
    _all?: true
  }

  export type Servicio_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio_tbl to aggregate.
     */
    where?: servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_tbls to fetch.
     */
    orderBy?: servicio_tblOrderByWithRelationInput | servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicio_tbls
    **/
    _count?: true | Servicio_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Servicio_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Servicio_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Servicio_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Servicio_tblMaxAggregateInputType
  }

  export type GetServicio_tblAggregateType<T extends Servicio_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio_tbl[P]>
      : GetScalarType<T[P], AggregateServicio_tbl[P]>
  }




  export type servicio_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicio_tblWhereInput
    orderBy?: servicio_tblOrderByWithAggregationInput | servicio_tblOrderByWithAggregationInput[]
    by: Servicio_tblScalarFieldEnum[] | Servicio_tblScalarFieldEnum
    having?: servicio_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Servicio_tblCountAggregateInputType | true
    _avg?: Servicio_tblAvgAggregateInputType
    _sum?: Servicio_tblSumAggregateInputType
    _min?: Servicio_tblMinAggregateInputType
    _max?: Servicio_tblMaxAggregateInputType
  }

  export type Servicio_tblGroupByOutputType = {
    id_servicio: number
    nom_servicio: string | null
    des_servicio: string | null
    pre_servicio: number | null
    ind_hab_servicio: number | null
    can_per_servicio: number | null
    id_tipo_servicio: number
    _count: Servicio_tblCountAggregateOutputType | null
    _avg: Servicio_tblAvgAggregateOutputType | null
    _sum: Servicio_tblSumAggregateOutputType | null
    _min: Servicio_tblMinAggregateOutputType | null
    _max: Servicio_tblMaxAggregateOutputType | null
  }

  type GetServicio_tblGroupByPayload<T extends servicio_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Servicio_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Servicio_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Servicio_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Servicio_tblGroupByOutputType[P]>
        }
      >
    >


  export type servicio_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_servicio?: boolean
    nom_servicio?: boolean
    des_servicio?: boolean
    pre_servicio?: boolean
    ind_hab_servicio?: boolean
    can_per_servicio?: boolean
    id_tipo_servicio?: boolean
    servicio_habitacion?: boolean | servicio_tbl$servicio_habitacionArgs<ExtArgs>
    tipo_servicio_tbl?: boolean | tipo_servicio_tblDefaultArgs<ExtArgs>
    _count?: boolean | Servicio_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio_tbl"]>


  export type servicio_tblSelectScalar = {
    id_servicio?: boolean
    nom_servicio?: boolean
    des_servicio?: boolean
    pre_servicio?: boolean
    ind_hab_servicio?: boolean
    can_per_servicio?: boolean
    id_tipo_servicio?: boolean
  }

  export type servicio_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio_habitacion?: boolean | servicio_tbl$servicio_habitacionArgs<ExtArgs>
    tipo_servicio_tbl?: boolean | tipo_servicio_tblDefaultArgs<ExtArgs>
    _count?: boolean | Servicio_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $servicio_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicio_tbl"
    objects: {
      servicio_habitacion: Prisma.$servicio_habitacionPayload<ExtArgs>[]
      tipo_servicio_tbl: Prisma.$tipo_servicio_tblPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_servicio: number
      nom_servicio: string | null
      des_servicio: string | null
      pre_servicio: number | null
      ind_hab_servicio: number | null
      can_per_servicio: number | null
      id_tipo_servicio: number
    }, ExtArgs["result"]["servicio_tbl"]>
    composites: {}
  }

  type servicio_tblGetPayload<S extends boolean | null | undefined | servicio_tblDefaultArgs> = $Result.GetResult<Prisma.$servicio_tblPayload, S>

  type servicio_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<servicio_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Servicio_tblCountAggregateInputType | true
    }

  export interface servicio_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicio_tbl'], meta: { name: 'servicio_tbl' } }
    /**
     * Find zero or one Servicio_tbl that matches the filter.
     * @param {servicio_tblFindUniqueArgs} args - Arguments to find a Servicio_tbl
     * @example
     * // Get one Servicio_tbl
     * const servicio_tbl = await prisma.servicio_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicio_tblFindUniqueArgs>(args: SelectSubset<T, servicio_tblFindUniqueArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Servicio_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {servicio_tblFindUniqueOrThrowArgs} args - Arguments to find a Servicio_tbl
     * @example
     * // Get one Servicio_tbl
     * const servicio_tbl = await prisma.servicio_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicio_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, servicio_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Servicio_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_tblFindFirstArgs} args - Arguments to find a Servicio_tbl
     * @example
     * // Get one Servicio_tbl
     * const servicio_tbl = await prisma.servicio_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicio_tblFindFirstArgs>(args?: SelectSubset<T, servicio_tblFindFirstArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Servicio_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_tblFindFirstOrThrowArgs} args - Arguments to find a Servicio_tbl
     * @example
     * // Get one Servicio_tbl
     * const servicio_tbl = await prisma.servicio_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicio_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, servicio_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Servicio_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicio_tbls
     * const servicio_tbls = await prisma.servicio_tbl.findMany()
     * 
     * // Get first 10 Servicio_tbls
     * const servicio_tbls = await prisma.servicio_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_servicio`
     * const servicio_tblWithId_servicioOnly = await prisma.servicio_tbl.findMany({ select: { id_servicio: true } })
     * 
     */
    findMany<T extends servicio_tblFindManyArgs>(args?: SelectSubset<T, servicio_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Servicio_tbl.
     * @param {servicio_tblCreateArgs} args - Arguments to create a Servicio_tbl.
     * @example
     * // Create one Servicio_tbl
     * const Servicio_tbl = await prisma.servicio_tbl.create({
     *   data: {
     *     // ... data to create a Servicio_tbl
     *   }
     * })
     * 
     */
    create<T extends servicio_tblCreateArgs>(args: SelectSubset<T, servicio_tblCreateArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Servicio_tbls.
     * @param {servicio_tblCreateManyArgs} args - Arguments to create many Servicio_tbls.
     * @example
     * // Create many Servicio_tbls
     * const servicio_tbl = await prisma.servicio_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicio_tblCreateManyArgs>(args?: SelectSubset<T, servicio_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicio_tbl.
     * @param {servicio_tblDeleteArgs} args - Arguments to delete one Servicio_tbl.
     * @example
     * // Delete one Servicio_tbl
     * const Servicio_tbl = await prisma.servicio_tbl.delete({
     *   where: {
     *     // ... filter to delete one Servicio_tbl
     *   }
     * })
     * 
     */
    delete<T extends servicio_tblDeleteArgs>(args: SelectSubset<T, servicio_tblDeleteArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Servicio_tbl.
     * @param {servicio_tblUpdateArgs} args - Arguments to update one Servicio_tbl.
     * @example
     * // Update one Servicio_tbl
     * const servicio_tbl = await prisma.servicio_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicio_tblUpdateArgs>(args: SelectSubset<T, servicio_tblUpdateArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Servicio_tbls.
     * @param {servicio_tblDeleteManyArgs} args - Arguments to filter Servicio_tbls to delete.
     * @example
     * // Delete a few Servicio_tbls
     * const { count } = await prisma.servicio_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicio_tblDeleteManyArgs>(args?: SelectSubset<T, servicio_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicio_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicio_tbls
     * const servicio_tbl = await prisma.servicio_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicio_tblUpdateManyArgs>(args: SelectSubset<T, servicio_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicio_tbl.
     * @param {servicio_tblUpsertArgs} args - Arguments to update or create a Servicio_tbl.
     * @example
     * // Update or create a Servicio_tbl
     * const servicio_tbl = await prisma.servicio_tbl.upsert({
     *   create: {
     *     // ... data to create a Servicio_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio_tbl we want to update
     *   }
     * })
     */
    upsert<T extends servicio_tblUpsertArgs>(args: SelectSubset<T, servicio_tblUpsertArgs<ExtArgs>>): Prisma__servicio_tblClient<$Result.GetResult<Prisma.$servicio_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Servicio_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_tblCountArgs} args - Arguments to filter Servicio_tbls to count.
     * @example
     * // Count the number of Servicio_tbls
     * const count = await prisma.servicio_tbl.count({
     *   where: {
     *     // ... the filter for the Servicio_tbls we want to count
     *   }
     * })
    **/
    count<T extends servicio_tblCountArgs>(
      args?: Subset<T, servicio_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Servicio_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Servicio_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Servicio_tblAggregateArgs>(args: Subset<T, Servicio_tblAggregateArgs>): Prisma.PrismaPromise<GetServicio_tblAggregateType<T>>

    /**
     * Group by Servicio_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicio_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicio_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicio_tblGroupByArgs['orderBy'] }
        : { orderBy?: servicio_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicio_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicio_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicio_tbl model
   */
  readonly fields: servicio_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicio_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicio_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio_habitacion<T extends servicio_tbl$servicio_habitacionArgs<ExtArgs> = {}>(args?: Subset<T, servicio_tbl$servicio_habitacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicio_habitacionPayload<ExtArgs>, T, "findMany"> | Null>
    tipo_servicio_tbl<T extends tipo_servicio_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_servicio_tblDefaultArgs<ExtArgs>>): Prisma__tipo_servicio_tblClient<$Result.GetResult<Prisma.$tipo_servicio_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the servicio_tbl model
   */ 
  interface servicio_tblFieldRefs {
    readonly id_servicio: FieldRef<"servicio_tbl", 'Int'>
    readonly nom_servicio: FieldRef<"servicio_tbl", 'String'>
    readonly des_servicio: FieldRef<"servicio_tbl", 'String'>
    readonly pre_servicio: FieldRef<"servicio_tbl", 'Float'>
    readonly ind_hab_servicio: FieldRef<"servicio_tbl", 'Int'>
    readonly can_per_servicio: FieldRef<"servicio_tbl", 'Int'>
    readonly id_tipo_servicio: FieldRef<"servicio_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * servicio_tbl findUnique
   */
  export type servicio_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which servicio_tbl to fetch.
     */
    where: servicio_tblWhereUniqueInput
  }

  /**
   * servicio_tbl findUniqueOrThrow
   */
  export type servicio_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which servicio_tbl to fetch.
     */
    where: servicio_tblWhereUniqueInput
  }

  /**
   * servicio_tbl findFirst
   */
  export type servicio_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which servicio_tbl to fetch.
     */
    where?: servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_tbls to fetch.
     */
    orderBy?: servicio_tblOrderByWithRelationInput | servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicio_tbls.
     */
    cursor?: servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicio_tbls.
     */
    distinct?: Servicio_tblScalarFieldEnum | Servicio_tblScalarFieldEnum[]
  }

  /**
   * servicio_tbl findFirstOrThrow
   */
  export type servicio_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which servicio_tbl to fetch.
     */
    where?: servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_tbls to fetch.
     */
    orderBy?: servicio_tblOrderByWithRelationInput | servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicio_tbls.
     */
    cursor?: servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicio_tbls.
     */
    distinct?: Servicio_tblScalarFieldEnum | Servicio_tblScalarFieldEnum[]
  }

  /**
   * servicio_tbl findMany
   */
  export type servicio_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * Filter, which servicio_tbls to fetch.
     */
    where?: servicio_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicio_tbls to fetch.
     */
    orderBy?: servicio_tblOrderByWithRelationInput | servicio_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicio_tbls.
     */
    cursor?: servicio_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicio_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicio_tbls.
     */
    skip?: number
    distinct?: Servicio_tblScalarFieldEnum | Servicio_tblScalarFieldEnum[]
  }

  /**
   * servicio_tbl create
   */
  export type servicio_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a servicio_tbl.
     */
    data: XOR<servicio_tblCreateInput, servicio_tblUncheckedCreateInput>
  }

  /**
   * servicio_tbl createMany
   */
  export type servicio_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicio_tbls.
     */
    data: servicio_tblCreateManyInput | servicio_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicio_tbl update
   */
  export type servicio_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a servicio_tbl.
     */
    data: XOR<servicio_tblUpdateInput, servicio_tblUncheckedUpdateInput>
    /**
     * Choose, which servicio_tbl to update.
     */
    where: servicio_tblWhereUniqueInput
  }

  /**
   * servicio_tbl updateMany
   */
  export type servicio_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicio_tbls.
     */
    data: XOR<servicio_tblUpdateManyMutationInput, servicio_tblUncheckedUpdateManyInput>
    /**
     * Filter which servicio_tbls to update
     */
    where?: servicio_tblWhereInput
  }

  /**
   * servicio_tbl upsert
   */
  export type servicio_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the servicio_tbl to update in case it exists.
     */
    where: servicio_tblWhereUniqueInput
    /**
     * In case the servicio_tbl found by the `where` argument doesn't exist, create a new servicio_tbl with this data.
     */
    create: XOR<servicio_tblCreateInput, servicio_tblUncheckedCreateInput>
    /**
     * In case the servicio_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicio_tblUpdateInput, servicio_tblUncheckedUpdateInput>
  }

  /**
   * servicio_tbl delete
   */
  export type servicio_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
    /**
     * Filter which servicio_tbl to delete.
     */
    where: servicio_tblWhereUniqueInput
  }

  /**
   * servicio_tbl deleteMany
   */
  export type servicio_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicio_tbls to delete
     */
    where?: servicio_tblWhereInput
  }

  /**
   * servicio_tbl.servicio_habitacion
   */
  export type servicio_tbl$servicio_habitacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_habitacion
     */
    select?: servicio_habitacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_habitacionInclude<ExtArgs> | null
    where?: servicio_habitacionWhereInput
    orderBy?: servicio_habitacionOrderByWithRelationInput | servicio_habitacionOrderByWithRelationInput[]
    cursor?: servicio_habitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Servicio_habitacionScalarFieldEnum | Servicio_habitacionScalarFieldEnum[]
  }

  /**
   * servicio_tbl without action
   */
  export type servicio_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicio_tbl
     */
    select?: servicio_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicio_tblInclude<ExtArgs> | null
  }


  /**
   * Model tipo_alojamiento_tbl
   */

  export type AggregateTipo_alojamiento_tbl = {
    _count: Tipo_alojamiento_tblCountAggregateOutputType | null
    _avg: Tipo_alojamiento_tblAvgAggregateOutputType | null
    _sum: Tipo_alojamiento_tblSumAggregateOutputType | null
    _min: Tipo_alojamiento_tblMinAggregateOutputType | null
    _max: Tipo_alojamiento_tblMaxAggregateOutputType | null
  }

  export type Tipo_alojamiento_tblAvgAggregateOutputType = {
    id_tipo_alojamiento: number | null
  }

  export type Tipo_alojamiento_tblSumAggregateOutputType = {
    id_tipo_alojamiento: number | null
  }

  export type Tipo_alojamiento_tblMinAggregateOutputType = {
    id_tipo_alojamiento: number | null
    nom_tipo_alojamiento: string | null
    des_tipo_alojamiento: string | null
    ico_tipo_alojamiento: string | null
  }

  export type Tipo_alojamiento_tblMaxAggregateOutputType = {
    id_tipo_alojamiento: number | null
    nom_tipo_alojamiento: string | null
    des_tipo_alojamiento: string | null
    ico_tipo_alojamiento: string | null
  }

  export type Tipo_alojamiento_tblCountAggregateOutputType = {
    id_tipo_alojamiento: number
    nom_tipo_alojamiento: number
    des_tipo_alojamiento: number
    ico_tipo_alojamiento: number
    _all: number
  }


  export type Tipo_alojamiento_tblAvgAggregateInputType = {
    id_tipo_alojamiento?: true
  }

  export type Tipo_alojamiento_tblSumAggregateInputType = {
    id_tipo_alojamiento?: true
  }

  export type Tipo_alojamiento_tblMinAggregateInputType = {
    id_tipo_alojamiento?: true
    nom_tipo_alojamiento?: true
    des_tipo_alojamiento?: true
    ico_tipo_alojamiento?: true
  }

  export type Tipo_alojamiento_tblMaxAggregateInputType = {
    id_tipo_alojamiento?: true
    nom_tipo_alojamiento?: true
    des_tipo_alojamiento?: true
    ico_tipo_alojamiento?: true
  }

  export type Tipo_alojamiento_tblCountAggregateInputType = {
    id_tipo_alojamiento?: true
    nom_tipo_alojamiento?: true
    des_tipo_alojamiento?: true
    ico_tipo_alojamiento?: true
    _all?: true
  }

  export type Tipo_alojamiento_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_alojamiento_tbl to aggregate.
     */
    where?: tipo_alojamiento_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_alojamiento_tbls to fetch.
     */
    orderBy?: tipo_alojamiento_tblOrderByWithRelationInput | tipo_alojamiento_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_alojamiento_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_alojamiento_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_alojamiento_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_alojamiento_tbls
    **/
    _count?: true | Tipo_alojamiento_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_alojamiento_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_alojamiento_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_alojamiento_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_alojamiento_tblMaxAggregateInputType
  }

  export type GetTipo_alojamiento_tblAggregateType<T extends Tipo_alojamiento_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_alojamiento_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_alojamiento_tbl[P]>
      : GetScalarType<T[P], AggregateTipo_alojamiento_tbl[P]>
  }




  export type tipo_alojamiento_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_alojamiento_tblWhereInput
    orderBy?: tipo_alojamiento_tblOrderByWithAggregationInput | tipo_alojamiento_tblOrderByWithAggregationInput[]
    by: Tipo_alojamiento_tblScalarFieldEnum[] | Tipo_alojamiento_tblScalarFieldEnum
    having?: tipo_alojamiento_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_alojamiento_tblCountAggregateInputType | true
    _avg?: Tipo_alojamiento_tblAvgAggregateInputType
    _sum?: Tipo_alojamiento_tblSumAggregateInputType
    _min?: Tipo_alojamiento_tblMinAggregateInputType
    _max?: Tipo_alojamiento_tblMaxAggregateInputType
  }

  export type Tipo_alojamiento_tblGroupByOutputType = {
    id_tipo_alojamiento: number
    nom_tipo_alojamiento: string | null
    des_tipo_alojamiento: string | null
    ico_tipo_alojamiento: string | null
    _count: Tipo_alojamiento_tblCountAggregateOutputType | null
    _avg: Tipo_alojamiento_tblAvgAggregateOutputType | null
    _sum: Tipo_alojamiento_tblSumAggregateOutputType | null
    _min: Tipo_alojamiento_tblMinAggregateOutputType | null
    _max: Tipo_alojamiento_tblMaxAggregateOutputType | null
  }

  type GetTipo_alojamiento_tblGroupByPayload<T extends tipo_alojamiento_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_alojamiento_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_alojamiento_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_alojamiento_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_alojamiento_tblGroupByOutputType[P]>
        }
      >
    >


  export type tipo_alojamiento_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo_alojamiento?: boolean
    nom_tipo_alojamiento?: boolean
    des_tipo_alojamiento?: boolean
    ico_tipo_alojamiento?: boolean
    habitacion_tbl?: boolean | tipo_alojamiento_tbl$habitacion_tblArgs<ExtArgs>
    _count?: boolean | Tipo_alojamiento_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_alojamiento_tbl"]>


  export type tipo_alojamiento_tblSelectScalar = {
    id_tipo_alojamiento?: boolean
    nom_tipo_alojamiento?: boolean
    des_tipo_alojamiento?: boolean
    ico_tipo_alojamiento?: boolean
  }

  export type tipo_alojamiento_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion_tbl?: boolean | tipo_alojamiento_tbl$habitacion_tblArgs<ExtArgs>
    _count?: boolean | Tipo_alojamiento_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipo_alojamiento_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_alojamiento_tbl"
    objects: {
      habitacion_tbl: Prisma.$habitacion_tblPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo_alojamiento: number
      nom_tipo_alojamiento: string | null
      des_tipo_alojamiento: string | null
      ico_tipo_alojamiento: string | null
    }, ExtArgs["result"]["tipo_alojamiento_tbl"]>
    composites: {}
  }

  type tipo_alojamiento_tblGetPayload<S extends boolean | null | undefined | tipo_alojamiento_tblDefaultArgs> = $Result.GetResult<Prisma.$tipo_alojamiento_tblPayload, S>

  type tipo_alojamiento_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tipo_alojamiento_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tipo_alojamiento_tblCountAggregateInputType | true
    }

  export interface tipo_alojamiento_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_alojamiento_tbl'], meta: { name: 'tipo_alojamiento_tbl' } }
    /**
     * Find zero or one Tipo_alojamiento_tbl that matches the filter.
     * @param {tipo_alojamiento_tblFindUniqueArgs} args - Arguments to find a Tipo_alojamiento_tbl
     * @example
     * // Get one Tipo_alojamiento_tbl
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_alojamiento_tblFindUniqueArgs>(args: SelectSubset<T, tipo_alojamiento_tblFindUniqueArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tipo_alojamiento_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tipo_alojamiento_tblFindUniqueOrThrowArgs} args - Arguments to find a Tipo_alojamiento_tbl
     * @example
     * // Get one Tipo_alojamiento_tbl
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_alojamiento_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_alojamiento_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tipo_alojamiento_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_alojamiento_tblFindFirstArgs} args - Arguments to find a Tipo_alojamiento_tbl
     * @example
     * // Get one Tipo_alojamiento_tbl
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_alojamiento_tblFindFirstArgs>(args?: SelectSubset<T, tipo_alojamiento_tblFindFirstArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tipo_alojamiento_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_alojamiento_tblFindFirstOrThrowArgs} args - Arguments to find a Tipo_alojamiento_tbl
     * @example
     * // Get one Tipo_alojamiento_tbl
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_alojamiento_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_alojamiento_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tipo_alojamiento_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_alojamiento_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_alojamiento_tbls
     * const tipo_alojamiento_tbls = await prisma.tipo_alojamiento_tbl.findMany()
     * 
     * // Get first 10 Tipo_alojamiento_tbls
     * const tipo_alojamiento_tbls = await prisma.tipo_alojamiento_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo_alojamiento`
     * const tipo_alojamiento_tblWithId_tipo_alojamientoOnly = await prisma.tipo_alojamiento_tbl.findMany({ select: { id_tipo_alojamiento: true } })
     * 
     */
    findMany<T extends tipo_alojamiento_tblFindManyArgs>(args?: SelectSubset<T, tipo_alojamiento_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tipo_alojamiento_tbl.
     * @param {tipo_alojamiento_tblCreateArgs} args - Arguments to create a Tipo_alojamiento_tbl.
     * @example
     * // Create one Tipo_alojamiento_tbl
     * const Tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.create({
     *   data: {
     *     // ... data to create a Tipo_alojamiento_tbl
     *   }
     * })
     * 
     */
    create<T extends tipo_alojamiento_tblCreateArgs>(args: SelectSubset<T, tipo_alojamiento_tblCreateArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tipo_alojamiento_tbls.
     * @param {tipo_alojamiento_tblCreateManyArgs} args - Arguments to create many Tipo_alojamiento_tbls.
     * @example
     * // Create many Tipo_alojamiento_tbls
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_alojamiento_tblCreateManyArgs>(args?: SelectSubset<T, tipo_alojamiento_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipo_alojamiento_tbl.
     * @param {tipo_alojamiento_tblDeleteArgs} args - Arguments to delete one Tipo_alojamiento_tbl.
     * @example
     * // Delete one Tipo_alojamiento_tbl
     * const Tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.delete({
     *   where: {
     *     // ... filter to delete one Tipo_alojamiento_tbl
     *   }
     * })
     * 
     */
    delete<T extends tipo_alojamiento_tblDeleteArgs>(args: SelectSubset<T, tipo_alojamiento_tblDeleteArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tipo_alojamiento_tbl.
     * @param {tipo_alojamiento_tblUpdateArgs} args - Arguments to update one Tipo_alojamiento_tbl.
     * @example
     * // Update one Tipo_alojamiento_tbl
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_alojamiento_tblUpdateArgs>(args: SelectSubset<T, tipo_alojamiento_tblUpdateArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tipo_alojamiento_tbls.
     * @param {tipo_alojamiento_tblDeleteManyArgs} args - Arguments to filter Tipo_alojamiento_tbls to delete.
     * @example
     * // Delete a few Tipo_alojamiento_tbls
     * const { count } = await prisma.tipo_alojamiento_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_alojamiento_tblDeleteManyArgs>(args?: SelectSubset<T, tipo_alojamiento_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_alojamiento_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_alojamiento_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_alojamiento_tbls
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_alojamiento_tblUpdateManyArgs>(args: SelectSubset<T, tipo_alojamiento_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipo_alojamiento_tbl.
     * @param {tipo_alojamiento_tblUpsertArgs} args - Arguments to update or create a Tipo_alojamiento_tbl.
     * @example
     * // Update or create a Tipo_alojamiento_tbl
     * const tipo_alojamiento_tbl = await prisma.tipo_alojamiento_tbl.upsert({
     *   create: {
     *     // ... data to create a Tipo_alojamiento_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_alojamiento_tbl we want to update
     *   }
     * })
     */
    upsert<T extends tipo_alojamiento_tblUpsertArgs>(args: SelectSubset<T, tipo_alojamiento_tblUpsertArgs<ExtArgs>>): Prisma__tipo_alojamiento_tblClient<$Result.GetResult<Prisma.$tipo_alojamiento_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tipo_alojamiento_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_alojamiento_tblCountArgs} args - Arguments to filter Tipo_alojamiento_tbls to count.
     * @example
     * // Count the number of Tipo_alojamiento_tbls
     * const count = await prisma.tipo_alojamiento_tbl.count({
     *   where: {
     *     // ... the filter for the Tipo_alojamiento_tbls we want to count
     *   }
     * })
    **/
    count<T extends tipo_alojamiento_tblCountArgs>(
      args?: Subset<T, tipo_alojamiento_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_alojamiento_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_alojamiento_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_alojamiento_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipo_alojamiento_tblAggregateArgs>(args: Subset<T, Tipo_alojamiento_tblAggregateArgs>): Prisma.PrismaPromise<GetTipo_alojamiento_tblAggregateType<T>>

    /**
     * Group by Tipo_alojamiento_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_alojamiento_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipo_alojamiento_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_alojamiento_tblGroupByArgs['orderBy'] }
        : { orderBy?: tipo_alojamiento_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipo_alojamiento_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_alojamiento_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_alojamiento_tbl model
   */
  readonly fields: tipo_alojamiento_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_alojamiento_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_alojamiento_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habitacion_tbl<T extends tipo_alojamiento_tbl$habitacion_tblArgs<ExtArgs> = {}>(args?: Subset<T, tipo_alojamiento_tbl$habitacion_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipo_alojamiento_tbl model
   */ 
  interface tipo_alojamiento_tblFieldRefs {
    readonly id_tipo_alojamiento: FieldRef<"tipo_alojamiento_tbl", 'Int'>
    readonly nom_tipo_alojamiento: FieldRef<"tipo_alojamiento_tbl", 'String'>
    readonly des_tipo_alojamiento: FieldRef<"tipo_alojamiento_tbl", 'String'>
    readonly ico_tipo_alojamiento: FieldRef<"tipo_alojamiento_tbl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_alojamiento_tbl findUnique
   */
  export type tipo_alojamiento_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_alojamiento_tbl to fetch.
     */
    where: tipo_alojamiento_tblWhereUniqueInput
  }

  /**
   * tipo_alojamiento_tbl findUniqueOrThrow
   */
  export type tipo_alojamiento_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_alojamiento_tbl to fetch.
     */
    where: tipo_alojamiento_tblWhereUniqueInput
  }

  /**
   * tipo_alojamiento_tbl findFirst
   */
  export type tipo_alojamiento_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_alojamiento_tbl to fetch.
     */
    where?: tipo_alojamiento_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_alojamiento_tbls to fetch.
     */
    orderBy?: tipo_alojamiento_tblOrderByWithRelationInput | tipo_alojamiento_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_alojamiento_tbls.
     */
    cursor?: tipo_alojamiento_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_alojamiento_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_alojamiento_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_alojamiento_tbls.
     */
    distinct?: Tipo_alojamiento_tblScalarFieldEnum | Tipo_alojamiento_tblScalarFieldEnum[]
  }

  /**
   * tipo_alojamiento_tbl findFirstOrThrow
   */
  export type tipo_alojamiento_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_alojamiento_tbl to fetch.
     */
    where?: tipo_alojamiento_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_alojamiento_tbls to fetch.
     */
    orderBy?: tipo_alojamiento_tblOrderByWithRelationInput | tipo_alojamiento_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_alojamiento_tbls.
     */
    cursor?: tipo_alojamiento_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_alojamiento_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_alojamiento_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_alojamiento_tbls.
     */
    distinct?: Tipo_alojamiento_tblScalarFieldEnum | Tipo_alojamiento_tblScalarFieldEnum[]
  }

  /**
   * tipo_alojamiento_tbl findMany
   */
  export type tipo_alojamiento_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * Filter, which tipo_alojamiento_tbls to fetch.
     */
    where?: tipo_alojamiento_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_alojamiento_tbls to fetch.
     */
    orderBy?: tipo_alojamiento_tblOrderByWithRelationInput | tipo_alojamiento_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_alojamiento_tbls.
     */
    cursor?: tipo_alojamiento_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_alojamiento_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_alojamiento_tbls.
     */
    skip?: number
    distinct?: Tipo_alojamiento_tblScalarFieldEnum | Tipo_alojamiento_tblScalarFieldEnum[]
  }

  /**
   * tipo_alojamiento_tbl create
   */
  export type tipo_alojamiento_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_alojamiento_tbl.
     */
    data?: XOR<tipo_alojamiento_tblCreateInput, tipo_alojamiento_tblUncheckedCreateInput>
  }

  /**
   * tipo_alojamiento_tbl createMany
   */
  export type tipo_alojamiento_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_alojamiento_tbls.
     */
    data: tipo_alojamiento_tblCreateManyInput | tipo_alojamiento_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipo_alojamiento_tbl update
   */
  export type tipo_alojamiento_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_alojamiento_tbl.
     */
    data: XOR<tipo_alojamiento_tblUpdateInput, tipo_alojamiento_tblUncheckedUpdateInput>
    /**
     * Choose, which tipo_alojamiento_tbl to update.
     */
    where: tipo_alojamiento_tblWhereUniqueInput
  }

  /**
   * tipo_alojamiento_tbl updateMany
   */
  export type tipo_alojamiento_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_alojamiento_tbls.
     */
    data: XOR<tipo_alojamiento_tblUpdateManyMutationInput, tipo_alojamiento_tblUncheckedUpdateManyInput>
    /**
     * Filter which tipo_alojamiento_tbls to update
     */
    where?: tipo_alojamiento_tblWhereInput
  }

  /**
   * tipo_alojamiento_tbl upsert
   */
  export type tipo_alojamiento_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_alojamiento_tbl to update in case it exists.
     */
    where: tipo_alojamiento_tblWhereUniqueInput
    /**
     * In case the tipo_alojamiento_tbl found by the `where` argument doesn't exist, create a new tipo_alojamiento_tbl with this data.
     */
    create: XOR<tipo_alojamiento_tblCreateInput, tipo_alojamiento_tblUncheckedCreateInput>
    /**
     * In case the tipo_alojamiento_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_alojamiento_tblUpdateInput, tipo_alojamiento_tblUncheckedUpdateInput>
  }

  /**
   * tipo_alojamiento_tbl delete
   */
  export type tipo_alojamiento_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
    /**
     * Filter which tipo_alojamiento_tbl to delete.
     */
    where: tipo_alojamiento_tblWhereUniqueInput
  }

  /**
   * tipo_alojamiento_tbl deleteMany
   */
  export type tipo_alojamiento_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_alojamiento_tbls to delete
     */
    where?: tipo_alojamiento_tblWhereInput
  }

  /**
   * tipo_alojamiento_tbl.habitacion_tbl
   */
  export type tipo_alojamiento_tbl$habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the habitacion_tbl
     */
    select?: habitacion_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: habitacion_tblInclude<ExtArgs> | null
    where?: habitacion_tblWhereInput
    orderBy?: habitacion_tblOrderByWithRelationInput | habitacion_tblOrderByWithRelationInput[]
    cursor?: habitacion_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Habitacion_tblScalarFieldEnum | Habitacion_tblScalarFieldEnum[]
  }

  /**
   * tipo_alojamiento_tbl without action
   */
  export type tipo_alojamiento_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_alojamiento_tbl
     */
    select?: tipo_alojamiento_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_alojamiento_tblInclude<ExtArgs> | null
  }


  /**
   * Model usuario_tbl
   */

  export type AggregateUsuario_tbl = {
    _count: Usuario_tblCountAggregateOutputType | null
    _avg: Usuario_tblAvgAggregateOutputType | null
    _sum: Usuario_tblSumAggregateOutputType | null
    _min: Usuario_tblMinAggregateOutputType | null
    _max: Usuario_tblMaxAggregateOutputType | null
  }

  export type Usuario_tblAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type Usuario_tblSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type Usuario_tblMinAggregateOutputType = {
    id_usuario: number | null
    nom_usuario: string | null
    fec_nac_usuario: Date | null
    tel_usuario: string | null
    ema_usuario: string | null
    dir_usuario: string | null
    tip_doc_usuario: string | null
    num_doc_usuario: string | null
    con_usuario: string | null
  }

  export type Usuario_tblMaxAggregateOutputType = {
    id_usuario: number | null
    nom_usuario: string | null
    fec_nac_usuario: Date | null
    tel_usuario: string | null
    ema_usuario: string | null
    dir_usuario: string | null
    tip_doc_usuario: string | null
    num_doc_usuario: string | null
    con_usuario: string | null
  }

  export type Usuario_tblCountAggregateOutputType = {
    id_usuario: number
    nom_usuario: number
    fec_nac_usuario: number
    tel_usuario: number
    ema_usuario: number
    dir_usuario: number
    tip_doc_usuario: number
    num_doc_usuario: number
    con_usuario: number
    _all: number
  }


  export type Usuario_tblAvgAggregateInputType = {
    id_usuario?: true
  }

  export type Usuario_tblSumAggregateInputType = {
    id_usuario?: true
  }

  export type Usuario_tblMinAggregateInputType = {
    id_usuario?: true
    nom_usuario?: true
    fec_nac_usuario?: true
    tel_usuario?: true
    ema_usuario?: true
    dir_usuario?: true
    tip_doc_usuario?: true
    num_doc_usuario?: true
    con_usuario?: true
  }

  export type Usuario_tblMaxAggregateInputType = {
    id_usuario?: true
    nom_usuario?: true
    fec_nac_usuario?: true
    tel_usuario?: true
    ema_usuario?: true
    dir_usuario?: true
    tip_doc_usuario?: true
    num_doc_usuario?: true
    con_usuario?: true
  }

  export type Usuario_tblCountAggregateInputType = {
    id_usuario?: true
    nom_usuario?: true
    fec_nac_usuario?: true
    tel_usuario?: true
    ema_usuario?: true
    dir_usuario?: true
    tip_doc_usuario?: true
    num_doc_usuario?: true
    con_usuario?: true
    _all?: true
  }

  export type Usuario_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_tbl to aggregate.
     */
    where?: usuario_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_tbls to fetch.
     */
    orderBy?: usuario_tblOrderByWithRelationInput | usuario_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_tbls
    **/
    _count?: true | Usuario_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_tblMaxAggregateInputType
  }

  export type GetUsuario_tblAggregateType<T extends Usuario_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_tbl[P]>
      : GetScalarType<T[P], AggregateUsuario_tbl[P]>
  }




  export type usuario_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_tblWhereInput
    orderBy?: usuario_tblOrderByWithAggregationInput | usuario_tblOrderByWithAggregationInput[]
    by: Usuario_tblScalarFieldEnum[] | Usuario_tblScalarFieldEnum
    having?: usuario_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_tblCountAggregateInputType | true
    _avg?: Usuario_tblAvgAggregateInputType
    _sum?: Usuario_tblSumAggregateInputType
    _min?: Usuario_tblMinAggregateInputType
    _max?: Usuario_tblMaxAggregateInputType
  }

  export type Usuario_tblGroupByOutputType = {
    id_usuario: number
    nom_usuario: string
    fec_nac_usuario: Date
    tel_usuario: string
    ema_usuario: string
    dir_usuario: string | null
    tip_doc_usuario: string
    num_doc_usuario: string
    con_usuario: string
    _count: Usuario_tblCountAggregateOutputType | null
    _avg: Usuario_tblAvgAggregateOutputType | null
    _sum: Usuario_tblSumAggregateOutputType | null
    _min: Usuario_tblMinAggregateOutputType | null
    _max: Usuario_tblMaxAggregateOutputType | null
  }

  type GetUsuario_tblGroupByPayload<T extends usuario_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_tblGroupByOutputType[P]>
        }
      >
    >


  export type usuario_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nom_usuario?: boolean
    fec_nac_usuario?: boolean
    tel_usuario?: boolean
    ema_usuario?: boolean
    dir_usuario?: boolean
    tip_doc_usuario?: boolean
    num_doc_usuario?: boolean
    con_usuario?: boolean
    reserva_tbl?: boolean | usuario_tbl$reserva_tblArgs<ExtArgs>
    _count?: boolean | Usuario_tblCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_tbl"]>


  export type usuario_tblSelectScalar = {
    id_usuario?: boolean
    nom_usuario?: boolean
    fec_nac_usuario?: boolean
    tel_usuario?: boolean
    ema_usuario?: boolean
    dir_usuario?: boolean
    tip_doc_usuario?: boolean
    num_doc_usuario?: boolean
    con_usuario?: boolean
  }

  export type usuario_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_tbl?: boolean | usuario_tbl$reserva_tblArgs<ExtArgs>
    _count?: boolean | Usuario_tblCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuario_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_tbl"
    objects: {
      reserva_tbl: Prisma.$reserva_tblPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nom_usuario: string
      fec_nac_usuario: Date
      tel_usuario: string
      ema_usuario: string
      dir_usuario: string | null
      tip_doc_usuario: string
      num_doc_usuario: string
      con_usuario: string
    }, ExtArgs["result"]["usuario_tbl"]>
    composites: {}
  }

  type usuario_tblGetPayload<S extends boolean | null | undefined | usuario_tblDefaultArgs> = $Result.GetResult<Prisma.$usuario_tblPayload, S>

  type usuario_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuario_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Usuario_tblCountAggregateInputType | true
    }

  export interface usuario_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_tbl'], meta: { name: 'usuario_tbl' } }
    /**
     * Find zero or one Usuario_tbl that matches the filter.
     * @param {usuario_tblFindUniqueArgs} args - Arguments to find a Usuario_tbl
     * @example
     * // Get one Usuario_tbl
     * const usuario_tbl = await prisma.usuario_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_tblFindUniqueArgs>(args: SelectSubset<T, usuario_tblFindUniqueArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuario_tblFindUniqueOrThrowArgs} args - Arguments to find a Usuario_tbl
     * @example
     * // Get one Usuario_tbl
     * const usuario_tbl = await prisma.usuario_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_tblFindFirstArgs} args - Arguments to find a Usuario_tbl
     * @example
     * // Get one Usuario_tbl
     * const usuario_tbl = await prisma.usuario_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_tblFindFirstArgs>(args?: SelectSubset<T, usuario_tblFindFirstArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_tblFindFirstOrThrowArgs} args - Arguments to find a Usuario_tbl
     * @example
     * // Get one Usuario_tbl
     * const usuario_tbl = await prisma.usuario_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuario_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_tbls
     * const usuario_tbls = await prisma.usuario_tbl.findMany()
     * 
     * // Get first 10 Usuario_tbls
     * const usuario_tbls = await prisma.usuario_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuario_tblWithId_usuarioOnly = await prisma.usuario_tbl.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuario_tblFindManyArgs>(args?: SelectSubset<T, usuario_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario_tbl.
     * @param {usuario_tblCreateArgs} args - Arguments to create a Usuario_tbl.
     * @example
     * // Create one Usuario_tbl
     * const Usuario_tbl = await prisma.usuario_tbl.create({
     *   data: {
     *     // ... data to create a Usuario_tbl
     *   }
     * })
     * 
     */
    create<T extends usuario_tblCreateArgs>(args: SelectSubset<T, usuario_tblCreateArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuario_tbls.
     * @param {usuario_tblCreateManyArgs} args - Arguments to create many Usuario_tbls.
     * @example
     * // Create many Usuario_tbls
     * const usuario_tbl = await prisma.usuario_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_tblCreateManyArgs>(args?: SelectSubset<T, usuario_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario_tbl.
     * @param {usuario_tblDeleteArgs} args - Arguments to delete one Usuario_tbl.
     * @example
     * // Delete one Usuario_tbl
     * const Usuario_tbl = await prisma.usuario_tbl.delete({
     *   where: {
     *     // ... filter to delete one Usuario_tbl
     *   }
     * })
     * 
     */
    delete<T extends usuario_tblDeleteArgs>(args: SelectSubset<T, usuario_tblDeleteArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario_tbl.
     * @param {usuario_tblUpdateArgs} args - Arguments to update one Usuario_tbl.
     * @example
     * // Update one Usuario_tbl
     * const usuario_tbl = await prisma.usuario_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_tblUpdateArgs>(args: SelectSubset<T, usuario_tblUpdateArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuario_tbls.
     * @param {usuario_tblDeleteManyArgs} args - Arguments to filter Usuario_tbls to delete.
     * @example
     * // Delete a few Usuario_tbls
     * const { count } = await prisma.usuario_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_tblDeleteManyArgs>(args?: SelectSubset<T, usuario_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_tbls
     * const usuario_tbl = await prisma.usuario_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_tblUpdateManyArgs>(args: SelectSubset<T, usuario_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario_tbl.
     * @param {usuario_tblUpsertArgs} args - Arguments to update or create a Usuario_tbl.
     * @example
     * // Update or create a Usuario_tbl
     * const usuario_tbl = await prisma.usuario_tbl.upsert({
     *   create: {
     *     // ... data to create a Usuario_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_tbl we want to update
     *   }
     * })
     */
    upsert<T extends usuario_tblUpsertArgs>(args: SelectSubset<T, usuario_tblUpsertArgs<ExtArgs>>): Prisma__usuario_tblClient<$Result.GetResult<Prisma.$usuario_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuario_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_tblCountArgs} args - Arguments to filter Usuario_tbls to count.
     * @example
     * // Count the number of Usuario_tbls
     * const count = await prisma.usuario_tbl.count({
     *   where: {
     *     // ... the filter for the Usuario_tbls we want to count
     *   }
     * })
    **/
    count<T extends usuario_tblCountArgs>(
      args?: Subset<T, usuario_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usuario_tblAggregateArgs>(args: Subset<T, Usuario_tblAggregateArgs>): Prisma.PrismaPromise<GetUsuario_tblAggregateType<T>>

    /**
     * Group by Usuario_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuario_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_tblGroupByArgs['orderBy'] }
        : { orderBy?: usuario_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuario_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_tbl model
   */
  readonly fields: usuario_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva_tbl<T extends usuario_tbl$reserva_tblArgs<ExtArgs> = {}>(args?: Subset<T, usuario_tbl$reserva_tblArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_tblPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario_tbl model
   */ 
  interface usuario_tblFieldRefs {
    readonly id_usuario: FieldRef<"usuario_tbl", 'Int'>
    readonly nom_usuario: FieldRef<"usuario_tbl", 'String'>
    readonly fec_nac_usuario: FieldRef<"usuario_tbl", 'DateTime'>
    readonly tel_usuario: FieldRef<"usuario_tbl", 'String'>
    readonly ema_usuario: FieldRef<"usuario_tbl", 'String'>
    readonly dir_usuario: FieldRef<"usuario_tbl", 'String'>
    readonly tip_doc_usuario: FieldRef<"usuario_tbl", 'String'>
    readonly num_doc_usuario: FieldRef<"usuario_tbl", 'String'>
    readonly con_usuario: FieldRef<"usuario_tbl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario_tbl findUnique
   */
  export type usuario_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * Filter, which usuario_tbl to fetch.
     */
    where: usuario_tblWhereUniqueInput
  }

  /**
   * usuario_tbl findUniqueOrThrow
   */
  export type usuario_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * Filter, which usuario_tbl to fetch.
     */
    where: usuario_tblWhereUniqueInput
  }

  /**
   * usuario_tbl findFirst
   */
  export type usuario_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * Filter, which usuario_tbl to fetch.
     */
    where?: usuario_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_tbls to fetch.
     */
    orderBy?: usuario_tblOrderByWithRelationInput | usuario_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_tbls.
     */
    cursor?: usuario_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_tbls.
     */
    distinct?: Usuario_tblScalarFieldEnum | Usuario_tblScalarFieldEnum[]
  }

  /**
   * usuario_tbl findFirstOrThrow
   */
  export type usuario_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * Filter, which usuario_tbl to fetch.
     */
    where?: usuario_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_tbls to fetch.
     */
    orderBy?: usuario_tblOrderByWithRelationInput | usuario_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_tbls.
     */
    cursor?: usuario_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_tbls.
     */
    distinct?: Usuario_tblScalarFieldEnum | Usuario_tblScalarFieldEnum[]
  }

  /**
   * usuario_tbl findMany
   */
  export type usuario_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * Filter, which usuario_tbls to fetch.
     */
    where?: usuario_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_tbls to fetch.
     */
    orderBy?: usuario_tblOrderByWithRelationInput | usuario_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_tbls.
     */
    cursor?: usuario_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_tbls.
     */
    skip?: number
    distinct?: Usuario_tblScalarFieldEnum | Usuario_tblScalarFieldEnum[]
  }

  /**
   * usuario_tbl create
   */
  export type usuario_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_tbl.
     */
    data: XOR<usuario_tblCreateInput, usuario_tblUncheckedCreateInput>
  }

  /**
   * usuario_tbl createMany
   */
  export type usuario_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_tbls.
     */
    data: usuario_tblCreateManyInput | usuario_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario_tbl update
   */
  export type usuario_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_tbl.
     */
    data: XOR<usuario_tblUpdateInput, usuario_tblUncheckedUpdateInput>
    /**
     * Choose, which usuario_tbl to update.
     */
    where: usuario_tblWhereUniqueInput
  }

  /**
   * usuario_tbl updateMany
   */
  export type usuario_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_tbls.
     */
    data: XOR<usuario_tblUpdateManyMutationInput, usuario_tblUncheckedUpdateManyInput>
    /**
     * Filter which usuario_tbls to update
     */
    where?: usuario_tblWhereInput
  }

  /**
   * usuario_tbl upsert
   */
  export type usuario_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_tbl to update in case it exists.
     */
    where: usuario_tblWhereUniqueInput
    /**
     * In case the usuario_tbl found by the `where` argument doesn't exist, create a new usuario_tbl with this data.
     */
    create: XOR<usuario_tblCreateInput, usuario_tblUncheckedCreateInput>
    /**
     * In case the usuario_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_tblUpdateInput, usuario_tblUncheckedUpdateInput>
  }

  /**
   * usuario_tbl delete
   */
  export type usuario_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
    /**
     * Filter which usuario_tbl to delete.
     */
    where: usuario_tblWhereUniqueInput
  }

  /**
   * usuario_tbl deleteMany
   */
  export type usuario_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_tbls to delete
     */
    where?: usuario_tblWhereInput
  }

  /**
   * usuario_tbl.reserva_tbl
   */
  export type usuario_tbl$reserva_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_tbl
     */
    select?: reserva_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_tblInclude<ExtArgs> | null
    where?: reserva_tblWhereInput
    orderBy?: reserva_tblOrderByWithRelationInput | reserva_tblOrderByWithRelationInput[]
    cursor?: reserva_tblWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_tblScalarFieldEnum | Reserva_tblScalarFieldEnum[]
  }

  /**
   * usuario_tbl without action
   */
  export type usuario_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_tbl
     */
    select?: usuario_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_tblInclude<ExtArgs> | null
  }


  /**
   * Model images_tbl
   */

  export type AggregateImages_tbl = {
    _count: Images_tblCountAggregateOutputType | null
    _avg: Images_tblAvgAggregateOutputType | null
    _sum: Images_tblSumAggregateOutputType | null
    _min: Images_tblMinAggregateOutputType | null
    _max: Images_tblMaxAggregateOutputType | null
  }

  export type Images_tblAvgAggregateOutputType = {
    id_image: number | null
    ind_pri_image: number | null
    id_habitacion: number | null
  }

  export type Images_tblSumAggregateOutputType = {
    id_image: number | null
    ind_pri_image: number | null
    id_habitacion: number | null
  }

  export type Images_tblMinAggregateOutputType = {
    id_image: number | null
    url_image: string | null
    ind_pri_image: number | null
    id_habitacion: number | null
  }

  export type Images_tblMaxAggregateOutputType = {
    id_image: number | null
    url_image: string | null
    ind_pri_image: number | null
    id_habitacion: number | null
  }

  export type Images_tblCountAggregateOutputType = {
    id_image: number
    url_image: number
    ind_pri_image: number
    id_habitacion: number
    _all: number
  }


  export type Images_tblAvgAggregateInputType = {
    id_image?: true
    ind_pri_image?: true
    id_habitacion?: true
  }

  export type Images_tblSumAggregateInputType = {
    id_image?: true
    ind_pri_image?: true
    id_habitacion?: true
  }

  export type Images_tblMinAggregateInputType = {
    id_image?: true
    url_image?: true
    ind_pri_image?: true
    id_habitacion?: true
  }

  export type Images_tblMaxAggregateInputType = {
    id_image?: true
    url_image?: true
    ind_pri_image?: true
    id_habitacion?: true
  }

  export type Images_tblCountAggregateInputType = {
    id_image?: true
    url_image?: true
    ind_pri_image?: true
    id_habitacion?: true
    _all?: true
  }

  export type Images_tblAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images_tbl to aggregate.
     */
    where?: images_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tbls to fetch.
     */
    orderBy?: images_tblOrderByWithRelationInput | images_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: images_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images_tbls
    **/
    _count?: true | Images_tblCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Images_tblAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Images_tblSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Images_tblMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Images_tblMaxAggregateInputType
  }

  export type GetImages_tblAggregateType<T extends Images_tblAggregateArgs> = {
        [P in keyof T & keyof AggregateImages_tbl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages_tbl[P]>
      : GetScalarType<T[P], AggregateImages_tbl[P]>
  }




  export type images_tblGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: images_tblWhereInput
    orderBy?: images_tblOrderByWithAggregationInput | images_tblOrderByWithAggregationInput[]
    by: Images_tblScalarFieldEnum[] | Images_tblScalarFieldEnum
    having?: images_tblScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Images_tblCountAggregateInputType | true
    _avg?: Images_tblAvgAggregateInputType
    _sum?: Images_tblSumAggregateInputType
    _min?: Images_tblMinAggregateInputType
    _max?: Images_tblMaxAggregateInputType
  }

  export type Images_tblGroupByOutputType = {
    id_image: number
    url_image: string
    ind_pri_image: number | null
    id_habitacion: number
    _count: Images_tblCountAggregateOutputType | null
    _avg: Images_tblAvgAggregateOutputType | null
    _sum: Images_tblSumAggregateOutputType | null
    _min: Images_tblMinAggregateOutputType | null
    _max: Images_tblMaxAggregateOutputType | null
  }

  type GetImages_tblGroupByPayload<T extends images_tblGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Images_tblGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Images_tblGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Images_tblGroupByOutputType[P]>
            : GetScalarType<T[P], Images_tblGroupByOutputType[P]>
        }
      >
    >


  export type images_tblSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_image?: boolean
    url_image?: boolean
    ind_pri_image?: boolean
    id_habitacion?: boolean
    habitacion_tbl?: boolean | habitacion_tblDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images_tbl"]>


  export type images_tblSelectScalar = {
    id_image?: boolean
    url_image?: boolean
    ind_pri_image?: boolean
    id_habitacion?: boolean
  }

  export type images_tblInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion_tbl?: boolean | habitacion_tblDefaultArgs<ExtArgs>
  }

  export type $images_tblPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images_tbl"
    objects: {
      habitacion_tbl: Prisma.$habitacion_tblPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_image: number
      url_image: string
      ind_pri_image: number | null
      id_habitacion: number
    }, ExtArgs["result"]["images_tbl"]>
    composites: {}
  }

  type images_tblGetPayload<S extends boolean | null | undefined | images_tblDefaultArgs> = $Result.GetResult<Prisma.$images_tblPayload, S>

  type images_tblCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<images_tblFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Images_tblCountAggregateInputType | true
    }

  export interface images_tblDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images_tbl'], meta: { name: 'images_tbl' } }
    /**
     * Find zero or one Images_tbl that matches the filter.
     * @param {images_tblFindUniqueArgs} args - Arguments to find a Images_tbl
     * @example
     * // Get one Images_tbl
     * const images_tbl = await prisma.images_tbl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends images_tblFindUniqueArgs>(args: SelectSubset<T, images_tblFindUniqueArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Images_tbl that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {images_tblFindUniqueOrThrowArgs} args - Arguments to find a Images_tbl
     * @example
     * // Get one Images_tbl
     * const images_tbl = await prisma.images_tbl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends images_tblFindUniqueOrThrowArgs>(args: SelectSubset<T, images_tblFindUniqueOrThrowArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Images_tbl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tblFindFirstArgs} args - Arguments to find a Images_tbl
     * @example
     * // Get one Images_tbl
     * const images_tbl = await prisma.images_tbl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends images_tblFindFirstArgs>(args?: SelectSubset<T, images_tblFindFirstArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Images_tbl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tblFindFirstOrThrowArgs} args - Arguments to find a Images_tbl
     * @example
     * // Get one Images_tbl
     * const images_tbl = await prisma.images_tbl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends images_tblFindFirstOrThrowArgs>(args?: SelectSubset<T, images_tblFindFirstOrThrowArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Images_tbls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tblFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images_tbls
     * const images_tbls = await prisma.images_tbl.findMany()
     * 
     * // Get first 10 Images_tbls
     * const images_tbls = await prisma.images_tbl.findMany({ take: 10 })
     * 
     * // Only select the `id_image`
     * const images_tblWithId_imageOnly = await prisma.images_tbl.findMany({ select: { id_image: true } })
     * 
     */
    findMany<T extends images_tblFindManyArgs>(args?: SelectSubset<T, images_tblFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Images_tbl.
     * @param {images_tblCreateArgs} args - Arguments to create a Images_tbl.
     * @example
     * // Create one Images_tbl
     * const Images_tbl = await prisma.images_tbl.create({
     *   data: {
     *     // ... data to create a Images_tbl
     *   }
     * })
     * 
     */
    create<T extends images_tblCreateArgs>(args: SelectSubset<T, images_tblCreateArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Images_tbls.
     * @param {images_tblCreateManyArgs} args - Arguments to create many Images_tbls.
     * @example
     * // Create many Images_tbls
     * const images_tbl = await prisma.images_tbl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends images_tblCreateManyArgs>(args?: SelectSubset<T, images_tblCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images_tbl.
     * @param {images_tblDeleteArgs} args - Arguments to delete one Images_tbl.
     * @example
     * // Delete one Images_tbl
     * const Images_tbl = await prisma.images_tbl.delete({
     *   where: {
     *     // ... filter to delete one Images_tbl
     *   }
     * })
     * 
     */
    delete<T extends images_tblDeleteArgs>(args: SelectSubset<T, images_tblDeleteArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Images_tbl.
     * @param {images_tblUpdateArgs} args - Arguments to update one Images_tbl.
     * @example
     * // Update one Images_tbl
     * const images_tbl = await prisma.images_tbl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends images_tblUpdateArgs>(args: SelectSubset<T, images_tblUpdateArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Images_tbls.
     * @param {images_tblDeleteManyArgs} args - Arguments to filter Images_tbls to delete.
     * @example
     * // Delete a few Images_tbls
     * const { count } = await prisma.images_tbl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends images_tblDeleteManyArgs>(args?: SelectSubset<T, images_tblDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tblUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images_tbls
     * const images_tbl = await prisma.images_tbl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends images_tblUpdateManyArgs>(args: SelectSubset<T, images_tblUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images_tbl.
     * @param {images_tblUpsertArgs} args - Arguments to update or create a Images_tbl.
     * @example
     * // Update or create a Images_tbl
     * const images_tbl = await prisma.images_tbl.upsert({
     *   create: {
     *     // ... data to create a Images_tbl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images_tbl we want to update
     *   }
     * })
     */
    upsert<T extends images_tblUpsertArgs>(args: SelectSubset<T, images_tblUpsertArgs<ExtArgs>>): Prisma__images_tblClient<$Result.GetResult<Prisma.$images_tblPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Images_tbls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tblCountArgs} args - Arguments to filter Images_tbls to count.
     * @example
     * // Count the number of Images_tbls
     * const count = await prisma.images_tbl.count({
     *   where: {
     *     // ... the filter for the Images_tbls we want to count
     *   }
     * })
    **/
    count<T extends images_tblCountArgs>(
      args?: Subset<T, images_tblCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Images_tblCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Images_tblAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Images_tblAggregateArgs>(args: Subset<T, Images_tblAggregateArgs>): Prisma.PrismaPromise<GetImages_tblAggregateType<T>>

    /**
     * Group by Images_tbl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {images_tblGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends images_tblGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: images_tblGroupByArgs['orderBy'] }
        : { orderBy?: images_tblGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, images_tblGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImages_tblGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images_tbl model
   */
  readonly fields: images_tblFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images_tbl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__images_tblClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habitacion_tbl<T extends habitacion_tblDefaultArgs<ExtArgs> = {}>(args?: Subset<T, habitacion_tblDefaultArgs<ExtArgs>>): Prisma__habitacion_tblClient<$Result.GetResult<Prisma.$habitacion_tblPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the images_tbl model
   */ 
  interface images_tblFieldRefs {
    readonly id_image: FieldRef<"images_tbl", 'Int'>
    readonly url_image: FieldRef<"images_tbl", 'String'>
    readonly ind_pri_image: FieldRef<"images_tbl", 'Int'>
    readonly id_habitacion: FieldRef<"images_tbl", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * images_tbl findUnique
   */
  export type images_tblFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * Filter, which images_tbl to fetch.
     */
    where: images_tblWhereUniqueInput
  }

  /**
   * images_tbl findUniqueOrThrow
   */
  export type images_tblFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * Filter, which images_tbl to fetch.
     */
    where: images_tblWhereUniqueInput
  }

  /**
   * images_tbl findFirst
   */
  export type images_tblFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * Filter, which images_tbl to fetch.
     */
    where?: images_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tbls to fetch.
     */
    orderBy?: images_tblOrderByWithRelationInput | images_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images_tbls.
     */
    cursor?: images_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images_tbls.
     */
    distinct?: Images_tblScalarFieldEnum | Images_tblScalarFieldEnum[]
  }

  /**
   * images_tbl findFirstOrThrow
   */
  export type images_tblFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * Filter, which images_tbl to fetch.
     */
    where?: images_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tbls to fetch.
     */
    orderBy?: images_tblOrderByWithRelationInput | images_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images_tbls.
     */
    cursor?: images_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tbls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images_tbls.
     */
    distinct?: Images_tblScalarFieldEnum | Images_tblScalarFieldEnum[]
  }

  /**
   * images_tbl findMany
   */
  export type images_tblFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * Filter, which images_tbls to fetch.
     */
    where?: images_tblWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images_tbls to fetch.
     */
    orderBy?: images_tblOrderByWithRelationInput | images_tblOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images_tbls.
     */
    cursor?: images_tblWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images_tbls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images_tbls.
     */
    skip?: number
    distinct?: Images_tblScalarFieldEnum | Images_tblScalarFieldEnum[]
  }

  /**
   * images_tbl create
   */
  export type images_tblCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * The data needed to create a images_tbl.
     */
    data: XOR<images_tblCreateInput, images_tblUncheckedCreateInput>
  }

  /**
   * images_tbl createMany
   */
  export type images_tblCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images_tbls.
     */
    data: images_tblCreateManyInput | images_tblCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images_tbl update
   */
  export type images_tblUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * The data needed to update a images_tbl.
     */
    data: XOR<images_tblUpdateInput, images_tblUncheckedUpdateInput>
    /**
     * Choose, which images_tbl to update.
     */
    where: images_tblWhereUniqueInput
  }

  /**
   * images_tbl updateMany
   */
  export type images_tblUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images_tbls.
     */
    data: XOR<images_tblUpdateManyMutationInput, images_tblUncheckedUpdateManyInput>
    /**
     * Filter which images_tbls to update
     */
    where?: images_tblWhereInput
  }

  /**
   * images_tbl upsert
   */
  export type images_tblUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * The filter to search for the images_tbl to update in case it exists.
     */
    where: images_tblWhereUniqueInput
    /**
     * In case the images_tbl found by the `where` argument doesn't exist, create a new images_tbl with this data.
     */
    create: XOR<images_tblCreateInput, images_tblUncheckedCreateInput>
    /**
     * In case the images_tbl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<images_tblUpdateInput, images_tblUncheckedUpdateInput>
  }

  /**
   * images_tbl delete
   */
  export type images_tblDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
    /**
     * Filter which images_tbl to delete.
     */
    where: images_tblWhereUniqueInput
  }

  /**
   * images_tbl deleteMany
   */
  export type images_tblDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images_tbls to delete
     */
    where?: images_tblWhereInput
  }

  /**
   * images_tbl without action
   */
  export type images_tblDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images_tbl
     */
    select?: images_tblSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: images_tblInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Estados_tblScalarFieldEnum: {
    id_estado: 'id_estado',
    nom_estados: 'nom_estados',
    cod_estados: 'cod_estados',
    ind_hab_estados: 'ind_hab_estados',
    grupo_estados_tbl_id_grupo_estado: 'grupo_estados_tbl_id_grupo_estado'
  };

  export type Estados_tblScalarFieldEnum = (typeof Estados_tblScalarFieldEnum)[keyof typeof Estados_tblScalarFieldEnum]


  export const Grupo_estados_tblScalarFieldEnum: {
    id_grupo_estado: 'id_grupo_estado',
    nom_grupo_estado: 'nom_grupo_estado',
    cod_grupo_estado: 'cod_grupo_estado',
    ind_hab_grupo_estado: 'ind_hab_grupo_estado'
  };

  export type Grupo_estados_tblScalarFieldEnum = (typeof Grupo_estados_tblScalarFieldEnum)[keyof typeof Grupo_estados_tblScalarFieldEnum]


  export const Habitacion_tblScalarFieldEnum: {
    id_habitacion: 'id_habitacion',
    des_habitacion: 'des_habitacion',
    id_tipo_alojamiento_habitacion: 'id_tipo_alojamiento_habitacion'
  };

  export type Habitacion_tblScalarFieldEnum = (typeof Habitacion_tblScalarFieldEnum)[keyof typeof Habitacion_tblScalarFieldEnum]


  export const Reserva_habitacion_tblScalarFieldEnum: {
    id_reserva_reserva_habitacion: 'id_reserva_reserva_habitacion',
    id_habitacion_reserva_habitacion: 'id_habitacion_reserva_habitacion',
    id_estado_reserva_habitacion: 'id_estado_reserva_habitacion'
  };

  export type Reserva_habitacion_tblScalarFieldEnum = (typeof Reserva_habitacion_tblScalarFieldEnum)[keyof typeof Reserva_habitacion_tblScalarFieldEnum]


  export const Reserva_tblScalarFieldEnum: {
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

  export type Reserva_tblScalarFieldEnum = (typeof Reserva_tblScalarFieldEnum)[keyof typeof Reserva_tblScalarFieldEnum]


  export const Servicio_habitacionScalarFieldEnum: {
    id_habitacion_servicio_habitacion: 'id_habitacion_servicio_habitacion',
    id_servicio_servicio_habitacion: 'id_servicio_servicio_habitacion',
    can_servicio_habitacion: 'can_servicio_habitacion'
  };

  export type Servicio_habitacionScalarFieldEnum = (typeof Servicio_habitacionScalarFieldEnum)[keyof typeof Servicio_habitacionScalarFieldEnum]


  export const Tipo_servicio_tblScalarFieldEnum: {
    id_tipo_servicio: 'id_tipo_servicio',
    nom_tipo_servicio: 'nom_tipo_servicio',
    cod_tipo_servicio: 'cod_tipo_servicio',
    des_tipo_servicio: 'des_tipo_servicio',
    ico_tipo_servicio: 'ico_tipo_servicio'
  };

  export type Tipo_servicio_tblScalarFieldEnum = (typeof Tipo_servicio_tblScalarFieldEnum)[keyof typeof Tipo_servicio_tblScalarFieldEnum]


  export const Servicio_tblScalarFieldEnum: {
    id_servicio: 'id_servicio',
    nom_servicio: 'nom_servicio',
    des_servicio: 'des_servicio',
    pre_servicio: 'pre_servicio',
    ind_hab_servicio: 'ind_hab_servicio',
    can_per_servicio: 'can_per_servicio',
    id_tipo_servicio: 'id_tipo_servicio'
  };

  export type Servicio_tblScalarFieldEnum = (typeof Servicio_tblScalarFieldEnum)[keyof typeof Servicio_tblScalarFieldEnum]


  export const Tipo_alojamiento_tblScalarFieldEnum: {
    id_tipo_alojamiento: 'id_tipo_alojamiento',
    nom_tipo_alojamiento: 'nom_tipo_alojamiento',
    des_tipo_alojamiento: 'des_tipo_alojamiento',
    ico_tipo_alojamiento: 'ico_tipo_alojamiento'
  };

  export type Tipo_alojamiento_tblScalarFieldEnum = (typeof Tipo_alojamiento_tblScalarFieldEnum)[keyof typeof Tipo_alojamiento_tblScalarFieldEnum]


  export const Usuario_tblScalarFieldEnum: {
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

  export type Usuario_tblScalarFieldEnum = (typeof Usuario_tblScalarFieldEnum)[keyof typeof Usuario_tblScalarFieldEnum]


  export const Images_tblScalarFieldEnum: {
    id_image: 'id_image',
    url_image: 'url_image',
    ind_pri_image: 'ind_pri_image',
    id_habitacion: 'id_habitacion'
  };

  export type Images_tblScalarFieldEnum = (typeof Images_tblScalarFieldEnum)[keyof typeof Images_tblScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type estados_tblWhereInput = {
    AND?: estados_tblWhereInput | estados_tblWhereInput[]
    OR?: estados_tblWhereInput[]
    NOT?: estados_tblWhereInput | estados_tblWhereInput[]
    id_estado?: IntFilter<"estados_tbl"> | number
    nom_estados?: StringNullableFilter<"estados_tbl"> | string | null
    cod_estados?: StringNullableFilter<"estados_tbl"> | string | null
    ind_hab_estados?: IntNullableFilter<"estados_tbl"> | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFilter<"estados_tbl"> | number
    grupo_estados_tbl?: XOR<Grupo_estados_tblRelationFilter, grupo_estados_tblWhereInput>
    reserva_habitacion_tbl?: Reserva_habitacion_tblListRelationFilter
    reserva_tbl?: Reserva_tblListRelationFilter
  }

  export type estados_tblOrderByWithRelationInput = {
    id_estado?: SortOrder
    nom_estados?: SortOrderInput | SortOrder
    cod_estados?: SortOrderInput | SortOrder
    ind_hab_estados?: SortOrderInput | SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
    grupo_estados_tbl?: grupo_estados_tblOrderByWithRelationInput
    reserva_habitacion_tbl?: reserva_habitacion_tblOrderByRelationAggregateInput
    reserva_tbl?: reserva_tblOrderByRelationAggregateInput
  }

  export type estados_tblWhereUniqueInput = Prisma.AtLeast<{
    id_estado?: number
    id_estado_grupo_estados_tbl_id_grupo_estado?: estados_tblId_estadoGrupo_estados_tbl_id_grupo_estadoCompoundUniqueInput
    AND?: estados_tblWhereInput | estados_tblWhereInput[]
    OR?: estados_tblWhereInput[]
    NOT?: estados_tblWhereInput | estados_tblWhereInput[]
    nom_estados?: StringNullableFilter<"estados_tbl"> | string | null
    cod_estados?: StringNullableFilter<"estados_tbl"> | string | null
    ind_hab_estados?: IntNullableFilter<"estados_tbl"> | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFilter<"estados_tbl"> | number
    grupo_estados_tbl?: XOR<Grupo_estados_tblRelationFilter, grupo_estados_tblWhereInput>
    reserva_habitacion_tbl?: Reserva_habitacion_tblListRelationFilter
    reserva_tbl?: Reserva_tblListRelationFilter
  }, "id_estado_grupo_estados_tbl_id_grupo_estado" | "id_estado">

  export type estados_tblOrderByWithAggregationInput = {
    id_estado?: SortOrder
    nom_estados?: SortOrderInput | SortOrder
    cod_estados?: SortOrderInput | SortOrder
    ind_hab_estados?: SortOrderInput | SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
    _count?: estados_tblCountOrderByAggregateInput
    _avg?: estados_tblAvgOrderByAggregateInput
    _max?: estados_tblMaxOrderByAggregateInput
    _min?: estados_tblMinOrderByAggregateInput
    _sum?: estados_tblSumOrderByAggregateInput
  }

  export type estados_tblScalarWhereWithAggregatesInput = {
    AND?: estados_tblScalarWhereWithAggregatesInput | estados_tblScalarWhereWithAggregatesInput[]
    OR?: estados_tblScalarWhereWithAggregatesInput[]
    NOT?: estados_tblScalarWhereWithAggregatesInput | estados_tblScalarWhereWithAggregatesInput[]
    id_estado?: IntWithAggregatesFilter<"estados_tbl"> | number
    nom_estados?: StringNullableWithAggregatesFilter<"estados_tbl"> | string | null
    cod_estados?: StringNullableWithAggregatesFilter<"estados_tbl"> | string | null
    ind_hab_estados?: IntNullableWithAggregatesFilter<"estados_tbl"> | number | null
    grupo_estados_tbl_id_grupo_estado?: IntWithAggregatesFilter<"estados_tbl"> | number
  }

  export type grupo_estados_tblWhereInput = {
    AND?: grupo_estados_tblWhereInput | grupo_estados_tblWhereInput[]
    OR?: grupo_estados_tblWhereInput[]
    NOT?: grupo_estados_tblWhereInput | grupo_estados_tblWhereInput[]
    id_grupo_estado?: IntFilter<"grupo_estados_tbl"> | number
    nom_grupo_estado?: StringNullableFilter<"grupo_estados_tbl"> | string | null
    cod_grupo_estado?: StringNullableFilter<"grupo_estados_tbl"> | string | null
    ind_hab_grupo_estado?: IntNullableFilter<"grupo_estados_tbl"> | number | null
    estados_tbl?: Estados_tblListRelationFilter
  }

  export type grupo_estados_tblOrderByWithRelationInput = {
    id_grupo_estado?: SortOrder
    nom_grupo_estado?: SortOrderInput | SortOrder
    cod_grupo_estado?: SortOrderInput | SortOrder
    ind_hab_grupo_estado?: SortOrderInput | SortOrder
    estados_tbl?: estados_tblOrderByRelationAggregateInput
  }

  export type grupo_estados_tblWhereUniqueInput = Prisma.AtLeast<{
    id_grupo_estado?: number
    AND?: grupo_estados_tblWhereInput | grupo_estados_tblWhereInput[]
    OR?: grupo_estados_tblWhereInput[]
    NOT?: grupo_estados_tblWhereInput | grupo_estados_tblWhereInput[]
    nom_grupo_estado?: StringNullableFilter<"grupo_estados_tbl"> | string | null
    cod_grupo_estado?: StringNullableFilter<"grupo_estados_tbl"> | string | null
    ind_hab_grupo_estado?: IntNullableFilter<"grupo_estados_tbl"> | number | null
    estados_tbl?: Estados_tblListRelationFilter
  }, "id_grupo_estado">

  export type grupo_estados_tblOrderByWithAggregationInput = {
    id_grupo_estado?: SortOrder
    nom_grupo_estado?: SortOrderInput | SortOrder
    cod_grupo_estado?: SortOrderInput | SortOrder
    ind_hab_grupo_estado?: SortOrderInput | SortOrder
    _count?: grupo_estados_tblCountOrderByAggregateInput
    _avg?: grupo_estados_tblAvgOrderByAggregateInput
    _max?: grupo_estados_tblMaxOrderByAggregateInput
    _min?: grupo_estados_tblMinOrderByAggregateInput
    _sum?: grupo_estados_tblSumOrderByAggregateInput
  }

  export type grupo_estados_tblScalarWhereWithAggregatesInput = {
    AND?: grupo_estados_tblScalarWhereWithAggregatesInput | grupo_estados_tblScalarWhereWithAggregatesInput[]
    OR?: grupo_estados_tblScalarWhereWithAggregatesInput[]
    NOT?: grupo_estados_tblScalarWhereWithAggregatesInput | grupo_estados_tblScalarWhereWithAggregatesInput[]
    id_grupo_estado?: IntWithAggregatesFilter<"grupo_estados_tbl"> | number
    nom_grupo_estado?: StringNullableWithAggregatesFilter<"grupo_estados_tbl"> | string | null
    cod_grupo_estado?: StringNullableWithAggregatesFilter<"grupo_estados_tbl"> | string | null
    ind_hab_grupo_estado?: IntNullableWithAggregatesFilter<"grupo_estados_tbl"> | number | null
  }

  export type habitacion_tblWhereInput = {
    AND?: habitacion_tblWhereInput | habitacion_tblWhereInput[]
    OR?: habitacion_tblWhereInput[]
    NOT?: habitacion_tblWhereInput | habitacion_tblWhereInput[]
    id_habitacion?: IntFilter<"habitacion_tbl"> | number
    des_habitacion?: StringNullableFilter<"habitacion_tbl"> | string | null
    id_tipo_alojamiento_habitacion?: IntFilter<"habitacion_tbl"> | number
    tipo_alojamiento_tbl?: XOR<Tipo_alojamiento_tblRelationFilter, tipo_alojamiento_tblWhereInput>
    reserva_habitacion_tbl?: Reserva_habitacion_tblListRelationFilter
    servicio_habitacion?: Servicio_habitacionListRelationFilter
    images_tbl?: Images_tblListRelationFilter
  }

  export type habitacion_tblOrderByWithRelationInput = {
    id_habitacion?: SortOrder
    des_habitacion?: SortOrderInput | SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
    tipo_alojamiento_tbl?: tipo_alojamiento_tblOrderByWithRelationInput
    reserva_habitacion_tbl?: reserva_habitacion_tblOrderByRelationAggregateInput
    servicio_habitacion?: servicio_habitacionOrderByRelationAggregateInput
    images_tbl?: images_tblOrderByRelationAggregateInput
  }

  export type habitacion_tblWhereUniqueInput = Prisma.AtLeast<{
    id_habitacion?: number
    id_habitacion_id_tipo_alojamiento_habitacion?: habitacion_tblId_habitacionId_tipo_alojamiento_habitacionCompoundUniqueInput
    AND?: habitacion_tblWhereInput | habitacion_tblWhereInput[]
    OR?: habitacion_tblWhereInput[]
    NOT?: habitacion_tblWhereInput | habitacion_tblWhereInput[]
    des_habitacion?: StringNullableFilter<"habitacion_tbl"> | string | null
    id_tipo_alojamiento_habitacion?: IntFilter<"habitacion_tbl"> | number
    tipo_alojamiento_tbl?: XOR<Tipo_alojamiento_tblRelationFilter, tipo_alojamiento_tblWhereInput>
    reserva_habitacion_tbl?: Reserva_habitacion_tblListRelationFilter
    servicio_habitacion?: Servicio_habitacionListRelationFilter
    images_tbl?: Images_tblListRelationFilter
  }, "id_habitacion_id_tipo_alojamiento_habitacion" | "id_habitacion">

  export type habitacion_tblOrderByWithAggregationInput = {
    id_habitacion?: SortOrder
    des_habitacion?: SortOrderInput | SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
    _count?: habitacion_tblCountOrderByAggregateInput
    _avg?: habitacion_tblAvgOrderByAggregateInput
    _max?: habitacion_tblMaxOrderByAggregateInput
    _min?: habitacion_tblMinOrderByAggregateInput
    _sum?: habitacion_tblSumOrderByAggregateInput
  }

  export type habitacion_tblScalarWhereWithAggregatesInput = {
    AND?: habitacion_tblScalarWhereWithAggregatesInput | habitacion_tblScalarWhereWithAggregatesInput[]
    OR?: habitacion_tblScalarWhereWithAggregatesInput[]
    NOT?: habitacion_tblScalarWhereWithAggregatesInput | habitacion_tblScalarWhereWithAggregatesInput[]
    id_habitacion?: IntWithAggregatesFilter<"habitacion_tbl"> | number
    des_habitacion?: StringNullableWithAggregatesFilter<"habitacion_tbl"> | string | null
    id_tipo_alojamiento_habitacion?: IntWithAggregatesFilter<"habitacion_tbl"> | number
  }

  export type reserva_habitacion_tblWhereInput = {
    AND?: reserva_habitacion_tblWhereInput | reserva_habitacion_tblWhereInput[]
    OR?: reserva_habitacion_tblWhereInput[]
    NOT?: reserva_habitacion_tblWhereInput | reserva_habitacion_tblWhereInput[]
    id_reserva_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    id_habitacion_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    id_estado_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    estados_tbl?: XOR<Estados_tblRelationFilter, estados_tblWhereInput>
    habitacion_tbl?: XOR<Habitacion_tblRelationFilter, habitacion_tblWhereInput>
    reserva_tbl?: XOR<Reserva_tblRelationFilter, reserva_tblWhereInput>
  }

  export type reserva_habitacion_tblOrderByWithRelationInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
    estados_tbl?: estados_tblOrderByWithRelationInput
    habitacion_tbl?: habitacion_tblOrderByWithRelationInput
    reserva_tbl?: reserva_tblOrderByWithRelationInput
  }

  export type reserva_habitacion_tblWhereUniqueInput = Prisma.AtLeast<{
    id_reserva_reserva_habitacion_id_habitacion_reserva_habitacion_id_estado_reserva_habitacion?: reserva_habitacion_tblId_reserva_reserva_habitacionId_habitacion_reserva_habitacionId_estado_reserva_habitacionCompoundUniqueInput
    AND?: reserva_habitacion_tblWhereInput | reserva_habitacion_tblWhereInput[]
    OR?: reserva_habitacion_tblWhereInput[]
    NOT?: reserva_habitacion_tblWhereInput | reserva_habitacion_tblWhereInput[]
    id_reserva_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    id_habitacion_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    id_estado_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    estados_tbl?: XOR<Estados_tblRelationFilter, estados_tblWhereInput>
    habitacion_tbl?: XOR<Habitacion_tblRelationFilter, habitacion_tblWhereInput>
    reserva_tbl?: XOR<Reserva_tblRelationFilter, reserva_tblWhereInput>
  }, "id_reserva_reserva_habitacion_id_habitacion_reserva_habitacion_id_estado_reserva_habitacion">

  export type reserva_habitacion_tblOrderByWithAggregationInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
    _count?: reserva_habitacion_tblCountOrderByAggregateInput
    _avg?: reserva_habitacion_tblAvgOrderByAggregateInput
    _max?: reserva_habitacion_tblMaxOrderByAggregateInput
    _min?: reserva_habitacion_tblMinOrderByAggregateInput
    _sum?: reserva_habitacion_tblSumOrderByAggregateInput
  }

  export type reserva_habitacion_tblScalarWhereWithAggregatesInput = {
    AND?: reserva_habitacion_tblScalarWhereWithAggregatesInput | reserva_habitacion_tblScalarWhereWithAggregatesInput[]
    OR?: reserva_habitacion_tblScalarWhereWithAggregatesInput[]
    NOT?: reserva_habitacion_tblScalarWhereWithAggregatesInput | reserva_habitacion_tblScalarWhereWithAggregatesInput[]
    id_reserva_reserva_habitacion?: IntWithAggregatesFilter<"reserva_habitacion_tbl"> | number
    id_habitacion_reserva_habitacion?: IntWithAggregatesFilter<"reserva_habitacion_tbl"> | number
    id_estado_reserva_habitacion?: IntWithAggregatesFilter<"reserva_habitacion_tbl"> | number
  }

  export type reserva_tblWhereInput = {
    AND?: reserva_tblWhereInput | reserva_tblWhereInput[]
    OR?: reserva_tblWhereInput[]
    NOT?: reserva_tblWhereInput | reserva_tblWhereInput[]
    id_reserva?: IntFilter<"reserva_tbl"> | number
    fec_ent_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    fec_sal_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    des_reserva?: StringNullableFilter<"reserva_tbl"> | string | null
    can_per_reserva?: IntNullableFilter<"reserva_tbl"> | number | null
    cos_tot_reserva?: FloatNullableFilter<"reserva_tbl"> | number | null
    fec_reg_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    id_estado_reserva?: IntFilter<"reserva_tbl"> | number
    id_usuario_reserva?: IntFilter<"reserva_tbl"> | number
    reserva_habitacion_tbl?: Reserva_habitacion_tblListRelationFilter
    estados_tbl?: XOR<Estados_tblRelationFilter, estados_tblWhereInput>
    usuario_tbl?: XOR<Usuario_tblRelationFilter, usuario_tblWhereInput>
  }

  export type reserva_tblOrderByWithRelationInput = {
    id_reserva?: SortOrder
    fec_ent_reserva?: SortOrderInput | SortOrder
    fec_sal_reserva?: SortOrderInput | SortOrder
    des_reserva?: SortOrderInput | SortOrder
    can_per_reserva?: SortOrderInput | SortOrder
    cos_tot_reserva?: SortOrderInput | SortOrder
    fec_reg_reserva?: SortOrderInput | SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
    reserva_habitacion_tbl?: reserva_habitacion_tblOrderByRelationAggregateInput
    estados_tbl?: estados_tblOrderByWithRelationInput
    usuario_tbl?: usuario_tblOrderByWithRelationInput
  }

  export type reserva_tblWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    id_reserva_id_estado_reserva_id_usuario_reserva?: reserva_tblId_reservaId_estado_reservaId_usuario_reservaCompoundUniqueInput
    AND?: reserva_tblWhereInput | reserva_tblWhereInput[]
    OR?: reserva_tblWhereInput[]
    NOT?: reserva_tblWhereInput | reserva_tblWhereInput[]
    fec_ent_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    fec_sal_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    des_reserva?: StringNullableFilter<"reserva_tbl"> | string | null
    can_per_reserva?: IntNullableFilter<"reserva_tbl"> | number | null
    cos_tot_reserva?: FloatNullableFilter<"reserva_tbl"> | number | null
    fec_reg_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    id_estado_reserva?: IntFilter<"reserva_tbl"> | number
    id_usuario_reserva?: IntFilter<"reserva_tbl"> | number
    reserva_habitacion_tbl?: Reserva_habitacion_tblListRelationFilter
    estados_tbl?: XOR<Estados_tblRelationFilter, estados_tblWhereInput>
    usuario_tbl?: XOR<Usuario_tblRelationFilter, usuario_tblWhereInput>
  }, "id_reserva_id_estado_reserva_id_usuario_reserva" | "id_reserva">

  export type reserva_tblOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    fec_ent_reserva?: SortOrderInput | SortOrder
    fec_sal_reserva?: SortOrderInput | SortOrder
    des_reserva?: SortOrderInput | SortOrder
    can_per_reserva?: SortOrderInput | SortOrder
    cos_tot_reserva?: SortOrderInput | SortOrder
    fec_reg_reserva?: SortOrderInput | SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
    _count?: reserva_tblCountOrderByAggregateInput
    _avg?: reserva_tblAvgOrderByAggregateInput
    _max?: reserva_tblMaxOrderByAggregateInput
    _min?: reserva_tblMinOrderByAggregateInput
    _sum?: reserva_tblSumOrderByAggregateInput
  }

  export type reserva_tblScalarWhereWithAggregatesInput = {
    AND?: reserva_tblScalarWhereWithAggregatesInput | reserva_tblScalarWhereWithAggregatesInput[]
    OR?: reserva_tblScalarWhereWithAggregatesInput[]
    NOT?: reserva_tblScalarWhereWithAggregatesInput | reserva_tblScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"reserva_tbl"> | number
    fec_ent_reserva?: DateTimeNullableWithAggregatesFilter<"reserva_tbl"> | Date | string | null
    fec_sal_reserva?: DateTimeNullableWithAggregatesFilter<"reserva_tbl"> | Date | string | null
    des_reserva?: StringNullableWithAggregatesFilter<"reserva_tbl"> | string | null
    can_per_reserva?: IntNullableWithAggregatesFilter<"reserva_tbl"> | number | null
    cos_tot_reserva?: FloatNullableWithAggregatesFilter<"reserva_tbl"> | number | null
    fec_reg_reserva?: DateTimeNullableWithAggregatesFilter<"reserva_tbl"> | Date | string | null
    id_estado_reserva?: IntWithAggregatesFilter<"reserva_tbl"> | number
    id_usuario_reserva?: IntWithAggregatesFilter<"reserva_tbl"> | number
  }

  export type servicio_habitacionWhereInput = {
    AND?: servicio_habitacionWhereInput | servicio_habitacionWhereInput[]
    OR?: servicio_habitacionWhereInput[]
    NOT?: servicio_habitacionWhereInput | servicio_habitacionWhereInput[]
    id_habitacion_servicio_habitacion?: IntFilter<"servicio_habitacion"> | number
    id_servicio_servicio_habitacion?: IntFilter<"servicio_habitacion"> | number
    can_servicio_habitacion?: IntNullableFilter<"servicio_habitacion"> | number | null
    habitacion_tbl?: XOR<Habitacion_tblRelationFilter, habitacion_tblWhereInput>
    servicio_tbl?: XOR<Servicio_tblRelationFilter, servicio_tblWhereInput>
  }

  export type servicio_habitacionOrderByWithRelationInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrderInput | SortOrder
    habitacion_tbl?: habitacion_tblOrderByWithRelationInput
    servicio_tbl?: servicio_tblOrderByWithRelationInput
  }

  export type servicio_habitacionWhereUniqueInput = Prisma.AtLeast<{
    id_habitacion_servicio_habitacion_id_servicio_servicio_habitacion?: servicio_habitacionId_habitacion_servicio_habitacionId_servicio_servicio_habitacionCompoundUniqueInput
    AND?: servicio_habitacionWhereInput | servicio_habitacionWhereInput[]
    OR?: servicio_habitacionWhereInput[]
    NOT?: servicio_habitacionWhereInput | servicio_habitacionWhereInput[]
    id_habitacion_servicio_habitacion?: IntFilter<"servicio_habitacion"> | number
    id_servicio_servicio_habitacion?: IntFilter<"servicio_habitacion"> | number
    can_servicio_habitacion?: IntNullableFilter<"servicio_habitacion"> | number | null
    habitacion_tbl?: XOR<Habitacion_tblRelationFilter, habitacion_tblWhereInput>
    servicio_tbl?: XOR<Servicio_tblRelationFilter, servicio_tblWhereInput>
  }, "id_habitacion_servicio_habitacion_id_servicio_servicio_habitacion">

  export type servicio_habitacionOrderByWithAggregationInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrderInput | SortOrder
    _count?: servicio_habitacionCountOrderByAggregateInput
    _avg?: servicio_habitacionAvgOrderByAggregateInput
    _max?: servicio_habitacionMaxOrderByAggregateInput
    _min?: servicio_habitacionMinOrderByAggregateInput
    _sum?: servicio_habitacionSumOrderByAggregateInput
  }

  export type servicio_habitacionScalarWhereWithAggregatesInput = {
    AND?: servicio_habitacionScalarWhereWithAggregatesInput | servicio_habitacionScalarWhereWithAggregatesInput[]
    OR?: servicio_habitacionScalarWhereWithAggregatesInput[]
    NOT?: servicio_habitacionScalarWhereWithAggregatesInput | servicio_habitacionScalarWhereWithAggregatesInput[]
    id_habitacion_servicio_habitacion?: IntWithAggregatesFilter<"servicio_habitacion"> | number
    id_servicio_servicio_habitacion?: IntWithAggregatesFilter<"servicio_habitacion"> | number
    can_servicio_habitacion?: IntNullableWithAggregatesFilter<"servicio_habitacion"> | number | null
  }

  export type tipo_servicio_tblWhereInput = {
    AND?: tipo_servicio_tblWhereInput | tipo_servicio_tblWhereInput[]
    OR?: tipo_servicio_tblWhereInput[]
    NOT?: tipo_servicio_tblWhereInput | tipo_servicio_tblWhereInput[]
    id_tipo_servicio?: IntFilter<"tipo_servicio_tbl"> | number
    nom_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    cod_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    des_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    ico_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    servicio_tbl?: Servicio_tblListRelationFilter
  }

  export type tipo_servicio_tblOrderByWithRelationInput = {
    id_tipo_servicio?: SortOrder
    nom_tipo_servicio?: SortOrderInput | SortOrder
    cod_tipo_servicio?: SortOrderInput | SortOrder
    des_tipo_servicio?: SortOrderInput | SortOrder
    ico_tipo_servicio?: SortOrderInput | SortOrder
    servicio_tbl?: servicio_tblOrderByRelationAggregateInput
  }

  export type tipo_servicio_tblWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_servicio?: number
    AND?: tipo_servicio_tblWhereInput | tipo_servicio_tblWhereInput[]
    OR?: tipo_servicio_tblWhereInput[]
    NOT?: tipo_servicio_tblWhereInput | tipo_servicio_tblWhereInput[]
    nom_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    cod_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    des_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    ico_tipo_servicio?: StringNullableFilter<"tipo_servicio_tbl"> | string | null
    servicio_tbl?: Servicio_tblListRelationFilter
  }, "id_tipo_servicio">

  export type tipo_servicio_tblOrderByWithAggregationInput = {
    id_tipo_servicio?: SortOrder
    nom_tipo_servicio?: SortOrderInput | SortOrder
    cod_tipo_servicio?: SortOrderInput | SortOrder
    des_tipo_servicio?: SortOrderInput | SortOrder
    ico_tipo_servicio?: SortOrderInput | SortOrder
    _count?: tipo_servicio_tblCountOrderByAggregateInput
    _avg?: tipo_servicio_tblAvgOrderByAggregateInput
    _max?: tipo_servicio_tblMaxOrderByAggregateInput
    _min?: tipo_servicio_tblMinOrderByAggregateInput
    _sum?: tipo_servicio_tblSumOrderByAggregateInput
  }

  export type tipo_servicio_tblScalarWhereWithAggregatesInput = {
    AND?: tipo_servicio_tblScalarWhereWithAggregatesInput | tipo_servicio_tblScalarWhereWithAggregatesInput[]
    OR?: tipo_servicio_tblScalarWhereWithAggregatesInput[]
    NOT?: tipo_servicio_tblScalarWhereWithAggregatesInput | tipo_servicio_tblScalarWhereWithAggregatesInput[]
    id_tipo_servicio?: IntWithAggregatesFilter<"tipo_servicio_tbl"> | number
    nom_tipo_servicio?: StringNullableWithAggregatesFilter<"tipo_servicio_tbl"> | string | null
    cod_tipo_servicio?: StringNullableWithAggregatesFilter<"tipo_servicio_tbl"> | string | null
    des_tipo_servicio?: StringNullableWithAggregatesFilter<"tipo_servicio_tbl"> | string | null
    ico_tipo_servicio?: StringNullableWithAggregatesFilter<"tipo_servicio_tbl"> | string | null
  }

  export type servicio_tblWhereInput = {
    AND?: servicio_tblWhereInput | servicio_tblWhereInput[]
    OR?: servicio_tblWhereInput[]
    NOT?: servicio_tblWhereInput | servicio_tblWhereInput[]
    id_servicio?: IntFilter<"servicio_tbl"> | number
    nom_servicio?: StringNullableFilter<"servicio_tbl"> | string | null
    des_servicio?: StringNullableFilter<"servicio_tbl"> | string | null
    pre_servicio?: FloatNullableFilter<"servicio_tbl"> | number | null
    ind_hab_servicio?: IntNullableFilter<"servicio_tbl"> | number | null
    can_per_servicio?: IntNullableFilter<"servicio_tbl"> | number | null
    id_tipo_servicio?: IntFilter<"servicio_tbl"> | number
    servicio_habitacion?: Servicio_habitacionListRelationFilter
    tipo_servicio_tbl?: XOR<Tipo_servicio_tblRelationFilter, tipo_servicio_tblWhereInput>
  }

  export type servicio_tblOrderByWithRelationInput = {
    id_servicio?: SortOrder
    nom_servicio?: SortOrderInput | SortOrder
    des_servicio?: SortOrderInput | SortOrder
    pre_servicio?: SortOrderInput | SortOrder
    ind_hab_servicio?: SortOrderInput | SortOrder
    can_per_servicio?: SortOrderInput | SortOrder
    id_tipo_servicio?: SortOrder
    servicio_habitacion?: servicio_habitacionOrderByRelationAggregateInput
    tipo_servicio_tbl?: tipo_servicio_tblOrderByWithRelationInput
  }

  export type servicio_tblWhereUniqueInput = Prisma.AtLeast<{
    id_servicio?: number
    AND?: servicio_tblWhereInput | servicio_tblWhereInput[]
    OR?: servicio_tblWhereInput[]
    NOT?: servicio_tblWhereInput | servicio_tblWhereInput[]
    nom_servicio?: StringNullableFilter<"servicio_tbl"> | string | null
    des_servicio?: StringNullableFilter<"servicio_tbl"> | string | null
    pre_servicio?: FloatNullableFilter<"servicio_tbl"> | number | null
    ind_hab_servicio?: IntNullableFilter<"servicio_tbl"> | number | null
    can_per_servicio?: IntNullableFilter<"servicio_tbl"> | number | null
    id_tipo_servicio?: IntFilter<"servicio_tbl"> | number
    servicio_habitacion?: Servicio_habitacionListRelationFilter
    tipo_servicio_tbl?: XOR<Tipo_servicio_tblRelationFilter, tipo_servicio_tblWhereInput>
  }, "id_servicio">

  export type servicio_tblOrderByWithAggregationInput = {
    id_servicio?: SortOrder
    nom_servicio?: SortOrderInput | SortOrder
    des_servicio?: SortOrderInput | SortOrder
    pre_servicio?: SortOrderInput | SortOrder
    ind_hab_servicio?: SortOrderInput | SortOrder
    can_per_servicio?: SortOrderInput | SortOrder
    id_tipo_servicio?: SortOrder
    _count?: servicio_tblCountOrderByAggregateInput
    _avg?: servicio_tblAvgOrderByAggregateInput
    _max?: servicio_tblMaxOrderByAggregateInput
    _min?: servicio_tblMinOrderByAggregateInput
    _sum?: servicio_tblSumOrderByAggregateInput
  }

  export type servicio_tblScalarWhereWithAggregatesInput = {
    AND?: servicio_tblScalarWhereWithAggregatesInput | servicio_tblScalarWhereWithAggregatesInput[]
    OR?: servicio_tblScalarWhereWithAggregatesInput[]
    NOT?: servicio_tblScalarWhereWithAggregatesInput | servicio_tblScalarWhereWithAggregatesInput[]
    id_servicio?: IntWithAggregatesFilter<"servicio_tbl"> | number
    nom_servicio?: StringNullableWithAggregatesFilter<"servicio_tbl"> | string | null
    des_servicio?: StringNullableWithAggregatesFilter<"servicio_tbl"> | string | null
    pre_servicio?: FloatNullableWithAggregatesFilter<"servicio_tbl"> | number | null
    ind_hab_servicio?: IntNullableWithAggregatesFilter<"servicio_tbl"> | number | null
    can_per_servicio?: IntNullableWithAggregatesFilter<"servicio_tbl"> | number | null
    id_tipo_servicio?: IntWithAggregatesFilter<"servicio_tbl"> | number
  }

  export type tipo_alojamiento_tblWhereInput = {
    AND?: tipo_alojamiento_tblWhereInput | tipo_alojamiento_tblWhereInput[]
    OR?: tipo_alojamiento_tblWhereInput[]
    NOT?: tipo_alojamiento_tblWhereInput | tipo_alojamiento_tblWhereInput[]
    id_tipo_alojamiento?: IntFilter<"tipo_alojamiento_tbl"> | number
    nom_tipo_alojamiento?: StringNullableFilter<"tipo_alojamiento_tbl"> | string | null
    des_tipo_alojamiento?: StringNullableFilter<"tipo_alojamiento_tbl"> | string | null
    ico_tipo_alojamiento?: StringNullableFilter<"tipo_alojamiento_tbl"> | string | null
    habitacion_tbl?: Habitacion_tblListRelationFilter
  }

  export type tipo_alojamiento_tblOrderByWithRelationInput = {
    id_tipo_alojamiento?: SortOrder
    nom_tipo_alojamiento?: SortOrderInput | SortOrder
    des_tipo_alojamiento?: SortOrderInput | SortOrder
    ico_tipo_alojamiento?: SortOrderInput | SortOrder
    habitacion_tbl?: habitacion_tblOrderByRelationAggregateInput
  }

  export type tipo_alojamiento_tblWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_alojamiento?: number
    AND?: tipo_alojamiento_tblWhereInput | tipo_alojamiento_tblWhereInput[]
    OR?: tipo_alojamiento_tblWhereInput[]
    NOT?: tipo_alojamiento_tblWhereInput | tipo_alojamiento_tblWhereInput[]
    nom_tipo_alojamiento?: StringNullableFilter<"tipo_alojamiento_tbl"> | string | null
    des_tipo_alojamiento?: StringNullableFilter<"tipo_alojamiento_tbl"> | string | null
    ico_tipo_alojamiento?: StringNullableFilter<"tipo_alojamiento_tbl"> | string | null
    habitacion_tbl?: Habitacion_tblListRelationFilter
  }, "id_tipo_alojamiento">

  export type tipo_alojamiento_tblOrderByWithAggregationInput = {
    id_tipo_alojamiento?: SortOrder
    nom_tipo_alojamiento?: SortOrderInput | SortOrder
    des_tipo_alojamiento?: SortOrderInput | SortOrder
    ico_tipo_alojamiento?: SortOrderInput | SortOrder
    _count?: tipo_alojamiento_tblCountOrderByAggregateInput
    _avg?: tipo_alojamiento_tblAvgOrderByAggregateInput
    _max?: tipo_alojamiento_tblMaxOrderByAggregateInput
    _min?: tipo_alojamiento_tblMinOrderByAggregateInput
    _sum?: tipo_alojamiento_tblSumOrderByAggregateInput
  }

  export type tipo_alojamiento_tblScalarWhereWithAggregatesInput = {
    AND?: tipo_alojamiento_tblScalarWhereWithAggregatesInput | tipo_alojamiento_tblScalarWhereWithAggregatesInput[]
    OR?: tipo_alojamiento_tblScalarWhereWithAggregatesInput[]
    NOT?: tipo_alojamiento_tblScalarWhereWithAggregatesInput | tipo_alojamiento_tblScalarWhereWithAggregatesInput[]
    id_tipo_alojamiento?: IntWithAggregatesFilter<"tipo_alojamiento_tbl"> | number
    nom_tipo_alojamiento?: StringNullableWithAggregatesFilter<"tipo_alojamiento_tbl"> | string | null
    des_tipo_alojamiento?: StringNullableWithAggregatesFilter<"tipo_alojamiento_tbl"> | string | null
    ico_tipo_alojamiento?: StringNullableWithAggregatesFilter<"tipo_alojamiento_tbl"> | string | null
  }

  export type usuario_tblWhereInput = {
    AND?: usuario_tblWhereInput | usuario_tblWhereInput[]
    OR?: usuario_tblWhereInput[]
    NOT?: usuario_tblWhereInput | usuario_tblWhereInput[]
    id_usuario?: IntFilter<"usuario_tbl"> | number
    nom_usuario?: StringFilter<"usuario_tbl"> | string
    fec_nac_usuario?: DateTimeFilter<"usuario_tbl"> | Date | string
    tel_usuario?: StringFilter<"usuario_tbl"> | string
    ema_usuario?: StringFilter<"usuario_tbl"> | string
    dir_usuario?: StringNullableFilter<"usuario_tbl"> | string | null
    tip_doc_usuario?: StringFilter<"usuario_tbl"> | string
    num_doc_usuario?: StringFilter<"usuario_tbl"> | string
    con_usuario?: StringFilter<"usuario_tbl"> | string
    reserva_tbl?: Reserva_tblListRelationFilter
  }

  export type usuario_tblOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nom_usuario?: SortOrder
    fec_nac_usuario?: SortOrder
    tel_usuario?: SortOrder
    ema_usuario?: SortOrder
    dir_usuario?: SortOrderInput | SortOrder
    tip_doc_usuario?: SortOrder
    num_doc_usuario?: SortOrder
    con_usuario?: SortOrder
    reserva_tbl?: reserva_tblOrderByRelationAggregateInput
  }

  export type usuario_tblWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: usuario_tblWhereInput | usuario_tblWhereInput[]
    OR?: usuario_tblWhereInput[]
    NOT?: usuario_tblWhereInput | usuario_tblWhereInput[]
    nom_usuario?: StringFilter<"usuario_tbl"> | string
    fec_nac_usuario?: DateTimeFilter<"usuario_tbl"> | Date | string
    tel_usuario?: StringFilter<"usuario_tbl"> | string
    ema_usuario?: StringFilter<"usuario_tbl"> | string
    dir_usuario?: StringNullableFilter<"usuario_tbl"> | string | null
    tip_doc_usuario?: StringFilter<"usuario_tbl"> | string
    num_doc_usuario?: StringFilter<"usuario_tbl"> | string
    con_usuario?: StringFilter<"usuario_tbl"> | string
    reserva_tbl?: Reserva_tblListRelationFilter
  }, "id_usuario">

  export type usuario_tblOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nom_usuario?: SortOrder
    fec_nac_usuario?: SortOrder
    tel_usuario?: SortOrder
    ema_usuario?: SortOrder
    dir_usuario?: SortOrderInput | SortOrder
    tip_doc_usuario?: SortOrder
    num_doc_usuario?: SortOrder
    con_usuario?: SortOrder
    _count?: usuario_tblCountOrderByAggregateInput
    _avg?: usuario_tblAvgOrderByAggregateInput
    _max?: usuario_tblMaxOrderByAggregateInput
    _min?: usuario_tblMinOrderByAggregateInput
    _sum?: usuario_tblSumOrderByAggregateInput
  }

  export type usuario_tblScalarWhereWithAggregatesInput = {
    AND?: usuario_tblScalarWhereWithAggregatesInput | usuario_tblScalarWhereWithAggregatesInput[]
    OR?: usuario_tblScalarWhereWithAggregatesInput[]
    NOT?: usuario_tblScalarWhereWithAggregatesInput | usuario_tblScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario_tbl"> | number
    nom_usuario?: StringWithAggregatesFilter<"usuario_tbl"> | string
    fec_nac_usuario?: DateTimeWithAggregatesFilter<"usuario_tbl"> | Date | string
    tel_usuario?: StringWithAggregatesFilter<"usuario_tbl"> | string
    ema_usuario?: StringWithAggregatesFilter<"usuario_tbl"> | string
    dir_usuario?: StringNullableWithAggregatesFilter<"usuario_tbl"> | string | null
    tip_doc_usuario?: StringWithAggregatesFilter<"usuario_tbl"> | string
    num_doc_usuario?: StringWithAggregatesFilter<"usuario_tbl"> | string
    con_usuario?: StringWithAggregatesFilter<"usuario_tbl"> | string
  }

  export type images_tblWhereInput = {
    AND?: images_tblWhereInput | images_tblWhereInput[]
    OR?: images_tblWhereInput[]
    NOT?: images_tblWhereInput | images_tblWhereInput[]
    id_image?: IntFilter<"images_tbl"> | number
    url_image?: StringFilter<"images_tbl"> | string
    ind_pri_image?: IntNullableFilter<"images_tbl"> | number | null
    id_habitacion?: IntFilter<"images_tbl"> | number
    habitacion_tbl?: XOR<Habitacion_tblRelationFilter, habitacion_tblWhereInput>
  }

  export type images_tblOrderByWithRelationInput = {
    id_image?: SortOrder
    url_image?: SortOrder
    ind_pri_image?: SortOrderInput | SortOrder
    id_habitacion?: SortOrder
    habitacion_tbl?: habitacion_tblOrderByWithRelationInput
  }

  export type images_tblWhereUniqueInput = Prisma.AtLeast<{
    id_image?: number
    AND?: images_tblWhereInput | images_tblWhereInput[]
    OR?: images_tblWhereInput[]
    NOT?: images_tblWhereInput | images_tblWhereInput[]
    url_image?: StringFilter<"images_tbl"> | string
    ind_pri_image?: IntNullableFilter<"images_tbl"> | number | null
    id_habitacion?: IntFilter<"images_tbl"> | number
    habitacion_tbl?: XOR<Habitacion_tblRelationFilter, habitacion_tblWhereInput>
  }, "id_image">

  export type images_tblOrderByWithAggregationInput = {
    id_image?: SortOrder
    url_image?: SortOrder
    ind_pri_image?: SortOrderInput | SortOrder
    id_habitacion?: SortOrder
    _count?: images_tblCountOrderByAggregateInput
    _avg?: images_tblAvgOrderByAggregateInput
    _max?: images_tblMaxOrderByAggregateInput
    _min?: images_tblMinOrderByAggregateInput
    _sum?: images_tblSumOrderByAggregateInput
  }

  export type images_tblScalarWhereWithAggregatesInput = {
    AND?: images_tblScalarWhereWithAggregatesInput | images_tblScalarWhereWithAggregatesInput[]
    OR?: images_tblScalarWhereWithAggregatesInput[]
    NOT?: images_tblScalarWhereWithAggregatesInput | images_tblScalarWhereWithAggregatesInput[]
    id_image?: IntWithAggregatesFilter<"images_tbl"> | number
    url_image?: StringWithAggregatesFilter<"images_tbl"> | string
    ind_pri_image?: IntNullableWithAggregatesFilter<"images_tbl"> | number | null
    id_habitacion?: IntWithAggregatesFilter<"images_tbl"> | number
  }

  export type estados_tblCreateInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl: grupo_estados_tblCreateNestedOneWithoutEstados_tblInput
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutEstados_tblInput
    reserva_tbl?: reserva_tblCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblUncheckedCreateInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl_id_grupo_estado: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutEstados_tblInput
    reserva_tbl?: reserva_tblUncheckedCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblUpdateInput = {
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl?: grupo_estados_tblUpdateOneRequiredWithoutEstados_tblNestedInput
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutEstados_tblNestedInput
    reserva_tbl?: reserva_tblUpdateManyWithoutEstados_tblNestedInput
  }

  export type estados_tblUncheckedUpdateInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutEstados_tblNestedInput
    reserva_tbl?: reserva_tblUncheckedUpdateManyWithoutEstados_tblNestedInput
  }

  export type estados_tblCreateManyInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl_id_grupo_estado: number
  }

  export type estados_tblUpdateManyMutationInput = {
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type estados_tblUncheckedUpdateManyInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFieldUpdateOperationsInput | number
  }

  export type grupo_estados_tblCreateInput = {
    nom_grupo_estado?: string | null
    cod_grupo_estado?: string | null
    ind_hab_grupo_estado?: number | null
    estados_tbl?: estados_tblCreateNestedManyWithoutGrupo_estados_tblInput
  }

  export type grupo_estados_tblUncheckedCreateInput = {
    id_grupo_estado?: number
    nom_grupo_estado?: string | null
    cod_grupo_estado?: string | null
    ind_hab_grupo_estado?: number | null
    estados_tbl?: estados_tblUncheckedCreateNestedManyWithoutGrupo_estados_tblInput
  }

  export type grupo_estados_tblUpdateInput = {
    nom_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    cod_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_grupo_estado?: NullableIntFieldUpdateOperationsInput | number | null
    estados_tbl?: estados_tblUpdateManyWithoutGrupo_estados_tblNestedInput
  }

  export type grupo_estados_tblUncheckedUpdateInput = {
    id_grupo_estado?: IntFieldUpdateOperationsInput | number
    nom_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    cod_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_grupo_estado?: NullableIntFieldUpdateOperationsInput | number | null
    estados_tbl?: estados_tblUncheckedUpdateManyWithoutGrupo_estados_tblNestedInput
  }

  export type grupo_estados_tblCreateManyInput = {
    id_grupo_estado?: number
    nom_grupo_estado?: string | null
    cod_grupo_estado?: string | null
    ind_hab_grupo_estado?: number | null
  }

  export type grupo_estados_tblUpdateManyMutationInput = {
    nom_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    cod_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_grupo_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type grupo_estados_tblUncheckedUpdateManyInput = {
    id_grupo_estado?: IntFieldUpdateOperationsInput | number
    nom_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    cod_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_grupo_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type habitacion_tblCreateInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    tipo_alojamiento_tbl: tipo_alojamiento_tblCreateNestedOneWithoutHabitacion_tblInput
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblUncheckedCreateInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    id_tipo_alojamiento_habitacion: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionUncheckedCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblUpdateInput = {
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_alojamiento_tbl?: tipo_alojamiento_tblUpdateOneRequiredWithoutHabitacion_tblNestedInput
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblUncheckedUpdateInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_alojamiento_habitacion?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblCreateManyInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    id_tipo_alojamiento_habitacion: number
  }

  export type habitacion_tblUpdateManyMutationInput = {
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type habitacion_tblUncheckedUpdateManyInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_alojamiento_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_habitacion_tblCreateInput = {
    estados_tbl: estados_tblCreateNestedOneWithoutReserva_habitacion_tblInput
    habitacion_tbl: habitacion_tblCreateNestedOneWithoutReserva_habitacion_tblInput
    reserva_tbl: reserva_tblCreateNestedOneWithoutReserva_habitacion_tblInput
  }

  export type reserva_habitacion_tblUncheckedCreateInput = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type reserva_habitacion_tblUpdateInput = {
    estados_tbl?: estados_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
    habitacion_tbl?: habitacion_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
    reserva_tbl?: reserva_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
  }

  export type reserva_habitacion_tblUncheckedUpdateInput = {
    id_reserva_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_habitacion_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_estado_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_habitacion_tblCreateManyInput = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type reserva_habitacion_tblUpdateManyMutationInput = {

  }

  export type reserva_habitacion_tblUncheckedUpdateManyInput = {
    id_reserva_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_habitacion_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_estado_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_tblCreateInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutReserva_tblInput
    estados_tbl: estados_tblCreateNestedOneWithoutReserva_tblInput
    usuario_tbl: usuario_tblCreateNestedOneWithoutReserva_tblInput
  }

  export type reserva_tblUncheckedCreateInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_estado_reserva: number
    id_usuario_reserva: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutReserva_tblInput
  }

  export type reserva_tblUpdateInput = {
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutReserva_tblNestedInput
    estados_tbl?: estados_tblUpdateOneRequiredWithoutReserva_tblNestedInput
    usuario_tbl?: usuario_tblUpdateOneRequiredWithoutReserva_tblNestedInput
  }

  export type reserva_tblUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario_reserva?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutReserva_tblNestedInput
  }

  export type reserva_tblCreateManyInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_estado_reserva: number
    id_usuario_reserva: number
  }

  export type reserva_tblUpdateManyMutationInput = {
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reserva_tblUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario_reserva?: IntFieldUpdateOperationsInput | number
  }

  export type servicio_habitacionCreateInput = {
    can_servicio_habitacion?: number | null
    habitacion_tbl: habitacion_tblCreateNestedOneWithoutServicio_habitacionInput
    servicio_tbl: servicio_tblCreateNestedOneWithoutServicio_habitacionInput
  }

  export type servicio_habitacionUncheckedCreateInput = {
    id_habitacion_servicio_habitacion: number
    id_servicio_servicio_habitacion: number
    can_servicio_habitacion?: number | null
  }

  export type servicio_habitacionUpdateInput = {
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
    habitacion_tbl?: habitacion_tblUpdateOneRequiredWithoutServicio_habitacionNestedInput
    servicio_tbl?: servicio_tblUpdateOneRequiredWithoutServicio_habitacionNestedInput
  }

  export type servicio_habitacionUncheckedUpdateInput = {
    id_habitacion_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    id_servicio_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type servicio_habitacionCreateManyInput = {
    id_habitacion_servicio_habitacion: number
    id_servicio_servicio_habitacion: number
    can_servicio_habitacion?: number | null
  }

  export type servicio_habitacionUpdateManyMutationInput = {
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type servicio_habitacionUncheckedUpdateManyInput = {
    id_habitacion_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    id_servicio_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipo_servicio_tblCreateInput = {
    nom_tipo_servicio?: string | null
    cod_tipo_servicio?: string | null
    des_tipo_servicio?: string | null
    ico_tipo_servicio?: string | null
    servicio_tbl?: servicio_tblCreateNestedManyWithoutTipo_servicio_tblInput
  }

  export type tipo_servicio_tblUncheckedCreateInput = {
    id_tipo_servicio?: number
    nom_tipo_servicio?: string | null
    cod_tipo_servicio?: string | null
    des_tipo_servicio?: string | null
    ico_tipo_servicio?: string | null
    servicio_tbl?: servicio_tblUncheckedCreateNestedManyWithoutTipo_servicio_tblInput
  }

  export type tipo_servicio_tblUpdateInput = {
    nom_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    servicio_tbl?: servicio_tblUpdateManyWithoutTipo_servicio_tblNestedInput
  }

  export type tipo_servicio_tblUncheckedUpdateInput = {
    id_tipo_servicio?: IntFieldUpdateOperationsInput | number
    nom_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    servicio_tbl?: servicio_tblUncheckedUpdateManyWithoutTipo_servicio_tblNestedInput
  }

  export type tipo_servicio_tblCreateManyInput = {
    id_tipo_servicio?: number
    nom_tipo_servicio?: string | null
    cod_tipo_servicio?: string | null
    des_tipo_servicio?: string | null
    ico_tipo_servicio?: string | null
  }

  export type tipo_servicio_tblUpdateManyMutationInput = {
    nom_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_servicio_tblUncheckedUpdateManyInput = {
    id_tipo_servicio?: IntFieldUpdateOperationsInput | number
    nom_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicio_tblCreateInput = {
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    servicio_habitacion?: servicio_habitacionCreateNestedManyWithoutServicio_tblInput
    tipo_servicio_tbl: tipo_servicio_tblCreateNestedOneWithoutServicio_tblInput
  }

  export type servicio_tblUncheckedCreateInput = {
    id_servicio?: number
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    id_tipo_servicio: number
    servicio_habitacion?: servicio_habitacionUncheckedCreateNestedManyWithoutServicio_tblInput
  }

  export type servicio_tblUpdateInput = {
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    servicio_habitacion?: servicio_habitacionUpdateManyWithoutServicio_tblNestedInput
    tipo_servicio_tbl?: tipo_servicio_tblUpdateOneRequiredWithoutServicio_tblNestedInput
  }

  export type servicio_tblUncheckedUpdateInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_servicio?: IntFieldUpdateOperationsInput | number
    servicio_habitacion?: servicio_habitacionUncheckedUpdateManyWithoutServicio_tblNestedInput
  }

  export type servicio_tblCreateManyInput = {
    id_servicio?: number
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    id_tipo_servicio: number
  }

  export type servicio_tblUpdateManyMutationInput = {
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type servicio_tblUncheckedUpdateManyInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type tipo_alojamiento_tblCreateInput = {
    nom_tipo_alojamiento?: string | null
    des_tipo_alojamiento?: string | null
    ico_tipo_alojamiento?: string | null
    habitacion_tbl?: habitacion_tblCreateNestedManyWithoutTipo_alojamiento_tblInput
  }

  export type tipo_alojamiento_tblUncheckedCreateInput = {
    id_tipo_alojamiento?: number
    nom_tipo_alojamiento?: string | null
    des_tipo_alojamiento?: string | null
    ico_tipo_alojamiento?: string | null
    habitacion_tbl?: habitacion_tblUncheckedCreateNestedManyWithoutTipo_alojamiento_tblInput
  }

  export type tipo_alojamiento_tblUpdateInput = {
    nom_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    habitacion_tbl?: habitacion_tblUpdateManyWithoutTipo_alojamiento_tblNestedInput
  }

  export type tipo_alojamiento_tblUncheckedUpdateInput = {
    id_tipo_alojamiento?: IntFieldUpdateOperationsInput | number
    nom_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    habitacion_tbl?: habitacion_tblUncheckedUpdateManyWithoutTipo_alojamiento_tblNestedInput
  }

  export type tipo_alojamiento_tblCreateManyInput = {
    id_tipo_alojamiento?: number
    nom_tipo_alojamiento?: string | null
    des_tipo_alojamiento?: string | null
    ico_tipo_alojamiento?: string | null
  }

  export type tipo_alojamiento_tblUpdateManyMutationInput = {
    nom_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_alojamiento_tblUncheckedUpdateManyInput = {
    id_tipo_alojamiento?: IntFieldUpdateOperationsInput | number
    nom_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuario_tblCreateInput = {
    nom_usuario: string
    fec_nac_usuario: Date | string
    tel_usuario: string
    ema_usuario: string
    dir_usuario?: string | null
    tip_doc_usuario: string
    num_doc_usuario: string
    con_usuario: string
    reserva_tbl?: reserva_tblCreateNestedManyWithoutUsuario_tblInput
  }

  export type usuario_tblUncheckedCreateInput = {
    id_usuario?: number
    nom_usuario: string
    fec_nac_usuario: Date | string
    tel_usuario: string
    ema_usuario: string
    dir_usuario?: string | null
    tip_doc_usuario: string
    num_doc_usuario: string
    con_usuario: string
    reserva_tbl?: reserva_tblUncheckedCreateNestedManyWithoutUsuario_tblInput
  }

  export type usuario_tblUpdateInput = {
    nom_usuario?: StringFieldUpdateOperationsInput | string
    fec_nac_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    tel_usuario?: StringFieldUpdateOperationsInput | string
    ema_usuario?: StringFieldUpdateOperationsInput | string
    dir_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tip_doc_usuario?: StringFieldUpdateOperationsInput | string
    num_doc_usuario?: StringFieldUpdateOperationsInput | string
    con_usuario?: StringFieldUpdateOperationsInput | string
    reserva_tbl?: reserva_tblUpdateManyWithoutUsuario_tblNestedInput
  }

  export type usuario_tblUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nom_usuario?: StringFieldUpdateOperationsInput | string
    fec_nac_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    tel_usuario?: StringFieldUpdateOperationsInput | string
    ema_usuario?: StringFieldUpdateOperationsInput | string
    dir_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tip_doc_usuario?: StringFieldUpdateOperationsInput | string
    num_doc_usuario?: StringFieldUpdateOperationsInput | string
    con_usuario?: StringFieldUpdateOperationsInput | string
    reserva_tbl?: reserva_tblUncheckedUpdateManyWithoutUsuario_tblNestedInput
  }

  export type usuario_tblCreateManyInput = {
    id_usuario?: number
    nom_usuario: string
    fec_nac_usuario: Date | string
    tel_usuario: string
    ema_usuario: string
    dir_usuario?: string | null
    tip_doc_usuario: string
    num_doc_usuario: string
    con_usuario: string
  }

  export type usuario_tblUpdateManyMutationInput = {
    nom_usuario?: StringFieldUpdateOperationsInput | string
    fec_nac_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    tel_usuario?: StringFieldUpdateOperationsInput | string
    ema_usuario?: StringFieldUpdateOperationsInput | string
    dir_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tip_doc_usuario?: StringFieldUpdateOperationsInput | string
    num_doc_usuario?: StringFieldUpdateOperationsInput | string
    con_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_tblUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nom_usuario?: StringFieldUpdateOperationsInput | string
    fec_nac_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    tel_usuario?: StringFieldUpdateOperationsInput | string
    ema_usuario?: StringFieldUpdateOperationsInput | string
    dir_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tip_doc_usuario?: StringFieldUpdateOperationsInput | string
    num_doc_usuario?: StringFieldUpdateOperationsInput | string
    con_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type images_tblCreateInput = {
    url_image: string
    ind_pri_image?: number | null
    habitacion_tbl: habitacion_tblCreateNestedOneWithoutImages_tblInput
  }

  export type images_tblUncheckedCreateInput = {
    id_image?: number
    url_image: string
    ind_pri_image?: number | null
    id_habitacion: number
  }

  export type images_tblUpdateInput = {
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
    habitacion_tbl?: habitacion_tblUpdateOneRequiredWithoutImages_tblNestedInput
  }

  export type images_tblUncheckedUpdateInput = {
    id_image?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
    id_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type images_tblCreateManyInput = {
    id_image?: number
    url_image: string
    ind_pri_image?: number | null
    id_habitacion: number
  }

  export type images_tblUpdateManyMutationInput = {
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type images_tblUncheckedUpdateManyInput = {
    id_image?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
    id_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Grupo_estados_tblRelationFilter = {
    is?: grupo_estados_tblWhereInput
    isNot?: grupo_estados_tblWhereInput
  }

  export type Reserva_habitacion_tblListRelationFilter = {
    every?: reserva_habitacion_tblWhereInput
    some?: reserva_habitacion_tblWhereInput
    none?: reserva_habitacion_tblWhereInput
  }

  export type Reserva_tblListRelationFilter = {
    every?: reserva_tblWhereInput
    some?: reserva_tblWhereInput
    none?: reserva_tblWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reserva_habitacion_tblOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reserva_tblOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type estados_tblId_estadoGrupo_estados_tbl_id_grupo_estadoCompoundUniqueInput = {
    id_estado: number
    grupo_estados_tbl_id_grupo_estado: number
  }

  export type estados_tblCountOrderByAggregateInput = {
    id_estado?: SortOrder
    nom_estados?: SortOrder
    cod_estados?: SortOrder
    ind_hab_estados?: SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
  }

  export type estados_tblAvgOrderByAggregateInput = {
    id_estado?: SortOrder
    ind_hab_estados?: SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
  }

  export type estados_tblMaxOrderByAggregateInput = {
    id_estado?: SortOrder
    nom_estados?: SortOrder
    cod_estados?: SortOrder
    ind_hab_estados?: SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
  }

  export type estados_tblMinOrderByAggregateInput = {
    id_estado?: SortOrder
    nom_estados?: SortOrder
    cod_estados?: SortOrder
    ind_hab_estados?: SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
  }

  export type estados_tblSumOrderByAggregateInput = {
    id_estado?: SortOrder
    ind_hab_estados?: SortOrder
    grupo_estados_tbl_id_grupo_estado?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Estados_tblListRelationFilter = {
    every?: estados_tblWhereInput
    some?: estados_tblWhereInput
    none?: estados_tblWhereInput
  }

  export type estados_tblOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type grupo_estados_tblCountOrderByAggregateInput = {
    id_grupo_estado?: SortOrder
    nom_grupo_estado?: SortOrder
    cod_grupo_estado?: SortOrder
    ind_hab_grupo_estado?: SortOrder
  }

  export type grupo_estados_tblAvgOrderByAggregateInput = {
    id_grupo_estado?: SortOrder
    ind_hab_grupo_estado?: SortOrder
  }

  export type grupo_estados_tblMaxOrderByAggregateInput = {
    id_grupo_estado?: SortOrder
    nom_grupo_estado?: SortOrder
    cod_grupo_estado?: SortOrder
    ind_hab_grupo_estado?: SortOrder
  }

  export type grupo_estados_tblMinOrderByAggregateInput = {
    id_grupo_estado?: SortOrder
    nom_grupo_estado?: SortOrder
    cod_grupo_estado?: SortOrder
    ind_hab_grupo_estado?: SortOrder
  }

  export type grupo_estados_tblSumOrderByAggregateInput = {
    id_grupo_estado?: SortOrder
    ind_hab_grupo_estado?: SortOrder
  }

  export type Tipo_alojamiento_tblRelationFilter = {
    is?: tipo_alojamiento_tblWhereInput
    isNot?: tipo_alojamiento_tblWhereInput
  }

  export type Servicio_habitacionListRelationFilter = {
    every?: servicio_habitacionWhereInput
    some?: servicio_habitacionWhereInput
    none?: servicio_habitacionWhereInput
  }

  export type Images_tblListRelationFilter = {
    every?: images_tblWhereInput
    some?: images_tblWhereInput
    none?: images_tblWhereInput
  }

  export type servicio_habitacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type images_tblOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type habitacion_tblId_habitacionId_tipo_alojamiento_habitacionCompoundUniqueInput = {
    id_habitacion: number
    id_tipo_alojamiento_habitacion: number
  }

  export type habitacion_tblCountOrderByAggregateInput = {
    id_habitacion?: SortOrder
    des_habitacion?: SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
  }

  export type habitacion_tblAvgOrderByAggregateInput = {
    id_habitacion?: SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
  }

  export type habitacion_tblMaxOrderByAggregateInput = {
    id_habitacion?: SortOrder
    des_habitacion?: SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
  }

  export type habitacion_tblMinOrderByAggregateInput = {
    id_habitacion?: SortOrder
    des_habitacion?: SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
  }

  export type habitacion_tblSumOrderByAggregateInput = {
    id_habitacion?: SortOrder
    id_tipo_alojamiento_habitacion?: SortOrder
  }

  export type Estados_tblRelationFilter = {
    is?: estados_tblWhereInput
    isNot?: estados_tblWhereInput
  }

  export type Habitacion_tblRelationFilter = {
    is?: habitacion_tblWhereInput
    isNot?: habitacion_tblWhereInput
  }

  export type Reserva_tblRelationFilter = {
    is?: reserva_tblWhereInput
    isNot?: reserva_tblWhereInput
  }

  export type reserva_habitacion_tblId_reserva_reserva_habitacionId_habitacion_reserva_habitacionId_estado_reserva_habitacionCompoundUniqueInput = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type reserva_habitacion_tblCountOrderByAggregateInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
  }

  export type reserva_habitacion_tblAvgOrderByAggregateInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
  }

  export type reserva_habitacion_tblMaxOrderByAggregateInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
  }

  export type reserva_habitacion_tblMinOrderByAggregateInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
  }

  export type reserva_habitacion_tblSumOrderByAggregateInput = {
    id_reserva_reserva_habitacion?: SortOrder
    id_habitacion_reserva_habitacion?: SortOrder
    id_estado_reserva_habitacion?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Usuario_tblRelationFilter = {
    is?: usuario_tblWhereInput
    isNot?: usuario_tblWhereInput
  }

  export type reserva_tblId_reservaId_estado_reservaId_usuario_reservaCompoundUniqueInput = {
    id_reserva: number
    id_estado_reserva: number
    id_usuario_reserva: number
  }

  export type reserva_tblCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    fec_ent_reserva?: SortOrder
    fec_sal_reserva?: SortOrder
    des_reserva?: SortOrder
    can_per_reserva?: SortOrder
    cos_tot_reserva?: SortOrder
    fec_reg_reserva?: SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
  }

  export type reserva_tblAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    can_per_reserva?: SortOrder
    cos_tot_reserva?: SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
  }

  export type reserva_tblMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    fec_ent_reserva?: SortOrder
    fec_sal_reserva?: SortOrder
    des_reserva?: SortOrder
    can_per_reserva?: SortOrder
    cos_tot_reserva?: SortOrder
    fec_reg_reserva?: SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
  }

  export type reserva_tblMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    fec_ent_reserva?: SortOrder
    fec_sal_reserva?: SortOrder
    des_reserva?: SortOrder
    can_per_reserva?: SortOrder
    cos_tot_reserva?: SortOrder
    fec_reg_reserva?: SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
  }

  export type reserva_tblSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    can_per_reserva?: SortOrder
    cos_tot_reserva?: SortOrder
    id_estado_reserva?: SortOrder
    id_usuario_reserva?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Servicio_tblRelationFilter = {
    is?: servicio_tblWhereInput
    isNot?: servicio_tblWhereInput
  }

  export type servicio_habitacionId_habitacion_servicio_habitacionId_servicio_servicio_habitacionCompoundUniqueInput = {
    id_habitacion_servicio_habitacion: number
    id_servicio_servicio_habitacion: number
  }

  export type servicio_habitacionCountOrderByAggregateInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrder
  }

  export type servicio_habitacionAvgOrderByAggregateInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrder
  }

  export type servicio_habitacionMaxOrderByAggregateInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrder
  }

  export type servicio_habitacionMinOrderByAggregateInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrder
  }

  export type servicio_habitacionSumOrderByAggregateInput = {
    id_habitacion_servicio_habitacion?: SortOrder
    id_servicio_servicio_habitacion?: SortOrder
    can_servicio_habitacion?: SortOrder
  }

  export type Servicio_tblListRelationFilter = {
    every?: servicio_tblWhereInput
    some?: servicio_tblWhereInput
    none?: servicio_tblWhereInput
  }

  export type servicio_tblOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipo_servicio_tblCountOrderByAggregateInput = {
    id_tipo_servicio?: SortOrder
    nom_tipo_servicio?: SortOrder
    cod_tipo_servicio?: SortOrder
    des_tipo_servicio?: SortOrder
    ico_tipo_servicio?: SortOrder
  }

  export type tipo_servicio_tblAvgOrderByAggregateInput = {
    id_tipo_servicio?: SortOrder
  }

  export type tipo_servicio_tblMaxOrderByAggregateInput = {
    id_tipo_servicio?: SortOrder
    nom_tipo_servicio?: SortOrder
    cod_tipo_servicio?: SortOrder
    des_tipo_servicio?: SortOrder
    ico_tipo_servicio?: SortOrder
  }

  export type tipo_servicio_tblMinOrderByAggregateInput = {
    id_tipo_servicio?: SortOrder
    nom_tipo_servicio?: SortOrder
    cod_tipo_servicio?: SortOrder
    des_tipo_servicio?: SortOrder
    ico_tipo_servicio?: SortOrder
  }

  export type tipo_servicio_tblSumOrderByAggregateInput = {
    id_tipo_servicio?: SortOrder
  }

  export type Tipo_servicio_tblRelationFilter = {
    is?: tipo_servicio_tblWhereInput
    isNot?: tipo_servicio_tblWhereInput
  }

  export type servicio_tblCountOrderByAggregateInput = {
    id_servicio?: SortOrder
    nom_servicio?: SortOrder
    des_servicio?: SortOrder
    pre_servicio?: SortOrder
    ind_hab_servicio?: SortOrder
    can_per_servicio?: SortOrder
    id_tipo_servicio?: SortOrder
  }

  export type servicio_tblAvgOrderByAggregateInput = {
    id_servicio?: SortOrder
    pre_servicio?: SortOrder
    ind_hab_servicio?: SortOrder
    can_per_servicio?: SortOrder
    id_tipo_servicio?: SortOrder
  }

  export type servicio_tblMaxOrderByAggregateInput = {
    id_servicio?: SortOrder
    nom_servicio?: SortOrder
    des_servicio?: SortOrder
    pre_servicio?: SortOrder
    ind_hab_servicio?: SortOrder
    can_per_servicio?: SortOrder
    id_tipo_servicio?: SortOrder
  }

  export type servicio_tblMinOrderByAggregateInput = {
    id_servicio?: SortOrder
    nom_servicio?: SortOrder
    des_servicio?: SortOrder
    pre_servicio?: SortOrder
    ind_hab_servicio?: SortOrder
    can_per_servicio?: SortOrder
    id_tipo_servicio?: SortOrder
  }

  export type servicio_tblSumOrderByAggregateInput = {
    id_servicio?: SortOrder
    pre_servicio?: SortOrder
    ind_hab_servicio?: SortOrder
    can_per_servicio?: SortOrder
    id_tipo_servicio?: SortOrder
  }

  export type Habitacion_tblListRelationFilter = {
    every?: habitacion_tblWhereInput
    some?: habitacion_tblWhereInput
    none?: habitacion_tblWhereInput
  }

  export type habitacion_tblOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipo_alojamiento_tblCountOrderByAggregateInput = {
    id_tipo_alojamiento?: SortOrder
    nom_tipo_alojamiento?: SortOrder
    des_tipo_alojamiento?: SortOrder
    ico_tipo_alojamiento?: SortOrder
  }

  export type tipo_alojamiento_tblAvgOrderByAggregateInput = {
    id_tipo_alojamiento?: SortOrder
  }

  export type tipo_alojamiento_tblMaxOrderByAggregateInput = {
    id_tipo_alojamiento?: SortOrder
    nom_tipo_alojamiento?: SortOrder
    des_tipo_alojamiento?: SortOrder
    ico_tipo_alojamiento?: SortOrder
  }

  export type tipo_alojamiento_tblMinOrderByAggregateInput = {
    id_tipo_alojamiento?: SortOrder
    nom_tipo_alojamiento?: SortOrder
    des_tipo_alojamiento?: SortOrder
    ico_tipo_alojamiento?: SortOrder
  }

  export type tipo_alojamiento_tblSumOrderByAggregateInput = {
    id_tipo_alojamiento?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usuario_tblCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nom_usuario?: SortOrder
    fec_nac_usuario?: SortOrder
    tel_usuario?: SortOrder
    ema_usuario?: SortOrder
    dir_usuario?: SortOrder
    tip_doc_usuario?: SortOrder
    num_doc_usuario?: SortOrder
    con_usuario?: SortOrder
  }

  export type usuario_tblAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuario_tblMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nom_usuario?: SortOrder
    fec_nac_usuario?: SortOrder
    tel_usuario?: SortOrder
    ema_usuario?: SortOrder
    dir_usuario?: SortOrder
    tip_doc_usuario?: SortOrder
    num_doc_usuario?: SortOrder
    con_usuario?: SortOrder
  }

  export type usuario_tblMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nom_usuario?: SortOrder
    fec_nac_usuario?: SortOrder
    tel_usuario?: SortOrder
    ema_usuario?: SortOrder
    dir_usuario?: SortOrder
    tip_doc_usuario?: SortOrder
    num_doc_usuario?: SortOrder
    con_usuario?: SortOrder
  }

  export type usuario_tblSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type images_tblCountOrderByAggregateInput = {
    id_image?: SortOrder
    url_image?: SortOrder
    ind_pri_image?: SortOrder
    id_habitacion?: SortOrder
  }

  export type images_tblAvgOrderByAggregateInput = {
    id_image?: SortOrder
    ind_pri_image?: SortOrder
    id_habitacion?: SortOrder
  }

  export type images_tblMaxOrderByAggregateInput = {
    id_image?: SortOrder
    url_image?: SortOrder
    ind_pri_image?: SortOrder
    id_habitacion?: SortOrder
  }

  export type images_tblMinOrderByAggregateInput = {
    id_image?: SortOrder
    url_image?: SortOrder
    ind_pri_image?: SortOrder
    id_habitacion?: SortOrder
  }

  export type images_tblSumOrderByAggregateInput = {
    id_image?: SortOrder
    ind_pri_image?: SortOrder
    id_habitacion?: SortOrder
  }

  export type grupo_estados_tblCreateNestedOneWithoutEstados_tblInput = {
    create?: XOR<grupo_estados_tblCreateWithoutEstados_tblInput, grupo_estados_tblUncheckedCreateWithoutEstados_tblInput>
    connectOrCreate?: grupo_estados_tblCreateOrConnectWithoutEstados_tblInput
    connect?: grupo_estados_tblWhereUniqueInput
  }

  export type reserva_habitacion_tblCreateNestedManyWithoutEstados_tblInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput> | reserva_habitacion_tblCreateWithoutEstados_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput | reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyEstados_tblInputEnvelope
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
  }

  export type reserva_tblCreateNestedManyWithoutEstados_tblInput = {
    create?: XOR<reserva_tblCreateWithoutEstados_tblInput, reserva_tblUncheckedCreateWithoutEstados_tblInput> | reserva_tblCreateWithoutEstados_tblInput[] | reserva_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutEstados_tblInput | reserva_tblCreateOrConnectWithoutEstados_tblInput[]
    createMany?: reserva_tblCreateManyEstados_tblInputEnvelope
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
  }

  export type reserva_habitacion_tblUncheckedCreateNestedManyWithoutEstados_tblInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput> | reserva_habitacion_tblCreateWithoutEstados_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput | reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyEstados_tblInputEnvelope
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
  }

  export type reserva_tblUncheckedCreateNestedManyWithoutEstados_tblInput = {
    create?: XOR<reserva_tblCreateWithoutEstados_tblInput, reserva_tblUncheckedCreateWithoutEstados_tblInput> | reserva_tblCreateWithoutEstados_tblInput[] | reserva_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutEstados_tblInput | reserva_tblCreateOrConnectWithoutEstados_tblInput[]
    createMany?: reserva_tblCreateManyEstados_tblInputEnvelope
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type grupo_estados_tblUpdateOneRequiredWithoutEstados_tblNestedInput = {
    create?: XOR<grupo_estados_tblCreateWithoutEstados_tblInput, grupo_estados_tblUncheckedCreateWithoutEstados_tblInput>
    connectOrCreate?: grupo_estados_tblCreateOrConnectWithoutEstados_tblInput
    upsert?: grupo_estados_tblUpsertWithoutEstados_tblInput
    connect?: grupo_estados_tblWhereUniqueInput
    update?: XOR<XOR<grupo_estados_tblUpdateToOneWithWhereWithoutEstados_tblInput, grupo_estados_tblUpdateWithoutEstados_tblInput>, grupo_estados_tblUncheckedUpdateWithoutEstados_tblInput>
  }

  export type reserva_habitacion_tblUpdateManyWithoutEstados_tblNestedInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput> | reserva_habitacion_tblCreateWithoutEstados_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput | reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput[]
    upsert?: reserva_habitacion_tblUpsertWithWhereUniqueWithoutEstados_tblInput | reserva_habitacion_tblUpsertWithWhereUniqueWithoutEstados_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyEstados_tblInputEnvelope
    set?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    disconnect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    delete?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    update?: reserva_habitacion_tblUpdateWithWhereUniqueWithoutEstados_tblInput | reserva_habitacion_tblUpdateWithWhereUniqueWithoutEstados_tblInput[]
    updateMany?: reserva_habitacion_tblUpdateManyWithWhereWithoutEstados_tblInput | reserva_habitacion_tblUpdateManyWithWhereWithoutEstados_tblInput[]
    deleteMany?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
  }

  export type reserva_tblUpdateManyWithoutEstados_tblNestedInput = {
    create?: XOR<reserva_tblCreateWithoutEstados_tblInput, reserva_tblUncheckedCreateWithoutEstados_tblInput> | reserva_tblCreateWithoutEstados_tblInput[] | reserva_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutEstados_tblInput | reserva_tblCreateOrConnectWithoutEstados_tblInput[]
    upsert?: reserva_tblUpsertWithWhereUniqueWithoutEstados_tblInput | reserva_tblUpsertWithWhereUniqueWithoutEstados_tblInput[]
    createMany?: reserva_tblCreateManyEstados_tblInputEnvelope
    set?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    disconnect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    delete?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    update?: reserva_tblUpdateWithWhereUniqueWithoutEstados_tblInput | reserva_tblUpdateWithWhereUniqueWithoutEstados_tblInput[]
    updateMany?: reserva_tblUpdateManyWithWhereWithoutEstados_tblInput | reserva_tblUpdateManyWithWhereWithoutEstados_tblInput[]
    deleteMany?: reserva_tblScalarWhereInput | reserva_tblScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reserva_habitacion_tblUncheckedUpdateManyWithoutEstados_tblNestedInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput> | reserva_habitacion_tblCreateWithoutEstados_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput | reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput[]
    upsert?: reserva_habitacion_tblUpsertWithWhereUniqueWithoutEstados_tblInput | reserva_habitacion_tblUpsertWithWhereUniqueWithoutEstados_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyEstados_tblInputEnvelope
    set?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    disconnect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    delete?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    update?: reserva_habitacion_tblUpdateWithWhereUniqueWithoutEstados_tblInput | reserva_habitacion_tblUpdateWithWhereUniqueWithoutEstados_tblInput[]
    updateMany?: reserva_habitacion_tblUpdateManyWithWhereWithoutEstados_tblInput | reserva_habitacion_tblUpdateManyWithWhereWithoutEstados_tblInput[]
    deleteMany?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
  }

  export type reserva_tblUncheckedUpdateManyWithoutEstados_tblNestedInput = {
    create?: XOR<reserva_tblCreateWithoutEstados_tblInput, reserva_tblUncheckedCreateWithoutEstados_tblInput> | reserva_tblCreateWithoutEstados_tblInput[] | reserva_tblUncheckedCreateWithoutEstados_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutEstados_tblInput | reserva_tblCreateOrConnectWithoutEstados_tblInput[]
    upsert?: reserva_tblUpsertWithWhereUniqueWithoutEstados_tblInput | reserva_tblUpsertWithWhereUniqueWithoutEstados_tblInput[]
    createMany?: reserva_tblCreateManyEstados_tblInputEnvelope
    set?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    disconnect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    delete?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    update?: reserva_tblUpdateWithWhereUniqueWithoutEstados_tblInput | reserva_tblUpdateWithWhereUniqueWithoutEstados_tblInput[]
    updateMany?: reserva_tblUpdateManyWithWhereWithoutEstados_tblInput | reserva_tblUpdateManyWithWhereWithoutEstados_tblInput[]
    deleteMany?: reserva_tblScalarWhereInput | reserva_tblScalarWhereInput[]
  }

  export type estados_tblCreateNestedManyWithoutGrupo_estados_tblInput = {
    create?: XOR<estados_tblCreateWithoutGrupo_estados_tblInput, estados_tblUncheckedCreateWithoutGrupo_estados_tblInput> | estados_tblCreateWithoutGrupo_estados_tblInput[] | estados_tblUncheckedCreateWithoutGrupo_estados_tblInput[]
    connectOrCreate?: estados_tblCreateOrConnectWithoutGrupo_estados_tblInput | estados_tblCreateOrConnectWithoutGrupo_estados_tblInput[]
    createMany?: estados_tblCreateManyGrupo_estados_tblInputEnvelope
    connect?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
  }

  export type estados_tblUncheckedCreateNestedManyWithoutGrupo_estados_tblInput = {
    create?: XOR<estados_tblCreateWithoutGrupo_estados_tblInput, estados_tblUncheckedCreateWithoutGrupo_estados_tblInput> | estados_tblCreateWithoutGrupo_estados_tblInput[] | estados_tblUncheckedCreateWithoutGrupo_estados_tblInput[]
    connectOrCreate?: estados_tblCreateOrConnectWithoutGrupo_estados_tblInput | estados_tblCreateOrConnectWithoutGrupo_estados_tblInput[]
    createMany?: estados_tblCreateManyGrupo_estados_tblInputEnvelope
    connect?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
  }

  export type estados_tblUpdateManyWithoutGrupo_estados_tblNestedInput = {
    create?: XOR<estados_tblCreateWithoutGrupo_estados_tblInput, estados_tblUncheckedCreateWithoutGrupo_estados_tblInput> | estados_tblCreateWithoutGrupo_estados_tblInput[] | estados_tblUncheckedCreateWithoutGrupo_estados_tblInput[]
    connectOrCreate?: estados_tblCreateOrConnectWithoutGrupo_estados_tblInput | estados_tblCreateOrConnectWithoutGrupo_estados_tblInput[]
    upsert?: estados_tblUpsertWithWhereUniqueWithoutGrupo_estados_tblInput | estados_tblUpsertWithWhereUniqueWithoutGrupo_estados_tblInput[]
    createMany?: estados_tblCreateManyGrupo_estados_tblInputEnvelope
    set?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    disconnect?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    delete?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    connect?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    update?: estados_tblUpdateWithWhereUniqueWithoutGrupo_estados_tblInput | estados_tblUpdateWithWhereUniqueWithoutGrupo_estados_tblInput[]
    updateMany?: estados_tblUpdateManyWithWhereWithoutGrupo_estados_tblInput | estados_tblUpdateManyWithWhereWithoutGrupo_estados_tblInput[]
    deleteMany?: estados_tblScalarWhereInput | estados_tblScalarWhereInput[]
  }

  export type estados_tblUncheckedUpdateManyWithoutGrupo_estados_tblNestedInput = {
    create?: XOR<estados_tblCreateWithoutGrupo_estados_tblInput, estados_tblUncheckedCreateWithoutGrupo_estados_tblInput> | estados_tblCreateWithoutGrupo_estados_tblInput[] | estados_tblUncheckedCreateWithoutGrupo_estados_tblInput[]
    connectOrCreate?: estados_tblCreateOrConnectWithoutGrupo_estados_tblInput | estados_tblCreateOrConnectWithoutGrupo_estados_tblInput[]
    upsert?: estados_tblUpsertWithWhereUniqueWithoutGrupo_estados_tblInput | estados_tblUpsertWithWhereUniqueWithoutGrupo_estados_tblInput[]
    createMany?: estados_tblCreateManyGrupo_estados_tblInputEnvelope
    set?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    disconnect?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    delete?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    connect?: estados_tblWhereUniqueInput | estados_tblWhereUniqueInput[]
    update?: estados_tblUpdateWithWhereUniqueWithoutGrupo_estados_tblInput | estados_tblUpdateWithWhereUniqueWithoutGrupo_estados_tblInput[]
    updateMany?: estados_tblUpdateManyWithWhereWithoutGrupo_estados_tblInput | estados_tblUpdateManyWithWhereWithoutGrupo_estados_tblInput[]
    deleteMany?: estados_tblScalarWhereInput | estados_tblScalarWhereInput[]
  }

  export type tipo_alojamiento_tblCreateNestedOneWithoutHabitacion_tblInput = {
    create?: XOR<tipo_alojamiento_tblCreateWithoutHabitacion_tblInput, tipo_alojamiento_tblUncheckedCreateWithoutHabitacion_tblInput>
    connectOrCreate?: tipo_alojamiento_tblCreateOrConnectWithoutHabitacion_tblInput
    connect?: tipo_alojamiento_tblWhereUniqueInput
  }

  export type reserva_habitacion_tblCreateNestedManyWithoutHabitacion_tblInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput> | reserva_habitacion_tblCreateWithoutHabitacion_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput | reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyHabitacion_tblInputEnvelope
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
  }

  export type servicio_habitacionCreateNestedManyWithoutHabitacion_tblInput = {
    create?: XOR<servicio_habitacionCreateWithoutHabitacion_tblInput, servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput> | servicio_habitacionCreateWithoutHabitacion_tblInput[] | servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput | servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput[]
    createMany?: servicio_habitacionCreateManyHabitacion_tblInputEnvelope
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
  }

  export type images_tblCreateNestedManyWithoutHabitacion_tblInput = {
    create?: XOR<images_tblCreateWithoutHabitacion_tblInput, images_tblUncheckedCreateWithoutHabitacion_tblInput> | images_tblCreateWithoutHabitacion_tblInput[] | images_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: images_tblCreateOrConnectWithoutHabitacion_tblInput | images_tblCreateOrConnectWithoutHabitacion_tblInput[]
    createMany?: images_tblCreateManyHabitacion_tblInputEnvelope
    connect?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
  }

  export type reserva_habitacion_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput> | reserva_habitacion_tblCreateWithoutHabitacion_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput | reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyHabitacion_tblInputEnvelope
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
  }

  export type servicio_habitacionUncheckedCreateNestedManyWithoutHabitacion_tblInput = {
    create?: XOR<servicio_habitacionCreateWithoutHabitacion_tblInput, servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput> | servicio_habitacionCreateWithoutHabitacion_tblInput[] | servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput | servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput[]
    createMany?: servicio_habitacionCreateManyHabitacion_tblInputEnvelope
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
  }

  export type images_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput = {
    create?: XOR<images_tblCreateWithoutHabitacion_tblInput, images_tblUncheckedCreateWithoutHabitacion_tblInput> | images_tblCreateWithoutHabitacion_tblInput[] | images_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: images_tblCreateOrConnectWithoutHabitacion_tblInput | images_tblCreateOrConnectWithoutHabitacion_tblInput[]
    createMany?: images_tblCreateManyHabitacion_tblInputEnvelope
    connect?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
  }

  export type tipo_alojamiento_tblUpdateOneRequiredWithoutHabitacion_tblNestedInput = {
    create?: XOR<tipo_alojamiento_tblCreateWithoutHabitacion_tblInput, tipo_alojamiento_tblUncheckedCreateWithoutHabitacion_tblInput>
    connectOrCreate?: tipo_alojamiento_tblCreateOrConnectWithoutHabitacion_tblInput
    upsert?: tipo_alojamiento_tblUpsertWithoutHabitacion_tblInput
    connect?: tipo_alojamiento_tblWhereUniqueInput
    update?: XOR<XOR<tipo_alojamiento_tblUpdateToOneWithWhereWithoutHabitacion_tblInput, tipo_alojamiento_tblUpdateWithoutHabitacion_tblInput>, tipo_alojamiento_tblUncheckedUpdateWithoutHabitacion_tblInput>
  }

  export type reserva_habitacion_tblUpdateManyWithoutHabitacion_tblNestedInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput> | reserva_habitacion_tblCreateWithoutHabitacion_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput | reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput[]
    upsert?: reserva_habitacion_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput | reserva_habitacion_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyHabitacion_tblInputEnvelope
    set?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    disconnect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    delete?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    update?: reserva_habitacion_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput | reserva_habitacion_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput[]
    updateMany?: reserva_habitacion_tblUpdateManyWithWhereWithoutHabitacion_tblInput | reserva_habitacion_tblUpdateManyWithWhereWithoutHabitacion_tblInput[]
    deleteMany?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
  }

  export type servicio_habitacionUpdateManyWithoutHabitacion_tblNestedInput = {
    create?: XOR<servicio_habitacionCreateWithoutHabitacion_tblInput, servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput> | servicio_habitacionCreateWithoutHabitacion_tblInput[] | servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput | servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput[]
    upsert?: servicio_habitacionUpsertWithWhereUniqueWithoutHabitacion_tblInput | servicio_habitacionUpsertWithWhereUniqueWithoutHabitacion_tblInput[]
    createMany?: servicio_habitacionCreateManyHabitacion_tblInputEnvelope
    set?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    disconnect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    delete?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    update?: servicio_habitacionUpdateWithWhereUniqueWithoutHabitacion_tblInput | servicio_habitacionUpdateWithWhereUniqueWithoutHabitacion_tblInput[]
    updateMany?: servicio_habitacionUpdateManyWithWhereWithoutHabitacion_tblInput | servicio_habitacionUpdateManyWithWhereWithoutHabitacion_tblInput[]
    deleteMany?: servicio_habitacionScalarWhereInput | servicio_habitacionScalarWhereInput[]
  }

  export type images_tblUpdateManyWithoutHabitacion_tblNestedInput = {
    create?: XOR<images_tblCreateWithoutHabitacion_tblInput, images_tblUncheckedCreateWithoutHabitacion_tblInput> | images_tblCreateWithoutHabitacion_tblInput[] | images_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: images_tblCreateOrConnectWithoutHabitacion_tblInput | images_tblCreateOrConnectWithoutHabitacion_tblInput[]
    upsert?: images_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput | images_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput[]
    createMany?: images_tblCreateManyHabitacion_tblInputEnvelope
    set?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    disconnect?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    delete?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    connect?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    update?: images_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput | images_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput[]
    updateMany?: images_tblUpdateManyWithWhereWithoutHabitacion_tblInput | images_tblUpdateManyWithWhereWithoutHabitacion_tblInput[]
    deleteMany?: images_tblScalarWhereInput | images_tblScalarWhereInput[]
  }

  export type reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput> | reserva_habitacion_tblCreateWithoutHabitacion_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput | reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput[]
    upsert?: reserva_habitacion_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput | reserva_habitacion_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyHabitacion_tblInputEnvelope
    set?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    disconnect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    delete?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    update?: reserva_habitacion_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput | reserva_habitacion_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput[]
    updateMany?: reserva_habitacion_tblUpdateManyWithWhereWithoutHabitacion_tblInput | reserva_habitacion_tblUpdateManyWithWhereWithoutHabitacion_tblInput[]
    deleteMany?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
  }

  export type servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblNestedInput = {
    create?: XOR<servicio_habitacionCreateWithoutHabitacion_tblInput, servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput> | servicio_habitacionCreateWithoutHabitacion_tblInput[] | servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput | servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput[]
    upsert?: servicio_habitacionUpsertWithWhereUniqueWithoutHabitacion_tblInput | servicio_habitacionUpsertWithWhereUniqueWithoutHabitacion_tblInput[]
    createMany?: servicio_habitacionCreateManyHabitacion_tblInputEnvelope
    set?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    disconnect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    delete?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    update?: servicio_habitacionUpdateWithWhereUniqueWithoutHabitacion_tblInput | servicio_habitacionUpdateWithWhereUniqueWithoutHabitacion_tblInput[]
    updateMany?: servicio_habitacionUpdateManyWithWhereWithoutHabitacion_tblInput | servicio_habitacionUpdateManyWithWhereWithoutHabitacion_tblInput[]
    deleteMany?: servicio_habitacionScalarWhereInput | servicio_habitacionScalarWhereInput[]
  }

  export type images_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput = {
    create?: XOR<images_tblCreateWithoutHabitacion_tblInput, images_tblUncheckedCreateWithoutHabitacion_tblInput> | images_tblCreateWithoutHabitacion_tblInput[] | images_tblUncheckedCreateWithoutHabitacion_tblInput[]
    connectOrCreate?: images_tblCreateOrConnectWithoutHabitacion_tblInput | images_tblCreateOrConnectWithoutHabitacion_tblInput[]
    upsert?: images_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput | images_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput[]
    createMany?: images_tblCreateManyHabitacion_tblInputEnvelope
    set?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    disconnect?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    delete?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    connect?: images_tblWhereUniqueInput | images_tblWhereUniqueInput[]
    update?: images_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput | images_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput[]
    updateMany?: images_tblUpdateManyWithWhereWithoutHabitacion_tblInput | images_tblUpdateManyWithWhereWithoutHabitacion_tblInput[]
    deleteMany?: images_tblScalarWhereInput | images_tblScalarWhereInput[]
  }

  export type estados_tblCreateNestedOneWithoutReserva_habitacion_tblInput = {
    create?: XOR<estados_tblCreateWithoutReserva_habitacion_tblInput, estados_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    connectOrCreate?: estados_tblCreateOrConnectWithoutReserva_habitacion_tblInput
    connect?: estados_tblWhereUniqueInput
  }

  export type habitacion_tblCreateNestedOneWithoutReserva_habitacion_tblInput = {
    create?: XOR<habitacion_tblCreateWithoutReserva_habitacion_tblInput, habitacion_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutReserva_habitacion_tblInput
    connect?: habitacion_tblWhereUniqueInput
  }

  export type reserva_tblCreateNestedOneWithoutReserva_habitacion_tblInput = {
    create?: XOR<reserva_tblCreateWithoutReserva_habitacion_tblInput, reserva_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    connectOrCreate?: reserva_tblCreateOrConnectWithoutReserva_habitacion_tblInput
    connect?: reserva_tblWhereUniqueInput
  }

  export type estados_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput = {
    create?: XOR<estados_tblCreateWithoutReserva_habitacion_tblInput, estados_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    connectOrCreate?: estados_tblCreateOrConnectWithoutReserva_habitacion_tblInput
    upsert?: estados_tblUpsertWithoutReserva_habitacion_tblInput
    connect?: estados_tblWhereUniqueInput
    update?: XOR<XOR<estados_tblUpdateToOneWithWhereWithoutReserva_habitacion_tblInput, estados_tblUpdateWithoutReserva_habitacion_tblInput>, estados_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
  }

  export type habitacion_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput = {
    create?: XOR<habitacion_tblCreateWithoutReserva_habitacion_tblInput, habitacion_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutReserva_habitacion_tblInput
    upsert?: habitacion_tblUpsertWithoutReserva_habitacion_tblInput
    connect?: habitacion_tblWhereUniqueInput
    update?: XOR<XOR<habitacion_tblUpdateToOneWithWhereWithoutReserva_habitacion_tblInput, habitacion_tblUpdateWithoutReserva_habitacion_tblInput>, habitacion_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
  }

  export type reserva_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput = {
    create?: XOR<reserva_tblCreateWithoutReserva_habitacion_tblInput, reserva_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    connectOrCreate?: reserva_tblCreateOrConnectWithoutReserva_habitacion_tblInput
    upsert?: reserva_tblUpsertWithoutReserva_habitacion_tblInput
    connect?: reserva_tblWhereUniqueInput
    update?: XOR<XOR<reserva_tblUpdateToOneWithWhereWithoutReserva_habitacion_tblInput, reserva_tblUpdateWithoutReserva_habitacion_tblInput>, reserva_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
  }

  export type reserva_habitacion_tblCreateNestedManyWithoutReserva_tblInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput> | reserva_habitacion_tblCreateWithoutReserva_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput | reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyReserva_tblInputEnvelope
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
  }

  export type estados_tblCreateNestedOneWithoutReserva_tblInput = {
    create?: XOR<estados_tblCreateWithoutReserva_tblInput, estados_tblUncheckedCreateWithoutReserva_tblInput>
    connectOrCreate?: estados_tblCreateOrConnectWithoutReserva_tblInput
    connect?: estados_tblWhereUniqueInput
  }

  export type usuario_tblCreateNestedOneWithoutReserva_tblInput = {
    create?: XOR<usuario_tblCreateWithoutReserva_tblInput, usuario_tblUncheckedCreateWithoutReserva_tblInput>
    connectOrCreate?: usuario_tblCreateOrConnectWithoutReserva_tblInput
    connect?: usuario_tblWhereUniqueInput
  }

  export type reserva_habitacion_tblUncheckedCreateNestedManyWithoutReserva_tblInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput> | reserva_habitacion_tblCreateWithoutReserva_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput | reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyReserva_tblInputEnvelope
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reserva_habitacion_tblUpdateManyWithoutReserva_tblNestedInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput> | reserva_habitacion_tblCreateWithoutReserva_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput | reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput[]
    upsert?: reserva_habitacion_tblUpsertWithWhereUniqueWithoutReserva_tblInput | reserva_habitacion_tblUpsertWithWhereUniqueWithoutReserva_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyReserva_tblInputEnvelope
    set?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    disconnect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    delete?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    update?: reserva_habitacion_tblUpdateWithWhereUniqueWithoutReserva_tblInput | reserva_habitacion_tblUpdateWithWhereUniqueWithoutReserva_tblInput[]
    updateMany?: reserva_habitacion_tblUpdateManyWithWhereWithoutReserva_tblInput | reserva_habitacion_tblUpdateManyWithWhereWithoutReserva_tblInput[]
    deleteMany?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
  }

  export type estados_tblUpdateOneRequiredWithoutReserva_tblNestedInput = {
    create?: XOR<estados_tblCreateWithoutReserva_tblInput, estados_tblUncheckedCreateWithoutReserva_tblInput>
    connectOrCreate?: estados_tblCreateOrConnectWithoutReserva_tblInput
    upsert?: estados_tblUpsertWithoutReserva_tblInput
    connect?: estados_tblWhereUniqueInput
    update?: XOR<XOR<estados_tblUpdateToOneWithWhereWithoutReserva_tblInput, estados_tblUpdateWithoutReserva_tblInput>, estados_tblUncheckedUpdateWithoutReserva_tblInput>
  }

  export type usuario_tblUpdateOneRequiredWithoutReserva_tblNestedInput = {
    create?: XOR<usuario_tblCreateWithoutReserva_tblInput, usuario_tblUncheckedCreateWithoutReserva_tblInput>
    connectOrCreate?: usuario_tblCreateOrConnectWithoutReserva_tblInput
    upsert?: usuario_tblUpsertWithoutReserva_tblInput
    connect?: usuario_tblWhereUniqueInput
    update?: XOR<XOR<usuario_tblUpdateToOneWithWhereWithoutReserva_tblInput, usuario_tblUpdateWithoutReserva_tblInput>, usuario_tblUncheckedUpdateWithoutReserva_tblInput>
  }

  export type reserva_habitacion_tblUncheckedUpdateManyWithoutReserva_tblNestedInput = {
    create?: XOR<reserva_habitacion_tblCreateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput> | reserva_habitacion_tblCreateWithoutReserva_tblInput[] | reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput[]
    connectOrCreate?: reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput | reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput[]
    upsert?: reserva_habitacion_tblUpsertWithWhereUniqueWithoutReserva_tblInput | reserva_habitacion_tblUpsertWithWhereUniqueWithoutReserva_tblInput[]
    createMany?: reserva_habitacion_tblCreateManyReserva_tblInputEnvelope
    set?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    disconnect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    delete?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    connect?: reserva_habitacion_tblWhereUniqueInput | reserva_habitacion_tblWhereUniqueInput[]
    update?: reserva_habitacion_tblUpdateWithWhereUniqueWithoutReserva_tblInput | reserva_habitacion_tblUpdateWithWhereUniqueWithoutReserva_tblInput[]
    updateMany?: reserva_habitacion_tblUpdateManyWithWhereWithoutReserva_tblInput | reserva_habitacion_tblUpdateManyWithWhereWithoutReserva_tblInput[]
    deleteMany?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
  }

  export type habitacion_tblCreateNestedOneWithoutServicio_habitacionInput = {
    create?: XOR<habitacion_tblCreateWithoutServicio_habitacionInput, habitacion_tblUncheckedCreateWithoutServicio_habitacionInput>
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutServicio_habitacionInput
    connect?: habitacion_tblWhereUniqueInput
  }

  export type servicio_tblCreateNestedOneWithoutServicio_habitacionInput = {
    create?: XOR<servicio_tblCreateWithoutServicio_habitacionInput, servicio_tblUncheckedCreateWithoutServicio_habitacionInput>
    connectOrCreate?: servicio_tblCreateOrConnectWithoutServicio_habitacionInput
    connect?: servicio_tblWhereUniqueInput
  }

  export type habitacion_tblUpdateOneRequiredWithoutServicio_habitacionNestedInput = {
    create?: XOR<habitacion_tblCreateWithoutServicio_habitacionInput, habitacion_tblUncheckedCreateWithoutServicio_habitacionInput>
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutServicio_habitacionInput
    upsert?: habitacion_tblUpsertWithoutServicio_habitacionInput
    connect?: habitacion_tblWhereUniqueInput
    update?: XOR<XOR<habitacion_tblUpdateToOneWithWhereWithoutServicio_habitacionInput, habitacion_tblUpdateWithoutServicio_habitacionInput>, habitacion_tblUncheckedUpdateWithoutServicio_habitacionInput>
  }

  export type servicio_tblUpdateOneRequiredWithoutServicio_habitacionNestedInput = {
    create?: XOR<servicio_tblCreateWithoutServicio_habitacionInput, servicio_tblUncheckedCreateWithoutServicio_habitacionInput>
    connectOrCreate?: servicio_tblCreateOrConnectWithoutServicio_habitacionInput
    upsert?: servicio_tblUpsertWithoutServicio_habitacionInput
    connect?: servicio_tblWhereUniqueInput
    update?: XOR<XOR<servicio_tblUpdateToOneWithWhereWithoutServicio_habitacionInput, servicio_tblUpdateWithoutServicio_habitacionInput>, servicio_tblUncheckedUpdateWithoutServicio_habitacionInput>
  }

  export type servicio_tblCreateNestedManyWithoutTipo_servicio_tblInput = {
    create?: XOR<servicio_tblCreateWithoutTipo_servicio_tblInput, servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput> | servicio_tblCreateWithoutTipo_servicio_tblInput[] | servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput[]
    connectOrCreate?: servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput | servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput[]
    createMany?: servicio_tblCreateManyTipo_servicio_tblInputEnvelope
    connect?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
  }

  export type servicio_tblUncheckedCreateNestedManyWithoutTipo_servicio_tblInput = {
    create?: XOR<servicio_tblCreateWithoutTipo_servicio_tblInput, servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput> | servicio_tblCreateWithoutTipo_servicio_tblInput[] | servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput[]
    connectOrCreate?: servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput | servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput[]
    createMany?: servicio_tblCreateManyTipo_servicio_tblInputEnvelope
    connect?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
  }

  export type servicio_tblUpdateManyWithoutTipo_servicio_tblNestedInput = {
    create?: XOR<servicio_tblCreateWithoutTipo_servicio_tblInput, servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput> | servicio_tblCreateWithoutTipo_servicio_tblInput[] | servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput[]
    connectOrCreate?: servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput | servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput[]
    upsert?: servicio_tblUpsertWithWhereUniqueWithoutTipo_servicio_tblInput | servicio_tblUpsertWithWhereUniqueWithoutTipo_servicio_tblInput[]
    createMany?: servicio_tblCreateManyTipo_servicio_tblInputEnvelope
    set?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    disconnect?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    delete?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    connect?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    update?: servicio_tblUpdateWithWhereUniqueWithoutTipo_servicio_tblInput | servicio_tblUpdateWithWhereUniqueWithoutTipo_servicio_tblInput[]
    updateMany?: servicio_tblUpdateManyWithWhereWithoutTipo_servicio_tblInput | servicio_tblUpdateManyWithWhereWithoutTipo_servicio_tblInput[]
    deleteMany?: servicio_tblScalarWhereInput | servicio_tblScalarWhereInput[]
  }

  export type servicio_tblUncheckedUpdateManyWithoutTipo_servicio_tblNestedInput = {
    create?: XOR<servicio_tblCreateWithoutTipo_servicio_tblInput, servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput> | servicio_tblCreateWithoutTipo_servicio_tblInput[] | servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput[]
    connectOrCreate?: servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput | servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput[]
    upsert?: servicio_tblUpsertWithWhereUniqueWithoutTipo_servicio_tblInput | servicio_tblUpsertWithWhereUniqueWithoutTipo_servicio_tblInput[]
    createMany?: servicio_tblCreateManyTipo_servicio_tblInputEnvelope
    set?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    disconnect?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    delete?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    connect?: servicio_tblWhereUniqueInput | servicio_tblWhereUniqueInput[]
    update?: servicio_tblUpdateWithWhereUniqueWithoutTipo_servicio_tblInput | servicio_tblUpdateWithWhereUniqueWithoutTipo_servicio_tblInput[]
    updateMany?: servicio_tblUpdateManyWithWhereWithoutTipo_servicio_tblInput | servicio_tblUpdateManyWithWhereWithoutTipo_servicio_tblInput[]
    deleteMany?: servicio_tblScalarWhereInput | servicio_tblScalarWhereInput[]
  }

  export type servicio_habitacionCreateNestedManyWithoutServicio_tblInput = {
    create?: XOR<servicio_habitacionCreateWithoutServicio_tblInput, servicio_habitacionUncheckedCreateWithoutServicio_tblInput> | servicio_habitacionCreateWithoutServicio_tblInput[] | servicio_habitacionUncheckedCreateWithoutServicio_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutServicio_tblInput | servicio_habitacionCreateOrConnectWithoutServicio_tblInput[]
    createMany?: servicio_habitacionCreateManyServicio_tblInputEnvelope
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
  }

  export type tipo_servicio_tblCreateNestedOneWithoutServicio_tblInput = {
    create?: XOR<tipo_servicio_tblCreateWithoutServicio_tblInput, tipo_servicio_tblUncheckedCreateWithoutServicio_tblInput>
    connectOrCreate?: tipo_servicio_tblCreateOrConnectWithoutServicio_tblInput
    connect?: tipo_servicio_tblWhereUniqueInput
  }

  export type servicio_habitacionUncheckedCreateNestedManyWithoutServicio_tblInput = {
    create?: XOR<servicio_habitacionCreateWithoutServicio_tblInput, servicio_habitacionUncheckedCreateWithoutServicio_tblInput> | servicio_habitacionCreateWithoutServicio_tblInput[] | servicio_habitacionUncheckedCreateWithoutServicio_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutServicio_tblInput | servicio_habitacionCreateOrConnectWithoutServicio_tblInput[]
    createMany?: servicio_habitacionCreateManyServicio_tblInputEnvelope
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
  }

  export type servicio_habitacionUpdateManyWithoutServicio_tblNestedInput = {
    create?: XOR<servicio_habitacionCreateWithoutServicio_tblInput, servicio_habitacionUncheckedCreateWithoutServicio_tblInput> | servicio_habitacionCreateWithoutServicio_tblInput[] | servicio_habitacionUncheckedCreateWithoutServicio_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutServicio_tblInput | servicio_habitacionCreateOrConnectWithoutServicio_tblInput[]
    upsert?: servicio_habitacionUpsertWithWhereUniqueWithoutServicio_tblInput | servicio_habitacionUpsertWithWhereUniqueWithoutServicio_tblInput[]
    createMany?: servicio_habitacionCreateManyServicio_tblInputEnvelope
    set?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    disconnect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    delete?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    update?: servicio_habitacionUpdateWithWhereUniqueWithoutServicio_tblInput | servicio_habitacionUpdateWithWhereUniqueWithoutServicio_tblInput[]
    updateMany?: servicio_habitacionUpdateManyWithWhereWithoutServicio_tblInput | servicio_habitacionUpdateManyWithWhereWithoutServicio_tblInput[]
    deleteMany?: servicio_habitacionScalarWhereInput | servicio_habitacionScalarWhereInput[]
  }

  export type tipo_servicio_tblUpdateOneRequiredWithoutServicio_tblNestedInput = {
    create?: XOR<tipo_servicio_tblCreateWithoutServicio_tblInput, tipo_servicio_tblUncheckedCreateWithoutServicio_tblInput>
    connectOrCreate?: tipo_servicio_tblCreateOrConnectWithoutServicio_tblInput
    upsert?: tipo_servicio_tblUpsertWithoutServicio_tblInput
    connect?: tipo_servicio_tblWhereUniqueInput
    update?: XOR<XOR<tipo_servicio_tblUpdateToOneWithWhereWithoutServicio_tblInput, tipo_servicio_tblUpdateWithoutServicio_tblInput>, tipo_servicio_tblUncheckedUpdateWithoutServicio_tblInput>
  }

  export type servicio_habitacionUncheckedUpdateManyWithoutServicio_tblNestedInput = {
    create?: XOR<servicio_habitacionCreateWithoutServicio_tblInput, servicio_habitacionUncheckedCreateWithoutServicio_tblInput> | servicio_habitacionCreateWithoutServicio_tblInput[] | servicio_habitacionUncheckedCreateWithoutServicio_tblInput[]
    connectOrCreate?: servicio_habitacionCreateOrConnectWithoutServicio_tblInput | servicio_habitacionCreateOrConnectWithoutServicio_tblInput[]
    upsert?: servicio_habitacionUpsertWithWhereUniqueWithoutServicio_tblInput | servicio_habitacionUpsertWithWhereUniqueWithoutServicio_tblInput[]
    createMany?: servicio_habitacionCreateManyServicio_tblInputEnvelope
    set?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    disconnect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    delete?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    connect?: servicio_habitacionWhereUniqueInput | servicio_habitacionWhereUniqueInput[]
    update?: servicio_habitacionUpdateWithWhereUniqueWithoutServicio_tblInput | servicio_habitacionUpdateWithWhereUniqueWithoutServicio_tblInput[]
    updateMany?: servicio_habitacionUpdateManyWithWhereWithoutServicio_tblInput | servicio_habitacionUpdateManyWithWhereWithoutServicio_tblInput[]
    deleteMany?: servicio_habitacionScalarWhereInput | servicio_habitacionScalarWhereInput[]
  }

  export type habitacion_tblCreateNestedManyWithoutTipo_alojamiento_tblInput = {
    create?: XOR<habitacion_tblCreateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput> | habitacion_tblCreateWithoutTipo_alojamiento_tblInput[] | habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput[]
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput | habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput[]
    createMany?: habitacion_tblCreateManyTipo_alojamiento_tblInputEnvelope
    connect?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
  }

  export type habitacion_tblUncheckedCreateNestedManyWithoutTipo_alojamiento_tblInput = {
    create?: XOR<habitacion_tblCreateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput> | habitacion_tblCreateWithoutTipo_alojamiento_tblInput[] | habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput[]
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput | habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput[]
    createMany?: habitacion_tblCreateManyTipo_alojamiento_tblInputEnvelope
    connect?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
  }

  export type habitacion_tblUpdateManyWithoutTipo_alojamiento_tblNestedInput = {
    create?: XOR<habitacion_tblCreateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput> | habitacion_tblCreateWithoutTipo_alojamiento_tblInput[] | habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput[]
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput | habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput[]
    upsert?: habitacion_tblUpsertWithWhereUniqueWithoutTipo_alojamiento_tblInput | habitacion_tblUpsertWithWhereUniqueWithoutTipo_alojamiento_tblInput[]
    createMany?: habitacion_tblCreateManyTipo_alojamiento_tblInputEnvelope
    set?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    disconnect?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    delete?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    connect?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    update?: habitacion_tblUpdateWithWhereUniqueWithoutTipo_alojamiento_tblInput | habitacion_tblUpdateWithWhereUniqueWithoutTipo_alojamiento_tblInput[]
    updateMany?: habitacion_tblUpdateManyWithWhereWithoutTipo_alojamiento_tblInput | habitacion_tblUpdateManyWithWhereWithoutTipo_alojamiento_tblInput[]
    deleteMany?: habitacion_tblScalarWhereInput | habitacion_tblScalarWhereInput[]
  }

  export type habitacion_tblUncheckedUpdateManyWithoutTipo_alojamiento_tblNestedInput = {
    create?: XOR<habitacion_tblCreateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput> | habitacion_tblCreateWithoutTipo_alojamiento_tblInput[] | habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput[]
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput | habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput[]
    upsert?: habitacion_tblUpsertWithWhereUniqueWithoutTipo_alojamiento_tblInput | habitacion_tblUpsertWithWhereUniqueWithoutTipo_alojamiento_tblInput[]
    createMany?: habitacion_tblCreateManyTipo_alojamiento_tblInputEnvelope
    set?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    disconnect?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    delete?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    connect?: habitacion_tblWhereUniqueInput | habitacion_tblWhereUniqueInput[]
    update?: habitacion_tblUpdateWithWhereUniqueWithoutTipo_alojamiento_tblInput | habitacion_tblUpdateWithWhereUniqueWithoutTipo_alojamiento_tblInput[]
    updateMany?: habitacion_tblUpdateManyWithWhereWithoutTipo_alojamiento_tblInput | habitacion_tblUpdateManyWithWhereWithoutTipo_alojamiento_tblInput[]
    deleteMany?: habitacion_tblScalarWhereInput | habitacion_tblScalarWhereInput[]
  }

  export type reserva_tblCreateNestedManyWithoutUsuario_tblInput = {
    create?: XOR<reserva_tblCreateWithoutUsuario_tblInput, reserva_tblUncheckedCreateWithoutUsuario_tblInput> | reserva_tblCreateWithoutUsuario_tblInput[] | reserva_tblUncheckedCreateWithoutUsuario_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutUsuario_tblInput | reserva_tblCreateOrConnectWithoutUsuario_tblInput[]
    createMany?: reserva_tblCreateManyUsuario_tblInputEnvelope
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
  }

  export type reserva_tblUncheckedCreateNestedManyWithoutUsuario_tblInput = {
    create?: XOR<reserva_tblCreateWithoutUsuario_tblInput, reserva_tblUncheckedCreateWithoutUsuario_tblInput> | reserva_tblCreateWithoutUsuario_tblInput[] | reserva_tblUncheckedCreateWithoutUsuario_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutUsuario_tblInput | reserva_tblCreateOrConnectWithoutUsuario_tblInput[]
    createMany?: reserva_tblCreateManyUsuario_tblInputEnvelope
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type reserva_tblUpdateManyWithoutUsuario_tblNestedInput = {
    create?: XOR<reserva_tblCreateWithoutUsuario_tblInput, reserva_tblUncheckedCreateWithoutUsuario_tblInput> | reserva_tblCreateWithoutUsuario_tblInput[] | reserva_tblUncheckedCreateWithoutUsuario_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutUsuario_tblInput | reserva_tblCreateOrConnectWithoutUsuario_tblInput[]
    upsert?: reserva_tblUpsertWithWhereUniqueWithoutUsuario_tblInput | reserva_tblUpsertWithWhereUniqueWithoutUsuario_tblInput[]
    createMany?: reserva_tblCreateManyUsuario_tblInputEnvelope
    set?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    disconnect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    delete?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    update?: reserva_tblUpdateWithWhereUniqueWithoutUsuario_tblInput | reserva_tblUpdateWithWhereUniqueWithoutUsuario_tblInput[]
    updateMany?: reserva_tblUpdateManyWithWhereWithoutUsuario_tblInput | reserva_tblUpdateManyWithWhereWithoutUsuario_tblInput[]
    deleteMany?: reserva_tblScalarWhereInput | reserva_tblScalarWhereInput[]
  }

  export type reserva_tblUncheckedUpdateManyWithoutUsuario_tblNestedInput = {
    create?: XOR<reserva_tblCreateWithoutUsuario_tblInput, reserva_tblUncheckedCreateWithoutUsuario_tblInput> | reserva_tblCreateWithoutUsuario_tblInput[] | reserva_tblUncheckedCreateWithoutUsuario_tblInput[]
    connectOrCreate?: reserva_tblCreateOrConnectWithoutUsuario_tblInput | reserva_tblCreateOrConnectWithoutUsuario_tblInput[]
    upsert?: reserva_tblUpsertWithWhereUniqueWithoutUsuario_tblInput | reserva_tblUpsertWithWhereUniqueWithoutUsuario_tblInput[]
    createMany?: reserva_tblCreateManyUsuario_tblInputEnvelope
    set?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    disconnect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    delete?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    connect?: reserva_tblWhereUniqueInput | reserva_tblWhereUniqueInput[]
    update?: reserva_tblUpdateWithWhereUniqueWithoutUsuario_tblInput | reserva_tblUpdateWithWhereUniqueWithoutUsuario_tblInput[]
    updateMany?: reserva_tblUpdateManyWithWhereWithoutUsuario_tblInput | reserva_tblUpdateManyWithWhereWithoutUsuario_tblInput[]
    deleteMany?: reserva_tblScalarWhereInput | reserva_tblScalarWhereInput[]
  }

  export type habitacion_tblCreateNestedOneWithoutImages_tblInput = {
    create?: XOR<habitacion_tblCreateWithoutImages_tblInput, habitacion_tblUncheckedCreateWithoutImages_tblInput>
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutImages_tblInput
    connect?: habitacion_tblWhereUniqueInput
  }

  export type habitacion_tblUpdateOneRequiredWithoutImages_tblNestedInput = {
    create?: XOR<habitacion_tblCreateWithoutImages_tblInput, habitacion_tblUncheckedCreateWithoutImages_tblInput>
    connectOrCreate?: habitacion_tblCreateOrConnectWithoutImages_tblInput
    upsert?: habitacion_tblUpsertWithoutImages_tblInput
    connect?: habitacion_tblWhereUniqueInput
    update?: XOR<XOR<habitacion_tblUpdateToOneWithWhereWithoutImages_tblInput, habitacion_tblUpdateWithoutImages_tblInput>, habitacion_tblUncheckedUpdateWithoutImages_tblInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type grupo_estados_tblCreateWithoutEstados_tblInput = {
    nom_grupo_estado?: string | null
    cod_grupo_estado?: string | null
    ind_hab_grupo_estado?: number | null
  }

  export type grupo_estados_tblUncheckedCreateWithoutEstados_tblInput = {
    id_grupo_estado?: number
    nom_grupo_estado?: string | null
    cod_grupo_estado?: string | null
    ind_hab_grupo_estado?: number | null
  }

  export type grupo_estados_tblCreateOrConnectWithoutEstados_tblInput = {
    where: grupo_estados_tblWhereUniqueInput
    create: XOR<grupo_estados_tblCreateWithoutEstados_tblInput, grupo_estados_tblUncheckedCreateWithoutEstados_tblInput>
  }

  export type reserva_habitacion_tblCreateWithoutEstados_tblInput = {
    habitacion_tbl: habitacion_tblCreateNestedOneWithoutReserva_habitacion_tblInput
    reserva_tbl: reserva_tblCreateNestedOneWithoutReserva_habitacion_tblInput
  }

  export type reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
  }

  export type reserva_habitacion_tblCreateOrConnectWithoutEstados_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    create: XOR<reserva_habitacion_tblCreateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput>
  }

  export type reserva_habitacion_tblCreateManyEstados_tblInputEnvelope = {
    data: reserva_habitacion_tblCreateManyEstados_tblInput | reserva_habitacion_tblCreateManyEstados_tblInput[]
    skipDuplicates?: boolean
  }

  export type reserva_tblCreateWithoutEstados_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutReserva_tblInput
    usuario_tbl: usuario_tblCreateNestedOneWithoutReserva_tblInput
  }

  export type reserva_tblUncheckedCreateWithoutEstados_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_usuario_reserva: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutReserva_tblInput
  }

  export type reserva_tblCreateOrConnectWithoutEstados_tblInput = {
    where: reserva_tblWhereUniqueInput
    create: XOR<reserva_tblCreateWithoutEstados_tblInput, reserva_tblUncheckedCreateWithoutEstados_tblInput>
  }

  export type reserva_tblCreateManyEstados_tblInputEnvelope = {
    data: reserva_tblCreateManyEstados_tblInput | reserva_tblCreateManyEstados_tblInput[]
    skipDuplicates?: boolean
  }

  export type grupo_estados_tblUpsertWithoutEstados_tblInput = {
    update: XOR<grupo_estados_tblUpdateWithoutEstados_tblInput, grupo_estados_tblUncheckedUpdateWithoutEstados_tblInput>
    create: XOR<grupo_estados_tblCreateWithoutEstados_tblInput, grupo_estados_tblUncheckedCreateWithoutEstados_tblInput>
    where?: grupo_estados_tblWhereInput
  }

  export type grupo_estados_tblUpdateToOneWithWhereWithoutEstados_tblInput = {
    where?: grupo_estados_tblWhereInput
    data: XOR<grupo_estados_tblUpdateWithoutEstados_tblInput, grupo_estados_tblUncheckedUpdateWithoutEstados_tblInput>
  }

  export type grupo_estados_tblUpdateWithoutEstados_tblInput = {
    nom_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    cod_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_grupo_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type grupo_estados_tblUncheckedUpdateWithoutEstados_tblInput = {
    id_grupo_estado?: IntFieldUpdateOperationsInput | number
    nom_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    cod_grupo_estado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_grupo_estado?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reserva_habitacion_tblUpsertWithWhereUniqueWithoutEstados_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    update: XOR<reserva_habitacion_tblUpdateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedUpdateWithoutEstados_tblInput>
    create: XOR<reserva_habitacion_tblCreateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedCreateWithoutEstados_tblInput>
  }

  export type reserva_habitacion_tblUpdateWithWhereUniqueWithoutEstados_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    data: XOR<reserva_habitacion_tblUpdateWithoutEstados_tblInput, reserva_habitacion_tblUncheckedUpdateWithoutEstados_tblInput>
  }

  export type reserva_habitacion_tblUpdateManyWithWhereWithoutEstados_tblInput = {
    where: reserva_habitacion_tblScalarWhereInput
    data: XOR<reserva_habitacion_tblUpdateManyMutationInput, reserva_habitacion_tblUncheckedUpdateManyWithoutEstados_tblInput>
  }

  export type reserva_habitacion_tblScalarWhereInput = {
    AND?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
    OR?: reserva_habitacion_tblScalarWhereInput[]
    NOT?: reserva_habitacion_tblScalarWhereInput | reserva_habitacion_tblScalarWhereInput[]
    id_reserva_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    id_habitacion_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
    id_estado_reserva_habitacion?: IntFilter<"reserva_habitacion_tbl"> | number
  }

  export type reserva_tblUpsertWithWhereUniqueWithoutEstados_tblInput = {
    where: reserva_tblWhereUniqueInput
    update: XOR<reserva_tblUpdateWithoutEstados_tblInput, reserva_tblUncheckedUpdateWithoutEstados_tblInput>
    create: XOR<reserva_tblCreateWithoutEstados_tblInput, reserva_tblUncheckedCreateWithoutEstados_tblInput>
  }

  export type reserva_tblUpdateWithWhereUniqueWithoutEstados_tblInput = {
    where: reserva_tblWhereUniqueInput
    data: XOR<reserva_tblUpdateWithoutEstados_tblInput, reserva_tblUncheckedUpdateWithoutEstados_tblInput>
  }

  export type reserva_tblUpdateManyWithWhereWithoutEstados_tblInput = {
    where: reserva_tblScalarWhereInput
    data: XOR<reserva_tblUpdateManyMutationInput, reserva_tblUncheckedUpdateManyWithoutEstados_tblInput>
  }

  export type reserva_tblScalarWhereInput = {
    AND?: reserva_tblScalarWhereInput | reserva_tblScalarWhereInput[]
    OR?: reserva_tblScalarWhereInput[]
    NOT?: reserva_tblScalarWhereInput | reserva_tblScalarWhereInput[]
    id_reserva?: IntFilter<"reserva_tbl"> | number
    fec_ent_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    fec_sal_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    des_reserva?: StringNullableFilter<"reserva_tbl"> | string | null
    can_per_reserva?: IntNullableFilter<"reserva_tbl"> | number | null
    cos_tot_reserva?: FloatNullableFilter<"reserva_tbl"> | number | null
    fec_reg_reserva?: DateTimeNullableFilter<"reserva_tbl"> | Date | string | null
    id_estado_reserva?: IntFilter<"reserva_tbl"> | number
    id_usuario_reserva?: IntFilter<"reserva_tbl"> | number
  }

  export type estados_tblCreateWithoutGrupo_estados_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutEstados_tblInput
    reserva_tbl?: reserva_tblCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblUncheckedCreateWithoutGrupo_estados_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutEstados_tblInput
    reserva_tbl?: reserva_tblUncheckedCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblCreateOrConnectWithoutGrupo_estados_tblInput = {
    where: estados_tblWhereUniqueInput
    create: XOR<estados_tblCreateWithoutGrupo_estados_tblInput, estados_tblUncheckedCreateWithoutGrupo_estados_tblInput>
  }

  export type estados_tblCreateManyGrupo_estados_tblInputEnvelope = {
    data: estados_tblCreateManyGrupo_estados_tblInput | estados_tblCreateManyGrupo_estados_tblInput[]
    skipDuplicates?: boolean
  }

  export type estados_tblUpsertWithWhereUniqueWithoutGrupo_estados_tblInput = {
    where: estados_tblWhereUniqueInput
    update: XOR<estados_tblUpdateWithoutGrupo_estados_tblInput, estados_tblUncheckedUpdateWithoutGrupo_estados_tblInput>
    create: XOR<estados_tblCreateWithoutGrupo_estados_tblInput, estados_tblUncheckedCreateWithoutGrupo_estados_tblInput>
  }

  export type estados_tblUpdateWithWhereUniqueWithoutGrupo_estados_tblInput = {
    where: estados_tblWhereUniqueInput
    data: XOR<estados_tblUpdateWithoutGrupo_estados_tblInput, estados_tblUncheckedUpdateWithoutGrupo_estados_tblInput>
  }

  export type estados_tblUpdateManyWithWhereWithoutGrupo_estados_tblInput = {
    where: estados_tblScalarWhereInput
    data: XOR<estados_tblUpdateManyMutationInput, estados_tblUncheckedUpdateManyWithoutGrupo_estados_tblInput>
  }

  export type estados_tblScalarWhereInput = {
    AND?: estados_tblScalarWhereInput | estados_tblScalarWhereInput[]
    OR?: estados_tblScalarWhereInput[]
    NOT?: estados_tblScalarWhereInput | estados_tblScalarWhereInput[]
    id_estado?: IntFilter<"estados_tbl"> | number
    nom_estados?: StringNullableFilter<"estados_tbl"> | string | null
    cod_estados?: StringNullableFilter<"estados_tbl"> | string | null
    ind_hab_estados?: IntNullableFilter<"estados_tbl"> | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFilter<"estados_tbl"> | number
  }

  export type tipo_alojamiento_tblCreateWithoutHabitacion_tblInput = {
    nom_tipo_alojamiento?: string | null
    des_tipo_alojamiento?: string | null
    ico_tipo_alojamiento?: string | null
  }

  export type tipo_alojamiento_tblUncheckedCreateWithoutHabitacion_tblInput = {
    id_tipo_alojamiento?: number
    nom_tipo_alojamiento?: string | null
    des_tipo_alojamiento?: string | null
    ico_tipo_alojamiento?: string | null
  }

  export type tipo_alojamiento_tblCreateOrConnectWithoutHabitacion_tblInput = {
    where: tipo_alojamiento_tblWhereUniqueInput
    create: XOR<tipo_alojamiento_tblCreateWithoutHabitacion_tblInput, tipo_alojamiento_tblUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type reserva_habitacion_tblCreateWithoutHabitacion_tblInput = {
    estados_tbl: estados_tblCreateNestedOneWithoutReserva_habitacion_tblInput
    reserva_tbl: reserva_tblCreateNestedOneWithoutReserva_habitacion_tblInput
  }

  export type reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput = {
    id_reserva_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type reserva_habitacion_tblCreateOrConnectWithoutHabitacion_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    create: XOR<reserva_habitacion_tblCreateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type reserva_habitacion_tblCreateManyHabitacion_tblInputEnvelope = {
    data: reserva_habitacion_tblCreateManyHabitacion_tblInput | reserva_habitacion_tblCreateManyHabitacion_tblInput[]
    skipDuplicates?: boolean
  }

  export type servicio_habitacionCreateWithoutHabitacion_tblInput = {
    can_servicio_habitacion?: number | null
    servicio_tbl: servicio_tblCreateNestedOneWithoutServicio_habitacionInput
  }

  export type servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput = {
    id_servicio_servicio_habitacion: number
    can_servicio_habitacion?: number | null
  }

  export type servicio_habitacionCreateOrConnectWithoutHabitacion_tblInput = {
    where: servicio_habitacionWhereUniqueInput
    create: XOR<servicio_habitacionCreateWithoutHabitacion_tblInput, servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type servicio_habitacionCreateManyHabitacion_tblInputEnvelope = {
    data: servicio_habitacionCreateManyHabitacion_tblInput | servicio_habitacionCreateManyHabitacion_tblInput[]
    skipDuplicates?: boolean
  }

  export type images_tblCreateWithoutHabitacion_tblInput = {
    url_image: string
    ind_pri_image?: number | null
  }

  export type images_tblUncheckedCreateWithoutHabitacion_tblInput = {
    id_image?: number
    url_image: string
    ind_pri_image?: number | null
  }

  export type images_tblCreateOrConnectWithoutHabitacion_tblInput = {
    where: images_tblWhereUniqueInput
    create: XOR<images_tblCreateWithoutHabitacion_tblInput, images_tblUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type images_tblCreateManyHabitacion_tblInputEnvelope = {
    data: images_tblCreateManyHabitacion_tblInput | images_tblCreateManyHabitacion_tblInput[]
    skipDuplicates?: boolean
  }

  export type tipo_alojamiento_tblUpsertWithoutHabitacion_tblInput = {
    update: XOR<tipo_alojamiento_tblUpdateWithoutHabitacion_tblInput, tipo_alojamiento_tblUncheckedUpdateWithoutHabitacion_tblInput>
    create: XOR<tipo_alojamiento_tblCreateWithoutHabitacion_tblInput, tipo_alojamiento_tblUncheckedCreateWithoutHabitacion_tblInput>
    where?: tipo_alojamiento_tblWhereInput
  }

  export type tipo_alojamiento_tblUpdateToOneWithWhereWithoutHabitacion_tblInput = {
    where?: tipo_alojamiento_tblWhereInput
    data: XOR<tipo_alojamiento_tblUpdateWithoutHabitacion_tblInput, tipo_alojamiento_tblUncheckedUpdateWithoutHabitacion_tblInput>
  }

  export type tipo_alojamiento_tblUpdateWithoutHabitacion_tblInput = {
    nom_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_alojamiento_tblUncheckedUpdateWithoutHabitacion_tblInput = {
    id_tipo_alojamiento?: IntFieldUpdateOperationsInput | number
    nom_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_alojamiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserva_habitacion_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    update: XOR<reserva_habitacion_tblUpdateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedUpdateWithoutHabitacion_tblInput>
    create: XOR<reserva_habitacion_tblCreateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type reserva_habitacion_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    data: XOR<reserva_habitacion_tblUpdateWithoutHabitacion_tblInput, reserva_habitacion_tblUncheckedUpdateWithoutHabitacion_tblInput>
  }

  export type reserva_habitacion_tblUpdateManyWithWhereWithoutHabitacion_tblInput = {
    where: reserva_habitacion_tblScalarWhereInput
    data: XOR<reserva_habitacion_tblUpdateManyMutationInput, reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblInput>
  }

  export type servicio_habitacionUpsertWithWhereUniqueWithoutHabitacion_tblInput = {
    where: servicio_habitacionWhereUniqueInput
    update: XOR<servicio_habitacionUpdateWithoutHabitacion_tblInput, servicio_habitacionUncheckedUpdateWithoutHabitacion_tblInput>
    create: XOR<servicio_habitacionCreateWithoutHabitacion_tblInput, servicio_habitacionUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type servicio_habitacionUpdateWithWhereUniqueWithoutHabitacion_tblInput = {
    where: servicio_habitacionWhereUniqueInput
    data: XOR<servicio_habitacionUpdateWithoutHabitacion_tblInput, servicio_habitacionUncheckedUpdateWithoutHabitacion_tblInput>
  }

  export type servicio_habitacionUpdateManyWithWhereWithoutHabitacion_tblInput = {
    where: servicio_habitacionScalarWhereInput
    data: XOR<servicio_habitacionUpdateManyMutationInput, servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblInput>
  }

  export type servicio_habitacionScalarWhereInput = {
    AND?: servicio_habitacionScalarWhereInput | servicio_habitacionScalarWhereInput[]
    OR?: servicio_habitacionScalarWhereInput[]
    NOT?: servicio_habitacionScalarWhereInput | servicio_habitacionScalarWhereInput[]
    id_habitacion_servicio_habitacion?: IntFilter<"servicio_habitacion"> | number
    id_servicio_servicio_habitacion?: IntFilter<"servicio_habitacion"> | number
    can_servicio_habitacion?: IntNullableFilter<"servicio_habitacion"> | number | null
  }

  export type images_tblUpsertWithWhereUniqueWithoutHabitacion_tblInput = {
    where: images_tblWhereUniqueInput
    update: XOR<images_tblUpdateWithoutHabitacion_tblInput, images_tblUncheckedUpdateWithoutHabitacion_tblInput>
    create: XOR<images_tblCreateWithoutHabitacion_tblInput, images_tblUncheckedCreateWithoutHabitacion_tblInput>
  }

  export type images_tblUpdateWithWhereUniqueWithoutHabitacion_tblInput = {
    where: images_tblWhereUniqueInput
    data: XOR<images_tblUpdateWithoutHabitacion_tblInput, images_tblUncheckedUpdateWithoutHabitacion_tblInput>
  }

  export type images_tblUpdateManyWithWhereWithoutHabitacion_tblInput = {
    where: images_tblScalarWhereInput
    data: XOR<images_tblUpdateManyMutationInput, images_tblUncheckedUpdateManyWithoutHabitacion_tblInput>
  }

  export type images_tblScalarWhereInput = {
    AND?: images_tblScalarWhereInput | images_tblScalarWhereInput[]
    OR?: images_tblScalarWhereInput[]
    NOT?: images_tblScalarWhereInput | images_tblScalarWhereInput[]
    id_image?: IntFilter<"images_tbl"> | number
    url_image?: StringFilter<"images_tbl"> | string
    ind_pri_image?: IntNullableFilter<"images_tbl"> | number | null
    id_habitacion?: IntFilter<"images_tbl"> | number
  }

  export type estados_tblCreateWithoutReserva_habitacion_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl: grupo_estados_tblCreateNestedOneWithoutEstados_tblInput
    reserva_tbl?: reserva_tblCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblUncheckedCreateWithoutReserva_habitacion_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl_id_grupo_estado: number
    reserva_tbl?: reserva_tblUncheckedCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblCreateOrConnectWithoutReserva_habitacion_tblInput = {
    where: estados_tblWhereUniqueInput
    create: XOR<estados_tblCreateWithoutReserva_habitacion_tblInput, estados_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
  }

  export type habitacion_tblCreateWithoutReserva_habitacion_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    tipo_alojamiento_tbl: tipo_alojamiento_tblCreateNestedOneWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblUncheckedCreateWithoutReserva_habitacion_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    id_tipo_alojamiento_habitacion: number
    servicio_habitacion?: servicio_habitacionUncheckedCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblCreateOrConnectWithoutReserva_habitacion_tblInput = {
    where: habitacion_tblWhereUniqueInput
    create: XOR<habitacion_tblCreateWithoutReserva_habitacion_tblInput, habitacion_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
  }

  export type reserva_tblCreateWithoutReserva_habitacion_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    estados_tbl: estados_tblCreateNestedOneWithoutReserva_tblInput
    usuario_tbl: usuario_tblCreateNestedOneWithoutReserva_tblInput
  }

  export type reserva_tblUncheckedCreateWithoutReserva_habitacion_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_estado_reserva: number
    id_usuario_reserva: number
  }

  export type reserva_tblCreateOrConnectWithoutReserva_habitacion_tblInput = {
    where: reserva_tblWhereUniqueInput
    create: XOR<reserva_tblCreateWithoutReserva_habitacion_tblInput, reserva_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
  }

  export type estados_tblUpsertWithoutReserva_habitacion_tblInput = {
    update: XOR<estados_tblUpdateWithoutReserva_habitacion_tblInput, estados_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
    create: XOR<estados_tblCreateWithoutReserva_habitacion_tblInput, estados_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    where?: estados_tblWhereInput
  }

  export type estados_tblUpdateToOneWithWhereWithoutReserva_habitacion_tblInput = {
    where?: estados_tblWhereInput
    data: XOR<estados_tblUpdateWithoutReserva_habitacion_tblInput, estados_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
  }

  export type estados_tblUpdateWithoutReserva_habitacion_tblInput = {
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl?: grupo_estados_tblUpdateOneRequiredWithoutEstados_tblNestedInput
    reserva_tbl?: reserva_tblUpdateManyWithoutEstados_tblNestedInput
  }

  export type estados_tblUncheckedUpdateWithoutReserva_habitacion_tblInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFieldUpdateOperationsInput | number
    reserva_tbl?: reserva_tblUncheckedUpdateManyWithoutEstados_tblNestedInput
  }

  export type habitacion_tblUpsertWithoutReserva_habitacion_tblInput = {
    update: XOR<habitacion_tblUpdateWithoutReserva_habitacion_tblInput, habitacion_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
    create: XOR<habitacion_tblCreateWithoutReserva_habitacion_tblInput, habitacion_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    where?: habitacion_tblWhereInput
  }

  export type habitacion_tblUpdateToOneWithWhereWithoutReserva_habitacion_tblInput = {
    where?: habitacion_tblWhereInput
    data: XOR<habitacion_tblUpdateWithoutReserva_habitacion_tblInput, habitacion_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
  }

  export type habitacion_tblUpdateWithoutReserva_habitacion_tblInput = {
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_alojamiento_tbl?: tipo_alojamiento_tblUpdateOneRequiredWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblUncheckedUpdateWithoutReserva_habitacion_tblInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_alojamiento_habitacion?: IntFieldUpdateOperationsInput | number
    servicio_habitacion?: servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type reserva_tblUpsertWithoutReserva_habitacion_tblInput = {
    update: XOR<reserva_tblUpdateWithoutReserva_habitacion_tblInput, reserva_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
    create: XOR<reserva_tblCreateWithoutReserva_habitacion_tblInput, reserva_tblUncheckedCreateWithoutReserva_habitacion_tblInput>
    where?: reserva_tblWhereInput
  }

  export type reserva_tblUpdateToOneWithWhereWithoutReserva_habitacion_tblInput = {
    where?: reserva_tblWhereInput
    data: XOR<reserva_tblUpdateWithoutReserva_habitacion_tblInput, reserva_tblUncheckedUpdateWithoutReserva_habitacion_tblInput>
  }

  export type reserva_tblUpdateWithoutReserva_habitacion_tblInput = {
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estados_tbl?: estados_tblUpdateOneRequiredWithoutReserva_tblNestedInput
    usuario_tbl?: usuario_tblUpdateOneRequiredWithoutReserva_tblNestedInput
  }

  export type reserva_tblUncheckedUpdateWithoutReserva_habitacion_tblInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario_reserva?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_habitacion_tblCreateWithoutReserva_tblInput = {
    estados_tbl: estados_tblCreateNestedOneWithoutReserva_habitacion_tblInput
    habitacion_tbl: habitacion_tblCreateNestedOneWithoutReserva_habitacion_tblInput
  }

  export type reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput = {
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type reserva_habitacion_tblCreateOrConnectWithoutReserva_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    create: XOR<reserva_habitacion_tblCreateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput>
  }

  export type reserva_habitacion_tblCreateManyReserva_tblInputEnvelope = {
    data: reserva_habitacion_tblCreateManyReserva_tblInput | reserva_habitacion_tblCreateManyReserva_tblInput[]
    skipDuplicates?: boolean
  }

  export type estados_tblCreateWithoutReserva_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl: grupo_estados_tblCreateNestedOneWithoutEstados_tblInput
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblUncheckedCreateWithoutReserva_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
    grupo_estados_tbl_id_grupo_estado: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutEstados_tblInput
  }

  export type estados_tblCreateOrConnectWithoutReserva_tblInput = {
    where: estados_tblWhereUniqueInput
    create: XOR<estados_tblCreateWithoutReserva_tblInput, estados_tblUncheckedCreateWithoutReserva_tblInput>
  }

  export type usuario_tblCreateWithoutReserva_tblInput = {
    nom_usuario: string
    fec_nac_usuario: Date | string
    tel_usuario: string
    ema_usuario: string
    dir_usuario?: string | null
    tip_doc_usuario: string
    num_doc_usuario: string
    con_usuario: string
  }

  export type usuario_tblUncheckedCreateWithoutReserva_tblInput = {
    id_usuario?: number
    nom_usuario: string
    fec_nac_usuario: Date | string
    tel_usuario: string
    ema_usuario: string
    dir_usuario?: string | null
    tip_doc_usuario: string
    num_doc_usuario: string
    con_usuario: string
  }

  export type usuario_tblCreateOrConnectWithoutReserva_tblInput = {
    where: usuario_tblWhereUniqueInput
    create: XOR<usuario_tblCreateWithoutReserva_tblInput, usuario_tblUncheckedCreateWithoutReserva_tblInput>
  }

  export type reserva_habitacion_tblUpsertWithWhereUniqueWithoutReserva_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    update: XOR<reserva_habitacion_tblUpdateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedUpdateWithoutReserva_tblInput>
    create: XOR<reserva_habitacion_tblCreateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedCreateWithoutReserva_tblInput>
  }

  export type reserva_habitacion_tblUpdateWithWhereUniqueWithoutReserva_tblInput = {
    where: reserva_habitacion_tblWhereUniqueInput
    data: XOR<reserva_habitacion_tblUpdateWithoutReserva_tblInput, reserva_habitacion_tblUncheckedUpdateWithoutReserva_tblInput>
  }

  export type reserva_habitacion_tblUpdateManyWithWhereWithoutReserva_tblInput = {
    where: reserva_habitacion_tblScalarWhereInput
    data: XOR<reserva_habitacion_tblUpdateManyMutationInput, reserva_habitacion_tblUncheckedUpdateManyWithoutReserva_tblInput>
  }

  export type estados_tblUpsertWithoutReserva_tblInput = {
    update: XOR<estados_tblUpdateWithoutReserva_tblInput, estados_tblUncheckedUpdateWithoutReserva_tblInput>
    create: XOR<estados_tblCreateWithoutReserva_tblInput, estados_tblUncheckedCreateWithoutReserva_tblInput>
    where?: estados_tblWhereInput
  }

  export type estados_tblUpdateToOneWithWhereWithoutReserva_tblInput = {
    where?: estados_tblWhereInput
    data: XOR<estados_tblUpdateWithoutReserva_tblInput, estados_tblUncheckedUpdateWithoutReserva_tblInput>
  }

  export type estados_tblUpdateWithoutReserva_tblInput = {
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl?: grupo_estados_tblUpdateOneRequiredWithoutEstados_tblNestedInput
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutEstados_tblNestedInput
  }

  export type estados_tblUncheckedUpdateWithoutReserva_tblInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    grupo_estados_tbl_id_grupo_estado?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutEstados_tblNestedInput
  }

  export type usuario_tblUpsertWithoutReserva_tblInput = {
    update: XOR<usuario_tblUpdateWithoutReserva_tblInput, usuario_tblUncheckedUpdateWithoutReserva_tblInput>
    create: XOR<usuario_tblCreateWithoutReserva_tblInput, usuario_tblUncheckedCreateWithoutReserva_tblInput>
    where?: usuario_tblWhereInput
  }

  export type usuario_tblUpdateToOneWithWhereWithoutReserva_tblInput = {
    where?: usuario_tblWhereInput
    data: XOR<usuario_tblUpdateWithoutReserva_tblInput, usuario_tblUncheckedUpdateWithoutReserva_tblInput>
  }

  export type usuario_tblUpdateWithoutReserva_tblInput = {
    nom_usuario?: StringFieldUpdateOperationsInput | string
    fec_nac_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    tel_usuario?: StringFieldUpdateOperationsInput | string
    ema_usuario?: StringFieldUpdateOperationsInput | string
    dir_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tip_doc_usuario?: StringFieldUpdateOperationsInput | string
    num_doc_usuario?: StringFieldUpdateOperationsInput | string
    con_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_tblUncheckedUpdateWithoutReserva_tblInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nom_usuario?: StringFieldUpdateOperationsInput | string
    fec_nac_usuario?: DateTimeFieldUpdateOperationsInput | Date | string
    tel_usuario?: StringFieldUpdateOperationsInput | string
    ema_usuario?: StringFieldUpdateOperationsInput | string
    dir_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    tip_doc_usuario?: StringFieldUpdateOperationsInput | string
    num_doc_usuario?: StringFieldUpdateOperationsInput | string
    con_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type habitacion_tblCreateWithoutServicio_habitacionInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    tipo_alojamiento_tbl: tipo_alojamiento_tblCreateNestedOneWithoutHabitacion_tblInput
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblUncheckedCreateWithoutServicio_habitacionInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    id_tipo_alojamiento_habitacion: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblCreateOrConnectWithoutServicio_habitacionInput = {
    where: habitacion_tblWhereUniqueInput
    create: XOR<habitacion_tblCreateWithoutServicio_habitacionInput, habitacion_tblUncheckedCreateWithoutServicio_habitacionInput>
  }

  export type servicio_tblCreateWithoutServicio_habitacionInput = {
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    tipo_servicio_tbl: tipo_servicio_tblCreateNestedOneWithoutServicio_tblInput
  }

  export type servicio_tblUncheckedCreateWithoutServicio_habitacionInput = {
    id_servicio?: number
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    id_tipo_servicio: number
  }

  export type servicio_tblCreateOrConnectWithoutServicio_habitacionInput = {
    where: servicio_tblWhereUniqueInput
    create: XOR<servicio_tblCreateWithoutServicio_habitacionInput, servicio_tblUncheckedCreateWithoutServicio_habitacionInput>
  }

  export type habitacion_tblUpsertWithoutServicio_habitacionInput = {
    update: XOR<habitacion_tblUpdateWithoutServicio_habitacionInput, habitacion_tblUncheckedUpdateWithoutServicio_habitacionInput>
    create: XOR<habitacion_tblCreateWithoutServicio_habitacionInput, habitacion_tblUncheckedCreateWithoutServicio_habitacionInput>
    where?: habitacion_tblWhereInput
  }

  export type habitacion_tblUpdateToOneWithWhereWithoutServicio_habitacionInput = {
    where?: habitacion_tblWhereInput
    data: XOR<habitacion_tblUpdateWithoutServicio_habitacionInput, habitacion_tblUncheckedUpdateWithoutServicio_habitacionInput>
  }

  export type habitacion_tblUpdateWithoutServicio_habitacionInput = {
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_alojamiento_tbl?: tipo_alojamiento_tblUpdateOneRequiredWithoutHabitacion_tblNestedInput
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblUncheckedUpdateWithoutServicio_habitacionInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_alojamiento_habitacion?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type servicio_tblUpsertWithoutServicio_habitacionInput = {
    update: XOR<servicio_tblUpdateWithoutServicio_habitacionInput, servicio_tblUncheckedUpdateWithoutServicio_habitacionInput>
    create: XOR<servicio_tblCreateWithoutServicio_habitacionInput, servicio_tblUncheckedCreateWithoutServicio_habitacionInput>
    where?: servicio_tblWhereInput
  }

  export type servicio_tblUpdateToOneWithWhereWithoutServicio_habitacionInput = {
    where?: servicio_tblWhereInput
    data: XOR<servicio_tblUpdateWithoutServicio_habitacionInput, servicio_tblUncheckedUpdateWithoutServicio_habitacionInput>
  }

  export type servicio_tblUpdateWithoutServicio_habitacionInput = {
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_servicio_tbl?: tipo_servicio_tblUpdateOneRequiredWithoutServicio_tblNestedInput
  }

  export type servicio_tblUncheckedUpdateWithoutServicio_habitacionInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    id_tipo_servicio?: IntFieldUpdateOperationsInput | number
  }

  export type servicio_tblCreateWithoutTipo_servicio_tblInput = {
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    servicio_habitacion?: servicio_habitacionCreateNestedManyWithoutServicio_tblInput
  }

  export type servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput = {
    id_servicio?: number
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
    servicio_habitacion?: servicio_habitacionUncheckedCreateNestedManyWithoutServicio_tblInput
  }

  export type servicio_tblCreateOrConnectWithoutTipo_servicio_tblInput = {
    where: servicio_tblWhereUniqueInput
    create: XOR<servicio_tblCreateWithoutTipo_servicio_tblInput, servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput>
  }

  export type servicio_tblCreateManyTipo_servicio_tblInputEnvelope = {
    data: servicio_tblCreateManyTipo_servicio_tblInput | servicio_tblCreateManyTipo_servicio_tblInput[]
    skipDuplicates?: boolean
  }

  export type servicio_tblUpsertWithWhereUniqueWithoutTipo_servicio_tblInput = {
    where: servicio_tblWhereUniqueInput
    update: XOR<servicio_tblUpdateWithoutTipo_servicio_tblInput, servicio_tblUncheckedUpdateWithoutTipo_servicio_tblInput>
    create: XOR<servicio_tblCreateWithoutTipo_servicio_tblInput, servicio_tblUncheckedCreateWithoutTipo_servicio_tblInput>
  }

  export type servicio_tblUpdateWithWhereUniqueWithoutTipo_servicio_tblInput = {
    where: servicio_tblWhereUniqueInput
    data: XOR<servicio_tblUpdateWithoutTipo_servicio_tblInput, servicio_tblUncheckedUpdateWithoutTipo_servicio_tblInput>
  }

  export type servicio_tblUpdateManyWithWhereWithoutTipo_servicio_tblInput = {
    where: servicio_tblScalarWhereInput
    data: XOR<servicio_tblUpdateManyMutationInput, servicio_tblUncheckedUpdateManyWithoutTipo_servicio_tblInput>
  }

  export type servicio_tblScalarWhereInput = {
    AND?: servicio_tblScalarWhereInput | servicio_tblScalarWhereInput[]
    OR?: servicio_tblScalarWhereInput[]
    NOT?: servicio_tblScalarWhereInput | servicio_tblScalarWhereInput[]
    id_servicio?: IntFilter<"servicio_tbl"> | number
    nom_servicio?: StringNullableFilter<"servicio_tbl"> | string | null
    des_servicio?: StringNullableFilter<"servicio_tbl"> | string | null
    pre_servicio?: FloatNullableFilter<"servicio_tbl"> | number | null
    ind_hab_servicio?: IntNullableFilter<"servicio_tbl"> | number | null
    can_per_servicio?: IntNullableFilter<"servicio_tbl"> | number | null
    id_tipo_servicio?: IntFilter<"servicio_tbl"> | number
  }

  export type servicio_habitacionCreateWithoutServicio_tblInput = {
    can_servicio_habitacion?: number | null
    habitacion_tbl: habitacion_tblCreateNestedOneWithoutServicio_habitacionInput
  }

  export type servicio_habitacionUncheckedCreateWithoutServicio_tblInput = {
    id_habitacion_servicio_habitacion: number
    can_servicio_habitacion?: number | null
  }

  export type servicio_habitacionCreateOrConnectWithoutServicio_tblInput = {
    where: servicio_habitacionWhereUniqueInput
    create: XOR<servicio_habitacionCreateWithoutServicio_tblInput, servicio_habitacionUncheckedCreateWithoutServicio_tblInput>
  }

  export type servicio_habitacionCreateManyServicio_tblInputEnvelope = {
    data: servicio_habitacionCreateManyServicio_tblInput | servicio_habitacionCreateManyServicio_tblInput[]
    skipDuplicates?: boolean
  }

  export type tipo_servicio_tblCreateWithoutServicio_tblInput = {
    nom_tipo_servicio?: string | null
    cod_tipo_servicio?: string | null
    des_tipo_servicio?: string | null
    ico_tipo_servicio?: string | null
  }

  export type tipo_servicio_tblUncheckedCreateWithoutServicio_tblInput = {
    id_tipo_servicio?: number
    nom_tipo_servicio?: string | null
    cod_tipo_servicio?: string | null
    des_tipo_servicio?: string | null
    ico_tipo_servicio?: string | null
  }

  export type tipo_servicio_tblCreateOrConnectWithoutServicio_tblInput = {
    where: tipo_servicio_tblWhereUniqueInput
    create: XOR<tipo_servicio_tblCreateWithoutServicio_tblInput, tipo_servicio_tblUncheckedCreateWithoutServicio_tblInput>
  }

  export type servicio_habitacionUpsertWithWhereUniqueWithoutServicio_tblInput = {
    where: servicio_habitacionWhereUniqueInput
    update: XOR<servicio_habitacionUpdateWithoutServicio_tblInput, servicio_habitacionUncheckedUpdateWithoutServicio_tblInput>
    create: XOR<servicio_habitacionCreateWithoutServicio_tblInput, servicio_habitacionUncheckedCreateWithoutServicio_tblInput>
  }

  export type servicio_habitacionUpdateWithWhereUniqueWithoutServicio_tblInput = {
    where: servicio_habitacionWhereUniqueInput
    data: XOR<servicio_habitacionUpdateWithoutServicio_tblInput, servicio_habitacionUncheckedUpdateWithoutServicio_tblInput>
  }

  export type servicio_habitacionUpdateManyWithWhereWithoutServicio_tblInput = {
    where: servicio_habitacionScalarWhereInput
    data: XOR<servicio_habitacionUpdateManyMutationInput, servicio_habitacionUncheckedUpdateManyWithoutServicio_tblInput>
  }

  export type tipo_servicio_tblUpsertWithoutServicio_tblInput = {
    update: XOR<tipo_servicio_tblUpdateWithoutServicio_tblInput, tipo_servicio_tblUncheckedUpdateWithoutServicio_tblInput>
    create: XOR<tipo_servicio_tblCreateWithoutServicio_tblInput, tipo_servicio_tblUncheckedCreateWithoutServicio_tblInput>
    where?: tipo_servicio_tblWhereInput
  }

  export type tipo_servicio_tblUpdateToOneWithWhereWithoutServicio_tblInput = {
    where?: tipo_servicio_tblWhereInput
    data: XOR<tipo_servicio_tblUpdateWithoutServicio_tblInput, tipo_servicio_tblUncheckedUpdateWithoutServicio_tblInput>
  }

  export type tipo_servicio_tblUpdateWithoutServicio_tblInput = {
    nom_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipo_servicio_tblUncheckedUpdateWithoutServicio_tblInput = {
    id_tipo_servicio?: IntFieldUpdateOperationsInput | number
    nom_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    cod_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    ico_tipo_servicio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type habitacion_tblCreateWithoutTipo_alojamiento_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionUncheckedCreateNestedManyWithoutHabitacion_tblInput
    images_tbl?: images_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblCreateOrConnectWithoutTipo_alojamiento_tblInput = {
    where: habitacion_tblWhereUniqueInput
    create: XOR<habitacion_tblCreateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput>
  }

  export type habitacion_tblCreateManyTipo_alojamiento_tblInputEnvelope = {
    data: habitacion_tblCreateManyTipo_alojamiento_tblInput | habitacion_tblCreateManyTipo_alojamiento_tblInput[]
    skipDuplicates?: boolean
  }

  export type habitacion_tblUpsertWithWhereUniqueWithoutTipo_alojamiento_tblInput = {
    where: habitacion_tblWhereUniqueInput
    update: XOR<habitacion_tblUpdateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedUpdateWithoutTipo_alojamiento_tblInput>
    create: XOR<habitacion_tblCreateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedCreateWithoutTipo_alojamiento_tblInput>
  }

  export type habitacion_tblUpdateWithWhereUniqueWithoutTipo_alojamiento_tblInput = {
    where: habitacion_tblWhereUniqueInput
    data: XOR<habitacion_tblUpdateWithoutTipo_alojamiento_tblInput, habitacion_tblUncheckedUpdateWithoutTipo_alojamiento_tblInput>
  }

  export type habitacion_tblUpdateManyWithWhereWithoutTipo_alojamiento_tblInput = {
    where: habitacion_tblScalarWhereInput
    data: XOR<habitacion_tblUpdateManyMutationInput, habitacion_tblUncheckedUpdateManyWithoutTipo_alojamiento_tblInput>
  }

  export type habitacion_tblScalarWhereInput = {
    AND?: habitacion_tblScalarWhereInput | habitacion_tblScalarWhereInput[]
    OR?: habitacion_tblScalarWhereInput[]
    NOT?: habitacion_tblScalarWhereInput | habitacion_tblScalarWhereInput[]
    id_habitacion?: IntFilter<"habitacion_tbl"> | number
    des_habitacion?: StringNullableFilter<"habitacion_tbl"> | string | null
    id_tipo_alojamiento_habitacion?: IntFilter<"habitacion_tbl"> | number
  }

  export type reserva_tblCreateWithoutUsuario_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutReserva_tblInput
    estados_tbl: estados_tblCreateNestedOneWithoutReserva_tblInput
  }

  export type reserva_tblUncheckedCreateWithoutUsuario_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_estado_reserva: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutReserva_tblInput
  }

  export type reserva_tblCreateOrConnectWithoutUsuario_tblInput = {
    where: reserva_tblWhereUniqueInput
    create: XOR<reserva_tblCreateWithoutUsuario_tblInput, reserva_tblUncheckedCreateWithoutUsuario_tblInput>
  }

  export type reserva_tblCreateManyUsuario_tblInputEnvelope = {
    data: reserva_tblCreateManyUsuario_tblInput | reserva_tblCreateManyUsuario_tblInput[]
    skipDuplicates?: boolean
  }

  export type reserva_tblUpsertWithWhereUniqueWithoutUsuario_tblInput = {
    where: reserva_tblWhereUniqueInput
    update: XOR<reserva_tblUpdateWithoutUsuario_tblInput, reserva_tblUncheckedUpdateWithoutUsuario_tblInput>
    create: XOR<reserva_tblCreateWithoutUsuario_tblInput, reserva_tblUncheckedCreateWithoutUsuario_tblInput>
  }

  export type reserva_tblUpdateWithWhereUniqueWithoutUsuario_tblInput = {
    where: reserva_tblWhereUniqueInput
    data: XOR<reserva_tblUpdateWithoutUsuario_tblInput, reserva_tblUncheckedUpdateWithoutUsuario_tblInput>
  }

  export type reserva_tblUpdateManyWithWhereWithoutUsuario_tblInput = {
    where: reserva_tblScalarWhereInput
    data: XOR<reserva_tblUpdateManyMutationInput, reserva_tblUncheckedUpdateManyWithoutUsuario_tblInput>
  }

  export type habitacion_tblCreateWithoutImages_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    tipo_alojamiento_tbl: tipo_alojamiento_tblCreateNestedOneWithoutHabitacion_tblInput
    reserva_habitacion_tbl?: reserva_habitacion_tblCreateNestedManyWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblUncheckedCreateWithoutImages_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
    id_tipo_alojamiento_habitacion: number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedCreateNestedManyWithoutHabitacion_tblInput
    servicio_habitacion?: servicio_habitacionUncheckedCreateNestedManyWithoutHabitacion_tblInput
  }

  export type habitacion_tblCreateOrConnectWithoutImages_tblInput = {
    where: habitacion_tblWhereUniqueInput
    create: XOR<habitacion_tblCreateWithoutImages_tblInput, habitacion_tblUncheckedCreateWithoutImages_tblInput>
  }

  export type habitacion_tblUpsertWithoutImages_tblInput = {
    update: XOR<habitacion_tblUpdateWithoutImages_tblInput, habitacion_tblUncheckedUpdateWithoutImages_tblInput>
    create: XOR<habitacion_tblCreateWithoutImages_tblInput, habitacion_tblUncheckedCreateWithoutImages_tblInput>
    where?: habitacion_tblWhereInput
  }

  export type habitacion_tblUpdateToOneWithWhereWithoutImages_tblInput = {
    where?: habitacion_tblWhereInput
    data: XOR<habitacion_tblUpdateWithoutImages_tblInput, habitacion_tblUncheckedUpdateWithoutImages_tblInput>
  }

  export type habitacion_tblUpdateWithoutImages_tblInput = {
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_alojamiento_tbl?: tipo_alojamiento_tblUpdateOneRequiredWithoutHabitacion_tblNestedInput
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblUncheckedUpdateWithoutImages_tblInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    id_tipo_alojamiento_habitacion?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type reserva_habitacion_tblCreateManyEstados_tblInput = {
    id_reserva_reserva_habitacion: number
    id_habitacion_reserva_habitacion: number
  }

  export type reserva_tblCreateManyEstados_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_usuario_reserva: number
  }

  export type reserva_habitacion_tblUpdateWithoutEstados_tblInput = {
    habitacion_tbl?: habitacion_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
    reserva_tbl?: reserva_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
  }

  export type reserva_habitacion_tblUncheckedUpdateWithoutEstados_tblInput = {
    id_reserva_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_habitacion_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_habitacion_tblUncheckedUpdateManyWithoutEstados_tblInput = {
    id_reserva_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_habitacion_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_tblUpdateWithoutEstados_tblInput = {
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutReserva_tblNestedInput
    usuario_tbl?: usuario_tblUpdateOneRequiredWithoutReserva_tblNestedInput
  }

  export type reserva_tblUncheckedUpdateWithoutEstados_tblInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usuario_reserva?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutReserva_tblNestedInput
  }

  export type reserva_tblUncheckedUpdateManyWithoutEstados_tblInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usuario_reserva?: IntFieldUpdateOperationsInput | number
  }

  export type estados_tblCreateManyGrupo_estados_tblInput = {
    id_estado?: number
    nom_estados?: string | null
    cod_estados?: string | null
    ind_hab_estados?: number | null
  }

  export type estados_tblUpdateWithoutGrupo_estados_tblInput = {
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutEstados_tblNestedInput
    reserva_tbl?: reserva_tblUpdateManyWithoutEstados_tblNestedInput
  }

  export type estados_tblUncheckedUpdateWithoutGrupo_estados_tblInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutEstados_tblNestedInput
    reserva_tbl?: reserva_tblUncheckedUpdateManyWithoutEstados_tblNestedInput
  }

  export type estados_tblUncheckedUpdateManyWithoutGrupo_estados_tblInput = {
    id_estado?: IntFieldUpdateOperationsInput | number
    nom_estados?: NullableStringFieldUpdateOperationsInput | string | null
    cod_estados?: NullableStringFieldUpdateOperationsInput | string | null
    ind_hab_estados?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reserva_habitacion_tblCreateManyHabitacion_tblInput = {
    id_reserva_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type servicio_habitacionCreateManyHabitacion_tblInput = {
    id_servicio_servicio_habitacion: number
    can_servicio_habitacion?: number | null
  }

  export type images_tblCreateManyHabitacion_tblInput = {
    id_image?: number
    url_image: string
    ind_pri_image?: number | null
  }

  export type reserva_habitacion_tblUpdateWithoutHabitacion_tblInput = {
    estados_tbl?: estados_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
    reserva_tbl?: reserva_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
  }

  export type reserva_habitacion_tblUncheckedUpdateWithoutHabitacion_tblInput = {
    id_reserva_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_estado_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblInput = {
    id_reserva_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_estado_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type servicio_habitacionUpdateWithoutHabitacion_tblInput = {
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
    servicio_tbl?: servicio_tblUpdateOneRequiredWithoutServicio_habitacionNestedInput
  }

  export type servicio_habitacionUncheckedUpdateWithoutHabitacion_tblInput = {
    id_servicio_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblInput = {
    id_servicio_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type images_tblUpdateWithoutHabitacion_tblInput = {
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type images_tblUncheckedUpdateWithoutHabitacion_tblInput = {
    id_image?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type images_tblUncheckedUpdateManyWithoutHabitacion_tblInput = {
    id_image?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    ind_pri_image?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reserva_habitacion_tblCreateManyReserva_tblInput = {
    id_habitacion_reserva_habitacion: number
    id_estado_reserva_habitacion: number
  }

  export type reserva_habitacion_tblUpdateWithoutReserva_tblInput = {
    estados_tbl?: estados_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
    habitacion_tbl?: habitacion_tblUpdateOneRequiredWithoutReserva_habitacion_tblNestedInput
  }

  export type reserva_habitacion_tblUncheckedUpdateWithoutReserva_tblInput = {
    id_habitacion_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_estado_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_habitacion_tblUncheckedUpdateManyWithoutReserva_tblInput = {
    id_habitacion_reserva_habitacion?: IntFieldUpdateOperationsInput | number
    id_estado_reserva_habitacion?: IntFieldUpdateOperationsInput | number
  }

  export type servicio_tblCreateManyTipo_servicio_tblInput = {
    id_servicio?: number
    nom_servicio?: string | null
    des_servicio?: string | null
    pre_servicio?: number | null
    ind_hab_servicio?: number | null
    can_per_servicio?: number | null
  }

  export type servicio_tblUpdateWithoutTipo_servicio_tblInput = {
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    servicio_habitacion?: servicio_habitacionUpdateManyWithoutServicio_tblNestedInput
  }

  export type servicio_tblUncheckedUpdateWithoutTipo_servicio_tblInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    servicio_habitacion?: servicio_habitacionUncheckedUpdateManyWithoutServicio_tblNestedInput
  }

  export type servicio_tblUncheckedUpdateManyWithoutTipo_servicio_tblInput = {
    id_servicio?: IntFieldUpdateOperationsInput | number
    nom_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    des_servicio?: NullableStringFieldUpdateOperationsInput | string | null
    pre_servicio?: NullableFloatFieldUpdateOperationsInput | number | null
    ind_hab_servicio?: NullableIntFieldUpdateOperationsInput | number | null
    can_per_servicio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type servicio_habitacionCreateManyServicio_tblInput = {
    id_habitacion_servicio_habitacion: number
    can_servicio_habitacion?: number | null
  }

  export type servicio_habitacionUpdateWithoutServicio_tblInput = {
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
    habitacion_tbl?: habitacion_tblUpdateOneRequiredWithoutServicio_habitacionNestedInput
  }

  export type servicio_habitacionUncheckedUpdateWithoutServicio_tblInput = {
    id_habitacion_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type servicio_habitacionUncheckedUpdateManyWithoutServicio_tblInput = {
    id_habitacion_servicio_habitacion?: IntFieldUpdateOperationsInput | number
    can_servicio_habitacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type habitacion_tblCreateManyTipo_alojamiento_tblInput = {
    id_habitacion?: number
    des_habitacion?: string | null
  }

  export type habitacion_tblUpdateWithoutTipo_alojamiento_tblInput = {
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblUncheckedUpdateWithoutTipo_alojamiento_tblInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    servicio_habitacion?: servicio_habitacionUncheckedUpdateManyWithoutHabitacion_tblNestedInput
    images_tbl?: images_tblUncheckedUpdateManyWithoutHabitacion_tblNestedInput
  }

  export type habitacion_tblUncheckedUpdateManyWithoutTipo_alojamiento_tblInput = {
    id_habitacion?: IntFieldUpdateOperationsInput | number
    des_habitacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserva_tblCreateManyUsuario_tblInput = {
    id_reserva?: number
    fec_ent_reserva?: Date | string | null
    fec_sal_reserva?: Date | string | null
    des_reserva?: string | null
    can_per_reserva?: number | null
    cos_tot_reserva?: number | null
    fec_reg_reserva?: Date | string | null
    id_estado_reserva: number
  }

  export type reserva_tblUpdateWithoutUsuario_tblInput = {
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva_habitacion_tbl?: reserva_habitacion_tblUpdateManyWithoutReserva_tblNestedInput
    estados_tbl?: estados_tblUpdateOneRequiredWithoutReserva_tblNestedInput
  }

  export type reserva_tblUncheckedUpdateWithoutUsuario_tblInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado_reserva?: IntFieldUpdateOperationsInput | number
    reserva_habitacion_tbl?: reserva_habitacion_tblUncheckedUpdateManyWithoutReserva_tblNestedInput
  }

  export type reserva_tblUncheckedUpdateManyWithoutUsuario_tblInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fec_ent_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fec_sal_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    des_reserva?: NullableStringFieldUpdateOperationsInput | string | null
    can_per_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    cos_tot_reserva?: NullableFloatFieldUpdateOperationsInput | number | null
    fec_reg_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_estado_reserva?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Estados_tblCountOutputTypeDefaultArgs instead
     */
    export type Estados_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Estados_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Grupo_estados_tblCountOutputTypeDefaultArgs instead
     */
    export type Grupo_estados_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Grupo_estados_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Habitacion_tblCountOutputTypeDefaultArgs instead
     */
    export type Habitacion_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Habitacion_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Reserva_tblCountOutputTypeDefaultArgs instead
     */
    export type Reserva_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Reserva_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tipo_servicio_tblCountOutputTypeDefaultArgs instead
     */
    export type Tipo_servicio_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tipo_servicio_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Servicio_tblCountOutputTypeDefaultArgs instead
     */
    export type Servicio_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Servicio_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Tipo_alojamiento_tblCountOutputTypeDefaultArgs instead
     */
    export type Tipo_alojamiento_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Tipo_alojamiento_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Usuario_tblCountOutputTypeDefaultArgs instead
     */
    export type Usuario_tblCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Usuario_tblCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use estados_tblDefaultArgs instead
     */
    export type estados_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = estados_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use grupo_estados_tblDefaultArgs instead
     */
    export type grupo_estados_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = grupo_estados_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use habitacion_tblDefaultArgs instead
     */
    export type habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = habitacion_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reserva_habitacion_tblDefaultArgs instead
     */
    export type reserva_habitacion_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reserva_habitacion_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use reserva_tblDefaultArgs instead
     */
    export type reserva_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = reserva_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use servicio_habitacionDefaultArgs instead
     */
    export type servicio_habitacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = servicio_habitacionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tipo_servicio_tblDefaultArgs instead
     */
    export type tipo_servicio_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipo_servicio_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use servicio_tblDefaultArgs instead
     */
    export type servicio_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = servicio_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tipo_alojamiento_tblDefaultArgs instead
     */
    export type tipo_alojamiento_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipo_alojamiento_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuario_tblDefaultArgs instead
     */
    export type usuario_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuario_tblDefaultArgs<ExtArgs>
    /**
     * @deprecated Use images_tblDefaultArgs instead
     */
    export type images_tblArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = images_tblDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}