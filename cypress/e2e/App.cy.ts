describe('App tests e2e', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Should be able to navigate to Pokémons List', () => {
		cy.contains('Access my list').click();

		cy.url().should('include', '/list');
	});

	it('Should be able to navigate to Pokemons List and favorite a pokémon', () => {
		cy.contains('Access my list').click();

		cy.url().should('include', '/list');

		cy.intercept('**').as('requests');

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Favorite').click();

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Unfavorite').should('contain', 'Unfavorite');
	});

	it('Should be able to navigate to Pokemons List, favorite a pokémon and remove from favorite', () => {
		cy.contains('Access my list').click();

		cy.url().should('include', '/list');
		cy.intercept('**').as('requests');

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Favorite').click();

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Unfavorite').click();

		cy.contains('Favorite').should('contain', 'Favorite');
	});

	it('Should be able to navigate to Pokemons List, favorite a pokémon, go back to home and when back to list, I have to be able to see my favorite pokemons.', () => {
		cy.contains('Access my list').click();

		cy.url().should('include', '/list');
		cy.intercept('**').as('requests');

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Favorite').click();

		cy.contains('Go back to home').click();

		cy.url().should('eq', 'http://localhost:3000/');

		cy.contains('Access my list').click();

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Unfavorite').should('contain', 'Unfavorite');
	});

	it('Should be able to navigate to Pokemons List, favorite a pokémon, reload the page and when the page finishes loading, I have to be able to see my favorite pokemons.', () => {
		cy.contains('Access my list').click();

		cy.url().should('include', '/list');
		cy.intercept('**').as('requests');

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Favorite').click();

		cy.saveLocalStorage();

		cy.reload();

		cy.restoreLocalStorage();

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Unfavorite').should('contain', 'Unfavorite');
	});

	it('Should be able to navigate to Pokemons List, favorite a pokémon, go back to home,reload the page and when navigate to list, I have to be able to see my favorite pokemons.', () => {
		cy.contains('Access my list').click();

		cy.url().should('include', '/list');

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Favorite').click();

		cy.contains('Go back to home').click();

		cy.url().should('eq', 'http://localhost:3000/');

		cy.saveLocalStorage();

		cy.reload();

		cy.restoreLocalStorage();

		cy.contains('Access my list').click();

		cy.get('img:eq(0)')
			.should('have.attr', 'alt', 'Pokemon Image')
			.trigger('mouseover');

		cy.contains('Unfavorite').should('contain', 'Unfavorite');
	});
});

export {};
