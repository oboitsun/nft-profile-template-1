import React, { Component } from 'react'
import Author from './Author'
import BioSection from './BioSection'
import FollowersSection from './FollowersSection'
import ProfileContext from '../ProfileContext'
export default class MainSection extends Component {
  static contextType = ProfileContext
  render() {
    const { state } = this.context
    return (
      <div
        style={{
          border: `${state.authorSection.borderWidth}px solid ${state.authorSection.borderColor}`,
        }}
        className={` w-full h-full  flex flex-col justify-between relative z-10 rounded-2xl overflow-hidden `}>
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
