import React, { Component } from 'react'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class FollowButton extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const categoryPattern = choosePattern(state.button.pattern, state.button.patternColor)
    return (
      <button
        style={{
          backgroundColor: state.button.bckColor,
          border: `${state.button.borderWidth}px solid ${state.button.borderColor}`,
        }}
        onClick={(event) => {
          if (event.target.classList[0] === 'button') {
            showEditor('button')
          }
        }}
        className={` uppercase font-semibold text-3xl  px-6 py-2 rounded-xl  relative z-20`}>
        {editMode && (
          <div
            className={`button absolute top-0 left-0 h-full w-full rounded-xl ${hover} z-20  `}></div>
        )}
        <div
          style={{ ...categoryPattern }}
          className={` absolute top-0 left-0 h-full w-full rounded-xl z-0`}></div>
        <span className='flex relative z-10'>FOLLOW</span>
      </button>
    )
  }
}
