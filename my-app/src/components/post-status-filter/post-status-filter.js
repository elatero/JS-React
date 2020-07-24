import React, { useState } from 'react'

import './post-status-filter.css'

const PostStatusFilter = ({ filter, onFilterSelect }) => {
  // eslint-disable-next-line no-unused-vars
  const [buttons, setButtons] = useState([
    { name: 'all', label: 'all' },
    { name: 'like', label: 'liked' }
  ])

  const btns = buttons.map(({ name, label }) => {
    const active = filter === name

    const clazz = active ? 'btn-info' : 'btn-outline-secondary'

    return (
      <button
        type='button'
        className={`btn ${clazz}`}
        onClick={onFilterSelect(name)}
        key={name}
      >
        {label}
      </button>
    )
  })

  return <div className='btn-group'>{btns}</div>
}

export default PostStatusFilter
