import classes from './TodoItem.module.css';
import { Link } from 'react-router-dom';

const TodoItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <button className='btn'>
          Supprimer
        </button>
      </figure>
    </li>
  );
};

export default TodoItem;
