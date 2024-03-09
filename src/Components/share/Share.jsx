import './share.css'
import {PhotoLibrary,Label,Room, EmojiEmotions} from '@mui/icons-material'
export const Share = () => {
  return (
    <div className = 'share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img style ={{height:'45px',width:'45px', borderRadius:'50%', objectFit:'cover', marginRight:'10px'}} 
                src="/assets/ppf.jpg" alt="ppf" className="shareProfileImg" />
                <input placeholder = "Share what's on your mind." className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PhotoLibrary className='shareIcon'/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="sharebutton">Share</button>
            </div>
        </div>
    </div>
  )
}
