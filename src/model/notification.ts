import { Action, action, ThunkOn, thunkOn } from "easy-peasy";
import { StoreModel } from './index';

export interface NotificationModel {
  msg: string;
  set: Action<NotificationModel, string>;
  onTodoAdded: ThunkOn<NotificationModel, {}, StoreModel>;
}

const notificationModel: NotificationModel = {
  msg: "",
  set: action((state, payload) => {
    state.msg = payload;
  }),
  onTodoAdded: thunkOn(
    // targetResolver resolving the addTodo action
    (actions, storeActions) => storeActions.todos.add,
    // action handler:
    (actions, target) => {
      console.log('hmmm: ', target.payload);
      actions.set(`Added "${target.payload}" to todos`);
    },
  )
};

export default notificationModel;
