import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, Image, TextInput } from "react-native";
import storedata from './storedata.json'
import StoreCard from "./Components/StoreCard";

function App() {
    return (
        <SafeAreaView style={styl.container}>
            <Text style={styl.titleStyle}>PatikaStore</Text>

            <TextInput style={styl.textInputstyle}
            placeholder="Ara.."
            />

            <FlatList
                data={storedata}
                renderItem={({item}) => <StoreCard carditem={item} /> }
                numColumns={2}
            />
        </SafeAreaView>

    )
};

export default App;

const styl = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    titleStyle: {
        fontWeight: 'bold',
        fontSize: 44
    },

   // Imagestyle: {
       // height: 160,
        //width: 165,
        //borderRadius: 10
   // },

    textInputstyle : {
         width: 385, 
         height: 35, 
         borderWidth: 1,
         borderColor: 'lightgrey', 
         borderRadius: 9,
         padding: 7 ,
         marginHorizontal : 5,
         margin : 9,
         backgroundColor : "#eceff1"

        // marginVertical: 5

    }
})