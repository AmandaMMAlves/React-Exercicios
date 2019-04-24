import React from 'react'
import {View, Text } from 'react-native'
import If from './If'
import Padrao from '../style/Padrao'

const isPar = number => number % 2 == 0

export default props =>
    <View>
        <If test={isPar(props.number)}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={!isPar(props.number)}>
            <Text style={Padrao.ex}>Impar</Text>
        </If>
    </View>
    
