import React from 'react'
import Datamahasiswa from "./data/mahasiswa.json"
import { FlatList, Text, View, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserGraduate, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

const Mahasiswa = () => {
    return (
        <FlatList
            data={Datamahasiswa}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)} >
                    <View style={ styles.card }>
                        <View>
                            <FontAwesomeIcon icon={faUserGraduate} size={50} color={ item.gender == 'male' ?
                                'lightblue' : 'pink'
                            } />
                        </View>
                        <View>
                            <Text>{item.first_name} {item.last_name}</Text>
                            <FontAwesomeIcon icon={item.gender == 'male' ? faMars : faVenus}
                            color={ item.gender == 'male' ? 'lightblue' : 'pink'}
                            size={14}/>
                            <Text>{item.gender}</Text>
                            <Text>{item.class}</Text>
                            <Text>{item.latitude}, {item.longitude}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />

    )
}

export default Mahasiswa

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#C6E7FF',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#C6E7FF',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })