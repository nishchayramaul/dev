import { Feed } from "../../Components/feed/Feed"
import { Topbar } from "../../Components/Topbar"
import { Sidebar } from "../../Components/sidebar/Sidebar"
import { Righbar } from "../../Components/rightbar/Righbar"
import './home.css'

export const Home = () => {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Righbar profile={false}/>
    </div>
    </>
    
  )
}
