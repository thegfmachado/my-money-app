import { combineReducers } from 'redux'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer
})

export default rootReducer 