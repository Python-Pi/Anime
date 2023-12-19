import React from "react";
import {
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


import Main from "./pages/main";
import Demon from "./pages/demonSlayer";
import Kimi from "./pages/kimi";
import Suzume from "./pages/suzume";
import Tenki from "./pages/tenkiNoKo";
import Horimiya from "./pages/horimiya";
import JujutsuK from "./pages/jujutsu";
import Aot from "./pages/aot";
import Naruto from "./pages/naruto";

function App(){
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main />} />
                <Route path='/demon-slayer/' element={<Demon />} />
                <Route path='/your-name/' element={<Kimi />} />
                <Route path='/suzume/' element={<Suzume />} />
                <Route path='/tenki/' element={<Tenki />} />
                <Route path='/horimiya/' element={<Horimiya />} />
                <Route path='/jujutsu/' element={<JujutsuK />} />
                <Route path='/aot/' element={<Aot />} />
                <Route path='/naruto/' element={<Naruto />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;