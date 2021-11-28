import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import {Content} from "./components/Content/content";
import {Footer} from "./components/Footer/footer";
import {Header} from "./components/Header/header";
import {Sidebar} from "./components/Sidebar/sidebar";
import Intro from "./components/intro/intro";

const App = props => {
    return (
        <>
            <CssBaseline/>
            <div className="App">
                <Intro/>
                {/*<Header state={props.state}/>*/}
                {/*<Content state={props.state}/>*/}
                {/*<Sidebar state={props.state}/>*/}
                {/*<Footer state={props.state}/>*/}
            </div>
        </>
    );
}

export default App;