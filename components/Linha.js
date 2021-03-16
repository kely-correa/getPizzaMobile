import React from 'react';
import { Touchable } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

const Linha = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={()=>{navigation.navigate('Detalhes', item)}}
            onLongPress={() =>{ navigation.navigate('Edit', item ) }}
             >
        <View style={estilo.conteudo}>
            <Image 
                style={estilo.imagem}
                source={{uri:item.image}}
            /> 
            <View>           
                <Text style={estilo.titulo}>{item.name}</Text>
                <Text> {item.description} </Text>
                <Text style={estilo.preco}>{item.price}</Text>
                <Rating 
                    starttingValue={item.rating}
                    readonly
                />
            </View>
        </View>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    titulo:{
        fontSize: 25,
    },
    preco:{
        fontSize: 20,
        color: 'red'
    },
    conteudo:{
        marginBottom: 120,
        flexDirection: 'row',
    },
    imagem: {
        height: 80,
        width: 80,
    }
})

export default Linha;