import axios from "axios"

//const url = "localhost:8080"

export class ApiLookup{

    static axiosLookup(method,endpoint,callback,data){
        const auth = null
        const headers = auth?{
            "Content-Type":"application/json",
            "Authorization":auth
        }:{
            "Content-Type":"application/json"
        }
        axios({
            method:method,
            url: endpoint,
            headers:headers,
            data
        }).then(response=>{
            callback(response.data,response.status)
        }).catch((err)=>{
            callback({detail:"Error"},400)
            console.log(err)
        })
    }
}

export class ShoopingCartStorage{
    static getShoopingCart(){
        if(localStorage.getItem('products')){
            return JSON.parse(localStorage.getItem('products'))
        }
        return []
    }

    static saveShoopingCart(items){
        localStorage.setItem('products',JSON.stringify(items))
    }
}