import { observer } from "mobx-react-lite";
import { store } from "./TodoListStore";

export const Items = observer(() => {
  return store.items.map((el, index) => (
    <li key={index} onDoubleClick={() => store.toggleState(index)}>
      {el.status ? "[V]" : "[-]"}
      {el.value}
    </li>
  ));
});
