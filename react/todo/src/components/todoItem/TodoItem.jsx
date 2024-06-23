import "./TodoItem.css";

export default function TodoItem({ text, important, importantColor }) {
  const defaultColor = "white";
  const style = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 2rem",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "2px",
      background: important ? importantColor : defaultColor,
    },
    span: {
      display: "flex",
      alignItems: "center",
    },
    checkbox: {
      marginRight: "1rem",
    },
  };

  return (
    <li style={style.li}>
      <span style={style.span}>
        <input type="checkbox" style={style.checkbox} />
        {text}
      </span>
      <button className="delete">Delete</button>
    </li>
  );
}
