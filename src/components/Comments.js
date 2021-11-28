import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'

import styled from 'styled-components'

const CommentList = styled.div`
  article {
    margin-bottom: 20px;
  }
`
const Wrapper = styled.div`
  max-width: 650px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0;
  padding: 0 1em 2em;
  margin: 0 auto auto;
`

const Comments = ({ comments, slug }) => {
  return (
    <Wrapper>
      <h2 style={{ marginBottom: '10px' }}>Komentarze</h2>
      <CommentForm slug={slug} />
      <CommentList>
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map(comment => {
              let childrenComments
              if (comment.id) {
                childrenComments = comments.filter(c => comment.id === c.pId)
              }
              return (
                <Comment
                  key={comment.id}
                  childrenComments={childrenComments}
                  comment={comment}
                  slug={slug}
                />
              )
            })}
      </CommentList>
    </Wrapper>
  )
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}

export default Comments
