import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Redes = (props) => {
    return (
        props.data["social"].map(redes =>
            <li key={redes.name}>
                <a href={redes.url}>
                    <FontAwesomeIcon icon={['fab', redes.className]}/>
                    <i className={""}/>
                </a>
            </li>)
    );
};

export default Redes;