import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from "@mui/material";

export function numberWithCommas(x) {
    if(x){
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return null
}

function Product(props){
    const {item} = props
    return <Card className="card mt-3">
        <CardContent>
            <Typography sx={{fontSize: 'min(5vw,20px)'}} mr={2} gutterBottom component="span">
                {item.name} {item.seller}
            </Typography>
            <Typography sx={{fontSize: 'min(5vw,20px)'}} mr={2} gutterBottom component="span">
                {numberWithCommas(item.quantity)}
            </Typography>
            <Typography sx={{fontSize: 'min(5vw,20px)'}} mr={5} gutterBottom component="span">
                {numberWithCommas(item.price)}
            </Typography>
            <IconButton aria-label="delete">
                <DeleteIcon sx={{width: 'max(4vw,30px)',height:'max(4vw,30px)'}}/>
            </IconButton>
        </CardContent>
    </Card>
}

export function ShoopingCart(){

    const [products,setProducts] = useState([])
    const [total,setTotal] = useState(0)

    const handleBuyButton = (event)=>{
        event.preventDefault()
        var handler = window.ePayco.checkout.configure({
            key:'70539675f9625b26ffc9985821c76e19',
            test:true
        })
        handler.open({
            name: "ESumerce",
            description: "ESumerce",
            invoice: "1234",
            currency: "cop",
            amount: total.toString(),
            tax_base: "0",
            tax: "0",
            tax_ico:"0", //Hace referencia al impuesto nacional al consumo
            country: "co",
            lang: "es",
            external:"false",
            test:"true",
            response:`http://localhost:3000/paymentResponse`
        })
    }

    useEffect(()=>{
        setProducts([{name:"product",seller:"name",quantity:2,price:12000}])
    },[])

    useEffect(()=>{
        let ans=0
        products.forEach(item => {
            ans+=item.price
        });
        setTotal(ans)
    },[products])

    return <div className="container shoopingCart">
        <div className="row justify-content-center">
            {products.map((item,index)=>{
                return <Product key={index} item={item}/>
            })}

            <Typography sx={{fontSize:"min(5vw,40px)"}} mt={5}>
                Total: {numberWithCommas(total)}
            </Typography>
            <Button sx={{maxWidth: '90%',marginTop:'50px'}} size="large" variant="contained" color="success" onClick={handleBuyButton}>
                <Typography sx={{fontSize: 'max(2vw,20px)'}}>Comprar</Typography>
            </Button>
        </div>
    </div>
}