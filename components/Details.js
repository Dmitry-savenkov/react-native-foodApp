import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, Alert, TouchableOpacityBase } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/color';

export default Details = ({ route, navigation }) => {

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
        </View>
    )
}

const styles = StyleSheet.create({
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