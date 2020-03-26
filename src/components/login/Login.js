import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        }
    }
    onFinish = values => {
        this.setState({ loading: true });
        console.log('Received values of form: ', values);
        this.props.history.push('/home');
    };


    render() {
        return (
            <Row>
                <Col span={8} push={8} style={{ marginTop: 200 }}>
                    <Card bordered={true} hoverable={true} size="default">
                        <div style={{ padding: 40 }}>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your Username!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your Password!' }]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>


                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" block loading={this.state.loading}>
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    }
}


export default Login;
