import React from 'react'; 
import './Settings.css';
import { Radio } from 'semantic-ui-react';

const Settings = ({ settings, onChange, smoker }) => {
    return (
        <div>
            <h1> Settings </h1>
            <div>
                Smoker: <span><Radio toggleChecked={settings.smoker} onChange={onChange} name={smoker ? 'yes' : 'no' }
                    /></span>
            </div>
        </div>  
    )
}
//all radio toggle settings must be done right next each other in order to work

export default Settings; 