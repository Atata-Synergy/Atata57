import React, { Component } from 'react'
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Layout, Tabs, Select, Input, Space,
  Radio, 
  Statistic, Row, Col, Button, 
  Descriptions, Typography
} from 'antd';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar } from '@material-ui/core';
import UserOutlined from '@ant-design/icons';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import RegistrationForm from "./RegForm"

const { TabPane } = Tabs;
const { Option } = Select;
const { Header, Footer, Sider, Content } = Layout;

class UserAccountDetails extends React.Component {
  state = {
    tabPosition: 'top',
  };
  
  render() {
    return (
      <MyUser> 
<Layout>
  <div style={{marginTop:'30px', marginLeft:'50px' }}>
<Sider style={{backgroundColor:'#ffff' , borderRadius:'5px'}}>
<Avatar
      style={{
        backgroundColor: '#87d068',
        width:'100px', height:'100px', 
        marginLeft:'50px',marginTop:'30px', paddingTop:'10px'
      }}
      icon={<UserOutlined />}
    />
    <h2 style={{marginLeft:'20px'}}>PreciousTemmy</h2>
        <Button className="btn-corner" variant="contained" size="small" color="secondary" >
              Edit
        </Button><br/>
    <span style={{marginLeft:'20px', marginBottom:'3px', fontSize:'15px'}}> I'm a Buyer in Atata57</span>
    <div className="line">
    </div>

    <Typography style={{paddingLeft:'10px'}}>
<Button className='profile-btn' color="secondary">Update Profile</Button>
<hr className="hr"/>
<Button className='profile-btn' color="secondary">Check Order</Button>
<hr className="hr"/>
<Button className='profile-btn' color="secondary">View my Favourites</Button>
<hr className="hr"/>
</Typography>

          
</Sider>
</div>
<Layout>
  
  <Content>
            
<Grid container spacing={2}>
<Grid item xs={12} sm={6}>
<div className="content-page">
<Tabs style={{paddingLeft:'20px', color: 'green'}} tabPosition={this.state.tabPosition}>
          <TabPane tab="My Account" key="1">
            <h2 className='font-face'>Your Wallet Account</h2>
            <div className="account">
            <span>$200,000 USD</span>
            </div>
            <div className="line">
          </div>
            <span className='font-face'>Cash Back</span>
            <h1 className='account'>$0.00 USD</h1>
          </TabPane>
          <TabPane tab="Notification" key="2">
          <span style={{width:'100px', height:'100px'}}>
          <NotificationsOffIcon/>
            No Notifications Yet</span>
          </TabPane>

          <TabPane tab="Settings" key="3">
          < SettingsIcon/> 
            Your profile is not  complete yet
          </TabPane>

        </Tabs>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
<div className="content-page font-face">
<Row>
  <Col span={12}>
<h2 style={{padding:"10px 0 0 10px"}}>Personal Profile</h2> 
</Col>
<Col span={10}>
<a link to='/'><EditOutlined style={{color:'green', padding:'20px 0 0 100px'}}/></a>
</Col>
</Row>
<div className="line" style={{marginTop:'0'}}>
</div>
<Row>
            <Col span={10}>
            <h1 style={{color:'#75757a', marginLeft:'10px',paddingLeft:'10px'}}>Full Name:</h1>
            <h1 style={{color:'#75757a', marginLeft:'10px',paddingLeft:'10px'}}>Phone Number:</h1>
            <h1 style={{color:'#75757a', marginLeft:'10px',paddingLeft:'10px'}}>Address:</h1>
            <h1 style={{color:'#75757a', marginLeft:'10px',paddingLeft:'10px'}}>Email:</h1>
            <h1 style={{color:'#75757a', marginLeft:'10px',paddingLeft:'10px'}}>Website:</h1>
            <h1 style={{color:'#75757a', marginLeft:'10px',paddingLeft:'10px'}}>Gender:</h1>
            
            </Col>
              <Col span={12}>
            <h1 style={{color:'#75757a'}}>PreciousTemmy</h1>
           <h1 style={{color:'#75757a'}}>08098723346</h1>
            <h1 style={{color:'#75757a'}}>7, bawale close, Lekki Lagos</h1>
            <h1 style={{color:'#75757a'}}>Atata57@gmail.com</h1>
            <h1 style={{color:'#75757a'}}>none</h1>
            <h1 style={{color:'#75757a'}}>none</h1>
                       
                     </Col>
           
           
                        </Row>
                       
                 
        </div>
        
        </Grid>
        </Grid>

<Grid item xs={12} sm={12}>
<div className="content-page">
<h1 className='font-face' style={{fontSize:'20px', paddingLeft:'20px', paddingTop:'20px'}}>Active Payement Methods</h1>
<span style={{fontSize:'20px', paddingLeft:'20px', paddingTop:'10px'}}>You have no payment instruments</span>
<div className="line"></div>
<div className="payment-view">
<a link to='/RegistrationForm'>VIEW PAYMENT SETTING</a>
</div>
        </div>
        
         
        </Grid>
  </Content>
  <Footer>Footer</Footer>
</Layout>
</Layout>


   
      </MyUser>
    )
  }
}

const MyUser = styled.div`
.container.content{
  background-color:blue;
  text-align:center;
  border: 1px solid blue;
  width:40px;
  height:40px;
}
.style1 {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}


.grid d-flex{
  padding: spacing;
  flex-grow:1;
  }
  .paper{
    padding: spacing;
    text-align: center;
    color: green;
  }
  .wallet-id{
    background-color:#06E776;
    border: 1px solid none;
  width:150px;
  height:80px;
  text-color: white
  }

  .btn-corner{
    border-radius: 10px;
    border-color: green;
    width:70px;
    margin-left:60px; 
  }

  .payment-view {
    color: green;
    padding-left:70%;
    font-size: 24px;
    font-family: 'Baloo Tamma 2', cursive;
    
    
  }
  
  .line { 
    margin: 25px 0;
    height: 1px;
    border: 0;
    background: black;
    background: -webkit-gradient(linear, 0 0, 100% 0, from(white), to(white), color-stop(50%, black));
  }
  
  .font{
font-family: 'Baloo Tamma 2', cursive;
  }

  .profile-btn{
    border:none;
    margin-left: 20px;
    color:green;
  }

  .hr{
    color: #D9E3F0;
    width:50px;
    margin-top:0px;
  }

  .hr-vertical{
         border: none;
      border-left: 1px solid hsla(200, 10%, 50%,100);
      height: 50px;
      width: 1px;       

  }

  .content-page{
    border: 2px;
    margin:30px 0 0 30px;
    background-color: white;
    border-radius: 10px;
    height:90%;
    
  }

  .account{
    border: 2px solid ;
    border-color: #37D67A;
    background-color: #ffff;
    width:140px;
    text-align:center;
    padding-top:10px;
    height:50px;
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 20px;
  }

  .font-face{
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 24px;
  }
`
export default UserAccountDetails;

