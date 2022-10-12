import React, { useState } from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer'
import {
    View,
    Image,
    FlatList,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Linking,
    Platform
} from 'react-native'
import { APP_FONTS, APP_IMAGES } from '../../utils/Common'
import filter from './filter'



const renderItem = ({ item }) => {
    const [showOptions, setShowOptions] = useState(false)


    return (

        <View style={{ padding: 20 }}>
            {/* <View style={{ height: 250, width: '98%', top: 46 }}>
                    <Image source={item.category} style={{ width: '100%', height: 210 }} resizeMode='stretch' />
                </View> */}
            <View style={{ backgroundColor: 'white', bottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <TouchableOpacity onPress={() => { selectedFilter(item.name) }}>
                        <Text style={{ fontSize: 14, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                <View>

                </View>
                <View>

                </View>
                <TouchableOpacity
                    onPress={() => setShowOptions(!showOptions)}
                    style={{ alignSelf: 'flex-end' }}>
                    <Image source={APP_IMAGES.imageArrowDown} style={{ height: 12, width: 12, left: 40 }} />
                </TouchableOpacity>
                {/* <View style={{backgroundColor:'red'}}>

                </View> */}
                {/* <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Pink Wrap Dress </Text> */}
                {/* <Text style={{ color: '#F43297', fontSize: 13, fontFamily: APP_FONTS.bold }}>$20.00</Text> */}
                <View style={{ flexDirection: 'row' }}>
                    {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                    {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                </View>
            </View>
            {!showOptions && <View style={{ flexDirection: 'row', height: 50, width: 50, backgroundColor: 'red' }}>
            </View>}

            {/* <View>
                <Text>Red</Text>
                <Text>Blue</Text>
                <Text>Male</Text>
                <Text>Female</Text>
            </View> */}
            <View style={{ borderBottomWidth: 1, top: 20, width: '120%', borderColor: '#ececec', right: 20 }} />

        </View>

    )
}

export default renderItem