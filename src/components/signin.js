import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {  getUserIdByEmail } from "../services/UserAPI";
import axios from "axios";
import "../css/signin.css";
import campe2 from "../images/campe2.png";
import campesino from "../images/1.png";
import swal from "sweetalert";

const LandingPage = () => {
  const [nicknameSignupRef, setNickname] = useState("");
  const [nameSignupRef, setName] = useState("");
  const [lastNameSignupRef, setLastName] = useState("");
  const [emailSignupRef, setEmail] = useState("");
  const [passwordSignupRef, setPassword] = useState("");
  const emailSignInRef = useRef();
  const passwordSignInRef = useRef();
  const containerRef = React.createRef();
  const history = useHistory();
  //const { currentUser } = useAuth();
  //const { signup } = useAuth();
  //const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpButton = () => {
    const containerNode = containerRef.current;
    containerNode.classList.add("right-panel-active");
  };

  const signInButton = () => {
    const containerNode = containerRef.current;
    containerNode.classList.remove("right-panel-active");
  };

  const signInEvent = async () => {
    try {
      setError("");
      setLoading(true);

      //await login(
        //emailSignInRef.current.value,
       //passwordSignInRef.current.value
      //);

      getUserIdByEmail(emailSignInRef.current.value).then((res) =>
        localStorage.setItem("userId", res)
      );

      localStorage.setItem("userEmail", emailSignInRef.current.value);

      //history.push("/siguientePagina");
    } catch (error) {
      swal({
        title: "Iniciar Sesión",
        icon: "Error",
        text: "Credenciales invalidas.",
        button: "Ok",
        timer: "5000",
      });
    }

    setLoading(false);
  };

  const signupEvent = async () => {
    try {
      setError("");
      setLoading(true);

      //await signup(emailSignupRef, passwordSignupRef);

      axios
        .post("https://esumerce.herokuapp.com/v1/user", 
        { 
        nickname: nicknameSignupRef,
        name: nameSignupRef,
        lastName: lastNameSignupRef,
        email: emailSignupRef,
        password : passwordSignupRef
        })
        .then((response) => {
          console.log(response);
          
          swal({
            title: "Crear Nueva Cuenta",
            text: "Se cuenta ha sido creada.",
            icon: "success",
            button: "Ok",
            timer: "10000",
          });
          resetFields();

        })
        .catch((error) => {
          console.log(`Error: ${error}`);

          swal({
            title: "Crear Nueva Cuenta",
            icon: "error",
            text: "Error al crear una nueva cuenta",
            timer: "10000",
          });

          setLoading(false);
        });
      
    } catch (error) {
      swal({
        title: "Crear Nueva Cuenta",
        icon: "error",
        text: "Error al crear una nueva cuenta",
        timer: "10000",
      });
    }

   
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const resetFields = () => {
    setNickname("");
    setName("");
    setEmail("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="body">
      <div class="container" id="container" ref={containerRef}>
        <div class="form-container sign-up-container">
          <div className="form">
            <h1>Crear Nueva Cuenta</h1>
            <input
              required
              controlId="nickname"
              class="input"
              type="text"
              placeholder="Nickname"
              value={nicknameSignupRef}
              onChange={handleNickname}
              maxLength="100"
              
            />
            <input
              controlId="name"
              class="input"
              type="text"
              placeholder="Nombre"
              value={nameSignupRef}
              onChange={handleName}
              maxLength="100"
              required
            />
             <input
              controlId="lastName"
              class="input"
              type="text"
              placeholder="Apellido"
              value={lastNameSignupRef}
              onChange={handleLastName}
              maxLength="100"
              required
            />
            <input
              controlId="email"
              class="input"
              type="email"
              placeholder="Correo Electronico"
              id="Sign-Up-Email"
              value={emailSignupRef}
              onChange={handleEmail}
              maxLength="100"
              required
            />
            <input
              controlId="password"
              class="input"
              type="password"
              placeholder="Contraseña"
              id="Sign-Up-Password"
              value={passwordSignupRef}
              onChange={handlePassword}
              minLength="6"
              required
            />
            <Link to="/">
              <button
                class="button"
                type="submit"
                disabled={loading}
                onClick={signupEvent}
              >
                Crear
              </button>
            </Link>
          </div>
        </div>
        <div class="form-container sign-in-container">
          <div className="form">
            <h1 className="h1">Inicio de Sesión</h1>
            <input
              class="input"
              type="email"
              placeholder="Correo Electronico"
              ref={emailSignInRef}
              required
            />
            <input
              class="input"
              type="password"
              placeholder="Contraseña"
              ref={passwordSignInRef}
              required
            />
            <button
              class="button"
              type="submit"
              disabled={loading}
              onClick={signInEvent}
            >
              Ingresar
            </button>
          </div>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <img src={campesino} />
              <h1 class="h1">¡ Bienvenid@ a E-Sumerce !</h1>
              <p class="p">
                Crea una cuenta para ser parte de este gran proyecto!!
              </p>
              <button class="button ghost" id="signIn" onClick={signInButton}>
                Iniciar Sesión
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <img src={campe2} />
              <h1 class="h1">Estas de regreso!</h1>
              <p class="p">
                Ingresa tu información y continua participando en E-Sumerce.
              </p>
              <button class="button ghost" id="signUp" onClick={signUpButton}>
                Crear Cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;