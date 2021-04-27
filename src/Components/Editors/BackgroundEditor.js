import React, { Component } from 'react'
import ColorPicker from '../ColorPicker'
import ProfileContext from '../../ProfileContext'
import PatternPicker from '../PatternPicker'
export default class BackgroundEditor extends Component {
  static contextType = ProfileContext
  render() {
    const { state, changeSectionProp } = this.context
    const sectionProps = {
      where: 'background',
      function: changeSectionProp,
    }

    return (
      <div className='text-white h-full p-4 flex'>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Main Background'
            keyProp='bckColor'
            color={state.background.bckColor}
            {...sectionProps}
          />
        </div>

        <div className='mr-2'>
          <h3 className='mb-1'>Pattern:</h3>
          <PatternPicker
            color={state.background.patternColor}
            keyProp='pattern'
            {...sectionProps}
          />
        </div>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Pattern Color'
            keyProp='patternColor'
            color={state.background.patternColor}
            {...sectionProps}
          />
        </div>
      </div>
    )
  }
}
