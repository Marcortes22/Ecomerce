
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'

function Navbar() {
  // nav is starting off false
  const [nav, setNav] = useState(false)
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav)

  return (
    <nav className='flex justify-between p-5 items-center border-b bg-[#e7e7e7d1] nav'>
      <h1 className='text-4xl logo'>HOMELY</h1>
      <ul className='hidden  md:flex gap-6'>
        <Link to='/clothes'><li>Clothes</li></Link>
        <Link to='/electronics'><li>Electronics</li></Link>
        <Link to='/fornitures'><li>Forniture</li></Link>
        <Link to='/shoes'><li>Shoes</li></Link>
        <Link to='/locations'><li>Locations</li></Link>
        <Link to='/contact'><li>Contact Us</li></Link>
      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to='/clothes'><li className='hover:text-teal-700'>Clothes</li></Link>
        <Link to='/electronics'><li className='hover:text-teal-700'>Features</li></Link>
        <Link to='/fornitures'><li className='hover:text-teal-700'>Fornitures</li></Link>
        <Link to='/shoes'><li className='hover:text-teal-700'>Shoes</li></Link>
        <Link to='/locations'><li className='hover:text-teal-700'>Locations</li></Link>
        <Link to='/contact'><li className='hover:text-teal-700'>Contact Us</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar