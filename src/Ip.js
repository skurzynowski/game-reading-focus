import { observer } from "mobx-react-lite";
import { store } from "./TodoListStore";

export const Ip = observer(() => {
  return <h1>Ip: {store.ip}</h1>;
});
