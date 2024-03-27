import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomersService } from '../services/DeleteCustomersService';

class DeleteCustomerControler {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.query as { id: string };

    const customerService = new DeleteCustomersService();

    const customer = await customerService.execute({ id });

    res.send(customer);
  }
}
export { DeleteCustomerControler };
