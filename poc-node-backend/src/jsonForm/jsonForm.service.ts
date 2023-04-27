import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JsonFormServiceBase } from "./base/jsonForm.service.base";

@Injectable()
export class JsonFormService extends JsonFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
