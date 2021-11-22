/* eslint-disable no-unused-vars */
import { FastifyRequest, FastifyReply } from 'fastify';
import { IHealtcheck } from '~/interfaces/healthcheck';

export default async function healtcheckController(
  _req: FastifyRequest,
  _res: FastifyReply,
): Promise<IHealtcheck> {
  return { message: 'OK' };
}
