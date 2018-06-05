# Fundamentals

## Adding and Removing Elements

```
var newMap = {};

console.log('toString' in newMap);  // true
console.log('to' in newMap);        // false

newMap['to'] = 'Hello';
console.log('to' in newMap);        // true

delete newMap['to'];
console.log('to' in newMap);        // false

delete newMap['toString'];
console.log('toString' in newMap);  // true, cannot delete builting elements.
```

## Iterating Object Properties

```
var obj = { 'key0': 'value0' };

obj['key1'] = 'value1';

for(o in obj) {
    console.log(o + " = " + obj[o]);
}
```

## Iterating Array Elements

```
var array = new Array("hello", "world");

console.log('array elements:');
for(o in array) {
    console.log(o + " = " + array[o]);
}

array['key1'] = 'value1';
array['key2'] = 'value2';

console.log('after adding properties:');
for(o in array) {
    console.log(o + " = " + array[o]);
}
```
The output is:
```
array elements:
0 = hello
1 = world
after adding properties:
0 = hello
1 = world
key1 = value1
key2 = value2
```


## Pattern Matching with Regular Expressions

```
> var pattern = /t\w*e/g;
> var searchString = "this the one of the most valuable object in this world.";
undefined
> pattern.exec(searchString);
[ 'the',
  index: 5,
  input: 'this the one of the most valuable object in this world.' ]
> pattern.exec(searchString);
[ 'the',
  index: 16,
  input: 'this the one of the most valuable object in this world.' ]
> pattern.exec(searchString);
null
```

## `Function.prototype.bind()`

```
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
```
Run the above code yields:
```
unboundGetX() = undefined
boundGetX() = 42
unboundSetX() = undefined
module.x = 42
boundSetX(12) = undefined
module.x = 12
boundSetX24() = undefined
module.x = 24
```
