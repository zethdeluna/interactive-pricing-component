import React from 'react';
import './Mobile.scss';
import PricingMobile from './PricingMobile'

function Mobile() {
    return (
        <div id="mobileContainer">
            <div id="headerMobile">
                <h1>Simple, traffic-based pricing</h1>
                <p>
                    Sign-up for our 30-day trial.<br/>
                    No creditcard required.
                </p>
            </div>
            <PricingMobile/>
        </div>
    )
}

export default Mobile;