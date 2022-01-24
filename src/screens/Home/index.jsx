import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container2">
        <div className="divPhome">
           <p className="pHome">
          A 4 Elementos é uma organização que trabalha para ampliar as
          oportunidades de desenvolvimento socioambiental, principalmente para
          as novas gerações.
        </p>
        </div>
       
        <div className="imagensOn">
          <img
            className="imgsOng"
            src="https://www.datocms-assets.com/60403/1642195232-261300901_4339512129509320_83688705255808722_n.jpg"
            alt="imagem ong"
          />
          <img
            className="imgsOng"
            src="https://www.datocms-assets.com/60403/1642195221-261795712_4339512119509321_3507690507967935709_n.jpg"
            alt="imagem ong"
          />
          <img
            className="imgsOng"
            src="https://www.datocms-assets.com/60403/1642195212-263409068_4346315035495696_4517821158607606358_n.jpg"
            alt="imagem ong"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
