import React, { useState, useRef, useEffect } from 'react';
import './PricingMobile.scss';
import MoreInfoMobile from './MoreInfoMobile';

function PricingMobile() {
    // range slider states
    const packageOptions = ["10K", "50K", "100K", "500K", "1M"];
    const monthlyPrices = [ 8, 12, 16, 24, 36];
    const yearlyPrices = [72, 108, 144, 216, 324];
    const [option, setOption] = useState(2);
    const handleChange = (e) => {
        setOption(e.target.value);
    }

    // slider progress for webkit browsers
    const progMobRef = useRef();
    useEffect(() => {
        const val = option / 4;
        const pixels = val * 245;

        progMobRef.current.style.width = `${pixels}px`;
    });

    // monthyl vs yearly payment toggle
    const [monthly, setMonthly] = useState(false);
    const [prices, setPrices] = useState(monthlyPrices);
    const [billing, setBilling] = useState("/ month");
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
        <div id="pricingMobileContainer">
            <div id="infoMobile">
                <div id="optionMobile">
                    <span>{packageOptions[option]} pageviews</span>
                </div>
                <div id="sliderMobileContainer">
                    <input onChange={handleChange} type="range" min="0" max="4" value={option} className="sliderMobile"/>
                    <span ref={progMobRef} className="progressMobile"></span>
                </div>
                <div id="priceMobile"><span>${prices[option]}.00</span> &nbsp; {billing}</div>
            </div>
            <div id="paymentToggleMobile">
                Monthly Billing
                <label className="switchMobile">
                    <input type="checkbox"/>
                    <span className="roundSwitchMobile" onClick={handleToggle}></span>
                </label>
                Yearly Billing
                <div id="discountLabelMobile">
                    -25%
                </div>
            </div>
            <MoreInfoMobile/>
        </div>
    )
}

export default PricingMobile;