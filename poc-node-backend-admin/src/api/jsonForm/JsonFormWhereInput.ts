import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type JsonFormWhereInput = {
  id?: StringFilter;
  jsonName?: StringNullableFilter;
  newValues?: JsonFilter;
  originalValues?: JsonFilter;
};
