import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';

import {
    HomeOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';

import Patient from './components/patient-list/Patient';
import Home from './components/home/Home'
import Login from './components/login/Login'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class RouterApp extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>

                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <HomeOutlined />
                                <span>Home</span>
                                <Link to="/home" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <UnorderedListOutlined />
                                <span>Patient</span>
                                <Link to="/patient" />
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Switch>
                                <Route path="/login" component={Login}/>
                                <Route path="/home" component={Home} />
                                <Route path="/patient" component={Patient} />
                            </Switch>

                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Hoola ©2020
                        </Footer>
                    </Layout>

                </Layout>
            </Router>
        );
    }
}

export default RouterApp;