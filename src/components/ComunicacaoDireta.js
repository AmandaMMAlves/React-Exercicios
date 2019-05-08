import React from 'react'
import {View, Text} from 'react-native'

import Posicionamento from '../style/Posicionamento'

const font = {style: {fontSize: 15}}

const cloneFilhos = props => React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))

export const Filho = props =>
    <View>
        <Text {...font}>{props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...font}>Pai: {props.nome} {props.sobrenome}</Text>
        {cloneFilhos(props)}
    </View>

export const Avo = props =>
    <View style={Posicionamento.initialPosition}>
        <Text {...font}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome="Otávio" sobrenome={props.sobrenome}>
            <Filho nome="Fulano 1"/>
            <Filho nome="Fulano 2"/>
            <Filho nome="Fulano 3"/>
            <Filho nome="Fulano 4"/>
        </Pai>
        <Pai {...props} nome="Beiçola">
            <Filho nome="Rebecca"></Filho>
            <Filho nome="Roberto"></Filho>
            <Filho nome="Renata"></Filho>
        </Pai>
        <Pai {...props} nome="Breno">
            <Filho nome="Giovanna"></Filho>
            <Filho nome="Giovanni"></Filho>
            <Filho nome="George"></Filho>
            <Filho nome="Giuseppe"></Filho>
        </Pai>
    </View>


