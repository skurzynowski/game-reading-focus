import { observer } from "mobx-react-lite";
import { store } from "./TodoListStore";

export const Form = observer(() => {
  return (
    <form>
      <input
        onChange={(e) => store.updateNewTodo(e.target.value)}
        name="name"
        value={store.newTodo.value}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          store.addTodo();
        }}
      >
        Save
      </button>
    </form>
  );
});
