import { JsonValue } from "type-fest";

export type JsonForm = {
  createdAt: Date;
  id: string;
  jsonName: string | null;
  newValues: JsonValue;
  originalValues: JsonValue;
  updatedAt: Date | null;
};
