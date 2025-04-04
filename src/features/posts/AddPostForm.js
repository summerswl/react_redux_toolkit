/**
 * AddPostForm is a React component that provides a form for adding new posts.
 * It allows users to input a title, select an author from a dropdown list,
 * and enter content for the post. The form uses React hooks to manage state
 * and Redux to dispatch actions for adding a post. The save button is enabled
 * only when all fields are filled. Upon saving, the form dispatches the 
 * postAdded action with the title, content, and selected user ID, and then 
 * resets the form fields.
 */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import React from 'react'

const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    /**
     * Handles the click event for saving a new post.
     * Dispatches an action to add the post with the current title, content, and userId.
     * Resets the title and content fields after the post is added.
     * Only executes if both title and content are provided.
     */
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    /**
     * Maps over the list of users to generate an array of <option> elements.
     * Each <option> element represents a user, with the user's ID as the value
     * and the user's name as the display text.
     */
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    
  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor='postTitle'>PostTitle:</label>
            <input 
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor='postAuthor'>Author:</label>
            <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                <option value=''></option>
                {usersOptions}
            </select>
            <label htmlFor='postContent'>Content:</label>
            <textarea
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChanged}
            />
            <button 
                type='button'
                onClick={onSavePostClicked}
                disabled={!canSave}
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm