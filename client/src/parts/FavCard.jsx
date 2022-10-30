import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SpacedDiv } from '../stlying/styles';

export default function RecipeReviewCard({Data}) {
  return (
<SpacedDiv>
<Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {Data.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Data.name}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={Data.img}
        alt="Paella dish"
      />
    </Card>
</SpacedDiv>
  );
}
