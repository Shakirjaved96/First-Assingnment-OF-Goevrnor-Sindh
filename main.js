// //Assingment Solution
// Task no:2
//ersonal Message: Store a person’s name in a variable, and print a message to that person.
//our message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let personName: string = "Eric";
// console.log('Hello $(personName), would you like to learn some Python today?' );
;
function createCar(manufacturer, model, color, year) {
    var extras = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        extras[_i - 4] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, color: color, year: year };
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Example
var myCar = createCar("Toyota", "Camry", "black", "2021");
console.log(myCar);
