/// <reference types="cypress" />

describe('testes para a home', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve localizar os inputs da home', () => {
    cy.get('input').should('have.length',3)
  })

  it('Deve incluir um novo contato', () => {
    cy.get('[type="text"]').type('Joao Victor')
    cy.get('[type="email"]').type('dev.jvcoliveira98@gmail.com')
    cy.get('[type="tel"]').type('19 987654321')
    cy.get('.adicionar').click()
    cy.get('.contato').last().should('contain', 'Joao Victor')
  })

  it('Deve editar um novo contato', () => {
    cy.get('.edit').first().click()
    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('Pedro')
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('pedro@gmail.com')
    cy.get('[type="tel"]').clear()
    cy.get('[type="tel"]').type('19 987153426')
    cy.get('.alterar').click()
    cy.get('.contato').should('contain', 'pedro')
  })

  it('Deve cancelar a edicao do contato', () => {
    cy.get('.edit').first().click()
    cy.get('.contato').eq(1).find('.edit').click()
    cy.get('.cancelar').click()
    cy.get('.contato').eq(1).should('contain', 'Bruna Costa')
  })

  it('Deve excluir o último contato da lista', () => {
    
    cy.get('.contato').then(($contatos) => {
      const quantidadeInicial = $contatos.length
      
      cy.get('.contato').last().within(() => {
        cy.get('.delete').click()
      })
      cy.get('.contato').should('have.length', quantidadeInicial - 1)
    })
  })
})
