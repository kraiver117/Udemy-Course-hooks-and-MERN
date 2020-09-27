import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Me volvi a mostrar');
    //http?

    return (
        <small>
            { value }
        </small>
    )
}
)