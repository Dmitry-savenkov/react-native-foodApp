import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, Alert, TouchableOpacityBase } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/color';

export default Details = ({ route, navigation }) => {
    const renderCategoryIngridiets = ({ item }) => {
        return (
            <View style={styles.imsageIngridients}>
                <Image source={item.image} style={styles.imageIngridients} />
            </View>
        )
    }

    const { item } = route.params; //info about product (id)
    return (
        <View style={styles.container}>
            {/*Header*/}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <View style={styles.headerLeft}>
                            <Feather style={styles.arrow} name={"chevron-left"} size={18} color={colors.text} />

                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerRight}>
                        <Feather name={"star"} size={18} color={colors.background} />
                    </View>
                </View>
            </SafeAreaView>
            {/*Titles*/}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesText}>{item.title}</Text>
            </View>
            {/*Price*/}
            <View style={styles.titlesPriceBlock}>
                <Text style={styles.titlesPrice}>${item.price}</Text>
            </View>
            {/*Size*/}
            <View style={styles.rowInfoBlcok}>
                <View>
                    <View style={styles.titlesSizeBlock}>
                        <Text style={styles.textSize} >Size</Text>
                        <Text style={styles.sizePizza}>{item.size}</Text>
                    </View>
                    <View style={styles.titlesSizeBlock}>
                        <Text style={styles.textSize} >Crust</Text>
                        <Text style={styles.sizePizza}>{item.crust}</Text>
                    </View>
                    <View style={styles.titlesSizeBlock}>
                        <Text style={styles.textSize} >Delivery in</Text>
                        <Text style={styles.sizePizza}>{item.delivery} min</Text>
                    </View>

                </View>
                <View>
                    <Image style={styles.sizeImage} source={item.image} />
                </View>
            </View>
            {/*Ingredients*/}
            <View style={styles.ingredientsBlock}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <FlatList
                    data={item.ingridients}
                    renderItem={renderCategoryIngridiets}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            {/*PlaceOrder*/}
            <TouchableOpacity activeOpacity={0.7} onPress={() => { Alert.alert(`Вы заказали ${item.title} `) }}>
                <View style={styles.placeOrderBlock}>
                    <View style={styles.placeOrder}  >
                        <Text style={styles.buttonText}>Place an order</Text>
                        <Feather style={styles.buttonText} name={'chevron-right'} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imsageIngridients: {

        alignItems: 'center',
        justifyContent: 'center'
    },
    ingredientsTitle: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 10,
    },
    imageIngridients: {
        padding: 34,
        marginRight: 10,
        backgroundColor: colors.background,
        borderRadius: 20,

    },
    ingredientsBlock: {
        marginTop: 60,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600'
    },
    placeOrderBlock: {
        marginTop: 58,
    },
    placeOrder: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingHorizontal: 104,
        paddingVertical: 22,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    sizeImage: {
        width: 326,
        height: 176,
        marginTop: 50,
        marginLeft: 10,
    },
    rowInfoBlcok: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    sizePizza: {
        marginTop: 5,
        fontSize: 24,
        fontWeight: '500'
    },
    textSize: {
        color: colors.textGrey,
        fontSize: 20,
    },
    titlesSizeBlock: {
        marginTop: 30,
    },
    titlesPrice: {
        color: colors.price,
        fontWeight: '600',
        fontSize: 32,
    },
    titlesPriceBlock: {
        marginTop: 20,
    },
    titlesWrapper: {
        marginTop: 25,
    },
    titlesText: {
        width: 172,
        fontSize: 32,
        fontWeight: "600",

    },
    arrow: {
        padding: 13,
        borderWidth: 2,
        borderColor: colors.textGrey,
        borderRadius: 10,
    },
    headerRight: {
        padding: 13,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.background

    },
    headerWrapper: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    headerLeft: {

    },
    container: {
        marginTop: 10,
        paddingHorizontal: 20,
        flex: 1,
    }

})