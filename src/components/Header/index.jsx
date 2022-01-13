import React, { useState, useEffect } from "react";
import "./styles.css";
import "./reset.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <div>
          <Link to="/">
            <img
              src="https://www.datocms-assets.com/60403/1640634012-logo.png"
              alt="logo"
            />
          </Link>
          <span className="logoNome"> INSTITUTO 4 ELEMENTOS </span>
        </div>

        {/*<div className="divbnt"> 
                    <button>área administrativa</button>
          </div>*/}
      </div>
      <div className="itens">
        <div className="bntResp">
          <button className="teste" onClick={toggleNav} >
            {" "}
            <AiOutlineMenu className="icon" />
          </button>
        </div>
        {(toggleMenu || screenWidth > 679) && (
          <ul className="ulHeader">
            <li className="dropdown">
              <Link to="/quemsomos" className="dropbtn">
                Quem somos
              </Link>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                O que fazemos
              </a>
              <div className="dropdown-content">
                <Link to="/projetosrealizados"> Projetos realizados </Link>
                <Link to="/projetosatuais">Projetos atuais </Link>
              </div>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Participe
              </a>
              <div className="dropdown-content">
                <Link to="/voluntario"> Voluntários </Link>
                <Link to="/associado"> Associado </Link>
              </div>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Apoie-nos
              </a>
              <div className="dropdown-content">
                <Link to="/doacao"> Doação </Link>
              </div>
            </li>
            <li className="dropdown">
              <a href="javascript:void(0)" className="dropbtn">
                Publicações
              </a>
              <div className="dropdown-content"></div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
