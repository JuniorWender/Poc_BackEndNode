/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFormWhereInput } from "./JsonFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class JsonFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JsonFormWhereInput,
  })
  @ValidateNested()
  @Type(() => JsonFormWhereInput)
  @IsOptional()
  @Field(() => JsonFormWhereInput, {
    nullable: true,
  })
  every?: JsonFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => JsonFormWhereInput,
  })
  @ValidateNested()
  @Type(() => JsonFormWhereInput)
  @IsOptional()
  @Field(() => JsonFormWhereInput, {
    nullable: true,
  })
  some?: JsonFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => JsonFormWhereInput,
  })
  @ValidateNested()
  @Type(() => JsonFormWhereInput)
  @IsOptional()
  @Field(() => JsonFormWhereInput, {
    nullable: true,
  })
  none?: JsonFormWhereInput;
}
export { JsonFormListRelationFilter as JsonFormListRelationFilter };
