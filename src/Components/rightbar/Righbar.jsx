import { Online } from '../Online/Online'
import './rightbar.css'
import { OnlineUser } from '../../Data/OnlineUser'

export const Righbar = ({profile}) => {

   const Homerightbar = () =>{
    return(
    <>
      <div className="birthdayContainer">
        <img src="/assets/birthday.png" alt="" className="birthdayImg" />
        <span className="birthdayText"><b>Daksh </b> and <b>2 others friends </b>have birthday today.</span>
        </div>
        <img src="/assets/zomatoad.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         {OnlineUser?.map((u)=>(
          <Online onlineuser={u}/>
         ))}
        </ul>
    </>)
   }

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City : </span>
        <span className="rightbarInfoValue">Paonta Sahib</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From : </span>
        <span className="rightbarInfoValue">Himachal Pradesh, India</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Age : </span>
        <span className="rightbarInfoValue">22</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship Status : </span>
        <span className="rightbarInfoValue">Single</span>
      </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/ppf3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Prateek Kaushik</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/ppf7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shreya Thakur</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/ppf9.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ayush Sharma</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/pp5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ayushi Verma</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/ppf6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Arshdeep Saini</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/pp4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Ayush Rao</span>
        </div>
      </div>
      <div className="rightbarHobbies">
        <h4 className="rightbarTitle">Hobbies and Interests</h4>
        <div className="righbarHobbiesDesc">
          <span className="hobbiesitems"> Playing Guitar |</span>
          <span className="hobbiesitems"> Reading Books |</span>
          <span className="hobbiesitems"> Adventure Trekking |</span>
          <span className="hobbiesitems"> Reading |</span>
        </div>
      </div>
      </>
    )
  }


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <Homerightbar />}
      </div>
    </div>
  )
}
