import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize, destroy } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {
    const userId = JSON.parse(localStorage.getItem('_mymoney_user'))._id
    const request = axios.get(`${BASE_URL}/billingCycles?userId=${userId}`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        const userId = JSON.parse(localStorage.getItem('_mymoney_user'))._id

        values = { ...values, userId }

        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success("Sucesso", "Operação realizada com sucesso!")
                dispatch(init())
            })
            .catch(e => e.response.data.errors.forEach(error => toastr.error("Erro", error)))

    }
}

export function showTab(tabId, billingCycle) {
    return [
        showTabs(tabId),
        selectTab(tabId),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}