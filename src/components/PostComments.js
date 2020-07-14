import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
 class PostComments extends Component {
  render() {
    return (
       <div> Comments 
      <FacebookProvider appId="2621867264723366">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
      </div>
    );
  }
};

export default PostComments;