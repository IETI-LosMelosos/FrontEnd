import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
            <span className="seller">{item.name}<br></br>{item.seller}</span>
            <span className="quantity">{numberWithCommas(item.quantity)} Kilos</span>
            <span className="price">{numberWithCommas(item.price)}</span>
            <button type="button" className="delete btn btn-danger">Eliminar</button>
        </CardContent>
    </Card>
}

export function ShoopingCart(){

    const [products,setProducts] = useState([])
    const [total,setTotal] = useState(0)

    const handleBuyButton = (event)=>{
        event.preventDefault()
        var handler = window.ePayco.checkout.configure({
            key:'03dd03c61820d0dd34393b2d0ebe3951',
            test:true
        })
        handler.open({
            key:'03dd03c61820d0dd34393b2d0ebe3951',
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
            <h1 className="totalPrice">{numberWithCommas(total)}</h1>
            <button type="button" className="buyButton btn btn-success mt-5" onClick={handleBuyButton}>Comprar</button>
        </div>
    </div>
}