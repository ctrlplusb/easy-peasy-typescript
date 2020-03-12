import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from '../hooks';

export default function Notification() {
  // Pull the msg from store
  const msg = useStoreState(state => state.notification.msg);

  // Pull the set action from store
  const set = useStoreActions(actions => actions.notification.set);

  // We will reset the msg after 2s
  useEffect(() => {
    if (!msg) return;
    const timeout = setTimeout(() => set(""), 2000);
    return () => clearTimeout(timeout);
  }, [msg]);

  if (!msg) {
    return null;
  }

  return (
    <div style={{ position: "absolute", bottom: 10, right: 10, color: "white", background: "black", padding: "30px" }}>
      {msg}
    </div>
  );
}
