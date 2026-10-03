describe('Filtrado de productos', () => {
  it('permite filtrar productos por categoría', () => {
    cy.intercept('GET', 'https://fakestoreapi.com/products', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: 'Notebook',
          price: 999,
          description: 'Notebook de prueba',
          category: 'electronics',
          image: 'https://example.com/notebook.jpg',
        },
        {
          id: 2,
          title: 'Camiseta',
          price: 29,
          description: 'Camiseta de prueba',
          category: "men's clothing",
          image: 'https://example.com/shirt.jpg',
        },
      ],
    }).as('getProducts')

    cy.visit('/')

    cy.wait('@getProducts')

    cy.contains('Productos').should('be.visible')

    cy.get('[data-cy="category-filter"]').find('input').should('exist').click({ force: true })

    cy.contains('electronics').should('exist').click({ force: true })

    cy.contains('Notebook').should('be.visible')
    cy.contains('Camiseta').should('not.exist')
  })
})
