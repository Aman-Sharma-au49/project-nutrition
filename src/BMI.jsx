import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Exercise from './Exercise';
import Supplement from './Supplement';
import Diet from './Diet';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './BMI.css';

export default function BMI() {
  const [selectedOption, setSelectedOption] = useState(null);

 

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100; 
    const weightInKg = weight;

    if (heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid values for height and weight.');
      return;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(2));
  };


  return ( 
  <>
<BrowserRouter>
      <form >
        <h1>Body Mass Index</h1>
        <label>Height : </label>
        <input
          type="number"
          placeholder="In Centimeters"
          name="height"
          onChange={(e) => setHeight(e.target.value)}
        /><br /><br />
        <label>Weight : </label>
        <input
          type="number"
          placeholder="In Kilograms"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
        /><br /><br />
        <button type="button" onClick={calculateBMI} style={{background:"grey",paddingLeft:"30px",paddingRight:"30px",border:"solid"}}>Check</button> <br /><br />
        {bmiResult !== null && (
          <div>
            <p><center>             
                <Card sx={{ maxWidth:"30vw" }} style={{background:"#e5d1d4",border:"solid",borderRadius:"20px"}}>
      <CardActionArea>
        <CardMedia  />
          
        
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>
              <ul>
              <li>
               
                            Your BMI is: {bmiResult} <br /> </li>
                     <li>   {bmiResult < 18 && `You are looking underweight.`}
                            {bmiResult >= 18 && bmiResult < 25 && `You are looking Healthy.`}
                            {bmiResult >= 25 && `You are looking overweight.`}
                            </li>
                            <li>   {bmiResult < 18 && `You have required ${weight * 1.5} gram Protien  for weight gain`}
                            {bmiResult >= 18 && bmiResult < 25 && `you have required ${weight} gram Protien for maintaining the same`}
                            {bmiResult >= 25 && `you have required ${weight * 2} gram Protien for fat loss`}
                            </li>
                          
                            </ul>
            </h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
		
            
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    <div style={{margin:"50px"}} >
  <Link to="/Exercise" style={{ marginRight: "200px",color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px"} }><strong>Exercise</strong></Link>
  <Link to="/Supplement" style={{ marginRight: "200px",color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px"}}><strong>Supplement</strong></Link>
  <Link to="/Diet" style={{color:"black",fontSize:"20px",border:"solid", padding:"15px",borderRadius:"10px"}}><strong>Diet</strong></Link>
</div>
    <Routes>
     <Route path='/Exercise' element={ <Exercise/> }/>
     <Route path='/Supplement' element={ <Supplement/> }/>
     <Route path='/Diet' element={ <Diet /> }/>
    </Routes>
    
    </center>
    </p>
          </div>
        )}
      </form>
      
      </BrowserRouter>
    </>
  );
}
