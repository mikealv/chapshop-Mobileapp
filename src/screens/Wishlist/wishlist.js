import React, { Component } from "react";
import { Text, SafeAreaView, View, TouchableOpacity, Image, FlatList, TabBarIOS } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP  as wp} from "react-native-responsive-screen";
import { APP_FONTS, APP_IMAGES,APP_URLS } from "../../utils/Common";
// import {View, Text, SafeAreaView, ScrollView,ImageBackground,Image,TouchableOpacity,FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShowLoader from "../../utils/Loader";
import DeviceInfo from 'react-native-device-info';

// import AppStyle from "../styles/AppStyle"
// import * as API from '../Utils/ApiService';
// import { useFocusEffect,useIsFocused } from "@react-navigation/native";

const wishList = [
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
]

const sharedList =[
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },
    {
        multipleImages: [],
        _id: "627e039685a7b0eff65be603",
        productName: "Skirt",
        price: 33,
        mrp: "$20",
        gst: "18%",
        stateCode: "110033",
        hsnCode: "12134332",
        description: "A slimy looked-up skirt",
        size: [
            "L",
            "M",
            "X ",
            "XXL"
        ],
        productWeight: "200g",
        fabric: "Cotton",
        countryOfOrigin: "India",
        manufacturingDetails: "mavufactured by textiles com.",
        packerDetails: "user$@gmail.com",
        images: "https://api-chapshop.appsmaventech.com/public/image_1654518068991.png",
        fitShape: "A slimy outfit",
        hemLine: "Done",
        length: "12 cm",
        netQuantity: "15",
        neck: "0",
        noOfPockets: "2",
        ocassion: "Party wear",
        originals: "original",
        pattern: "zig zag",
        printOrPatternType: "No prints",
        sleeveLength: "-",
        sleeveStyles: null,
        importerDetails: "User@gmail.com",
        ratings: "5",
        discoun: "15%",
        colour: [
            "Denim",
            "pink",
            "black",
            "red"
        ],
        gender: null,
        createdAt: "2022-05-13T07:07:02.423Z",
        updatedAt: "2022-05-13T07:07:02.423Z",
        __v: 0,
        subSubCategoryName: "628e192e396ef1cb89ea4f25"
    },

]

