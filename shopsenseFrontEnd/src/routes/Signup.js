import React from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
const Signup=()=>{

  const PostData = async () => {

  }
    return(
        <div className="signup-body" style={{background:"linear-gradient(90deg, #ee6352, purple, #ee6352)",
           animation: "gradient 15s ease infinite",
           height: "300%",}}>
       <div className="cover">
          <div className="form-body">
          <form>
        <h3>Sign Up</h3>
        <div method="POST" className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id = "username"
          />
        </div>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label>Confirm password</label>
          <input type="password" className="form-control" placeholder="Confirm password" id="comfirmPassword" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            SUBMIT 
          </button> onClick={PostData}
        </div>
        <p className="forgot-password text-right">
          <Link to="/signin">
          <button className="sign-in">Already registered sign in?
          </button>
          </Link>
        </p>
      </form>   
          </div>
       </div>
       </div>
    );
    
}

export default Signup;