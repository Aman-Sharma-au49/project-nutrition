
import { useState } from 'react';
import Option from './Option';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';
import './Login.css';


export default function LogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function login(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <>
      {!isLoggedIn && (
        <form onSubmit={login}><h2>
          <label>Enter Name : </label>
          <input type="text" onChange={(e) => setName(e.target.value)} required /><br /><br />
          <label>Enter Email : </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} required /><br /><br />
          <button type="submit" style={{background:" rgb(108, 184, 210)"}}>Next</button></h2>
        </form>
      )}

      {isLoggedIn && <Option name={name} email={email} />}
      
    </>
  );
}
