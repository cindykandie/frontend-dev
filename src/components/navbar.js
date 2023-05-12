import React from 'react'
import '@/css/Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full h-20 custom-nav">
        <ul className='flex custom-nav-ul'>
        <Link href="/projects">
            <li className='flex custom-nav-li custom-projects' title='See my projects'>
               <span className="block w-5 h-3"></span> Projects
            </li>
        </Link>
        <Link href="/about">
              <li className='flex custom-nav-li custom-about' title='About Me'>
                <span className="block w-5 h-3"></span> About
              </li>
        </Link>
        <Link href="https://cindykandie.hashnode.dev" target='blank'>
              <li className='flex custom-nav-li custom-blog' title='Checkout My Blog'>
              <span className="block w-5 h-3"></span> Blog
              </li>
        </Link>
        <Link href="/about">
              <li className='flex w-5 custom-contact' title='Contact'>
                  <img src='/assets/icons/contact.png' alt=''/>
              </li>
        </Link>
            
            
            
            
        </ul>
    </nav>
    
  )
}

export default Navbar
