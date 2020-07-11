import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabsContent from '../common/tab/TabsContent'
import TabHeader from '../common/tab/TabHeader'
import TabContent from '../common/tab/TabContent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from './BillingCycleList'
import Form from './BillingCycleForm'
import { init, create, update, remove } from './billingCycleActions'

class BillingCycle extends Component {

    constructor(props) {
        super(props)
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" subTitle="Gerenciamento" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form submitLabel="Incluir" submitClass="primary" onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form submitLabel="Alterar" submitClass="info" onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form submitLabel="Excluir" submitClass="danger" onSubmit={this.props.remove} readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ init, create, update, remove }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
