import axios from 'axios'
import consts from '../consts'

export function getSummary() {
    const userId = JSON.parse(localStorage.getItem('_mymoney_user'))._id
    const request = axios.post(`${consts.API_URL}/billingCycles/summary`, { userId })
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}