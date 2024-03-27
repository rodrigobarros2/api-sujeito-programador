import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };

    console.log('name', name);
    console.log('email', email);

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ name, email });

    res.send(customer);
  }
}

export { CreateCustomerController };
