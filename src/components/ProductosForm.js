import { useState } from "react";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Productos(props) {
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ precio, setPrecio ] = useState('');


    const handleChangeName = e => {
        setName(e.target.value);
    };
    const handleChangeDescription = e => {
        setDescription(e.target.value);
    };
    const handleChangePrecio = e => {
        setPrecio(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: name,
            description: description,
            precio: precio,
        });
        setName('');
        setDescription('');
        setPrecio('');
    };



    return (
        <form onSubmit={handleSubmit} >
            <>  
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder='Name'
                    value={name}
                    onChange={handleChangeName}
                    name='nameText'
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    placeholder='Description'
                    value={description}
                    onChange={handleChangeDescription}
                    name='text'
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Precio"
                    placeholder='Precio'
                    value={precio}
                    onChange={handleChangePrecio}
                    name='text'
                />
                <Button onClick={handleSubmit} variant="outlined">Agregar Producto</Button>
                
            </>
            
        </form>
        );
}


export default Productos
