import React, { useState } from "react";
import { Slider, Button, Space, Upload, Popconfirm, Card, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const SpaceDemo = () => {
  const [size, setSize] = useState(8);
  return (
    <div>
      <Slider value={size} onChange={(value) => setSize(value)} />

      <br />
      <br />
      <Space direction='vertical' size={size}>
        <Button type='primary'>Primary</Button>
        <Button>Default</Button>
        <Button type='dashed'>Dashed</Button>
        <Button type='link'>Link</Button>
      </Space>
    </div>
  );
};

export default SpaceDemo;
