import React, { useEffect } from 'react';
import './Hero.css';

const TextType = (elementId, text, speed) => {
    const element = document.getElementById(elementId);
    if (element) {
        let index = 0;
        const type = () => {
            if (index < text.length) {
                element.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(type, speed);
            }
        };
        type();
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
};

const Hero = ({ HeroData }) => {
    useEffect(() => {
        if (HeroData.toptext) {
            setTimeout(() => {
                TextType("toptext-container", HeroData.toptext, 150);
            }, 1000);
        }
        if (HeroData.bottomtext) {
            setTimeout(() => {
                TextType("bottomtext-container", HeroData.bottomtext, 100);
            }, 1800);
        }
    },[HeroData]); 

    return (
        <div className="hero">
            <div id="toptext-container" className="hero-text" />
            <div id="bottomtext-container" className="hero-text" />
        </div>
    );
};

export default Hero;