
import React, { useState } from 'react';
import BMI from './BMI';
import BFP from './BFP';
import IBW from './IBW';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Option.css';
export default function Option() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div >
    <Card sx={{ minWidth: "55vw", background: "linear-gradient(to right, #b58648, #ef8a70, #c880b9)", borderRadius:"50px",borderStyle:"solid" }}>
    {/* <Card sx={{ minWidth: "55vw", background: "linear-gradient(to right,  #b58648, #ef8a70,#c880b9)" }}> */}
  
    
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          <h1>Check</h1>
        </Typography>
        <button style={{ background: "rgb(173 111 53)",border:"solid",width:"10vw",minWidth:62 }} onClick={() => handleOptionClick('BMI')}>Body Mass Index</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ background: "#c35f45" ,width:"10vw",border:"solid",minWidth:102 }} onClick={() => handleOptionClick('BFP')}>Body Fat Percentage</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button style={{ background: "rgb(172 94 179)" ,border:"solid",width:"10vw",minWidth:82 }} onClick={() => handleOptionClick('IBW')}>Ideal Body Weight</button>
      </CardContent><br /><br />

      {selectedOption === 'BMI' && <BMI />}
      {selectedOption === 'BFP' && <BFP />}
      {selectedOption === 'IBW' && <IBW />}
    </Card>
    </div>
  );
}
