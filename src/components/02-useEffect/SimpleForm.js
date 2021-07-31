import React, { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState

    useEffect(() => {
       
    }, [])

    const handleInput = ({ target }) => {
        setForm({
            ...formState,
            [target.name] : target.value
        })
    }

    return (
        <>
            <h1>SimpleForm on UseEffect</h1>
            <hr />

            <form action="">
                <input 
                    type="text"
                    placeholder="Escribe tu nombre"
                    autoComplete="off"
                    value={ name }
                    name="name"
                    onChange={ handleInput } />

                <input 
                    type="email"
                    placeholder="Escribe tu email"
                    autoComplete="off"
                    value={ email }
                    name="email"
                    onChange={ handleInput } />

                <input 
                    type="password"
                    placeholder="Escribe tu clave"
                    autoComplete="off"
                    value={ password }
                    name="password"
                    onChange={ handleInput } />
                
            </form>

            {password === '123' && <Message />}
        </>
    )
}
