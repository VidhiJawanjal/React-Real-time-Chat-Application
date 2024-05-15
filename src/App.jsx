import React from 'react'
import List from './components/list/List'
import Chats from './components/chats/Chats'
import Details from './components/details/Details'

const App = () => {
  return (
    <div className='conatiner'>
      <List/>
      <Chats/>
      <Details/>

    </div>
  )
}

export default App