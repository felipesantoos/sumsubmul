import React, { useState } from 'react';
import Button from '../components/Button';

import '../styles/pages/HomePage.css';

function HomePage() {

    const [number, setNumber] = useState(0);

    function sum() {
        setNumber(number + 1);
    }

    function sub() {
        setNumber(number - 1);
    }

    function mult() {
        setNumber(number * 2);
    }

    return (
        <div id="home-page">
            <h1>Contador</h1>
            <span>{number}</span>
            <div className="action-btns">
                <Button 
                    text="Somar 1" 
                    backgroundColor="green"
                    onClick={sum} 
                />
                <Button 
                    text="Subtrair 1" 
                    backgroundColor="red"
                    onClick={sub} 
                />
                <Button 
                    text="Multiplicar por 2" 
                    backgroundColor="blue"
                    onClick={mult} 
                />
            </div>
        </div>
    );
}

export default HomePage;
