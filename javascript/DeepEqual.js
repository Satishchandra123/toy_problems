function deepEqual(a,b) {
    if(a == b) {
        return true;
    }
    else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
        if(Object.keys(a).length != Object.keys(b).length) {
            return false;
        } else {
            for (var property in a) {
                if (b.hasOwnProperty(property)) {
                    if (! deepEqual(a[property], b[property])) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            return true;
        }
    }
    return false;     
}

var x = 3;
var y = 3;
var z = 2;
var car1 = {type: "Honda", model: "City", color: "Black"};
var car2 = {type: "Honda", model: "City", color: "Red"};
var car3 = {type: "Honda", model: "Civik", color: "Black"};
var car4 = {type: "Honda", model: "Civik", color: "Black"};
console.log(deepEqual(x,y));
console.log(deepEqual(y,z));
console.log(deepEqual(car1, car2));
console.log(deepEqual(car3,car4));
console.log(deepEqual(car1, car4));
