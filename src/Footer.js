import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <h3>Join us now by clicking the <span>"JOIN"</span> button or send me a message for your assistance</h3>
        <a href="https://formaloo.net/fkok2" className='joinButton button'>JOIN</a>
        <a href="https://www.messenger.com/t/100001646731426/" className='messageButton button'><FontAwesomeIcon className='msgr' icon={faFacebookMessenger} />Send a Message</a>
    </div>
  )
}

export default Footer