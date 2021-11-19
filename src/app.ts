import { fastify, FastifyInstance } from 'fastify';
import fastifySwagger from 'fastify-swagger';
import fastifyNow from 'fastify-now';
import path from 'path';
import loggerOptions from '~utils/loggerOptions';
import swaggerOptions from '~utils/swaggerOptions';
import fastifyRoutes from '~utils/routes';

export async function build(opts = {}): Promise<FastifyInstance> {
  const fs: FastifyInstance = fastify({
    ...opts,
    logger: loggerOptions,
  });

  fs.register(fastifyRoutes);
  fs.register(fastifySwagger, swaggerOptions);

  fs.register(fastifyNow, {
    routesFolder: path.join(__dirname, './routes'),
    pathPrefix: '/v1',
  });

  return fs;
}
