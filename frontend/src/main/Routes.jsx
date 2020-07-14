import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'
import Help from '../common/help/Help'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Route path='/help' component={Help} />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
)