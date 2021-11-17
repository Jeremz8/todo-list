import TodoList from "../components/todo/TodoList";
import { DUMMY_TODO } from '../data';
import { useState, useEffect } from "react";

const AllTodo = () => {
    const [myTodoList, setMyTodoList] = useState(DUMMY_TODO);
    
    useEffect(() => {
        fetch("https://cat-todo-list.herokuapp.com/todos")
        .then(response => response.json())
        .then(data => {
            const todoList = data.map(item => {
                    const container = {};
                    container.id = item.id;
                    container.text = item.content;
                    return container;
                });
            console.log(todoList);
            setMyTodoList(todoList);
        });
    }, []);
    return <TodoList todo={myTodoList} />;
};

export default AllTodo;