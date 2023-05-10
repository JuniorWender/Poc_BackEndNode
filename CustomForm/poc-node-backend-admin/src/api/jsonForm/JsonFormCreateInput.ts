import { InputJsonValue } from "../../types";

export type JsonFormCreateInput = {
  jsonName?: string | null;
  newValues?: InputJsonValue;
  originalValues?: InputJsonValue;
};
