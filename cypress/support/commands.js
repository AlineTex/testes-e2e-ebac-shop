// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProduto', (produto,quantidade,tamanho,cor)=>{
    cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
})

Cypress.Commands.add('preencherdadoscheckout', (dados)=>{
    cy.get('#billing_first_name').clear().type(dados.nome)
    cy.get('#billing_last_name').clear().type(dados.sobrenome)
    cy.get('#billing_company').clear().type(dados.empresa)
    cy.get('#select2-billing_country-container').click().type(dados.pais+'{enter}')
    cy.get('#billing_address_1').clear().type(dados.endereco)
    cy.get('#billing_address_2').clear().type(dados.numero)
    cy.get('#billing_city').clear().type(dados.cidade)
    cy.get('#select2-billing_state-container').click().type(dados.estado+'{enter}')
    cy.get('#billing_postcode').clear().type(dados.cep)
    cy.get('#billing_phone').clear().type(dados.telefone)
    cy.get('#billing_email').clear().type(dados.email)
    cy.get('#order_comments').clear().type(dados.informacoesadicionais)
    cy.get('#payment_method_'+dados.metododepagamento).click()
    cy.get('#terms').check()
    

       
})