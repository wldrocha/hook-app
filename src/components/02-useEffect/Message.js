import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    const {x, y} = coords

    useEffect(() => {
        const mouseMove = ({x, y}) => {
            const coords = {x, y}
            setCoords( coords )
        }

        window.addEventListener('mousemove', mouseMove)
        return () => {
            // limpiar eventos para no saturar la memoria
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <div>
            <h1>Lo lograste!</h1>
            <p>x: { x } y: { y }</p>
        </div>
    )
}
