// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function Exercise(){

//     return(
//     <>
//     <Card sx={{ maxWidth: 345 }} style={{background :"yellow"}}>
//     <CardActionArea>
//       <CardMedia
        
      
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           <h3>
//           Your BMI is: {bmiResult}
//           </h3>
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
         
//          <button style={{background:"blue"}}>Exerecise</button><br /><br />
//          <button style={{background:"red"}}>Required Diet</button><br /><br />
//          <button style={{background:"green"}}>Required Supplement</button><br />
          
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
  
  
//   <Card sx={{ maxWidth: 345 }} style={{background :"yellow"}}>
//       <CardActionArea>
//         <CardMedia
          
        
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             <h3>
//             Your BMI is: {bmiResult}
//             </h3>
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
           
//            <button style={{background:"blue"}}>Exerecise</button><br /><br />
//            <button style={{background:"red"}}>Required Diet</button><br /><br />
//            <button style={{background:"green"}}>Required Supplement</button><br />
            
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>

//     <Card sx={{ maxWidth: 345 }} style={{background :"yellow"}}>
//       <CardActionArea>
//         <CardMedia
          
        
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             <h3>
//             Your BMI is: {bmiResult}
//             </h3>
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
           
//            <button style={{background:"blue"}}>Exerecise</button><br /><br />
//            <button style={{background:"red"}}>Required Diet</button><br /><br />
//            <button style={{background:"green"}}>Required Supplement</button><br />
            
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
// </>
// )};


import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Exercise({ bmiResult }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} style={{ background: "yellow" }}>
        <CardActionArea>
          <CardMedia />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <button style={{ background: "blue" }}>Exercise</button><br /><br />
              <button style={{ background: "red" }}>Required Diet</button><br /><br />
              <button style={{ background: "green" }}>Required Supplement</button><br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Add more cards if needed */}
    </>
  );
}
