import React, { useMemo, useState } from 'react';
import { HeavyProcess } from '../../helpers/heavyProcess';
import { UseCounter } from '../../hooks/UseCounter';
import  '../02-useEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment}  = UseCounter(5000);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => HeavyProcess(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: { counter }</h3>
            <hr/>

            <p>{memoHeavyProcess}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick ={ () => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
