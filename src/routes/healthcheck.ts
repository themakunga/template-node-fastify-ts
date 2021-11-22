import { FastifyInstance } from 'fastify';
import healtcheckController from '~controllers/healthcheck';
import opts from '~schemas/healthcheck';

export default function healthcheck(fastify: FastifyInstance, options: any, done: any) {
  fastify.get('/healthcheck', { ...options, ...opts }, healtcheckController);
  done();
}
