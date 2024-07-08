import React, { useState } from 'react'
 import "./Navbar.css"
import { assets } from '../../assets/assets'
const Navbar = () => {
  const [menu, setmenu] = useState("home")
  return (
    <>
        <div className='navbar'>
            <img src={assets.logo} alt='logoimg' className='logo'/>
            <ul className='navbar-list'>
              <li onClick={()=>setmenu("home")} className={menu==="home" ? "active" : ""}>home</li>
              <li onClick={()=>setmenu("menu")} className={menu==="menu" ? "active" : ""}>menu</li>
              <li onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>mobileapp</li>
              <li onClick={()=>setmenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>contact us</li>
            </ul>
            <div className='navbar-right'>
              <img src={assets.search_icon} alt="icon" />
              <div className='navbar-search-icon'>
                   <img src={assets.basket_icon} alt=''/>
                   <div className='dot'></div>
              </div>
              <button>
                signin
              </button>
            </div>
        </div>
    </>
  )
}

export default Navbar