import React, { Component } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Alert } from "react-native"
import Header from "../../components/atoms/header";
import { APP_IMAGES, APP_FONTS, APP_COLOR, BUTTON, APP_URLS } from "../../utils/Common";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-async-storage/async-storage';









class otp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: '',
            output: this.props.route.params.otpOutput.replace('Your Verification code is :', ''),
            phoneNumber: this.props.route.params.phoneNumber,
            countryCode: this.props.route.params.countryCode,
            time: (30)
        }
        console.log(this.state.output, '===++++');
        // var ret = "data-123".replace('data-', '');
        // console.log(ret);
        // var ret = this.state.output.replace('Your Verification code is :', '');
        // console.log(ret,'ret=======>');
        console.log(this.state.phoneNumber, 'ooooutttputtt----');
        console.log(this.state.countryCode, 'ooooutttputtt*****');
    }


    // verify(code) {
    // console.log(code, 'ccooddoooeee')
    // async confirmCode(confirmation) {
    // this.setState({ loading: true })
    // try {
    // let result = await code.confirm(this.state.output);
    // if (code == this.state.output) {
    // this.verified(code)
    // }
    // }
    // } catch (error) {
    // else {
    //     this.setState({ loading: false, code: '' })
    //     console.log('Invalid code.', error);
    //     alert(error)
    // }
    // }
    timer() {

        this.state.time > 0 && setInterval(() => {
            this.setState({
                time: this.state.time === 0 ? 0 : this.state.time - 1
            })

        }, 1000)

    }

    componentDidMount() {

        // const timer = this.state.time > 0 && 
        // setInterval(() => setCounter(this.state.time - 1), 1000);

        // this.interval = setInterval(
        //     () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
        //     1000
        //   );

        // if (this.state.time>0){
        //     setTimeout(() => {
        this.timer()
        // this.setState({
        //     time:this.state.time - 1
        // })
        // },this.state.time)
        // }
        //     this.setState({
        //       time: (this.state.time -1)
        //     })
        //   }, 1000);
    }


    async verify(OTPcode) {

        let body = {
            otp: OTPcode,
            phoneNumber: this.state.phoneNumber
        }
        console.log(body, 'boddy-dssd-> jhjhj ' + APP_URLS.loginSignUp)
        try {
            let response = await fetch(

                APP_URLS.verifyOtp,
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

                    console.log('convooo3sdssdsd', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        let userToken = data.token
                        console.log('userTokeeen',userToken)
                        // let authToken = 'Bearer '+ data.token
                        // console.log(authToken,'authtokeen===')
                        let user = data.user[0]
                        console.log(user,'user-->')

                        // userToken.authToken = authToken
                        // let user = data.response.userData
                        // userToken = token
                        // this.props.navigation.navigate('bottomDrawer')
                        AsyncStorage.setItem('@user',JSON.stringify(user))

                        AsyncStorage.setItem('@userToken', JSON.stringify(userToken)).then(() => {
                            this.props.navigation.navigate('bottomDrawer')
                        //     this.setState({
                        //         isLoading:false
                        //     })
                        })
                        
                        // alert('hahaah')
                    }
                    else if (data.status === 0) {

                        Alert.alert(
                            "Alert ",
                            "Please try again,Incorrect OTP",
                            [
                                {
                                    text: "OK", onPress: () => this.setState({
                                        code: ''
                                    })
                                }
                            ]
                        );

                        // alert(data.message)
                        // this.setState({
                        //     code:''
                        // })
                        // alert('Invalid Otp. Please type Valid Otp')
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

    async resendOTP() {

        let body = {
            phoneNumber: this.state.phoneNumber,
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
                        alert('OTP send to your Phone number ')
                        // this.setState({
                        //     otpRecieved:data.message
                        // })20 APR
                        // let token = data.response.userData.accessToken
                        // let user = data.response.userData
                        // userToken = token
                        // AsyncStorage.setItem('@user', JSON.stringify(user)).then(() => {
                        //     this.props.navigation.navigate('DrawerScreen')
                        //     this.setState({
                        //         isLoading:false
                        //     })
                        // })
                        this.props.navigation.navigate('Otp', { otpOutput: this.state.otpRecieved })
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

    // verify(){
    //     console.log('verified')
    //     this.props.navigation.navigate('bottomDrawer')
    // }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ padding: 10 }}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View>
                                <Image style={{ top: 5, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ top: 20, flex: 1 }}>
                    <View style={{ flex: 0.25 }} />
                    <Image source={APP_IMAGES.otpShape} style={{ justifyContent: 'center', alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', color: 'black', fontFamily: APP_FONTS.semi_bold, fontSize: 13, top: 20 }}>Verify with OTP</Text>
                    <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.semi_bold, fontSize: 12, top: 20 }}>Sent via SMS to {this.state.phoneNumber} </Text>
                    {/* <OTPInputView
                        style={{ height: 40, width: '90%', marginTop: '8%', fontFamily: APP_FONTS.semi_bold }}
                        pinCount={6}
                        placeholderTextColor={APP_COLOR.label_color}
                        // code=} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged={code => { this.setState({ code }) }}
                        codeInputFieldStyle={{
                            fontFamily: APP_FONTS.semi_bold, borderColor: APP_COLOR.light_label_color, borderWidth: 1,
                            borderRadius: 5, color: APP_COLOR.label_color
                        }}
                        codeInputHighlightStyle={{
                            // fontFamily: APP_FONTS.semi_bold, borderColor: APP_COLOR.light_label_color, borderWidth: 1,
                            // borderRadius: 5, color: APP_COLOR.label_color
                            fontFamily: APP_FONTS.semi_bold, borderColor: 'black', borderWidth: 1,
                            borderRadius: 5, color:'black'
                        }}

                    /> */}
                    <OTPInputView style={{ height: 40, width: '85%', marginTop: '10%', fontFamily: APP_FONTS.semi_bold, alignSelf: 'center', color: 'black' }}
                        code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        onCodeChanged={code => { this.setState({ code }) }}
                        codeInputFieldStyle={{ color: 'black' }}
                        pinCount={6}
                    />
                   
                        {
                            this.state.time === 0?
                            <TouchableOpacity onPress={() => { this.resendOTP() }} >
                            <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.semi_bold, fontSize: 12, marginTop: 20 ,borderBottomWidth:1}}>Resend OTP</Text>
                            </TouchableOpacity>
                            :
                            <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.semi_bold, fontSize: 12, marginTop: 20 }}>Resend OTP in 00:{this.state.time}</Text>


                        }
                    <View style={{ marginLeft: 20, marginRight: 20 }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.code === '' || this.state.code.length < 6) {
                                    alert('Invalid code')
                                } else {
                                    this.verify(this.state.code)
                                }

                            }} style={[BUTTON, { marginTop: 70 }]}
                        // this.confirmCode(this.state.confirmation)
                        >
                            <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                Verify
                            </Text>
                            {/* <Button> */}


                            {/* </Button> */}
                        </TouchableOpacity>

                    </View>

                </View>
            </SafeAreaView>
        )
    }


}

export default otp;


