import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='header'>
        <a href="https://www.atomy.com/ph/Home/Product/ProductList?LClass=04"><img src={require("./imgs/bg.png")} alt="" /></a>
        <h1>Watch Our Videos</h1>
        <p>You can have more information by watching the videos regarding ATOMY ONLINE SHOPPING MALL</p>
        <a href='https://www.atomy.com/ph/Home/Product/MallMain' className='mallButton button'><FontAwesomeIcon icon={faCartShopping} /> Atomy Shopping Mall</a>
    </div>
  )
}

export default Header