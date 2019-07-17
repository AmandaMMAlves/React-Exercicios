import React from 'react'
import {View, Text, ScrollView, FlatList} from 'react-native'
import Posicionamento from '../style/Posicionamento'

const alunos = [
    {id:1, nome: 'A', nota:7.9},
    {id:2, nome: 'B', nota:9.5},
    {id:3, nome: 'C', nota:8.6},
    {id:4, nome: 'D', nota:10.0},
    {id:5, nome: 'E', nota:5.0},
    {id:6, nome: 'F', nota:4.0},
    {id:7, nome: 'G', nota:3.9},
    {id:8, nome: 'H', nota:4.9},
    {id:9, nome: 'I', nota:7.9},
    {id:10, nome: 'A', nota:7.9},
    {id:11, nome: 'B', nota:9.5},
    {id:12, nome: 'C', nota:8.6},
    {id:13, nome: 'D', nota:10.0},
    {id:14, nome: 'E', nota:5.0},
    {id:15, nome: 'F', nota:4.0},
    {id:16, nome: 'G', nota:3.9},
    {id:17, nome: 'H', nota:4.9},
    {id:18, nome: 'I', nota:7.9},
    {id:19, nome: 'J', nota:10.0},
    {id:20, nome: 'K', nota:10.0}
]


const styledItem = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#ddd',
    borderWidth: .5,
    borderColor: '#222'
}

export const Aluno = props => 
    <View style={styledItem}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItems = ({item}) => <Aluno {...item}/>

    return (
        <ScrollView style={Posicionamento.initialPosition}>
            <FlatList data={alunos} renderItem={renderItems} keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}