import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import water from '../../assets/water.png'

export default function ProjetosRealizados() {
  return (
    <>
      <Header />
      <div className="container5">
        <div className="tituloProjeto">
            <span className="projetos"> Projetos Realizados</span>
        </div>
      
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Wash nas escolas (2018 a 2020)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Objetivo: avaliar a gestão da água, saneamento e higiene em 12
              escolas de Anápolis e mitigar os riscos causados pela má gestão
              desses serviços.
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>2700 análises microbiológica da água realizadas</li>
                <li>4800 estudantes beneficiados</li>
                <li>
                  Construção de uma bacia de evapostraspiração numa escola rural
                </li>
                <li>Substituição de filtros dos bebedouros nas 12 escolas</li>
                <li>
                  Substituição de caixas d’água em 2 escolas rurais pela
                  prefeitura
                </li>
                <li> Distribuição de 36 dispensers de sabão para as escolas</li>
                <li> Realização de palestras sobre higiene</li>
                <li>
                  Criação, impressão e distribuição de 5 mil gibis: Lólli e Flor
                  em WASH nas escolas
                </li>
                <li>Criação do Guia Escola Amiga WASH</li>
              </ul>
              <div className="imagemGotaDagua">
              <img className="Img-maos-agua" src={water} alt="maos segurando gota d'agua" />
              </div>
            </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: UEG Sustentável (2015 a 2017)
            </span>
          </div>
          <div className="descricaoProjeto">
              <span className="obj">
                Objetivo: Desenvolver a ideia de sustentabilidade e concientizar
                a comunidade universitária a respeito do consumo consciente e
                responsabilidade compartilhada.
              </span>
              <div className="divlista">
                <ul className="listaProjetos"> 
                  <li>
                    Instituição de um grupo de trabalho em cada Campus (cada
                    Campus recebeu material para divulgação do projeto)
                  </li>
                  <li>
                    Criação do Projeto Tampamania
                  </li>
                  <li>
                    Alguns campos confeccionaram novo recipientes para coletar
                    tampas, mobilizando restaurantes, escolas e lojas na
                    arrecadação do material.
                  </li>
                  <li>
                    2017: 3800kg de tampas plásticas coletadas que foram
                    trocadas por cadeiras de rodas
                  </li>
                  <li>
                    5800 tampas metálicas coletadas doadas para cooperativas de
                    catadores de material reciclável
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: O Planeta Agradece (2008 a 2010)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Objetivo: promover educação ambiental e campanha de coleta de óleo
              de fritura nas escolas municipais e estaduais da cidade de
              Anápolis (GO)
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>
                  Realização de palestras em 25 escolas estaduais e municipais
                  da cidade de Anápolis sobre: coleta seletiva e coleta de óleo
                  de fritura, geração de energia limpa, poluição ambiental,
                  saneamento, aquecimento global, recursos hídricos.
                </li>
                <li>
                  A cada litro de óleo o aluno recebia um cupom para concorrer a
                  um sorteio de prêmios
                </li>
                <li>Realização de oficinas de material reciclável</li>
                <li>
                  O óleo era coletado pela empresa Q Vida e Ecobrás para a
                  produção de sabão e biodiesel
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Coleta de óleo de fritura residual (OFR) (2007 a 2010)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Objetivo: coleta de óleo em estabelecimentos (restaurantes, bares,
              lanchonetes e hotéis) de 7 cidades: Anápolis, Goiânia, Barro Alto,
              Goianésia, Jaraguá, Aparecida de Goiânia e Brasília
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>400 mil litros de óleo coletados</li>
                <li>
                  Destinação do óleo de fritura para a produção de sabão e
                  biodiesel
                </li>
                <li>
                  Estabelecimento participantes receberam um certificado de
                  Responsabilidade Socioambiental com validade de 1 ano.
                </li>
                <li>
                  Ganho ambiental e econômico para o meio ambiente, sociedade e
                  participantes do projeto.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
