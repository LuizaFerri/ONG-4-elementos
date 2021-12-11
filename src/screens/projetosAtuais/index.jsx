import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProjetosAtuais() {
  return (
    <>
      <Header />
      <div className="container5">
        <div className="tituloProjeto">
          <span className="projetos"> Projetos Atuais</span>
        </div>

        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Wash 36: água, saneamento e higiene (2021 a 2023)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Objetivo: avaliar a gestão do água, saneamento e higiene en 45
              escolas de Anápolis e mitigar os riscos causados pela má gestão
              desses serviços
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>distribuição de 200 dispensers de sabão as escolas</li>
                <li>
                  realização de oficinas de sabão e palestras em 48 escolas
                </li>
                <li>análises microbiológicas</li>
                <li>APP para monitorar os filtros de água </li>
                <li>criação de 3 gibis educativos: água, resíduos e higiene</li>
                <li> plantio de 1500 árvores para recuperar nascentes</li>
                <li>
                  {" "}
                  Patrocínio: Fondazione Sipec e Acque Bresciane (Itália)
                  Partners: CeTAmp Lab, Universidade Federal de Goiás,
                  Universidade Estadual de Goiás, Instituto Federal de Goiás,
                  Secretaria Municipal de Educação e de Meio ambiente e Estúdio
                  Arquitetura Viva{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Re-criar o pátio da escola (2022 a 2024)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Considerando a influência do meio ambiente (físico e social) na
              formação do indivíduo e da escola como principal meio de
              transformação, buscamos, por meio deste projeto transformar o
              pátio das escolas e co-criar, em conjunto com professores e
              alunos, um espaço educacional e sustentável nas escolas
              brasileiras.
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>
                  Pátio verde: análise do contexto de cada escola buscando
                  entender como cada pátio se configura e como se inciarão as
                  transformações
                </li>
                <li>
                  Murais: os muros da escola serão grandes espaços para
                  encorajar a arte e a criatividade dos estudantes
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Caravana água e juventude (2022 a 2024)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              O projeto “Caravana Água e Juventude: incentivando boas práticas
              sustentáveis na Bacia do Paranaíba” será realizado em 7 municipios
              do Estado de Goiás, que fazem parte da Bacia do Paranaíba
              contemplando 7 campi da Universidade Estadual de Goiás (UEG) e
              beneficiando 630.000 pessoas.
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>
                  Objetivo: Incentivar práticas de uso racionais dos recursos
                  hídricos, através de mobilização e capacitação de
                  multiplicadores ambientais.
                </li>
                <li>curso de capacitação de multiplicadores universitários</li>
                <li>educação ambiental nas escolas</li>
                <li>análise físico-química da água</li>
                <li> plantio de árvores </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Consumo consciente:repensar nossos hábitos (2022 a 2024)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Projeto multdisciplinar para incentivar a reflexão, discussão e
              ações interativas com informações e conceitos sobre mudanças em
              favor de estilos de vida sustentáveis, aliado a questão da
              preservação ambiental, problemas sociaus, cidadania e ética
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>
                  A definição ecológica de sustentabilidade diz que “a
                  sobrevivência a longo prazo de cada espécie depende de uma
                  base limitada de recursos chamados de stock: água,solo,
                  floresta, ar, alimentos, etc”. Isto significa que o consumismo
                  exagerado está provocando uma pressão nos recursos do planeta
                  e diminuido o stock e a capacidade do planeta de regenerar-se.
                  Indo contra o princípio fundamental do desenvolvimento
                  sustentável que diz ”devemos atender as necessidades das
                  gerações presentes sem comprometer as gerações
                  futuras”(Conferência de Brundtland,1987)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divProjetos">
          <div className="projetosRealizados">
            <span className="nomeProjeto">
              Projeto: Agroecologia para enfrentar as mudanças climáticas (2022
              a 2024)
            </span>
          </div>
          <div className="descricaoProjeto">
            <span className="obj">
              Este projeto busca melhorar a produtividade agrícola do
              assentamnto de Canudos através do progresso tecnológico, inovação
              e formação no contexto da promoção da agricultura sustentável em
              parceria com a Universidade Federal de Goiás. Os pequenos
              agricultores estão mais expostos aos riscos causados pela mudanças
              climáticas, pois muitas vezes têm acesso limitado a água, capital
              financeiro e mercados.
            </span>
            <div className="divlista">
              <ul className="listaProjetos">
                <li>
                  aplicar estratégias agrícolas capazes de adaptarem a situação
                  climática e ambiental (“climate smart”)
                </li>
                <li>reduzir os riscos associados ao clima</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
