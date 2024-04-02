import { FastifyRequest,FastifyReply } from "fastify";
import { ReadCustomerService } from "../services/ReadCustomerService";

class ReadCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    
    const customers = await new ReadCustomerService().execute();
    reply.send(customers);
  }
}

export { ReadCustomerController };
