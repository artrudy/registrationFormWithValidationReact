import React, { useState } from "react";
import Button from "./buton";



function RegistrationInputForm() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState('');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputUserName = e.target.value;
        if (inputUserName.toLocaleLowerCase() === 'admin') {
            setMessage('Username is alredy taken, please choose another one...')
        } else {
            setUserName(inputUserName);
        }
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,})/;

        if ((passwordRegex.test(password)) && userName) {
            setMessage(`User ${userName} successfully regitered.`)
            
        } else {
            setMessage("Password doesnt meet requirments.")
        }

        
        console.log('Submitting form with username:', userName, 'and password:', password);
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2> Please enter your username.</h2>
            <input onChange={handleUserName} type="text" value={userName} />
            <h2> Please enter your password.</h2>
            <h5>Minimum 8 symbols, at least one uppercase and one special symbol.</h5>
            <input onChange={handlePassword} type="password" value={password}/>
            <Button type="submit">Register</Button>

            {message && <h1>{message}</h1>}

            
        </form>
    )
    
}

export default RegistrationInputForm;