import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer'


export default function Home () {
    return(
        <>
         <Header /> 
            <div className="container2">
                <div className="imagemHome">
                    <img src='https://www.datocms-assets.com/60403/1640633970-imgfrase.png' alt="imagem com texto" />
                </div>
            </div>
            <Footer />
            </>
    );
}
