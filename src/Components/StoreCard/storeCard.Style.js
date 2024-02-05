import { Text, StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        margin:7.5,
        backgroundColor:"#eceff1",
        borderRadius:10,
    },

    cardImagestyle: {
        height: 160,
        width: 165,
        borderRadius: 10
    },

    imageview:{
        padding:7.5,
    },

    product_title:{
        fontSize:18,
        fontFamily:"Nunito",
        fontWeight:"bold",
        color:"black",
        width:180,
        paddingLeft:7,
        paddingRight:7,
    
    },
    product_price:{
        fontSize:18,
        fontWeight:"bold",
        paddingLeft:7,
        paddingRight:7,
        color : '#808080',
    },
    
    product_inStock:{
        fontSize:18,
        fontWeight:"bold",
        color:"red",
        paddingLeft:7,
        paddingRight:7,
    },
})