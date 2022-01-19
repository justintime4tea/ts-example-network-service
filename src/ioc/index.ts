import 'reflect-metadata';
import { Container } from 'inversify';

import { TYPES } from './constants';
export { TYPES };

import { default as dependencies } from './dependencies';

const container = new Container();

export { container, dependencies };
