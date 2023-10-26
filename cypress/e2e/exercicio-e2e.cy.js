/// <reference types="cypress" />
import pedidoPage from '../support/page_objects/pedido.page';
import PedidoPage from '../support/page_objects/pedido.page'
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.fixture('produto').then(dados=>{
            PedidoPage.FazerPedido(dados[0])
            PedidoPage.FazerPedido(dados[1])
            PedidoPage.FazerPedido(dados[2])
            PedidoPage.FazerPedido(dados[3])
            cy.get('.dropdown-toggle > .mini-cart-items').click()
            cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
            cy.fixture('dadoscompra').then(dadospessoais=>{
                PedidoPage.FazerCheckout(dadospessoais)
                cy.get('.woocommerce-notice').should('contain','recebido')
            })
        })
        
    });


})
