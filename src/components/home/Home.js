import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Card, Typography, List, Descriptions, Statistic } from 'antd';
import moment from 'moment';
import RoterApp from '../../RouterApp';
import RouterApp from '../../RouterApp';

const gridStyle = {
    width: '20%',
    textAlign: 'center',
    borderRadius: '2px !important',
};

class Home extends React.Component {


    data = [
        {
            title: 'PIMS 1',
        },
        {
            title: 'PIMS 2',
        },
        {
            title: 'PIMS 3',
        },
        {
            title: 'PIMS 4',
        },
    ];

    render() {
        return (
            <RouterApp>

                <Row gutter={24} style={{ padding: 14 }}>
                    <Col span={18}>
                        <Row gutter={24} style={{ padding: 14 }}>
                            <Col span={22}>
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
                                        <Typography.Title strong='true' style={{ color: '#1890ff' }}>10</Typography.Title>
                                        <Typography.Text strong='true' style={{ color: '#1890ff' }}> Delivery </Typography.Text>
                                    </Card.Grid>
                                </Card>
                            </Col>
                        </Row>

                        <Row gutter={24} style={{ padding: 14 }}>
                            <Col span={22}>
                                <Card title="Hospitals" hoverable>
                                    <List
                                        grid={{ gutter: 16, column: 4 }}
                                        dataSource={this.data}
                                        renderItem={item => (
                                            <List.Item>
                                                <Card hoverable={true} title={item.title}>
                                                    <Descriptions title="Contact # 03330000000" layout="vertical" bordered={true}>
                                                        <Descriptions.Item> Beds</Descriptions.Item>
                                                        <Descriptions.Item>2</Descriptions.Item>

                                                    </Descriptions>

                                                    <Descriptions layout="vertical" bordered={true}>
                                                        <Descriptions.Item>Ventilators</Descriptions.Item>
                                                        <Descriptions.Item>2</Descriptions.Item>
                                                    </Descriptions>

                                                </Card>
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </Col>
                        </Row>

                        <Row gutter={24} style={{ padding: 14 }}>
                            <Col span={22}>
                                <Card title="Waiting Patients" hoverable>
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
                    </Col>
                    <Col span={6}>
                        <Row gutter={24} style={{ padding: 14 }}>
                            <Col span={24}>
                                <Card title="My Patients">
                                    <Card hoverable>
                                        <Statistic
                                            title="Escaped"
                                            value={11}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Card>
                                    <Card hoverable>
                                        <Statistic
                                            title="Ventilator"
                                            value={3}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Card>
                                    <Card hoverable>
                                        <Statistic
                                            title="Quarantine"
                                            value={3000}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Card>
                                    <Card hoverable>
                                        <Statistic
                                            title="Oxydized"
                                            value={1}
                                            precision={2}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Card>
                                    <Card hoverable>
                                        <Statistic
                                            title="Panadol"
                                            value={2000}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Card>
                                    <Card hoverable>
                                        <Statistic
                                            title="Sent Home"
                                            value={1000}
                                            valueStyle={{ color: '#3f8600' }}
                                        />
                                    </Card>
                                </Card>
                            </Col>
                        </Row>

                    </Col>


                </Row>

            </RouterApp >
        );
    }
}


export default Home;
