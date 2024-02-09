
import { useState } from 'react';
import Option from './Option';
import './App.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { blue } from '@mui/material/colors';
import './Login.css';


export default function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <> 
      {!isLoggedIn && (
        <form onSubmit={login} className='F'><h2>
          <h2>LogIn</h2>
          {/* <label>Enter Name : </label> */}
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='B' required/><br /><br />
          {/* <label>Enter Email : </label> */}
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='B' required/><br /><br />
          <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' className='B' required minLength={6} maxLength={8}/><br /><br />
          <button type="submit" style={{background:"red",color:"white"}}>Next</button></h2>
        </form>
     )}

      {isLoggedIn && <Option name={name} email={email} />}
      
     </>
  );
}
