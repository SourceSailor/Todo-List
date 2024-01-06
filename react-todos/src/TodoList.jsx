import List from "@mui/material/List";
import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const initialData = [
  { id: uuidv4(), task: "Cook Dinner", completed: false },
  { id: uuidv4(), task: "Buy Groceries", completed: true },
  { id: uuidv4(), task: "Move Car", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialData);

  function toggleBox(id) {
    setTodos((oldData) =>
      oldData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function removeItem(id) {
    setTodos((oldData) => oldData.filter((item) => item.id !== id));
  }

  function addTodo(event) {
    setTodos((oldData) => {
      return [...oldData, { id: uuidv4(), task: event, completed: false }];
    });
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          checked={() => toggleBox(todo.id)}
          removeItem={() => removeItem(todo.id)}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
