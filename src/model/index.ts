import todos, { TodosModel } from "./todos";
import notification, { NotificationModel } from "./notification";

export type StoreModel = {
  todos: TodosModel;
  notification: NotificationModel;
};

const model: StoreModel = {
  todos,
  notification
};

export default model;
