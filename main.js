Array.prototype.forEach2 = function (callback, thisValue) {
    let length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            callback.call(thisValue, this[i], i, this);
        }
    }
};
const colors = ["Red", "Blue", "Green"];
delete colors[1];
colors.forEach2(
    function (value, index, arr) {
        console.log(value);
        console.log(arr);
    },
    { id: 123 }
);
