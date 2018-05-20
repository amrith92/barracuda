import React from 'react';
import { Subhead, Card, Small, Badge } from 'rebass';

const ClusterCard = Card.extend`
  background-color: #f4f4f4;
  color: #161616;
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
    const {name, ip, environment} = this.state;
    return (
      <ClusterCard width={1/3}>
        <Subhead p={2}>
          {name}
        </Subhead>
        <Small>{ip}</Small>
        <Badge><Small>{environment}</Small></Badge>
      </ClusterCard>
    )
  }
}
