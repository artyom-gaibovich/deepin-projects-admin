import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./api/client.ts";
import { AbonentCreate, AbonentEdit, AbonentList } from "./users/abonent.tsx";

export const App = () => (
  <Admin dataProvider={dataProvider} layout={Layout}>
    <Resource
      name="abonents"
      list={AbonentList}
      show={ShowGuesser}
      edit={AbonentEdit}
      create={AbonentCreate}
    ></Resource>
  </Admin>
);
