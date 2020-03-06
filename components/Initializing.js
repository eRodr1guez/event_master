import React, {Component} from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity} from 'react-native';

import {displayName as appName} from '../app.json';
import image from '../assets/images/event_illustration.png';

class Initializing extends Component {
  startHandler() {}

  render() {
    const {centerContent, headerText, paragraph, button, buttonText} = styles;

    return (
      <SafeAreaView style={centerContent}>
        <Image source={image} />
        <Text style={headerText}>{appName}</Text>
        <Text style={paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum velit
          eos voluptate quam.
        </Text>

        <TouchableOpacity style={button} onPress={this.startHandler}>
          <Text style={buttonText}>Start</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = {
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    marginTop: 35,
    marginBottom: 20,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 20,
    width: '70%',
  },
  button: {
    backgroundColor: '#5400FF',
    marginTop: 50,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 70,
    paddingRight: 70,
  },
};

export default Initializing;
