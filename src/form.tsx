import React, {useState} from "react";

// interface RegistrationFormProps{
//     onSubmit: (username: string, password: string) => void;
// }




function RegistrationInputForm() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleUserName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <form>
                <h2> Please enter your username.</h2>
                <input onChange={handleUserName} type="text" value={userName}/>
                <h2> Please enter your password.</h2>
                <h5>Minimum 8 symbols, at least one uppercase and one special symbol.</h5>
                <input onChange={handlePassword} type="password" value={password}/>
            <button type="submit">Register</button>

            
        </form>
    )
    
}

export default RegistrationInputForm;