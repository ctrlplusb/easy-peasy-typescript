import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from '../hooks';

export default function Todos() {
  // Pull out state from our store
  const items = useStoreState(state => state.todos.items);

  // Pull out actions from our store
  const add = useStoreActions(actions => actions.todos.add);

  // Track our form state
  const [newTodo, setNewTodo] = useState("");

  // Reset the form state every time the todo items changes
  useEffect(() => setNewTodo(""), [items]);

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
