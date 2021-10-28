import React from 'react';
import { GridMain } from '../gridMain';
import { SearchBar } from '../searchBar/components';

export function MainPage(props){

    return (
    <div className= "container">
        <div className= "row">
            <div className= "column">
                <div className="d-flex justify-content-center">
                    <img src="./logoESumerce.PNG" alt="logo E-Sumerce" />
                </div>
            </div>
        </div>
        <div className= "row">
            <div className= "column">
                <div className="d-flex justify-content-center">
                    <SearchBar/>
                </div>
            </div>
        </div>
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