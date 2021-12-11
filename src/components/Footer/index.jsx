import React from "react";
import './styles.css'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="contatos">
                    <span>
                        Contatos:
                    </span>
                    <span>
                        +55393420362462
                    </span>
                    <span>
                        ecocerrado.brasileiro@gmail.com
                    </span>
                </div>
                <div className="redesSociais">
                    <span> Redes sociais </span>
                    <a target="_blank" href="https://www.facebook.com/instituto4Elementos/">  <img className="logos" src={facebook} /> </a>
                    <a target="_blank" href="https://www.instagram.com/instituto4elementos/"><img className="logos" src={instagram} /> </a>
                    <a target="_blank" href="https://www.linkedin.com/company/instituto4elementos/"><img className="logos" src={linkedin} /> </a>

                </div>
                <div>
                    <span>Anápolis, GO, Brasil</span>
                </div>
            </header>
        </>
    )
}
