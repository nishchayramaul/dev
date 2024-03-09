import { RssFeed,Chat,VideoChat,Group, Bookmark, Quiz,Work,Event,SchoolOutlined} from '@mui/icons-material'
import './sidebar.css'
import { Users } from '../../Data/Data'

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <VideoChat className='sidebarIcon'/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon'/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <Quiz className='sidebarIcon'/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <Work className='sidebarIcon'/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolOutlined className='sidebarIcon'/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
                
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {/* excluding user id 1 as its the main user of account */}
                { Users.map((user)=>user.id!==1 && ( <li key={user.id} className="sidebarFriend">
                    <img src={user.photo} alt="ppf" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">{user.username}</span>
                </li>))
               
                }
            </ul>
        </div>
    </div>
  )
}
