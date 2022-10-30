import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://thumbs.dreamstime.com/b/digital-abstract-art-colorful-abstract-background-wallpaper-55379419.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="p">
              Initial Cost : $300
            </Typography>
            <Typography variant="body2" color="p">
              Present Bid : $540
            </Typography>
           <Typography variant="body2" color="p">
              Status : Not yet Sold
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Started at : 2:00 PM
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  