import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const JsonFormCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="JsonName" source="jsonName" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
