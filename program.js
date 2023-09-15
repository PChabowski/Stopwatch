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
    interval: null,
    started: false,
    start: function() {
        if(!this.started) {
            this.started = true;
            this.count();
        }
    },
    stop: function() {
        clearInterval(this.interval);
        timer.started = false;
    },
    count: function() {
        timer.display();
        timer.sec++;
        this.interval = setInterval(this.count, 1000);
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
        timer.innerHTML = this.addZero(this.hr) + ":" + this.addZero(this.min) + ":" + this.addZero(this.sec);      
    },
    addZero: function(n) {
        if (n < 10) {
            return "0" + n;
        } else { return n}
    }
};