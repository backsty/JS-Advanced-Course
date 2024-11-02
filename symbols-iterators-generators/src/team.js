export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        this.members.push(character);
    }

    ///////////////////////
    //Символы & итераторы//
    ///////////////////////

    [Symbol.iterator]() {
        const charList = Array.from(this.members);
        let current = 0;
        const end = charList.lenght - 1;
        return {
            next() {
                if (current <= end && current >= 0) {
                    return {
                        done: false,
                        value: charList[current++],
                    };
                }
                return {
                    done: true,
                    value: undefined,
                };
            },
        }
    }

    ////////////////////////
    //Символы и генераторы//
    ////////////////////////

    *[Symbol.iterator]() {
        for (const member of this.members) {
            yield member;
        }
    }
}
