import { Module } from "@nestjs/common";
import { JsonFormModuleBase } from "./base/jsonForm.module.base";
import { JsonFormService } from "./jsonForm.service";
import { JsonFormController } from "./jsonForm.controller";
import { JsonFormResolver } from "./jsonForm.resolver";

@Module({
  imports: [JsonFormModuleBase],
  controllers: [JsonFormController],
  providers: [JsonFormService, JsonFormResolver],
  exports: [JsonFormService],
})
export class JsonFormModule {}
