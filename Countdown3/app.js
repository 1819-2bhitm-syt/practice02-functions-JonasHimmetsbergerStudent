const countdown = require("./countdown");

let helloWorld = function(){
    console.log("Hallo Welt!")
};

countdown.setCountdown(helloWorld, 10);
countdown.setDecrementsPerSecond(3);
