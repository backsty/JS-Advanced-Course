export default class Validator {
    validateUsername(un) {
        this.un = un;
        const re = /^[a-zA-Z][a-zA-Z0-9\-_]*$/;
        const consecutiveDigitsRegex = /[0-9]{4}/;
        const startEndRegex = /^[0-9]|[_0-9]$/;
    
        return re.exec(this.un) !== null && !consecutiveDigitsRegex.test(this.un) && !startEndRegex.test(this.un);
    }

    cleanPhoneNumber(pn) {
        return pn.replace(/[- _/()]/g, '').replace(/^(8)/, '+7');
    }
}
