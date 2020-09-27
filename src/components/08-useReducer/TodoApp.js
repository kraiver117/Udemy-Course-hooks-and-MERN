import React, { useEffect, useReducer, useState } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { UseForm } from '../../hooks/UseForm';



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

    const [{description}, handleInputChange, reset ] = UseForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    },[todo]);

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>Todo APP {todo.length}</h1>
            <hr/>
            
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todo.map((todo, i) => (
                                <li 
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center"> {i+1}. {todo.desc} </p>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            placeholder="Aprender..."
                            autoComplete="off"
                            className="form-control"
                            onChange={handleInputChange}
                            value={description}
                        />
                        <button
                            className="btn btn-outline-primary mt-2 btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}
