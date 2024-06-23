import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";

export default function TodoList({ todos, importantColor }) {
  const style = {
    ul: {
      listStyle: "none",
      padding: "0",
      fontSize: "2rem",
      color: "black",
    },
  };

  return (
    <ul style={style.ul}>
      {todos.map(({ id, text, important }) => (
        <TodoItem
          key={id}
          text={text}
          important={important}
          importantColor={importantColor}
        />
      ))}
    </ul>
  );
}
