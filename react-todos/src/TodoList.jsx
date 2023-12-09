import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { Box } from "@mui/material";

// const initialData = [
//   {
//     id: 1,
//     text: "Pick up Stiizy pod",
//     completed: false,
//   },
//   {
//     id: 2,
//     text: "Go to Trader Joes",
//     completed: false,
//   },
//   {
//     id: 3,
//     text: "Move car",
//     completed: false,
//   },
//   {
//     id: 4,
//     text: "Eat lunch",
//     completed: true,
//   },
// ];

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  // THIS IS THE PROBLEM
  const [todos, setTodos] = useState(getInitialData());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function removeTodo(id) {
    setTodos((oldData) => {
      return oldData.filter((items) => items.id !== id);
    });
  }

  function toggleTodo(id) {
    setTodos((oldData) => {
      return oldData.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  }

  function addTodo(text) {
    setTodos((oldData) => {
      return [
        ...oldData,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 4,
      }}
    >
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <h1 style={{ textAlign: "center" }}>Todo List</h1>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              checkBox={() => toggleTodo(todo.id)}
              removeTodo={() => removeTodo(todo.id)}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