class Active extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabSelected: true,
            // tabSelected: "Active",
            tabData:'',
            token:'',
            wishData:'',
            isLoading:true,
            deviceIOS:''

        }
    }

    componentDidMount(){
        this.userDetail()
        console.log('jhdjadhjahd')
        DeviceInfo.getDeviceName().then((deviceName) => {
            // iOS: "Becca's iPhone 6"
            // Android: ?
            this.setState({
                deviceIOS: deviceName
            })
            console.log(deviceName, 'evicijcij')

            // Windows: ?
        });
    }

    async userDetail() {
         let userS = await AsyncStorage.getItem('@userToken')        
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })
        this.state.token?
        this.wishlist():null
        // await AsyncStorage.getItem('@user',JSON.stringify(user)).then(() => {
        //     console.log(user, 'fcmtokenLoginß')

        // })
    }
  async  wishlist(){
      console.log('punna')
        try {
            let response = await fetch(

                APP_URLS.wishList,
                {
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':this.state.token?"Bearer"+" "+this.state.token.split('"').join(''):null,
                    },
                    // body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {

                    console.log('wishdaata+++', JSON.stringify(data))
                    console.log('wsiiiiss', JSON.stringify(data.wishlistData.wishList[0]))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                         this.setState({
                            wishData:data.wishlistData.wishList,
                            isLoading:false
                           
                        })
                        console.log(this.state.wishData, 'prppopoopo')


                        // console.log(data.category, 'catteetete')
                        // this.setState({
                        //     mainCategory: data.category
                        // }, () => { this.state.mainCategory, 'mainCategoriiiess' })
                        // let token = data.response.userData.accessToken
                        // let user = data.response.userData
                        // userToken = token
                        // AsyncStorage.setItem('@user', JSON.stringify(user)).then(() => {
                        //     this.props.navigation.navigate('DrawerScreen')
                        //     this.setState({
                        //         isLoading:false
                        //     })
                        // })
                        //     this.props.navigation.navigate('Otp',{otpOutput:this.state.otpRecieved,
                        //         phoneNumber: this.state.phone,
                        //         countryCode: this.state.countryCode})
                        //     // alert('hahaah')
                    }
                    // else if (data.status === 0) {
                    //     alert(data.message)
                    // }
                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                    }

                });
            } else {

                this.setState({ isLoading: false }, () => {
                    alert('Something went wrong error code: fdfdf' + response.status)
                })
            }

        }
        catch (error) {

            this.setState({ isLoading: false }, () => {
                alert('Something went wrong error code: ' + error)
            })
        }
    
    }

    async removeFromWishList(value){
        let body ={
            wishlist:value
        }
        
        try {
            let response = await fetch(

                APP_URLS.removeFromWishlist,
                {
                    'method': 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':this.state.token == ''? "Bearer":"Bearer"+" "+this.state.token.split('"').join(''),
                    },
                    body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {

                    console.log('wishdaata+++', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        this.setState({
                            colorHeart:false,
                            isLoading:false
                        })
                         alert('Removed from WishList')
                         this.wishlist()
                    }
                  
                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                    }

                });
            } else {

                this.setState({ isLoading: false }, () => {
                    alert('Something went wrong error code: fdfdf' + response.status)
                })
            }

        }
        catch (error) {

            this.setState({ isLoading: false }, () => {
                alert('Something went wrong error code: ' + error)
            })
        }
    }

    render() {
        console.log('KA BHAILY')
        return (
            <SafeAreaView style={{flex:1,bottom:10,right:5,backgroundColor:'red'}}>
              <FlatList
                            // horizontal
                            // data={ProductList}
                            data={this.state.wishData}
                            style={{ flex: 1, backgroundColor: 'white'}}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            // showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index, separator }) => {
                                  return (
                                  

                                    <View style={{
                                        // backgroundColor: '#ffffff', borderRadius: 5, height: 350, width: Platform.OS == 'ios' ? 179 : wp('47.2%'), marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                        backgroundColor:'white', borderRadius: 5, height: 350, width: Platform.OS == 'ios' ? 168 : wp('45%'), marginHorizontal:6, marginTop: 10, shadowColor: '#000',
                                        //borderWidth:1,
                                        //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.5,
                                        shadowRadius: 2,
                                        elevation: 2,
                                        opacity: this.state.isOpen == true ? 0.6 : null

                                    }}>

                                        {/* <TouchableOpacity onPress={() => {
                                            this.state.isOpen == true ? this.setState({
                                                isOpen: false
                                            }) : this.props.navigation.navigate('ProductDetail')
                                        }}> */}
                                            <Image source={{ uri: item.images }} style={{ height: 240, width: '100%' ,borderTopRightRadius:6,borderTopLeftRadius:6}} resizeMode='cover' />
                                            {/* <Image source={this.state.product.images} style={{ height: 240, width: '100%' }} resizeMode='stretch' /> */}
                                            <TouchableOpacity onPress={()=>{this.removeFromWishList(item._id)}}>
                                            <View style={{ backgroundColor: '#CECFD4', height: 25, width: 25, borderRadius: 12, zIndex: 100, bottom: 30, alignSelf: 'flex-end', right: 10 }}>
                                                <Image source={APP_IMAGES.heartActive} style={{ height: 14, width: 14, alignSelf: 'center', top: 6 }} resizeMode='contain' />
                                            </View>
                                            </TouchableOpacity>
                                            <View style={{ left: 7, flexDirection: 'row', width: wp('45%') }}>
                                                <Text ellipsizeMode='tail' numberOfLines={2}  style={{ fontSize: 11, color: 'black', fontFamily: APP_FONTS.bold, flexWrap: 'wrap' }}>{item.productName}</Text>
                                             </View>
                                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', bottom: 8 }}>
                                                {/* <Text style={{ color: "#F43297", fontSize: 12, fontFamily: APP_FONTS.bold }}>20.600FCFA</Text> */}
                                                <Text style={{ color: "#F43297", fontSize: 12, fontFamily: APP_FONTS.bold }}>{item.price}FCFA</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold, right: 3 }}>5000</Text>
                                                    <Image source={APP_IMAGES.info} style={{ height: 15, width: 15 }} />
                                                </View>

                                            </View>
                                            <View style={{ height: 30, flexDirection: 'row', justifyContent: 'space-around', left: 3 }}>
                                                <Image source={APP_IMAGES.whatsapp} style={{ height: 70, width: wp('20%'), bottom: 23 }} />
                                                <Image source={APP_IMAGES.facebook} style={{ height: 70, width: wp('20%'), bottom: 23 }} />
                                                <Image source={APP_IMAGES.instagram} style={{ height: 70, width: wp('20%'), bottom: 23 }} />
                                                <Image source={APP_IMAGES.download} style={{ height: 70, width: wp('20%'), bottom: 23 }} />

                                            </View>
                                             
                                        {/* </TouchableOpacity> */}
                                       
                                    </View>
                                )
                            }}
                        />
                                                            {/* {this.state.isLoading?<ShowLoader/>:<ShowLoader/>} */}
            </SafeAreaView>


            //     )
        )
    }
}

