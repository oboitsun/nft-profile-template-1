import React, { Component } from 'react'
import Like from './Icons/Like'
import Star from './Icons/Star'

export default class Favorites extends Component {
  render() {
    return (
      <div className='flex items-center justify-center'>
        <span className='w-5 h-5  mr-1 fill-current'>
          <Like />
        </span>
        <span className='text-xl leading-none'>40</span>
      </div>
    )
  }
}
