import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';

import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomersController } from './controllers/ListCustomersController';
import { DeleteCustomerControler } from './controllers/DeleteCustomerControler';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/test', async (req: FastifyRequest, res: FastifyReply) => {
    return { ok: 'Acesse um endpoint' };
  });

  fastify.post('/customer', async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateCustomerController().handle(req, res);
  });

  fastify.get('/customers', async (req: FastifyRequest, res: FastifyReply) => {
    return new ListCustomersController().handle(req, res);
  });

  fastify.delete('/customer', async (req: FastifyRequest, res: FastifyReply) => {
    return new DeleteCustomerControler().handle(req, res);
  });
}