// export default Active

class Delivered extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabSelected: true,
            tabData:''

        }
    }
    render() {
        console.log('KAS REY')
        return (
            // <View>
            // <ScrollView >
            // <View>
            // <Text style={{color:"black",fontFamily:AppStyle.fontFamily.M_BOLD}}>February 23, 2022</Text>
            <FlatList
                style={{flex:1,backgroundColor:'#fffff'}}
                data={this.state.tabData}
                // ListHeaderComponent={<Text style={{ color: "black", fontFamily: APP_FONTS.medium}}>February 22, 2022</Text>}
                renderItem={({ item }) => (
                    <View style={{ borderWidth: 1, borderColor: 'grey', marginTop: 10, borderRadius: 8 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            {/* <Image style={{ marginTop: 10 }}
                                resizeMode={"contain"}
                                source={item.source} /> */}
                            {/* <TouchableOpacity activeOpacity={0.5}
                                style={[AppStyle.styleSet.ButtonStyle, { height: 30, width: 80, borderRadius: 5, marginTop: 10, marginRight: 10 }]}>
                                <Text style={{ color: "white", fontFamily: AppStyle.fontFamily.M_BOLD, fontSize: 12 }}>Delivered</Text>
                            </TouchableOpacity> */}
                        </View>
                     <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-evenly", }}>
                     <View>
                     <View style={{ flexDirection: "row" }}>
                     <Text style={{ fontFamily: APP_FONTS.medium }}>Order Number:</Text>
                     <Text style={{ marginLeft: 10, fontFamily: APP_FONTS.medium  }}>4378563478</Text>
                     </View>

                     <View style={{ flexDirection: "row", marginTop: 10 }}>
                     <Text style={{ fontFamily: APP_FONTS.medium }}>Order Items:</Text>
                     <Text style={{ marginLeft: 10, fontFamily: APP_FONTS.medium }}>2</Text>
                     </View>
                     <View style={{ flexDirection: "row", marginTop: 10 }}>
                    {/* <Image
                                        source={require("../../assets/map-pin.png")} /> */}
                                    <Text style={{ marginTop: 5, marginLeft: 10, fontFamily:APP_FONTS.medium , fontSize: 12, color: "black" }}>840, South Spring Street, Los Angles.</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10 }}>
                                    <Text style={{ color: "grey", fontFamily: APP_FONTS.semi_bold , fontSize: 12 }}>Delivery Date Time:</Text>
                                    <Text style={{ color: "black", fontFamily: APP_FONTS.semi_bold, fontSize: 12, marginLeft: 5 }}>Feb 23, 2022 at 11:14 AM</Text>
                                </View>
                            </View>
                            {/* <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("OrderDetails")}
                                style={[AppStyle.styleSet.ButtonStyle, { width: 22, height: 22, borderRadius: 3, top: 30 }]}> */}
                                {/* <Image style={{ tintColor: "white", height: 15 }}
                                    source={require("../../assets/arrow-forward.png")} /> */}
                            {/* </TouchableOpacity> */}
                        </View>
                    </View>
                )}
            />

            // </View>
            // </ScrollView>
            // </View>
        )
 
    }
 
}




