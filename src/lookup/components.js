import axios from "axios"
import swal from "sweetalert";
//const url = "esumerce.herokuapp.com/v1/user"

export class ApiLookup{

    static setCookie(cname, cvalue) {
      document.cookie = cname + "=" + cvalue + ";path=/";
    }
  
    static getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  //method = GET / POST / PUT
    static lookup(method,endpoint,callback,data){
  
      const headers={
        "Content-Type":"application/json",
        "Authentication":"Bearer "+this.getCookie('token'),
        "Access-Control-Allow-Origin": "*"
      }
  
      const BASE_URL = "https://esumerce.herokuapp.com/"
  
      console.log(data);
  
      axios({
        method:method,
        headers:headers,
        url: BASE_URL + endpoint,
        data:data
      })
      .then((data)=>{
        callback(data);
        swal({
          title: "Iniciar sesion",
          text: "Sesion Exitosa.",
          icon: "success",
          button: "Ok",
          timer: "500",
        });
      }).catch((error)=>{
        console.log(error);
        swal({
          title: "Iniciar Sesión",
          icon: "error",
          text: "Credenciales invalidas.",
          button: "Ok",
          timer: "5000",
        });
      })
  
    }
}