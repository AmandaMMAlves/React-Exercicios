import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Contador from './components/Contador'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import {Reverse, Fibonnatti} from './components/Multi'

import Posicionamento from './style/Posicionamento'

export default createDrawerNavigator({
    Contador:{
        screen: () => <Contador />
    },
    Fibonnatti:{
        screen:() => <Fibonnatti qt="12"></Fibonnatti>
    },
    Reverse: {
        screen: () => <Reverse nome="SHAKE SHAKE SHAKE"></Reverse>,
        navigationOptions:{title: 'Inverter Palavras'}
    },
    ParImpar:{
        screen: () => <ParImpar number="158"></ParImpar>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto="EBAAA"/>
    }
}, {drawerWidth: 200})