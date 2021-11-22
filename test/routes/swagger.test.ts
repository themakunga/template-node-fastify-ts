import { helper } from '../helper';

describe('Swagger', () => {
  let server: any;
  beforeEach(async () => {
    server = await helper();
  });

  afterEach(() => { server.close(); });

  it('core route test must return error', async () => {
    const res = await server.inject({
      url: '/docs/json',
    });

    expect(res.statusCode).toBe(200);
  });
});
