class MainPage {


    getNewArrival() {
        return '.nav-primary > :nth-child(10)';
    }

    getClothing() {
        return ':nth-child(12)';
    }

    getShoes() {
        return ':nth-child(13)';
    }

    getAccessories() {
        return ':nth-child(15)';
    }
    getNewSeason() {
        return ':nth-child(16)';
    }
    getVacation() {
        return '.nav-primary > :nth-child(17)';
    }
    getSale() {
        return '.active';
    }
    getMainMenus() {
        return '.meta-list-department';
    }

    getNonCategoryLinksList() {
        return '.meta-list';
    }

    getFooterLinks() {
        return '.footer-links';
    }

    getPaymentLink() {
        return '#footer-payment';
    }

    getDeliveryLink() {
        return '#footer-delivery';
    }

    getImprintLink() {
        return '#imprint';
    }

}

export default MainPage;