import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Card, Typography, Anchor, List, Checkbox, Tag, DatePicker, Badge } from 'antd';
import moment from 'moment';
import RoterApp from '../../RouterApp';
import RouterApp from '../../RouterApp';

const gridStyle = {
    width: '20%',
    textAlign: 'center',
    borderRadius: '2px !important',
};

class Home extends React.Component {

    render() {
        return (
            <RouterApp>
                <Row gutter={24} style={{ padding: 14 }}>
                    <Col span={16}>
                        <Card title="My Center" hoverable>
                            <Card.Grid style={gridStyle}>
                                <Typography.Title strong='true'>17</Typography.Title>
                                <Typography.Text strong='true'> Admitted </Typography.Text>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Typography.Title type="secondary" strong='true'>0</Typography.Title>
                                <Typography.Text type="secondary"> Free Beds </Typography.Text>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Typography.Title type="warning" strong='true'>4</Typography.Title>
                                <Typography.Text type="warning"> Free Ventilators </Typography.Text>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Typography.Title style={{ color: 'green' }} type="default" strong='true'>13</Typography.Title>
                                <Typography.Text style={{ color: 'green' }}> Waiting </Typography.Text>
                            </Card.Grid>
                            <Card.Grid style={gridStyle}>
                                <Typography.Title strong='true'>17</Typography.Title>
                                <Typography.Text strong='true'> Delivery </Typography.Text>
                            </Card.Grid>
                        </Card>
                    </Col>
                </Row>
            </RouterApp>
        );
    }
}


export default Home;
