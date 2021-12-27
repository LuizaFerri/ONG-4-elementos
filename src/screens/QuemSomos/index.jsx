import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function QuemSomos() {
  return (
    <>
      <Header />
      <main>
        <div className="foto_imagem">
          <span className="titulo">Quem somos</span>
          <p className="quemsomos">
            O Instituto 4 Elementos: Centro de Estudo e Tecnologia Apropriada ao
            Desenvolvimento, fundado em 2007, é uma associação civil de direito
            privado, sem fins lucrativos, com o objetivo de promover o
            conhecimento e a realização de estudos e iniciativas de cooperação
            para o desenvolvimento sustentável, tecnológico, humano e social.
          </p>
          <img src='https://www.datocms-assets.com/60403/1640634026-quemsomos.png' alt="imagem quem somos" className="imagem" />
        </div>
        <div className="container3">
          <span className="titulo">Objetivos</span>
          <div className="objetivos">
            <div className="item">
              <img className="imgItens" src='https://www.datocms-assets.com/60403/1640634113-vaso-plantas.png' alt="imagem quem somos" />
              <span className="descricao">
                Promover a ecologia holística, isto é, o ser humano torna-se
                responsável pelo equilíbrio ecológico do planeta e pelo direito
                de todos os seres vivos à vida e ao bem-estar
              </span>
            </div>
            <div className="item">
              <img className="imgItens" src='https://www.datocms-assets.com/60403/1640633903-chats.png' alt="imagem quem somos" />
              <span className="descricao">
                Realizar ações, projetos e programas de cooperação internacional
                em colaboração com ONGs, universidades, instituições privadas e
                públicas nacionais e internacionais
              </span>
            </div>
            <div className="item">
              <img className="imgItens" src='https://www.datocms-assets.com/60403/1640633928-engrenagens.png' alt="imagem quem somos" />
              <span className="descricao">
                Promover e realizar programas/projetos, consultorias e cursos de
                formação profissional no Brasil e no exterior, em particular
                sobre as temáticas: ambiental, educacional, tecnológica e
                bem-esta
              </span>
            </div>
          </div>
          <div className="objetivos">
            <div className="item">
              <img className="imgItens" src='https://www.datocms-assets.com/60403/1640633982-lampada.png' alt="imagem quem somos" />
              <span className="descricao">
                Defesa, preservação e conservação do meio ambiente e promoção do
                desenvolvimento sustentável.
              </span>
            </div>
            <div className="item">
              <img className="imgItens" src='https://www.datocms-assets.com/60403/1640634005-livro.png' alt="imagem quem somos"/>
              <span className="descricao">
                Realizar e apoiar estudos e pesquisas, desenvolvimento de
                tecnologias alternativas, produção e divulgação de informações e
                conhecimentos técnicos e científicos relacionados ao ambiente,
                saúde e bem-estar de todos os seres vivos.
              </span>
            </div>
            <div className="item">
              <img className="imgItens" src='https://www.datocms-assets.com/60403/1640634081-sons.png' alt="imagem quem somos"/>
              <span className="descricao">
                Contribuir para o engajamento de mais stakeholders na promoção
                de uma sociedade mais sustentável
              </span>
            </div>
          </div>
        </div>
        <div className="parceiros">
          <span className="titulo">Nossos parceiros</span>
          <span className="descricaoParceiros">
            O Instituto 4 Elementos conta com diversos parceiros financiadores e
            implementadores, a quem dedicamos nossa mais profunda gratidão.
            Conheça alguns deles!
          </span>
          <div className="container4">
            <div className="item">
              <img className="imgItensp" alt="imagem quem somos" src='https://www.datocms-assets.com/60403/1640633892-cetamb-1.png' />
            </div>
            <div className="item">
              <img className="imgItensp" alt="imagem quem somos" src='https://www.datocms-assets.com/60403/1640633942-fama-1.png' />
            </div>
            <div className="item">
              <img className="imgItensp" alt="imagem quem somos" src='https://www.datocms-assets.com/60403/1640633962-ifg-2.png' />
            </div>
          </div>
          <div className="container4">
            <div className="item">
              <img className="imgItensp" alt="imagem quem somos" src='https://www.datocms-assets.com/60403/1640634017-prefeitura.png' />
            </div>
            <div className="item">
              <img className="imgItensp" alt="imagem quem somos" src='https://www.datocms-assets.com/60403/1640634093-studio.png' />
            </div>
            <div className="item">
              <img className="imgItensp" alt="imagem quem somos" src='https://www.datocms-assets.com/60403/1640634104-ueg-1.png' />
            </div>
          </div>
        </div>
        <div className="transparencia">
          <span className="titulo">Transparência</span>
          <p className="descricaoTransparencia">
            Como parte da nossa política de transparência com nossos doadores e
            parceiros financiadores e implementadores, o Instituto disponibiliza
            para livre consulta o estatuto social e o portfólio institucional.
          </p>
          <div className="link">
            <div>
              <a href="https://www.instituto4elementos.org/wp-content/uploads/2021/08/Estatuto-4-Elementos.pdf">
                Estatuto 4 Elementos
              </a>
            </div>
            <div>
              <a href="https://www.instituto4elementos.org/wp-content/uploads/2021/08/Portfolio-Instituto-4-Elementos.pdf">
                Portifolio 4 Elementos
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
