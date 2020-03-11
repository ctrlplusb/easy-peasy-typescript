import todosModel, { TodosModel } from "./todos";
import notificationModel, { NotificationModel } from "./notification";

export interface StoreModel {
  todos: TodosModel;
  notification: NotificationModel;
};

const storeModel: StoreModel = {
  todos: todosModel,
  notification: notificationModel
};

export default storeModel;
