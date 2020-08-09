import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';

class AtataAccount extends React.Component {
    render() {
        return (
            <div>
                <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
            </div>
        )
    }
}

export default AtataAccount
