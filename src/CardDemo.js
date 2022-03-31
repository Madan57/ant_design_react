import React, { useState } from "react";
import {
  message,
  Avatar,
  Card,
  Row,
  Col,
  Space,
  notification,
  Tooltip,
  Modal,
  Divider,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Demo from "./TwoLineChart";
import "./CardDemo.css";

import ReactPlayer from "react-player";
import MessageForm from "./pages/MessageForm";

const { Meta } = Card;

function CardDemo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    message.success("data saved successfully");
    notification.open({
      message: "Data Saved successfully",
      type: "success",
      description: "this is all about description",
      placement: "topRight",
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Simple Modal"
        visible={isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <MessageForm />
      </Modal>
      <div className="site-card-wrapper">
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 48, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col
            xs={{ span: 24 }}
            sm={{ span: 16 }}
            md={{ span: 10 }}
            xl={{ span: 8 }}
          >
            <Card
              title="Card title"
              style={{ borderRadius: "5px" }}
              bordered={false}
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
              Card content
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 16 }}
            sm={{ span: 16 }}
            md={{ span: 10 }}
            xl={{ span: 8 }}
          >
            <Card
              title="Report Line Chart"
              hoverable
              style={{
                borderRadius: "5px",
                borderColor: "gray",
                borderWidth: "2px",
              }}
            >
              <Demo />
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 16 }}
            sm={{ span: 16 }}
            md={{ span: 10 }}
            xl={{ span: 8 }}
          >
            <Card
              title="Card title"
              hoverable
              style={{ borderRadius: "5px" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <Tooltip placement="topLeft" title="settings">
                  <SettingOutlined
                    key="setting"
                    onClick={(e) =>
                      notification.open({
                        message: "settings changed successfully",
                        description:
                          "this my notification description goes here epic!!!",
                        type: "success",
                        placement: "topRight",
                      })
                    }
                  />
                </Tooltip>,
                <Tooltip title="modal" placement="top">
                  <PlusCircleOutlined onClick={showModal} />
                </Tooltip>,
                <EditOutlined
                  key="edit"
                  onClick={(e) => message.success("edit clicked!!!")}
                />,
                <EllipsisOutlined
                  key="ellipsis"
                  onClick={(e) => message.info("more...")}
                />,
              ]}
              bordered={false}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
        <Divider orientation="center">Youtube Player</Divider>
        <Row
          align="middle"
          justify="center"
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 48, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Col
              xs={{ span: 8 }}
              sm={{ span: 16 }}
              sm={{ span: 16 }}
              md={{ span: 10 }}
              xl={{ span: 24 }}
            >
              <Card
                title="React Player"
                style={{ width: 500, borderRadius: 20 }}
                hoverable
              >
                <ReactPlayer
                  width={420}
                  url="https://youtu.be/5SGx9ZozB6U"
                  controls
                />
              </Card>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
}

export default CardDemo;
