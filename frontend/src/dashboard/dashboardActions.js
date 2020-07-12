import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const userId = JSON.parse(localStorage.getItem('_mymoney_user'))._id
    const request = axios.post(`${BASE_URL}/billingCycles/summary`, { userId })
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}