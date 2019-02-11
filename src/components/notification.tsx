import React, { useEffect } from "react";
import { useStore, useActions } from "../store";

export default function Notification() {
  // Pull the msg from store
  const msg = useStore(state => state.notification.msg);

  // Pull the set action from store
  const set = useActions(actions => actions.notification.set);

  // We will reset the msg after 2s
  useEffect(() => {
    if (!msg) return;
    const timeout = setTimeout(() => set(""), 2000);
    return () => clearTimeout(timeout);
  }, [msg]);

  return (
    <div style={{ position: "absolute", bottom: 10, right: 10, color: "blue" }}>
      {msg}
    </div>
  );
}
