import React from 'react'
import './LoginPage.css'
function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="LoginPage__Block">
        <div className="LoginPage__Title">Login</div>
        <form>
          <div className="name">
            <input
              name="Name"
              id="Name"
              type="text"
              placeholder="sanskar"
            ></input>
          </div>
          <div className="surname">
            <input
              name="Surname"
              id="Surname"
              type="text"
              placeholder="sharma"
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage