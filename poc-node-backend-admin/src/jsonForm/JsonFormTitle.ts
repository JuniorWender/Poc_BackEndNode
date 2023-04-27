import { JsonForm as TJsonForm } from "../api/jsonForm/JsonForm";

export const JSONFORM_TITLE_FIELD = "jsonName";

export const JsonFormTitle = (record: TJsonForm): string => {
  return record.jsonName || String(record.id);
};
