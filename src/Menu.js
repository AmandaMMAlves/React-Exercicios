import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Contador from './components/Contador'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import {Reverse, Fibonnatti} from './components/Multi'
import Evento from './components/Evento'
import {Avo} from './components/ComunicacaoDireta'
import Input from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'

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
    },
    Evento: {
        screen: () => <Evento/>
    },
    ComunicacaoDireta: {
        screen: () => <Avo nome="Giuseppe" sobrenome="Benedito"/>
        
    },
    Input:{
        screen: () => <Input/>,
        navigationOptions:{title: 'Input dahora'}
    },
    ListaFlex: {
        screen: () => <ListaFlex/>,
        navigationOptions: {title: 'Lista Flex Box'}
    }
}, {drawerWidth: 200})