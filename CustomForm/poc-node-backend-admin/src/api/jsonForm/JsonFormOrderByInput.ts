import { SortOrder } from "../../util/SortOrder";

export type JsonFormOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jsonName?: SortOrder;
  newValues?: SortOrder;
  originalValues?: SortOrder;
  updatedAt?: SortOrder;
};
