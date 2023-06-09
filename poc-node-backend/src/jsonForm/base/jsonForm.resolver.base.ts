/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateJsonFormArgs } from "./CreateJsonFormArgs";
import { UpdateJsonFormArgs } from "./UpdateJsonFormArgs";
import { DeleteJsonFormArgs } from "./DeleteJsonFormArgs";
import { JsonFormFindManyArgs } from "./JsonFormFindManyArgs";
import { JsonFormFindUniqueArgs } from "./JsonFormFindUniqueArgs";
import { JsonForm } from "./JsonForm";
import { JsonFormService } from "../jsonForm.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => JsonForm)
export class JsonFormResolverBase {
  constructor(
    protected readonly service: JsonFormService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "JsonForm",
    action: "read",
    possession: "any",
  })
  async _jsonFormsMeta(
    @graphql.Args() args: JsonFormFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [JsonForm])
  @nestAccessControl.UseRoles({
    resource: "JsonForm",
    action: "read",
    possession: "any",
  })
  async jsonForms(
    @graphql.Args() args: JsonFormFindManyArgs
  ): Promise<JsonForm[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => JsonForm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JsonForm",
    action: "read",
    possession: "own",
  })
  async jsonForm(
    @graphql.Args() args: JsonFormFindUniqueArgs
  ): Promise<JsonForm | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JsonForm)
  @nestAccessControl.UseRoles({
    resource: "JsonForm",
    action: "create",
    possession: "any",
  })
  async createJsonForm(
    @graphql.Args() args: CreateJsonFormArgs
  ): Promise<JsonForm> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JsonForm)
  @nestAccessControl.UseRoles({
    resource: "JsonForm",
    action: "update",
    possession: "any",
  })
  async updateJsonForm(
    @graphql.Args() args: UpdateJsonFormArgs
  ): Promise<JsonForm | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => JsonForm)
  @nestAccessControl.UseRoles({
    resource: "JsonForm",
    action: "delete",
    possession: "any",
  })
  async deleteJsonForm(
    @graphql.Args() args: DeleteJsonFormArgs
  ): Promise<JsonForm | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
