import React, { Component } from 'react'
import NftCard from './NftCard'
import NftCardPast from './NftCardPast'
import ProfileContext from '../ProfileContext'
export default class SideSection extends Component {
  static contextType = ProfileContext
  constructor(props) {
    super(props)
    this.state = { current: true }
  }
  handleCurrent = (status) => {
    this.setState({ ...this.state, current: status })
  }
  render() {
    const {
      state: { editMode },
      showEditor,
    } = this.context

    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const currentItems = new Array(25).fill('')
    const pastItems = new Array(8).fill('')
    const border = 'border-b-4 border-white'
    return (
      <div className='w-full h-full flex flex-col text-barlow text-white'>
        <div className='pl-12 pt-2 h-20 flex items-start relative'>
          <button
            onClick={() => {
              this.handleCurrent(true)
            }}
            className={`text-3xl font-semibold mr-5 focus:outline-none ${
              this.state.current ? border : 'pb-2'
            }`}>
            Current
          </button>
          <button
            onClick={() => {
              this.handleCurrent(false)
            }}
            className={`text-3xl font-semibold mr-5 focus:outline-none ${
              !this.state.current ? border : 'pb-2'
            }`}>
            Past
          </button>
        </div>
        <div
          onClick={(event) => {
            if (event.target.classList[0] === 'side') {
              showEditor(this.state.current ? 'nftCurrent' : 'nftPast')
            }
          }}
          style={{
            gridTemplateColumns: 'repeat(auto-fill,240px)',
            gridTemplateRows: 'repeat(auto-fill,minmax(320px,320px))',
          }}
          className='relative z-10 grid gap-4 w-full pl-10 h-full items-start overflow-y-scroll scrollbar-track-border scrollbar scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-full '>
          {editMode && (
            <div className={`side absolute top-0 left-0  w-full h-full ${hover}  z-20`}></div>
          )}
          {this.state.current &&
            currentItems.map((c, i) => (
              <div key={i} className='w-60 h-80  text-black '>
                <NftCard />
              </div>
            ))}
          {!this.state.current &&
            pastItems.map((c, i) => (
              <div key={i} className='w-60 h-80  text-black '>
                <NftCardPast />
              </div>
            ))}
        </div>
      </div>
    )
  }
}
