import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import './style.css';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
//     return [{
//     id: new Date().getTime(),
//     desc: 'Learning React!',
//     done: false
//    }]
}

export const TodoApp = () => {
    const [todo,dispatch] = useReducer(todoReducer, [], init);
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    },[todo]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);

    }
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo  = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }
    return (
        <div>
            <h1>TodoApp ({todo.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                <TodoList 
                 todo={todo} 
                 handleDelete={handleDelete} 
                 handleToggle={handleToggle}
                 />
                  
                </div>
                <div className="col-5">
                   <TodoApp
                     handleAddTodo = {handleAddTodo}
                   />
                </div>

            </div>
        </div>
    )
}
