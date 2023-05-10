import { JsonFormWhereInput } from "./JsonFormWhereInput";
import { JsonFormOrderByInput } from "./JsonFormOrderByInput";

export type JsonFormFindManyArgs = {
  where?: JsonFormWhereInput;
  orderBy?: Array<JsonFormOrderByInput>;
  skip?: number;
  take?: number;
};
