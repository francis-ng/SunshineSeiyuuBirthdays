import React, { Component } from 'react';
import './../css/Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.target = new Date(this.props.date)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var timeLeft = this.getTimeLeft();
        this.setState({
            days: timeLeft.days,
            hours: timeLeft.hours,
            minutes: timeLeft.minutes,
            seconds: timeLeft.seconds
        });
    }

    convertMS(ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s %= 60;
        h = Math.floor(m / 60);
        m %= 60;
        d = Math.floor(h / 24);
        h %= 24;
        return { days: d, hours: h, minutes: m, seconds: s };
    }

    getTimeLeft() {
        var today = new Date();
        var birthday = this.target;
        if ((today.getMonth() == birthday.getMonth() && today.getDate() > birthday.getDate()) || today.getMonth() > birthday.getMonth()) {
            birthday.setFullYear(today.getFullYear() + 1);
        }
        else {
            birthday.setFullYear(today.getFullYear());
        }
        var diff = birthday.getTime() - today.getTime();
        return this.convertMS(diff);
    }

    render() {
        return (
            <div className="Timer">
                <span className="Timer-Text">{this.state.days} days {this.state.hours} hours {this.state.minutes} minutes {this.state.seconds} seconds</span>
            </div>
        );
    }
}

export default Timer;