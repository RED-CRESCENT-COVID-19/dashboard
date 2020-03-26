import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Layout, Menu, Button, AutoComplete, PageHeader } from "antd";
import Header from './components/common/Header';
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";



const {  Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class RouterApp extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={window.location.pathname} mode="inline">
            <Menu.Item key="/home">
              <HomeOutlined />
              <span>Home</span>
              <Link to="/home" />
            </Menu.Item>
            <Menu.Item key="/patient">
              <UnorderedListOutlined />
              <span>Patient</span>
              <Link to="/patient" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
        <Header />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {
              this.props.children
            }
          </Content>
          <Footer style={{ textAlign: "center" }}>Hoola ©2020</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default RouterApp;