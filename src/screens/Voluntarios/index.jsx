import React from 'react';
import './styles.css';
import comunicacaoIcon from '../../assets/voluntario/iconeComunicacao.png';
import estrelaIcon from '../../assets/voluntario/iconeEstrela.png';
import trofeuIcon from '../../assets//voluntario/iconeTrofeu.png';
import imagemVegetacao from '../../assets/voluntario/imagemVegetacao.jpg';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';


export default function Voluntarios(){
    return(
        <>
            <Header/>
            <div className="containerVol">
                <div className="textoVolPrincipal">
                    <h1>Voluntário</h1>
                    <p>O Instituto 4 Elementos está sempre aberto para novos<br/>
                        voluntários! Apreciamos toda e qualquer ajuda. Veja<br/>
                        alguns trabalhos em que você pode se envolver:</p>
                </div>
            
                <div className="caixaVolExplicacao">
                    <div className="textoVolComunicacao">
                        <img className="VoluntarioIcons"src={comunicacaoIcon} />
                        <h1>Comunicação</h1>
                        <p>Gosta de Gestão de mídias sociais? Design gráfico?<br/>
                            Storytelling? Engajamento virtual? Precisamos de<br/>
                            pessoas que ajudem a trazer visibilidade para o<br/>
                            instituto e nossos projetos!</p>
                    </div>
                
                    <div className="textoVolCaptacao">
                        <img className="VoluntarioIcons" src={estrelaIcon} />
                        <h1>Captação</h1>
                        <p>O terceiro setor precisa muito de recursos para<br/>
                            funcionar, e um dos mais importantes canais é a <br/>
                            captação de recursos através das doações. <br/>
                            Ajude-nos a encontrar mais doadores!</p>
                    </div>

                    <div className="textoVolProjetos">
                        <img className="VoluntarioIcons"src={trofeuIcon} />
                        <h1>Projetos</h1>
                        <p>O Instituto 4 Elementos tem diversos projetos na <br/>
                            manga, pequenos e grandes, precisando de mais <br/>
                            braços para erguê-los. Venha se envolver nas<br/>
                            nossas ações de impacto socioambiental!</p>
                    </div>
                </div>

                <img className='imagemVegetacao' src={imagemVegetacao} />

                <div className="textoVolPrincipal">
                    <h1>Venha ser um voluntário!</h1>
                </div>

                <div className="textoVolFormulario">
                    <p>Preencha o formulário disponível no link abaixo e nos conte um pouco mais sobre
                        você e como gostaria de contribuir.
                    </p>
                </div>

                

            </div>
            <Footer/>
        </>
    )
}