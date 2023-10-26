class PedidoPage {

    FazerPedido(dados){
        //ações do método
        cy.adicionarProduto(dados.produto,dados.quantidade,dados.tamanho,dados.cor)
        cy.get('#primary-menu > .menu-item-629 > a').click()
    }
    FazerCheckout(dados){
        cy.preencherdadoscheckout(dados)
        cy.get('#place_order').click()
    }
}

export default new PedidoPage()