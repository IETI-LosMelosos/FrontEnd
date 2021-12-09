import React, { useState } from "react";
import { /*useHistory,*/ Link } from "react-router-dom";
//import {  getUserIdByEmail } from "../services/UserAPI";
import axios from "axios";
import "../css/signin.css";
import campe2 from "../images/campe2.png";
import campesino from "../images/1.png";
import swal from "sweetalert";
import { ApiLookup } from "../lookup/components";
//import { useHistory } from "react-router";

const LandingPage = () => {
  const [nicknameSignupRef, setNickname] = useState("");
  const [nameSignupRef, setName] = useState("");
  const [lastNameSignupRef, setLastName] = useState("");
  const [emailSignupRef, setEmail] = useState("");
  const [passwordSignupRef, setPassword] = useState("");
  // const emailSignInRef = useRef();
  //const passwordSignInRef = useRef();
  const containerRef = React.createRef();

  const [email, setEmailLogin] = useState("");
  const [password, setPaswwordLogin] = useState("");

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPaswwordLogin(value);
  };

  const hanldeEmailChange = (e) => {
    const value = e.target.value;
    setEmailLogin(value);
  };
  //const history = useHistory();
  //const { currentUser } = useAuth();
  //const { signup } = useAuth();
  //const { login } = useAuth();

  /*Manejador de errores*/
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
    console.log(error);
    setError("");

    setLoading(true);

    let loginDto = {
      email: email,
      password: password,
    };

    ApiLookup.login(loginDto);

    setLoading(false);
  };

  const signupEvent = async () => {
    setError("");
    setLoading(true);

    //await signup(emailSignupRef, passwordSignupRef);

    axios
      .post("https://esumerce.herokuapp.com/v1/user", {
        nickname: nicknameSignupRef,
        name: nameSignupRef,
        lastName: lastNameSignupRef,
        email: emailSignupRef,
        password: passwordSignupRef,
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
    <Box></Box></Box>
    <div className="body">
      <div className="container" id="container" ref={containerRef}>
        <div className="form-container sign-up-container">
          <div className="form">
            <h1>Crear Nueva Cuenta</h1>
            <input
              required
              controlid="nickname"
              className="input"
              type="text"
              placeholder="Nickname"
              value={nicknameSignupRef}
              onChange={handleNickname}
              maxLength="100"
            />
            <input
              controlid="name"
              className="input"
              type="text"
              placeholder="Nombre"
              value={nameSignupRef}
              onChange={handleName}
              maxLength="100"
              required
            />
            <input
              controlid="lastName"
              className="input"
              type="text"
              placeholder="Apellido"
              value={lastNameSignupRef}
              onChange={handleLastName}
              maxLength="100"
              required
            />
            <input
              controlid="email"
              className="input"
              type="email"
              placeholder="Correo Electronico"
              id="Sign-Up-Email"
              value={emailSignupRef}
              onChange={handleEmail}
              maxLength="100"
              required
            />
            <input
              controlid="password"
              className="input"
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
                className="button"
                type="submit"
                disabled={loading}
                onClick={signupEvent}
              >
                Crear
              </button>
            </Link>
          </div>
        </div>
        <div className="form-container sign-in-container">
          <div className="form">
            <h1 className="h1">Inicio de Sesión</h1>
            <input
              className="input"
              type="email"
              placeholder="Correo Electronico"
              value={email}
              //ref={emailSignInRef}
              onChange={hanldeEmailChange}
              required
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              value={password}
              //ref={passwordSignInRef}
              onChange={handlePasswordChange}
              required
            />
            <button
              className="button"
              type="submit"
              disabled={loading}
              onClick={signInEvent}
            >
              Ingresar
            </button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <img src={campesino} alt="Campesino" />
              <h1 className="h1">¡ Bienvenid@ a E-Sumerce !</h1>
              <p className="p">
                Crea una cuenta para ser parte de este gran proyecto!!
              </p>
              <button
                className="button ghost"
                id="signIn"
                onClick={signInButton}
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <img src={campe2} alt="logo" />
              <h1 className="h1">Estas de regreso!</h1>
              <p className="p">
                Ingresa tu información y continua participando en E-Sumerce.
              </p>
              <button
                className="button ghost"
                id="signUp"
                onClick={signUpButton}
              >
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
