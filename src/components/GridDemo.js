import React from 'react';
import { Row, Col, Divider } from 'antd';

const style = { background: '0092ff', padding: '8px 0' };

const GridDemo = () => {
  return (
    <>
      <Divider orientation="left">Horizontal</Divider>
      <Row gutter={16}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
};

export default GridDemo;
