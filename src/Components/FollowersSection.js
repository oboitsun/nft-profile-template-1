import React, { Component } from 'react'
import FollowedBy from './FollowedBy'
import Followers from './Followers'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class FollowersSection extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(
      state.followersSection.pattern,
      state.followersSection.patternColor,
      135
    )
    return (
      <div
        style={{
          backgroundColor: state.followersSection.bckColor,
          // border: `${state.followersSection.borderWidth}px solid ${state.followersSection.borderColor}`,
        }}
        onClick={(event) => {
          if (event.target.classList[0] === 'follow') {
            showEditor('followersSection')
          }
        }}
        className='p-5 relative z-0'>
        {editMode && (
          <div className={`follow absolute top-0 left-0  w-full h-full ${hover}    z-10`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full   z-0`}></div>
        <Followers />
        <FollowedBy />
      </div>
    )
  }
}
