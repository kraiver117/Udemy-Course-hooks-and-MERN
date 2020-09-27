import React, { useEffect, useReducer} from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';


const init = () => {
    //Si el primer valor de la expresion es null entonces toma el siguiente valor
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }];
}

export const TodoApp = () => {

    const [ todo, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    },[todo]);

    // console.log(description);

    const handleDelete = (todoId) => {
        // console.log(todoId);
        
        ///Crear la action
        const actionDelete = {
            type: 'delete',
            payload: todoId,
        }

        //Dispatch
        dispatch(actionDelete);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload:todoId
        })
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>Todo APP {todo.length}</h1>
            <hr/>
            
            <div className="row">
                <div className="col-7">
                    {/*TodoList, todos, handleDelete, handleToggle*/}
                    <TodoList 
                        todos={todo}
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo = {handleAddTodo}
                    />
                </div>
            </div>
           
        </div>
    )
}
