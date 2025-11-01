import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <nav className="py-12">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <a href="#"><img src="/logo.png" alt="" /></a>
          </div>
          <ul className="flex gap-14 text-2xl font-semibold fornt-popines text-black">
            <li><a href="#" className="hover:text-yellow-500">Men</a></li>
            <li><a href="" className="hover:text-yellow-500">Wemen</a></li>
            <li><a href="" className="hover:text-yellow-500">Kids</a></li>
            <li><a href="" className="hover:text-yellow-500">Collection</a></li>
            <li><a href="" className="hover:text-yellow-500">Trends</a></li>
          </ul>
          <div className="flex gap-2.5"> 
            <Button title="Login"/>
            <Button title="Sign up"/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
