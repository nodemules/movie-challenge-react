import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {ApiContextProvider} from "./ApiContext";
import ApiKeySettings from "./ApiKeySettings";
import MovieSearch from "./MovieSearch";


const App = () =>
    <div style={{paddingTop: 10}}>
        <Container>
            <h1>Movie Challenge</h1>
            <ApiContextProvider>
                <ApiKeySettings/>
                <>
                    <h2>Search for movies</h2>
                    <MovieSearch/>
                </>
            </ApiContextProvider>
        </Container>
    </div>

export default App;
