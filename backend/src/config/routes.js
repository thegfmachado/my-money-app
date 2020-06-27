const express = requires('express')

module.exports = function (server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}