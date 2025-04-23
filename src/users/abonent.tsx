import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const AbonentList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="passwordHash" />
      <TextField source="refreshToken" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
    </Datagrid>
  </List>
);

export const AbonentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="email" />
      <TextInput source="passwordHash" />
      <TextInput source="createdAt" />
      <TextInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);

export const AbonentCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
