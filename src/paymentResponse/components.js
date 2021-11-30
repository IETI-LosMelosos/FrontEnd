import React, { useEffect } from "react";
import logo from '../resources/img/logo_large.png'


export function PaymentResponse(props){

    useEffect(()=>{
        window.paymentInformation()
    })

    return <div>
        <header id="main-header" style={{marginTop: '20px'}}>
            <div className="row">
                <div className="col-lg-12 franja">
                    <img className="center-block" alt="" style={{width: '250px',height:'50px'}} src={logo} />
                </div>
            </div>
        </header>
        <div className="container">
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-lg-8 col-lg-offset-2 ">
                    <h4 style={{textAlign: 'left'}}> Respuesta de la Transacción </h4>
                    <hr />
                </div>
                <div className="col-lg-8 col-lg-offset-2 ">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Referencia</td>
                                    <td id="referencia"></td>
                                </tr>
                                <tr>
                                    <td className="bold">Fecha</td>
                                    <td id="fecha" className=""></td>
                                </tr>
                                <tr>
                                    <td>Respuesta</td>
                                    <td id="respuesta"></td>
                                </tr>
                                <tr>
                                    <td>Motivo</td>
                                    <td id="motivo"></td>
                                </tr>
                                <tr>
                                    <td className="bold">Banco</td>
                                    <td className="" id="banco"></td>
                                </tr>
                                <tr>
                                    <td className="bold">Recibo</td>
                                    <td id="recibo"></td>
                                </tr>
                                <tr>
                                    <td className="bold">Total</td>
                                    <td className="" id="total">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="row">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                        <img alt="" src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/pagos_procesados_por_epayco_260px.png" style={{marginTop: '10px',float:'left'}} /> <img src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/epayco/credibancologo.png" alt=""
                            height="40px" style={{marginTop: '10px',float:'right'}}/>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}