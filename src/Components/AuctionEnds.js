import React, { Component } from 'react'

export default class AuctionEnds extends Component {
  render() {
    return (
      <div className='flex flex-col  text-lg uppercase items-start pl-1  2xl:pl-4'>
        <span className='font-semibold'>Auction ending in </span>
        <div className='flex'>
          <div className='mr-1 '>
            <p className='font-semibold text-3xl'>1</p>
            <p className='font-light  lowercase'>hours</p>
          </div>
          <div className='mr-1'>
            <p className='font-semibold text-3xl'>33</p>
            <p className='font-light  lowercase'>minutes</p>
          </div>
          <div>
            <p className='font-semibold text-3xl'>9</p>
            <p className='font-light lowercase'>seconds</p>
          </div>
        </div>
      </div>
    )
  }
}
