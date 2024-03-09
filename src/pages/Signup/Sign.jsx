import './sign.css'

export const Sign = () => {
  return (
    <div className="signin">
        <div className="signinWrapper">
            <div className="signTop">
                <h1 className="signinlogo">Social App</h1>
                <div></div>
            </div>
            <div className="signinCenter">
              <div className="signinCenterWrapper">
                <h1 className="signinCenterTitle">Sign In</h1>
                <div className="signinbuttons">
                  <button className="signinbutton">Continue with Google</button>
                  <button className="signinbutton">Continue with Apple</button>
                </div>
                <hr className ="line"/> 
                <div className="signinFormContainer">
                  <form action="submit" className="signinForm">
                  <div className="formNameContainer">
                      <label>Name</label>
                      <input  className ="formInput" placeholder = "Enter your full name"/>
                    </div>
                    <div className="formEmailContainer">
                    <label>Email / Phone Number</label> 
                    <input  className ="formInput" placeholder = "Enter your Email or Phone Number"/>
                    </div>
                    <div className="formPasswordContainer">
                      <label>Password </label>
                      <input  className ="formInput" placeholder = "Enter your new Password"/>
                    </div>
                    <div className="formPasswordContainer">
                      <label>Confirm Password</label>
                      <input  className ="formInput" placeholder = "Confirm your new Password"/>
                    </div>
                 
                    <div className="signinbuttoncontainer">
                      <button  
                      className = "signinbtn">Sign In</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="signinBottom">
                <span>Hey, Thankyou for choosing us. Its a first step towards your beautiful journey with us !</span>
            </div>
        </div>
    </div>
  )
}
