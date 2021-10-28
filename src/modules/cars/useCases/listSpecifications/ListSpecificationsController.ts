import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationsUseCases";

class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.status(200).json(this.listSpecificationUseCase.execute());
  }
}

export { ListSpecificationsController };
