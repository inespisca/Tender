import React from 'react'; 
import './Preferences.css';
import './Settings.css';
import { Radio } from 'semantic-ui-react';

const Preferences = ({settings, onChange}) => (
    <div>
        <div>
            Female: <span><Radio toggle checked={settings.female} onChange={() => onChange('female')}/></span>
        </div>
        <div>
            Male: <span><Radio toggle checked={settings.male} onChange={() => onChange('male')}/></span>
        </div>

    </div>
); 
export default Preferences; 