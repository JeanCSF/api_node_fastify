import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("Id is required");
    }

    const customerExists = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!customerExists) {
      throw new Error("Customer not found");
    }

    await prismaClient.customer.delete({
      where: {
        id: customerExists.id,
      },
    });

    return { message: `Customer ${customerExists.name} deleted` };
  }
}

export { DeleteCustomerService };
