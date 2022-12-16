import React from 'react'

import Link from 'next/link'

import Logo from 'images/logo.svg'

export default function Header() {
  return (
        <header className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <div className='w-28'>
              <Logo className="logo-style-1"/>
            </div>
            <div className='w-auto'>
              <ul className='flex items-center'>
                <li className=''>
                  <Link href="/destinations">
                    <div className='px-9 text-gray-800'>Destinations</div>
                  </Link>
                </li>
                <li className=''>
                  <Link href="/hotels">
                    <div className='px-9 text-gray-800'>Hotels</div>
                  </Link>
                </li>
                <li className=''>
                  <Link href="/flights">
                    <div className='px-9 text-gray-800'>Flights</div>
                  </Link>
                </li>
                <li className=''>
                  <Link href="/bookings">
                    <div className='px-9 text-gray-800'>Bookings</div>
                  </Link>
                </li>
                <li className=''>
                  <Link href="/login">
                    <div className='px-9 text-gray-800'>Login</div>
                  </Link>
                </li>
                <li className=''>
                  <Link href="/Signup">
                    <div className='px-5 text-gray-800 py-1 border border-gray-800 rounded-md mx-3'>Sign Up</div>
                  </Link>
                </li>
                <li className=''>
                  <button className='px-9 text-gray-800'>
                    EN
                    <span className='absolute w-2 h-2 border-gray-800 border-b border-r transorn rotate-45 translate-y-1/2 ml-2'></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>
  )
}
