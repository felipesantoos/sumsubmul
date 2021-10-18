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

    function mul() {
        setNumber(number * 2);
    }

    return (
        <div id="home-page">
            <h1>Contador</h1>
            <span>{number}</span>
            <div className="action-btns">
                <Button backgroundColor="green" onClick={sum}>
                    Somar 1
                </Button>
                <Button backgroundColor="red" onClick={sub}>
                    Subtrair 1
                </Button>
                <Button backgroundColor="blue" onClick={mul}>
                    Multiplicar por 2
                </Button>
            </div>
        </div>
    );
}

export default HomePage;
