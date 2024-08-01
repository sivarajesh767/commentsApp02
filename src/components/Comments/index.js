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

// Write your code here
class Comments extends Component {
  state = {nameInput:'', commentInput:'', commentsList:[]}

  onAddComment = event => {
    event.preventDefault()
    const initialName = `inital-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.lenght - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      commentsList: initialName,
    }
    this.setState(preState => ({
      commentsList: [...preState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }
  onChangeName = event => {
    this.state({nameInput: event.target.value})
  }
  onChangeComment = event => {
    this.state({commentInput: event.target.value})
  }
  renderComment = () => {
    const {commentsList} = this.state
    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        eachDetails={eachComment}
        toggleComment={this.toggleComment}
        deleteComment={this.deleteComment}
      />
    ))
  }
  toggleComment = id => {
    this.setState(preState => {
      commentsList: preState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
      })
    })
  }
  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filer(comment => {
        comment.id !== id
      }),
    })
  }
  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="bg-co">
        <h1 className="comments-head">Comments</h1>
        <p className="paragraph">say something about 4.0 technologies</p>

        <form className="add-comment" onSubmit={this.onAddComment}>
          <div className="container-box">
            <input
              type="search"
              value={nameInput}
              onChange={this.onChangeName}
              className="onNameInput"
              placeholder="Name"
            />

            <textarea
              onChange={this.onChangeComment}
              value={commentInput}
              className="onCommentInput"
              placeholder="comment..."
            />

            <button type="button" className="button">
              Add Comment
            </button>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="comments-img"
        />

        <hr className="line-1" />
        <p className="heading">
          <span className="comments-count">{commentsList.length}</span>
          Comments
        </p>
        <ul className="unorderList-1">{this.renderComment()}</ul>
      </div>
    )
  }
}
export default Comments
