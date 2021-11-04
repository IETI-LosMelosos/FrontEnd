import React, {useState, useEffect} from "react";
import "./MainPage.css";
import Card from "./Card";
import "./card.css";
import Header from "./Header";
import PopUp from "./PopUp";
import PopUp2 from "./PopUp2";

const MainPage =  ( )  =>  {

    const [openPopUp, setOpenPopUp] = useState(false);
    const [openPopUp2, setOpenPopUp2] = useState(false);
    const [selectedData] = useState({});
    const [show] = useState(false);

    const products = [
          {
            id: 1,
            SKU: "ESMC0001",
            name: "Tomate",
            image: "/img/campesino1/tomate.jpg",
            price: "$8.500",
            description: "Tomate chonto 1000 gr",
            producedBy: "Don Ramiro",
            city: "Boyacá",
            img_presentation: "/img/campesino1/presentacion.png"
          },
          {
            id: 2,
            SKU: "ESMC0002",
            name: "Papa pastusa",
            image: "/img/campesino1/papa_pastusa.jpg",
            price: "$3.800",
            description: "Papa pastusa 1 Kg",
            producedBy: "Don Ramiro",
            city: "Boyacá",
            img_presentation: "/img/campesino1/presentacion.png",
            presentation: "Don Ramiro es uno de los productores mas conocidos de la región, el amigo fiel de todos sus vecinos y el maestro de todos en temas de agricultura. Es reconocido por vender gran diversidad de productos, todos de alta calidad.",
            phone: "3206547890"
          },
          {
            id: 3,
            SKU: "ESMC0003",
            name: "Papa criolla",
            image: "/img/campesino1/papa_criolla.jpg",
            price: "$7.500",
            description: "Papa criolla 1 kg",
            producedBy: "Don Ramiro",
            city: "Boyacá",
            img_presentation: "/img/campesino1/presentacion.png",
            presentation: "Don Ramiro es uno de los productores mas conocidos de la región, el amigo fiel de todos sus vecinos y el maestro de todos en temas de agricultura. Es reconocido por vender gran diversidad de productos, todos de alta calidad.",
            phone: "3206547890"
          },
          {
            id: 4,
            SKU: "ESMC0004",
            name: "Lechuga romana",
            image: "/img/campesino1/lechuga_romana.jpg",
            price: "$5.300",
            description: "Lechiga romana tierna 400 gr",
            producedBy: "Don Ramiro",
            city: "Boyacá",
            img_presentation: "/img/campesino1/presentacion.png",
            presentation: "Don Ramiro es uno de los productores mas conocidos de la región, el amigo fiel de todos sus vecinos y el maestro de todos en temas de agricultura. Es reconocido por vender gran diversidad de productos, todos de alta calidad.",
            phone: "3206547890"
          },
          {
            id: 5,
            SKU: "ESMC0005",
            name: "Fresas",
            image: "/img/campesino2/fresas.jpg",
            price: "$6.800",
            description: "Fresa extra 500 gr",
            producedBy: "Pacho y Anita",
            city: "Cundinamarca",
            img_presentation: "/img/campesino2/presentacion.jpg",
            presentation: "Pacho y Anita, los esposos mas queridos de la zona pues siempre reciben a todos con una gran sonrisa en su rostro. Los productos que ofrecen son de alta calidad pero sobre todo producidos con mucho amor",
            phone: "3105648890"
          },
          {
            id: 6,
            SKU: "ESMC0006",
            name: "Lechuga crespa",
            image: "/img/campesino2/lechuga_crespa.jpg",
            price: "$4.000",
            description: "Lechuga crespa fresca 180 gr",
            producedBy: "Pacho y Anita",
            city: "Cundinamarca",
            img_presentation: "/img/campesino2/presentacion.jpg",
            presentation: "Pacho y Anita, los esposos mas queridos de la zona pues siempre reciben a todos con una gran sonrisa en su rostro. Los productos que ofrecen son de alta calidad pero sobre todo producidos con mucho amor",
            phone: "3105648890"
          },
          {
            id: 7,
            SKU: "ESMC0007",
            name: "Mazorca",
            image: "/img/campesino2/mazorca.jpg",
            price: "$1.800",
            description: "Mazorca entera 1 Und",
            producedBy: "Pacho y Anita",
            city: "Cundinamarca",
            img_presentation: "/img/campesino2/presentacion.jpg",
            presentation: "Pacho y Anita, los esposos mas queridos de la zona pues siempre reciben a todos con una gran sonrisa en su rostro. Los productos que ofrecen son de alta calidad pero sobre todo producidos con mucho amor",
            phone: "3105648890"
          },
          {
            id: 8,
            SKU: "ESMC0008",
            name: "zanahoria",
            image: "/img/campesino2/zanahoria.jpg",
            price: "$1.400",
            description: "Zanahoria 1 Und",
            producedBy: "Pacho y Anita",
            city: "Cundinamarca",
            img_presentation: "/img/campesino2/presentacion.jpg",
            presentation: "Pacho y Anita, los esposos mas queridos de la zona pues siempre reciben a todos con una gran sonrisa en su rostro. Los productos que ofrecen son de alta calidad pero sobre todo producidos con mucho amor",
            phone: "3105648890"
          },
          {
            id: 9,
            SKU: "ESMC0009",
            name: "Arándanos",
            image: "/img/campesino3/arandanos.jpg",
            price: "$7.400",
            description: "Arándanos 125 gr",
            producedBy: "Clarita y Danilo",
            city: "Santander",
            img_presentation: "/img/campesino3/presentacion.jpg",
            presentation: "Clarita y Danilo, dos hermanos increíbles que han dedicado toda su vida al campo. Si se trata de experiencia en temas de cultivos son los mejores y les encanta compartir todo lo que saben con las personas de su región.",
            phone: "3115642099"
          },
          {
            id: 10,
            SKU: "ESMC0010",
            name: "Mazorca",
            image: "/img/campesino3/mazorca.jpg",
            price: "$13.500",
            description: "Mazorca entera 500 gr",
            producedBy: "Clarita y Danilo",
            city: "Santander",
            img_presentation: "/img/campesino3/presentacion.jpg",
            presentation: "Clarita y Danilo, dos hermanos increíbles que han dedicado toda su vida al campo. Si se trata de experiencia en temas de cultivos son los mejores y les encanta compartir todo lo que saben con las personas de su región.",
            phone: "3115642099"
          },
          {
            id: 11,
            SKU: "ESMC0011",
            name: "Tomate",
            image: "/img/campesino3/tomate.jpg",
            price: "$700",
            description: "Tomate chonto 1 Und",
            producedBy: "Clarita y Danilo",
            city: "Santander",
            img_presentation: "/img/campesino3/presentacion.jpg",
            presentation: "Clarita y Danilo, dos hermanos increíbles que han dedicado toda su vida al campo. Si se trata de experiencia en temas de cultivos son los mejores y les encanta compartir todo lo que saben con las personas de su región.",
            phone: "3115642099"
          },
          {
            id: 12,
            SKU: "ESMC0012",
            name: "Arándanos",
            image: "/img/campesino4/arandanos.jpg",
            price: "$22.000",
            description: "Arándanos 1000 gr",
            producedBy: "Doña Martha",
            city: "Boyacá",
            img_presentation: "/img/campesino4/presentacion.jpg",
            presentation: "Doña Martha, la mamá de todos. En su zona todos han aprendido a cultivar los mejores productos con su ayuda y asesoría. Le encanta ayudar a todos y hace su trabajo con mucho amor.",
            phone: "3115642099"
          },
          {
            id: 13,
            SKU: "ESMC0013",
            name: "Cilantro",
            image: "/img/campesino4/cilantro.jpg",
            price: "$3.400",
            description: "Cilantro Kosher 100 gr",
            producedBy: "Doña Martha",
            city: "Boyacá",
            img_presentation: "/img/campesino4/presentacion.jpg",
            presentation: "Doña Martha, la mamá de todos. En su zona todos han aprendido a cultivar los mejores productos con su ayuda y asesoría. Le encanta ayudar a todos y hace su trabajo con mucho amor.",
            phone: "3115642099"
          },
          {
            id: 14,
            SKU: "ESMC0014",
            name: "Espinaca",
            image: "/img/campesino4/espinaca.jpg",
            price: "$6.000",
            description: "Espinaca 150 gr",
            producedBy: "Doña Martha",
            city: "Boyacá",
            img_presentation: "/img/campesino4/presentacion.jpg",
            presentation: "Doña Martha, la mamá de todos. En su zona todos han aprendido a cultivar los mejores productos con su ayuda y asesoría. Le encanta ayudar a todos y hace su trabajo con mucho amor.",
            phone: "3115642099"
          },
          {
            id: 15,
            SKU: "ESMC0015",
            name: "Fresas",
            image: "/img/campesino4/fresas.jpg",
            price: "$4.200",
            description: "Fresa 250 gr",
            producedBy: "Doña Martha",
            city: "Boyacá",
            img_presentation: "/img/campesino4/presentacion.jpg",
            presentation: "Doña Martha, la mamá de todos. En su zona todos han aprendido a cultivar los mejores productos con su ayuda y asesoría. Le encanta ayudar a todos y hace su trabajo con mucho amor.",
            phone: "3115642099"
          },
          {
            id: 16,
            SKU: "ESMC0016",
            name: "Limón",
            image: "/img/campesino4/limon.jpg",
            price: "$6.600",
            description: "Limón orgánico 1 kg",
            producedBy: "Doña Martha",
            city: "Boyacá",
            img_presentation: "/img/campesino4/presentacion.jpg",
            presentation: "Doña Martha, la mamá de todos. En su zona todos han aprendido a cultivar los mejores productos con su ayuda y asesoría. Le encanta ayudar a todos y hace su trabajo con mucho amor.",
            phone: "3115642099"
          },
          {
            id: 17,
            SKU: "ESMC0017",
            name: "Papa criolla",
            image: "/img/campesino4/papa-criolla.jpg",
            price: "$6.500",
            description: "Papa criolla mediana 1000 gr",
            producedBy: "Doña Martha",
            city: "Boyacá",
            img_presentation: "/img/campesino4/presentacion.jpg",
            presentation: "Doña Martha, la mamá de todos. En su zona todos han aprendido a cultivar los mejores productos con su ayuda y asesoría. Le encanta ayudar a todos y hace su trabajo con mucho amor.",
            phone: "3115642099"
          },
          {
            id: 18,
            SKU: "ESMC0018",
            name: "Cilantro",
            image: "/img/campesino5/cilantro.jpg",
            price: "$3.500",
            description: "Cilantro Hidroponico 75 gr",
            producedBy: "Don Benigno",
            city: "Cundinamarca",
            img_presentation: "/img/campesino5/presentacion.jpg",
            presentation: "Don Benigno, el compadre de todos. Es conocido por ser el mejor en su región, siempre con la mejor actitud de ayuda y preocupado por brindar productos de la mejor calidad.",
            phone: "3115642099"
          },
          {
            id: 19,
            SKU: "ESMC0019",
            name: "Limón",
            image: "/img/campesino5/limon.jpg",
            price: "$5.600",
            description: "limon tahiti 1000gr",
            producedBy: "Don Benigno",
            city: "Cundinamarca",
            img_presentation: "/img/campesino5/presentacion.jpg",
            presentation: "Don Benigno, el compadre de todos. Es conocido por ser el mejor en su región, siempre con la mejor actitud de ayuda y preocupado por brindar productos de la mejor calidad.",
            phone: "3115642099"
          },
          {
            id: 20,
            SKU: "ESMC0020",
            name: "Papa pastusa",
            image: "/img/campesino5/papa_pastusa.jpg",
            price: "$13.500",
            description: "Papa pastusa 5000 gr",
            producedBy: "Don Benigno",
            city: "Cundinamarca",
            img_presentation: "/img/campesino5/presentacion.jpg",
            presentation: "Don Benigno, el compadre de todos. Es conocido por ser el mejor en su región, siempre con la mejor actitud de ayuda y preocupado por brindar productos de la mejor calidad.",
            phone: "3115642099"
          },
          {
            id: 21,
            SKU: "ESMC0021",
            name: "Yuca",
            image: "/img/campesino5/yuca.jpg",
            price: "$6.500",
            description: "Yuca 1 kg",
            producedBy: "Don Benigno",
            city: "Cundinamarca",
            img_presentation: "/img/campesino5/presentacion.jpg",
            presentation: "Don Benigno, el compadre de todos. Es conocido por ser el mejor en su región, siempre con la mejor actitud de ayuda y preocupado por brindar productos de la mejor calidad.",
            phone: "3115642099"
          },
          {
            id: 22,
            SKU: "ESMC0022",
            name: "Zanahoria baby",
            image: "/img/campesino5/zanahoria_baby.jpg",
            price: "$10.600",
            description: "Zanahoria baby natural 250 gr",
            producedBy: "Don Benigno",
            city: "Cundinamarca",
            img_presentation: "/img/campesino5/presentacion.jpg",
            presentation: "Don Benigno, el compadre de todos. Es conocido por ser el mejor en su región, siempre con la mejor actitud de ayuda y preocupado por brindar productos de la mejor calidad.",
            phone: "3115642099"
          }
    ];

    const historias = obj => {
        setOpenPopUp(true);
    }

    const agregar_carrito = obj => {
        setOpenPopUp2(true);
    }

    const cerrar = obj => {
         setOpenPopUp(false);
         setOpenPopUp2(false);
    }

return(
<div>
    <div className="row">
        <div>
            <Header/>
        </div>
    </div>
    <div className="row">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {products.map(({ image, name, price,description, producedBy, id, img_presentation, city, presentation, phone, SKU }) => (
              <div className="col-md-2" key={id} height="10%" width="10%" >
                <br/>
                <Card imageSource={image} name={name} price={price} description={description} producedBy={producedBy} />
                <div className="row">
                    <button className="shoppingCar3" onClick={() => historias(id)}>Producido por</button>
                    <br/>
                    <button className="shoppingCar2" onClick={() => agregar_carrito()}>Agregar</button>
                </div>
                {show && <PopUp details={selectedData} />}
                <PopUp openPopUp = {openPopUp} setOpenPopUp={setOpenPopUp}>
                <div className="flex-container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img_presentation} alt="a wallpaper" width="100%" height="100%"/>
                        </div>
                        <div className="col-md-6">
                            <center>
                                <h1>{producedBy}</h1>
                                <h2>{city}</h2>
                                <br/>
                                <p>{presentation}</p>
                                <br/>
                                <h5>CONTACTO: {phone}</h5>
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
                            <img src={image} alt="a wallpaper" width="100%" height="100%"/>
                        </div>
                        <div className="col-md-6">
                            <center>
                                <br/><br/><br/>
                                <h1>{name}</h1>
                                <h2>{price}</h2>
                                <br/><br/>
                                <h3>{description}</h3>
                                <h5>{SKU}</h5>
                                <br/>
                                <input type="number" pattern="^[0-9]" min="1" step="1"/>
                            </center>
                        </div>
                    </div>
                    <div className="row">
                        <button className="shoppingCar2" onClick={() => cerrar()}>Agregar</button>
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