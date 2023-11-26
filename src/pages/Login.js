import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import ServerService from '../ServerService';
import './Login.css';

function Login({ location }) {
  const { setUser, setIsAuth } = useContext(AuthContext)

  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setInput(pre => {
      return {
        ...pre,
        [e.target.name]: e.target.value
      }
    })
  }

  const submit = () => {
    ServerService.login(input).then(result => {
      console.log(result);
      localStorage.setItem('token' , result.data.token)
      setUser(result.data.user)
      setIsAuth(true)
      if (result.data.user.role === "client")
        // history.push('/client');
        history.push('/documents');
      else if (result.data.user.role === "admin")
        history.push('/admin');
      else if (result.data.user.role === "pcb")
        history.push('/pcb');

    }).catch(err => alert('wrong username or password'))
  }


  return (
    <div className='login'>
      <div className='login_container'>
        <div className='login_container_title'>
          Enter your credentials for signing in : {location.whichLogin}
        </div>
        <br></br>
        <div className='login_container_input'>
          <label style={{ width: "80px", fontWeight: "500" }}>Email : </label>
          <input type="text" onChange={handleChange} name="email" value={input.email} ></input>
        </div>
        <div className='login_container_input'>
          <label style={{ width: "80px", fontWeight: "500" }}>
            Password :{" "}
          </label>
          <input onChange={handleChange} name="password" value={input.password} type="password"></input>
        </div>
        <center><button className="mainLoginButton" onClick={submit} >Log In</button></center>
      </div>
    </div>
  );
}

export default Login
