import { makeAutoObservable } from "mobx";

class TodoListStore {
  items = [];
  newTodo = { value: "", status: false };
  ip = "No ip fetched";

  updateNewTodo(value) {
    this.newTodo.value = value;
  }

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    if (this.newTodo) {
      this.items.push(this.newTodo);
      this.newTodo = { value: "" };
    }
  }

  get finishedTasks() {
    return this.items.filter((el) => el.status);
  }

  get nonFinishedTasks() {
    return this.items.filter((el) => !el.status);
  }

  toggleState(index) {
    this.items[index].status = !this.items[index].status;
  }
}

export const store = new TodoListStore();
