const EventEmitter = require("events");

const emitter = new EventEmitter();


// Using on()
emitter.on("login", () => {
    console.log("on(): User logged in");
});


// Using once()
emitter.once("firstLogin", () => {
    console.log("once(): Welcome! This message will appear only once.");
});


// Trigger login event multiple times
console.log("Using on():");

emitter.emit("login");
emitter.emit("login");
emitter.emit("login");


// Trigger firstLogin event multiple times
console.log("\nUsing once():");

emitter.emit("firstLogin");
emitter.emit("firstLogin");
emitter.emit("firstLogin");