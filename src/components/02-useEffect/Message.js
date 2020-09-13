import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({x:0, y:0})

    const { x, y } = coors;

    useEffect(() => {
        // console.log('Componente Montado');

        const mouseMove = (e) => {
            const coors ={ x: e.x, y:e.y}
            console.log(coors);
            
            setCoors(coors);
        }

        window.addEventListener('mousemove',mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>You are awesome!</h3>
            <p>
                x:{x}  y:{y}
            </p>
        </div>
    )
}
