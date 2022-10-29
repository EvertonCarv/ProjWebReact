import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Main from './pages/Main';
import SobreEmpresa from './pages/SobreEmpresa';
import Contato from './pages/Contato';

function Rout(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main /> } ></Route>
                <Route path='/sobre-empresa' element={<SobreEmpresa /> } ></Route>
                <Route path='/contato' element={<Contato /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}; 

export default Rout;