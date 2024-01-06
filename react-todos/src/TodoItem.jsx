import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoItem({ todo, checked, removeItem }) {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      key={todo.id}
      secondaryAction={<DeleteIcon onClick={removeItem} />}
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            onClick={checked}
            tabIndex={-1}
            disableRipple
            // inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={todo.id} primary={todo.task} />
      </ListItemButton>
    </ListItem>
  );
}
