import React from 'react';
import { GridMain } from '../gridMain';
import { SearchBar } from '../searchBar/components';

export function MainPage(props){

    return (
    <div className= "container">
        
        <div className= "row">
            <div className= "col-6">
                <img src="./recomendaciones.PNG" alt="logo E-Sumerce" />
            </div>
            <div className= "col-6">
                <GridMain/>
            </div>
        </div>
    </div>
    );
}