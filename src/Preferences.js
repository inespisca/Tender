import React from 'react'; 
import './Preferences.css';
import './Settings.css';
import { Radio } from 'semantic-ui-react';

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