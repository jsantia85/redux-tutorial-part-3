import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import {nanoid} from '@reduxjs/toolkit'

import {postAdded} from './postsSlice.js'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  return (
    <>
      <section>
        <form>
          <label htmlFor='postTitle'>Post Title:</label>
          <input
            type='text'
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor='postContent'>Content:</label>
          <textarea
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
          />
          <button type='button'>Save Post</button>
        </form>
      </section>
    </>
  )
}