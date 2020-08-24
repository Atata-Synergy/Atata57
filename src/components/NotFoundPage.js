import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Avatar, Badge, Descriptions } from 'antd';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Row, Col} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  } from '@ant-design/icons';
import Title from "antd/lib/typography/Title";
import Img1 from "./Images/shoeblack.png";
import Transaction from "./transactionpage";

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const routes = [
  {
    path: "/",
    exact: true,
    main:() =>
    <Link to ="/"></Link> 
    },
  {
    path: "/myAccount",
    main: () => 
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <Descriptions title="User Info" layout="vertical">
<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
<Descriptions.Item label="Address" span={2}>
No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
</Descriptions.Item>
<Descriptions.Item label="Remark">empty</Descriptions.Item>
</Descriptions>

    </div>
  },
  {
    path:"/myProductsView",
    main:()=>
    <myAccount/>
  },
  {
    path: "/myProducts",
    main: () =>
   
       
    <Card title="Recently Viewed Products">
    <Card type="inner" title="My Products" extra={<a href="#">View More</a>}>
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={Img1}
          />
    }
  >
    <Meta
      title="Men's Casual Shoe Leather"
      description="$4,888-$5000"
    />
  </Card>
    </Card>
      </Card>
  
  }
];


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
          
         <Link to='/myAccount'>   My Account</Link>
            </Menu.Item>
            
            <Menu.Item key="orders" icon={< PieChartOutlined/>}>
             <Link to='transactionpage'> Orders</Link>
            </Menu.Item>
            <SubMenu key="myProfile" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="Managerfq">Manage RFQ</Menu.Item>
              <Menu.Item key="myProducts">
               <Link to='myProducts'>My Products</Link>
               </Menu.Item>
              <Menu.Item key="myFav">Submit RFQ</Menu.Item>
              <Menu.Item key="contactseller">My Contacts</Menu.Item>
              <Menu.Item key="contactseller">Become a Seller</Menu.Item>
            </SubMenu>
            <SubMenu key="transaction" icon={<TeamOutlined />} title="Transactions">
              <Menu.Item key="allTranscation">
              <Link to='myProductsView'>All Transactions</Link>
              </Menu.Item>
              <Menu.Item key="transactionreport">Transaction Report</Menu.Item>
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
      </span>
      <span className="style1">  Inbox
      </span>
      
      <span className="style1"> Saved Item
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
           <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main/>}
            />
          )

          )
          }
        </Switch>
   
          </Content>
                 
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
     
      </Router>
      

      
    );
  }
}

export default mainPage;