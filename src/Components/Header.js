import React, { Component } from 'react'
import AccountHeader from './AccountHeader'
import Nav from './Nav'
import ProfileContext from '../ProfileContext'
import TemplateEditor from './TemplateEditor'
export default class Header extends Component {
  static contextType = ProfileContext
  render() {
    const {
      state: { editMode },
    } = this.context
    return (
      <div className='h-28 w-full flex flex-col justify-between  bg-gray-900 '>
        {editMode ? (
          <TemplateEditor />
        ) : (
          <>
            <Nav />
            <AccountHeader />
          </>
        )}
      </div>
    )
  }
}
