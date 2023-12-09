import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

export default function TodoForm({ addTodo }) {
  const [formData, setFormData] = useState({
    id: "",
    text: "",
    completed: "",
  });

  function onChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      text: e.target.value,
    }));
  }

  function submission(e) {
    e.preventDefault();
    addTodo(formData.text);
    setFormData((oldData) => ({
      ...oldData,
      text: "",
    }));
  }

  return (
    <ListItem sx={{ width: "100%" }}>
      <form onSubmit={submission}>
        <TextField
          id="filled-basic"
          fullWidth
          label="Add Todo"
          variant="filled"
          value={formData.text}
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
    </ListItem>
  );
}
