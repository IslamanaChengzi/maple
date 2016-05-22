import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        22
        {this.props.children}
      </div>
    );
  }
}

export default App;