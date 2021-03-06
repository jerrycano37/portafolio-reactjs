import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap'
import Redes from "./Redes";

const Header = (props) => {

    return <header id="home">

        <Nav id="nav-wrap">

            <a className="mobile-btn" href={"#nav-wrap"} title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href={"#home"} title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">

                <NavItem className="current">
                    <NavLink className="smoothscroll" href="#">Inicio</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="smoothscroll" href="#about">Acerca de mi</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="smoothscroll" href="#resume">Resume</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="smoothscroll" href="#portfolio">Trabajos</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="smoothscroll" href="#testimonials">Testimonios</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="smoothscroll" href="#contact">Contacto</NavLink>
                </NavItem>

            </ul>

        </Nav>

        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">{props.data.name}</h1>
                <h3>
                    {props.data.description}
                </h3>
                <hr/>
                <ul className="social">
                    {<Redes data={props.data}/>}
                </ul>
            </div>
        </div>

        <p className="scrolldown">
            <a className="smoothscroll" href={"#about"}>
                <i className="icon-down-circle"/>
            </a>
        </p>

    </header>;
};

export default Header;