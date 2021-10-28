/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Productos from './ProductosForm';
import Products from './Products';


function User() {
    const [productos, setProductos] = useState([])

    const addProducto = producto => {
        const newProduct = [producto, ...productos];
        setProductos(newProduct);
        console.log(productos)
    }
    
    const removeProduct = id =>{
        const removeArr = [...productos].filter(producto => producto.id !== id);
        setProductos(removeArr);
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid className="user-perfil" item xs={6}>
                <Box border={2}> 
                <img 
                    align='center'
                    src="images/Campesino.jpg"
                />
                <h1 align='center'> Joaquin Phoenix </h1>
                <h1 align='center'> Campesino de confianza </h1>
                </Box>
            </Grid>
            <Grid className="user-products" item xs={6}>
                <Box >
                    <Productos onSubmit={addProducto} />
                    <Products Productos={productos} removeTodo={removeProduct}/>
                </Box>
            </Grid>
        </Grid>
        </Box>
    );
}

export default User
