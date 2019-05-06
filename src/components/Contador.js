import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

import Posicionamento from '../style/Posicionamento'
import Padrao from '../style/Padrao'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 10
    }

    incrementa = () => {
        this.setState({numero: this.state.numero + 1})
    }

    limpa = () => {
        this.setState({numero: 0})
    }

    render() {
        return (
            <View style={Posicionamento.initialPosition}>
                <Text style={Padrao.txt}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.incrementa}
                    onLongPress={this.limpa} style={Padrao.btnConfirm}>
                    <Text style={Padrao.btnConfirmTxt}>Adicionar / Limpar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}