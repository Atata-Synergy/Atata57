import React, { Component } from 'react'
import Card from 'antd';

export class dashboardProducts extends Component {
    render() {
        return (
            <div>
                <Card title="Card title">
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>,
                
            </div>
        )
    }
}

export default dashboardProducts
