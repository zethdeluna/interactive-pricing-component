import React from 'react';
import './MoreInfo.scss';
import iconCheck from '../../images/icon-check.svg';

function MoreInfo() {
    return (
        <div id="moreInfoContainer">
            <ul id="features">
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
            <div id="freeTrial">
                <button>Start my trial</button>
            </div>
        </div>
    )
}

export default MoreInfo;