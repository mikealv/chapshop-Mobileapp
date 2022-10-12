import React, { Component } from "react";
import { Text, Image, SafeAreaView, Modal, View, ImageBackground, TouchableOpacity, Keyboard, TouchableWithoutFeedback, StatusBar, TextInput, ScrollView, Platform } from "react-native";
import { APP_FONTS, APP_IMAGES, BUTTON, APP_URLS } from "../../utils/Common";
import AppStyle from "../../style/AppStyle";
import { number } from "yargs";
// import CountryPicker from 'rn-country-picker';
import CountryPicker from 'react-native-country-picker-modal';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// import But


// const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : 0;


// const DismissKeyboard = ({  }) => (
//     <TouchableWithoutFeedback 
//     onPress={() => Keyboard.dismiss()}> 
//     </TouchableWithoutFeedback>
//     );


class login extends Component {

    constructor(props) {
        super(props)
        this.state = {

            cca2: 'IN',
            phoneNumber: '',
            countryCode: '+91',
            iso: 'IN',
            phone: '',
            otpRecieved: '',
            lineColor:false,
            invalidStatement:false


        }
    }

    async login() {
        // alert(this.state.phone.length)
        // alert(this.state.phone.toString().length)
        // const reg = /^[0]?[789]\d{9}$/;
        // let regex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/

        if (this.state.phone.includes('.') || this.state.phone.includes('-') || this.state.phone === '') {
            alert("Please Enter Your Phone Number")
            this.setState({
                lineColor:true
            })
        }
        else if (this.state.phone.toString().length < 10 || this.state.phone.toString().length > 16) {
            alert("Please Enter Valid Phone Number")
            this.setState({
                lineColor:true,
                invalidStatement:true
            })
        }
        else if (this.state.countryCode == '') {
            alert("Please Enter Country Code")
        }
        else {
            this.loginSignUp()
        }
    }


    async loginSignUp() {

        let body = {
            phoneNumber: this.state.phone,
            countryCode: this.state.countryCode
        }
        console.log(body, 'boddy-dssd->   ' + APP_URLS.loginSignUp)
        try {
            let response = await fetch(

                APP_URLS.loginSignUp,
                {
                    'method': 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {



                console.log('normal')

                response.json().then(data => {

                    console.log('convooo3s', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        this.setState({
                            otpRecieved: data.message
                        })
                        // let token = data.response.userData.accessToken
                        // let user = data.response.userData
                        // userToken = token
                        // AsyncStorage.setItem('@user', JSON.stringify(user)).then(() => {
                        //     this.props.navigation.navigate('DrawerScreen')
                        //     this.setState({
                        //         isLoading:false
                        //     })
                        // })
                        this.props.navigation.navigate('Otp', {
                            otpOutput: this.state.otpRecieved,
                            phoneNumber: this.state.phone,
                            countryCode: this.state.countryCode
                        })
                        // alert('hahaah')
                    }
                    else if (data.status === 0) {
                        alert(data.message)
                    }
                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                    }

                });
            } else {

                this.setState({ isLoading: false }, () => {
                    alert('Something went wrong error code: ' + response.status)
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
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                <SafeAreaView style={{ flex: 1 }}>

                    {/* {
                    Platform.OS == 'android' ? */}
                    <StatusBar
                        // animated={true}
                        backgroundColor="#fcf0f3"
                        barStyle={"dark-content"}
                        showHideTransition={"none"}
                        hidden={false} />
                    {/* :
                   
                             <StatusBar barStyle="dark-content" /> */}






                    {/* <ScrollView style={{ flex: 1 }}> */}

                    <Image source={APP_IMAGES.logo} style={{ height: 38, width: '45%', justifyContent: 'center', alignSelf: 'center', zIndex: 1, bottom: -20 }} />
                    <ImageBackground source={APP_IMAGES.loginBackground} style={{ width: '100%', height: 340, top: -40 }}

                    />
                    <View style={{ flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, top: -120, zIndex: 280, backgroundColor: 'white' }}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.bold, fontSize: 16, color: 'black' }}>Login or SignUp</Text>
                        </View>
                        <View style={{}}>
                            <View style={{}}>
                                <Text style={{ fontSize: 14, left: 20, top: 17, color: '#c2c2c2' }}>Country</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <CountryPicker
                                        countryCode={this.state.cca2}
                                        containerButtonStyle={{
                                            paddingBottom: Platform.OS === 'ios' ? 0 : 6,
                                            left: 21,
                                            // paddingTop: Platform.OS === 'ios' ? 25 : 25,
                                            paddingTop: Platform.OS === 'ios' ? 20 : 25,
                                            // marginTop: Platform.OS === 'ios' ? 20 : 0,
                                            height: 59,
                                            // borderColor:'red',
                                            // borderWidth:1
                                            // width:'88%'
                                            // borderWidth:1,
                                            // borderColor:'red'

                                        }}
                                        // style={{fo}}
                                        withFlag
                                        withModal
                                        withCallingCode
                                        withAlphaFilter
                                        withFilter
                                        withCallingCodeButton
                                        style={{ height: 8 }}
                                        onSelect={(country) => this.setState({ cca2: country.cca2, countryCode: '+' + country.callingCode, iso: country.cca2 })}
                                    // theme={DARK_THEME}
                                    // onClose={()=>this.handleFocus('phoneInput')} 
                                    />
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: '88%',
                                            alignSelf: 'flex-start',
                                            paddingHorizontal: 20,
                                            right: 45,
                                            top:Platform.OS == 'android'? 23:40,
                                            borderBottomColor:'#F6F6F6',
                                            borderBottomWidth: 2
                                        }}
                                        editable={false} selectTextOnFocus={false}


                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            {/* <DismissKeyboard> */}

                            <View style={{ top:Platform.OS == 'android'? 10:30 }}>
                                <Text style={{ left: 20, fontSize: 14, bottom: 2, color: '#c2c2c2' }}>Phone Number</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        width: '88%',
                                        // borderRadius:30, 
                                        // borderColor:_colorSet.mainThemeForegroundColor,
                                        // borderWidth:2, 
                                        alignSelf: 'center',
                                        // paddingHorizontal: 20,
                                        paddingHorizontal: 0,
                                        // fontSize: 18,
                                        // alignself: 'self',
                                        // color: 'black',
                                        // marginBottom: 30,
                                        borderBottomColor:this.state.lineColor == true? '#F43297': '#F6F6F6',
                                        // borderBottomColor: 'black',
                                        borderBottomWidth: 2,
                                        fontSize: 16,
                                        fontFamily: APP_FONTS.medium,
                                        // borderColor:'red',
                                        // borderWidth:1
                                        // top:14
                                        // top:16
                                    }}
                                    // onChangeText={onChangeNumber}
                                    // value={num}
                                    // placeholder="Phone Number"
                                    // placeholderStyle={{right:10}}
                                    keyboardType="numeric"
                                    ref={(rf) => { this.phone = rf }}
                                    // placeholder='Enter Number'
                                    value={this.state.phone}
                                    onChangeText={(text) => this.setState({ phone: text,lineColor:false })}
                                // placeholderTextColor={'#878787'}

