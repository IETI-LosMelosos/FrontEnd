import axios from "axios"

//const url = "esumerce.herokuapp.com/v1/user"

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