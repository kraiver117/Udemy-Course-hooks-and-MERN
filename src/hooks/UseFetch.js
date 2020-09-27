import { useState, useEffect, useRef } from 'react';

export const UseFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null});

    ///La primera vez que se carga el useFetch lanza este UseEffect
    //El return lo realiza cuando finaliza de cargar similar al component unmount
    useEffect(() => {

        return () => isMounted.current = false;

    }, []);



    useEffect(() => {

        setstate({ data:null, loading: true, error:null})
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                    if(isMounted.current){

                        setstate({
                            loading: false,
                            error: null,
                            data
                        })
                    }

                    // setTimeout( () => {
                    //     if(isMounted.current){

                    //         setstate({
                    //             loading: false,
                    //             error: null,
                    //             data
                    //         })
                    //     } else {
                    //         console.log('Set State no se llamo');
                    //     }
                    // },4000);
            })
    }, [url])


    return state
    
}
