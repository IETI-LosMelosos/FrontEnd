import React, {useState,useEffect} from "react";
import "./MainPage.css";
import Card from "./Card";
import "./card.css";
//import Header from "./Header";
import PopUp from "./PopUp";
import PopUp2 from "./PopUp2";
import axios from 'axios';
import { ShoopingCartStorage } from "../../lookup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled} from '@mui/material/styles';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";

const MainPage =  ( )  =>  {

    const [openPopUp, setOpenPopUp] = useState(false);
    const [openPopUp2, setOpenPopUp2] = useState(false);
    const [selectedData] = useState({});
    const [show] = useState(false);
    const [products, setProducts] = useState([]);
    const [historiasImg, setHistoriasImg] = useState([]);
    const [historiasProducedBy, setHistoriasProducedBy] = useState([]);
    const [historiasCity, setHistoriasCity] = useState([]);
    const [historiasPresentation, setHistoriasPresentation] = useState([]);
    const [historiasPhone, setHistoriasPhone] = useState([]);
    const [productImage, setProductImage] = useState([]);
    const [productName, setProductName] = useState([]);
    const [productPrice, setProductPrice] = useState([]);
    const [productDescription, setProductDescription] = useState([]);
    const [productId,setProductId] = useState(-1)
    const [value,setValue] = useState(1);

    const CustomButtons = styled(Button)({
        display:'flex',
        justifyContent: 'center',
        alignContent:'center',
        margin: '0.2px',
        width: '45%',
        height:'7%',
        fontSize: 10,
        backgroundColor: '#27b32e',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#33d43b',
          borderColor: '#0062cc',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#42ff4c',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      });


    useEffect(() => {axios.get('https://esumerce.herokuapp.com/v1/product').then(result=>{setProducts(result.data)
    }).catch(console.log);},[])

    const historiasBtn = obj => {
        axios.get('https://esumerce.herokuapp.com/v1/product/'+ obj).then(result=>{setHistoriasImg(result.data.img_presentation);
        setHistoriasProducedBy(result.data.producedBy);
        setHistoriasCity(result.data.city);
        setHistoriasPresentation(result.data.presentation);
        setHistoriasPhone(result.data.phone);
        }).catch(console.log);
        setOpenPopUp(true);
    }

    const agregar_carrito = obj => {
        axios.get('https://esumerce.herokuapp.com/v1/product/'+ obj).then(result=>{setProductImage(result.data.image);
        setProductId(result.data.id);
        setProductName(result.data.name);
        setProductPrice(result.data.price);
        setProductDescription(result.data.description);
        }).catch(console.log);
        setOpenPopUp2(true);
    }

    const cerrar = obj => {
        setOpenPopUp(false);
        setOpenPopUp2(false);
    }

    const addProduct = obj =>{
        var cart = ShoopingCartStorage.getShoopingCart()
        cart[productId]=value
        ShoopingCartStorage.saveShoopingCart(cart)
    }

    const change = (event) =>{
        event.preventDefault()
        setValue(event.target.value)
    }

    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      flexGrow: 1,
      maxWidth: 190,
      padding: 5   
    },
    tittle: {
      flexGrow: 1
    }
  })
);
    
const classes = useStyles();
return(
    <div>
    <div className="row">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {products.map(({ image, name, price,description, producedBy, id, img_presentation, city, presentation, phone, SKU}) => (
              <div className="col-md-2" key={id} height="10%" width="10%" >
                <br/>
                <Card imageSource={image} name={name} price={price} description={description} producedBy={producedBy} />
                
                <CustomButtons  className="shoppingCar3" onClick={() => historiasBtn(id)}>Producido por</CustomButtons>
                <Typography className={classes.tittle} ></Typography>
                <CustomButtons className="shoppingCar2" onClick={() => agregar_carrito(id)}>Agregar</CustomButtons>
                

                {show && <PopUp details={selectedData} />}
                <PopUp openPopUp = {openPopUp} setOpenPopUp={setOpenPopUp}>
                <div className="flex-container">
                    <div className="row">
                        <div className="col-md-6">
                        <img src={historiasImg} alt="a wallpaper" width="100%" height="100%"/>
                        </div>
                        <div className="col-md-6">
                            <center>
                                <h1>{historiasProducedBy}</h1>
                                <h2>{historiasCity}</h2>
                                <br/>
                                <p>{historiasPresentation}</p>
                                <br/>
                                <h5>CONTACTO: {historiasPhone}</h5>
                                <br/>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <button className="shoppingCar2" onClick={() => cerrar()}>Cerrar</button>
                    </div>
                </div>
                </PopUp>
                {show && <PopUp2 details={selectedData} />}
                <PopUp2 openPopUp2 = {openPopUp2} setOpenPopUp2={setOpenPopUp2}>
                <div className="flex-container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={productImage} alt="a wallpaper" width="100%" height="100%"/>
                        </div>
                        <div className="col-md-6">
                            <center>
                                <br/><br/><br/>
                                <h1>{productName}</h1>
                                <h2>{productPrice}</h2>
                                <br/><br/>
                                <h3>{productDescription}</h3>
                                <br/>
                                <input onChange={change} id="quantityProduct" type="number" pattern="^[0-9]" min="1" step="1"/>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <button className="shoppingCar2" onClick={() => addProduct()}>Agregar</button>
                        <br/><br/>
                        <button className="shoppingCar3" onClick={() => cerrar()}>Cerrar</button>
                    </div>
                </div>
                </PopUp2>
              </div>
            ))}
          </div>
        </div>
    </div>
</div>
  );
}

export default MainPage;