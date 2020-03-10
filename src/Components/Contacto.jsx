import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contacto = (props) => {
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Ponerse En Contacto.</span></h1>
                </div>
                <div className="ten columns">
                    <p className="lead">{props.data["contactmessage"]}</p>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">

                    <Form action="" method="post" id="contactForm" name="contactForm">
                        <FormGroup>

                            <div>
                                <Label htmlFor="contactName">Nombre
                                    <span className="required">*</span>
                                </Label>

                                <Input type="text"
                                       defaultValue=""
                                       size="35"
                                       id="contactName"
                                       name="contactName"/>
                            </div>

                            <div>
                                <Label htmlFor="contactEmail">Correo
                                    <span className="required">*</span>
                                </Label>

                                <Input type="text"
                                       defaultValue=""
                                       size="35"
                                       id="contactEmail"
                                       name="contactEmail"/>
                            </div>

                            <div>
                                <Label htmlFor="contactSubject">Asunto</Label>

                                <Input type="text"
                                       defaultValue=""
                                       size="35"
                                       id="contactSubject"
                                       name="contactSubject"/>
                            </div>

                            <div>
                                <Label htmlFor="contactMessage">Mensaje
                                    <span className="required">*</span>
                                </Label>

                                <Input type="textarea"
                                       cols="50"
                                       rows="15"
                                       id="contactMessage"
                                       name="contactMessage">
                                </Input>
                            </div>

                            <div>
                                <Button className="submit">Enviar</Button>

                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif"/>
                                </span>
                            </div>

                        </FormGroup>
                    </Form>

                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                        <i><FontAwesomeIcon icon={['fas', 'check']}/></i>
                        Your message was sent, thank you!
                        <br/>
                    </div>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">

                        <h4>Direccion y Telefono</h4>

                        <p className="address">
                            {props.data.name}<br/>
                            {props.data.address["street"]}
                            <br/>
                            {props.data.address.city},
                            {props.data.address.state}
                            {props.data.address["zip"]}
                            <br/>
                            <span>{props.data.address.phone}</span>
                        </p>
                    </div>

                    {/*<div className="widget widget_tweets">*/}
                    {/*    <h4 className="widget-title">Latest Tweets</h4>*/}
                    {/*    <ul id="twitter">*/}
                    {/*        <li>*/}
                    {/*    <span>*/}
                    {/*    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.*/}
                    {/*    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum*/}
                    {/*    <a href="#">http://t.co/CGIrdxIlI3</a>*/}
                    {/*    </span>*/}
                    {/*            <b><a href="#">2 Days Ago</a></b>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*    <span>*/}
                    {/*    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,*/}
                    {/*    eaque ipsa quae ab illo inventore veritatis et quasi*/}
                    {/*    <a href="#">http://t.co/CGIrdxIlI3</a>*/}
                    {/*    </span>*/}
                    {/*            <b><a href="#">3 Days Ago</a></b>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </aside>
            </div>
        </section>
    );
};

export default Contacto;