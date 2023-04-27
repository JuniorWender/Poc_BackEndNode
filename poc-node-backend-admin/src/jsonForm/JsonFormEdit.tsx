import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const JsonFormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="JsonName" source="jsonName" />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
