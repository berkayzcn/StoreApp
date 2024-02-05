
import React from "react";
import { Image, View, Text } from "react-native";
import cardstyless from './storeCard.Style'

const StoreCard = ({ carditem }) => {
    return (
        <View style={cardstyless.cardContainer}>
            <View style={cardstyless.imageview}>
                <Image style={cardstyless.cardImagestyle} source={{ uri: carditem.imgURL }} />
            </View>
            <Text style={cardstyless.product_title}>{carditem.title}</Text>
            <Text style={cardstyless.product_price}>{carditem.price}</Text>
            <Text style={cardstyless.product_inStock}>{carditem.inStock ? "" : "STOKTA YOK"}</Text>
        </View>
    );
};

export default StoreCard;