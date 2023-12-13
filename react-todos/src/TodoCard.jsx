import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TodoList from "./TodoList";

export default function TodoCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwa2eS8whuaSAK424GravGUo0mZIwQmbOJEQ&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Todo List
        </Typography>
        <TodoList />
      </CardContent>
    </Card>
  );
}
