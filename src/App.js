import React from 'react'
import Header from './Components/Header'
import ProfilePreview from './Components/ProfilePreview'
import { ProfileProvider } from './ProfileContext'
class App extends React.Component {
  render() {
    return (
      <ProfileProvider>
        <div className=''>
          <Header />
          <div className='w-full'>
            <ProfilePreview />
          </div>
        </div>
      </ProfileProvider>
    )
  }
}

export default App
