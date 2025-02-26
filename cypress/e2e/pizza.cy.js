describe('Form testleri', () => {

    beforeEach('sipariş sayfasına gider', () => {
        cy.visit('http://localhost:5173/order');
    });

    it('isim alanına metin girer', () => {
        cy.get('input[name="isim"]').type("erhan").should('have.value', 'erhan');
    });

    it("5 malzeme seçer", () => {
        cy.get('input[id="sosis"]').click().should('be.checked');
        cy.get('input[id="sogan"]').click().should('be.checked');
        cy.get('input[id="misir"]').click().should('be.checked');
        cy.get('input[id="sucuk"]').click().should('be.checked');
        cy.get('input[id="kabak"]').click().should('be.checked');
    })

    it('boyut seçer', () => {
        cy.get('input[value="small"]').click().should('be.checked');
    });

    it('hamur seçer', () => {
        cy.get('select[name="hamur"]').select("normal").should('have.value', 'normal');
    });

    it("formu gönderir", () => {
        cy.get('input[name="isim"]').type("erhan");

        cy.get('input[id="sosis"]').click()
        cy.get('input[id="sogan"]').click()
        cy.get('input[id="misir"]').click()
        cy.get('input[id="sucuk"]').click()
        cy.get('input[id="kabak"]').click()

        cy.get('input[value="small"]').click()
        cy.get('select[name="hamur"]').select("normal")

        cy.get('.btn-siparis').click()

        cy.url().should('include', '/success');
    })

});