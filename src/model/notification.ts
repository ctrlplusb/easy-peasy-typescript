import { Action, Listen, listen } from "easy-peasy";
import todosModel from "./todos";

export interface NotificationModel {
  msg: string;
  set: Action<NotificationModel, string>;
  listeners: Listen<NotificationModel>;
}

const notification: NotificationModel = {
  msg: "",
  set: (state, payload) => {
    state.msg = payload;
  },
  listeners: listen(on => {
    on(todosModel.add, (actions, payload) => {
      actions.set(`Added "${payload}" to todos`);
    });
  })
};

export default notification;
