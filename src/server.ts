import fastify from 'fastify';
import cors from '@fastify/cors';

import { routes } from './routes';

const app = fastify({ logger: true });

app.setErrorHandler((err, req, res) => {
  res.code(400).send({ message: err.message });
});

const start = async () => {
  await app.register(routes);
  await app.register(cors);

  try {
    await app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
