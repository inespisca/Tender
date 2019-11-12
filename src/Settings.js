import React from 'react'; 
import './Settings.css';
import Preferences from './Preferences'
import { Radio } from 'semantic-ui-react';

const Settings = ({ settings, onChange }) => {
    return (
        <div className="settings-container">
            <h1> Settings </h1>
            <Preferences settings={settings} onChange={onChange}/>

            <div>
                Smoker: <span><Radio toggle checked={settings.smoker} onChange={() => onChange('smoker')}/></span>
            </div>
            <div>
                Vegetarian: <span><Radio toggle checked={settings.vegetarian} onChange={() => onChange('vegetarian')}/></span>
            </div>
            <div>
                Single: <span><Radio toggle checked={settings.single} onChange={() => onChange('single')}/></span>
            </div>
        </div> 
    )
}
//These settings are connected to the state in the App through the string at the end of each one. Ex: Smoker is connected to "smoker: false," in the App
//thanks to the 'smoker' in "onChange('smoker')}". This means that if you switch the string text to 'Smoker' (with capital "S"), the radio toggle will
//stop working.

export default Settings; 