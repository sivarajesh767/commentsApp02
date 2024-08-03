import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}
  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      initialClassName: initialContainerBackgroundClassName,
      date: new Date(),
    }
    this.setState(preState => ({
      commentsList: [...preState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }
  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }
  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }
  renderComment = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        eachDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }
  toggleIsLiked = id => {
    this.setState(preState => ({
      commentsList: preState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }
  deleteComment = id => {
    this.setState({
      commentsList: commentsList.filter(comment => {
        comment.id !== id
      }),
    })
  }
  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="bg-co">
        <div className="card-container">
          <h1>Comments</h1>
          <form onSubmit={this.onAddComment}>
            <div className="comments-co">
              <p>say something about 4.0 Technologies</p>
              <input
                type="search"
                onChange={this.onChangeNameInput}
                value={nameInput}
              />
              <textarea
                onChange={this.onChangeCommentInput}
                value={commentInput} rows='6'
              />
              <button type="submit">Add button</button>
            </div>
          </form>
          <hr className="Line" />
          <p>
            <span>{commentsList.length}</span>
          </p>
          <ul>{this.renderComment()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
 
