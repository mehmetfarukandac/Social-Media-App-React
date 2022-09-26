import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

function Auth() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmPass, setconfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setconfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setconfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>MFA Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Usernames"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            *Confirm Password is not same
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? " Already have an account? Login!"
                : " Don't have an account? Sign Up!"}
            </span>
          </div>
          <button className="button info-button" disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

// function LogIn() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Log In</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="Usernames"
//             className="infoInput"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account? Sign Up!
//           </span>
//           <button className="button info-button">Signup</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign Up</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstName"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastName"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Usernames"
//             className="infoInput"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//           />
//           <input
//             type="text"
//             placeholder="Confirm Password"
//             className="infoInput"
//             name="confirmpass"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account? Login!
//           </span>
//         </div>
//         <button className="button info-button">Signup</button>
//       </form>
//     </div>
//   );
// }

export default Auth;
