function Listener(name) {
    this.name = name;
    this.events = this.events || [];
}

Listener.prototype.handle = function(e) {
    console.log(this.name + ": handle " + e);
    this.events.push(e);
};

function EventSource(name) {
    this.name = name;
    this.subscribers = this.subscribers || {};
}

EventSource.prototype.subscribe = function(e, fn) {
    var l = this.subscribers[e] || [];
    l.push(fn);
    this.subscribers[e] = l;
};

EventSource.prototype.publish = function(e, o) {
    console.log(this.name + ": publish (" + e + ", " + o + ")");
    var l = this.subscribers[e] || [];
    l.forEach(function(t) { 
        t(o); 
    });
};

var l1 = new Listener("listener 1");
var l2 = new Listener("listener 2");
var e = new EventSource("event source");

e.subscribe('create', l1.handle.bind(l1));
e.publish('create', 'hello1');
e.publish('create', 'world1');

e.subscribe('update', l2.handle.bind(l2));
e.publish('update', 'hello2');
e.publish('update', 'world2');

console.log("l1.events = " + l1.events);
console.log("l2.events = " + l2.events);


