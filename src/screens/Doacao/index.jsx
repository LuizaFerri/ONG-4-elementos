import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";
import doacao from "../../assets/doacao.jpg";
import lixo from "../../assets/doacao/lixo.png";
import manutencao from "../../assets/doacao/manutencao.png";
import planta from "../../assets/doacao/planta.png";
import remuneracao from "../../assets/doacao/remuneracao.png";

export default function Doacao() {
  return (
    <>
      <Header />
      <div className="container7">
        <span className="tituloDoacao"> Doação </span>
        <img className="imgDoacao" src={doacao} />
        <p className="pdoacao">
          Ajude o Instituto 4 Elementos a continuar exercendo suas atividades e
          alcançar ainda mais pessoas e regiões benefeciadas em nossos projetos!
          Os valores doados são utilizados para:
        </p>
        
      </div>
      <Footer />
    </>
  );
}
