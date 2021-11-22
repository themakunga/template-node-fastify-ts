/* eslint-disable no-void */
import { FastifyInstance } from 'fastify';
import config from '../src/utils/config';
import App from '../src/app';

const helper = async () => {
  config();

  const server: FastifyInstance = await App();
  await server.ready();
  jest.clearAllMocks();

  return server;
};

export { helper };
