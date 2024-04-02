import prismaClient from "../prisma";

class ReadCustomerService {
  async execute() {
    const customers = await prismaClient.customer.findMany();

    return customers;
  }
}

export { ReadCustomerService };
