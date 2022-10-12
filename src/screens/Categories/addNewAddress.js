
import React, { Component } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { APP_FONTS, APP_IMAGES, APP_URLS } from "../../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";




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



class addNewAddress extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            // addressPage: false/
            addressPage: false,
            shoppingBag: '',
            paymentPage: false,
            bagPage: true,
            fullName: this.props.route.params.nameAddress,
            phone: this.props.route.params.mobNo,
            vile: '',
            commune: '',
            zone: '',
            pinCode:this.props.route.params.pinCode,
            additionalDetails: '',
            buildingName: '',
            states:this.props.route.params.states,
            // type:'',
            type: this.props.route.params.type,
            // nameAddress: this.props.route.params.nameAddress,
            houseNo: this.props.route.params.houseNo,
            city: this.props.route.params.city,
            area: this.props.route.params.area,
            // mobNo: this.props.route.params.mobNo,
            nearByLocation:this.props.route.params.nearLocation,
            id: this.props.route.params.iD

        }
        console.log(this.state.phone,'PHOOONE')
        console.log(this.state.pinCode,'PINCODE')
        console.log(this.state.city,'CITY')
    }

    componentDidMount() {
        this.userDetail()
        console.log(this.state.type, 'typeeee')
        {
            this.state.type == 'update' ?
                this.setState({
                    fullName: this.state.fullName,
                    phone: this.state.phone,
                    buildingName: this.state.houseNo,
                    zone: this.state.area,
                    city: this.state.city,
                    pinCode:this.state.pinCode,
                    states:this.state.states,
                    nearByLocation:this.state.nearByLocation,
                    id:this.state.id
                },()=>{console.log(this.state.fullName,this.state.phone,this.state.buildingName,this.state.zone,this.state.city,this.state.pinCode,this.state.nearByLocation,this.state.states,'FPBNZCP')})
                : null
        }
        // if(this.state.type == 'update'){
        // this.setState({
        //     fullName:this.state.


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

    async editAddress() {
        console.log('khdskdshksdh')
        let body = {

            name: this.state.fullName,
            phoneNumber: this.state.phone,
            houseNo: this.state.buildingName,
            area: this.state.zone,
            pinCode:this.state.pinCode,
            city: this.state.city,
            state: this.state.states ,
            nearByLocation: this.state.nearByLocation,
            _id:this.state.type == 'update' ?this.state.id:''
        }

        console.log(body, 'NewAddress')

        try {
            let response = await fetch(

                APP_URLS.editAddress,
                {
                    'method': 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + this.state.token.split('"').join(''),
                    },
                    body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {


                    if (data.status == 1) {
                        // alert(data.message)
                        // this.props.navigation.push('AddToBag')
                        // this.props.navigation.navigate('AddToBag',{type:'addressRefresh'})
                        // this.props.navigation.navigate('AddToBag',{type:'addressRefresh'})
                        this.props.navigation.goBack()
                    }

                    else {
                        this.setState({
                            isLoading: false
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
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 0.12, flexDirection: 'row', justifyContent: 'space-between', top: 0 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>ADD NEW ADDRESS</Text>
                    </View>
                </View>
                {/* <KeyboardAvoidingView behavior='height' enabled > */}
                <View style={{ flex: 1}}>
                    <ScrollView style={{ flex: 1, bottom: 0 }}>


                        <View style={{ flex: 0.05, flexDirection: 'row' }}>
                            <Image source={APP_IMAGES.callIcon} style={{ height: 20, width: 20, top: 2, left: 20 }} />
                            <Text style={{ left: 40, top: 0, color: 'black', fontSize: 14, fontFamily: APP_FONTS.bold }}>Contact Details</Text>
                        </View>

                        <View style={{ flex: 0.30, top: 20 }}>
                            <Text style={{ alignSelf: 'flex-start', marginLeft: 19, top: 20 }}>Full Name*</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '88%',
                                    alignSelf: 'center',
                                    // paddingHorizontal: 20,
                                    // right: 45,
                                    // top: 23,
                                    borderBottomColor: '#ebebeb',
                                    borderBottomWidth: 2,
                                    top: 15
                                }}
                                onChangeText={(fullName) => this.setState({ fullName })}
                                value={this.state.fullName}

                            />

                            {/* <View style={{ flex: 0.11 }}> */}
                            <Text style={{ alignSelf: 'flex-start', marginLeft: 19, top: 30 }}>Phone Numbers*</Text>
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '88%',
                                    alignSelf: 'center',
                                    // paddingHorizontal: 20,
                                    // right: 45,
                                    // top: 23,
                                    borderBottomColor: '#ebebeb',
                                    borderBottomWidth: 2,
                                    top: 20
                                }}
                                value={this.state.phone}
                                onChangeText={(phone) => this.setState({ phone: phone })}
                                // editable={false} selectTextOnFocus={false}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={{backgroundColor:'#f0f0f0',height:10,top:48}}>

                        </View>
                        <View style={{  flex: 0.15, flexDirection: 'row', top: 55}}>
                            <Image source={APP_IMAGES.mapPin} style={{ height: 20, width: 20, top: 2, left: 20 }} resizeMode={'contain'} />
                            <Text style={{ left: 40, top: 0, color: 'black', fontSize: 14, fontFamily: APP_FONTS.bold }}>Address</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'space-between',top:0}}>
                        <View style={{ flex: 0.05, bottom: 0, borderColor: 'red', top: 70}}>
                                <Text style={{ left: 20 }}>House no/Building Name</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        width: '88%',
                                        alignSelf: 'center',
                                        // paddingHorizontal: 20,
                                        // right: 45,
                                        // top: 23,
                                        borderBottomColor: '#ebebeb',
                                        borderBottomWidth: 2,
                                        top: 0
                                    }}
                                    onChangeText={(buildingName) => this.setState({ buildingName })}
                                    value={this.state.buildingName}
                                />
                            </View>
                            <View style={{ flex: 0.05, top: 80}}>
                                <Text style={{ left: 20 }}>Road Name/Area Name/Colony</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        width: '88%',
                                        alignSelf: 'center',
                                        // paddingHorizontal: 20,
                                        // right: 45,
                                        // top: 23,
                                        borderBottomColor: '#ebebeb',
                                        borderBottomWidth: 2,
                                        top: 0
                                    }}
                                    onChangeText={(zone) => this.setState({ zone })}
                                    value={this.state.zone}
                                />
                            </View>
                            <View style={{ flex: 0.05, top: 100}}>
                                <Text style={{ left: 20 }}>Pin Code</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        width: '88%',
                                        alignSelf: 'center',
                                        // paddingHorizontal: 20,
                                        // right: 45,
                                        // top: 23,
                                        borderBottomColor: '#ebebeb',
                                        borderBottomWidth: 2,
                                        top: 0
                                    }}
                                    onChangeText={(pinCode) => this.setState({ pinCode })}
                                    value={this.state.pinCode}
                                    // value={'28828'}
                                />
                            </View>
                            <View style={{ flex: 0.05, flexDirection: 'row', top: 90 }}>
                                <View style={{ flex: 0.50, top: 40, height: hp('20%') }}>
                                    <Text style={{ left: 20 }}>City</Text>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: '70%',
                                            // alignSelf:,
                                            // paddingHorizontal: 20,
                                            // right: 45,
                                            // top: 23,
                                            borderBottomColor: '#ebebeb',
                                            borderBottomWidth: 2,
                                            bottom: 10,
                                            left: 20
                                        }}
                                        onChangeText={(city) => this.setState({ city })}
                                        value={this.state.city}


                                    // keyboardType="numeric"
                                    />
                                </View>

                                <View style={{ flex: 0.50, top: 40, height: hp('20%') }}>
                                    <Text style={{ top: 0, right: 0, left: 10 }}>State</Text>
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: '70%',
                                            // alignSelf:,
                                            // paddingHorizontal: 20,
                                            // right: 45,
                                            // top: 23,
                                            borderBottomColor: '#ebebeb',
                                            borderBottomWidth: 2,
                                            bottom: 10,
                                            left: 10
                                        }}
                                        onChangeText={(states) => this.setState({ states })}
                                        value={this.state.states}


                                    // keyboardType="numeric"
                                    />
                                </View>
                            </View>
                           

                            {/* <View style={{ flex: 0.05, bottom: 0, borderColor: 'red', top: 20}}>
                                <Text style={{ left: 20 }}>House no/Building Name</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        width: '88%',
                                        alignSelf: 'center',
                                        // paddingHorizontal: 20,
                                        // right: 45,
                                        // top: 23,
                                        borderBottomColor: '#ebebeb',
                                        borderBottomWidth: 2,
                                        top: 0
                                    }}
                                    onChangeText={(buildingName) => this.setState({ buildingName })}
                                    value={this.state.buildingName}
                                />
                            </View> */}
                            <View style={{ flex: 0.10, bottom: 0, borderColor: 'red', top: 60 ,height:hp('20%')}}>
                                <Text style={{ left: 20 }}>Nearby Location (optional)</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        width: '88%',
                                        alignSelf: 'center',
                                        // paddingHorizontal: 20,
                                        // right: 45,
                                        // top: 23,
                                        borderBottomColor: '#ebebeb',
                                        borderBottomWidth: 2,
                                        top: 0
                                    }}
                                    onChangeText={(nearByLocation) => this.setState({ nearByLocation })}
                                    value={this.state.nearByLocation}
                                />
                            </View>
                        </View>
                        {/* </View> */}
                    </ScrollView>
                </View>
                {/* </KeyboardAvoidingView> */}
                <View>

                </View>



                <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, padding: 15 }}>


                    <View style={{ flexDirection: 'row', left: 30, width: 270, height: 46, backgroundColor: '#F43297', borderRadius: 8, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.editAddress()}>
                            <View style={{}}>
                                {
                                    this.state.type == 'update' ?
                                        <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 0, top: 10 }}>Save Address</Text>
                                        :
                                        <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 0, top: 10 }}>Add Address</Text>
                                }

                            </View>
                        </TouchableOpacity>
                    </View>


                </View>










            </SafeAreaView>
        )
    }



}

export default addNewAddress;