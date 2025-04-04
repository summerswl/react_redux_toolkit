/**
 * Functional component that renders a list of posts.
 * Utilizes the `useSelector` hook to access the posts from the Redux store.
 * Each post is displayed as an article with its title and a truncated version of its content.
 * Returns a section containing the list of rendered posts.
 */
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

import React from 'react'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <h3>{post.content.substring(0, 100)}</h3>
      </article> 
    ))
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList