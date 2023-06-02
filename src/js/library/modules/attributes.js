import $ from "../core";

$.prototype.addAttr = function (AttrName, AttrValue) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) continue;

        this[i].setAttribute(AttrName, AttrValue);
    }

    return this;
};

$.prototype.removeAttr = function (AttrName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) continue;
        this[i].removeAttribute(AttrName);
    }

    return this;
};

$.prototype.getAttr = function (AttrName) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!this[i].attributes) continue;
        arr.push(this[i].getAttribute(AttrName));
    }

    return arr;
};