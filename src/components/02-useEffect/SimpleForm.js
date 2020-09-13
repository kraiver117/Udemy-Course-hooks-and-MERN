import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Hey!');
    }, []);

    useEffect( () => {
        // console.log('Formstate Cambio');
    }, [formState]);

    useEffect( () => {
        // console.log('Nombre Cambio');
    }, [name]);

    const handleInputChange = ({target}) => {
        // console.log(target.name);
        // console.log(target.value);

        setFormState({
            ...formState,
            [target.name] : target.value
        })

    }

    return (
        <>
            <h1>Use Effect</h1>
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

            { (name === '123') && <Message /> }

        </>
    )
}
