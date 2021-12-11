import React from 'react';
import { GridMain } from '../gridMain';

export function MainPage(props){

    return (
        <div className= "container">
        <div className= "row">
            <div className="col-6">
                <div style={{paddingTop:'20px', paddingLeft:'40px'}}>
                    <h1>En temporada:</h1>
                    <ul>
                        <li style={li}>Papa</li>
                        <li style={li}>Yuca</li>
                        <li style={li}>Remolacha</li>
                        <li style={li}>Tomate</li>
                        <li style={li}>Fresa</li>
                    </ul>
                </div>
            </div>
            <div className= "col-6" style={{textAlign:'center'}}>
                <button style={greenButton} onClick={handleClick} data-link={'citySelect'}>Productos</button>
                <button style={greenButton} data-link={'about'} onClick={handleClick}>Sobre Nosotros</button>
                <button style={greenButton} data-link={'estadisticas'} onClick={handleClick}>Estadisticas</button>
            </div>
        </div>
        <div className='row'>
            <div className='col-6' style={{textAlign:'right'}}>
                <h1 style={{paddingTop:'60px'}}>Unete a nosotros y apoya el campo Colombiano</h1>
            </div>
            <div className='col-6' style={{textAlign:'center'}}>
                <img style={{height:'250px',width:'250px'}} src={camp}/>
                <h1>Don Norberto</h1>
            </div>
        </div>
    </div>
    );
}