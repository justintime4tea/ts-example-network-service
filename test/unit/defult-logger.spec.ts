import { DefaultLogger, Logger } from '@package-name/logging';

describe('DefautLogger', () => {
  it('should log all messages when log level is at six', () => {
    const mockConsole = {
      trace: jest.fn(),
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
      log: jest.fn(),
    };
    const logger: Logger = new DefaultLogger(
      6,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(1);
    expect(mockConsole.debug.mock.calls.length).toBe(1);
    expect(mockConsole.info.mock.calls.length).toBe(1);
    expect(mockConsole.warn.mock.calls.length).toBe(1);
    expect(mockConsole.error.mock.calls.length).toBe(1);
    expect(mockConsole.log.mock.calls.length).toBe(1);
  });

  it('should log all messages at or "above" debug when log level is at five', () => {
    const mockConsole = buildMockConsole();
    const logger: Logger = new DefaultLogger(
      5,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(0);
    expect(mockConsole.debug.mock.calls.length).toBe(1);
    expect(mockConsole.info.mock.calls.length).toBe(1);
    expect(mockConsole.warn.mock.calls.length).toBe(1);
    expect(mockConsole.error.mock.calls.length).toBe(1);
    expect(mockConsole.log.mock.calls.length).toBe(1);
  });

  it('should log all messages at or "above" info when log level is at four', () => {
    const mockConsole = buildMockConsole();
    const logger: Logger = new DefaultLogger(
      4,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(0);
    expect(mockConsole.debug.mock.calls.length).toBe(0);
    expect(mockConsole.info.mock.calls.length).toBe(1);
    expect(mockConsole.warn.mock.calls.length).toBe(1);
    expect(mockConsole.error.mock.calls.length).toBe(1);
    expect(mockConsole.log.mock.calls.length).toBe(1);
  });

  it('should log all messages at or "above" warn when log level is at three', () => {
    const mockConsole = buildMockConsole();
    const logger: Logger = new DefaultLogger(
      3,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(0);
    expect(mockConsole.debug.mock.calls.length).toBe(0);
    expect(mockConsole.info.mock.calls.length).toBe(0);
    expect(mockConsole.warn.mock.calls.length).toBe(1);
    expect(mockConsole.error.mock.calls.length).toBe(1);
    expect(mockConsole.log.mock.calls.length).toBe(1);
  });

  it('should log all messages at or "above" error when log level is at two', () => {
    const mockConsole = buildMockConsole();
    const logger: Logger = new DefaultLogger(
      2,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(0);
    expect(mockConsole.debug.mock.calls.length).toBe(0);
    expect(mockConsole.info.mock.calls.length).toBe(0);
    expect(mockConsole.warn.mock.calls.length).toBe(0);
    expect(mockConsole.error.mock.calls.length).toBe(1);
    expect(mockConsole.log.mock.calls.length).toBe(1);
  });

  it('should log only fatal messages when log level is at one', () => {
    const mockConsole = buildMockConsole();
    const logger: Logger = new DefaultLogger(
      1,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(0);
    expect(mockConsole.debug.mock.calls.length).toBe(0);
    expect(mockConsole.info.mock.calls.length).toBe(0);
    expect(mockConsole.warn.mock.calls.length).toBe(0);
    expect(mockConsole.error.mock.calls.length).toBe(0);
    expect(mockConsole.log.mock.calls.length).toBe(1);
  });

  it('should not log any messages when log level is at zero', () => {
    const mockConsole = buildMockConsole();
    const logger: Logger = new DefaultLogger(
      0,
      mockConsole as unknown as Console
    );
    attemptToLogMessageAtEveryLevel(logger);

    expect(mockConsole.trace.mock.calls.length).toBe(0);
    expect(mockConsole.debug.mock.calls.length).toBe(0);
    expect(mockConsole.info.mock.calls.length).toBe(0);
    expect(mockConsole.warn.mock.calls.length).toBe(0);
    expect(mockConsole.error.mock.calls.length).toBe(0);
    expect(mockConsole.log.mock.calls.length).toBe(0);
  });
});

function buildMockConsole() {
  return {
    trace: jest.fn(),
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    log: jest.fn(),
  };
}

function attemptToLogMessageAtEveryLevel(logger: Logger) {
  logger.trace('foobar_trace');
  logger.debug('foobar_debug');
  logger.info('foobar_info');
  logger.warn('foobar_warn');
  logger.error('foobar_error');
  logger.fatal('foobar_fatal');
}
