import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { Box, textAlign } from '@mui/system';


function Products({Productos,removeTodo}) {
    
    return Productos.map((producto) => (
        <>
        <div>
            <Box border={2}>
            <b> Name: </b> {producto.name} <b> Description:</b> {producto.description} <b> Precio:</b> {producto.precio}
                
                <Button align="right" onClick={() => removeTodo(producto.id)} variant="outlined">Eliminar</Button>
            </Box>
        </div>
        </>
    ));
}

export default Products
