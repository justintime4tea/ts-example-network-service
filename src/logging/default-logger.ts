import { Logger, LogLevel } from '@package-name/logging';

// tslint:disable: no-console
export class DefaultLogger implements Logger {
  public readonly level: LogLevel;
  private readonly console: Console;

  public constructor(level: LogLevel, console: Console) {
    this.level = level;
    this.console = console;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  fatal(...msg: string[]): void;
  fatal(...logAble: Record<string, unknown>[]): void;
  fatal(...logAble: any[]): void {
    if (this.level >= LogLevel.FATAL) {
      this.console.log(...logAble);
    }
  }

  error(...msg: string[]): void;
  error(...logAble: Record<string, unknown>[]): void;
  error(...logAble: any[]): void {
    if (this.level >= LogLevel.ERROR) {
      this.console.error(...logAble);
    }
  }

  warn(...msg: string[]): void;
  warn(...logAble: Record<string, unknown>[]): void;
  warn(...logAble: any[]): void {
    if (this.level >= LogLevel.WARN) {
      this.console.warn(...logAble);
    }
  }

  info(...msg: string[]): void;
  info(...logAble: Record<string, unknown>[]): void;
  info(...logAble: any[]): void {
    if (this.level >= LogLevel.INFO) {
      this.console.info(...logAble);
    }
  }

  debug(...msg: string[]): void;
  debug(...logAble: Record<string, unknown>[]): void;
  debug(...logAble: any[]): void {
    if (this.level >= LogLevel.DEBUG) {
      this.console.debug(...logAble);
    }
  }

  trace(...msg: string[]): void;
  trace(...logAble: Record<string, unknown>[]): void;
  trace(...logAble: any[]): void {
    if (this.level >= LogLevel.TRACE) {
      this.console.trace(...logAble);
    }
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
}
