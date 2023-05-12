import React from 'react'
import '@/css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="w-full h-20 custom-nav">
        <ul className='flex custom-nav-ul'>
            <li className='flex custom-nav-li custom-projects' title='See my projects'>
            <span className="block w-5 h-3"></span> Projects
            </li>
            <li className='flex custom-nav-li custom-about' title='About Me'>
            <span className="block w-5 h-3"></span> About
            </li>
            <li className='flex custom-nav-li custom-blog' title='Checkout My Blog'>
            <span className="block w-5 h-3"></span> Blog
            </li>
            <li className='flex w-5 custom-contact' title='Contact'>
                <img src='/assets/icons/contact.png' alt=''/>
            </li>
        </ul>
    </nav>
    
  )
}

export default Navbar
