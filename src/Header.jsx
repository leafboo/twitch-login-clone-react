import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='title'>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitch-icon-purple.png" alt="Twitch logo." className='twitch-logo' />
                <span>Log in to Twitch</span>
            </div>
            <div className='login-container'>
                <span className='login'>Log In</span>
                <span className='signup'>Sign up</span>
                <hr />
            </div>
        </div>
    )
}