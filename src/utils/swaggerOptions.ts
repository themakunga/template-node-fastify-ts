import { FastifyDynamicSwaggerOptions } from 'fastify-swagger';

const {
  npm_package_name: name,
  npm_package_description: description,
  npm_package_version: version,
  npm_package_author: author,
  TAGS: taglist,
} = process.env;

const [user, email] = author!.replace('>', '').split('<');
const tags = taglist?.split(',').map((v) => ({ name: v }));

const swaggerOptions: FastifyDynamicSwaggerOptions = {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: name || 'CHANGE ME',
      description: description || 'Change Me',
      version: version || '1.0.0',
      contact: {
        email,
        name: user,
      },
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags,
  },
  hideUntagged: false,
  exposeRoute: true,
};

export default swaggerOptions;
