import React from 'react';

function ButtonCity(props) {
    const { name , link } = props;
  
    const handleClick = (event) => {
      event.preventDefault();
      window.location.pathname= "/" + event.target.link
    };
  
    return (
    <li>
      <button className="ButtonCity" onClick={handleClick} link={link}>
        {name}
      </button>
    </li>
    );
  }

export function CitySelect(props){

    return (
    <div>
        <h2>Desde que Ciudad Estas?</h2>
        <ul className='buttonList'>
            <ButtonCity name= 'Bogota' link= 'bogota'/>
            <ButtonCity name= 'Cali' link= 'cali'/>
            <ButtonCity name= 'Medellin' link= 'medellin'/>
            <ButtonCity name= 'Home' link= ''/>
        </ul>
    </div>
    );
}