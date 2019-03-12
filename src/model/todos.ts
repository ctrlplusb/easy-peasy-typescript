import { Action, action } from "easy-peasy";

export interface TodosModel {
  items: string[];
  add: Action<TodosModel, string>;
}

const todos: TodosModel = {
  items: [],
  add: action((state, payload) => {
    state.items.push(payload);
  })
};

export default todos;
