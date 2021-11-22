import consola from 'consola';

export default function printRoutes(server: any): void {
  const { routes } = server;
  const hidden: string[] = [
    '/docs/uiConfig',
    '/docs/initOAuth',
    '/docs/static/*',
    '/docs/*',
  ];

  routes.forEach((value: any[], key: string) => {
    if (hidden.indexOf(key) === -1) {
      consola.info(`method: ${value[0].method}, path: ${key}`);
    }
  });
}
