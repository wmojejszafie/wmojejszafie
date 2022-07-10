import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Comment from '../components/Comment'

import { firestore } from '../../firebase.js'

import styled from 'styled-components'

const CommentList = styled.div`
  article {
    margin-bottom: 20px;
  }
`

const Contact = ({ data }) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    firestore.collection(`comments`).onSnapshot(snapshot => {
      const posts = snapshot.docs
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        .sort((a, b) => b.time?.seconds - a.time?.seconds)
      setComments(posts)
    })
  }, [])

  useEffect(() => {
    const cleanUp = firestore.collection(`comments`).onSnapshot(snapshot => {
      const posts = snapshot.docs
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        .sort((a, b) => b.time?.seconds - a.time?.seconds)
      setComments(posts)
    })
    return () => cleanUp()
  }, [])

  return (
    <Layout>
      <SEO title="Najnowsze komentarze" description="Lista najnowszych komentarzy" />
      <Container>
        <PageTitle>Komentarze</PageTitle>
        <CommentList>
          {comments.map(comment => <Comment
            key={comment.id}
            comment={comment}
            slug={comment.slug}
            readOnly
          />)}
        </CommentList>
      </Container>
    </Layout>
  )
}

export default Contact
