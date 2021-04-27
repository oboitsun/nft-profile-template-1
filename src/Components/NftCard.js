import React, { Component } from 'react'
import Favorites from './Favorites'

export default class NftCard extends Component {
  render() {
    return (
      <div className='w-full h-full flex flex-col bg-white rounded-xl px-3 py-4 font-barlow'>
        <div className='w-full h-1/12 py-1 flex items-center justify-end'>
          <Favorites />
        </div>
        <div className='bg-gray-500 rounded-2xl h-full w-full'></div>
        <div className='flex w-full h-1/4 items-center justify-between pt-1'>
          <div className='flex flex-col mr-auto'>
            <span className='font-light text-base'>@oliveallen</span>
            <span className='text-sm'>AfterBurn</span>
          </div>
          <div className='flex flex-col  flex-wrap items-end'>
            <span className='uppercase  text-xs'>Price</span>
            <div className='flex items-center'>
              <svg
                className='w-3 h-3 fill-current mr-1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 7 9.04'>
                <g id='Layer_2' data-name='Layer 2'>
                  <g id='Layer_1-2' data-name='Layer 1'>
                    <rect width='7' height='1.4' />
                    <rect y='7.64' width='7' height='1.4' />
                    <rect x='0.64' y='3.82' width='5.73' height='1.4' />
                  </g>
                </g>
              </svg>
              <span className='font-semibold text-sm'>0.63</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
