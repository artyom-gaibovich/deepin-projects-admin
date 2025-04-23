import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./api/client.ts";
import { AbonentCreate, AbonentEdit, AbonentList } from "./users/abonent.tsx";
import { ProxiesCreate, ProxiesEdit, ProxiesList } from "./users/proxies.tsx";

export const App = () => (
  <Admin dataProvider={dataProvider} layout={Layout}>
    <Resource
      name="abonents"
      list={AbonentList}
      show={ShowGuesser}
      edit={AbonentEdit}
      create={AbonentCreate}
    ></Resource>

    <Resource
      name="proxies"
      list={ProxiesList}
      show={ShowGuesser}
      edit={ProxiesEdit}
      create={ProxiesCreate}
    ></Resource>
  </Admin>
);
