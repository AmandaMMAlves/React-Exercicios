import React from 'react'
import {Text} from 'react-native'
import Padrao from '../style/Padrao'

const Reverse = props => 
    <Text style={Padrao.ex}>
        {props.nome.split("").reverse().join("")}
    </Text>

const fibo = array => array.slice(-2).reduce((valAnterior, valAtual) => valAnterior + valAtual)

const Fibonnatti = props => {
    let fibArray = []
    let limite = props.qt || 5
    fibArray.push(0,1)
    for (let i = 0; i < limite; i++) 
        fibArray.push(fibo(fibArray))

    return <Text style={Padrao.ex}>{fibArray.toString()}</Text>
}

export {Reverse, Fibonnatti}