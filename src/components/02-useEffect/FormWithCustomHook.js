import React, { useEffect } from 'react';
import { UseForm } from '../../hooks/UseForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = UseForm({
        name:'',
        email:'',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect( () => {
        console.log('Email Cambio');
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }
 
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form with custom hook</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    className="form-Control"
                    placeholder= "Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email"
                    className="form-Control"
                    placeholder= "email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="password" 
                    name="password"
                    className="form-Control"
                    placeholder= "********"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
