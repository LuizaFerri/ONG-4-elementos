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
                    <h1 className='tituloFVClaro'>Como se engajar? </h1>
                    <h1 className='textoFVClaro'>Há muitas formas de ajudar o instituto!</h1>

                    <div className="caixaVerdeEscuro">
                            <ul>
                                <li>Seja voluntário!</li>
                                <li>Seja doador!</li>
                                <li>Seja um parceiro implementador!</li>
                                <li>Ajude a divulgar nossos conteúdos nas mídias sociais!</li>
                            </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}