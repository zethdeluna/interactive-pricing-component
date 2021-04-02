import React, { useState, useRef, useEffect } from 'react';
import './PricingComponent.scss';
import MoreInfo from './MoreInfo';

function PricingComponent() {
    // handle slider states
    const packageOptions = ["10K", "50K", "100K", "500K", "1M"];
    const monthlyPrices = [8, 12, 16, 24, 36];
    const yearlyPrices = [72, 108, 144, 216, 324];

    const [option, setOption] = useState(2);

    const handleChange = (e) => {
        setOption(e.target.value);
    }

    // slider progress handler for webkit browsers
    const progressRef = useRef();
    useEffect(() => {
        const val = option / 4;
        const pixels = val * 405;

        progressRef.current.style.width = `${pixels}px`;
    });
    
    // monthly vs yearly payment toggle
    const [monthly, setMonthly] = useState(false);
    const [prices, setPrices] = useState(monthlyPrices);
    const [billing, setBilling] = useState("/ month")
    const handleToggle = (e) => {
        setMonthly(!monthly);
        if (monthly === false) {
            setPrices(yearlyPrices);
            setBilling("/ year");
        } else if (monthly === true) {
            setPrices(monthlyPrices);
            setBilling("/ month");
        }
    };

    return (
        <div id="pricingContainer">
            <div id="info">
                <div id="option">
                    <span>{packageOptions[option]} pageviews</span>
                </div>
                <div id="price"><span>${prices[option]}.00</span> &nbsp; {billing}</div>
            </div>
            <div id="sliderContainer">
                <input onChange={handleChange} type="range" min="0" max="4" value={option} className="slider"/>
                <span ref={progressRef} className="progress"></span>
            </div>
            <div id="paymentToggle">
                Monthly Billing
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="roundSwitch" onClick={handleToggle}></span>
                </label>
                Yearly Billing
                <div id="discountLabel">
                    25% discount
                </div>
            </div>
            <MoreInfo/>
        </div>
    )
}

export default PricingComponent;