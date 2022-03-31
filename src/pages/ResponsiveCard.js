import React from 'react';
import { VideoCameraOutlined } from '@ant-design/icons';
import { Row, Col, Card, Divider, Alert, Image } from 'antd';

import MyImg from '../assets/Aakash Karki.jpg';

const style = { borderRadius: 10 };

const styles = {
  backgroundColor: '#0092ff',
  borderRadius: '7px',
  // height: '120px',
  fontSize: '14px',
  textAlign: 'center',
  padding: '20px',
};

const ResponsiveCard = () => {
  return (
    <>
      <div style={{ backgroundColor: 'lightgray', padding: '2rem' }}>
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 24, lg: 32 },
            { xs: 16, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Card
              style={style}
              bodyStyle={{
                backgroundColor: 'burlywood',
              }}
              title="card title"
              hoverable
              bordered={false}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Image
                  style={{ borderRadius: '50%' }}
                  src={MyImg}
                  alt="akash karki ioe topper"
                />
                <h1>card content</h1>
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Card style={style} title="card title" hoverable>
              card content
            </Card>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Card style={style} title="card title" hoverable>
              card content
            </Card>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <Card style={style} title="card title" hoverable>
              card content
            </Card>
          </Col>
        </Row>
      </div>
      <h1
        style={{
          textShadow: '-1px 4px 4px rgba(168, 169, 154, 0.84)',
          fontWeight: 700,
          fontFamily: 'popins',
          textAlign: 'center',
          marginLeft: '2rem',
        }}
      >
        antd grid more responsive practice
      </h1>
      <div style={{ backgroundColor: 'goldenrod', padding: '1rem' }}>
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 16, sm: 16, md: 24, lg: 32 },
          ]}
        >
          <Col
            // span={8}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'hotpink',
            }}
          >
            <div style={styles}>col-8</div>
          </Col>
          <Col
            style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'chocolate',
            }}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <div style={styles}>col-8</div>
          </Col>
          <Col
            style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'cadetblue',
            }}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <div style={styles}>col-8</div>
          </Col>
          <Col
            style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'azure',
            }}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <div style={styles}>col-8</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ResponsiveCard;
