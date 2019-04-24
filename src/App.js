
import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Simples from './components/Simples'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>Uhuuuuul</Text>
        <Simples texto="Hey" texto2="Jude"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40
  }
})