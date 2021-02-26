'use strict';

class First {
    constructor(){};

    hello() {
        console.log('Привет я метод родителя!');
    }
};

class Second extends First {
    hello() {
        super.hello();
        console.log('А я наследуемый метод!');
    }
};

const testObj = new Second();
testObj.hello();