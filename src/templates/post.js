import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import Comments from '../components/Comments'
import SEO from '../components/SEO'
import { firestore } from '../../firebase.js'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next
  const { basePath, slug } = pageContext
  useEffect(() => {
    window && window.FB && window.FB.XFBML.parse()
  }, [])

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  const [comments, setComments] = useState([])

  useEffect(() => {
    firestore.collection(`comments`).onSnapshot(snapshot => {
      const posts = snapshot.docs
        .filter(doc => doc.data().slug === slug)
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        .sort((a, b) => b.time?.seconds - a.time?.seconds)
      setComments(posts)
    })
  }, [slug])

  useEffect(() => {
    const cleanUp = firestore.collection(`comments`).onSnapshot(snapshot => {
      const posts = snapshot.docs
        .filter(doc => doc.data().slug === slug)
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        .sort((a, b) => b.time?.seconds - a.time?.seconds)
      setComments(posts)
    })
    return () => cleanUp()
  }, [slug])

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
        image={ogImage}
      />
      <Hero title={title} image={heroImage} height={'50vh'} />
      <Container>
        {tags && <TagList tags={tags} basePath={basePath} />}
        <PostDetails date={publishDate} />
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} basePath={basePath} />
      <Comments slug={slug} comments={comments} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "DD.MM.YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
