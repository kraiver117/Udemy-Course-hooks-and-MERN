import React from 'react'
import { UseForm } from '../../hooks/UseForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{description}, handleInputChange, reset ] = UseForm({
        description: ''
    });

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

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
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
        </>
    )
}
