import { helper } from '../helper';

describe('Root Test', () => {
  let server: any;
  beforeEach(async () => {
    server = await helper();
  });

  afterEach(() => { server.close(); });

  it('core route test must return error', async () => {
    const res = await server.inject({
      url: '/',
    });

    expect(res.statusCode).toBe(404);
  });
});
