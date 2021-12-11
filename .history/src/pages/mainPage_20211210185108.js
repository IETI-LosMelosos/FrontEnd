import React from 'react';
import { GridMain } from '../gridMain';

export function MainPage(props){

    return (
    <div className= "container">
        <div className="row">
            <div className= "col-6">
                <img src="./recomendaciones.PNG" alt="logo E-Sumerce" />
            </div>
            <GridMain/>
        </div>
    </div>
    );
}