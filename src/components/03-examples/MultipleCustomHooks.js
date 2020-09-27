import React from 'react';
import { UseCounter } from '../../hooks/UseCounter';
import { UseFetch } from '../../hooks/UseFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment }= UseCounter(1);

    const { loading, data }= UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // console.log(state);
    // console.log(loading);
    // console.log(data);

    const { author, quote } = !!data && data[0];

    console.log(author, quote);



    
    return (
        <div>
            <h1>Breaking bad Quotes</h1>
            <hr/>

            {
                loading 
                    ? 
                        ( <div className="alert alert-info text-center">
                            Loading...
                        </div>)

                    :
                        (<blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer">
                                { author }
                            </footer>
                        </blockquote>)
            }

            <button 
                className="btn btn-primary" 
                onClick={ increment }
            >
                Siguiente Quote
            </button>

        </div>
    )
}
