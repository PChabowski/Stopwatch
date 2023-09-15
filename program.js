const person = {
    name: 'Agata',
    age: 32
};

function personData({name, age}) {
    const message = 'My name is ' + name + ' and a have ' + age + ' old year';
    return message;
}
window.onload = function() {
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const clear = document.querySelector("#clear");
    start.onclick = () => {timer.start()};
    stop.onclick = () => {timer.stop()};
    clear.onclick = () => {timer.clear()};
    timer.display();
};
  
const timer = {
    sec: 0,
    min: 0,
    hr: 0,
    interval: 0,
    started: false,
    start: function() {
        if(!this.started) {
            this.started = true;
            this.stoper();
        }
    },
    stop: function() {
        clearInterval(this.interval);
        timer.started = false;
    },
    stoper: function() {
        timer.display();
        timer.sec++;
        this.interval = setInterval(this.stoper, 1000);
    },
    clear: function() {
        this.stop();
        this.sec = 0;
        this.min = 0;
        this.hr = 0;
        this.display();
    },
    display: function() {
        const timer = document.querySelector("#timer");
        if (this.sec == 60) {
            this.sec = 0;
            this.min++;
        }
        if (this.min == 60) {
            this.min = 0;
            this.hr++;
        }
        timer.innerHTML = this.addZero(this.hr) + ":" + this.addZero(this.min) + ":" + this.addZero(this.sec) + ' / ' + personData(person);      
    },
    addZero: function(n) {
        if (n < 10) {
            return "0" + n;
        } else { return n}
    }
};