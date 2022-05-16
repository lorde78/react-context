import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Component/Form";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Component/Navbar";
import MovieList from "./Component/MovieList";
import {MovieContext} from "./Context/ContextList";

export default function App() {
    const [state,setState] = useState<any>([]);

    return (
    <BrowserRouter>

        <MovieContext.Provider value={[state,setState]}>
            <Navbar />

            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<MovieList/>}/>
                    <Route path="/add-movie/" element={<Form/>}/>
                </Routes>
            </div>
        </MovieContext.Provider>
    </BrowserRouter>
    );
}