import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../style/Padrao'
import Posicionamento from '../style/Posicionamento'

export const Entrada = props => 
    <View>
        <TextInput style={Padrao.txtInput} value={props.txt} onChangeText={props.alteraTexto}/>
    </View>

export default class Input extends Component {
    state = {
        txt: ''
    }

    alteraTexto = texto => this.setState({txt: texto})

    render(){
        return (
            <View style={Posicionamento.initialPosition}>
                <Text>{this.state.txt}</Text>
                <Entrada txt={this.state.txt} alteraTexto={this.alteraTexto}/>
            </View>
        )
    }
}