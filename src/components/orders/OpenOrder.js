import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img2 from "../Images/shoeblack.png"
import { Col,Row } from 'antd';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function OpenOrder() {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
           height="140"
          img src={img2}
          title="My Order"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Black shoe leather
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <i>Price: $20.00</i>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary:teal">
          Order
        </Button>
        <Button size="small" color="secondary">
          Cancel
        </Button>
      </CardActions>
      </Card>
     
  );
}