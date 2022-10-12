
import React, { Component } from "react";
 
import { SafeAreaView, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ImageBackground } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { APP_FONTS, APP_IMAGES, APP_URLS, APP_GIF } from "../../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import Lottie from 'lottie-react-native';




// const shoppingBag = [
//     {
//         id: 1,
//         // profileImage: require('../../../assets/images/profile-img.png'),
//         productName: 'Chic Fuchsia',
//         // rating: 4.1,
//         price: '$20.00',
//         delivery: ' 31 Aug,2021',
//         imageUpload: require('../../../assets/images/product-img.png'),
//         size: '-M',
//         quantity: 1,
//         comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'

//     },
//     {
//         id: 2,
//         // profileImage: require('../../../assets/images/profile-img.png'),
//         productName: 'Chic Fuchsia ',
//         // rating: 4.1,
//         price: '$20.00',
//         delivery: '31 Aug,2021',
//         imageUpload: require('../../../assets/images/product-img.png'),
//         size: '-M',
//         quantity: 1,
//         comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'

//     }
//     // {
//     //     id: 3,
//     //     // profileImage: require('../../../assets/images/profile-img.png'),
//     //     productName: 'Chic Fuchsia ',
//     //     // rating: 4.1,
//     //     price: '$20.00',
//     //     delivery: '31 Aug,2021',
//     //     imageUpload: require('../../../assets/images/product-img.png'),
//     //     size: '-M',
//     //     quantity: 1,
//     //     comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'

//     // },
// ]

const deliveryAddress = [
    {
        id: 1,
        customerName: 'Jennifer Smith',
        mobileNumber: '+1-9876543210',
        deliveryAddress: "Flat No -242,River View Apartment,2nd Street Sacramento,California-Pin Code -XXXXX",

    },
    {
        id: 2,
        // profileImage: require('../../../assets/images/profile-img.png'),
        customerName: 'Palak Sharma',
        // rating: 4.1,
        mobileNumber: '+1-705703302',
        deliveryAddress: "E1 -402,Sacramento,California-Pin Code -208002",

    }
]



class placeOrderPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            // addressPage: false/
            addressPage: false,
            shoppingBag: '',
            paymentPage: false,
            bagPage: true,
            fullName: '',
            phone: '',
            vile: '',
            commune: '',
            zone: '',
            additionalDetails: '',
            buildingName: ''
        }
    }

    componentDidMount() {
        this.userDetail()

    }

    async userDetail() {
        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })
        console.log(this.state.token, 'oojojtkt')
        // this.getShoppingBag()
        // this.editAddress()

    }

     
    
    componentDidMount() {
        // this.animation.play();
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(0, 120);
        setTimeout(() => {this.props.navigation.navigate('ProductList')},3800);

    }




    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <ImageBackground source={APP_IMAGES.confirmOrderPage} style={{ flex: 1 }}> */}
                {/* <View style={{ justifyContent: 'center', alignSelf: 'center', top: 160 }}> */}
                <Image
                    style={{ width: "100%", height: "100%" }} resizeMode={'contain'}
                    // style={{flex:1}}
                    source={require('../../../assets/gif/Addsubheading1.gif')}
                    // source={require('../../../assets/gif/yellow.gif')}
                />
                {/* <Lottie
                     source={require('../../../assets/gif/orderanimation.gif')}
                /> */}
                {/* <Image source={APP_IMAGES.innerCircle} style={{left:50}} >
                         </Image> */}
                {/* <Text style={{fontFamily:APP_FONTS.bold,color:'white',fontSize:20,bottom:120,left:100}}>Order</Text> */}
                {/* <Text style={{fontFamily:APP_FONTS.bold,color:'white',fontSize:20,bottom:110,left:80}}>Confirmed</Text> */}
                {/* <View>
                            <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', fontSize: 14, bottom: 30, left: 0, fontFamily: APP_FONTS.medium }}>You can track the status of your order </Text>
                            <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', fontSize: 14, bottom: 30, left: 0, fontFamily: APP_FONTS.medium }}> from the orders page </Text>
                        </View> */}
                {/* </View> */}


                {/* </ImageBackground> */}












            </SafeAreaView>
        )
    }



}

export default placeOrderPage;