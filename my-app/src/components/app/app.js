import React, { Component } from 'react'
import AppHeader from 'components/app-header'
import SearchPanel from 'components/search-panel'
import PostStatusFilter from 'components/post-status-filter'
import PostList from 'components/post-list'
import PostAddForm from 'components/post-add-form'

import styled from 'styled-components'
//import './app.css'

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          label: 'Going to learn React',
          important: false,
          liked: false,
          id: 1
        },
        { label: 'That is so good', important: false, liked: false, id: 2 },
        { label: 'I need a break...', important: false, liked: false, id: 3 }
      ],
      term: '',
      filter: 'all'
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.maxId = 4
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)

      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)]
      }
    })
  }

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })
    console.log(body)
  }

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)

      return {
        data: [
          ...data.slice(0, index),
          { ...data[index], important: !data[index].important },
          ...data.slice(index + 1)
        ]
      }
    })
  }

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)

      return {
        data: [
          ...data.slice(0, index),
          { ...data[index], like: !data[index].like },
          ...data.slice(index + 1)
        ]
      }
    })
  }

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter((item) => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  onFilterSelect = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { data, term, filter } = this.state

    const liked = data.filter((item) => item.like).length
    const allPosts = data.length

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
      <AppBlock>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className='search-panel d-flex'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    )
  }
}
