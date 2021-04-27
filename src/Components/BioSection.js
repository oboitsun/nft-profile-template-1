import React, { Component } from 'react'
import Bio from './Bio'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class BioSection extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(state.bioSection.pattern, state.bioSection.patternColor)
    return (
      <div
        style={{
          backgroundColor: state.bioSection.bckColor,
          // border: `${state.bioSection.borderWidth}px solid ${state.bioSection.borderColor}`,
        }}
        onClick={(event) => {
          if (event.target.classList[0] === 'bio') {
            showEditor('bioSection')
          }
        }}
        className='p-5 relative z-10 overflow-hidden rounded-b-2xl'>
        {editMode && (
          <div
            className={`bio follow absolute top-0 left-0  w-full h-full ${hover} rounded-b-2xl   z-10`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full rounded-b-2xl  z-0`}></div>
        <Bio />
      </div>
    )
  }
}
