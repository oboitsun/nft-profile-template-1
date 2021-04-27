import React, { Component } from 'react'
import Author from './Author'
import BioSection from './BioSection'
import FollowersSection from './FollowersSection'

export default class MainSection extends Component {
  render() {
    return (
      <div
        className={` w-full h-full  flex flex-col justify-between relative z-10  overflow-hidden `}>
        <div className=''>
          <Author />
        </div>
        <div className=''>
          <FollowersSection />
        </div>

        <BioSection />
      </div>
    )
  }
}
