import React, {Fragment, useEffect, useState} from "react";
import Header from './Components/Header';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contacto from "./Components/Contacto";

const App = () => {

    const [resumeDatos, setResumeDatos] = useState({});

    useEffect(() => {
        fetch('/resumeData.json')
            .then(response => response.json())
            .then(data => setResumeDatos(data));
    }, []);

    // if (Object.keys(resumeDatos).length > 0) {
    //     return (
    //         <Header data={resumeDatos}/>
    //     );
    // } else {
    //     return null
    // }

    if (resumeDatos.main !== undefined) {
        return (
            <Fragment>
            <Header data={resumeDatos.main}/>
            <About data={resumeDatos.main}/>
            <Contacto data={resumeDatos.main}/>
            <Footer data={resumeDatos.main}/>
            </Fragment>
        );
    } else {
        return null
    }
};

export default App;