import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="clock">
        <h1 id="title">Our Clock</h1>
        <h1>{this.state.date.toString()}</h1>
      </div>
    );
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    const ticking = this.tick.bind(this);
    this.id = setInterval(ticking, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

}

export default Clock;
