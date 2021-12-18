import React from 'react';
import './styles.css';
import iconeFacebook from '../../assets/contatos/iconeFacebook.png';
import iconeInstagram from '../../assets/contatos/iconeInsta.png';
import iconeLinkedin from '../../assets/contatos/iconeLink.png';


import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

export default function Contatos(){
    return(
        <>
            <Header/>
            <div className="containerContatos">
                <div className="textoConPrincipal">
                    <h1>Contatos</h1>
                </div>

                <div className="caixaContatos">
                    <div className="textoCaixaContatos">
                        <h1>Whatsapp</h1>
                        <p>+39 (34) 2036-2462</p>
                        
                        <h1>Telefone</h1>
                        <p>(62) 9 9314-9678</p>

                        <h1>Email</h1>
                        <p>ecocerrado.brasileiro@gmail.com</p>
                    </div>
                </div>

                <div className="textoConheca">
                    <p>Conheça mais</p>
                    <p>Siga nossas atualizações nas redes sociais</p>
                </div>

                <div className="redesSociaisCon">
                    <ul>
                        <li>
                            <img className='iconeContatos' src={iconeFacebook} />@instituto4elementos
                        </li>

                        <li>
                         <img className='iconeContatos' src={iconeInstagram} />@instituto4elementos
                        </li>

                        <li>
                            <img className='iconeContatos' src={iconeLinkedin}/> instituto4elementos
                        </li>
                    </ul>
                </div>

            </div>
            <Footer/>
        </>
    )
}