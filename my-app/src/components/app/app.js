import React from 'react'
import AppHeader from 'components/app-header'
import SearchPanel from 'components/search-panel'
import PostStatusFilter from 'components/post-status-filter'
import PostList from 'components/post-list'
import PostAddForm from 'components/post-add-form'
import './app.css'

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  )
}

export default App
