import React from 'react';

const About = (props) => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={"images/" + props.data.image} alt="Tim Baker Profile Pic"/>
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
                                    {/*<span>{props.data.address["zip"]}</span>*/}
                                </span>
                                <br/>
                                <span>{props.data.phone}</span><br/>
                                <span>{props.data.email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={props.data["resumeDownload"]} className="button">
                                    <i className="fa fa-download"/>
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