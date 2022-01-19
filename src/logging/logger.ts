export enum LogLevel {
  OFF = 0,
  FATAL = 1,
  ERROR = 2,
  WARN = 3,
  INFO = 4,
  DEBUG = 5,
  TRACE = 6,
}

export type LogLevelStrings = keyof typeof LogLevel;

export function isLogLevel(l: unknown): l is LogLevel {
  return typeof l === 'number' && Object.values(LogLevel).includes(l);
}

export interface Logger {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  fatal(...msg: string[]): void;
  fatal(...obj: Record<string, unknown>[]): void;
  error(...msg: string[]): void;
  error(...obj: Record<string, unknown>[]): void;
  warn(...msg: string[]): void;
  warn(...obj: Record<string, unknown>[]): void;
  info(...msg: string[]): void;
  info(...obj: Record<string, unknown>[]): void;
  debug(...msg: string[]): void;
  debug(...obj: Record<string, unknown>[]): void;
  trace(...msg: string[]): void;
  trace(...obj: Record<string, unknown>[]): void;
  [propName: string]: any;
  /** eslint-enable @typescript-eslint/no-explicit-any */
}
