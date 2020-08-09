import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import styled from "styled-components";
import img5 from "../header/Images/Banner1.jpg"
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import img1 from "../header/Images/1.png";
import img4 from "../header/Images/1.png";
import img2 from "../header/Images/1.png";
import Paginations from "components/Pagination/Pagination.js";

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';




const useStyles = makeStyles((theme) => ({
}));


export default function SectionBasics() {
 {/*} const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };*/}
  return (
    <Mystyle>
    <div>
      <div>
        <div>
          <h2><center>Benefits of Using Atata pay</center> </h2>
          <p>
          <center><img src={img5}/></center>
          </p>
        </div>
        
       
              <div>
                <h2><center>How it Works</center></h2>
                <Typography variant="subtitle1" gutterBottom>
                Recharge your phone, pay utility bills, make hotel reservations, book a ride, order food from your favourite restaurants and more all in Jumia ONE . Get cashback on your airtime and mobile data recharges with vouchers available on our website/app. Pay ZERO service fee on all your utility bills.

Instant Airtime & Data Recharge
Get your Airtime and Data instantly and with zero stress

Pay Zero Fee on Bills
Pay ZERO service fee on utility bills like DSTV, GoTV, Startimes, Smile, Swift, Spectranet, and electricity bills by saving ₦100 on each transactions.

Save Time and Money
Jumia One is the ''All-in-One'' lifestyle App, where you can get access to different services in one click. JumiaPay connects you to your favourite services faster and easier. You also get to save more whenever you use the App to make transactions.

Highly Secured Mode of Payment
One of the best things about the app is that, after your first login, you can access the app via your fingerprint or pattern lock. Also, no payment is completed on the app without sending an OTP (One Time Password) via a registered phone number or email, that way you can be assured no unwanted transactions can be performed. You also get an email for every transaction performed on the app.

Instant Refunds
You get an instant refund whenever a failed or incomplete transaction occurs.

Send Airtime & Data
Send airtime and date to your loved ones with ease
                </Typography>




                </div>

                <GridContainer>
         <div className="group d-flex">
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img2} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b> / unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <h4 className="card-title"></h4>
        <img src= {img4} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b>/ unit</p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
      </div>
        </div>
        <div className="group d-flex">
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="group d-flex">
        <div className="card text-center">
        <div className="overflow">
        <img src= {img1} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        <div className="card text-center">
        <div className="overflow">
        <img src= {img2} alt="Image1" className="card-img-top" />
        </div>        
        <div className="card-body text-dark">
        
        <p className="card-text text-secondary">10cm x 4.5m various sizes adhesive</p>
        <p><b>$20.00 - $30.00</b></p>
        <a href="#" className="btn btn-outline-success">View More</a>
        </div>
        </div>
        </div>
        </div>
          </GridContainer>
        </div>
        </div>
        </Mystyle>
    
    
  );
}
const Mystyle = styled.div`

width:97%;
background:radial-gradient red;
padding:15px 0px;

.body{
  background:radial-gradient red;
}
.card{
  width: 26rem; 
  padding:5px 5px;
 /** box-shadow: 5px 5px 0px 0px #363636;**/
  }
  
hr{
  width:80%;
  border: solid 5px var(--colorAsh);
}
.group{
  padding:0px 10px ;
  margin: 10px;
}
.flex{
  dislay: flex;
  justify-content: space-between;

}
.card:hover{
  box-shadow: 5px 5px 10px 1px #363636 !important;
}

  .card-container {
     box-shadow: 0px 4px 8px 0px rgba(196, 67, 67, 0.2);
     margin:10px;
     padding: 20px 5px;

      /* Card look */
      transition: 0.3s;
      background-color: green;
       border-left: 5px solid #5f37ff;
      /* Blue left border */
    }
    .title {
      color: var(--colorBlack);
      font-family: "Muli", sans-serif;
      font-size: 16px;
      margin: 0 3px;
    .card-img-top{
        transform: scale(1);
    }
    .card-img-top:hover{
      padding:10px 5px;
        transform: scale(1.5);
    }
  .overflow{
      overflow: hidden;
  }
    .card-container:hover {
      box-shadow: 16px 0px rgba(0, 0, 0, 0.2);
    }
.card-body{
padding:30px 0!important;
}
.container-fluid-row{
  padding-top:6rem;
  padding-left:40px;
}

`;