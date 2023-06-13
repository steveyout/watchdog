// Update with your config settings.

/**
 * @type {pino | (<Options extends LoggerOptions | DestinationStream>(optionsOrStream?: Options) => Logger<Options>) | (<Options extends LoggerOptions>(options: Options, stream: DestinationStream) => Logger<Options>) | {pino: pino; BaseLogger: BaseLogger; ChildLoggerOptions: ChildLoggerOptions; destination: (dest?: (string | number |  | pino.DestinationStream | NodeJS.WritableStream)) => ; default: pino | (<Options extends LoggerOptions | DestinationStream>(optionsOrStream?: Options) => Logger<Options>) | (<Options extends LoggerOptions>(options: Options, stream: DestinationStream) => Logger<Options>); LogFn: LogFn; SerializedError: pinoStdSerializers.SerializedError; DestinationStreamWithMetadata: (pino.DestinationStream & {'[symbols.needsMetadataGsym]'?: false}) | (pino.DestinationStream & pino.DestinationStreamHasMetadata); symbols: {readonly setLevelSym: typeof setLevelSym; readonly getLevelSym: typeof getLevelSym; readonly levelValSym: typeof levelValSym; readonly useLevelLabelsSym: typeof useLevelLabelsSym; readonly mixinSym: typeof mixinSym; readonly lsCacheSym: typeof lsCacheSym; readonly chindingsSym: typeof chindingsSym; readonly parsedChindingsSym: typeof parsedChindingsSym; readonly asJsonSym: typeof asJsonSym; readonly writeSym: typeof writeSym; readonly serializersSym: typeof serializersSym; readonly redactFmtSym: typeof redactFmtSym; readonly timeSym: typeof timeSym; readonly timeSliceIndexSym: typeof timeSliceIndexSym; readonly streamSym: typeof streamSym; readonly stringifySym: typeof stringifySym; readonly stringifySafeSym: typeof stringifySafeSym; readonly stringifiersSym: typeof stringifiersSym; readonly endSym: typeof endSym; readonly formatOptsSym: typeof formatOptsSym; readonly messageKeySym: typeof messageKeySym; readonly errorKeySym: typeof errorKeySym; readonly nestedKeySym: typeof nestedKeySym; readonly wildcardFirstSym: typeof wildcardFirstSym; readonly needsMetadataGsym: typeof needsMetadataGsym; readonly useOnlyCustomLevelsSym: typeof useOnlyCustomLevelsSym; readonly formattersSym: typeof formattersSym; readonly hooksSym: typeof hooksSym}; stdSerializers: any; MultiStreamOptions: MultiStreamOptions; TransportMultiOptions: TransportMultiOptions; SerializerFn: (value: any) => any; StreamEntry: StreamEntry; stdTimeFunctions: {epochTime: TimeFn; unixTime: TimeFn; nullTime: TimeFn; isoTime: TimeFn}; SerializedRequest: pinoStdSerializers.SerializedRequest; Bindings: Bindings; WriteFn: (o: object) => void; LevelMapping: LevelMapping; TransportTargetOptions: TransportTargetOptions; version: string; DestinationStream: DestinationStream; LevelChangeEventListener: (lvl: (pino.LevelWithSilent | string), val: number, prevLvl: (pino.LevelWithSilent | string), prevVal: number, logger: pino.Logger<pino.LoggerOptions>) => void; Level: "fatal" | "error" | "warn" | "info" | "debug" | "trace"; levels: pino.LevelMapping; MultiStreamRes: MultiStreamRes; transport: <TransportOptions=Record<string, any>>(options: (pino.TransportSingleOptions<TransportOptions> | pino.TransportMultiOptions<TransportOptions> | pino.TransportPipelineOptions<TransportOptions>)) => ThreadStream; LogDescriptor: LogDescriptor; multistream: (streamsArray: ((pino.DestinationStream | pino.StreamEntry)[] | pino.DestinationStream | pino.StreamEntry), opts?: pino.MultiStreamOptions) => pino.MultiStreamRes; TransportPipelineOptions: TransportPipelineOptions; TransportSingleOptions: TransportSingleOptions; LogEvent: LogEvent; LevelWithSilent: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent"; SerializedResponse: pinoStdSerializers.SerializedResponse; Logger: pino.BaseLogger & LoggerExtras<Options> & Options extends {customLevels: Record<string, number>} ? Record<keyof Options["customLevels"], LogFn> : Record<never, LogFn>; LoggerOptions: LoggerOptions; TransportBaseOptions: TransportBaseOptions; P: pino | (<Options extends LoggerOptions | DestinationStream>(optionsOrStream?: Options) => Logger<Options>) | (<Options extends LoggerOptions>(options: Options, stream: DestinationStream) => Logger<Options>)}}
 */
require('dotenv').config();
const pino = require('pino');
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    log: {
      warn(message) {
        logger.warn(message);
      },
      error(message) {
        logger.error(message);
      },
      deprecate(message) {
        logger.warn(message);
      },
      debug(message) {
        logger.debug(message);
      },
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
