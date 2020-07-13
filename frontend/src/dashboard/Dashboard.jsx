import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary

        const validCredit = (isNaN(credit) ? 0 : credit)
        const validDebt = (isNaN(debt) ? 0 : debt)
        const validConsolidated = (validCredit - validDebt)

        return (
            <div>
                <ContentHeader title="Dashboard" subTitle="Totais" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank"
                            value={`R$ ${validCredit.toLocaleString()}`} text="Total de Créditos" />

                        <ValueBox cols="12 4" color="red" icon="credit-card"
                            value={`R$ ${validDebt.toLocaleString()}`} text="Total de Débitos" />

                        <ValueBox cols="12 4" color="blue" icon="money"
                            value={`R$ ${validConsolidated.toLocaleString()}`} text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)