import './TodoList.css';
import TodoItem from '../todoItem/TodoItem';

export default function TodoList({importantColor,todos}) {

  console.log(`In TodoList: importantColor=${importantColor}`)

  const style = {
    ul: {
        listStyle: 'none',
        padding: '0',
        fontSize: '2rem',
        color: 'rgb(79,5,79)'
    }
  }
  
  return (
    <ul style={style.ul}>

      {todos.map((todo,idx) => 
        <TodoItem mission={todo} key={todo.id} idx={idx+1} 
                   impColor={importantColor} />)}

    </ul>
  )
}
