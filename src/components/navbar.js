import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-20">
        <ul>
            <li>
            <span class="block bg-red-600 w-6 h-6"></span> Projects
            </li>
            <li>
            <span class="block bg-yellow-300 w-6 h-6"></span> About
            </li>
            <li>
                <img src='/assets/icons/contact.png' alt=''/>
            </li>
        </ul>
    </div>
    
  )
}

export default Navbar
