import React, { Component } from 'react'
import BidList from './BidList'
import ProfileContext from '../ProfileContext'
import { choosePattern } from './patternLibrary'
export default class Offers extends Component {
  static contextType = ProfileContext
  constructor(props) {
    super(props)
    this.state = { show: true }
  }
  handleShowOffers = () => {
    this.setState({ ...this.state, show: !this.state.show })
  }
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const categoryPattern = choosePattern(
      state.offersSection.pattern,
      state.offersSection.patternColor
    )
    return (
      <div
        onClick={() => {
          showEditor('offersSection')
        }}
        className='w-full h-full flex flex-col items-start overflow-hidden relative'>
        {editMode && <div className={`absolute top-0 left-0 h-full w-full ${hover} z-20`}></div>}
        <div
          style={{
            backgroundColor: state.offersSection.bckColor,
            border: `${state.offersSection.borderWidth}px solid ${state.offersSection.borderColor}`,
          }}
          onClick={this.handleShowOffers}
          className=' relative flex items-center justify-between w-full text-white border border-white p-2 lg:p-4 bg-gray-600 mb-5 z-10 cursor-pointer'>
          <div
            style={{ ...categoryPattern }}
            className={`absolute top-0 left-0 h-full w-full   z-0`}></div>
          <span className='uppercase font-semibold z-10'>OFFERS</span>

          <span className='relative text-gray-500 w-5 h-4 z-10'>
            <svg
              className={
                this.state.show
                  ? 'fill-current w-full h-full transform transition-transform  rotate-180'
                  : 'fill-current w-full h-full transition-transform transform  rotate-0'
              }
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 13.16 7.84'>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_2-2' data-name='Layer 2'>
                  <polyline fill='current' points='0.44 0.44 6.58 7.4 12.72 0.44' />
                </g>
              </g>
            </svg>
          </span>
        </div>

        <div
          style={{
            backgroundColor: state.offersSection.bckColor,
            border: `${state.offersSection.borderWidth}px solid ${state.offersSection.borderColor}`,
          }}
          className={
            this.state.show
              ? 'overflow-hidden px-2  w-full h-full text-white  p-2 lg:p-4 bg-gray-600 transform transition-all opacity-100 z-0 relative'
              : 'overflow-hidden px-2 w-full h-full text-white  p-2 lg:p-4 bg-gray-600 transform transition-all -translate-y-full opacity-0 z-0 relative'
          }>
          <div
            style={{ ...categoryPattern }}
            className={`absolute top-0 left-0 h-full w-full   z-0`}></div>

          <BidList />
        </div>
      </div>
    )
  }
}
