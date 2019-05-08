import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../style/Padrao'
import Posicionamento from '../style/Posicionamento'

export default class Evento extends Component {
    state = {
        text: ''
    }

    textChanged = text => {
        this.setState({text})
    }

    render(){
        return (
            <View style={Posicionamento.initialPosition}>
                <Text style={Padrao.txt40}>{this.state.text}</Text>
                <TextInput value={this.state.text} style={Padrao.ex} onChangeText={this.textChanged} />
            </View>
        )
    }
}