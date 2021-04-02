import React from 'react';
import './MoreInfoMobile.scss';
import iconCheck from '../../images/icon-check.svg';

function MoreInfoMobile() {
    return (
        <div id="moreInfoMobileContainer">
            <ul id="featuresMobile">
                <li>
                    <img src={iconCheck} alt="check"/>
                    Unlimited websites
                </li>
                <li>
                    <img src={iconCheck} alt="check"/>
                    100% data ownership
                </li>
                <li>
                    <img src={iconCheck} alt="check"/>
                    Email reports
                </li>
            </ul>
            <div id="trialMobile">
                <button>Start my trial</button>
            </div>
        </div>
    )
}

export default MoreInfoMobile;