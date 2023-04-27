import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JsonFormService } from "./jsonForm.service";
import { JsonFormControllerBase } from "./base/jsonForm.controller.base";

@swagger.ApiTags("jsonForms")
@common.Controller("jsonForms")
export class JsonFormController extends JsonFormControllerBase {
  constructor(
    protected readonly service: JsonFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
