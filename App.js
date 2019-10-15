import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import { StyleSheet, Text, Button, View } from 'react-native';

import Home from './components/Home'
import Setting from './components/Setting'
import Search from './components/Search'
import Store from './components/Store'


export default class App extends Component {
  render() {
    return (
      <View style={{width:'100%', height:'100%'}}>
        <Router>
          <Stack key='root'>
            <Scene key="home" component={Home} />
            <Scene key="setting" component={Setting} />
            <Scene key="search" component={Search} />
            <Scene key="store" component={Store} />
          </Stack >
        </Router>

        <View>
          <Button title='Home' onPress={Actions.home}>
          </Button>
          <Button title='Setting' onPress={Actions.setting}>
          </Button>
          <Button title='Search' onPress={Actions.search}>
          </Button>
          <Button title='Store' onPress={Actions.store}>
          </Button>
        </View>
      </View>
    );
  }
}
