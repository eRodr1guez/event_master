import React, {Component} from 'react';
import {View, Text} from 'react-native';

import axios from 'axios';

class Result extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    const URL =
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=8JDGGPUzwf2QMAlIPNL0mV1F3UaLEfMD&city=miami';
    axios
      .get(URL)
      .then(response =>
        this.setState({events: response.data._embedded.events}),
      );
  }

  renderAlbums() {
    return this.state.events.map(event => (
      <Text key={event.id}>{event.name}</Text>
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

const styles = {};

export default Result;
