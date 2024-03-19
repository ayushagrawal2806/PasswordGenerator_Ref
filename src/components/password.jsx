import { useRef, useState } from 'react';
import './password.css'

let PasswordGenerator = () => {
    const [passwordValue , setPasswordValue] = useState("");
    // const [upperCase , setUpperCase] = useState(true);
    // const [lowerCase , setLowerCase] = useState(true);
    // const [numbers , setNumbers] = useState(true);
    // const [symbols , setSymbols] = useState(true);

    let passwordLength = useRef(8);
    let upperCase  = useRef(true)
    let lowerCase  = useRef(true)
    let numbers  = useRef(true)
    let symbols  = useRef(true)

    let generatePassword = () => {
        let finalpass = "";
        let str = "";
        const uppercase = "ABCDEFGHIJKLMNOPQRSWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "!@#$%^&*()_+-={}|;:'?><\\?/,.~`";
        (upperCase.current) ? str += uppercase : "";
        (lowerCase.current) ? str += lowercase : "";
        (numbers.current) ? str += number : "";
        (symbols.current) ? str += symbol : "";

        if(str == ""){
            alert("--All checks are empty--");
        }
        else if(passwordLength.current< 8 || passwordLength.current > 50 || passwordLength.current == ""){
            alert("Length out of mentioned range")
        }
        else{
            for(let i = 0;i<passwordLength.current;i++){
                let index =   Math.floor(Math.random() * str.length)
                finalpass += str[index];
            }
            
            setPasswordValue(finalpass);

        }
    }

    let copyToClipboard = () => {
        if(passwordValue == ""){
            alert("Generate Password First")
        }
        else{
            navigator.clipboard.writeText(passwordValue);
            alert("Password Copied");
        }
        
    }


    return (
        <div className="main">

            <h1>Password Generator</h1>

            <div className="display_copy">
                <input type="text" value={passwordValue} id="text"  disabled/>
                <button><img src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png" alt='copyimage' className='copy' onClick={copyToClipboard} /></button>
            </div>

            <div className="passwrodLength">
                <p>Select Password length<span className='dark'>(**8-50 characters**)</span></p>
                <input type="number"  defaultValue={passwordLength.current} onChange={(e) =>{
                    (e.target.value) ? passwordLength.current = e.target.value : passwordLength.current= ""
                }
                }/>
            </div>

            <div className="passwordCharacters">

                <div className="includeUpperCase common">
                    <input type="checkbox" ref={upperCase} id="upperCase" value={upperCase} defaultChecked onChange={() => {
                        upperCase.current = !upperCase.current
                        // console.log(upperCase.current);
                        // setPasswordValue("")
                    }}/>
                    <label htmlFor="upperCase">Include upper case</label>
                </div>

                <div className="includeLowerCase common">
                    <input type="checkbox" value={lowerCase.current} id="lowerCase" defaultChecked onChange={() => {
                       lowerCase.current = !lowerCase.current
                        // setPasswordValue("")
                    }}/>
                    <label htmlFor="lowerCase">Include lower case</label>
                </div>

                <div className="includeUpperCase common">
                    <input type="checkbox" value={numbers.current} id="numbers" defaultChecked onChange={() => {
                        numbers.current = !numbers.current;
                        // setPasswordValue("")
                    }}/>
                    <label htmlFor="numbers">Include numbers</label>
                </div>

                <div className="includeUpperCase common">
                    <input type="checkbox" value={symbols.current} id="symbols" defaultChecked onChange={() => {
                        symbols.current = !symbols.current;
                        // setPasswordValue("")
                    }}/>
                    <label htmlFor="symbols">Include symbols</label>
                </div>

            </div>

            <div className="generatePassword">
                <button onClick={() => generatePassword()}>Generate Password</button>
            </div>
        </div>

    )
}

export default PasswordGenerator;