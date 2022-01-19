import { AsyncContainerModule, Container } from 'inversify';

import { TYPES } from '@package-name/ioc';
import { isLogger, Logger } from '@package-name/logging';

export class Main {
  public static async run(
    container: Container,
    dependencies: AsyncContainerModule
  ) {
    await container.loadAsync(dependencies);

    const logger: Logger = container.get(TYPES.Logger);

    if (isLogger(logger)) {
      logger.debug('Starting package-name');
    }
  }
}
