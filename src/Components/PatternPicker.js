import React, { Component } from 'react'

export default class PatternPicker extends Component {
  render() {
    const where = this.props.where
    const keyProp = this.props.keyProp
    return (
      <div>
        <div className='flex flex-wrap'>
          <button
            onClick={() => {
              this.props.function(where, keyProp, 'flat')
            }}
            style={{
              opacity: 1,
              background: 'transparent',
            }}
            className='h-10 w-10 border border-red-50 p-1 m-1'></button>
          <button
            onClick={() => {
              this.props.function(where, keyProp, 'lined')
            }}
            style={{
              opacity: 1,
              background: `repeating-linear-gradient( 45deg, ${this.props.color} , ${this.props.color} 4px, transparent 4px, transparent 20px)`,
            }}
            className='h-10 w-10 border border-red-50 p-1 m-1'></button>
          <button
            onClick={() => {
              this.props.function(where, keyProp, 'dotted')
            }}
            style={{
              opacity: 1,
              backgroundImage: `radial-gradient(${this.props.color} 1px, transparent 1px), radial-gradient(${this.props.color} 1px, transparent 1px)`,
              backgroundSize: '10px 10px',
              backgroundPosition: '0 0,5px 5px',
            }}
            className='h-10 w-10 border border-red-50 p-1 m-1'></button>

          <button
            onClick={() => {
              this.props.function(where, keyProp, 'gradient')
            }}
            style={{
              opacity: 1,
              backgroundImage: `linear-gradient(180deg, ${this.props.color} 0%, rgba(8,19,35,0) 100%)`,
            }}
            className='h-10 w-10 border border-red-50 p-1 m-1'></button>
        </div>
      </div>
    )
  }
}
