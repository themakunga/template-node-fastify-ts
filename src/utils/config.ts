import path from 'path';
import * as dotenv from 'dotenv';
import envSchema from 'env-schema';
import S from 'fluent-json-schema';

export default function config(): void {
  const env = dotenv.config({
    path: path.join(__dirname, `../../${process.env.NODE_ENV ?? 'development'}.env`),
  });

  if (env.error) {
    throw new Error(env.error.message);
  }

  envSchema({
    data: env.parsed,
    schema: S.object()
      .prop('NODE_ENV', S.string().enum(['production', 'testing', 'debug', 'development']).required())
      .prop('HOST', S.string().required())
      .prop('PORT', S.string().required()),
  });
}
