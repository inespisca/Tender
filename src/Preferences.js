import React from 'react'; 
import { Radio } from 'semantic-ui-react';
import './Settings.css';
import './Preferences.css';

const Preferences = ({settings, onChange}) => (
        <>
        <div className="first-setting">
            Female: <span><Radio toggle checked={settings.female} onChange={() => onChange('female')}/></span>
        </div>
        <div className="setting">
            Male: <span><Radio toggle checked={settings.male} onChange={() => onChange('male')}/></span>
        </div>
        </>
); 
export default Preferences; 