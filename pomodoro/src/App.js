import React, { Component } from 'react';
import './App.css';


class Timer extends React.Component {
  render() {
    return (
      <h1 style={{ fontSize: 100 }}>25:00</h1>
    );
  }


}

class TimerLength extends React.Component {
  render() {
    return (
      <div class="col-md-4">
        <p class="text center lead">Session length</p>
        <div class="btn-group btn-group" role="group" aria-label="...">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" id="sessionMinus">-</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary disabled" id="session">25</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" id="sessionPlus">+</button>
          </div>
        </div>
      </div>
    );
  }
}

class BreakLength extends React.Component {

  render() {
    return (
      <div class="col-md-4">
        <p class="text center lead">Break length</p>
        <div class="btn-group btn-group" role="group" aria-label="...">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" id="breakMinus">-</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary disabled" id="theBreak">5</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" id="breakPlus">+</button>
          </div>
        </div>
      </div>
    );
  }

}

class StartButton extends React.Component {
  render() {
    return (
      <div style={{marginRight: 5}}>
        <button className="btn btn-success">Start</button>
      </div>
    );
  }
}

class StopButton extends React.Component {
  render() {
    return (
      <div style={{marginRight: 5}}>
        <button className="btn btn-danger">Stop</button>
      </div>
    );
  }
}

class ResetButton extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-secondary">Reset</button>
      </div>
    );
  }


}

class Pomodoro extends React.Component {
  render() {
    return (
      <div>
        <div class="row" style={{ paddingTop: 100 }}>
          <div class="col-md-3"></div>
          <BreakLength />
          <TimerLength />
        </div>
        <div class="row" style={{ paddingLeft: 50 }}>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <Timer />
          </div>
        </div>
        <div class="row">&nbsp;</div>
        <div class="row" style={{ paddingLeft: 100 }}>
          <div class="col-md-4"></div>
            <StopButton />
            <StartButton />
            <ResetButton />
        
        </div>
      </div>
    );
  }

}



export default Pomodoro;