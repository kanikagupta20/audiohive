import React, { useState } from 'react';
import Styles from './Register.module.css';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUserName from '../Steps/StepUserName/StepUserName';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUserName
}

const Register = () => {

    const [ step, setStep ] = useState(1);
    const Step = steps[step]

    const stepHandler = () => {
        setStep(step+1);
    }
    
    return (
        <div>
            <Step onClick={stepHandler}/>
        </div>
    )
}

export default Register
