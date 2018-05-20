import React from 'react';
import { Heading, Box, Flex } from 'rebass';

import InfoBox from './info-box';

export default class ClusterView extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        clusters: [
          {
            name: 'yolo'
          }
        ]
      };
  }

  render() {
    const clusters = this.state.clusters;
    return (
      <Box width={1}>
        <Heading is='h2'>My Clusters</Heading>
        <Flex alignItems='center' flexWrap='wrap' mx={-2}>
          {clusters.map((cluster, i) =>
              <Box px={2} py={2} width={1/3}>
                <InfoBox name={cluster.name}/>
              </Box>
          )}
        </Flex>
      </Box>
    )
  }
}
