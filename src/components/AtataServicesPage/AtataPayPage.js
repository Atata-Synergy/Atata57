import React, { Component } from 'react'
import img1 from "./ServicesImage/adImage.jpg"
import styled from "styled-components"
import Logo1 from "./ServicesImage/AtataPay.png";
import { Link } from "react-router-dom";
import img5 from "./ServicesImage/1.png"
import AtataAccount from "../AtataServicesPage/AtataAccount";
import   ImageSwiper  from "./Swiper/ImageSwiper";
import SwiperFooter from "./Swiper/SwiperFooter";


class AtataPayPage extends React.Component {
    render() {
        return (
            <MyAtata>
            <div>
                
  <nav className= "teal lighten-1" role="navigation">
    <div className="nav-wrapper container">
         <a id="logo-container" href="#" className="brand-logo">
          <img src={Logo1} style={{height:'80px', width:'80px'}}
     />  
             
      </a>
      
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="Dashboard">My Atata</a>
        </li>
        
        <li>
          <a href="#">Signup</a>
        </li>
        
      </ul>
      <ul id="nav-mobile" className="sidenav">
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
   
      <a href="#" data-target="nav-mobile" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
  </nav>
  
  
  <div id="index-banner" className="parallax-container">
  <img src={img1} style={{height:'100%', width:'100%'}}/>
    <div className="section no-pad-bot">
    
      <div className="container">
      
               <br />
        <br />
        <p></p>
        <h1 className="header center blue-text text-lighten-2">
          WHY CHOOSE ATATAPAY
        </h1>
             
      </div>
    </div>
        </div>
        <p></p>
  
     <div className="container">
    <div className="section">
  
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-green-text">
              <i className="material-icons">lock</i>
            </h2>
            <h3 className="center">Safe and Secure</h3>
            <p className="light center">
            You get adequate value for the cost of your purchase,
             we provide AtataPay as a needed solution for buyers on
              our platform.
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center red-text">
              <i className="material-icons">verified_user</i>
            </h2>
            <h3 className="center">Verified Customers</h3>
            <p className="light center">
            It serves as protection for both buyers and sellers
            For sellers, we protect you from unexpected chargebacks
            For buyers, AtataPay gives you the alternative of inspecting products
            </p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-black-text">
              <i className="material-icons">settings</i>
            </h2>
            <h3 className="center">Easy to Use</h3>
            <p className="light center">
            Simple and easy way of accepting payments.
            Guarantee future revenue by allowing your 
            customers setup recurring payments.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br />
        
  </div>
  
  <div className="text-body">
  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <h1>
            <i className="mdi-content-send brown-text" />
          </h1>
          <h1 className="header center blue-text text-lighten-2">
        BENEFITS OF ATATAPAY
        </h1>
          <p className="left-align justify light">
      Reduction of risk as you deal with unknown and unfamiliar sellers. In order to make sure your transactions remain 
      safe and secure and that you get adequate value for the cost of your purchase, we provide AtataPay as a needed 
      solution for buyers on our platform.
      <p></p> It serves as protection for both buyers and sellers. For buyers, AtataPay gives you the alternative of inspecting products
 and making sure they are of the standard portrayed by the seller before funds are released.
 For sellers, we protect you from unexpected chargebacks and give you a great start at gaining the confidence of your buyers
  once transactions have been successfully completed.
  <p></p>
AtataPay prevents you from fraud. The internet is filled with entities who pose as something they're not. In partnership with 
the right service providers, we serve as the third party that receives, keeps, and disburses funds to our sellers, only when 
customers are satisfied with their goods and have confirmed authenticity.

          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  <ImageSwiper/>
  <SwiperFooter/>

  <footer>
    <div className="container">
      </div>
  </footer>
</div>;

</MyAtata>
        )
    }
}
const MyAtata = styled.div`

.section {
    padding-top: 1rem;
    padding-bottom: 1rem;
    
  }
  
  .section.no-pad {
    padding: 0;
  }
  
  .section.no-pad-bot {
    padding-bottom: 0;
  }
  
  .section.no-pad-top {
    padding-top: 0;
  }

  .parallax-container {
    position: relative;
    overflow: hidden;
    height: 500px;
      }
  
  .parallax-container .parallax {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .img{
      width:50%;
      height:50%;

  }
  .parallax-container .parallax img {
    opacity: 0;
    position: absolute;
    left: 50%;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }  
.parallax-container {
    min-height: 380px;
    line-height: 0;
    height: auto;
    width:100%;
    color:green;
  }
    .parallax-container .section {
      width: 100%;
      height:50px;
      
      
    }
  
  @media only screen and (max-width : 992px) {
    .parallax-container .section {
      position: absolute;
      top: 20%;
    }
    
nav .nav-wrapper {
    position: relative;
    height: 100%;
  }
  width:97%;
background:radial-gradient red;
padding:15px 0px;

.body{
  background:radial-gradient red;
}
.card{
  width: 15rem; 
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
  box-shadow: 5px 10px 20px 1px #363636 !important;
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
.swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index:1
}
.swiper-slide {
    width:300px;
    height:300px;
}
`;

export default AtataPayPage;
