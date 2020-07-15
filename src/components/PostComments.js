import React, { Component } from 'react'
import { FacebookProvider, Comments } from 'react-facebook'

class PostComments extends Component {
  render() {
    return (
      <div>
        <div
          style={{ display: 'flex', justifyContent: 'center' }}
          className="fb-comments"
          data-href="https://www.wmojejszafie.pl"
          data-numposts="5"
          data-width=""
        ></div>
        <div>
          <FacebookProvider appId="2621867264723366">
            <Comments href="http://www.facebook.com" />
          </FacebookProvider>
        </div>
      </div>
    )
  }
}

export default PostComments
