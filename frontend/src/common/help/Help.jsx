import './help.css'
import React from 'react'

export default props => (
    <div className="help container-fluid">
        <div className="page-header">
            <h1>Perguntas Frequentes <small>Para te ajudar caso precise <strong><i className="fa fa-smile-o fa-lg text-primary" aria-hidden="true"></i></strong></small></h1>
        </div>

        <div className="panel panel-default">
            <div className="panel-heading"><h2 className="panel-title">O que são créditos?</h2></div>
            <div className="panel-body">
                Crédito, é tudo aquilo classificado como algo que gera entrada de patrimônio financeiro para você, ou seja, seu salário, algum investimento que você possa ter, algum dinheiro que alguém devia e que foi pago. Ou seja, tudo aquilo que soma valor financeiro à suas despesas.
            </div>
        </div>

        <div className="panel panel-default">
            <div className="panel-heading"><h2 className="panel-title">O que são débitos?</h2></div>
            <div className="panel-body">
                Ao contrário do crédito, o qual soma valor, o débito por sua vez, subtrai valor. É tudo aquilo classificado como algo que gera saída de patrimônio financeiro para você, ou seja, suas contas fixas de água e luz, por exemplo. Uma compra de algo material, parcelas de cartão, etc.
            </div>
        </div>

        <div className="panel panel-default">
            <div className="panel-heading"><h2 className="panel-title">O que é o valor consolidado?</h2></div>
            <div className="panel-body">
                O valor consolidado, é o valor que sobra entre a subtração da soma de todos os créditos e da soma de todos os débitos. Ou seja basicamente é o valor que sobra depois de você ter pago tudo o que precisa pagar naquele ciclo de pagamento.
            </div>
        </div>
    </div>
)