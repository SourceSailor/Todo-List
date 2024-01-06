import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [formData, setFormData] = useState({
    id: "",
    task: "",
    complete: "",
  });

  function onChange(e) {
    setFormData((oldData) => ({ ...oldData, task: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(formData.task);
    setFormData((oldData) => ({ ...oldData, task: "" }));
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={formData.task}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="create-todo" edge="end" type="submit">
                <CreateIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
