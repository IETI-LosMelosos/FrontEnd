import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Typography } from "@mui/material";
import { ApiLookup, ShoopingCartStorage } from "../lookup";

export function numberWithCommas(x) {
    if(x){
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return null
}

function Product(props){
    const {id,quantity,makeDelete} = props
    const [item,setItem] = useState({})
    const callback = (response)=>{
        setItem(response.data)
    }
    const handleDelete = (event)=>{
        event.preventDefault()
        makeDelete(id)
    }
    useEffect(()=>{
        ApiLookup.getProductById(id,callback)
    },[id])
    return <Card className="card mt-3">
        <CardContent>
            <Typography sx={{fontSize: 'min(5vw,20px)'}} mr={2} gutterBottom component="span">
                {item.name} {item.producedBy}
            </Typography>
            <Typography sx={{fontSize: 'min(5vw,20px)'}} mr={2} gutterBottom component="span">
                {numberWithCommas(quantity)}
            </Typography>
            <Typography sx={{fontSize: 'min(5vw,20px)'}} mr={5} gutterBottom component="span">
                {item.price}
            </Typography>
            <IconButton onClick={handleDelete} aria-label="delete">
                <DeleteIcon sx={{width: 'max(4vw,30px)',height:'max(4vw,30px)'}}/>
            </IconButton>
        </CardContent>
    </Card>
}

export function ShoopingCart(){

    const [products,setProducts] = useState({})
    const [all,setAll] =useState([])
    const [ids,setIds] = useState([])
    const [total,setTotal] = useState(0)

    const handleDelete=(id)=>{
        let temp = products
        delete temp[id]
        ShoopingCartStorage.saveShoopingCart(temp)
        window.location.reload()
    }

    const handleBuyButton = (event)=>{
        event.preventDefault()
        var handler = window.ePayco.checkout.configure({
            key:'70539675f9625b26ffc9985821c76e19',
            test:true
        })
        handler.open({
            name: "ESumerce",
            description: "ESumerce",
            invoice: Math.random() * (10000 - 5000) + 5000,
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
        const callback = (response)=>{
            setAll(response.data)
        }
        const cart = ShoopingCartStorage.getShoopingCart()
        const temp = []
        for(const i in cart){
            temp.push(i)
        }
        setIds(temp)
        setProducts(cart)
        ApiLookup.getAllProducts(callback)
    },[])

    useEffect(()=>{
        var temp = 0
        ids.forEach(id=>{
            all.forEach(item=>{
                if(item.id===id){
                    temp+=parseInt(item.price.replace("$","").replace(".",""),10)*products[id]
                }
            })
        })
        setTotal(temp)
    },[all,ids,products])

    return <div className="container shoopingCart">
        <div className="row justify-content-center">
            {ids.map((item,index)=>{
                return <Product key={index} id={item} quantity={products[item]} makeDelete={handleDelete}/>
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