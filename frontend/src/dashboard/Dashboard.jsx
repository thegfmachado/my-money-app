import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" subTitle="v1.0" />
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard