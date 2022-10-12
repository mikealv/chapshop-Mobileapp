
import React, { Component } from "react";
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, Modal, Platform } from "react-native";
import Header from "../../components/atoms/header";
import ShadowView from "../../components/atoms/shadowView";
import shadowView from "../../components/atoms/shadowView";
import { APP_IMAGES, APP_FONTS, APP_COLOR } from "../../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from 'react-native-device-info';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const majorVersionIOS = parseInt(Platform.Version, 15);


class account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            modalVisible:false,
            deviceIOS:''

        }
    }

    async userDetail() {
        console.log('userDetail===>')
        // let token = ''

        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })
    }

    componentDidMount() {
        this.userDetail()
        DeviceInfo.getDeviceName().then((deviceName) => {
            // iOS: "Becca's iPhone 6"
            // Android: ?
            this.setState({
                deviceIOS:deviceName
            })
            console.log(deviceName,'evicijcij')
            
            // Windows: ?
          });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 ,backgroundColor:this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                {/* <View style={{ padding: 10, flexDirection: 'row', flex: 0.20, backgroundColor: 'yellow' }}> */}
                {/* <Header /> */}
                <View style={{
                    flexDirection: 'row', borderWidth: 0, shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity:Platform.OS == 'ios'?0: 0.5,
                    shadowRadius: 0,
                    elevation: 0.8,
                    flex: 0.35,
                    width: '100%'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View>
                            <Image style={{ top: 12, left: 10, height: 20, width: 20, tintColor: 'black' }}
                                resizeMode="contain"
                                source={APP_IMAGES.arrowLeft} />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 14, fontFamily: APP_FONTS.bold, left: 120, top: 10 }}>ACCOUNT</Text>
                    </View>
                    <View style={{ alignSelf: 'center', top: 0 }}>
                        <Image source={APP_IMAGES.profileImage} style={{ height: 60, width: 60, alignSelf: 'center', left: 27, top: 10 }} />
                        <Text style={{ left: 0, top: 15, color: 'black', fontFamily: APP_FONTS.bold, left: 34 }}>Jennifer Smith</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditProfile') }}>
                            <Text style={{ fontSize: 12, left: 48, top: 20, color: '#F43297', fontFamily: APP_FONTS.bold }}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View>
                    <Text style={{alignSelf:'center'}}>ACCOUNT</Text>
                </View> */}
                </View>
                {/* shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 2, */}
                {/* <View style={{ alignSelf: 'center', borderColor: 'red', borderWidth: 1, bottom: 20 }}>
                    <Image source={APP_IMAGES.profileImage} style={{ height: 80, width: 80, alignSelf: 'center' }} />
                    <Text style={{ left: 0, top: 3, color: 'black', fontFamily: APP_FONTS.bold }}>Jennifer Smith</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('EditProfile') }}>
                        <Text style={{ fontSize: 12, left: 10, top: 5, color: '#F43297', fontFamily: APP_FONTS.bold }}>Edit Profile</Text>
                    </TouchableOpacity>
                </View> */}
                {/* </View> */}
                <View style={{ flex: 1, bottom: 10 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <View style={{
                                backgroundColor: "white",
                                borderRadius: 20,
                                height: Platform.OS === "android" ? 200 : 200,
                                width: '88%',

                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 10,
                                left: 23,
                                top: Platform.OS == "android" ? 120 :this.state.deviceIOS == 'iPhone 12 mini'?300:200,

                            }}>
                                <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', alignSelf: 'center', top: 30, fontSize: 16 }}>Are you sure to Logout ?</Text>
                                <View style={{flexDirection:'row',top:100,alignSelf:'center'}}>
                                <View style={{ backgroundColor: '#F43297', height: 40, width: 100, flexDirection: 'row', borderWidth: 1, borderRadius: 6, right: 10, justifyContent: 'center', alignItems: 'center' }}>
                                  <TouchableOpacity onPress={() => {
                                            AsyncStorage.clear().then(() => {
                                                // this.props.navigation.dispatch(resetStack)
                                                this.props.navigation.navigate('Login')
                                            })
                                            // this.setState({
                                            //     modalVisible:false
                                            // })
                                        }}>
                                    <Text style={{color:'white',fontSize:14}}>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ backgroundColor: '#F43297', height: 40, width: 100, flexDirection: 'row', borderWidth: 1, borderRadius: 6, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={()=>{this.setState({
                                      modalVisible:false
                                  })}}>
                                    <Text style={{color:'white',fontSize:14}}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
                            </View>
                        </Modal>
                        {/* <View style={{ padding: 0}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginLeft: 10, marginRight: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image source={APP_IMAGES.bank} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black' ,top:4}}>
                                    My Bank Details</Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                        {/* <View style={{ padding: 10 }}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginLeft: 10, marginRight: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image source={APP_IMAGES.sharedProducts} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black' ,top:4}}>
                                    My Shared Products </Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                        {/* <View style={{ padding: 10 }}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginLeft: 10, marginRight: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image source={APP_IMAGES.payments} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black',top:4 }}>
                                    My Payments</Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                        {/* <View style={{ padding: 10 }}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginLeft: 10, marginRight: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image source={APP_IMAGES.help} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black' ,top:4}}>
                                    Help</Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                        {/* <View style={{ padding: 10 }}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginRight: 10, marginLeft: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image source={APP_IMAGES.settings} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black' ,top:4}}>
                                    Settings</Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                        {/* <View style={{ padding: 10 }}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginLeft: 10, marginRight: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image source={APP_IMAGES.rateChapShop} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black' ,top:4}}>
                                    Rate ChapShop</Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                        {/* <View style={{ padding: 10 }}> */}
                        <ShadowView styles={{ flexDirection: 'column', marginLeft: 10, marginRight: 10 ,backgroundColor: this.state.modalVisible?'rgba(50,50,50,0.9)':'white'}}>
                            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => {
                                             this.setState({
                                                 modalVisible:true
                                             })
                                        }} >
                                 {/* <Image source={APP_IMAGES.legalandPolicy} style={{ height: 28, width: 28 }} /> */}
                                <Image source={APP_IMAGES.logout} style={{ height: 28, width: 28 }} />
                                <Text style={{ marginLeft: 14, fontSize: 14, fontFamily: APP_FONTS.medium, color: 'black' ,top:4}}>
                                    {/* Legal and Policies</Text> */}
                                    Logout</Text>
                                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 16, justifyContent: 'center' }}>
                                    <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10 }} />
                                </View>
                            </TouchableOpacity>
                        </ShadowView>
                        {/* </View> */}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }



}

export default account;