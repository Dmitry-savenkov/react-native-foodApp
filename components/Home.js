import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/color';
Feather.loadFont()
export default Home = () => {

    const renderCategoryItem = ({ item }) => {
        {/* Categories */ }
        return (
            <TouchableOpacity activeOpacity='0.8'>
                <View style={[styles.categoriesBlock, {
                    backgroundColor: item.selected ? colors.primary : colors.background
                }]}>
                    <Image
                        source={item.image}
                        style={styles.categoriesImage}
                    />
                    <Text style={styles.categoriesTitle}>{item.title}</Text>
                    <View style={[styles.categorySelectWrapper, {
                        backgroundColor: !item.selected ? colors.secondary : colors.background,

                    }]}>
                        <Feather
                            name='chevron-right'
                            size={18}
                            color={item.selected ? colors.text : colors.background} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator='false'>
            <View style={styles.contaner}>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image
                            source={require('../assets/images/profile.png')}
                            style={styles.profileImage} />
                        <Feather name='menu' size={24} color={colors.text} />

                    </View>
                </SafeAreaView>
                {/* Title */}
                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleFood}>Food</Text>
                    <Text style={styles.sectionTitleDelivery}>Delivery</Text>
                </View>
                {/* Search */}
                <View style={styles.sectionSearch}>
                    <TouchableOpacity>
                        <Feather name='search' activeOpacity='0.9' size={21} color={colors.text} />
                    </TouchableOpacity>
                    <View>
                        <TextInput
                            style={styles.searchInput}
                            placeholder='Search'
                        />
                    </View>
                </View>
                {/* Categories */}
                <View style={styles.sectionCategories}>
                    <Text style={styles.categoriesTitle}>
                        Categories
                    </Text>
                    <View style={styles.categoriesList}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />

                    </View>
                </View>
                {/* Popular */}
                <View style={styles.sectionPopular}>
                    <Text style={styles.popularTitle}>
                        Popular
                    </Text>
                    {popularData.map(item => (
                        <View style={styles.popularPizza}>
                            <View>
                                <View>
                                    <View style={styles.popuparTopWrapper}>
                                        <MaterialCommunityIcons name='crown' size={18} color={colors.primary} />
                                        <Text style={styles.popularTopTitle}>Top of the Week</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.popuparTextName}>{item.title}</Text>
                                        <Text style={styles.popuparTextWeight}>Weight {item.weight}</Text>
                                    </View>
                                </View>
                                <View style={styles.popularCardButton}>
                                    <TouchableOpacity activeOpacity='0.7'>
                                        <View style={styles.pizzaButton}>
                                            <Feather name='plus' size={13} colors={colors.text} />
                                        </View>
                                    </TouchableOpacity>

                                    <View style={styles.pizzaRaiting}>
                                        <Feather name='star' size={13} colors={colors.primary} />
                                        <Text style={styles.raiting}>{item.raiting}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.popularPizzaImg}>
                                <Image source={item.image} style={styles.popularPizzaRight} />
                            </View>
                        </View>
                    ))}
                </View>
            </View >
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    raiting: {
        marginLeft: 5,
        fontWeight: '500',
        fontSize: 14,
    },
    popularPizzaImg: {
        marginLeft: 40,

    },
    popularPizzaRight: {
        width: 210,
        height: 125,
        resizeMode: "contain",

    },
    pizzaButton: {
        marginRight: 10,
        marginTop: 10,
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 22,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
    pizzaRaiting: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    popularCardButton: {
        marginLeft: -20,
        alignItems: 'center',
        flexDirection: 'row',
    },

    popuparTextName: {
        marginTop: 20,
        fontWeight: '600',
        fontSize: 16,

    },
    popuparTextWeight: {
        color: colors.textGrey,
        marginTop: 5,
    },
    popularTopTitle: {
        marginLeft: 10,
        fontWeight: '600'

    },
    popuparTopWrapper: {
        flexDirection: "row",
        alignItems: 'center'

    },
    popularPizza: {
        overflow: 'hidden',
        backgroundColor: colors.background,
        borderRadius: 25,
        marginTop: 11,
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: 'row',
    },
    sectionPopular: {

        paddingHorizontal: 20,

    },
    popularTitle: {
        marginTop: 15,
        fontWeight: "600",
        fontSize: 20,
    },

    categoriesBlock: {
        marginTop: 30,
        marginRight: 18,
        marginBottom: 15,
        backgroundColor: "#F5CA48",
        width: 115,
        height: 187,
        borderRadius: 20,
        alignItems: 'center',


    },
    categoriesImage: {
        marginTop: 15,
        width: 60,
        height: 60,

    },
    categoriesTitle: {


    },
    categorySelectWrapper: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        width: 30,
        height: 30,
        backgroundColor: "#FFFFFF",


    },
    sectionCategories: {
        paddingLeft: 20,

    },
    categoriesTitle: {
        marginTop: 30,
        fontWeight: "600",
        fontSize: 20,
    },
    categoriesList: {

    },
    sectionSearch: {
        paddingHorizontal: 20,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: "center",
    },
    searchInput: {

        borderBottomWidth: 2,
        borderColor: colors.textGrey,
        padding: 7,
        marginLeft: 10,
        width: 300,
        fontSize: 20,

    },
    sectionTitleDelivery: {

        marginTop: 5,
        fontWeight: "700",
        fontSize: 36,
        color: colors.text

    },
    sectionTitleFood: {
        fontSize: 20,
        color: colors.text

    },
    sectionTitle: {
        paddingLeft: 20,


    },
    contaner: {

    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,

    },
    headerWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    }
})