class wishlist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // tabSelected: true,
            tabSelected: "Active",
            // isLoading:true
            // type:this.props.route.params.type

        }
        // this.props.navigation.addListener(
        //     'didFocus',
        //     payload => {
            //   const type =  this.props.navigation.getParam('type')
            //   console.log(payload,'payloaadd')
            //   console.log(type,'tupee')
            // })

    }

    //  componentDidMount(){
    //      console.log(this.state.type,'tywpepep')
    //  }
    



    //   Home = ({navigation}) => {

    //     const isFocused = useIsFocused();

    //     const[tabSelected, changeTabSelected] = useState('Active')
    //     const [userData,setUserData]=useState([])
    //     const tabData=[
    //         {source:require("../../assets/food-tag.png")},
    //         {source:require("../../assets/grocery-tag.png")},
    //         {source:require("../../assets/courier-tag.png")}
    //         ]

    //         useEffect(()=>{
    //             get_driver_profile()
    //           },[isFocused])

    //         const get_driver_profile = async() => {
    //         let res=await API.Get_Driver_Data()
    //         if(res.response.status.statusCode==200){
    //             console.log("check the user data",res.response.userData)
    //             // AsyncStorage.getItem("Driver_Name--->>>", )
    //             setUserData(res.response.userData[0])
    //         }
    //     }

    //  AcceptDecline = async() => {
    //     let res = await API.AcceptandDecline()
    //     if(response.response.status.statusCode==200){
    //         console.log("loginnnnnnn>>>>>>",response.response.userData)
    //             // AsyncStorage.setItem("token", response.response.userData.accessToken)
    //             // AsyncStorage.setItem("driverLicense", response.response.userData)
    //             // AsyncStorage.setItem("userName", response.response.userData.firstName+ " "+ response.response.userData.lastName)
    //             setIsLoading(false)
    //             // navigation.navigate('Drawer')
    //             // Keyboard.dismiss()
    //             }
    //             else if (response.response.status.statusCode==400){
    //             setIsLoading(false), 
    //             alert(response.response.status.customMessage)   
    //             } else {
    //                 setIsLoading(false),
    //                 alert("Something went wrong")
    //             }  
    // }
    // }
    //  goToProfile=()=>{
    //     navigation.navigate("Profile",{userData:userData})
    // }
    tab() {
        return (
            <View style={{ backgroundColor:'white'}}>
                <View style={{ flexDirection: "row", padding: 0,marginLeft:10 }}>
                    <TouchableOpacity onPress={() => this.setState({
                        tabSelected:'Active'
                    })} activeOpacity={0.5}
                        style={{
                            height: hp('7%'), width: wp('22%'),
                              justifyContent: "center", alignItems: "center",
                           borderColor: this.state.tabSelected == 'Active' ? "#F43297" : "grey",
                            borderBottomWidth:3
                            
                        }}>
                        <Text style={{ color: this.state.tabSelected == 'Active' ? "#F43297" : "grey", fontFamily: APP_FONTS.bold }}>WishList</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({
                        tabSelected:'Delivered'
                    })} activeOpacity={0.5}
                       style={{
                           left:12,
                        height: hp('7%'), width: wp('22%'),
                          justifyContent: "center", alignItems: "center",
                       borderColor: this.state.tabSelected == 'Delivered' ? "#F43297"  : "grey",
                        borderBottomWidth:3
                        
                    }}>
                        <Text style={{ color: this.state.tabSelected == 'Delivered' ? "#F43297" : "grey", fontFamily: APP_FONTS.bold }}>SharedList</Text>
                    </TouchableOpacity>
                </View>
                {this.selectedTabView()}
            </View>
        )
    }
    selectedTabView() {
        return (
            <View style={{ flex: 1 }}>
                {this.state.tabSelected === "Active" ?
                    <Active /> : <Delivered />
                    // Active() : Delivered()    
                }
            </View>
        )
    }
    //  Active = () => {
    //     return( 
    //             // <Text style={{color:"black",fontFamily:AppStyle.fontFamily.M_BOLD}}>February 22, 2022</Text>
    //             <FlatList
    //             style={{flex:1}}
    //             data={tabData}
    //             ListHeaderComponent={<Text style={{color:"black",fontFamily:AppStyle.fontFamily.M_BOLD}}>February 22, 2022</Text>}
    //             // scrollEnabled={true}
    //             renderItem={({item}) => (
    //             <View style ={{borderWidth:1, borderColor:AppStyle.colorSet.grey,marginTop:10,borderRadius:8}}>
    //                 <Image style={{marginTop:10}}
    //                 resizeMode={"contain"}
    //                 source={item.source}/>
    //                 <View style={{padding:10,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
    //                 <View>
    //                 <View style={{flexDirection:"row"}}>
    //                 <Text style={{fontFamily:AppStyle.fontFamily.M_MEDIUM}}>Order Number:</Text>
    //                 <Text style={{marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM}}>4378563478</Text>
    //                 </View>

    //                 <View style={{flexDirection:"row",marginTop:10}}>
    //                 <Text style={{fontFamily:AppStyle.fontFamily.M_MEDIUM}}>Order Items:</Text>
    //                 <Text style={{marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM}}>2</Text>
    //                 </View>

    //                 <View style={{flexDirection:"row", marginTop:10}}>
    //                 <Image
    //                 source={require("../../assets/map-pin.png")}/>
    //                 <Text style={{marginTop:5,marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM,fontSize:12,color:"black"}}>840, South Spring Street, Los Angles.</Text>
    //                 </View>

    //                 <View style={{flexDirection:"row",marginTop:10}}>
    //                 <Text style={{fontFamily:AppStyle.fontFamily.M_MEDIUM,fontSize:12,}}>Delivery Time:</Text>
    //                 <Text style={{marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM,fontSize:12,color:"black"}}>22 mins</Text>
    //                 </View>

    //                 <View style={{flexDirection:"row",marginTop:10}}>
    //                     <TouchableOpacity activeOpacity={0.5} onPress={()=>AcceptDecline()}
    //                     style={[AppStyle.styleSet.ButtonStyle,{width:100, height:30,borderRadius:5}]}>
    //                     <Text style={{color:"white", fontFamily:AppStyle.fontFamily.M_BOLD,fontSize:12}}>Accept</Text>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity activeOpacity={0.5}
    //                     style={[AppStyle.styleSet.ButtonStyle,{width:100, height:30,borderRadius:5,marginLeft:10}]}>
    //                     <Text style={{color:"white", fontFamily:AppStyle.fontFamily.M_BOLD,fontSize:12}}>Decline</Text>
    //                     </TouchableOpacity>   
    //                 </View>
    //                 </View>
    //                 <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("OrderDetails")}
    //                 style={[AppStyle.styleSet.ButtonStyle,{width:22, height:22,borderRadius:3,marginLeft:20,bottom:15}]}>
    //                 <Image style={{tintColor:"white",height:15}}
    //                 source={require("../../assets/arrow-forward.png")}/>
    //                 </TouchableOpacity>
    //             </View>
    //             </View>
    //              )}
    //              />

    //     )
    // }

    //  Delivered = () => {
    //     return(
    //         // <View>
    //         // <ScrollView >
    //         // <View>
    //         // <Text style={{color:"black",fontFamily:AppStyle.fontFamily.M_BOLD}}>February 23, 2022</Text>
    //         <FlatList
    //         // style={{flex:1}}
    //         data={tabData}
    //         ListHeaderComponent={<Text style={{color:"black",fontFamily:AppStyle.fontFamily.M_BOLD}}>February 22, 2022</Text>}
    //             renderItem={({item}) => (
    //             <View style ={{borderWidth:1, borderColor:AppStyle.colorSet.grey,marginTop:10,borderRadius:8}}>
    //                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    //                 <Image style={{marginTop:10}}
    //                 resizeMode={"contain"}
    //                 source={item.source}/>
    //                 <TouchableOpacity activeOpacity={0.5}
    //                 style ={[AppStyle.styleSet.ButtonStyle,{height:30, width:80,borderRadius:5,marginTop:10,marginRight:10}]}>
    //                 <Text style={{color:"white", fontFamily:AppStyle.fontFamily.M_BOLD,fontSize:12}}>Delivered</Text>
    //                 </TouchableOpacity>
    //                 </View>
    //                 <View style={{padding:10,flexDirection:"row",justifyContent:"space-evenly",}}>
    //                 <View>
    //                 <View style={{flexDirection:"row"}}>
    //                 <Text style={{fontFamily:AppStyle.fontFamily.M_MEDIUM}}>Order Number:</Text>
    //                 <Text style={{marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM}}>4378563478</Text>
    //                 </View>

    //                 <View style={{flexDirection:"row",marginTop:10}}>
    //                 <Text style={{fontFamily:AppStyle.fontFamily.M_MEDIUM}}>Order Items:</Text>
    //                 <Text style={{marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM}}>2</Text>
    //                 </View>
    //                 <View style={{flexDirection:"row", marginTop:10}}>
    //                 <Image
    //                 source={require("../../assets/map-pin.png")}/>
    //                 <Text style={{marginTop:5,marginLeft:10,fontFamily:AppStyle.fontFamily.M_MEDIUM,fontSize:12,color:"black"}}>840, South Spring Street, Los Angles.</Text>
    //                 </View>
    //                 <View style={{flexDirection:"row",marginTop:10}}>
    //                 <Text style={{color:"grey", fontFamily:AppStyle.fontFamily.M_SEMIBOLD,fontSize:12}}>Delivery Date & Time:</Text>
    //                 <Text style={{color:"black", fontFamily:AppStyle.fontFamily.M_SEMIBOLD,fontSize:12,marginLeft:5}}>Feb 23, 2022 at 11:14 AM</Text>
    //                 </View>
    //                 </View>
    //                 <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("OrderDetails")}
    //                 style={[AppStyle.styleSet.ButtonStyle,{width:22, height:22,borderRadius:3,top:30}]}>
    //                 <Image style={{tintColor:"white",height:15}}
    //                 source={require("../../assets/arrow-forward.png")}/>
    //                 </TouchableOpacity>
    //             </View>
    //             </View>
    //         )}
    //         />
    //         // </View>
    //         // </ScrollView>
    //         // </View>
    //     )
    // }


    render() {
       const type = this.props.route.params
       const typeDetail = this.props.route.params
       const typeProductDetail = this.props.route.params
               // const { id } = this.props.route.params;
       console.log(type)
        return (
            <SafeAreaView style={{ flex: 1,top:type||typeDetail||typeProductDetail?30:0 }}>
                {
                    type||typeDetail||typeProductDetail?
                    <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                    {/* { typeProductDetail? */}
                    {/* <View style={{ flexDirection: 'row', left: 0 }}> 
                         <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProductDetail')}}>                   
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 30, fontFamily: APP_FONTS.bold }}>WISHLIST</Text>
                    </View>
                      : */}
                      <View style={{ flexDirection: 'row', left: 0 }}> 
                         <TouchableOpacity onPress={() => {this.props.navigation.push('ProductList',{type:'wishlist'})}}>                   
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 30, fontFamily: APP_FONTS.bold }}>WISHLIST</Text>
                    </View>
                      {/* } */}
                    </View>
                    :null
                }
                
                <View style={{
                    // flexDirection: 'row', borderWidth: 0, shadowColor: '#000',
                    // shadowOffset: { width: 0, height: 5 },
                    // shadowOpacity: Platform.OS == 'ios' ? 0 : 0.5,
                    // shadowRadius: 0,
                    // elevation: 1,
                    flex: 0.10,
                    width: '100%',
                    // backgroundColor: 'yellow',
                    bottom:type||typeDetail||typeProductDetail?35: 20
                }}>

                    {this.tab()}

                </View>

                <View style={{ padding: 10, flex: 1 }}>
                {this.selectedTabView()}

                </View>
                {/* {this.state.isLoading?<ShowLoader/>:null} */}
            </SafeAreaView>
        )
    }

}




export default wishlist;