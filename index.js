"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userId;
userId = 45;
console.log(userId);
var names = ["siva", "praveen", "ravi"];
//Return type for a function
var value = names.map(function (name) {
    return name.toUpperCase();
});
function func1(name) {
    return "my name is ".concat(name);
}
console.log(value);
console.log(func1("praveen"));
var newUser = {
    name: "siva",
    Age: 22,
    isAdmin: false
};
function CreateUser(profile) {
    var user = {
        name: profile.name + " Praveen",
        Age: profile.Age,
        isAdmin: profile.isAdmin
    };
    return user;
}
var user = CreateUser(newUser);
console.log(user);
