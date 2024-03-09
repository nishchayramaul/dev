import { Feed } from "../../Components/feed/Feed"
import { Topbar } from "../../Components/Topbar"
import { Sidebar } from "../../Components/sidebar/Sidebar"
import { Righbar } from "../../Components/rightbar/Righbar"
import './profile.css'
import { Users } from "../../Data/Data"


export const Profile = () => {
    const user = Users.filter((u)=> u.id===1)
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img src="assets/posts/post8.jpeg" alt="" className="profileCoverImg" />
                <img src="assets/ppf.jpg" alt="" className="profileImg" />
            </div>
            <div className="profileInfo">
                <div className="profileInfoName">{user[0].username}</div>
                <span className="profileInfoDesc">  CS Graduate 2019 , skilled in Frontend Development</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Righbar profile ={true}/>
        </div>
     </div>
    </div>
    </>
  )
}
