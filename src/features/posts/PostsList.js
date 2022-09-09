import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  // useSelector is what allows us to communicate with the store
  const posts = useSelector(state => state.posts)

  // this constant is maping through the posts in the store and creating the template for what the posts will include
  const renderedPosts = posts.map(post => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0,100)}</p>
    </article>
  ))

  return (
    // finally it is returned as a list
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
