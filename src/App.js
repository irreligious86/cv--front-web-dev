import React from "react";
import { useContext } from "react";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";
import ProductList from "./components/ProductList/product-list";
import Toggle from "./components/Toggle/toggle";
import { ThemeContext } from "./context";

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            style={{
                backgroundColor: darkMode ? "#222" : "white",
                color: darkMode && "white",
            }}
        >
            <Toggle />
            <Intro />
            <About />
            <ProductList />
            <Contact />
        </div>
    );
};

export default App;