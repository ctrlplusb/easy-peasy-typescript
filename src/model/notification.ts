import { Action, action, Listen, listen, thunk } from "easy-peasy";
import todosModel from "./todos";

export interface NotificationModel {
  msg: string;
  set: Action<NotificationModel, string>;
  listeners: Listen<NotificationModel>;
}

const notification: NotificationModel = {
  msg: "",
  set: action((state, payload) => {
    state.msg = payload;
  }),
  listeners: listen(on => {
    on(todosModel.add, thunk((actions, payload) => {
      actions.set(`Added "${payload}" to todos`);
    }));
  })
};

export default notification;
