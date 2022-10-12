
import React, { Component } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { APP_FONTS, APP_IMAGES } from "../../utils/Common";




const shoppingBag = [
    {
        id: 1,
        // profileImage: require('../../../assets/images/profile-img.png'),
        productName: 'Chic Fuchsia',
        // rating: 4.1,
        price: '$20.00',
        delivery: ' 31 Aug,2021',
        imageUpload: require('../../../assets/images/product-img.png'),
        size: '-M',
        quantity: 1,
        comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'

    },
    {
        id: 2,
        // profileImage: require('../../../assets/images/profile-img.png'),
        productName: 'Chic Fuchsia ',
        // rating: 4.1,
        price: '$20.00',
        delivery: '31 Aug,2021',
        imageUpload: require('../../../assets/images/product-img.png'),
        size: '-M',
        quantity: 1,
        comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'

    }
    // {
    //     id: 3,
    //     // profileImage: require('../../../assets/images/profile-img.png'),
    //     productName: 'Chic Fuchsia ',
    //     // rating: 4.1,
    //     price: '$20.00',
    //     delivery: '31 Aug,2021',
    //     imageUpload: require('../../../assets/images/product-img.png'),
    //     size: '-M',
    //     quantity: 1,
    //     comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'

    // },
]



class filter extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'space-between', top: 0 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>SHOPPING BAG</Text>
                    </View>
                </View>
                <View style={{ borderColor: '#f0f0f0', borderBottomWidth: 2 ,height:12}} />
                <View style={{ flex: 0.05, backgroundColor: '#fffff', top: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#7bc0f7', height: 24, width: 24, borderRadius: 12,  borderWidth: 1.5 }}>
                            <Text style={{ alignSelf: 'center' ,color:'#7bc0f7'}}>1</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{color:'#7bc0f7'}}>Bag -----</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5 }}>
                            <Text style={{ alignSelf: 'center' }}>2</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{color:'#9f9f9f'}}>Address -----</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12,  borderWidth: 1.5  }}>
                            <Text style={{ alignSelf: 'center' }}>3</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{color:'#9f9f9f'}}>Payment -----</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12,  borderWidth: 1.5  }}>
                            <Text style={{ alignSelf: 'center' }}>4</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{color:'#9f9f9f'}}>Summary</Text>
                        </View>
                    </View>
                </View>
                {/* <View>

                </View> */}
                {/* <ScrollView style={{ flex: 1 }}> */} 
                    {/* <ScrollView style={{}}>/ */}
                    {/* <View style={{ flex: 0.80, backgroundColor: '#f0f0f0' }}> */}
                        {/* <ScrollView> */}
                        {/* <FlatList
                            data={shoppingBag}
                            style={{ flex: 1, top: 10 }}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index, separator }) => {
                                return (
                                    //    <Text>jjsdhsj</Text>
                                    <View style={{ flex: 0.80 }}>
                                        <View style={{ backgroundColor: '#f0f0f0', padding: 20 }}>
                                            <View style={{ backgroundColor: 'white', padding: 20 }}>
                                                {/* <View style={{  padding: 10 ,borderRadius:2,backgroundColor:'white'}}> */}
                                                {/* <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                                                    <Image source={item.imageUpload} style={{ height: 70, width: 70 }} />
                                                    <Text style={{ padding: 10, color: 'black', fontFamily: APP_FONTS.bold, fontSize: 12 }}>{item.productName}</Text>
                                                </View>
                                                <View style={{ alignSelf: 'center', right: 30, bottom: 24, backgroundColor: 'white' }}>
                                                    <Text style={{ color: '#f53d9c', fontSize: 12, fontFamily: APP_FONTS.bold }}>{item.price}</Text>
                                                    <View style={{ flexDirection: 'row', top: 3, backgroundColor: 'white' }}>
                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium }}>Size{item.size}</Text>
                                                        <View style={{
                                                            flexDirection: 'row', height: '76%', width: 1.5, top: 3, left: 5,
                                                            backgroundColor: '#909090'
                                                        }} />
                                                        <Text style={{ left: 10, fontSize: 12, fontFamily: APP_FONTS.medium }}>Qty{item.quantity}</Text>
                                                    </View>
                                                </View> */}
                                            {/* </View>
                                            <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'row', bottom: 15, left: 10 }}>
                                                    <Text style={{ fontSize: 11, color: '#acacac', fontFamily: APP_FONTS.regular }}>Delivery by</Text>
                                                    <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}> {item.delivery}</Text>
                                                </View> */}
                                                {/* <View style={{backgroundColor:'green'}}> */}
                                                {/* <Image source={APP_IMAGES.minus} style={{ height: 2, width: 10, left: 35, bottom: 8 }} />
                                                <View style={{ height: 20, width: 20, borderRadius: 2, backgroundColor: '#f0f0f0', bottom: 18 }}>
                                                    <Text style={{ color: '#001737', alignSelf: 'center' }}>3</Text>
                                                </View>
                                                <Image source={APP_IMAGES.plus} style={{ height: 10, width: 10, right: 35, bottom: 12 }} />
                                                {/* </View> */}
                                            {/* </View>
                                            <View style={{ borderWidth: 1, borderColor: '#f0f0f0' }} />
                                            <View style={{ backgroundColor: 'white', height: 40, flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomRightRadius: 4, borderBottomLeftRadius: 4 }}>
                                                <Text style={{ color: '#949494', fontSize: 12, fontFamily: APP_FONTS.bold, left: 20 }}>REMOVE</Text>
                                                <View style={{
                                                    flexDirection: 'row', height: '65%', width: 1.5, top: 0, left: 5,
                                                    backgroundColor: '#f0f0f0'
                                                }} />
                                                <Text style={{ color: '#f53d9c', fontSize: 12, fontFamily: APP_FONTS.bold, right: 20 }}>MOVE TO WISHLIST</Text>
                                            </View>

                                        </View>


                                    </View> */} 
                                {/* )
                            }}

                        /> */}
                    {/* </View>
                    <View style={{ flex: 0.10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                            <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Commission Total</Text>
                            <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>$20.00</Text>
                        </View>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                                <Text>Commission Total</Text>
                                <Text>$20.00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                                <Text>Commission Total</Text>
                                <Text>$20.00</Text>
                        //     </View> */}
                        {/* //     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        //         <Text>Commission Total</Text>
                        //         <Text>$20.00</Text>
                        //     </View>
                        // </View> */} 
                    {/* </View> */}
                    {/* // <View style={{ borderWidth: 2, borderColor: '#f0f0f0' }} />
                    // <View style={{ flex: 0.10 }}>
                    //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                    //         <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }} >Price Details</Text>
                    //         {/* <Text>$20.00</Text> */}
                    {/* //     </View> */}
                    {/* //     <View style={{ padding: 20 }}>
                    //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                    //             <Text>Product Charges</Text>
                    //             <Text>$20.00</Text>
                    //         </View>
                    //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                    //             <Text>Delivery Charges</Text>
                    //             <Text>$20.00</Text>
                    //         </View>
                    //         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    //             <Text>Discount</Text>
                    //             <Text>$20.00</Text>
                    //         </View> */}
                    {/* //     </View> */}
                {/* //     </View> */} 
                {/* //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ededed', borderWidth: 1.5 }}>
                //         <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Order Total</Text>
                //         <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>$XX.00</Text>
                //     </View>
                //     {/* </ScrollView> */}
                {/* //     <View style={{ flex: 0.30, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, borderColor: 'black', padding: 15 }}>

                //         <View style={{ flexDirection: 'row', top: 10 }}>
                //             <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 14 }}>$XX.00</Text>
                //         </View>
                //         <View style={{ flexDirection: 'row', right: 20, width: 140, height: 46, backgroundColor: '#F43297', borderRadius: 8 }}>
                //             <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToBag')}>
                //                 <View style={{}}>
                //                     <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                //                 </View>
                //             </TouchableOpacity>
                //         </View>

                //     </View>
                // </ScrollView> */} 
            </SafeAreaView>
        )
    }



}

export default filter;