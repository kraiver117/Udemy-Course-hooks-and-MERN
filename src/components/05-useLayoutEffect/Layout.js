import React, { useLayoutEffect, useRef, useState } from 'react';
import { UseCounter } from '../../hooks/UseCounter';
import { UseFetch } from '../../hooks/UseFetch';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {

    const { counter, increment }= UseCounter(1);
    const { data }= UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {  quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})


    useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p 
                    ref={pTag} 
                    className="mb-0"
                >
                    { quote }
                </p>
            </blockquote>
                
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button 
                className="btn btn-primary" 
                onClick={ increment }
            >
                Siguiente Quote
            </button>

        </div>
    )
}
