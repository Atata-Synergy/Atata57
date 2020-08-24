import React, { Component } from 'react'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Img1 from "./Images/shoeblack.png";

const { Meta } = Card;
export class myProductsView extends Component {
    render(){
        return (
            <div>
                <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={Img1}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
      </div>
        )
    }

  }
export default myProductsView
