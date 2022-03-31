import React, { useState } from "react";
import { Space, Row, Col, DatePicker, Modal, Input, Button } from "antd";

const BasicModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Open Model
      </Button>
      <Modal
        title='Basic Modal lets go!!! this is epic'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <Space direction='vertical'>
          <Row>
            <Input type='text' placeholder='enter username' />
          </Row>
          <Input type='email' placeholder='enter email' />
          <Input type='tel' placeholder='telephone' />
        </Space>
        <Row gutter={16}>
          <Col span={24}>
            {" "}
            <DatePicker />
          </Col>
        </Row>
        <br />
        <Button style={{ float: "right" }} type='primary' htmlType='submit'>
          Submit
        </Button>
      </Modal>
    </div>
  );
};

export default BasicModalDemo;
