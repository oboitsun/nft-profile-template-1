import React, { Component } from 'react'
import ProfileContext from '../ProfileContext'
import AuthorSectionEditor from './Editors/AuthorSectionEditor'
import FollowersSectionEditor from './Editors/FollowersSectionEditor'
import BioSectionEditor from './Editors/BioSectionEditor'
import NftPastEditor from './Editors/nftPastEditor'
import NftCurrentEditor from './Editors/nftCurrentEditor'
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
        {state.nftCurrent.edit && <NftCurrentEditor />}
        {state.nftPast.edit && <NftPastEditor />}
        {state.button.edit && <ButtonEditor />}
        {state.background.edit && <BackgroundEditor />}
      </div>
    )
  }
}
