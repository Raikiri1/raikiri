import s from './Post.module.css';
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://avatarko.ru/img/kartinka/1/ledyanoj_drakon.jpg' />
        {props.message}
        <div className={s.Post}>
          <span>Like</span>  {props.Likescaunt}              
        </div>
      </div>
    </div>
  )
}
export default Post;