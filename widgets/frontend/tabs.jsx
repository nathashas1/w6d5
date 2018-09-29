import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabIdx: 0 };
    this.props.tabData
  }

  render() {
    return (
      <div>
        <ul>
          <h1>{this.props.title}</h1>
        </ul>
      </div>
    );
  }
}
