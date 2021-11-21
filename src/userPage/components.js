import React from 'react'
import { Button, Card,CardContent, TextField, Typography } from '@material-ui/core'

export function UserProducts(){
    return <div className='col-6 userProducts'>
        <div className='cardsContent'>
            <Card style={{width: '95%', marginTop:'20px'}}>
                <CardContent>
                    <Typography component="span" variant="h5">Producto</Typography>
                    <Typography style={{marginLeft: '20%'}} component="span">Cantidad</Typography>
                    <Typography style={{marginLeft: '20%'}} component="span">Precio</Typography>
                    <Button variant="contained" style={{backgroundColor: 'red', marginLeft:'10%', color:'white'}}>Eliminar</Button>
                </CardContent>
            </Card>
        </div>
        <Button variant="contained" className="addButton">Agregar Producto</Button>
    </div>
}

export function UserInformation(){
    return <div className='col-6 userInfo'>
        <img src='https://img.lalr.co/cms/2018/06/05103448/Campesino.jpg?size=xl&ratio=r40_21' alt="" className='image'/>
        <form className="formUser">
            <TextField label="Direccion" variant="standard" style={{width:"100%"}}/>
            <TextField label="Direccion" variant="standard" style={{width:"100%"}}/>
            <Button variant="contained" style={{marginTop: '40px',backgroundColor: 'green'}}>Actualizar</Button>
        </form>
    </div>
}

export function UserPage(){
    return <div className='userPage row'>
        <UserInformation/>
        <UserProducts/>
    </div>
}