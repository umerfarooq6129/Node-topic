const EventEmitter = require("events");

const event = new EventEmitter();

event.on("message", () => {
  console.log("my name is umer");
});

event.emit("message", "Hello World");