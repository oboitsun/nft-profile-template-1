import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }
  handleShowPicker = (event) => {
    this.setState({ ...this.state, show: !this.state.show })
  }
  render() {
    const where = this.props.where
    const keyProp = this.props.keyProp
    return (
      <div className='w-full flex-col flex  relative text-white'>
        <h3 className='mb-1'>{this.props.name}:</h3>
        <div className='p-1 w-3/4 h-10 bg-gray-400 border border-gray-800 rounded-full overflow-hidden'>
          <button
            onClick={this.handleShowPicker}
            style={{ background: this.props.color }}
            className='w-full h-full rounded-full focus:outline-none'></button>
        </div>
        {this.state.show && (
          <button
            // onMouseOut={this.handleShowPicker}
            onBlur={this.handleShowPicker}
            className=' p-2 rounded-md absolute transform  translate-y-full -bottom-0 right-10  z-20 focus:outline-none'>
            <ChromePicker
              disableAlpha
              className='w-full h-auto'
              color={this.props.color}
              onChangeComplete={(color) => {
                this.props.function(where, keyProp, color.hex)
              }}
            />
          </button>
        )}
      </div>
    )
  }
}
