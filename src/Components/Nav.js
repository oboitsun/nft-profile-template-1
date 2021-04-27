import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div className='flex text-white font-semibold  justify-between items-center '>
        <div className='logo ml-2 lg:ml-5 2xl:ml-10 mr-5 2xl:mr-10'>LOGO</div>
        <div className='flex justify-between items-center w-full bg-gradient-to-l from-lghtbl to-transparent py-3 2xl:px-10 lg:px-5 px-2'>
          <button className='px-2'>Explore</button>
          <button className='px-2'>Active Bids</button>
          <div className='relative'>
            <div className='absolute transform top-1/2 -translate-y-1/2 left-4'>
              <svg
                className='w-5 h-5 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 28.01 28.03'>
                <g id='Layer_2' dataname='Layer 2'>
                  <g id='Layer_2-2' dataname='Layer 2'>
                    <path
                      fill='current'
                      d='M27.73,26.31,19.47,18A11,11,0,1,0,18,19.47l8.26,8.26a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41ZM2,11a9,9,0,1,1,15.62,6.07,1,1,0,0,0-.55.55A9,9,0,0,1,2,11Z'
                    />
                  </g>
                </g>
              </svg>
            </div>
            <input
              className='rounded-full bg-gray-900 pl-12 py-2 h-8  w-full  lg:w-64 focus:outline-none'
              placeholder='Search...'
              type='text'
            />
          </div>
        </div>
      </div>
    )
  }
}
