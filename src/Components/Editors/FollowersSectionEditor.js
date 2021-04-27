import React, { Component } from 'react'
import ColorPicker from '../ColorPicker'
import ProfileContext from '../../ProfileContext'
import PatternPicker from '../PatternPicker'
export default class FollowersSectionEditor extends Component {
  static contextType = ProfileContext
  render() {
    const { state, changeSectionProp } = this.context
    const sectionProps = {
      where: 'followersSection',

      function: changeSectionProp,
    }

    return (
      <div className='text-white h-full p-4 flex'>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Main Background'
            keyProp='bckColor'
            color={state.followersSection.bckColor}
            {...sectionProps}
          />
        </div>

        <div className='mr-2'>
          <h3 className='mb-1'>Pattern:</h3>
          <PatternPicker
            color={state.followersSection.patternColor}
            keyProp='pattern'
            {...sectionProps}
          />
        </div>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Pattern Color'
            keyProp='patternColor'
            color={state.followersSection.patternColor}
            {...sectionProps}
          />
        </div>

        <div className='w-32 h-1/2'>
          <ColorPicker
            name='Border Color'
            keyProp='borderColor'
            color={state.authorSection.borderColor}
            where='authorSection'
            function={changeSectionProp}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='borderWidth'>Border Width:</label>
          <input
            id='borderWidth'
            className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 mt-1'
            onChange={(event) => {
              changeSectionProp('authorSection', 'borderWidth', parseInt(event.target.value))
            }}
            defaultValue={state.authorSection.borderWidth}
            step='2'
            type='range'
            min='0'
            max='8'
          />
        </div>
      </div>
    )
  }
}
