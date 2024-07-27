import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

const App = () => {
    const [HeroCount, SetHeroCount] = useState(1);

    const HeroData = [
        { toptext: "Cyber", bottomtext: "Security" },
        { toptext: "This Website Is", bottomtext: "Currently Under Development" }
    ]

    return (
        <div>
            <Router>
                <Navbar />
                <Routes basename={process.env.PUBLIC_URL}>
                    <Route path="/" exact component={Home} />
                    <Route path="/about-me" component={AboutMe} />
                    <Route path="/education" component={Education} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </Router>
            <Background />
            <Hero
                HeroData={HeroData[HeroCount]}
                SetHeroCount={SetHeroCount}
                HeroCount={HeroCount}
            />
        </div>
    )
};

export default App