// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachDetails} = props
  const {id, name, comment, date, initialName, isLiked} = eachDetails
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const inital=name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const onClickLiked = () => {
    const {onChangeName} = props
    onChangeName(id)
  }
  const onClickDelete = () => {
    const {onChangeComment} = props
    onChangeComment(id)
  }
  return (
    <li>
    <div>
      <div className={initialName}>
        <p>{inital}</p>
        </div>
        <div>
        <p>{name}</p>
        <p>{postedTime}</p>
        </div>
        <p>{comment}</p>
        
       
        <img src={imgUrl} className="imgUrl" />
        <button onClick={onClickLiked} className={likeTextClassName}>Like</button>
        <button onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    
    </li>
  )
}
export default CommentItem
