import React, { Component } from 'react'

const ProfileContext = React.createContext()

class ProfileProvider extends Component {
  // Context state

  state = {
    editMode: true,
    background: {
      edit: false,
      bckColor: '#a3e6ff',
      pattern: 'dotted',
      patternColor: 'white',
    },
    button: {
      edit: false,
      bckColor: '#a3e6ff',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'lined',
      patternColor: 'white',
    },
    authorSection: {
      edit: true,
      bckColor: '#a3e6ff',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'lined',
      patternColor: 'white',
    },
    followersSection: {
      edit: false,
      bckColor: 'red',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'dotted',
      patternColor: 'white',
    },
    bioSection: {
      edit: false,
      bckColor: 'red',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
    offersSection: {
      edit: false,
      bckColor: 'red',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
  }

  // Method to update state
  setMode = () => {
    this.setState((prevState) => ({ ...prevState, editMode: !prevState.editMode }))
  }
  showEditor = (what) => {
    let oldState = this.state
    Object.entries(oldState).map((key) => {
      if (key[0] === what) {
        key[1].edit = true
      }
      if (key[0] !== what && key[1]?.edit) {
        key[1].edit = false
      }
      return key
    })
    this.setState({ ...oldState })
  }
  changeSectionProp = (where, keyProp, color) => {
    console.log(where, keyProp, color)
    this.setState({ ...this.state, [where]: { ...this.state[where], [keyProp]: color } })
  }
  render() {
    const { children } = this.props
    const state = this.state
    const { setMode, showEditor, changeSectionProp } = this

    return (
      <ProfileContext.Provider
        value={{
          state,
          setMode,
          showEditor,
          changeSectionProp,
        }}>
        {children}
      </ProfileContext.Provider>
    )
  }
}

export default ProfileContext

export { ProfileProvider }
