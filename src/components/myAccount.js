import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Statistic, Row, Col, Button } from 'antd';

function myAccount(props){
            return (
           <div>
            <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={12}>
              <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
              <Button style={{ marginTop: 16 }} type="primary">
                Recharge
              </Button>
            </Col>
          </Row>
                  </div>
                        
        );
    }


export default myAccount
