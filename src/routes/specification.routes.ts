import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  const { name, description } = request.body;

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRoutes };
