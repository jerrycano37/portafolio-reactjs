import React, {useEffect, useState} from "react";
import Header from './Components/Header';

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
            <Header data={resumeDatos.main}/>
        );
    } else {
        return null
    }
};

export default App;