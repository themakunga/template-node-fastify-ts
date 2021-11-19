import { FastifyLoggerOptions } from 'fastify';

const date = new Date();
const now = date.toISOString().split('T')[0];

const loggerOptions: FastifyLoggerOptions = {
  level: process.env.LOG_lEVEL || 'info',
  file: `./logs/log_${now}.log`,
  prettyPrint: false,
  serializers: {
    res(reply) {
      return {
        statusCode: reply.statusCode,
      };
    },
    req(request) {
      return {
        method: request.method,
        url: request.url,
        path: request.routerPath,
      };
    },
  },
};

export default loggerOptions;
