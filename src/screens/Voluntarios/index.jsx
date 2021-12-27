import React from "react";
import "./styles.css";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

export default function Voluntarios() {
  return (
    <>
      <Header />
      <div className="containerVol">
        <div className="textoVolPrincipal">
          <h1>Voluntário</h1>
          <p>
            O Instituto 4 Elementos está sempre aberto para novos
            <br />
            voluntários! Apreciamos toda e qualquer ajuda. Veja
            <br />
            alguns trabalhos em que você pode se envolver:
          </p>
        </div>

        <div className="volExplicacao">
          <ul>
            <li>
              <img
                className="volIcones"
                alt="imagens voluntarios"
                src="https://www.datocms-assets.com/60403/1640634200-iconecomunicacao.png"
              />
              <h1>Comunicação</h1>
              <p>
                Gosta de gestão de mídias sociais? Design gráfico?
                <br />
                Storytelling? Engajamento virtual? Precisamos de
                <br />
                pessoas que ajudem a trazer visibilidade para o<br />
                instituto e nossos projetos!
              </p>
            </li>

            <li>
              <img
                className="volIcones"
                alt="imagens voluntarios"
                src="https://www.datocms-assets.com/60403/1640634209-iconeestrela.png"
              />
              <h1>Captação</h1>
              <p>
                O terceiro setor precisa muito de recursos para
                <br />
                funcionar, e um dos mais importantes canais é a<br />
                captação de recursos através das doações. Ajude-nos
                <br />a encontrar mais doadores
              </p>
            </li>

            <li>
              <img
                className="volIcones"
                alt="imagens voluntarios"
                src='https://www.datocms-assets.com/60403/1640634216-iconetrofeu.png'
              />
              <h1>Projetos</h1>
              <p>
                O Instituto 4 Elementos tem diversos projetos na
                <br />
                manga, pequenos e grandes, precisando de mais
                <br />
                braços para erguê-los. Venha se envolver nas
                <br />
                nossas ações de impacto socioambiental!
              </p>
            </li>
          </ul>
        </div>

        <img
          className="imagemVegetacao "
          alt="imagens voluntarios"
          src='https://www.datocms-assets.com/60403/1640634223-imagemvegetacao.jpg'
        />

        <div className="textoVolPrincipal">
          <h1>Venha ser um voluntário!</h1>
        </div>

        <div className="textoVolFormulario">
          <p>
            Preencha o formulário disponível no link abaixo e nos conte um pouco
            mais sobre você e como gostaria de contribuir.
          </p>
        </div>

        <form className="volFormulario">
          <label>
            <span className="tituloFormulario">Home:</span>
            <input className="valorInput" type="text" />

            <span className="tituloFormulario">Telefone:</span>
            <input className="valorInput" type="number" />

            <span className="tituloFormulario">Endereço:</span>
            <input className="valorInput" type="text" />

            <span className="tituloFormulario">Conte-nos sobre você: </span>
            <input className="descricaoFormulario" type="text" />

            <span className="tituloFormulario">
              Como gostaria de contribuir?
            </span>
            <input className="descricaoFormulario" type="text" />
          </label>
        </form>
      </div>
      <Footer />
    </>
  );
}
