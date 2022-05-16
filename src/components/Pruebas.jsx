import React, { useEffect, useState } from 'react'

const Pruebas = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
        return () => {
            setCount(count - 1);
        }
    }, [])


 
    return (
        <div>Pruebas</div>
    )
}

export default Pruebas