import './TodoItem.css';

export default function TodoItem({mission, impColor, idx}) {

    const { text, important, completed } = mission;

    const style = {
        li: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: "1rem 2rem",
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: "2px",
          background: important?impColor:"inherit"
        },
        span: {
          display: "flex",
          alignItems: "center"
        }
      }


  return (
    <li style={style.li}>
      <span style={style.span}>

        <input type="checkbox" />

        <strong>{idx + '.\xa0'}</strong>{text}

      </span>

      <button className="delete">&times;</button>
    </li>
  )
}
