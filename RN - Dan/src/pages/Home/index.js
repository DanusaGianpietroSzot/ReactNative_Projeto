import React from 'react'

import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

const Home = (props) => {
    const { navigation } = props

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2DAC2',
        }}
        >
            <Text
             style={{
                 color: '#595A52'
             }}
            >
                Você falhou mizeravelmante!
            
            </Text>
            <TouchableOpacity
                style={{
                    width: 50,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    borderStartColor: '#F3EB72',
                }}/*Caminho para a página*/
                title='Sobre' 
                onPress={() => navigation.navigate('Sobre')}>

                    <Text
                        style={{color: '#A1D6C2' }}
                        
                    >Sobre</Text>

            </TouchableOpacity>

        </View >
    )
}

export default Home


