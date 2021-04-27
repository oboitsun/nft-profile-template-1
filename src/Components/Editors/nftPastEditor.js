import React, { Component } from 'react'
import ColorPicker from '../ColorPicker'
import ProfileContext from '../../ProfileContext'
import PatternPicker from '../PatternPicker'
export default class NftPastEditor extends Component {
  static contextType = ProfileContext
  render() {
    const { state, changeSectionProp } = this.context
    const sectionProps = {
      where: 'nftPast',
      function: changeSectionProp,
    }

    return (
      <div className='text-white h-full p-4 flex'>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Main Background'
            keyProp='bckColor'
            color={state.nftPast.bckColor}
            {...sectionProps}
          />
        </div>

        <div className='mr-2'>
          <h3 className='mb-1'>Pattern:</h3>
          <PatternPicker color={state.nftPast.patternColor} keyProp='pattern' {...sectionProps} />
        </div>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Pattern Color'
            keyProp='patternColor'
            color={state.nftPast.patternColor}
            {...sectionProps}
          />
        </div>

        <div className='w-32 h-1/2'>
          <ColorPicker
            name='Border Color'
            keyProp='borderColor'
            color={state.nftPast.borderColor}
            {...sectionProps}
          />
        </div>
      </div>
    )
  }
}
