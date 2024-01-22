import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cardinfo1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/45222/forest-fog-nature-winter-45222.jpeg?cs=srgb&dl=pexels-pixabay-45222.jpg&fm=jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hi Aman
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Your BFI is 17%.You are looking Healthy
           <button style={{background:"blue"}}>Exerecise</button><br /><br />
           <button style={{background:"red"}}>Required Diet</button><br /><br />
           <button style={{background:"green"}}>Required Supplement</button><br />
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}