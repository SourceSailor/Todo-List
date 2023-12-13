import List from "@mui/material/List";
import TodoItem from "./TodoItem";

const initialData = [
  { id: 1, task: "Buy cat food", completed: true },
  { id: 2, task: "Move car", completed: false },
  { id: 3, task: "Go for One Wheel ride", completed: false },
  { id: 4, task: "Get package downstairs", completed: false },
];

export default function TodoList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {initialData.map((todos) => {
        return <TodoItem key={todos.id} todos={todos} />;
      })}
    </List>
  );
}
