import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Container, Row, Box, Heading } from 'rebass';

import ClusterView from './cluster/cluster';
import QueryEditor from './query-editor';

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
          <Row>
            <QueryEditor height={800} />
          </Row>
        </Container>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
