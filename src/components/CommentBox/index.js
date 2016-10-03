import React, { Component } from 'react';
import './index.css';

import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <h1>Comments</h1>

        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
