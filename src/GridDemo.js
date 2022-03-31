import React from "react";
import { Row, Col, Divider } from "antd";
import "antd/dist/antd.css";

const style = { background: "#0092ff", padding: "8px 0" };

const GridDemo = () => {
  return (
    <div>
      <Divider orientation='left'>sub-element align left</Divider>
      <Row justify='space-around'>
        <Col style={style} span={4} order={4}>
          col-4
        </Col>
        <Col style={style} span={4}>
          col-4
        </Col>
        <Col style={style} span={4}>
          col-4
        </Col>
        <Col style={style} span={4}>
          col-4
        </Col>
      </Row>

      <Divider orientation='left'>sub-element align center</Divider>
      <Row justify='center'>
        <Col style={style} span={4} order={4}>
          col-4
        </Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider orientation='left'>sub-element align right</Divider>
      <Row justify='end'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider orientation='left'>sub-element monospaced arrangement</Divider>
      <Row justify='space-between'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider orientation='left'>sub-element align full</Divider>
      <Row justify='space-around'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
    </div>
  );
};

export default GridDemo;
