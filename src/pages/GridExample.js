import React from 'react';
import { Divider, Row, Col, Spin } from 'antd';

const style = {
  backgroundColor: '#0092ff',
  alignItems: 'center',

  padding: '8px 0',
};

const GridExample = () => {
  return (
    <div>
      <Divider orientation="center">Horizontal</Divider>

      <Row gutter={16}>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xl={6} xs={12}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>

      <Row gutter={[16, 24]}>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ padding: 30, backgroundColor: 'gray' }}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">More Responsive</Divider>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 8 }} md={16} lg={{ span: 6 }}>
          {' '}
          <div style={{ padding: 30, backgroundColor: 'burlywood' }}>col-6</div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <div style={{ background: 'green', padding: '1rem' }}>
            more responsive column 1
          </div>
        </Col>
        <Col span={12}>
          <div style={{ background: 'green', padding: '1rem' }}>
            more responsive column 2
          </div>
        </Col>
        <Col span={12}>
          <div style={{ background: 'green', padding: '1rem' }}>
            more responsive column 2
          </div>
        </Col>
        <Col xs={24} md={4} lg={10}>
          <div style={{ background: 'green', padding: '1rem' }}>
            more responsive column 2
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default GridExample;
