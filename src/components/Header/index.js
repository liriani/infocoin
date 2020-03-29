import React from 'react';
import logo from '../../assets/Header/infocoins_logo.svg'
import flagUSA from '../../assets/Header/usa_square.svg'
import {DivHeader} from "./styles";

function Header() {
    return (
        <DivHeader>
            <img className='infocoinLogo' src={logo}/>
            <div className='title'>
                <div> Cotação</div>
                <div className='title-text'>
                    <img className='flagUSA' src={flagUSA}/>
                    <h1>
                        Dólar Estadunidense
                    </h1>
                </div>
            </div>
        </DivHeader>
    );
}

export default Header;