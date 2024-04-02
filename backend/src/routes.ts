import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ReadCustomerController } from "./controllers/ReadCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return { hello: "world" };
    }
  );

  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ReadCustomerController().handle(request, reply);
    }
  );

  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.delete(
    "/customer/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );
}
