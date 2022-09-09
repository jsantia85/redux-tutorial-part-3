import React, {useState} from 'react'

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
        </form>
      </section>
    </>
  )
}