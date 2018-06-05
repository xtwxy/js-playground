var module = {
    x: 42,
    getX: function() {
        return this.x;
    },
    setX: function(x) {
        this.x = x;
    }
};

var unboundGetX = module.getX;
var boundGetX = unboundGetX.bind(module);
var unboundSetX = module.setX;
var boundSetX = unboundSetX.bind(module);
var boundSetX24 = unboundSetX.bind(module, 24);

console.log('unboundGetX() = ' + unboundGetX());
console.log('boundGetX() = ' + boundGetX());
console.log('unboundSetX() = ' + unboundSetX());
console.log('module.x = ' + module.x);
console.log('boundSetX(12) = ' + boundSetX(12));
console.log('module.x = ' + module.x);
console.log('boundSetX24() = ' + boundSetX24());
console.log('module.x = ' + module.x);


