import React, { Component } from 'react'
import FollowButton from './FollowButton'
export default class Followers extends Component {
  render() {
    return (
      <div className='flex items-end relative z-10'>
        <div className='w-full flex flex-col text-barlow'>
          <div className='flex flex-col mb-3'>
            <span className='text-4xl font-bold'>7</span>
            <span className='uppercase text-gray-400 font-semibold text-md'>following</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-4xl font-bold'>2227</span>
            <span className='uppercase text-gray-400 font-semibold text-md'>followers</span>
          </div>
        </div>

        <div className='w-full h-full relative z-30'>
          <FollowButton />
        </div>
      </div>
    )
  }
}
