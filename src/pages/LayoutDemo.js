import React from "react";
import { Divider, Row, Col } from "antd";

const LayoutDemo = () => {
  return (
    <>
      <Row gutter={(16, 16)}>
        <Col span={8} style={{ backgroundColor: "skyblue", padding: "10px" }}>
          span 8
        </Col>
        <Col span={16} style={{ backgroundColor: "skyblue", padding: "10px" }}>
          col 12
        </Col>
      </Row>
    </>
  );
};

export default LayoutDemo;
