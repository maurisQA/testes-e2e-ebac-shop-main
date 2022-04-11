/// <reference types="cypress" />


describe('Página de proodutos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.click()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt').click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2559 > .product-block').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        cy.get('#billing_first_name').clear().type('Mauricio')
        cy.get('#billing_last_name').clear().type('Figueiredo')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')
    });


});

