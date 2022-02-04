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
        <span className="conhecaP">Conheça alguns de nossos projetos</span>
        <div className="cards">
          <div className="card1">
            <p className="titleCard">Projeto: Wash nas escolas</p>
            <p className="cardDescricao">
              avaliar a gestão da água, saneamento e higiene em 12 escolas de
              Anápolis e mitigar os riscos causados pela má gestão desses
              serviços.
            </p>
            <div className="cardImage">
              <img
                src="https://www.datocms-assets.com/60403/1643050575-download.png"
                alt="imagem-card"
                className="imagemCard"
              />
            </div>
          </div>
          <div className="card1">
            <p className="titleCard">Projeto: UEG Sustentável</p>
            <p className="cardDescricao">
              Desenvolver a ideia de sustentabilidade e concientizar a
              comunidade universitária a respeito do consumo consciente e
              responsabilidade compartilhada.
            </p>
            <div className="cardImage">
              <img
                src="https://www.datocms-assets.com/60403/1643929825-download.png"
                alt="imagem-card"
                className="imagemCardMenina"
              />
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card1">
            <p className="titleCard">Projeto: Wash nas escolas</p>
            <p className="cardDescricao">
              avaliar a gestão da água, saneamento e higiene em 12 escolas de
              Anápolis e mitigar os riscos causados pela má gestão desses
              serviços.
            </p>
            <div className="cardImage">
              <img
                src="https://www.datocms-assets.com/60403/1643050575-download.png"
                alt="imagem-card"
                className="imagemCard"
              />
            </div>
          </div>
          <div className="card1">
            <p className="titleCard">Projeto: Wash nas escolas</p>
            <p className="cardDescricao">
              avaliar a gestão da água, saneamento e higiene em 12 escolas de
              Anápolis e mitigar os riscos causados pela má gestão desses
              serviços.
            </p>
            <div className="cardImage">
              <img
                src="https://www.datocms-assets.com/60403/1643050575-download.png"
                alt="imagem-card"
                className="imagemCard"
              />
            </div>
          </div>
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
