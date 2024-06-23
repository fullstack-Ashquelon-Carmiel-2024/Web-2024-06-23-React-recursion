import { useState } from 'react';

import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';

function App() {

  const [ wrapperColor, setWrapperColor ] = useState('white');
  const [ appTitle, setAppTitle ] = useState('TODO');
  
  console.log(`wrapperColor outside "changeColor" function is ${wrapperColor}`)
  
  const [ todos, setTodos ] = useState([
    {id: 0, text:'Run 10 km', completed: false, important: false},
    {id: 45, text:'React for 7 hours', completed: false, important: true},
    {id: 77, text:'Wash Dishes', completed: false, important: false},
    {id: 1003, text:'Buy Eggs and Rice', completed: false, important: true},
  ]);

  let color = "orange";

  const changeColor = () => {

    console.log(`wrapperColor before the change is ${wrapperColor}`)
    
    setWrapperColor(wrapperColor==='white'?'salmon'
    :wrapperColor==='salmon'?'lightblue'
    :wrapperColor==='lightblue'?'lightgreen':'white');
    
    console.log(`wrapperColor after the change is ${wrapperColor}`)

  }

  const changeTitle = () => {

    const titles = ['TODO','JOKES','VOCABULARY','*Great Title*'];

    setAppTitle(titles[Math.floor(Math.random()*titles.length)])

  }
  
  return (
    <div className="App">
      <Header appTitle={appTitle} />
      <div className="wrapper" style={{background: wrapperColor}}>

        <button onClick={changeColor}>Change Color</button>
        <button onClick={changeTitle}>Change App Title</button>

       <TodoList importantColor={color} todos={todos} />

      </div>
    </div>
  );
}

export default App;
