import React from 'react';
import { Modal, Button, Form, InputNumber, message } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: 'This field is required!',
    types: {
        email: 'Not a validate email!',
        number: 'Not a validate number!',
    },
    number: {
        range: 'Must be between ${min} and ${max}',
    },
};

class CenterModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            loading: false,
            iconLoading: false,
            email: '',
        };

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFinish = values => {
        console.log(values);
        message.success('YO!');
    };

    render() {
        const { email } = this.state;

        return (
            <div>
                <Button block size="default" onClick={this.showModal}>
                    + Add Center
                </Button>
                <Modal
                    title="Enter Center Details"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.submitHandler} {...layout} validateMessages={validateMessages} onFinish={this.onFinish}>
                        <Form.Item label="Admit Patient" name={['user', 'admit']} rules={[{ required: true, type: 'number' }]}>
                            <InputNumber style={{ width: '75%' }}/>
                        </Form.Item>

                        <Form.Item label="Free Beds" name={['user', 'beds']} rules={[{ required: true, type: 'number' }]}>
                            <InputNumber style={{ width: '75%' }}/>
                        </Form.Item>

                        <Form.Item label="Free Ventilators" name={['user', 'ventilator']} rules={[{ required: true, type: 'number' }]}>
                            <InputNumber style={{ width: '75%' }}/>
                        </Form.Item>

                        <Form.Item label="Waiting Patients" name={['user', 'waiting']} rules={[{ required: true, type: 'number' }]}>
                            <InputNumber style={{ width: '75%' }}/>
                        </Form.Item>

                        <Form.Item label="Delivered Patients" name={['user', 'delivered']} rules={[{ required: true, type: 'number' }]}>
                            <InputNumber style={{ width: '75%' }}/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit" loading={this.state.loading} ghost>
                                Submit
                        </Button>
                        </Form.Item>

                    </Form>
                </Modal>
            </div>

        );
    }
}


export default CenterModal; 