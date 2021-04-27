import React, { Component } from 'react'

export default class FollowedBy extends Component {
  render() {
    return (
      <div className='font-barlow flex flex-col pt-8 z-10'>
        <span className='uppercase font-semibold text-xl mb-2'>Followed by</span>
        <div className='flex z-10'>
          <div className='w-10 h-10 mr-1 bg-yellow-300 rounded-full'> </div>
          <div className='w-10 h-10 mr-1 bg-red-300 rounded-full'> </div>
          <div className='w-10 h-10 mr-1 bg-green-300 rounded-full'> </div>
          <div className='w-10 h-10 mr-1 bg-blue-300 rounded-full'> </div>
          <div className='w-10 h-10 mr-1 bg-gray-300 rounded-full'> </div>
          <button className='text-xl text-gray-400 focus:outline-none ml-2'>view all</button>
        </div>
      </div>
    )
  }
}
