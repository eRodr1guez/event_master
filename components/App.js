import React, {Component} from 'react';
import {SafeAreaView, Alert} from 'react-native';

import StartView from './Initializing';

class App extends Component {
  startHandler() {
    Alert.alert('Simple Button pressed');
  }

  render() {
    const {centerText} = styles;

    return (
      <SafeAreaView style={centerText}>
        <StartView onBttnPress={this.startHandler} />
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
};

export default App;

// when search button is clicked set the state loading to true and then set it back to false when api gets response