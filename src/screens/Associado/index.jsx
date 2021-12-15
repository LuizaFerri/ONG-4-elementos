import React from 'react';
import Header from '../../components/Header';
import './styles.css';

export default function Associado(){
    return(
        <>
            <Header/>
            <div className="containerAssociado">
                <div className="textoAsPrincipal">
                    <h1>Associado</h1>
                </div>
            
                <div className="caixaVerdeClaro">
                    <span className=''>Como se engajar? </span>
                </div>
            </div>
            
        </>
    )
}