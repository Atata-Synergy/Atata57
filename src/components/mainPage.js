import React from "react";
import { Link, BrowserRouter as Router,
Route,
Switch,
} from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Button, Avatar, Badge, Descriptions } from 'antd';
import { Statistic} from 'antd';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';
import Transaction from "./transaction/transactionpage"
import Order from "../components/orders/Order";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Row, Col, Input} from 'antd';
import Title from "antd/lib/typography/Title";
import Img1 from "./Images/shoeblack.png";
import UserAccountDetails from '../components/UserAccountDetails';
import myProductsView from "./myProductsView";




const { Meta } = Card;
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class mainPage extends React.Component {
   state = {
    collapsed: true,
    
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
 
  render() {
    return (
    <Router>

      <Layout className="sider">
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="sider-layout" />
         
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="dashboard" icon={<DesktopOutlined />}>
          
         <Link to='/'>   My Account</Link>
            </Menu.Item>
            
            <Menu.Item key="orders" icon={< PieChartOutlined/>}>
             <Link to="/Order"> Orders</Link>
            </Menu.Item>
            <SubMenu key="myProfile" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="Managerfq">Manage RFQ</Menu.Item>
              <Menu.Item key="myProducts">
               <Link to='/myProductsView'>My Products</Link>
               </Menu.Item>
              <Menu.Item key="myFav">Submit RFQ</Menu.Item>
              <Menu.Item key="contactseller">My Contacts</Menu.Item>
              <Menu.Item key="contactseller">Become a Seller</Menu.Item>
            </SubMenu>
            <SubMenu key="transaction" icon={<TeamOutlined />} title="Transactions">
              <Menu.Item key="allTranscation">
              <Link to='/transactionpage'>All Transactions</Link>
              </Menu.Item>
              <Menu.Item key="transactionpage">Transaction Report</Menu.Item>
              <Menu.Item key="logisticsorder">Logistics Order</Menu.Item>
            </SubMenu>
            <Menu.Item key="tradeservice" icon={<FileOutlined />}> 
            Trade Service
            </Menu.Item>

          </Menu>
        </Sider>
        
        
        <Layout className="site-layout">
        <div>
          Logo goes in here

        </div>
        <Title style={{paddingLeft:'12'}} level={3}>
        
        <Avatar className="icon" icon={<UserOutlined/>}/>
              
        <Avatar className="icon" icon={<BellOutlined/>}/>
        
      <span className="style1">  PreciousTemmy
      
      <Input placeholder="Search" bordered={false}  
      onSearch={value => console.log(value)} enterButton style={{width:'300px'}} />
      </span>
      
      
        </Title>

          <Header className="site-layout-background" style={{ paddingTop: 40 }} />
          <Content style={{ margin: '0 16px' }}>
            {/*<Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>My Profile</Breadcrumb.Item>
              <Breadcrumb.Item>Become a Seller</Breadcrumb.Item>
              <Breadcrumb.Item>Settings</Breadcrumb.Item>
            </Breadcrumb>
    */}
   {/* Switch route start*/}

      
<Switch>
         <Route exact path="/" component={UserAccountDetails}/>
         <Route exact path="/order" component={Order}/>
         <Route exact path="/transactionpage" component={Transaction}/>
         <Route exact path="/myProductView" component={myProductsView}/>
        </Switch>
        {/* Switch route ends*/}

          </Content>
          
          <Footer style={{ textAlign: 'center' }}>
        
          Footer</Footer>
        </Layout>
      </Layout>
      
      </Router>
      

      
    );
  }
}

export default mainPage;