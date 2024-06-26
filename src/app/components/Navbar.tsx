import React from 'react'
import Link from 'next/link'



export const Navbar = () => {
  return (
    <nav className='text-xs text-cyan-500 font-semibold mx-3 my-3 flex flex-1 px-6 py-2 justify-around shadow-xl bg-gray-700 rounded-full hover:font-bold '>
      <div >  <Link href="/">Home</Link>
      </div>
      <div ><Link href="/skills">Skills</Link>
      </div>
      <div > <Link href="/work">Projects</Link>
      </div>
    </nav>
  )
}
export default Navbar