import React from 'react';
import './Sec1.css'; // Ensure you import the CSS file for styles

const Sec1 = () => {
    return (
        <section className="sec1">
            <div className="sec1-bg"></div>
            <div className="sec1-container">
                <div className="left-sec1">
                    <h2>CONNECTING FARMERS</h2>
                    <h1>DIRECTLY TO <br /> MARKET</h1>
                    <h3>EMPOWERING GROWTH, ONE HARVEST AT A TIME</h3>
                    <button className="left-sec1-button">DISCOVER MORE</button>
                </div>
                <div className="right-sec1">
                    <button className="right-sec1-button">GET IN TOUCH</button>
                </div>
            </div>
        </section>
    );
}

export default Sec1;
