class Prodavnica

{

    // LOCATORS

    kolicinaMinimal = () => cy.get('#kolselektor1')
    kolicinaMaximal = () => cy.get('#kolselektor0')
    kolicina2 = () => cy.get('#kolselektor15')
    kolicina99 = () => cy.get('#kolselektor4')
    kolicina50 = () => cy.get('#kolselektor14')
    errorPopUp = () => cy.get('#proverainside')
    errorNarudzbenica = () => cy.get('#doubleprovera')

    pc11brojeva = () => cy.get('#arselektor1') 
    pc11brojevaKupujem = () => cy.get('#artikal1bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')
    
    polugodisnjaPretplataNaCasopisPC6Brojeva = () => cy.get('#arselektor0')
    polugodisnjaPretplataNaCasopisPC6BrojevaKupujem = () => cy.get('#artikal10bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')

    pretplataNaDigitalnoIzdanjePolugodisnja = () => cy.get('#arselektor15')
    pretplataNaDigitalnoIzdanjePolugodisnjaKupujem = () => cy.get('#artikal15bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')

    knjiga50Godina = () => cy.get('#arselektor4')
    knjiga50GodinaKupujem = () => cy.get('#artikal4bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')

    arhivaBrojevaCasopisaPC = () => cy.get('input[value="7"]')
    arhivaBrojevaCasopisaPCDropdown = () => cy.get('#disabled_selectPCstari')
    arhivaBrojevaCasopisaPCKupujem = () => cy.get('#artikal6bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')

    aktuelniBrojCasopisaPC = () => cy.get('input[value="6"]')
    aktuelniBrojCasopisaPCDropdown = () => cy.get('#disabled_selectPCnovi')
    aktuelniBrojCasopisaPCKupujem = () => cy.get('#artikal5bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')

    pretplataNaDigitalnoIzdanjeGodisnja = () => cy.get('#arselektor14')
    pretplataNaDigitalnoIzdanjeGodisnjaKupujem = () => cy.get('#artikal14bg > .naslovna > tbody > :nth-child(2) > .naslovnacheck > img')
  
    pcLogo = () => cy.get('#logo')
    
    feedIcon = () => cy.get('[href="http://pcpress.rs/feed/"]')

    pcLogoFooter = () => cy.get('[alt="PC Online"]')

    newsFeed = () => cy.get('[href="http://pcpress.rs/newsletter/"]')

    faceBook = () => cy.get('[href="http://facebook.com/pcpress.rs"]')

    twitter = () => cy.get('[href="http://twitter.com/PCPressRS"]')

    pravilaKoristenja = () => cy.get('[href="http://pcpress.rs/pravila-koriscenja-sajta/"]')


    // ACTIONS

    // TC_1

    pc11brojevaCheck () {
        this.pc11brojeva().check()
    }

    kolicinaMinimalType(kolicina) {
        this.kolicinaMinimal().clear().type(kolicina)
    }

    pc11brojevaKupujemClick () {
        this.pc11brojevaKupujem().click()
    }

    // TC_2

    polugodisnjaCheck() {
        this.polugodisnjaPretplataNaCasopisPC6Brojeva().check()
    }

    kolicinaMaximalType (kolicina) {
        this.kolicinaMaximal().clear().type(kolicina)
    }

    polugodisnjaKupujemClick () {
        this.polugodisnjaPretplataNaCasopisPC6BrojevaKupujem().click()
    }

    // TC_3

    pretplataNaDigitalnoIzdanjePolugodisnjaCheck () {
        this.pretplataNaDigitalnoIzdanjePolugodisnja().check()
    }

    pretplataNaDigitalnoIzdanjePolugodisnjaKupujemClick() {
        this.pretplataNaDigitalnoIzdanjePolugodisnjaKupujem().click()
    }

    kolicina2Type (kolicina) {
        this.kolicina2().clear().type(kolicina)
    }

    // TC_4

    knjiga50GodinaCheck() {
        this.knjiga50Godina().check()
    }

    knjiga50GodinaKupujemClick() {
        this.knjiga50GodinaKupujem().click()
    }

    kolicina99Type (kolicina) {
        this.kolicina99().clear().type(kolicina)
    }

    // TC_5

    arhivaBrojevaCasopisaPCCheck () {
        this.arhivaBrojevaCasopisaPC().check()
    }

    arhivaBrojevaCasopisaPCDropdownSelect () {
        this.arhivaBrojevaCasopisaPCDropdown().select('ar_7_1')
    }

    arhivaBrojevaCasopisaPCKupujemClick () {
        this.arhivaBrojevaCasopisaPCKupujem().click()
    }

    // TC_6

    aktuelniBrojCasopisaPCCheck () {
        this.aktuelniBrojCasopisaPC().check()
    }

    aktuelniBrojCasopisaPCDropdownSelect () {
        this.aktuelniBrojCasopisaPCDropdown().select('Broj 306')
    }

    pretplataNaDigitalnoIzdanjeGodisnjaCheck () {
        this.pretplataNaDigitalnoIzdanjeGodisnja().check()
    }

    kolicina50Type (kolicina) {
        this.kolicina50().clear().type(kolicina)
    }

    pretplataNaDigitalnoIzdanjeGodisnjaKupujemClick() {
        this.pretplataNaDigitalnoIzdanjeGodisnjaKupujem().click()
    }

    // TC_7

    pcLogoClick () {
        this.pcLogo().click()
    }

    // TC_8

    feedIconClick () {
        this.feedIcon().invoke('removeAttr', 'target').click()
    }

    // TC_9

    pcLogoFooterClick () {
        this.pcLogoFooter().eq(1).click()
    }

    // TC_10

    newsFeedClick () {
        this.newsFeed().invoke('removeAttr', 'target').click()
    }

    // TC_11
    
    faceBookClick () {
        this.faceBook().invoke('removeAttr', 'target').click()
    }

    // TC_12

    twitterClick () {
        this.twitter().invoke('removeAttr', 'target').click()
    }

    // TC_13

    pravilaKoristenjaClick () {
        this.pravilaKoristenja().invoke('removeAttr', 'target'). click()
    }

    // TC_21 

    aktuelniBrojCasopisaPCKupujemClick () {
        this.aktuelniBrojCasopisaPCKupujem().click()
    }


    // ASSERTIONS

    prodavnicaPageAssert () {
        cy.url().should('include', '/prodavnica')
    }

    kolicinaMinimalAssert () {
        this.kolicinaMinimal().should('have.value', '1')
    }

    pcHomePageAssert () {
        cy.url().should('contain', '/pcpress.rs')
    }

    feedPageAssert () {
        cy.get('body').should('not.have.html', 'div')
    }

    newsFeedAssert () {
        cy.request({
            url: 'https://pcpress.rs/newsletter/', 
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.eq(403)
          })
        
          cy.get('h1').should('have.text', 'Forbidden')
    }

    faceBookPageAssert () {
        cy.url().should('contain', 'facebook.com/')
    }

    twitterPageAssert () {
        cy.url().should('contain', 'twitter.com/')
    }

    pravilaKoristenjaPageAssert () {
        cy.url().should('contain', '/pravila-koriscenja-sajta')
    }

    errorPopUpAssert () {
        this.errorPopUp().should('exist')
    }

    errorNarudzbenicaAssert () {
        this.errorNarudzbenica().should('be.visible')
    }
}

const prodavnica = new Prodavnica ()

export default prodavnica