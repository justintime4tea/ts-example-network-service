import { AsyncContainerModule } from 'inversify';

import {
  DefaultLogger,
  Logger,
  isLogLevel,
  LogLevel,
} from '@package-name/logging';

import { TYPES } from '@package-name/ioc';

/**
 * This is where all abstractions are bound to their concretions.
 *
 * Bind a factory here, or some other class inspired by some other
 * creational patern, when you need to "new something up" somewhere else in your code.
 */
export default new AsyncContainerModule(async (bind) => {
  const logLevel = determineLogLevel();
  const logger: Logger = new DefaultLogger(logLevel, console);
  bind<Logger>(TYPES.Logger).toConstantValue(logger);
});

/**
 * Provides the "user desired" log level for the node process in which this package is executed.
 * If the user expresses no desire for a given log level then the a sensible default log level is returned.
 *
 * @returns log level
 */
export function determineLogLevel(): LogLevel {
  if (typeof process.env.LOG_LEVEL !== 'string') {
    return LogLevel.INFO;
  }

  const logLevel = parseInt(process.env.LOG_LEVEL);

  if (isNaN(logLevel)) {
    return LogLevel.INFO;
  }

  if (!isLogLevel(logLevel)) {
    return LogLevel.INFO;
  }

  return logLevel;
}
