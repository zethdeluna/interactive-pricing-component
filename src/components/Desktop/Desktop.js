import React from 'react';
import './Desktop.scss';
import PricingComponent from './PricingComponent';

function Desktop() {
    return (
        <div id="desktopContainer">
            <div id="header">
                <h1>Simple, traffic-based pricing</h1>
                <p>Sign-up for our 30-day trial. No credit card required.</p>
            </div>
            <PricingComponent/>
        </div>
    )
}

export default Desktop;