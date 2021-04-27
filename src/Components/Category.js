import React, { Component } from 'react'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class Category extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const categoryPattern = choosePattern(
      state.categorySection.pattern,
      state.categorySection.patternColor
    )
    return (
      <div
        style={{
          backgroundColor: state.categorySection.bckColor,
          border: `${state.categorySection.borderWidth}px solid ${state.categorySection.borderColor}`,
        }}
        onClick={() => {
          showEditor('categorySection')
        }}
        className={` border border-white p-2 lg:py-4 lg:px-2 xl:py-8 xl:px-5 bg-gray-600 2xl:min-h-[180px] relative`}>
        {editMode && <div className={`absolute top-0 left-0 h-full w-full ${hover} `}></div>}

        <div
          style={{ ...categoryPattern }}
          className={`absolute top-0 left-0 h-full w-full ${hover}  z-0`}></div>
        <div className='uppercase text-blue-700 font-semibold z-10 flex'>
          <span className='z-10'>Category:</span>
          <span className='z-10'>Polkamon</span>
        </div>
        <span className='font-semibold text-white texl-lg xl:text-2xl 2xl:text-4xl z-10'>
          A piece of something
        </span>
      </div>
    )
  }
}
