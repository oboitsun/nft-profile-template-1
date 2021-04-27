import React, { Component } from 'react'
import Favorites from './Favorites'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class NftCardPast extends Component {
  static contextType = ProfileContext

  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(state.nftPast.pattern, state.nftPast.patternColor)
    return (
      <div
        style={{
          background: `${state.nftPast.bckColor}`,
          border: `${state.nftPast.borderWidth}px solid ${state.nftPast.borderColor}`,
        }}
        className='w-full h-full flex flex-col bg-white rounded-xl px-3 py-4 font-barlow relative z-10 overflow-hidden'>
        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full   z-0`}></div>
        <div className='w-full h-1/12 py-1 flex items-center justify-end z-10'>
          <Favorites />
        </div>
        <div className='bg-gray-500 rounded-2xl h-full w-full z-10'></div>
        <div className='flex w-full h-1/4 items-center justify-between pt-1 z-10'>
          <div className='flex flex-col mr-auto'>
            <span className='font-light text-base'>@oliveallen</span>
            <span className='text-sm'>AfterBurn</span>
          </div>
          <div className='flex flex-col  flex-wrap items-end'>
            <span className='uppercase  text-xs'>Price</span>
            <div className='flex items-center'>
              <svg
                className='w-3 h-3 fill-current mr-1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 7 9.04'>
                <g id='Layer_2' data-name='Layer 2'>
                  <g id='Layer_1-2' data-name='Layer 1'>
                    <rect width='7' height='1.4' />
                    <rect y='7.64' width='7' height='1.4' />
                    <rect x='0.64' y='3.82' width='5.73' height='1.4' />
                  </g>
                </g>
              </svg>
              <span className='font-semibold text-sm'>0.63</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
