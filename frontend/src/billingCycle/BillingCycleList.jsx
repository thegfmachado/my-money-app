import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showTab } from './billingCycleActions'
import IconButton from '../common/widget/IconButton'

class BillingCycleList extends Component {

    constructor(props) {
        super(props)
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <IconButton btnClass="warning" icon="pencil" onClick={() => this.props.showTab('tabUpdate', bc)} />
                    <IconButton btnClass="danger" icon="trash-o" onClick={() => this.props.showTab('tabDelete', bc)} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)