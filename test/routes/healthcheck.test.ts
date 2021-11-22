import { helper } from '../helper';

describe('healthcheck', () => {
  let server: any;
  beforeAll(async () => {
    server = await helper();
  });

  afterAll(async () => { await server.close(); });

  it('healthcheck must return message', async () => {
    const res = await server.inject({
      url: '/v1/healthcheck',
    });

    expect(res.statusCode).toBe(200);
  });
});
