#!/usr/bin/env node

import { isFunction } from '@package-name/common';
import { Main } from '@package-name/main';
import { container, dependencies } from '@package-name/ioc';

if (isFunction(Main.run)) {
  Main.run(container, dependencies);
}
