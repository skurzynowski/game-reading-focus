import { observer } from "mobx-react-lite";
import { store } from "./TodoListStore";

export const Header = observer(() => {
  return (
    <>
      <h1>Wszystkich zadań: {store.items.length}</h1>
      <h1>Ukończonych zadań: {store.finishedTasks.length}</h1>
      <h1>Nie ukończonych zadań: {store.nonFinishedTasks.length}</h1>
    </>
  );
});
