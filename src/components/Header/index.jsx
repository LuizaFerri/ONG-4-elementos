import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";
import "./reset.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
          <span className="logoNome"> INSTITUTO 4 ELEMENTOS </span>
        </div>

        {/*<div className="divbnt"> 
                    <button>área administrativa</button>
          </div>*/}
      </div>
      <div className="itens">
        <div className="bntResp">
          <button className="teste">
            {" "}
            <AiOutlineMenu className="icon" />
          </button>
        </div>
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
              <Link to ="/voluntario"> Voluntários </Link>
              <a href="#">Associado</a>
              <Link to ="/doacao"> Doação </Link>
              
            </div>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">
              Apoie-nos
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">
              Publicações
            </a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
