
import $ from "../core";

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) this[i].innerHTML = content;
        else return this[i].innerHTML;
    }
    return this;
}

$.prototype.eq = function (ind) {
    const swap = this[ind];
    const objLength = Object.keys(this).length; //  count all property at this object

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;

    return this;
}

$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = item => (item == this[0]);

    return childs.findIndex(findMyIndex);
}

$.prototype.find = function (selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) continue;

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength.length; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}
// {
//     0: node,// 
//     1: node, //
//     2: node, //
//     3: node, 
//     4: node 
// }

$.prototype.closEst = function (selector) {
    let counter = 0; 

    for (let i = this.length - 1; i >= 0; i--) {
        if (!this[i].closest(selector)) {
            this.length--;
            delete this[i];
        }
        else this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    if (this.length > 0) {
        for (; counter < objLength.length; counter++) {
            delete this[counter];
        }
    }

    return this;
}

$.prototype.siblings = function () {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) continue;
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength.length; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}