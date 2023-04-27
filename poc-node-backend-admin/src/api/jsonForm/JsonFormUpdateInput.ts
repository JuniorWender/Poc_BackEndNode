import { InputJsonValue } from "../../types";

export type JsonFormUpdateInput = {
  jsonName?: string | null;
  newValues?: InputJsonValue;
  originalValues?: InputJsonValue;
};
