import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
const [user,setUser]=useState()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try{
      e.preventDefault();

    dispatch(signup(formData));
    const setUser = localStorage.setItem("user", JSON.stringify(user));
    navigate('/home')
    } catch(error){
      console.error(error)
    } 
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;