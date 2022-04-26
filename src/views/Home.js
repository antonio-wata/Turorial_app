import React, {useEffect, useState} from "react";
import {FlatList, Text, View, TouchableHighlight, Button} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import BookListItem  from "../components/Book/BookListItem";
import MMKVStorage from "react-native-mmkv-storage";

const BOOK_LIST = [
    {
        id: 1,
        title: 'Hacia rutas salvajes',
        cover: 'https://picsum.photos/200'
,    },
    {
        id: 2,
        title: 'El nombre del viento',
        cover: 'https://picsum.photos/id/237/200/300'
    },
    {
        id: 3,
        title: 'It',
        cover: 'https://picsum.photos/200/300?grayscale',
    }
]

export default function Home({navigation}){

    const [books, setBooks] = useState(BOOK_LIST);
    const [token, setToken] = useState('');


    useEffect(() => {
        fetch('http://ec2-18-219-129-163.us-east-2.compute.amazonaws.com:8088/rh/@login', {
            method: 'POST',
            headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({'login':'antonio.alvarez', 'password':'antonio.alvarez'}),
          })
        .then((response) => response.json())
        .then(res => {
            setToken(res["token"]);
            });
        },[]);
    
    function handleOnPress(){
        console.log(token);
        //navigation.navigate('Library');
    }

    //el segundo parametro es para las dependencias, si dejamos una lista vacia solo se ejecutara una vez
    //se puede ejecutar un objeto
    /*
    useEffect(function(){
        async function fecthData(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
            const json = await response.json();
            setBooks(json.results);
        }
        fecthData();
    }, []);
    */

    return (
        <View>
            <Text>{token}</Text>
            <Button onPress={() => console.log(storeData())} title="show data"/>
            <FlatList 
                data={books} 
                renderItem={({item}) => <BookListItem book={item} onPress={handleOnPress}></BookListItem>} 
                //keyExtractor={item => item.name} 
                ListHeaderComponent={<View><Text>Mi lista de libros:</Text></View>}
            />
        </View>
    )
}