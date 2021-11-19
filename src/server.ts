/* eslint-disable import/first */
require('module-alias/register');

import consola from 'consola';
import config from '~utils/config';
import printRoutes from '~utils/routes';
import { build } from './app';

config();

const {
  PORT: port,
  HOST: host,
} = process.env;

async function start() {
  try {
    const server = await build();
    printRoutes(server);
    await server.listen(port || 3000, host || 'localhost');
    const address = server.server.address();
    const prt = typeof address === 'string' ? address : address?.port;

    consola.info(`Server start at ${prt}`);
  } catch (error) {
    consola.error(error);
    process.exit(1);
  }
}

start();
