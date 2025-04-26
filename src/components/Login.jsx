import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [emailId,setEmailId] = useState("sachin@gmail.com");
  const [password,setPassword]=useState("Sachin@123");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ()=>{
        try{
        const res =await axios.post( BASE_URL + "login" ,
        {
          emailId,
          password
        },{withCredentials:true});
        dispatch(addUser(res.data));
        return navigate("/");
        }catch(err){
          console.log(err);
        }
  };
  
  return (
    <div className='flex justify-center my-10'>
    <div class="card bg-base-300 text-primary-content w-96 ">
    <div class="card-body">
      <h2 className="card-title justify-center">Login</h2>
      <fieldset class="fieldset">
  <legend class="fieldset-legend flex justify-center py-4">EmailId</legend>
  <input type="text"
  value={emailId}
  onChange={(e)=>setEmailId(e.target.value)}
   class="input" placeholder="Type here" />
</fieldset>
<fieldset class="fieldset">
  <legend class="fieldset-legend py-4">Password</legend>
  <input type="text"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
   class="input" placeholder="Type here" />
</fieldset>
      <div class="card-actions justify-center ">
        <button 
        onClick={handleLogin}
        class="btn bg-blue-600">Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login
