import React, { Component } from 'react'

import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'
import ValueBox from '../common/widget/ValueBox'

export default ({ credit, debt }) => {

    const validCredit = (isNaN(credit) ? 0 : credit)
    const validDebt = (isNaN(debt) ? 0 : debt)
    const validConsolidated = (validCredit - validDebt)

    return (
        <Grid cols="12">
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox cols="12 4" color="green" icon="bank"
                        value={`R$ ${validCredit.toLocaleString()}`} text="Total de Créditos" />

                    <ValueBox cols="12 4" color="red" icon="credit-card"
                        value={`R$ ${validDebt.toLocaleString()}`} text="Total de Débitos" />

                    <ValueBox cols="12 4" color="blue" icon="money"
                        value={`R$ ${validConsolidated.toLocaleString()}`} text="Valor Consolidado" />
                </Row>
            </fieldset>
        </Grid>
    )
}