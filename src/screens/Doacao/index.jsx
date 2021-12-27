import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";


export default function Doacao() {
  return (
    <>
      <Header />
      <div className="container7">
        <span className="tituloDoacao"> Doação </span>
        <img className="imgDoacao" alt="imagemDoacao" src='https://www.datocms-assets.com/60403/1640633910-doacao.jpg'/>
        <p className="pdoacao">
          Ajude o Instituto 4 Elementos a continuar exercendo suas atividades e
          alcançar ainda mais pessoas e regiões benefeciadas em nossos projetos!
          Os valores doados são utilizados para:
        </p>
        <div className="itensDoacao">
          <div className="divItensDoacao">
            <div className="divImgP">
              <img className="imgsDoacao" alt="imagemDoacao" src='https://www.datocms-assets.com/60403/1640634175-manutencao.png' />
              <p className="tituloIcons">Manutenção institucional:</p>
            </div>
            <span className="descricaoDoacao">
              É fundamental remunerar nossos colaboradores para que a luta
              continue.
            </span>
          </div>
          <div className="divItensDoacao">
            <div className="divImgP">
              <img className="imgsDoacao" alt="imagemDoacao" src='https://www.datocms-assets.com/60403/1640634185-planta.png' />
              <p className="tituloIcons">Plantio de árvores: </p>
            </div>
            <span className="descricaoDoacao">
              <br /> Confira a sessão “Adote uma árvore” para mais detalhes!
            </span>
          </div>
          <div className="divItensDoacao">
            <div className="divImgP">
              <img  className="imgsDoacao" alt="imagemDoacao" src='https://www.datocms-assets.com/60403/1640634169-lixo.png' />
              <p className="tituloIcons">Gestão de projetos: </p>
            </div>
            <span className="descricaoDoacao">
              Mesmo o menor dos projetos exige recursos para ser viabilizado
            </span>
          </div>
          <div className="divItensDoacao">
            <div className="divImgP">
              <img className="imgsDoacao"alt="imagemDoacao" src='https://www.datocms-assets.com/60403/1640634193-remuneracao.png' />
              <p className="tituloIcons"> Remuneração de parceiros: </p>
            </div>
            <span className="descricaoDoacao">
              O instituto sempre busca experts para aconselhar e orientar nosso
              staff e melhorar cada vez mais os serviços realizados.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