                                />
                            </View>
                        </View>
                       
                        {
                            this.state.invalidStatement == true?
                            <View style={{top:Platform.OS == 'ios'? 32:15,left:22}}>
                            <Text style={{color: '#F43297', fontSize: 11 }}>Please enter a 10 digit phone number</Text>
                            </View>
                            :
                            null
                        }

                        <View style={{ top:Platform.OS == 'ios'?35: 30, left: 11 }}>
                            <View style={{ flexDirection: 'row', left: 12 }}>
                                <Text style={{ fontFamily: APP_FONTS.bold, color: '#c2c2c2', fontSize: 11 }}>By Continuing, you agree to ChapShop's </Text>

                                <Text style={{ fontFamily: APP_FONTS.bold, color: '#F43297', fontSize: 11 }}> Terms &</Text>
                                {/* <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 11 }}> and </Text> */}
                            </View>
                            <View style={{ flexDirection: 'row', left: 12 }}>
                                <Text style={{ fontFamily: APP_FONTS.bold, color: '#F43297', fontSize: 11 }}>Conditions </Text>
                                <Text style={{ fontFamily: APP_FONTS.bold, color: '#c2c2c2', fontSize: 11 }}>and</Text>
                                <Text style={{ fontFamily: APP_FONTS.bold, color: '#F43297', fontSize: 11 }}> Privacy Policy </Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, bottom: 20 }}>
                            <TouchableOpacity onPress={() => this.login()} style={[BUTTON, { marginTop: 70 }]}>
                                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')} style={[BUTTON, { marginTop: 70 }]}> */}
                                <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                    Send OTP
                                </Text>
                                {/* <Button> */}


                                {/* </Button> */}
                            </TouchableOpacity>

                        </View>
                        <View style={{ bottom: 15 }}>
                            <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.bold, fontSize: 14, color: '#c2c2c2' }}>or</Text>
                        </View>
                        <View style={{ marginRight: 20, marginLeft: 20, bottom: 8 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('bottomDrawer')} style={{
                                width: "100%", height: 50,
                                backgroundColor: 'white',
                                borderColor: '#F43297',
                                borderWidth: 1,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{ color: "#F43297", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                    Login as Guest
                                </Text>
                                {/* <Button> */}


                                {/* </Button> */}
                            </TouchableOpacity>

                        </View>
                    </View>

                    {/* </ScrollView> */}

                </SafeAreaView>
            </TouchableWithoutFeedback>
            //  <Text style={{fontSize:10}}>Yes it is fine</Text>
        )
    }


}

export default login;