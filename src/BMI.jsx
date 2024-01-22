import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Exercise from './Exercise';

export default function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height to meters
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
      <form>
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
        <button type="button" onClick={calculateBMI} style={{background:"light-grey"}}>Check</button> <br /><br />
        {bmiResult !== null && (
          <div>
            <p><center>             
                <Card sx={{ maxWidth: 345 }} style={{background:"#c59292"}}>
      <CardActionArea>
        <CardMedia
          
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3>
            Your BMI is: {bmiResult}
            </h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
           <button style={{background:"blue"}}>Exercise</button><br /><br />
           <button style={{background:"red"}}>Required Diet</button><br /><br />
           <button style={{background:"green"}}>Required Supplement</button><br />
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </center>
    </p>
     
          </div>
        )}
      </form>
    </>
  );
}
