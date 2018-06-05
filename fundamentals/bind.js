var module = {
    x: 42,
    getX: function() {
        return this.x;
    },
    setX: function(x) {
        this.x = x;
    },
    setXTimesY: function(x, y) {
        this.x = x * y;
    }
};

var unboundGetX = module.getX;
var boundGetX = unboundGetX.bind(module);
var unboundSetX = module.setX;
var boundSetX = unboundSetX.bind(module);
var boundSetX24 = unboundSetX.bind(module, 24);
var boundSetX25TimesY = module.setXTimesY.bind(module, 25);

console.log('unboundGetX() = ' + unboundGetX());
console.log('boundGetX() = ' + boundGetX());
console.log('unboundSetX() = ' + unboundSetX());
console.log('module.x = ' + module.x);
console.log('boundSetX(12) = ' + boundSetX(12));
console.log('module.x = ' + module.x);
console.log('boundSetX24() = ' + boundSetX24());
console.log('module.x = ' + module.x);

console.log('boundSetX25TimesY() = ' + boundSetX25TimesY(4));
console.log('module.x = ' + module.x);


