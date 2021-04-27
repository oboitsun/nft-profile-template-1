import React, { Component } from 'react'
import ProfileContext from '../ProfileContext'
import AuthorSectionEditor from './Editors/AuthorSectionEditor'
import FollowersSectionEditor from './Editors/FollowersSectionEditor'
import BioSectionEditor from './Editors/BioSectionEditor'
import OffersSectionEditor from './Editors/OffersSectionEditor'
import ButtonEditor from './Editors/ButtonSectionEditor'
import BackgroundEditor from './Editors/BackgroundEditor'
export default class TemplateEditor extends Component {
  static contextType = ProfileContext
  render() {
    const { state } = this.context
    return (
      <div className='w-full h-full flex justify-center items-center'>
        {state.authorSection.edit && <AuthorSectionEditor />}
        {state.followersSection.edit && <FollowersSectionEditor />}
        {state.bioSection.edit && <BioSectionEditor />}
        {state.offersSection.edit && <OffersSectionEditor />}
        {state.button.edit && <ButtonEditor />}
        {state.background.edit && <BackgroundEditor />}
      </div>
    )
  }
}
