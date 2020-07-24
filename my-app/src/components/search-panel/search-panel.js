import React, { useState } from 'react'
import './search-panel.css'

const SearchPanel = (props) => {
  const [term, setTerm] = useState('')

  const onUpdateSearch = (e) => {
    setTerm(e.target.value)
    props.onUpdateSearch(term)
  }

  return (
    <input
      className='form-control search-input'
      type='text'
      placeholder='Search in Posts'
      onChange={onUpdateSearch}
      value={term}
    />
  )
}
export default SearchPanel
