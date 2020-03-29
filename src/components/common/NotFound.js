import React from 'react';
import { Result, Button } from 'antd';

class NotFound extends React.Component {
    home = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                style={{ marginTop: 120 }}
                extra={<Button type="primary" onClick={this.home}>Back Home</Button>}
            />
        );
    }
}

export default NotFound;