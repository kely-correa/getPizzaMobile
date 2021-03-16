import React from 'react';
import { View, Text } from 'react-native';

const Info = ({valor, estilo}) => {
    return (
        <View>
            <Text style={estilo}>Informações - {valor ? valor : 'Elis Regina'}</Text>
        </View>
    );
}

export default Info;