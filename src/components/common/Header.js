import React from "react";
import { PageHeader, Button } from "antd";
import { withRouter } from 'react-router-dom';

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    logout = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <PageHeader
                style={{ background: "#fff" }}
                // title={this.props.name}
                extra={[
                    <Button type="danger" onClick={this.logout}>
                        Logout
              </Button>,
                ]}
            >

            </PageHeader>
        );
    }
}

export default withRouter(AppHeader);