/* eslint-disable no-void */
import { fastify, FastifyInstance } from 'fastify';
import fastifySwagger from 'fastify-swagger';
import fastifyAutoload from 'fastify-autoload';
import { join } from 'path';
import fastifyRoutes from 'fastify-routes';
import swaggerOptions from '~utils/swaggerOptions';
import loggerOptions from './utils/loggerOptions';

export default async function build(opts = {}): Promise<FastifyInstance> {
  const fs: FastifyInstance = fastify({
    ...opts,
    logger: loggerOptions,
  });

  fs.register(fastifyRoutes);
  fs.register(fastifySwagger, swaggerOptions);

  fs.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
    options: { prefix: '/v1' },
    routeParams: true,
  });
  return fs;
}
