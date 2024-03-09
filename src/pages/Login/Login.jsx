import { Link } from 'react-router-dom'
import './login.css'


export const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginTop">
                <h1 className="loginlogo">Social App</h1>
                <div></div>
            </div>
            <div className="loginCenter">
              <div className="loginCenterWrapper">
                <h1 className="loginCenterTitle">Log In</h1>
                <div className="loginbuttons">
                  <button className="loginbutton">Continue with Google</button>
                  <button className="loginbutton">Continue with Apple</button>
                </div>
                <hr className ="line"/> 
                <div className="loginFormContainer">
                  <form action="submit" className="loginForm">
                    <div className="formEmailContainer">
                    <label>Email</label> 
                    <input className='formInput' placeholder = "Enter your Email"/>
                    </div>
                    <div className="formPasswordContainer">
                      <label>Password </label>
                      <input type ="password" className='formInput' placeholder = "Enter your Password"/>
                    </div>
                    <div className="loginbuttoncontainer">
                    <Link to="/home">
                    <button className="loginbtn">Login</button>
                   </Link>
                      </div>
                  </form>
                </div>
                <span className="forgot">
                  <a href="#"> Forgot your password ?</a>
                </span>
                <span className="or">OR</span>
                <Link to="/signin">
            <button className="loginbtn">Sign me up!</button>
        </Link>
              </div>
            </div>
            <div className="loginBottom"></div>
        </div>
    </div>
  )
}
