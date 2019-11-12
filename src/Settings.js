import React from 'react'; 
import './Settings.css';
import { Radio } from 'semantic-ui-react';

const Settings = ({ settings, onChange }) => {
    return (
        <div className="settings">
            <h1> Settings </h1>
            <div className="settings-border"></div>
            <div className="smoker">
                Would you like to find some hot smokers?<span><Radio toggle checked={settings.smoker} onChange={() => onChange('smoker')}/></span>
            </div>
            <div className="settings-border"></div>
            <div className="vegetarian">
                Would you like a vegetarian to eat vegetarian food with you? <span><Radio toggle checked={settings.vegetarian} onChange={() => onChange('vegetarian')}/></span>
            </div>
            <div className="settings-border"></div>
            <div className="single">
                Would you like someone single so you don't ruin a marriage? <span><Radio toggle checked={settings.single} onChange={() => onChange('single')}/></span>
            </div>
        </div> 
    )
}
//These settings are connected to the state in the App through the string at the end of each one. Ex: Smoker is connected to "smoker: false," in the App
//thanks to the 'smoker' in "onChange('smoker')}". This means that if you switch the string text to 'Smoker' (with capital "S"), the radio toggle will
//stop working.

export default Settings; 