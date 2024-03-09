import {Search,Person,Chat,Notifications} from "@mui/icons-material"   
import'./topbar.css'
import { Users } from "../Data/Data"
import { Link } from "react-router-dom"


export const Topbar = () => {
const user = Users.filter((u)=> u.id===1)

  return (
    <div className="topbarContainer">
        <div className="topLeft">
            <span className="logo">Social app   </span>
        </div>
        <div className="topCenter">
            <div className="searchbar">
                <Search sx={{marginLeft:'10px', fontSize: '22px'}}className="searchIcon"/>
                <input type="text" placeholder='Search for a friend, post.' className="searchInput" />
            </div>
        </div>
        <div className="topRight">
            <div className="topbarlinks">
                <Link to={"/login"} className="topbarlink">Log Out</Link>
                <Link to={"/profile"} className="topbarlink">My Profile</Link>
                <Link to={"/"} className="topbarlink">Home</Link>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src={user[0].photo} alt="profilepicture" className="topbarImg" />
        </div>
    </div>
  )
}
