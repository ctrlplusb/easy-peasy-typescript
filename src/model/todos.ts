import { Action } from "easy-peasy";

export interface TodosModel {
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
