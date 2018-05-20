import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <div><h3>Yo!</h3></div>
    )
  }
}

ReactDOM.render(<Home/>, document.getElementById('app'));
