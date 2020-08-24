import React from 'react'
import { Tabs, Radio } from 'antd';
import styled from 'styled-components'
import TransactionView from "../transaction/TransactionView"

const { TabPane } = Tabs;

class Transaction extends React.Component {
  state = { size: 'large' };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <MyTransact>
        <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
          <TabPane tab="Payment" key="1">
          <TransactionView/>
            
          </TabPane>
          <TabPane tab="Refund" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Transaction Overview" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
        
        </MyTransact>
    );
  }
}

const MyTransact = styled.div`

.content1{
  background-color: #4CAF50;
  width:100%;
  height:50px;
  font-family: 'Hind Siliguri', sans-serif;
}
`;
export default Transaction