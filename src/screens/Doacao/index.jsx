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
        <div className="itensDoacao">
          <div className="divItensDoacao">
            <img className="imgsDoacao" src={manutencao} />
            <span className="descricaoDoacao">
              Manutenção institucional: <br /> É fundamental remunerar nossos
              colaboradores para que a luta continue.
            </span>{" "}
          </div>
          <div className="divItensDoacao">
            {" "}
            <img className="imgsDoacao" src={planta} />
            <span className="descricaoDoacao">
              Plantio de árvores: <br /> Confira a sessão “Adote uma árvore”
              para mais detalhes!
            </span>{" "}
          </div>
          <div className="divItensDoacao">
            {" "}
            <img className="imgsDoacao" src={lixo} />
            <span className="descricaoDoacao">
              Gestão de projetos: <br /> Mesmo o menor dos projetos exige
              recursos para ser viabilizado
            </span>{" "}
          </div>
          <div className="divItensDoacao">
            {" "}
            <img className="imgsDoacao" src={remuneracao} />
            <span className="descricaoDoacao">
              Remuneração de parceiros:
              <br />O instituto sempre busca experts 
              para aconselhar e orientar nosso staff
               e melhorar cada vez mais os serviços realizados.
            </span>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
