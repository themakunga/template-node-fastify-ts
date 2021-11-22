import { RouteShorthandOptions } from 'fastify';

const opts: RouteShorthandOptions = {
  schema: {
    description: 'health check status',
    tags: ['health'],
    response: {
      200: {
        type: 'object',
        description: 'success response',
        properties: {
          message: {
            type: 'string',
            example: 'OK',
          },
        },
      },
    },
  },
};

export default opts;
