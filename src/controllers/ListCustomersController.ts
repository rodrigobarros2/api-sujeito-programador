import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomersService } from '../services/ListCustomersService';

class ListCustomersController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const listCustomersService = new ListCustomersService();

    //assi que tiver o retorno devolvemos a res
    const customers = await listCustomersService.execute();

    res.send(customers);
  }
}

export { ListCustomersController };
