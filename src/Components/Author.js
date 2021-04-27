import React, { Component } from 'react'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class Author extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(
      state.authorSection.pattern,
      state.authorSection.patternColor
    )
    return (
      <div
        style={{
          backgroundColor: state.authorSection.bckColor,
          // border: `${state.authorSection.borderWidth}px solid ${state.authorSection.borderColor}`,
        }}
        onClick={() => {
          showEditor('authorSection')
        }}
        className='w-full h-full flex items-center text-lg relative z-20 text-barlow p-8'>
        {editMode && (
          <div className={`edit absolute top-0 left-0  w-full h-full ${hover} z-30`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full  z-10`}></div>
        <span className='w-24 h-24 rounded-full bg-blue-300 mr-1 xl:mr-5 2xl:mr-8 z-10'></span>
        <div className='flex flex-col z-10'>
          <span className='text-base'>#0x8c5dfaacc64a2...53eb</span>
          <span className='font-semibold 2xl:text-5xl'>Olive Allen</span>
          <span className='m text-3xl font-light'>@oliveallen </span>
        </div>
      </div>
    )
  }
}
