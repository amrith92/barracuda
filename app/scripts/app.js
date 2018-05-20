import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Container, Row, Heading } from 'rebass';

import ClusterView from './cluster/cluster';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <Provider>
        <Container>
          <Row>
            <Heading is='h1'>Welcome!</Heading>
          </Row>
          <Row>
            <ClusterView/>
          </Row>
          <Row>
            <Heading is='h3'>Tool Box</Heading>
          </Row>
        </Container>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
