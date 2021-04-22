import React from "react";
import "./App.css";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { AppContainer } from "../styles/GlobalStyles";

function App() {
    return (
        <>
            <Header />
            <AppContainer>
                <Main />
            </AppContainer>
        </>
    );
}

export default App;
