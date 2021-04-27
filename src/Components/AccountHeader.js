import React, { Component } from 'react'

export default class AccountHeader extends Component {
  render() {
    return (
      <div className='h-full flex items-center justify-between font-mont 2xl:px-10 lg:px-5 px-2'>
        <button className='focus:outline-none bg-blue-600 text-yellow-300 px-4 py-2 rounded-full font-extrabold'>
          connect wallet
        </button>
        <div className='flex items-center text-white font-mont'>
          <span className='mr-2 font-extrabold'>Mat Lirman</span>
          <span className='w-10 h-10 rounded-full bg-green-300 mr-2'></span>
          <span className='w-5 h-5 text-gray-200'>
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 23.25 23.25'>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_2-2' data-name='Layer 2'>
                  <rect fill='current' x='6.02' y='12.03' width='11.22' height='1.59' />
                  <rect fill='current' x='6.02' y='6.42' width='11.22' height='1.59' />
                  <path
                    fill='current'
                    d='M2,23.25a2,2,0,0,1-2-2V3.6A3.61,3.61,0,0,1,3.6,0H17.8a4.73,4.73,0,0,0-.15,1.59H3.6a2,2,0,0,0-2,2V21.25l.7.29,3.09-3.09H19.65a2,2,0,0,0,2-2V5.6l.39,0a4.4,4.4,0,0,0,1.2-.17v11a3.6,3.6,0,0,1-3.6,3.6H6.21l-.29.12L3.41,22.67A2,2,0,0,1,2,23.25Z'
                  />
                  <path
                    fill='current'
                    d='M22.06,2.39A1.2,1.2,0,1,1,23.25,1.2,1.19,1.19,0,0,1,22.06,2.39Z'
                  />
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>
    )
  }
}
