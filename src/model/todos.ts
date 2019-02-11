import { Action } from "easy-peasy";

export type TodosModel = {
  items: string[];
  add: Action<TodosModel, string>;
};

const todos: TodosModel = {
  items: [],
  add: (state, payload) => {
    state.items.push(payload);
  }
};

export default todos;
