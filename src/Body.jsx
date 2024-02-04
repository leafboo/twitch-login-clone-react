import React from 'react'

export default function Body() {
    return (
        <div>
            <div className='input-container'>
                <p>Username</p>
                <input type="text" className='username-input' />
            </div>
            <div className='input-container'>
                <p>Password</p>
                <input type="text" />
            </div>
            <div className='forgot-password-container'>
                <a href="">Trouble logging in?</a>
            </div>
            <div className='login-button-container'>
                <button>Log In</button>
            </div>
        </div>
       
    )
}