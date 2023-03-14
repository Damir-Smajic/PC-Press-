import pcpress from '../../fixtures/pcPress.json'

class Uplatnica 

{

    // LOCATORS
    
    imePrezime = () => cy.get('[name="ime"]')
    ulicaBroj = () => cy.get('[name="adresa"]')
    postanskiBroj = () => cy.get('[name="postbroj"]')
    grad = () => cy.get('[name="grad"]')
    telefon = () => cy.get('[name="telefon"]')
    email = () => cy.get('[name="email"]')
    napomena = () => cy.get('[name="napomena"]')
    narucujemButton = () => cy.get('[type="submit"]') 
    odustajemButton = () => cy.get('[value="Odustajem"]')
    xcloseIspisButton = () => cy.get('[src="images/closeispis.png"]')

    // ACTIONS

    imePrezimeType (imeprezime) {
        this.imePrezime().type(imeprezime)
    }

    ulicaBrojType (ulicabroj) {
        this.ulicaBroj().type(ulicabroj)
    }

    postanskiBrojType(postanskibroj) {
        this.postanskiBroj().type(postanskibroj)
    }

    gradType(grad) {
        this.grad().type(grad)
    }

    telefonType(telefon) {
        this.telefon().type(telefon)
    }

    emailType(email) {
        this.email().type(email)
    }

    napomenaType (napomena) {
        this.napomena().type(napomena)
    }

    narucujemButtonClick () {
        this.narucujemButton().first().click()
    }

    odustajemButtonClick () {
        this.odustajemButton().eq(0).click()
    }

    xcloseIspisButtonClick () {
        this.xcloseIspisButton().eq(1).click()
    }

    // MINIMAL VALUES UPLATNICA FORM 

    uplatnicaMinimalValues () {
        this.imePrezimeType(pcpress.minimum.imeprezime)
        this.ulicaBrojType(pcpress.minimum.ulicaibroj)
        this.postanskiBrojType(pcpress.minimum.postanskibroj)
        this.gradType(pcpress.minimum.grad)
        this.telefonType(pcpress.minimum.telefon)
        this.emailType(pcpress.minimum.email)
        this.narucujemButtonClick()
    }

    uplatnicaMaximumValues () {

        this.imePrezimeType(pcpress.maximum.imeprezime)
        this.ulicaBrojType(pcpress.maximum.ulicaibroj)
        this.postanskiBrojType(pcpress.maximum.postanskibroj)
        this.gradType(pcpress.maximum.grad)
        this.telefonType(pcpress.maximum.telefon)
        this.emailType(pcpress.maximum.email)
        this.napomenaType(pcpress.maximum.napomena)
        this.narucujemButtonClick()
    }
        
    uplatnicaAboveMinimum () {

        this.imePrezimeType(pcpress.aboveminimum.imeprezime)
        this.ulicaBrojType(pcpress.aboveminimum.ulicaibroj)
        this.postanskiBrojType(pcpress.aboveminimum.postanskibroj)
        this.gradType(pcpress.aboveminimum.grad)
        this.telefonType(pcpress.aboveminimum.telefon)
        this.emailType(pcpress.aboveminimum.email)
        this.narucujemButtonClick()
    }

    uplatnicaBellowMaximum () {

        this.imePrezimeType(pcpress.bellowmaximum.imeprezime)
        this.ulicaBrojType(pcpress.bellowmaximum.ulicaibroj)
        this.postanskiBrojType(pcpress.bellowmaximum.postanskibroj)
        this.gradType(pcpress.bellowmaximum.grad)
        this.telefonType(pcpress.bellowmaximum.telefon)
        this.emailType(pcpress.bellowmaximum.email)
        this.narucujemButtonClick()
    }

    uplatnicaNominal () {

        this.imePrezimeType(pcpress.nominal.imeprezime)
        this.ulicaBrojType(pcpress.nominal.ulicaibroj)
        this.postanskiBrojType(pcpress.nominal.postanskibroj)
        this.gradType(pcpress.nominal.grad)
        this.telefonType(pcpress.nominal.telefon)
        this.emailType(pcpress.nominal.email)
        this.narucujemButtonClick()
    }
}

const uplatnica = new Uplatnica ()

export default uplatnica