import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { createNumberMask } from 'redux-form-input-masks';

import Grid from '../common/layout/Grid'
import Input from '../common/form/Input'
import IconButton from '../common/widget/IconButton'
import If from '../common/operator/If'
import Select from '../common/form/Select';

const currencyMask = createNumberMask({
    prefix: 'R$ ',
    decimalPlaces: 2,
    locale: 'pt-BR',
})

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.items.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const items = this.props.items || []
        const field = this.props.field

        return items.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${field}[${index}].name`} component={Input}
                    placeholder="Informe o nome" readOnly={this.props.readOnly} /></td>

                <td><Field name={`${field}[${index}].value`} component={Input}
                    placeholder="Informe o valor" readOnly={this.props.readOnly} {...currencyMask} /></td>

                <If test={this.props.showStatus}>
                    <td>
                        <Field name={`${field}[${index}].status`} component={Select}
                            placeholder="Informe o status" readOnly={this.props.readOnly}>

                            <option value="">Selecione uma opção...</option>
                            <option value="PENDENTE">Pendente</option>
                            <option value="AGENDADO">Agendado</option>
                            <option value="PAGO">Pago</option>
                        </Field>
                    </td>
                </If>

                <td>
                    <IconButton btnClass="success" icon="plus"
                        onClick={() => this.add(index + 1)} />

                    <IconButton btnClass="warning" icon="clone"
                        onClick={() => this.add(index + 1, item)} />

                    <IconButton btnClass="danger" icon="trash-o"
                        onClick={() => this.remove(index)} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="table-fields">Nome</th>
                                    <th className="table-fields">Valor</th>
                                    <If test={this.props.showStatus}>
                                        <th className="table-fields">Status</th>
                                    </If>
                                    <th className="table-actions">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    </div>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchtoProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchtoProps)(ItemList)