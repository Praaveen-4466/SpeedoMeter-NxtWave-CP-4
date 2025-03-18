import React, { Component } from "react";

import "./SpeedMeter.css";

class SpeedMeter extends Component {
  state = { meter: 0 };

  onIncrease = () => {
    const { meter } = this.state;

    if (meter < 200) {
      this.setState((prevState) => ({ meter: prevState.meter + 10 }));
    }
  };

  onDecrease = () => {
    const { meter } = this.state;

    if (meter > 0) {
      this.setState((prevState) => ({ meter: prevState.meter - 10 }));
    }
  };

  render() {
    const { meter } = this.state;
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
        />
        <p className="paragraph">
          Speed is <span>{meter}</span> mph
        </p>
        <p className="para">Min speed is 0mph, Max limit is 200mph </p>
        <div className="d-flex flex-row justify-content-center button-container">
          <button className="btn button" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="btn buttons" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    );
  }
}

export default SpeedMeter;
