import React from 'react'

import styled from 'styled-components'
// import './app-header.css'

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({ liked, allPosts }) => {
  return (
    <Header>
      <h1>User Name</h1>
      <h2>
        {allPosts} liked posts {liked}
      </h2>
    </Header>
  )
}

export default AppHeader
