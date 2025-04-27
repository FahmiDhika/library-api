
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model book
 * 
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model borrow
 * 
 */
export type borrow = $Result.DefaultSelection<Prisma.$borrowPayload>
/**
 * Model borrowList
 * 
 */
export type borrowList = $Result.DefaultSelection<Prisma.$borrowListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT'
};

export type role = (typeof role)[keyof typeof role]


export const bookType: {
  RANDOM: 'RANDOM',
  HISTORY: 'HISTORY',
  COMIC: 'COMIC',
  NOVEL: 'NOVEL',
  ENCYCLOPEDIA: 'ENCYCLOPEDIA',
  SCIENCE: 'SCIENCE',
  BIOGRAPHY: 'BIOGRAPHY'
};

export type bookType = (typeof bookType)[keyof typeof bookType]


export const status: {
  READY: 'READY',
  BORROWED: 'BORROWED'
};

export type status = (typeof status)[keyof typeof status]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type bookType = $Enums.bookType

export const bookType: typeof $Enums.bookType

export type status = $Enums.status

export const status: typeof $Enums.status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrow`: Exposes CRUD operations for the **borrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Borrows
    * const borrows = await prisma.borrow.findMany()
    * ```
    */
  get borrow(): Prisma.borrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrowList`: Exposes CRUD operations for the **borrowList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BorrowLists
    * const borrowLists = await prisma.borrowList.findMany()
    * ```
    */
  get borrowList(): Prisma.borrowListDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    user: 'user',
    book: 'book',
    borrow: 'borrow',
    borrowList: 'borrowList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "book" | "borrow" | "borrowList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      borrow: {
        payload: Prisma.$borrowPayload<ExtArgs>
        fields: Prisma.borrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.borrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.borrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>
          }
          findFirst: {
            args: Prisma.borrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.borrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>
          }
          findMany: {
            args: Prisma.borrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>[]
          }
          create: {
            args: Prisma.borrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>
          }
          createMany: {
            args: Prisma.borrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.borrowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>[]
          }
          delete: {
            args: Prisma.borrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>
          }
          update: {
            args: Prisma.borrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>
          }
          deleteMany: {
            args: Prisma.borrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.borrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.borrowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>[]
          }
          upsert: {
            args: Prisma.borrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowPayload>
          }
          aggregate: {
            args: Prisma.BorrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrow>
          }
          groupBy: {
            args: Prisma.borrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.borrowCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowCountAggregateOutputType> | number
          }
        }
      }
      borrowList: {
        payload: Prisma.$borrowListPayload<ExtArgs>
        fields: Prisma.borrowListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.borrowListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.borrowListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>
          }
          findFirst: {
            args: Prisma.borrowListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.borrowListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>
          }
          findMany: {
            args: Prisma.borrowListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>[]
          }
          create: {
            args: Prisma.borrowListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>
          }
          createMany: {
            args: Prisma.borrowListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.borrowListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>[]
          }
          delete: {
            args: Prisma.borrowListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>
          }
          update: {
            args: Prisma.borrowListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>
          }
          deleteMany: {
            args: Prisma.borrowListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.borrowListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.borrowListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>[]
          }
          upsert: {
            args: Prisma.borrowListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowListPayload>
          }
          aggregate: {
            args: Prisma.BorrowListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowList>
          }
          groupBy: {
            args: Prisma.borrowListGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowListGroupByOutputType>[]
          }
          count: {
            args: Prisma.borrowListCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowListCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    book?: bookOmit
    borrow?: borrowOmit
    borrowList?: borrowListOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    borrow: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrow?: boolean | UserCountOutputTypeCountBorrowArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBorrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    borrowList: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowList?: boolean | BookCountOutputTypeCountBorrowListArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBorrowListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowListWhereInput
  }


  /**
   * Count Type BorrowCountOutputType
   */

  export type BorrowCountOutputType = {
    borrowList: number
  }

  export type BorrowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowList?: boolean | BorrowCountOutputTypeCountBorrowListArgs
  }

  // Custom InputTypes
  /**
   * BorrowCountOutputType without action
   */
  export type BorrowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowCountOutputType
     */
    select?: BorrowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BorrowCountOutputType without action
   */
  export type BorrowCountOutputTypeCountBorrowListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    uuid: string | null
    name: string | null
    password: string | null
    email: string | null
    role: $Enums.role | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    uuid: string | null
    name: string | null
    password: string | null
    email: string | null
    role: $Enums.role | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    uuid: number
    name: number
    password: number
    email: number
    role: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    uuid?: true
    name?: true
    password?: true
    email?: true
    role?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    uuid?: true
    name?: true
    password?: true
    email?: true
    role?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    uuid?: true
    name?: true
    password?: true
    email?: true
    role?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    uuid: string
    name: string
    password: string
    email: string
    role: $Enums.role
    profilePicture: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    uuid?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    borrow?: boolean | user$borrowArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    uuid?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    uuid?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    userId?: boolean
    uuid?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "uuid" | "name" | "password" | "email" | "role" | "profilePicture" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrow?: boolean | user$borrowArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      borrow: Prisma.$borrowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      uuid: string
      name: string
      password: string
      email: string
      role: $Enums.role
      profilePicture: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrow<T extends user$borrowArgs<ExtArgs> = {}>(args?: Subset<T, user$borrowArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly userId: FieldRef<"user", 'Int'>
    readonly uuid: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'role'>
    readonly profilePicture: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.borrow
   */
  export type user$borrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    where?: borrowWhereInput
    orderBy?: borrowOrderByWithRelationInput | borrowOrderByWithRelationInput[]
    cursor?: borrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    bookId: number | null
  }

  export type BookSumAggregateOutputType = {
    bookId: number | null
  }

  export type BookMinAggregateOutputType = {
    bookId: number | null
    uuid: string | null
    bookName: string | null
    bookType: $Enums.bookType | null
    status: $Enums.status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    bookId: number | null
    uuid: string | null
    bookName: string | null
    bookType: $Enums.bookType | null
    status: $Enums.status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    bookId: number
    uuid: number
    bookName: number
    bookType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    bookId?: true
  }

  export type BookSumAggregateInputType = {
    bookId?: true
  }

  export type BookMinAggregateInputType = {
    bookId?: true
    uuid?: true
    bookName?: true
    bookType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookMaxAggregateInputType = {
    bookId?: true
    uuid?: true
    bookName?: true
    bookType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCountAggregateInputType = {
    bookId?: true
    uuid?: true
    bookName?: true
    bookType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    bookId: number
    uuid: string
    bookName: string
    bookType: $Enums.bookType
    status: $Enums.status | null
    createdAt: Date
    updatedAt: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    uuid?: boolean
    bookName?: boolean
    bookType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    borrowList?: boolean | book$borrowListArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    uuid?: boolean
    bookName?: boolean
    bookType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    uuid?: boolean
    bookName?: boolean
    bookType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["book"]>

  export type bookSelectScalar = {
    bookId?: boolean
    uuid?: boolean
    bookName?: boolean
    bookType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "uuid" | "bookName" | "bookType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>
  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowList?: boolean | book$borrowListArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      borrowList: Prisma.$borrowListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: number
      uuid: string
      bookName: string
      bookType: $Enums.bookType
      status: $Enums.status | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookWithBookIdOnly = await prisma.book.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {bookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `bookId`
     * const bookWithBookIdOnly = await prisma.book.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookCreateManyAndReturnArgs>(args?: SelectSubset<T, bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {bookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `bookId`
     * const bookWithBookIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookUpdateManyAndReturnArgs>(args: SelectSubset<T, bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
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
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrowList<T extends book$borrowListArgs<ExtArgs> = {}>(args?: Subset<T, book$borrowListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly bookId: FieldRef<"book", 'Int'>
    readonly uuid: FieldRef<"book", 'String'>
    readonly bookName: FieldRef<"book", 'String'>
    readonly bookType: FieldRef<"book", 'bookType'>
    readonly status: FieldRef<"book", 'status'>
    readonly createdAt: FieldRef<"book", 'DateTime'>
    readonly updatedAt: FieldRef<"book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book createManyAndReturn
   */
  export type bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book updateManyAndReturn
   */
  export type bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * book.borrowList
   */
  export type book$borrowListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    where?: borrowListWhereInput
    orderBy?: borrowListOrderByWithRelationInput | borrowListOrderByWithRelationInput[]
    cursor?: borrowListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowListScalarFieldEnum | BorrowListScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model borrow
   */

  export type AggregateBorrow = {
    _count: BorrowCountAggregateOutputType | null
    _avg: BorrowAvgAggregateOutputType | null
    _sum: BorrowSumAggregateOutputType | null
    _min: BorrowMinAggregateOutputType | null
    _max: BorrowMaxAggregateOutputType | null
  }

  export type BorrowAvgAggregateOutputType = {
    borrowId: number | null
    userId: number | null
  }

  export type BorrowSumAggregateOutputType = {
    borrowId: number | null
    userId: number | null
  }

  export type BorrowMinAggregateOutputType = {
    borrowId: number | null
    uuid: string | null
    note: string | null
    borrowingTime: Date | null
    returnTime: Date | null
    userId: number | null
  }

  export type BorrowMaxAggregateOutputType = {
    borrowId: number | null
    uuid: string | null
    note: string | null
    borrowingTime: Date | null
    returnTime: Date | null
    userId: number | null
  }

  export type BorrowCountAggregateOutputType = {
    borrowId: number
    uuid: number
    note: number
    borrowingTime: number
    returnTime: number
    userId: number
    _all: number
  }


  export type BorrowAvgAggregateInputType = {
    borrowId?: true
    userId?: true
  }

  export type BorrowSumAggregateInputType = {
    borrowId?: true
    userId?: true
  }

  export type BorrowMinAggregateInputType = {
    borrowId?: true
    uuid?: true
    note?: true
    borrowingTime?: true
    returnTime?: true
    userId?: true
  }

  export type BorrowMaxAggregateInputType = {
    borrowId?: true
    uuid?: true
    note?: true
    borrowingTime?: true
    returnTime?: true
    userId?: true
  }

  export type BorrowCountAggregateInputType = {
    borrowId?: true
    uuid?: true
    note?: true
    borrowingTime?: true
    returnTime?: true
    userId?: true
    _all?: true
  }

  export type BorrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borrow to aggregate.
     */
    where?: borrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrows to fetch.
     */
    orderBy?: borrowOrderByWithRelationInput | borrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: borrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned borrows
    **/
    _count?: true | BorrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowMaxAggregateInputType
  }

  export type GetBorrowAggregateType<T extends BorrowAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrow[P]>
      : GetScalarType<T[P], AggregateBorrow[P]>
  }




  export type borrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowWhereInput
    orderBy?: borrowOrderByWithAggregationInput | borrowOrderByWithAggregationInput[]
    by: BorrowScalarFieldEnum[] | BorrowScalarFieldEnum
    having?: borrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowCountAggregateInputType | true
    _avg?: BorrowAvgAggregateInputType
    _sum?: BorrowSumAggregateInputType
    _min?: BorrowMinAggregateInputType
    _max?: BorrowMaxAggregateInputType
  }

  export type BorrowGroupByOutputType = {
    borrowId: number
    uuid: string
    note: string | null
    borrowingTime: Date
    returnTime: Date | null
    userId: number
    _count: BorrowCountAggregateOutputType | null
    _avg: BorrowAvgAggregateOutputType | null
    _sum: BorrowSumAggregateOutputType | null
    _min: BorrowMinAggregateOutputType | null
    _max: BorrowMaxAggregateOutputType | null
  }

  type GetBorrowGroupByPayload<T extends borrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowGroupByOutputType[P]>
        }
      >
    >


  export type borrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowId?: boolean
    uuid?: boolean
    note?: boolean
    borrowingTime?: boolean
    returnTime?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    borrowList?: boolean | borrow$borrowListArgs<ExtArgs>
    _count?: boolean | BorrowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrow"]>

  export type borrowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowId?: boolean
    uuid?: boolean
    note?: boolean
    borrowingTime?: boolean
    returnTime?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrow"]>

  export type borrowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowId?: boolean
    uuid?: boolean
    note?: boolean
    borrowingTime?: boolean
    returnTime?: boolean
    userId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrow"]>

  export type borrowSelectScalar = {
    borrowId?: boolean
    uuid?: boolean
    note?: boolean
    borrowingTime?: boolean
    returnTime?: boolean
    userId?: boolean
  }

  export type borrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"borrowId" | "uuid" | "note" | "borrowingTime" | "returnTime" | "userId", ExtArgs["result"]["borrow"]>
  export type borrowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    borrowList?: boolean | borrow$borrowListArgs<ExtArgs>
    _count?: boolean | BorrowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type borrowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type borrowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $borrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "borrow"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      borrowList: Prisma.$borrowListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      borrowId: number
      uuid: string
      note: string | null
      borrowingTime: Date
      returnTime: Date | null
      userId: number
    }, ExtArgs["result"]["borrow"]>
    composites: {}
  }

  type borrowGetPayload<S extends boolean | null | undefined | borrowDefaultArgs> = $Result.GetResult<Prisma.$borrowPayload, S>

  type borrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<borrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowCountAggregateInputType | true
    }

  export interface borrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['borrow'], meta: { name: 'borrow' } }
    /**
     * Find zero or one Borrow that matches the filter.
     * @param {borrowFindUniqueArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends borrowFindUniqueArgs>(args: SelectSubset<T, borrowFindUniqueArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Borrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {borrowFindUniqueOrThrowArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends borrowFindUniqueOrThrowArgs>(args: SelectSubset<T, borrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowFindFirstArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends borrowFindFirstArgs>(args?: SelectSubset<T, borrowFindFirstArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowFindFirstOrThrowArgs} args - Arguments to find a Borrow
     * @example
     * // Get one Borrow
     * const borrow = await prisma.borrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends borrowFindFirstOrThrowArgs>(args?: SelectSubset<T, borrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Borrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borrows
     * const borrows = await prisma.borrow.findMany()
     * 
     * // Get first 10 Borrows
     * const borrows = await prisma.borrow.findMany({ take: 10 })
     * 
     * // Only select the `borrowId`
     * const borrowWithBorrowIdOnly = await prisma.borrow.findMany({ select: { borrowId: true } })
     * 
     */
    findMany<T extends borrowFindManyArgs>(args?: SelectSubset<T, borrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Borrow.
     * @param {borrowCreateArgs} args - Arguments to create a Borrow.
     * @example
     * // Create one Borrow
     * const Borrow = await prisma.borrow.create({
     *   data: {
     *     // ... data to create a Borrow
     *   }
     * })
     * 
     */
    create<T extends borrowCreateArgs>(args: SelectSubset<T, borrowCreateArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Borrows.
     * @param {borrowCreateManyArgs} args - Arguments to create many Borrows.
     * @example
     * // Create many Borrows
     * const borrow = await prisma.borrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends borrowCreateManyArgs>(args?: SelectSubset<T, borrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Borrows and returns the data saved in the database.
     * @param {borrowCreateManyAndReturnArgs} args - Arguments to create many Borrows.
     * @example
     * // Create many Borrows
     * const borrow = await prisma.borrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Borrows and only return the `borrowId`
     * const borrowWithBorrowIdOnly = await prisma.borrow.createManyAndReturn({
     *   select: { borrowId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends borrowCreateManyAndReturnArgs>(args?: SelectSubset<T, borrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Borrow.
     * @param {borrowDeleteArgs} args - Arguments to delete one Borrow.
     * @example
     * // Delete one Borrow
     * const Borrow = await prisma.borrow.delete({
     *   where: {
     *     // ... filter to delete one Borrow
     *   }
     * })
     * 
     */
    delete<T extends borrowDeleteArgs>(args: SelectSubset<T, borrowDeleteArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Borrow.
     * @param {borrowUpdateArgs} args - Arguments to update one Borrow.
     * @example
     * // Update one Borrow
     * const borrow = await prisma.borrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends borrowUpdateArgs>(args: SelectSubset<T, borrowUpdateArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Borrows.
     * @param {borrowDeleteManyArgs} args - Arguments to filter Borrows to delete.
     * @example
     * // Delete a few Borrows
     * const { count } = await prisma.borrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends borrowDeleteManyArgs>(args?: SelectSubset<T, borrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borrows
     * const borrow = await prisma.borrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends borrowUpdateManyArgs>(args: SelectSubset<T, borrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrows and returns the data updated in the database.
     * @param {borrowUpdateManyAndReturnArgs} args - Arguments to update many Borrows.
     * @example
     * // Update many Borrows
     * const borrow = await prisma.borrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Borrows and only return the `borrowId`
     * const borrowWithBorrowIdOnly = await prisma.borrow.updateManyAndReturn({
     *   select: { borrowId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends borrowUpdateManyAndReturnArgs>(args: SelectSubset<T, borrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Borrow.
     * @param {borrowUpsertArgs} args - Arguments to update or create a Borrow.
     * @example
     * // Update or create a Borrow
     * const borrow = await prisma.borrow.upsert({
     *   create: {
     *     // ... data to create a Borrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borrow we want to update
     *   }
     * })
     */
    upsert<T extends borrowUpsertArgs>(args: SelectSubset<T, borrowUpsertArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Borrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowCountArgs} args - Arguments to filter Borrows to count.
     * @example
     * // Count the number of Borrows
     * const count = await prisma.borrow.count({
     *   where: {
     *     // ... the filter for the Borrows we want to count
     *   }
     * })
    **/
    count<T extends borrowCountArgs>(
      args?: Subset<T, borrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Borrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowAggregateArgs>(args: Subset<T, BorrowAggregateArgs>): Prisma.PrismaPromise<GetBorrowAggregateType<T>>

    /**
     * Group by Borrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowGroupByArgs} args - Group by arguments.
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
      T extends borrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: borrowGroupByArgs['orderBy'] }
        : { orderBy?: borrowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, borrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the borrow model
   */
  readonly fields: borrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for borrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__borrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    borrowList<T extends borrow$borrowListArgs<ExtArgs> = {}>(args?: Subset<T, borrow$borrowListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the borrow model
   */
  interface borrowFieldRefs {
    readonly borrowId: FieldRef<"borrow", 'Int'>
    readonly uuid: FieldRef<"borrow", 'String'>
    readonly note: FieldRef<"borrow", 'String'>
    readonly borrowingTime: FieldRef<"borrow", 'DateTime'>
    readonly returnTime: FieldRef<"borrow", 'DateTime'>
    readonly userId: FieldRef<"borrow", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * borrow findUnique
   */
  export type borrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * Filter, which borrow to fetch.
     */
    where: borrowWhereUniqueInput
  }

  /**
   * borrow findUniqueOrThrow
   */
  export type borrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * Filter, which borrow to fetch.
     */
    where: borrowWhereUniqueInput
  }

  /**
   * borrow findFirst
   */
  export type borrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * Filter, which borrow to fetch.
     */
    where?: borrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrows to fetch.
     */
    orderBy?: borrowOrderByWithRelationInput | borrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borrows.
     */
    cursor?: borrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borrows.
     */
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * borrow findFirstOrThrow
   */
  export type borrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * Filter, which borrow to fetch.
     */
    where?: borrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrows to fetch.
     */
    orderBy?: borrowOrderByWithRelationInput | borrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borrows.
     */
    cursor?: borrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borrows.
     */
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * borrow findMany
   */
  export type borrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * Filter, which borrows to fetch.
     */
    where?: borrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrows to fetch.
     */
    orderBy?: borrowOrderByWithRelationInput | borrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing borrows.
     */
    cursor?: borrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrows.
     */
    skip?: number
    distinct?: BorrowScalarFieldEnum | BorrowScalarFieldEnum[]
  }

  /**
   * borrow create
   */
  export type borrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * The data needed to create a borrow.
     */
    data: XOR<borrowCreateInput, borrowUncheckedCreateInput>
  }

  /**
   * borrow createMany
   */
  export type borrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many borrows.
     */
    data: borrowCreateManyInput | borrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * borrow createManyAndReturn
   */
  export type borrowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * The data used to create many borrows.
     */
    data: borrowCreateManyInput | borrowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * borrow update
   */
  export type borrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * The data needed to update a borrow.
     */
    data: XOR<borrowUpdateInput, borrowUncheckedUpdateInput>
    /**
     * Choose, which borrow to update.
     */
    where: borrowWhereUniqueInput
  }

  /**
   * borrow updateMany
   */
  export type borrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update borrows.
     */
    data: XOR<borrowUpdateManyMutationInput, borrowUncheckedUpdateManyInput>
    /**
     * Filter which borrows to update
     */
    where?: borrowWhereInput
    /**
     * Limit how many borrows to update.
     */
    limit?: number
  }

  /**
   * borrow updateManyAndReturn
   */
  export type borrowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * The data used to update borrows.
     */
    data: XOR<borrowUpdateManyMutationInput, borrowUncheckedUpdateManyInput>
    /**
     * Filter which borrows to update
     */
    where?: borrowWhereInput
    /**
     * Limit how many borrows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * borrow upsert
   */
  export type borrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * The filter to search for the borrow to update in case it exists.
     */
    where: borrowWhereUniqueInput
    /**
     * In case the borrow found by the `where` argument doesn't exist, create a new borrow with this data.
     */
    create: XOR<borrowCreateInput, borrowUncheckedCreateInput>
    /**
     * In case the borrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<borrowUpdateInput, borrowUncheckedUpdateInput>
  }

  /**
   * borrow delete
   */
  export type borrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
    /**
     * Filter which borrow to delete.
     */
    where: borrowWhereUniqueInput
  }

  /**
   * borrow deleteMany
   */
  export type borrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borrows to delete
     */
    where?: borrowWhereInput
    /**
     * Limit how many borrows to delete.
     */
    limit?: number
  }

  /**
   * borrow.borrowList
   */
  export type borrow$borrowListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    where?: borrowListWhereInput
    orderBy?: borrowListOrderByWithRelationInput | borrowListOrderByWithRelationInput[]
    cursor?: borrowListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowListScalarFieldEnum | BorrowListScalarFieldEnum[]
  }

  /**
   * borrow without action
   */
  export type borrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrow
     */
    select?: borrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrow
     */
    omit?: borrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowInclude<ExtArgs> | null
  }


  /**
   * Model borrowList
   */

  export type AggregateBorrowList = {
    _count: BorrowListCountAggregateOutputType | null
    _avg: BorrowListAvgAggregateOutputType | null
    _sum: BorrowListSumAggregateOutputType | null
    _min: BorrowListMinAggregateOutputType | null
    _max: BorrowListMaxAggregateOutputType | null
  }

  export type BorrowListAvgAggregateOutputType = {
    borrowListId: number | null
    borrowId: number | null
    bookId: number | null
  }

  export type BorrowListSumAggregateOutputType = {
    borrowListId: number | null
    borrowId: number | null
    bookId: number | null
  }

  export type BorrowListMinAggregateOutputType = {
    borrowListId: number | null
    uuid: string | null
    borrowId: number | null
    bookId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BorrowListMaxAggregateOutputType = {
    borrowListId: number | null
    uuid: string | null
    borrowId: number | null
    bookId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BorrowListCountAggregateOutputType = {
    borrowListId: number
    uuid: number
    borrowId: number
    bookId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BorrowListAvgAggregateInputType = {
    borrowListId?: true
    borrowId?: true
    bookId?: true
  }

  export type BorrowListSumAggregateInputType = {
    borrowListId?: true
    borrowId?: true
    bookId?: true
  }

  export type BorrowListMinAggregateInputType = {
    borrowListId?: true
    uuid?: true
    borrowId?: true
    bookId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BorrowListMaxAggregateInputType = {
    borrowListId?: true
    uuid?: true
    borrowId?: true
    bookId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BorrowListCountAggregateInputType = {
    borrowListId?: true
    uuid?: true
    borrowId?: true
    bookId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BorrowListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borrowList to aggregate.
     */
    where?: borrowListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowLists to fetch.
     */
    orderBy?: borrowListOrderByWithRelationInput | borrowListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: borrowListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned borrowLists
    **/
    _count?: true | BorrowListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowListMaxAggregateInputType
  }

  export type GetBorrowListAggregateType<T extends BorrowListAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowList[P]>
      : GetScalarType<T[P], AggregateBorrowList[P]>
  }




  export type borrowListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowListWhereInput
    orderBy?: borrowListOrderByWithAggregationInput | borrowListOrderByWithAggregationInput[]
    by: BorrowListScalarFieldEnum[] | BorrowListScalarFieldEnum
    having?: borrowListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowListCountAggregateInputType | true
    _avg?: BorrowListAvgAggregateInputType
    _sum?: BorrowListSumAggregateInputType
    _min?: BorrowListMinAggregateInputType
    _max?: BorrowListMaxAggregateInputType
  }

  export type BorrowListGroupByOutputType = {
    borrowListId: number
    uuid: string
    borrowId: number
    bookId: number
    createdAt: Date
    updatedAt: Date
    _count: BorrowListCountAggregateOutputType | null
    _avg: BorrowListAvgAggregateOutputType | null
    _sum: BorrowListSumAggregateOutputType | null
    _min: BorrowListMinAggregateOutputType | null
    _max: BorrowListMaxAggregateOutputType | null
  }

  type GetBorrowListGroupByPayload<T extends borrowListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowListGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowListGroupByOutputType[P]>
        }
      >
    >


  export type borrowListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowListId?: boolean
    uuid?: boolean
    borrowId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    borrow?: boolean | borrowDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowList"]>

  export type borrowListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowListId?: boolean
    uuid?: boolean
    borrowId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    borrow?: boolean | borrowDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowList"]>

  export type borrowListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    borrowListId?: boolean
    uuid?: boolean
    borrowId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    borrow?: boolean | borrowDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowList"]>

  export type borrowListSelectScalar = {
    borrowListId?: boolean
    uuid?: boolean
    borrowId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type borrowListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"borrowListId" | "uuid" | "borrowId" | "bookId" | "createdAt" | "updatedAt", ExtArgs["result"]["borrowList"]>
  export type borrowListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrow?: boolean | borrowDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type borrowListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrow?: boolean | borrowDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type borrowListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrow?: boolean | borrowDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $borrowListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "borrowList"
    objects: {
      borrow: Prisma.$borrowPayload<ExtArgs>
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      borrowListId: number
      uuid: string
      borrowId: number
      bookId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["borrowList"]>
    composites: {}
  }

  type borrowListGetPayload<S extends boolean | null | undefined | borrowListDefaultArgs> = $Result.GetResult<Prisma.$borrowListPayload, S>

  type borrowListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<borrowListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowListCountAggregateInputType | true
    }

  export interface borrowListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['borrowList'], meta: { name: 'borrowList' } }
    /**
     * Find zero or one BorrowList that matches the filter.
     * @param {borrowListFindUniqueArgs} args - Arguments to find a BorrowList
     * @example
     * // Get one BorrowList
     * const borrowList = await prisma.borrowList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends borrowListFindUniqueArgs>(args: SelectSubset<T, borrowListFindUniqueArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BorrowList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {borrowListFindUniqueOrThrowArgs} args - Arguments to find a BorrowList
     * @example
     * // Get one BorrowList
     * const borrowList = await prisma.borrowList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends borrowListFindUniqueOrThrowArgs>(args: SelectSubset<T, borrowListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowListFindFirstArgs} args - Arguments to find a BorrowList
     * @example
     * // Get one BorrowList
     * const borrowList = await prisma.borrowList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends borrowListFindFirstArgs>(args?: SelectSubset<T, borrowListFindFirstArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowListFindFirstOrThrowArgs} args - Arguments to find a BorrowList
     * @example
     * // Get one BorrowList
     * const borrowList = await prisma.borrowList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends borrowListFindFirstOrThrowArgs>(args?: SelectSubset<T, borrowListFindFirstOrThrowArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BorrowLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BorrowLists
     * const borrowLists = await prisma.borrowList.findMany()
     * 
     * // Get first 10 BorrowLists
     * const borrowLists = await prisma.borrowList.findMany({ take: 10 })
     * 
     * // Only select the `borrowListId`
     * const borrowListWithBorrowListIdOnly = await prisma.borrowList.findMany({ select: { borrowListId: true } })
     * 
     */
    findMany<T extends borrowListFindManyArgs>(args?: SelectSubset<T, borrowListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BorrowList.
     * @param {borrowListCreateArgs} args - Arguments to create a BorrowList.
     * @example
     * // Create one BorrowList
     * const BorrowList = await prisma.borrowList.create({
     *   data: {
     *     // ... data to create a BorrowList
     *   }
     * })
     * 
     */
    create<T extends borrowListCreateArgs>(args: SelectSubset<T, borrowListCreateArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BorrowLists.
     * @param {borrowListCreateManyArgs} args - Arguments to create many BorrowLists.
     * @example
     * // Create many BorrowLists
     * const borrowList = await prisma.borrowList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends borrowListCreateManyArgs>(args?: SelectSubset<T, borrowListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BorrowLists and returns the data saved in the database.
     * @param {borrowListCreateManyAndReturnArgs} args - Arguments to create many BorrowLists.
     * @example
     * // Create many BorrowLists
     * const borrowList = await prisma.borrowList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BorrowLists and only return the `borrowListId`
     * const borrowListWithBorrowListIdOnly = await prisma.borrowList.createManyAndReturn({
     *   select: { borrowListId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends borrowListCreateManyAndReturnArgs>(args?: SelectSubset<T, borrowListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BorrowList.
     * @param {borrowListDeleteArgs} args - Arguments to delete one BorrowList.
     * @example
     * // Delete one BorrowList
     * const BorrowList = await prisma.borrowList.delete({
     *   where: {
     *     // ... filter to delete one BorrowList
     *   }
     * })
     * 
     */
    delete<T extends borrowListDeleteArgs>(args: SelectSubset<T, borrowListDeleteArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BorrowList.
     * @param {borrowListUpdateArgs} args - Arguments to update one BorrowList.
     * @example
     * // Update one BorrowList
     * const borrowList = await prisma.borrowList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends borrowListUpdateArgs>(args: SelectSubset<T, borrowListUpdateArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BorrowLists.
     * @param {borrowListDeleteManyArgs} args - Arguments to filter BorrowLists to delete.
     * @example
     * // Delete a few BorrowLists
     * const { count } = await prisma.borrowList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends borrowListDeleteManyArgs>(args?: SelectSubset<T, borrowListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BorrowLists
     * const borrowList = await prisma.borrowList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends borrowListUpdateManyArgs>(args: SelectSubset<T, borrowListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowLists and returns the data updated in the database.
     * @param {borrowListUpdateManyAndReturnArgs} args - Arguments to update many BorrowLists.
     * @example
     * // Update many BorrowLists
     * const borrowList = await prisma.borrowList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BorrowLists and only return the `borrowListId`
     * const borrowListWithBorrowListIdOnly = await prisma.borrowList.updateManyAndReturn({
     *   select: { borrowListId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends borrowListUpdateManyAndReturnArgs>(args: SelectSubset<T, borrowListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BorrowList.
     * @param {borrowListUpsertArgs} args - Arguments to update or create a BorrowList.
     * @example
     * // Update or create a BorrowList
     * const borrowList = await prisma.borrowList.upsert({
     *   create: {
     *     // ... data to create a BorrowList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BorrowList we want to update
     *   }
     * })
     */
    upsert<T extends borrowListUpsertArgs>(args: SelectSubset<T, borrowListUpsertArgs<ExtArgs>>): Prisma__borrowListClient<$Result.GetResult<Prisma.$borrowListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BorrowLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowListCountArgs} args - Arguments to filter BorrowLists to count.
     * @example
     * // Count the number of BorrowLists
     * const count = await prisma.borrowList.count({
     *   where: {
     *     // ... the filter for the BorrowLists we want to count
     *   }
     * })
    **/
    count<T extends borrowListCountArgs>(
      args?: Subset<T, borrowListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BorrowList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowListAggregateArgs>(args: Subset<T, BorrowListAggregateArgs>): Prisma.PrismaPromise<GetBorrowListAggregateType<T>>

    /**
     * Group by BorrowList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowListGroupByArgs} args - Group by arguments.
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
      T extends borrowListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: borrowListGroupByArgs['orderBy'] }
        : { orderBy?: borrowListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, borrowListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the borrowList model
   */
  readonly fields: borrowListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for borrowList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__borrowListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrow<T extends borrowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, borrowDefaultArgs<ExtArgs>>): Prisma__borrowClient<$Result.GetResult<Prisma.$borrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the borrowList model
   */
  interface borrowListFieldRefs {
    readonly borrowListId: FieldRef<"borrowList", 'Int'>
    readonly uuid: FieldRef<"borrowList", 'String'>
    readonly borrowId: FieldRef<"borrowList", 'Int'>
    readonly bookId: FieldRef<"borrowList", 'Int'>
    readonly createdAt: FieldRef<"borrowList", 'DateTime'>
    readonly updatedAt: FieldRef<"borrowList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * borrowList findUnique
   */
  export type borrowListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * Filter, which borrowList to fetch.
     */
    where: borrowListWhereUniqueInput
  }

  /**
   * borrowList findUniqueOrThrow
   */
  export type borrowListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * Filter, which borrowList to fetch.
     */
    where: borrowListWhereUniqueInput
  }

  /**
   * borrowList findFirst
   */
  export type borrowListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * Filter, which borrowList to fetch.
     */
    where?: borrowListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowLists to fetch.
     */
    orderBy?: borrowListOrderByWithRelationInput | borrowListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borrowLists.
     */
    cursor?: borrowListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borrowLists.
     */
    distinct?: BorrowListScalarFieldEnum | BorrowListScalarFieldEnum[]
  }

  /**
   * borrowList findFirstOrThrow
   */
  export type borrowListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * Filter, which borrowList to fetch.
     */
    where?: borrowListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowLists to fetch.
     */
    orderBy?: borrowListOrderByWithRelationInput | borrowListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borrowLists.
     */
    cursor?: borrowListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borrowLists.
     */
    distinct?: BorrowListScalarFieldEnum | BorrowListScalarFieldEnum[]
  }

  /**
   * borrowList findMany
   */
  export type borrowListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * Filter, which borrowLists to fetch.
     */
    where?: borrowListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowLists to fetch.
     */
    orderBy?: borrowListOrderByWithRelationInput | borrowListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing borrowLists.
     */
    cursor?: borrowListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowLists.
     */
    skip?: number
    distinct?: BorrowListScalarFieldEnum | BorrowListScalarFieldEnum[]
  }

  /**
   * borrowList create
   */
  export type borrowListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * The data needed to create a borrowList.
     */
    data: XOR<borrowListCreateInput, borrowListUncheckedCreateInput>
  }

  /**
   * borrowList createMany
   */
  export type borrowListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many borrowLists.
     */
    data: borrowListCreateManyInput | borrowListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * borrowList createManyAndReturn
   */
  export type borrowListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * The data used to create many borrowLists.
     */
    data: borrowListCreateManyInput | borrowListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * borrowList update
   */
  export type borrowListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * The data needed to update a borrowList.
     */
    data: XOR<borrowListUpdateInput, borrowListUncheckedUpdateInput>
    /**
     * Choose, which borrowList to update.
     */
    where: borrowListWhereUniqueInput
  }

  /**
   * borrowList updateMany
   */
  export type borrowListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update borrowLists.
     */
    data: XOR<borrowListUpdateManyMutationInput, borrowListUncheckedUpdateManyInput>
    /**
     * Filter which borrowLists to update
     */
    where?: borrowListWhereInput
    /**
     * Limit how many borrowLists to update.
     */
    limit?: number
  }

  /**
   * borrowList updateManyAndReturn
   */
  export type borrowListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * The data used to update borrowLists.
     */
    data: XOR<borrowListUpdateManyMutationInput, borrowListUncheckedUpdateManyInput>
    /**
     * Filter which borrowLists to update
     */
    where?: borrowListWhereInput
    /**
     * Limit how many borrowLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * borrowList upsert
   */
  export type borrowListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * The filter to search for the borrowList to update in case it exists.
     */
    where: borrowListWhereUniqueInput
    /**
     * In case the borrowList found by the `where` argument doesn't exist, create a new borrowList with this data.
     */
    create: XOR<borrowListCreateInput, borrowListUncheckedCreateInput>
    /**
     * In case the borrowList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<borrowListUpdateInput, borrowListUncheckedUpdateInput>
  }

  /**
   * borrowList delete
   */
  export type borrowListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
    /**
     * Filter which borrowList to delete.
     */
    where: borrowListWhereUniqueInput
  }

  /**
   * borrowList deleteMany
   */
  export type borrowListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borrowLists to delete
     */
    where?: borrowListWhereInput
    /**
     * Limit how many borrowLists to delete.
     */
    limit?: number
  }

  /**
   * borrowList without action
   */
  export type borrowListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowList
     */
    select?: borrowListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borrowList
     */
    omit?: borrowListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowListInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userId: 'userId',
    uuid: 'uuid',
    name: 'name',
    password: 'password',
    email: 'email',
    role: 'role',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    bookId: 'bookId',
    uuid: 'uuid',
    bookName: 'bookName',
    bookType: 'bookType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BorrowScalarFieldEnum: {
    borrowId: 'borrowId',
    uuid: 'uuid',
    note: 'note',
    borrowingTime: 'borrowingTime',
    returnTime: 'returnTime',
    userId: 'userId'
  };

  export type BorrowScalarFieldEnum = (typeof BorrowScalarFieldEnum)[keyof typeof BorrowScalarFieldEnum]


  export const BorrowListScalarFieldEnum: {
    borrowListId: 'borrowListId',
    uuid: 'uuid',
    borrowId: 'borrowId',
    bookId: 'bookId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BorrowListScalarFieldEnum = (typeof BorrowListScalarFieldEnum)[keyof typeof BorrowListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'bookType'
   */
  export type EnumbookTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bookType'>
    


  /**
   * Reference to a field of type 'bookType[]'
   */
  export type ListEnumbookTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'bookType[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    userId?: IntFilter<"user"> | number
    uuid?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    profilePicture?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    borrow?: BorrowListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    userId?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    borrow?: borrowOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    uuid?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    role?: EnumroleFilter<"user"> | $Enums.role
    profilePicture?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    borrow?: BorrowListRelationFilter
  }, "userId" | "uuid">

  export type userOrderByWithAggregationInput = {
    userId?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"user"> | number
    uuid?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    role?: EnumroleWithAggregatesFilter<"user"> | $Enums.role
    profilePicture?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    bookId?: IntFilter<"book"> | number
    uuid?: StringFilter<"book"> | string
    bookName?: StringFilter<"book"> | string
    bookType?: EnumbookTypeFilter<"book"> | $Enums.bookType
    status?: EnumstatusNullableFilter<"book"> | $Enums.status | null
    createdAt?: DateTimeFilter<"book"> | Date | string
    updatedAt?: DateTimeFilter<"book"> | Date | string
    borrowList?: BorrowListListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    bookId?: SortOrder
    uuid?: SortOrder
    bookName?: SortOrder
    bookType?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    borrowList?: borrowListOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    bookId?: number
    uuid?: string
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    bookName?: StringFilter<"book"> | string
    bookType?: EnumbookTypeFilter<"book"> | $Enums.bookType
    status?: EnumstatusNullableFilter<"book"> | $Enums.status | null
    createdAt?: DateTimeFilter<"book"> | Date | string
    updatedAt?: DateTimeFilter<"book"> | Date | string
    borrowList?: BorrowListListRelationFilter
  }, "bookId" | "uuid">

  export type bookOrderByWithAggregationInput = {
    bookId?: SortOrder
    uuid?: SortOrder
    bookName?: SortOrder
    bookType?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    bookId?: IntWithAggregatesFilter<"book"> | number
    uuid?: StringWithAggregatesFilter<"book"> | string
    bookName?: StringWithAggregatesFilter<"book"> | string
    bookType?: EnumbookTypeWithAggregatesFilter<"book"> | $Enums.bookType
    status?: EnumstatusNullableWithAggregatesFilter<"book"> | $Enums.status | null
    createdAt?: DateTimeWithAggregatesFilter<"book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"book"> | Date | string
  }

  export type borrowWhereInput = {
    AND?: borrowWhereInput | borrowWhereInput[]
    OR?: borrowWhereInput[]
    NOT?: borrowWhereInput | borrowWhereInput[]
    borrowId?: IntFilter<"borrow"> | number
    uuid?: StringFilter<"borrow"> | string
    note?: StringNullableFilter<"borrow"> | string | null
    borrowingTime?: DateTimeFilter<"borrow"> | Date | string
    returnTime?: DateTimeNullableFilter<"borrow"> | Date | string | null
    userId?: IntFilter<"borrow"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    borrowList?: BorrowListListRelationFilter
  }

  export type borrowOrderByWithRelationInput = {
    borrowId?: SortOrder
    uuid?: SortOrder
    note?: SortOrderInput | SortOrder
    borrowingTime?: SortOrder
    returnTime?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: userOrderByWithRelationInput
    borrowList?: borrowListOrderByRelationAggregateInput
  }

  export type borrowWhereUniqueInput = Prisma.AtLeast<{
    borrowId?: number
    uuid?: string
    AND?: borrowWhereInput | borrowWhereInput[]
    OR?: borrowWhereInput[]
    NOT?: borrowWhereInput | borrowWhereInput[]
    note?: StringNullableFilter<"borrow"> | string | null
    borrowingTime?: DateTimeFilter<"borrow"> | Date | string
    returnTime?: DateTimeNullableFilter<"borrow"> | Date | string | null
    userId?: IntFilter<"borrow"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    borrowList?: BorrowListListRelationFilter
  }, "borrowId" | "uuid">

  export type borrowOrderByWithAggregationInput = {
    borrowId?: SortOrder
    uuid?: SortOrder
    note?: SortOrderInput | SortOrder
    borrowingTime?: SortOrder
    returnTime?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: borrowCountOrderByAggregateInput
    _avg?: borrowAvgOrderByAggregateInput
    _max?: borrowMaxOrderByAggregateInput
    _min?: borrowMinOrderByAggregateInput
    _sum?: borrowSumOrderByAggregateInput
  }

  export type borrowScalarWhereWithAggregatesInput = {
    AND?: borrowScalarWhereWithAggregatesInput | borrowScalarWhereWithAggregatesInput[]
    OR?: borrowScalarWhereWithAggregatesInput[]
    NOT?: borrowScalarWhereWithAggregatesInput | borrowScalarWhereWithAggregatesInput[]
    borrowId?: IntWithAggregatesFilter<"borrow"> | number
    uuid?: StringWithAggregatesFilter<"borrow"> | string
    note?: StringNullableWithAggregatesFilter<"borrow"> | string | null
    borrowingTime?: DateTimeWithAggregatesFilter<"borrow"> | Date | string
    returnTime?: DateTimeNullableWithAggregatesFilter<"borrow"> | Date | string | null
    userId?: IntWithAggregatesFilter<"borrow"> | number
  }

  export type borrowListWhereInput = {
    AND?: borrowListWhereInput | borrowListWhereInput[]
    OR?: borrowListWhereInput[]
    NOT?: borrowListWhereInput | borrowListWhereInput[]
    borrowListId?: IntFilter<"borrowList"> | number
    uuid?: StringFilter<"borrowList"> | string
    borrowId?: IntFilter<"borrowList"> | number
    bookId?: IntFilter<"borrowList"> | number
    createdAt?: DateTimeFilter<"borrowList"> | Date | string
    updatedAt?: DateTimeFilter<"borrowList"> | Date | string
    borrow?: XOR<BorrowScalarRelationFilter, borrowWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type borrowListOrderByWithRelationInput = {
    borrowListId?: SortOrder
    uuid?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    borrow?: borrowOrderByWithRelationInput
    book?: bookOrderByWithRelationInput
  }

  export type borrowListWhereUniqueInput = Prisma.AtLeast<{
    borrowListId?: number
    uuid?: string
    AND?: borrowListWhereInput | borrowListWhereInput[]
    OR?: borrowListWhereInput[]
    NOT?: borrowListWhereInput | borrowListWhereInput[]
    borrowId?: IntFilter<"borrowList"> | number
    bookId?: IntFilter<"borrowList"> | number
    createdAt?: DateTimeFilter<"borrowList"> | Date | string
    updatedAt?: DateTimeFilter<"borrowList"> | Date | string
    borrow?: XOR<BorrowScalarRelationFilter, borrowWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "borrowListId" | "uuid">

  export type borrowListOrderByWithAggregationInput = {
    borrowListId?: SortOrder
    uuid?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: borrowListCountOrderByAggregateInput
    _avg?: borrowListAvgOrderByAggregateInput
    _max?: borrowListMaxOrderByAggregateInput
    _min?: borrowListMinOrderByAggregateInput
    _sum?: borrowListSumOrderByAggregateInput
  }

  export type borrowListScalarWhereWithAggregatesInput = {
    AND?: borrowListScalarWhereWithAggregatesInput | borrowListScalarWhereWithAggregatesInput[]
    OR?: borrowListScalarWhereWithAggregatesInput[]
    NOT?: borrowListScalarWhereWithAggregatesInput | borrowListScalarWhereWithAggregatesInput[]
    borrowListId?: IntWithAggregatesFilter<"borrowList"> | number
    uuid?: StringWithAggregatesFilter<"borrowList"> | string
    borrowId?: IntWithAggregatesFilter<"borrowList"> | number
    bookId?: IntWithAggregatesFilter<"borrowList"> | number
    createdAt?: DateTimeWithAggregatesFilter<"borrowList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"borrowList"> | Date | string
  }

  export type userCreateInput = {
    uuid?: string
    name?: string
    password?: string
    email?: string
    role?: $Enums.role
    profilePicture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrow?: borrowCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    userId?: number
    uuid?: string
    name?: string
    password?: string
    email?: string
    role?: $Enums.role
    profilePicture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrow?: borrowUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profilePicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrow?: borrowUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profilePicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrow?: borrowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    userId?: number
    uuid?: string
    name?: string
    password?: string
    email?: string
    role?: $Enums.role
    profilePicture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profilePicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profilePicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCreateInput = {
    uuid?: string
    bookName?: string
    bookType?: $Enums.bookType
    status?: $Enums.status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowList?: borrowListCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    bookId?: number
    uuid?: string
    bookName?: string
    bookType?: $Enums.bookType
    status?: $Enums.status | null
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowList?: borrowListUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    bookName?: StringFieldUpdateOperationsInput | string
    bookType?: EnumbookTypeFieldUpdateOperationsInput | $Enums.bookType
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowList?: borrowListUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    bookName?: StringFieldUpdateOperationsInput | string
    bookType?: EnumbookTypeFieldUpdateOperationsInput | $Enums.bookType
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowList?: borrowListUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    bookId?: number
    uuid?: string
    bookName?: string
    bookType?: $Enums.bookType
    status?: $Enums.status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    bookName?: StringFieldUpdateOperationsInput | string
    bookType?: EnumbookTypeFieldUpdateOperationsInput | $Enums.bookType
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookUncheckedUpdateManyInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    bookName?: StringFieldUpdateOperationsInput | string
    bookType?: EnumbookTypeFieldUpdateOperationsInput | $Enums.bookType
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowCreateInput = {
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    user: userCreateNestedOneWithoutBorrowInput
    borrowList?: borrowListCreateNestedManyWithoutBorrowInput
  }

  export type borrowUncheckedCreateInput = {
    borrowId?: number
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    userId: number
    borrowList?: borrowListUncheckedCreateNestedManyWithoutBorrowInput
  }

  export type borrowUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutBorrowNestedInput
    borrowList?: borrowListUpdateManyWithoutBorrowNestedInput
  }

  export type borrowUncheckedUpdateInput = {
    borrowId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    borrowList?: borrowListUncheckedUpdateManyWithoutBorrowNestedInput
  }

  export type borrowCreateManyInput = {
    borrowId?: number
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    userId: number
  }

  export type borrowUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowUncheckedUpdateManyInput = {
    borrowId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type borrowListCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrow: borrowCreateNestedOneWithoutBorrowListInput
    book: bookCreateNestedOneWithoutBorrowListInput
  }

  export type borrowListUncheckedCreateInput = {
    borrowListId?: number
    uuid?: string
    borrowId: number
    bookId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type borrowListUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrow?: borrowUpdateOneRequiredWithoutBorrowListNestedInput
    book?: bookUpdateOneRequiredWithoutBorrowListNestedInput
  }

  export type borrowListUncheckedUpdateInput = {
    borrowListId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    borrowId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowListCreateManyInput = {
    borrowListId?: number
    uuid?: string
    borrowId: number
    bookId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type borrowListUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowListUncheckedUpdateManyInput = {
    borrowListId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    borrowId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BorrowListRelationFilter = {
    every?: borrowWhereInput
    some?: borrowWhereInput
    none?: borrowWhereInput
  }

  export type borrowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    userId?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    userId?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    userId?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumbookTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.bookType | EnumbookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumbookTypeFilter<$PrismaModel> | $Enums.bookType
  }

  export type EnumstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableFilter<$PrismaModel> | $Enums.status | null
  }

  export type BorrowListListRelationFilter = {
    every?: borrowListWhereInput
    some?: borrowListWhereInput
    none?: borrowListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type borrowListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    bookId?: SortOrder
    uuid?: SortOrder
    bookName?: SortOrder
    bookType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    bookId?: SortOrder
    uuid?: SortOrder
    bookName?: SortOrder
    bookType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    bookId?: SortOrder
    uuid?: SortOrder
    bookName?: SortOrder
    bookType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type EnumbookTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bookType | EnumbookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumbookTypeWithAggregatesFilter<$PrismaModel> | $Enums.bookType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbookTypeFilter<$PrismaModel>
    _max?: NestedEnumbookTypeFilter<$PrismaModel>
  }

  export type EnumstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumstatusNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type borrowCountOrderByAggregateInput = {
    borrowId?: SortOrder
    uuid?: SortOrder
    note?: SortOrder
    borrowingTime?: SortOrder
    returnTime?: SortOrder
    userId?: SortOrder
  }

  export type borrowAvgOrderByAggregateInput = {
    borrowId?: SortOrder
    userId?: SortOrder
  }

  export type borrowMaxOrderByAggregateInput = {
    borrowId?: SortOrder
    uuid?: SortOrder
    note?: SortOrder
    borrowingTime?: SortOrder
    returnTime?: SortOrder
    userId?: SortOrder
  }

  export type borrowMinOrderByAggregateInput = {
    borrowId?: SortOrder
    uuid?: SortOrder
    note?: SortOrder
    borrowingTime?: SortOrder
    returnTime?: SortOrder
    userId?: SortOrder
  }

  export type borrowSumOrderByAggregateInput = {
    borrowId?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BorrowScalarRelationFilter = {
    is?: borrowWhereInput
    isNot?: borrowWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type borrowListCountOrderByAggregateInput = {
    borrowListId?: SortOrder
    uuid?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type borrowListAvgOrderByAggregateInput = {
    borrowListId?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
  }

  export type borrowListMaxOrderByAggregateInput = {
    borrowListId?: SortOrder
    uuid?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type borrowListMinOrderByAggregateInput = {
    borrowListId?: SortOrder
    uuid?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type borrowListSumOrderByAggregateInput = {
    borrowListId?: SortOrder
    borrowId?: SortOrder
    bookId?: SortOrder
  }

  export type borrowCreateNestedManyWithoutUserInput = {
    create?: XOR<borrowCreateWithoutUserInput, borrowUncheckedCreateWithoutUserInput> | borrowCreateWithoutUserInput[] | borrowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: borrowCreateOrConnectWithoutUserInput | borrowCreateOrConnectWithoutUserInput[]
    createMany?: borrowCreateManyUserInputEnvelope
    connect?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
  }

  export type borrowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<borrowCreateWithoutUserInput, borrowUncheckedCreateWithoutUserInput> | borrowCreateWithoutUserInput[] | borrowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: borrowCreateOrConnectWithoutUserInput | borrowCreateOrConnectWithoutUserInput[]
    createMany?: borrowCreateManyUserInputEnvelope
    connect?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type borrowUpdateManyWithoutUserNestedInput = {
    create?: XOR<borrowCreateWithoutUserInput, borrowUncheckedCreateWithoutUserInput> | borrowCreateWithoutUserInput[] | borrowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: borrowCreateOrConnectWithoutUserInput | borrowCreateOrConnectWithoutUserInput[]
    upsert?: borrowUpsertWithWhereUniqueWithoutUserInput | borrowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: borrowCreateManyUserInputEnvelope
    set?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    disconnect?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    delete?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    connect?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    update?: borrowUpdateWithWhereUniqueWithoutUserInput | borrowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: borrowUpdateManyWithWhereWithoutUserInput | borrowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: borrowScalarWhereInput | borrowScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type borrowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<borrowCreateWithoutUserInput, borrowUncheckedCreateWithoutUserInput> | borrowCreateWithoutUserInput[] | borrowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: borrowCreateOrConnectWithoutUserInput | borrowCreateOrConnectWithoutUserInput[]
    upsert?: borrowUpsertWithWhereUniqueWithoutUserInput | borrowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: borrowCreateManyUserInputEnvelope
    set?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    disconnect?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    delete?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    connect?: borrowWhereUniqueInput | borrowWhereUniqueInput[]
    update?: borrowUpdateWithWhereUniqueWithoutUserInput | borrowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: borrowUpdateManyWithWhereWithoutUserInput | borrowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: borrowScalarWhereInput | borrowScalarWhereInput[]
  }

  export type borrowListCreateNestedManyWithoutBookInput = {
    create?: XOR<borrowListCreateWithoutBookInput, borrowListUncheckedCreateWithoutBookInput> | borrowListCreateWithoutBookInput[] | borrowListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBookInput | borrowListCreateOrConnectWithoutBookInput[]
    createMany?: borrowListCreateManyBookInputEnvelope
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
  }

  export type borrowListUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<borrowListCreateWithoutBookInput, borrowListUncheckedCreateWithoutBookInput> | borrowListCreateWithoutBookInput[] | borrowListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBookInput | borrowListCreateOrConnectWithoutBookInput[]
    createMany?: borrowListCreateManyBookInputEnvelope
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
  }

  export type EnumbookTypeFieldUpdateOperationsInput = {
    set?: $Enums.bookType
  }

  export type NullableEnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status | null
  }

  export type borrowListUpdateManyWithoutBookNestedInput = {
    create?: XOR<borrowListCreateWithoutBookInput, borrowListUncheckedCreateWithoutBookInput> | borrowListCreateWithoutBookInput[] | borrowListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBookInput | borrowListCreateOrConnectWithoutBookInput[]
    upsert?: borrowListUpsertWithWhereUniqueWithoutBookInput | borrowListUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: borrowListCreateManyBookInputEnvelope
    set?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    disconnect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    delete?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    update?: borrowListUpdateWithWhereUniqueWithoutBookInput | borrowListUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: borrowListUpdateManyWithWhereWithoutBookInput | borrowListUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: borrowListScalarWhereInput | borrowListScalarWhereInput[]
  }

  export type borrowListUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<borrowListCreateWithoutBookInput, borrowListUncheckedCreateWithoutBookInput> | borrowListCreateWithoutBookInput[] | borrowListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBookInput | borrowListCreateOrConnectWithoutBookInput[]
    upsert?: borrowListUpsertWithWhereUniqueWithoutBookInput | borrowListUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: borrowListCreateManyBookInputEnvelope
    set?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    disconnect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    delete?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    update?: borrowListUpdateWithWhereUniqueWithoutBookInput | borrowListUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: borrowListUpdateManyWithWhereWithoutBookInput | borrowListUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: borrowListScalarWhereInput | borrowListScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutBorrowInput = {
    create?: XOR<userCreateWithoutBorrowInput, userUncheckedCreateWithoutBorrowInput>
    connectOrCreate?: userCreateOrConnectWithoutBorrowInput
    connect?: userWhereUniqueInput
  }

  export type borrowListCreateNestedManyWithoutBorrowInput = {
    create?: XOR<borrowListCreateWithoutBorrowInput, borrowListUncheckedCreateWithoutBorrowInput> | borrowListCreateWithoutBorrowInput[] | borrowListUncheckedCreateWithoutBorrowInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBorrowInput | borrowListCreateOrConnectWithoutBorrowInput[]
    createMany?: borrowListCreateManyBorrowInputEnvelope
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
  }

  export type borrowListUncheckedCreateNestedManyWithoutBorrowInput = {
    create?: XOR<borrowListCreateWithoutBorrowInput, borrowListUncheckedCreateWithoutBorrowInput> | borrowListCreateWithoutBorrowInput[] | borrowListUncheckedCreateWithoutBorrowInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBorrowInput | borrowListCreateOrConnectWithoutBorrowInput[]
    createMany?: borrowListCreateManyBorrowInputEnvelope
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type userUpdateOneRequiredWithoutBorrowNestedInput = {
    create?: XOR<userCreateWithoutBorrowInput, userUncheckedCreateWithoutBorrowInput>
    connectOrCreate?: userCreateOrConnectWithoutBorrowInput
    upsert?: userUpsertWithoutBorrowInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutBorrowInput, userUpdateWithoutBorrowInput>, userUncheckedUpdateWithoutBorrowInput>
  }

  export type borrowListUpdateManyWithoutBorrowNestedInput = {
    create?: XOR<borrowListCreateWithoutBorrowInput, borrowListUncheckedCreateWithoutBorrowInput> | borrowListCreateWithoutBorrowInput[] | borrowListUncheckedCreateWithoutBorrowInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBorrowInput | borrowListCreateOrConnectWithoutBorrowInput[]
    upsert?: borrowListUpsertWithWhereUniqueWithoutBorrowInput | borrowListUpsertWithWhereUniqueWithoutBorrowInput[]
    createMany?: borrowListCreateManyBorrowInputEnvelope
    set?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    disconnect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    delete?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    update?: borrowListUpdateWithWhereUniqueWithoutBorrowInput | borrowListUpdateWithWhereUniqueWithoutBorrowInput[]
    updateMany?: borrowListUpdateManyWithWhereWithoutBorrowInput | borrowListUpdateManyWithWhereWithoutBorrowInput[]
    deleteMany?: borrowListScalarWhereInput | borrowListScalarWhereInput[]
  }

  export type borrowListUncheckedUpdateManyWithoutBorrowNestedInput = {
    create?: XOR<borrowListCreateWithoutBorrowInput, borrowListUncheckedCreateWithoutBorrowInput> | borrowListCreateWithoutBorrowInput[] | borrowListUncheckedCreateWithoutBorrowInput[]
    connectOrCreate?: borrowListCreateOrConnectWithoutBorrowInput | borrowListCreateOrConnectWithoutBorrowInput[]
    upsert?: borrowListUpsertWithWhereUniqueWithoutBorrowInput | borrowListUpsertWithWhereUniqueWithoutBorrowInput[]
    createMany?: borrowListCreateManyBorrowInputEnvelope
    set?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    disconnect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    delete?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    connect?: borrowListWhereUniqueInput | borrowListWhereUniqueInput[]
    update?: borrowListUpdateWithWhereUniqueWithoutBorrowInput | borrowListUpdateWithWhereUniqueWithoutBorrowInput[]
    updateMany?: borrowListUpdateManyWithWhereWithoutBorrowInput | borrowListUpdateManyWithWhereWithoutBorrowInput[]
    deleteMany?: borrowListScalarWhereInput | borrowListScalarWhereInput[]
  }

  export type borrowCreateNestedOneWithoutBorrowListInput = {
    create?: XOR<borrowCreateWithoutBorrowListInput, borrowUncheckedCreateWithoutBorrowListInput>
    connectOrCreate?: borrowCreateOrConnectWithoutBorrowListInput
    connect?: borrowWhereUniqueInput
  }

  export type bookCreateNestedOneWithoutBorrowListInput = {
    create?: XOR<bookCreateWithoutBorrowListInput, bookUncheckedCreateWithoutBorrowListInput>
    connectOrCreate?: bookCreateOrConnectWithoutBorrowListInput
    connect?: bookWhereUniqueInput
  }

  export type borrowUpdateOneRequiredWithoutBorrowListNestedInput = {
    create?: XOR<borrowCreateWithoutBorrowListInput, borrowUncheckedCreateWithoutBorrowListInput>
    connectOrCreate?: borrowCreateOrConnectWithoutBorrowListInput
    upsert?: borrowUpsertWithoutBorrowListInput
    connect?: borrowWhereUniqueInput
    update?: XOR<XOR<borrowUpdateToOneWithWhereWithoutBorrowListInput, borrowUpdateWithoutBorrowListInput>, borrowUncheckedUpdateWithoutBorrowListInput>
  }

  export type bookUpdateOneRequiredWithoutBorrowListNestedInput = {
    create?: XOR<bookCreateWithoutBorrowListInput, bookUncheckedCreateWithoutBorrowListInput>
    connectOrCreate?: bookCreateOrConnectWithoutBorrowListInput
    upsert?: bookUpsertWithoutBorrowListInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBorrowListInput, bookUpdateWithoutBorrowListInput>, bookUncheckedUpdateWithoutBorrowListInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumbookTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.bookType | EnumbookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumbookTypeFilter<$PrismaModel> | $Enums.bookType
  }

  export type NestedEnumstatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableFilter<$PrismaModel> | $Enums.status | null
  }

  export type NestedEnumbookTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.bookType | EnumbookTypeFieldRefInput<$PrismaModel>
    in?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.bookType[] | ListEnumbookTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumbookTypeWithAggregatesFilter<$PrismaModel> | $Enums.bookType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbookTypeFilter<$PrismaModel>
    _max?: NestedEnumbookTypeFilter<$PrismaModel>
  }

  export type NestedEnumstatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatusNullableFilter<$PrismaModel>
    _max?: NestedEnumstatusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type borrowCreateWithoutUserInput = {
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    borrowList?: borrowListCreateNestedManyWithoutBorrowInput
  }

  export type borrowUncheckedCreateWithoutUserInput = {
    borrowId?: number
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    borrowList?: borrowListUncheckedCreateNestedManyWithoutBorrowInput
  }

  export type borrowCreateOrConnectWithoutUserInput = {
    where: borrowWhereUniqueInput
    create: XOR<borrowCreateWithoutUserInput, borrowUncheckedCreateWithoutUserInput>
  }

  export type borrowCreateManyUserInputEnvelope = {
    data: borrowCreateManyUserInput | borrowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type borrowUpsertWithWhereUniqueWithoutUserInput = {
    where: borrowWhereUniqueInput
    update: XOR<borrowUpdateWithoutUserInput, borrowUncheckedUpdateWithoutUserInput>
    create: XOR<borrowCreateWithoutUserInput, borrowUncheckedCreateWithoutUserInput>
  }

  export type borrowUpdateWithWhereUniqueWithoutUserInput = {
    where: borrowWhereUniqueInput
    data: XOR<borrowUpdateWithoutUserInput, borrowUncheckedUpdateWithoutUserInput>
  }

  export type borrowUpdateManyWithWhereWithoutUserInput = {
    where: borrowScalarWhereInput
    data: XOR<borrowUpdateManyMutationInput, borrowUncheckedUpdateManyWithoutUserInput>
  }

  export type borrowScalarWhereInput = {
    AND?: borrowScalarWhereInput | borrowScalarWhereInput[]
    OR?: borrowScalarWhereInput[]
    NOT?: borrowScalarWhereInput | borrowScalarWhereInput[]
    borrowId?: IntFilter<"borrow"> | number
    uuid?: StringFilter<"borrow"> | string
    note?: StringNullableFilter<"borrow"> | string | null
    borrowingTime?: DateTimeFilter<"borrow"> | Date | string
    returnTime?: DateTimeNullableFilter<"borrow"> | Date | string | null
    userId?: IntFilter<"borrow"> | number
  }

  export type borrowListCreateWithoutBookInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    borrow: borrowCreateNestedOneWithoutBorrowListInput
  }

  export type borrowListUncheckedCreateWithoutBookInput = {
    borrowListId?: number
    uuid?: string
    borrowId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type borrowListCreateOrConnectWithoutBookInput = {
    where: borrowListWhereUniqueInput
    create: XOR<borrowListCreateWithoutBookInput, borrowListUncheckedCreateWithoutBookInput>
  }

  export type borrowListCreateManyBookInputEnvelope = {
    data: borrowListCreateManyBookInput | borrowListCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type borrowListUpsertWithWhereUniqueWithoutBookInput = {
    where: borrowListWhereUniqueInput
    update: XOR<borrowListUpdateWithoutBookInput, borrowListUncheckedUpdateWithoutBookInput>
    create: XOR<borrowListCreateWithoutBookInput, borrowListUncheckedCreateWithoutBookInput>
  }

  export type borrowListUpdateWithWhereUniqueWithoutBookInput = {
    where: borrowListWhereUniqueInput
    data: XOR<borrowListUpdateWithoutBookInput, borrowListUncheckedUpdateWithoutBookInput>
  }

  export type borrowListUpdateManyWithWhereWithoutBookInput = {
    where: borrowListScalarWhereInput
    data: XOR<borrowListUpdateManyMutationInput, borrowListUncheckedUpdateManyWithoutBookInput>
  }

  export type borrowListScalarWhereInput = {
    AND?: borrowListScalarWhereInput | borrowListScalarWhereInput[]
    OR?: borrowListScalarWhereInput[]
    NOT?: borrowListScalarWhereInput | borrowListScalarWhereInput[]
    borrowListId?: IntFilter<"borrowList"> | number
    uuid?: StringFilter<"borrowList"> | string
    borrowId?: IntFilter<"borrowList"> | number
    bookId?: IntFilter<"borrowList"> | number
    createdAt?: DateTimeFilter<"borrowList"> | Date | string
    updatedAt?: DateTimeFilter<"borrowList"> | Date | string
  }

  export type userCreateWithoutBorrowInput = {
    uuid?: string
    name?: string
    password?: string
    email?: string
    role?: $Enums.role
    profilePicture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUncheckedCreateWithoutBorrowInput = {
    userId?: number
    uuid?: string
    name?: string
    password?: string
    email?: string
    role?: $Enums.role
    profilePicture?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userCreateOrConnectWithoutBorrowInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutBorrowInput, userUncheckedCreateWithoutBorrowInput>
  }

  export type borrowListCreateWithoutBorrowInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: bookCreateNestedOneWithoutBorrowListInput
  }

  export type borrowListUncheckedCreateWithoutBorrowInput = {
    borrowListId?: number
    uuid?: string
    bookId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type borrowListCreateOrConnectWithoutBorrowInput = {
    where: borrowListWhereUniqueInput
    create: XOR<borrowListCreateWithoutBorrowInput, borrowListUncheckedCreateWithoutBorrowInput>
  }

  export type borrowListCreateManyBorrowInputEnvelope = {
    data: borrowListCreateManyBorrowInput | borrowListCreateManyBorrowInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutBorrowInput = {
    update: XOR<userUpdateWithoutBorrowInput, userUncheckedUpdateWithoutBorrowInput>
    create: XOR<userCreateWithoutBorrowInput, userUncheckedCreateWithoutBorrowInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutBorrowInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutBorrowInput, userUncheckedUpdateWithoutBorrowInput>
  }

  export type userUpdateWithoutBorrowInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profilePicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateWithoutBorrowInput = {
    userId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    profilePicture?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowListUpsertWithWhereUniqueWithoutBorrowInput = {
    where: borrowListWhereUniqueInput
    update: XOR<borrowListUpdateWithoutBorrowInput, borrowListUncheckedUpdateWithoutBorrowInput>
    create: XOR<borrowListCreateWithoutBorrowInput, borrowListUncheckedCreateWithoutBorrowInput>
  }

  export type borrowListUpdateWithWhereUniqueWithoutBorrowInput = {
    where: borrowListWhereUniqueInput
    data: XOR<borrowListUpdateWithoutBorrowInput, borrowListUncheckedUpdateWithoutBorrowInput>
  }

  export type borrowListUpdateManyWithWhereWithoutBorrowInput = {
    where: borrowListScalarWhereInput
    data: XOR<borrowListUpdateManyMutationInput, borrowListUncheckedUpdateManyWithoutBorrowInput>
  }

  export type borrowCreateWithoutBorrowListInput = {
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    user: userCreateNestedOneWithoutBorrowInput
  }

  export type borrowUncheckedCreateWithoutBorrowListInput = {
    borrowId?: number
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
    userId: number
  }

  export type borrowCreateOrConnectWithoutBorrowListInput = {
    where: borrowWhereUniqueInput
    create: XOR<borrowCreateWithoutBorrowListInput, borrowUncheckedCreateWithoutBorrowListInput>
  }

  export type bookCreateWithoutBorrowListInput = {
    uuid?: string
    bookName?: string
    bookType?: $Enums.bookType
    status?: $Enums.status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookUncheckedCreateWithoutBorrowListInput = {
    bookId?: number
    uuid?: string
    bookName?: string
    bookType?: $Enums.bookType
    status?: $Enums.status | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookCreateOrConnectWithoutBorrowListInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBorrowListInput, bookUncheckedCreateWithoutBorrowListInput>
  }

  export type borrowUpsertWithoutBorrowListInput = {
    update: XOR<borrowUpdateWithoutBorrowListInput, borrowUncheckedUpdateWithoutBorrowListInput>
    create: XOR<borrowCreateWithoutBorrowListInput, borrowUncheckedCreateWithoutBorrowListInput>
    where?: borrowWhereInput
  }

  export type borrowUpdateToOneWithWhereWithoutBorrowListInput = {
    where?: borrowWhereInput
    data: XOR<borrowUpdateWithoutBorrowListInput, borrowUncheckedUpdateWithoutBorrowListInput>
  }

  export type borrowUpdateWithoutBorrowListInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutBorrowNestedInput
  }

  export type borrowUncheckedUpdateWithoutBorrowListInput = {
    borrowId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type bookUpsertWithoutBorrowListInput = {
    update: XOR<bookUpdateWithoutBorrowListInput, bookUncheckedUpdateWithoutBorrowListInput>
    create: XOR<bookCreateWithoutBorrowListInput, bookUncheckedCreateWithoutBorrowListInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBorrowListInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBorrowListInput, bookUncheckedUpdateWithoutBorrowListInput>
  }

  export type bookUpdateWithoutBorrowListInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    bookName?: StringFieldUpdateOperationsInput | string
    bookType?: EnumbookTypeFieldUpdateOperationsInput | $Enums.bookType
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookUncheckedUpdateWithoutBorrowListInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    bookName?: StringFieldUpdateOperationsInput | string
    bookType?: EnumbookTypeFieldUpdateOperationsInput | $Enums.bookType
    status?: NullableEnumstatusFieldUpdateOperationsInput | $Enums.status | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowCreateManyUserInput = {
    borrowId?: number
    uuid?: string
    note?: string | null
    borrowingTime?: Date | string
    returnTime?: Date | string | null
  }

  export type borrowUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowList?: borrowListUpdateManyWithoutBorrowNestedInput
  }

  export type borrowUncheckedUpdateWithoutUserInput = {
    borrowId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowList?: borrowListUncheckedUpdateManyWithoutBorrowNestedInput
  }

  export type borrowUncheckedUpdateManyWithoutUserInput = {
    borrowId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    borrowingTime?: DateTimeFieldUpdateOperationsInput | Date | string
    returnTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowListCreateManyBookInput = {
    borrowListId?: number
    uuid?: string
    borrowId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type borrowListUpdateWithoutBookInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrow?: borrowUpdateOneRequiredWithoutBorrowListNestedInput
  }

  export type borrowListUncheckedUpdateWithoutBookInput = {
    borrowListId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    borrowId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowListUncheckedUpdateManyWithoutBookInput = {
    borrowListId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    borrowId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowListCreateManyBorrowInput = {
    borrowListId?: number
    uuid?: string
    bookId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type borrowListUpdateWithoutBorrowInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutBorrowListNestedInput
  }

  export type borrowListUncheckedUpdateWithoutBorrowInput = {
    borrowListId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borrowListUncheckedUpdateManyWithoutBorrowInput = {
    borrowListId?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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