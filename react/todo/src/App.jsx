import { useState } from "react";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [wrapperColor, setWrapperColor] = useState("white");
  const [appTitle, setAppTitle] = useState("Todo App");

  const color = "orange";
  const todos = [
    { id: 1, text: "Run 10 km", completed: false, important: false },
    { id: 2, text: "React for 7 hours", completed: false, important: true },
    { id: 3, text: "Wash Dishes", completed: false, important: false },
    { id: 4, text: "Buy Eggs and Rice", completed: false, important: true },
  ];

  console.log(`wrapperColor outside "changeColor" function is ${wrapperColor}`);

  const changeColor = () => {
    console.log(`wrapperColor before the change is ${wrapperColor}`);

    setWrapperColor(
      wrapperColor === "white"
        ? "lightblue"
        : wrapperColor === "lightblue"
        ? "lightgreen"
        : "white"
    );
    console.log(`wrapperColor after the change is ${wrapperColor}`);
  };

  const changeTitle = () => {
    const titles = [
      "Todo App",
      "Todo List",
      "Todo",
      "To-Do List",
      "To-Do App",
      "To-Do",
    ];

    setAppTitle(titles[Math.floor(Math.random() * titles.length)]);
  };

  return (
    <div className="App">
      <Header appTitle={appTitle} />
      <div className="wrapper" style={{ background: wrapperColor }}>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={changeTitle}>Change Title</button>
        <TodoList importantColor={color} todos={todos} />
      </div>
    </div>
  );
}

export default App;
