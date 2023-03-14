import uplatnica from "./uplatnicaPage.cy.js"

class Narudzbenica 
{
    // LOCATORS

    predracunBroj = () => cy.get('.naslovbroj')
    prodavnicaPcLink = () => cy.get('[href="http://prodavnica.pcpress.rs"]')
    prodajaPCLink = () => cy.get('[href="mailto: prodaja@pcpress.rs"]')
    pcProdavniceLink = () => cy.get('[href="index.php"]')
    povratakNaVasuNarudzbenicuLink = () => cy.get('[href="javascript:history.go(-1)"]')
    
    // ACTIONS

    prodavnicaPcLinkClick() {
        this.prodavnicaPcLink().click()
    }

    prodajaPCLinkClick () {
        this.prodajaPCLink().click()
    }

    pcProdavniceClick() {
        this.pcProdavniceLink().eq(1).click()
    }

    povratakNaVasuNarudzbenicuLinkClick() {
        this.povratakNaVasuNarudzbenicuLink().click()
    }

    // ASSERTIONS

    predracunBrojAssert () {
        this.predracunBroj().should('include.text', 'Predračun')
    }

    narudzbenicaFormAssert () {
        uplatnica.imePrezime().should('exist')
    }
}

const narudzbenica = new Narudzbenica ()

export default narudzbenica