import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { firestore } from '../../firebase.js'

const CommentBox = styled.div`
  input,
  textarea {
    display: block;
    background-color: #fff;
    border: 2px solid #ddd;
    font-size: 14px;
    font-family: 'Hind', sans-serif;
    font-weight: 400;
    padding: 10px 12px 8px;
    width: 100%;
    font-variant-numeric: lining-nums;
    font-feature-settings: 'lnum';
  }

  input[type='text'] {
    width: 50%;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }
`

const Button = styled.button`
  background: #e9e9e9;
  padding: 0.5em;
  text-decoration: none;
  transition: 0.2s;
  font-size: 10px;
  &:hover {
    background: #5b8bf7;
  }
`

const CommentForm = ({ parentId, slug }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [isFormVisible, setIsFormVisible] = useState(false)

  const resetComment = () => {
    setName('')
    setContent('')
    setIsFormVisible(false)
  }

  const handleCommentSubmission = async e => {
    e.preventDefault()
    let comment = {
      name: name,
      content: content,
      pId: parentId || null,
      time: new Date(),
      slug,
    }

    firestore
      .collection(`comments`)
      .add(comment)
      .catch(err => {
        console.error('error adding comment: ', err)
      })
      .finally(() => resetComment())
  }

  return (
    <CommentBox>
      {isFormVisible ? (
        <form onSubmit={e => handleCommentSubmission(e)}>
          <label htmlFor="name">
            Imię
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="comment">
            Komentarz
            <textarea
              style={{ display: 'block', resize: 'vertical' }}
              id="comment"
              onChange={e => setContent(e.target.value)}
              value={content}
              name="comment"
              required="required"
              cols="30"
              rows="3"
            ></textarea>
          </label>
          <Button
            style={{ marginRight: '10px' }}
            variant="outline-success"
            onClick={resetComment}
          >
            Anuluj
          </Button>
          <Button variant="outline-success" type="submit">
            Wyślij
          </Button>
        </form>
      ) : (
        <Button
          variant="outline-success"
          onClick={() => setIsFormVisible(true)}
        >
          Odpowiedz
        </Button>
      )}
    </CommentBox>
  )
}

CommentForm.propTypes = {
  parentId: PropTypes.string,
  slug: PropTypes.string.isRequired,
}

export default CommentForm
