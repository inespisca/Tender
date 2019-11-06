import React from 'react'; 
import './Settings.css';
import { Radio } from 'semantic-ui-react';

const Settings = ({ settings, onChange }) => {
    return (
        <div>
            <h1> Settings </h1>
            <div>
                Smoker: <span><Radio toggle checked={settings.smoker} onChange={onChange} name="smoker"/></span>
            </div>
        </div>  
    )
}

export default Settings; 