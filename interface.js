"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function start1() {
    console.log("start interface");
    return " ";
}
var details = function (person) {
    var details = {
        name: person.name,
        courses: 5,
        isPaid: true
    };
    console.log(details);
    return details;
};
var praveen = { name: "praveen", age: 23, start: start1, func: details };
praveen.start();
praveen.func(praveen);
