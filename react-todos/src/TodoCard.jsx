import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TodoList from "./TodoList";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 350, m: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="../public/photos/todo-list.jpg"
          alt="Todo list top image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Todo List
          </Typography>
          <TodoList />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
