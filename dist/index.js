"use strict";
let myObject = {};
class MyClass {
    constructor() {
        this.innerClassProperty = {
            property: 'test1',
            secondProperty: false,
            thirdProperty: 420
        };
    }
    addElement(element) {
        if (!this.innerClassProperty.array) {
            this.innerClassProperty.array = [];
        }
        this.innerClassProperty.array.push(element);
    }
    getValues() {
        console.table(this.innerClassProperty);
    }
}
let myInstance = new MyClass();
myInstance.addElement(420);
myInstance.addElement(880.000099);
//myInstance.innerClassProperty.property = 'MODIFIED';
myInstance.getValues();
