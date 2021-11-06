import axios from "axios";
import swal from "sweetalert";
const BASE_URL = "https://esumerce.herokuapp.com/";

export class ApiLookup {
  static setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

  static getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return ""
  }

  static lookup(method, endpoint, callback, data) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.getCookie("token")
    };
    axios({
      method: method,
      headers: headers,
      url: BASE_URL + endpoint,
      data
    })
    .then((data)=>{
      callback(data)
    })
    .catch((err)=>{
      callback(err)
    })
  }

  static login(data) {
    const callback = (data) => {
      if (data.status === 200) {
        this.setCookie('login',data.data.token);
        swal({
          title: "Iniciar sesion",
          text: "Sesion Exitosa.",
          icon: "success",
          button: "Ok"
        }).then((value)=>{
          if(value){
            window.location.pathname="/algo"
          }
        });
      } else {
        swal({
          title: "Iniciar Sesión",
          icon: "error",
          text: "Credenciales invalidas.",
          button: "Ok",
          timer: "5000",
        });
      }
    };
    this.lookup("POST", "v1/auth", callback, data);
  }

  static register(callback,data){
    this.lookup("POST","v1/user",callback,data)
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
