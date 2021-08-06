import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentForm from './CommentForm'

const CommentBox = styled.article`
  border: 1px solid #ddd;
  margin: 25px 0 0 ${props => (props.childrenComments?.length ? '20px' : '0')};
  font-size: 14px;
  padding: 5px 10px 5px 10px;
  .flex-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .comment-author {
    font-weight: 700;
  }
  comment-date {
    font-weight: 400;
    font-style: italic;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
`

const SingleComment = ({ comment }) => (
  <div>
    <div className="flex-container">
      <span className="comment-author">{comment.name}</span>
      <span className="comment-date">
        {comment.time && (
          <time>{moment(comment.time.toDate()).calendar()}</time>
        )}
      </span>
    </div>
    <p>{comment.content}</p>
  </div>
)

const Comment = props => {
  const { comment, childrenComments, slug } = props
  return (
    <CommentBox>
      <SingleComment comment={comment} />
      {!!childrenComments?.length && (
        <div style={{ marginLeft: '20px' }}>
          {childrenComments
            .sort((a, b) => a.time?.seconds - b.time?.seconds)
            .map(childComment => (
              <CommentBox
                key={childComment.id}
                childrenComments
                className="comment-reply"
              >
                <SingleComment comment={childComment} />
              </CommentBox>
            ))}
        </div>
      )}
      <div style={{ margin: '10px' }}>
        <CommentForm parentId={comment.id} slug={slug} />
      </div>
    </CommentBox>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
  childrenComments: PropTypes.array,
}

export default Comment
