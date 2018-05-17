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

## Pattern Matching with Regular Expressions.

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
