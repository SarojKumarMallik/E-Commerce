import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='LoginSignup'>
            <div className="LoginSignup-container">
                <h1>Sign Up</h1>
                <div className="LoginSignup-Fields">
                    <input type="Text" placeholder='Your Name' />
                    <input type="Email" placeholder='Your Email' />
                    <input type="Password" placeholder='Password' />
                </div>

                <div className="LoginSignup-Container">
                    <button>Continue</button>
                </div>
                <p className='LogiinSignupLogin'>Already have an account ? <span>Login here</span></p>

                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing , i agree to the term of use & Privacy ppolicy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
