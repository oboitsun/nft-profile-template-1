import React, { Component } from 'react'
import MainSection from './MainSection'
import SideSection from './SideSection'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class ProfilePreview extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
      setMode,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const categoryPattern = choosePattern(state.background.pattern, state.background.patternColor)
    const status = Object.entries(state)
    return (
      <div
        style={{
          backgroundColor: state.background.bckColor,
          // border: `${state.button.borderWidth}px solid ${state.button.borderColor}`,
        }}
        onClick={(event) => {
          if (event.target.classList[0] === 'bck') {
            showEditor('background')
          }
        }}
        className='h-full w-full bg-red-500 py-3 pb-10 2xl:pb-5 2xl:min-h-screen relative z-0'>
        <div
          style={{ ...categoryPattern }}
          className={`absolute top-0 left-0 h-full w-full z-0`}></div>
        {editMode && (
          <div className={`bck absolute top-0 left-0 h-full w-full ${hover} z-10  `}></div>
        )}
        <div className='px-5 2xl:px-20 xl:max-h-750 2xl:max-h-825 w-full h-full m-auto flex justify-between font-barlow overflow-hidden'>
          <div className='xl:w-1/3 max-w-lg 2xl:mr-14  relative z-30'>
            <MainSection />
          </div>
          <div className='xl:w-2/3 relative  z-10'>
            <SideSection />
          </div>

          <div className='absolute top-26 right-4 text-white flex flex-col items-center z-40'>
            <p className='mb-1 uppercase'>Edit Mode Is:</p>
            <button
              onClick={setMode}
              className='w-full px-4 py-2 rounded-lg border border-white uppercase'>
              {editMode ? 'on' : 'off'}
            </button>
            <div className='flex flex-col max-w-sm'>
              {/* {status.map((k, i) => (
                <div key={i}>
                  {k[0]}:{JSON.stringify(k[1], null, 2)}
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
