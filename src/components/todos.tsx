import React, { useState, useLayoutEffect } from "react";
import { useStore, useActions } from "../store";

export default function Todos() {
  // Pull out state from our store
  const items = useStore(state => state.todos.items);

  // Pull out actions from our store
  const add = useActions(actions => actions.todos.add);

  // Track our form state
  const [newTodo, setNewTodo] = useState("");

  // Reset the form state every time the todo items changes
  useLayoutEffect(() => setNewTodo(""), [items]);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={e => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button onClick={() => add(newTodo)}>Add</button>
    </div>
  );
}
