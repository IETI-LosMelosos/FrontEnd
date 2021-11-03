import axios from "axios";
import swal from "sweetalert";
//const url = "esumerce.herokuapp.com/v1/user"
//import { useHistory } from "react-router";
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
    return "";
  }
  //method = GET / POST / PUT
  static lookup(method, endpoint, callback, data) {
    const headers = {
      "Content-Type": "application/json",
      Authentication: "Bearer " + this.getCookie("token"),
      "Access-Control-Allow-Origin": "*",
    };

    const BASE_URL = "https://esumerce.herokuapp.com/";

    console.log(data);

    axios({
      method: method,
      headers: headers,
      url: BASE_URL + endpoint,
      data: data,
    })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static login(data) {
    const callback = (data) => {
      console.log(data);
      this.setCookie(data.data.token);
      console.log(data.status);
      if (data.status === 200) {
        swal({
          title: "Iniciar sesion",
          text: "Sesion Exitosa.",
          icon: "success",
          button: "Ok",
          timer: "500",
        });
        //window.history.pushState("/das")
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
}
