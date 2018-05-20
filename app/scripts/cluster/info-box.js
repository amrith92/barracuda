import React from 'react';
import { Subhead, Card } from 'rebass';

const ClusterCard = Card.extend`
  background-color: lightblue;
  color: indigo;
`

export default class InfoBox extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        name: props.name,
        ip: props.ip,
        environment: props.environment
      };
  }

  render() {
    const name = this.state.name;
    return (
      <ClusterCard width={1/3}>
        <Subhead p={2}>
          {name}
        </Subhead>
      </ClusterCard>
    )
  }
}
