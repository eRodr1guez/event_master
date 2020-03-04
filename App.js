import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import axios from 'axios';

import {displayName as appName} from './app.json';

class App extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://app.ticketmaster.com/discovery/v2/events.json?apikey=8JDGGPUzwf2QMAlIPNL0mV1F3UaLEfMD&city=miami',
      )
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
    const {centerText, largeText} = styles;

    return (
      <SafeAreaView style={centerText}>
        <Text style={largeText}>{appName}</Text>
        {this.renderAlbums()}
      </SafeAreaView>
    );
  }
}

const styles = {
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    fontSize: 40,
    marginBottom: 20,
  },
};

export default App;
