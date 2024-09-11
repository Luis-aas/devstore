describe('adicionar ao carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve ser capaz de navegar até a página do produto e adicioná-lo ao carrinho', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })

  it('não deve contar produtos duplicados no carrinho', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')
    cy.contains('Adicionar ao Carrinho').click()
    cy.contains('Adicionar ao Carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })

  it('deve ser capaz de pesquisar um produto e adicioná-lo ao carrinho', () => {
    cy.searchByQuery('camiseta')

    cy.get('a[href^="/product"]').first().click()

    cy.url().should('include', '/product')

    cy.contains('Adicionar ao Carrinho').click()

    cy.contains('Carrinho (1)').should('exist')
  })
})
