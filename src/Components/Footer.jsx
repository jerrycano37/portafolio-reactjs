import React from 'react';
import Redes from "./Redes";

const Footer = (props) => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {<Redes data={props.data}/>}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2020 Roberto Casanova</li>
                    </ul>

                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;