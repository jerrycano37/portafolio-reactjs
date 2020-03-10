import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const About = (props) => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic"
                         src={"images/" + props.data.image}
                         alt="Roberto Casanova Foto"/>
                </div>
                <div className="nine columns main-col">
                    <h2>Sobre Mi</h2>

                    <p>{props.data["bio"]}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Detalles De Contacto</h2>
                            <p className="address">
                                <span>{props.data.name}</span><br/>
                                <span>{props.data.address["street"]}
                                    <br/>
                                    {props.data.address["city"]} /
                                    {props.data.address["state"]}
                                </span>
                                <br/>
                                <span>{props.data.phone}</span><br/>
                                <span>{props.data.email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={props.data["resumedownload"]} className="button">
                                    <FontAwesomeIcon icon={['fas', 'download']}/>
                                    Descargar Resumen
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;