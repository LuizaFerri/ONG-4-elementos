import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
                        <div className="textoFVEscuro">
                            <p> 
                                ● Seja um voluntário!<br/>
                                ● Seja um doador!<br/>
                                ● Seja um parceiro implementador!<br/>
                                ● Ajude a divulgar nossos conteúdos nas mídias sociais!<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}