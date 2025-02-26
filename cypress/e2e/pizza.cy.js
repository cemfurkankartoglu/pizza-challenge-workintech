describe('Form testleri', () => {

    beforeEach('sipariş sayfasına gider', () => {
        cy.visit('http://localhost:5173/order');
    });

    it('isim alanına metin girer', () => {
        cy.get('input[name="isim"]').type("erhan");
    });

    it("5 malzeme seçer", () => {
        cy.get('input[id="sosis"]').click();
        cy.get('input[id="sogan"]').click();
        cy.get('input[id="misir"]').click();
        cy.get('input[id="sucuk"]').click();
        cy.get('input[id="kabak"]').click();
    })

    it('boyut seçer', () => {
        cy.get('input[value="small"]').click();
    });

    it('hamur seçer', () => {
        cy.get('option[value="normal"]').click();
    });

    it("formu gönderir", () => {
        cy.get('.btn-siparis').should('be.visible').click()
    })

});