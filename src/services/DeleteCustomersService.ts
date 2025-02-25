import { error } from 'console';
import prismaClient from '../prisma';

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomersService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error('Solicitação invalida, selecione um usuário');
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error('Cliente não existe');
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: 'Deletado com sucesso!' };
  }
}

export { DeleteCustomersService };
