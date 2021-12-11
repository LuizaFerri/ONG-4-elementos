import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import img from '../../assets/imgFrase.png'
import Footer from '../../components/Footer'


export default function Home () {
    return(
        <>
         <Header />
            <div className="container2">
                <div className="imagemHome">
                    <img src={img} />
                </div>
            </div>
            <Footer />
            </>
    );
}
