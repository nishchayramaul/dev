import { useState } from 'react'
import { Users } from '../../Data/Data'
import  './post.css'
import {MoreVert} from '@mui/icons-material'


export const Post = ({post}) => {

  const [like,setlike] = useState(post.like);
  const [liked,SetIsliked] = useState(false);

  function likehandler (){
    setlike(liked ? like -1 : like +1);
    SetIsliked(!liked)
  }
    // defining main account user 
  const user = Users.filter((u)=> u.id===1)
  return (
    <div className='post'> 
    <div className="postWrapper">
        <div className="postTop">
             <div className="postTopLeft">
                <img style={{width:'32px', height:'32px',objectFit:'cover', borderRadius:'50%'}}
                src={Users.filter((u)=>u.id === post?.id &&  u.id )[0].photo } alt="ppf" className="postImage" />
              <span className="postUserName">{Users.filter((u)=>u.id === post?.id &&  u.id )[0].username }</span>
                <span className='postDate'>{post.date}</span>
             </div>
              <div className="postTopRight">
                <MoreVert/>
              </div>
               </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.post}alt="post1" className="postImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img onClick={likehandler} src="assets/like.png"  alt="like" className="likeIcon" />
                <img  onClick={likehandler} src="assets/heart.png" alt="heart" className="likeIcon" />
                <spam className="likeCounter">{like} people liked this post.</spam>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText"> {post.comment} comments </span>
            </div>
        </div>
    </div>
    </div>
  )
}
