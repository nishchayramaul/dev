import './online.css'
export const Online = ({onlineuser}) => {
  return (
     <>
      <ul className="rightbarFriendList">
        <li  key= {onlineuser.id} className="righbarFriend">
          <div className="rightbarImageContainer">
            <img src={onlineuser.photo} alt="" className="rightbarImage" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUserName">{onlineuser.username}</span>
        </li>
        </ul>
     </>
  )
}
