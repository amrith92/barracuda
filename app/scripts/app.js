import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Flex, Box, Heading } from 'rebass';

import ClusterView from './cluster/cluster';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    return (
      <Provider>
        <Flex flexWrap='wrap'>
          <Heading is='h1'>Welcome!</Heading>
          <Box width={1}>
            <ClusterView/>
          </Box>
        </Flex>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
