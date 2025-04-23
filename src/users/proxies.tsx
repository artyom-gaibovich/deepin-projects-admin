import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

import cn from "classnames";
import styles from "./Proxies.module.css";
import { Grid } from "@mui/material";

export const ProxiesList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="ip" />
      <TextField source="port" />
      <TextField source="protocol" />
      <TextField source="host" />
      <TextField source="is_active" />
      <TextField source="username" />
      <TextField source="password" />
      <TextField source="updatedAt" />
      <TextField source="createdAT" />
    </Datagrid>
  </List>
);

export const ProxiesEdit = () => (
  <Edit>
    <SimpleForm className={cn(styles["container"])}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="id" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="ip" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="port" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="protocol" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="host" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BooleanInput source="is_active" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="username" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="password" fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const ProxiesCreate = () => (
  <Create>
    <SimpleForm className={cn(styles["container"])}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="ip" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NumberInput source="port" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="protocol" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="host" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="username" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextInput source="password" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BooleanInput source="is_active" fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);
