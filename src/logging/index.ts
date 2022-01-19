import { Logger, LogLevel, LogLevelStrings, isLogLevel } from './logger';

export { Logger, LogLevel, LogLevelStrings, isLogLevel };

export * from './default-logger';

export function isLogger(x: Record<string, unknown>): x is Logger {
  return (
    x !== null &&
    x !== undefined &&
    typeof x === 'object' &&
    typeof x.debug === 'function' &&
    typeof x.error === 'function' &&
    typeof x.fatal === 'function' &&
    typeof x.trace === 'function' &&
    typeof x.info === 'function' &&
    typeof x.warn === 'function'
  );
}
