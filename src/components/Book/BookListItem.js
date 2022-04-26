import React from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-ionicons';


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    image:{
        width: 50,
        height: 50,
    },
    icon:{
        color: '#000',
        marginLeft: 'auto',
    }
});

export default function BookListItem({book, onPress}){
    return(
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: book.cover}}/>
                <Text>{book.name}</Text>
                <Icon name="add" style={styles.icon}></Icon>
            </View>
        </TouchableHighlight>
    );
}