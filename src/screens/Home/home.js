import React, { Component } from "react";
import { Image, SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList, ImageBackground, Modal, Platform, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native";
import { APP_IMAGES, APP_FONTS, BUTTON, APP_URLS } from "../../utils/Common";
import DatePicker from 'react-native-date-picker';
import CountryPicker from 'react-native-country-picker-modal';
import AppStyle from '../../style/AppStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import { getVersion } from 'react-native-device-info';
import { heightPercentageToDP } from "react-native-responsive-screen";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




// import axios from 'react-native-axios';

const CATEGORY = [
    {
        id: 1,
        category: require('../../../assets/images/image-one.png'),
        name: 'Tops'
    },
    {
        id: 2,
        category: require('../../../assets/images/image-two.png'),
        name: 'Tshirts'
    },
    {
        id: 3,
        category: require('../../../assets/images/image-three.png'),
        name: 'Jackets',

    },
    {
        id: 4,
        category: require('../../../assets/images/image-four.png'),
        name: 'Jackets'
    },
    {
        id: 5,
        category: require('../../../assets/images/image-one.png'),
        name: 'Tops'
    },
    {
        id: 6,
        category: require('../../../assets/images/image-two.png'),
        name: 'Jackets'
    }
]

const ITEMS = [
    {
        id: 1,
        category: require('../../../assets/images/product-img.png'),
        name: 'Tops'
    },
    {
        id: 2,
        category: require('../../../assets/images/product-img.png'),
        name: 'Tshirts'
    },
    {
        id: 3,
        category: require('../../../assets/images/product-img.png'),
        name: 'Jackets',

    },
    {
        id: 4,
        category: require('../../../assets/images/product-img.png'),
        name: 'Jackets'
    },
    {
        id: 5,
        category: require('../../../assets/images/product-img.png'),
        name: 'Tops'
    },
    {
        id: 6,
        category: require('../../../assets/images/product-img.png'),
        name: 'Jackets'
    }
]

const createFormData = (image) => {
    var data = new FormData();
    data.append('upload', {
        uri: Platform.OS === "android" ? image : image.replace("file://", ""),
        name: `chapShop${Date.now()}.jpg`,
        type: 'image/*'
    })
    return data
}

let readableVersion = DeviceInfo.getReadableVersion();
console.log(readableVersion,'reead')
const systemVersion = DeviceInfo.getSystemVersion();
console.log(systemVersion,'syyg')
let version = DeviceInfo.getVersion();
console.log(version,'version===cc')
const  deviceName =DeviceInfo.getDeviceName()
console.log(deviceName,'devicewa')
DeviceInfo.getDeviceName().then((deviceName) => {
    // iOS: "Becca's iPhone 6"
    // Android: ?
    console.log(deviceName,'evicijcij')
    
    // Windows: ?
  });
  



// let formdata = new FormData();
const majorVersionIOS = parseInt(Platform.Version, 15);

class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true,
            // date: '',
            setOpen: true,
            // mCountryCode: '91',
            countryCode: '+91',
            iso: 'IN',
            cca2: 'IN',
            open: true,
            date: new Date(),
            showActiveMen: false,
            showActiveWomen: false,
            phone: '',
            gender: '',
            token: '',
            alertModal: false,
            search:'',
            deviceIOS:''

        }
        this.props.navigation.addListener(
            'didFocus',
            payload => {
              // const type =  this.props.navigation.getParam('type')
              console.log(payload,'payloaadd')
              // console.log(payload)
            })
        
        
        
    }

    async userDetail() {
        console.log('userDetail===>')
        // let token = ''

        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        //    let shahank =JSON.parse(JSON.stringify(userS))
        // JSON.stringify(userS))
        // console.log('convooo3sWW', JSON.parse(userS))
        // console.log(userS.accessToken\,'hdbjdsdjsdbjsdb')
        //console.log(userS[0]._id,'userS-xx--->')
        // alert(userS)
        // })
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })

        // await AsyncStorage.getItem('@user',JSON.stringify(user)).then(() => {
        //     console.log(user, 'fcmtokenLoginß')

        // })
    }

    date() {
        this.setState({
            date: ''
        })
    }
    closeModal() {
        console.log('bababa')
        this.setState({
            modalVisible: false
        })
    }
    open() {
        this.setState({
            setOpen: true
        })
    }


    componentDidMount() {
        DeviceInfo.getDeviceName().then((deviceName) => {
            // iOS: "Becca's iPhone 6"
            // Android: ?
            this.setState({
                deviceIOS:deviceName
            })
            console.log(deviceName,'evicijcij')
            
            // Windows: ?
          });
        this.userDetail()
        // {
            console.log(AsyncStorage.getItem('@SubmitDetail'),'asynnnc')
            AsyncStorage.getItem('@SubmitDetail') == true?
            this.setState({
                modalVisible:false
            })
            :
            null
        // }
    }

    setModalVisible() {
        if (AsyncStorage.getItem('@user',JSON.stringify(user))
        ) {
            this.setState({
                modalVisible: false
            })
        }
        else {
            this.setState({
                modalVisible: true
            })
        }
        // AsyncStorage.setItem('@userToken', JSON.stringify(userToken)).then(() => {
        //     this.setState({
        //     // modalVisible: true,
        //     modalVisible: false,
        //     // alertModal:value
        // })
        // })

    }
    setModalAlert() {
        this.setState({
            alertModal: false
        })
    }

    _selectedValue(index) {
        this.setState({
            mCountryCode: index
        })

    }

    dateSet() {
        this.setState({
            date: ''
        })
    }

    //     async submit() {

    //         let formData = new FormData()
    //         formData.append("dateOfBirth", this.state.date.toLocaleDateString())
    //         formData.append("gender", this.state.gender)
    //         formData.append("moneyPhoneNumber", this.state.countryCode + this.state.phone)
    //         // console.log(this.state.token, 'tokeeen--{{}}  ')
    //         // console.log(formData, 'formData-->')
    //         // try {




    // let Authorization = 'Bearer '+this.state.token 

    // console.log(Authorization,"Authorization====")

    //         const res = await axios({
    //             method: 'PUT',
    //             url: APP_URLS.editAccount,
    //             data: formData,
    //             headers: {
    //                 headers: { "Content-Type": "multipart/form-data" },
    //                 Authorization: this.state.to
    //             },
    //         });

    //         console.log(res, "axios res",)
    //         //             let response = await fetch(

    //         //                 APP_URLS.editAccount,
    //         //                 {
    //         //                     'method': 'PUT',
    //         //                     headers: {
    //         //                         // 'Accept': 'application/json',
    //         //                         // 'Content-Type': 'application/json',
    //         //                         'Content-Type': 'multipart/form-data',
    //         //                         // 'Authorization': 'Bearer'+this.state.token
    //         //                         'Authorization': "Bearer"+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRjMGMyOWMzYmM2MzJkZjJjYTYxMGEiLCJpYXQiOjE2NTEyMTY1NTJ9.QdAbzE1bqe5zvU2WVJ1CHTaTapQDJR6KdGJP_wfmneY'
    //         // // '                        // 'Authorization':'Bearer'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRkMjQ5ZmQwZTcyNTNiYzdlOTAwMjAiLCJpYXQiOjE2NTExNDY1MDF9.f82KLM35P4M3nzs_8Kf-cHHD8Nv9uUQCGGO_Dsc6oQY'
    //         //                         // 'Authorization':'Bearer'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRkMjQ5ZmQwZTcyNTNiYzdlOTAwMjAiLCJpYXQiOjE2NTExNDU0Mjl9.-GmIfeVGjgtlvTMoX9qGiI848zWRETDo78U5nRfpD_A'
    //         //                     },
    //         //                     // body: createFormData(body)
    //         //                     data: formData

    //         //                 }

    //         //             );



    //         //             if (response.status == 200) {



    //         //                 console.log('normal')

    //         //                 response.json().then(data => {

    //         //                     console.log('convooo3shomomoe', JSON.stringify(data))
    //         //                     //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
    //         //                     // if (data.response.status.statusCode === 200) {
    //         //                     if (data.status === 1) {
    //         //                         // this.setState({
    //         //                         //     otpRecieved: data.message
    //         //                         // })
    //         //                         alert('Details Submitted')
    //         //                         // let token = data.response.userData.accessToken
    //         //                         // let user = data.response.userData
    //         //                         // userToken = token
    //         //                         // AsyncStorage.setItem('@user', JSON.stringify(user)).then(() => {
    //         //                         //     this.props.navigation.navigate('DrawerScreen')
    //         //                         //     this.setState({
    //         //                         //         isLoading:false
    //         //                         //     })
    //         //                         // })
    //         //                         // this.props.navigation.navigate('Otp', {
    //         //                         //     otpOutput: this.state.otpRecieved,
    //         //                         //     phoneNumber: this.state.phone,
    //         //                         //     countryCode: this.state.countryCode
    //         //                         // })
    //         //                         // alert('hahaah')
    //         //                     }
    //         //                     else if (data.status === 0) {
    //         //                         alert(data.message)
    //         //                         // alert('luliya')
    //         //                         // console.log(body, 'boddy-edit123->   ' + APP_URLS.editAccount)

    //         //                         console.log(this.state.token, "this.state.token")
    //         //                     }
    //         //                     else {
    //         //                         this.setState({ isLoading: false }, () => {
    //         //                         })
    //         //                     }

    //         //                 });
    //         //             } else {

    //         //                 this.setState({ isLoading: false }, () => {

    //         //                     alert('Something went wrong error code: ' + response.status)
    //         //                 })
    //         //             }

    //         // }
    //         // catch (error) {

    //         //     this.setState({ isLoading: false }, () => {
    //         //         alert('Something went wrong error code: ' + error)
    //         //     })
    //         // }
    //     }

    async submitDetails() {
        let formdata = new FormData();

        formdata.append("fullName", " ");
        formdata.append("gender", this.state.gender);
        formdata.append("dateOfBirth", this.state.date.toLocaleDateString());
        formdata.append("moneyPhoneNumber", this.state.countryCode + this.state.phone);
        formdata.append("email", " ");
        formdata.append("image", "");
        //     uri: '',
        //     name: 'image.jpg',
        //     type: 'image/jpeg',
        // });

        //     let body = {
        //         fullName: "neeraj",
        //         gender: ,
        //         dateOfBirth: ,
        //         moneyPhoneNumber: ,
        //         email:,
        //         image:''
        //         // otp: OTPcode,
        //         // phoneNumber: this.state.phoneNumber
        // }
        console.log(formdata, 'boddy-dssd-> jhjhj ' + APP_URLS.editAccount)
        console.log(this.state.token, 'bod')
        try {
            let response = await fetch(

                APP_URLS.editAccount,
                {
                    'method': 'PUT',
                    headers: {
                        // 'Content-Type': 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'Authorization': "Bearer"+" "+this.state.token.split('"').join(''),
                        // 'Authorization':'Bearer'+this.state.token
                        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE0YzUwY2ZjMzc1MGRiZWIyNWE4NzYiLCJpYXQiOjE2NTUwMzg0ODl9.TknyyPsu419H3ynbncE4_nIjEdGmrHTmu1ncv68fr7c'

                        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE0YzUwY2ZjMzc1MGRiZWIyNWE4NzYiLCJpYXQiOjE2NTQ5NzY1ODV9.ZYxpWN16Tlnakq8YQqfUNXAIGcRaE_K_3FutUtP420A '
                        // 'Authorization': 'Bearer ' + this.state.bearer

                    },
                    // body: JSON.stringify(body)
                    body: formdata
                }
            );
            console.log('jhjashjdshsjdhj')
            if (response.status == 200) {

               

                response.json().then(data => {

                    console.log('convooo3sdssdsd', JSON.stringify(data))
                  
                    console.log(typeof this.state.token,'kooo')
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        // let userToken = data.token
                        // console.log('userTokeeen', userToken)
                        // let authToken = 'Bearer '+ data.token
                        // console.log(authToken,'authtokeen===')
                        this.setState({
                            modalVisible: false,
                            alertModal: true,
                            // Submited:true
                        })
                        // let value = true
                        // const storeData = async (true) => {
                        //     try {
                        //       await AsyncStorage.setItem('@storage_Key', true)
                        //     } catch (e) {
                        //       // saving error
                        //     }
                        //   }
                        let submitted = true

                        // AsyncStorage.setItem('@SubmitDetail',JSON.stringify(submitted))
                        AsyncStorage.setItem('@SubmitDetail',true)
                        console.log(AsyncStorage.getItem('@SubmitDetail'),'l0000')
                        
                        // userToken.authToken = authToken
                        // let user = data.response.userData
                        // userToken = token
                        // this.props.navigation.navigate('bottomDrawer')

                        // AsyncStorage.setItem('@userToken', JSON.stringify(userToken)).then(() => {
                        // this.props.navigation.navigate('bottomDrawer')
                        //     this.setState({
                        //         isLoading:false
                        //     })
                        // })

                        // alert('hahaah')
                    }
                    else if (data.status === 0) {
                        alert(data.message)

                        // Alert.alert(
                        //     "Alert ",
                        //     "Please try again,Incorrect OTP",
                        //     [
                        //         {
                        //             text: "OK", onPress: () => this.setState({
                        //                 code: ''
                        //             })
                        //         }
                        //     ]
                        // );
                    }

                    // alert(data.message)
                    // this.setState({
                    //     code:''
                    // })
                    // alert('Invalid Otp. Please type Valid Otp')
                    // }
                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                    }

                });
            } else {

                this.setState({ isLoading: false }, () => {
                    alert('Something went wrong error code: 000' + response.status)
                })
            }

        }
        catch (error) {
            console.log('Bearer'+this.state.token,'"gf')

            this.setState({ isLoading: false }, () => {
                alert('Something went wrong error code:878 ' + error)
            })
        }
    }

    submit() {
        // alert('Your Details have been submited')
        // this.setState({
        //     alertModal:true
        // })
        this.submitDetails()
        // this.setState({
        //     modalVisible: false,
        //     alertModal: true
        // })
    }
    submitQ() {
        // alert('Your Details have been submited')
        this.setState({
            modalVisible: false
        })
    }

    // submit(){
    //     // alert('Details Submitted')
    //     this.setState({
    //         modalVisible:false
    //     })
    // }

    activeGender() {
        this.setState({
            showActiveMen: true,
            showActiveWomen: false,
            gender: 'male'
        })
    }
    activeWomenGender() {
        this.setState({
            showActiveWomen: true,
            showActiveMen: false,
            gender: 'female'

        })
    }


    womenClothView(item) {
        return (

            <View style={{ marginLeft: 0, justifyContent: 'center', borderRadius: 6, alignItems: 'center', height: 284, width: 160 }}>
                <View style={{ height: 280, width: '98%', top: 46 }}>
                    <Image source={item.category} style={{ width: '100%', height: 210 }} resizeMode='stretch' />
                </View>
                <View style={{ backgroundColor: 'white', bottom: 46, padding: 5, width: '98%', height: 90, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Women Black and</Text>
                    <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Pink Wrap Dress </Text>
                    <Text style={{ color: '#F43297', fontSize: 13, fontFamily: APP_FONTS.bold }}>$20.00</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} />
                        <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text>
                    </View>
                </View>
            </View>
        )

    }

    handlesearchText(){
        this.se
    }

    render() {
        const { date } = this.state;
        return (
            <SafeAreaView style={{ flex: 1}}>
                <StatusBar
                    backgroundColor="white"
                    barStyle={"dark-content"}
                    showHideTransition={"none"}
                    hidden={false} />
                 {/* <View style={{backgroundColor:'red'}}> */}
                <ScrollView  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={{ flex: 1, paddingBottom: 80 }}>
                        <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={APP_IMAGES.profileImage} style={{ height: 40, width: 40, left: 7, bottom: 3 }} />
                                <Text style={{ left: 20, top: 3, color: 'black', fontFamily: APP_FONTS.bold }}>Jennifer Smith</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={APP_IMAGES.bell} style={{ height: 30, width: 15, right: 25 }} resizeMode={'contain'} />
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToBag')}>
                                <Image source={APP_IMAGES.cart} style={{ height: 30, width: 15, right: 5 }} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', top: 20, right:7}}>
                            <Image source={APP_IMAGES.search} style={{ height: 20, width: 20, top: 10, left:30 ,zIndex:1 }} resizeMode='contain' />
                            <TextInput ref={input => { this.textInput = input }}
                                                                // letterSpacing={5}
                                style={{
                                    width: '92%',
                                    height: 45,
                                    fontSize: 13,
                                    fontFamily: APP_FONTS.medium,
                                    borderRadius: 5,
                                    // alignSelf: 'flex-start',
                                    textAlign:'left',
                                    color: 'black',
                                    //fontWeight:'400',
                                    borderColor: '#D6D6D6',
                                    borderWidth: 1,
                                    backgroundColor: 'white',
                                    paddingLeft:40
                                    // left:30,
                                    // left: 10
                                    // padding: 10,
                                    // textAlign: 'center'
                                }}
                                placeholder="Search by Keyboard or Product ID"
                                // style={{left:10}}
                                keyboardType="default"
                                value={this.state.search}
                                    onChangeText={(text) => this.setState({ search: text })}
                                placeholderTextColor={'#A0A0A0'}>
                                {/* // onChangeText={this.handlesearchText()}> */}
                            </TextInput>
                            <TouchableOpacity 
                            style={{right:Platform.OS == 'ios'?0: 20,width:Platform.OS == 'ios'?0: 30}}
                            onPress={()=>{this.setState({
                                search:''
                            })}
                            
                            }>
                            <Image source={APP_IMAGES.closedCircle} style={{height:12,width:12,right:Platform.OS == 'ios'?24:10,top:16}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, width: '100%', left: 10, top: 30 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ left: 2 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 13, color: 'black', padding: 10 }}>Best Sellers</Text>
                                </View>
                                <View style={{ right: 20 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 12, color: '#F43297', padding: 10 }}>View All</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'space-between', top: 10 }}>
                                <FlatList
                                    horizontal
                                    data={CATEGORY}
                                    style={{ flex: 1 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index, separator }) => {

                                        let bg = ''
                                        if (item.name == 'Chinese') {
                                            bg = '#CAE9F6'
                                        }
                                        if (item.name == 'American') {
                                            bg = '#CAF7D5'
                                        }
                                        if (item.name == 'Indian') {
                                            bg = '#F7CFC9'
                                        }
                                        if (item.name == 'Italian') {
                                            bg = '#CCCAF1'
                                        }
                                        return (


                                            <View style={{ marginLeft: 10, justifyContent: 'center', borderRadius: 6, alignItems: 'center' }}>
                                                <View style={{ width: 70, height: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Image source={item.category} style={{ height: 70, width: 70, right: 0 }} resizeMode='contain' />
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold }}>{item.name}</Text>
                                                </View>
                                            </View>



                                        )
                                    }}
                                />
                            </View>

                            <View style={{ top: 40, flex: 1 }}>
                                <ImageBackground source={APP_IMAGES.patternBackground} style={{ height: '180%', width: '100%', right: 10 }}>

                                    <View style={{ padding: 20, flex: 1 }}>
                                        <Text style={{ fontFamily: APP_FONTS.regular, fontSize: 12 }} >BEST SELLERS</Text>
                                        <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 16 }} >PRODUCTS TO SHARE TODAY</Text>
                                        <Text style={{}}>Loreum ipsum dolor sit amet,consectetur adipiscing elit,</Text>
                                        <Text style={{}}>sed do elusmod tempor incididunt</Text>
                                        <View style={{ top: 10 }}>
                                            <TouchableOpacity onPress={() => this.login()} style={{
                                                width: "30%", height: 30,
                                                backgroundColor: '#F43297',
                                                borderRadius: 5,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                flexDirection: 'row'
                                            }}>
                                                <Image source={APP_IMAGES.share} style={{ height: 15, width: 15, right: 6 }} resizeMode="contain" />
                                                <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 12 }}>
                                                    Share All
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{ flex: 1, top: 20 }}>

                                            <FlatList
                                                horizontal
                                                data={ITEMS}
                                                style={{ flex: 1 }}
                                                keyExtractor={item => item.id}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item, index, separator }) => {
                                                    return (

                                                        <View style={{ marginLeft: 0, justifyContent: 'center', borderRadius: 6, alignItems: 'center', height: 284, width: 160 }}>
                                                            <View style={{ height: 250, width: '98%', top: 46 }}>
                                                                <Image source={item.category} style={{ width: '100%', height: 210 }} resizeMode='stretch' />
                                                            </View>
                                                            <View style={{ backgroundColor: 'white', bottom: 46, padding: 5, width: '98%', height: 90, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                                                <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Women Black and</Text>
                                                                <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Pink Wrap Dress </Text>
                                                                <Text style={{ color: '#F43297', fontSize: 13, fontFamily: APP_FONTS.bold }}>20.00 FCFA</Text>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} />
                                                                    <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}> 2 FCFA</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    )
                                                }}
                                            />
                                        </View>
                                        
                                    </View>
                                    <View>

                                    </View>
                                </ImageBackground>
                                
                            </View>
                           <View style={{backgroundColor:'red',flex:1}}>

                           </View>
                        </View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            // style={{backgroundColor:'red'}}
                            visible={this.state.alertModal}
                            onRequestClose={() => {
                                this.setModalAlert(!this.state.alertModal);
                            }}>
                            <View
                                style={{
                                    justifyContent: 'flex-start',
                                    backgroundColor: 'white',
                                    // backgroundColor: 'red',
                                    borderRadius: 20,
                                    height: Platform.OS === "android" ? 130 : 120,
                                    width: '88%',

                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    left: 23,
                                    top: Platform.OS == "android" ? 250 : 30,
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', right: 10, top: 10 }}>
                                    <TouchableOpacity onPress={() => { this.setModalAlert(!this.state.alertModal) }}>
                                        <Image source={APP_IMAGES.closed} style={{ height: 20, width: 20, alignSelf: 'flex-end' }} />
                                    </TouchableOpacity>
                                </View>
                                <Image source={APP_IMAGES.logo} style={{ height: 30, width: 120, alignSelf: 'center' }} />
                                <Text style={{ top: 20, alignSelf: 'center', color: 'black', fontFamily: APP_FONTS.bold }}>Your Details have been submitted</Text>

                                {/* </TouchableOpacity> */}
                            </View>
                        </Modal>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            // theme={{
                            //     colors: {
                            //       backdrop: 'grey',
                            //     },
                            //   }}
                            
                            // style={{backgroundColor:'red'}}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            {/* <ScrollView contentContainerStyle={{flexGrow:1}}  keyboardShouldPersistTaps='always'> */}
                            {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
                            <View style={{backgroundColor:this.state.modalVisible?'rgba(50,50,50,0.9)':null,flex:1}}>
                            <KeyboardAvoidingView behavior='position' enabled >
                            {/* <KeyboardAvoidingView behavior='position' enabled > */}

                                <View style={{
                                    backgroundColor: "white",
                                    // backgroundColor: "red",
                                    borderRadius: 20,
                                    height: Platform.OS === "android" ? 600 :this.state.deviceIOS == 'iPhone 12 mini'?hp('75%'): hp('90%'),
                                    width: '88%',

                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 4,
                                    elevation: 5,
                                    left: 23,
                                    top: Platform.OS == "android" ? 70 :this.state.deviceIOS == 'iPhone 12 mini'? hp('14%'):hp('6%'),
                                    // borderColor:'black',
                                    // borderWidth:1

                                }}>


                                    <View style={{ backgroundColor: '#BCC7FF', width: '100%', height: 250, justifyContent: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>

                                    </View>


                                    <View style={{ bottom: Platform.OS === 'android' ? 110 : 110, borderTopRightRadius: 100, borderTopLeftRadius: 100, height: Platform.OS == 'android' ? 360 : 400, width: '100%', right: 0, backgroundColor: 'white' }}>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', bottom: Platform.OS == 'ios' ? 130 : 160 }}>
                                            <Image source={APP_IMAGES.popVector} style={{ height: 150, width: '100%', zIndex: 100, top: Platform.OS == "android" ? 30 : 0, bottom: Platform.OS == "ios" ? 0 : 0 }} resizeMode='contain' />
                                        </View>

                                        <View style={{ top: Platform.OS == 'android' ? -160 : -120, bottom: Platform.OS == 'ios' ? 200 : 0 }}>
                                            <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.medium, fontSize: 14, color: 'black', top: Platform.OS === 'android' ? 45 : 0 }}>Select your gender</Text>
                                        </View>
                                        {/* <View style={{ bottom: Platform.OS === 'android' ? 123 : 115, borderTopRightRadius: 100, borderTopLeftRadius: 100, height: Platform.OS == 'android' ? 320 : 440, width: '100%', backgroundColor: 'white', right: 0, borderWidth: 1, borderColor: 'black' }}>

                                        <View style={{ justifyContent: 'center', top: Platform.OS == 'android' ? 10 : 30, borderColor: 'red', borderWidth: 1 }}>
                                            <Text style={{ alignSelf: 'center', fontFamily: APP_FONTS.medium, fontSize: 14, color: 'black', top: Platform.OS === 'android' ? 45 : 0 }}>Select your gender</Text>

                                        </View> */}
                                        <View style={{ flexDirection: 'row', top: Platform.OS == 'android' ? -110 : -110, flex: 1, justifyContent: 'space-around' }}>
                                            {this.state.showActiveMen == false ?
                                                <View style={{ borderColor: '#e9e8e9', borderWidth: 1, width: 60, height: 60, borderRadius: 30, left: 30 }}>
                                                    <TouchableOpacity onPress={() => { this.activeGender() }}>
                                                        <Image source={APP_IMAGES.manGender} style={{ height: 40, width: 40, right: 0, alignSelf: 'center', resizeMode: 'contain', top: 10 }} />
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                <View style={{ borderColor: '#F43297', borderWidth: 1, width: 60, height: 60, borderRadius: 30, left: 30 }}>
                                                    <Image source={APP_IMAGES.manGender} style={{ height: 40, width: 40, right: 0, alignSelf: 'center', resizeMode: 'contain', top: 10 }} />
                                                </View>
                                            }
                                            <View style={{ height: 50, width: 50 }}>
                                                <Text style={{ fontSize: 17, color: '#b4b5b5', alignSelf: 'center', top: 10 }}>or</Text>
                                            </View>
                                            {this.state.showActiveWomen == false ?
                                                <View style={{ borderColor: '#e9e8e9', borderWidth: 1, right: 0, width: 60, height: 60, borderRadius: 30, right: 30 }}>
                                                    <TouchableOpacity onPress={() => { this.activeWomenGender() }}>
                                                        <Image source={APP_IMAGES.women} style={{ height: 40, width: 40, left: 0, alignSelf: 'center', top: 10, resizeMode: 'contain' }} />
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                <View style={{ borderColor: '#F43297', borderWidth: 1, right: 0, width: 60, height: 60, borderRadius: 30, right: 30 }}>
                                                    <Image source={APP_IMAGES.women} style={{ height: 40, width: 40, left: 0, alignSelf: 'center', top: 10, resizeMode: 'contain' }} />
                                                </View>
                                            }
                                        </View>
                                        <View style={{ top: Platform.OS == 'android' ? -40 : -40, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'black', fontFamily: APP_FONTS.medium, fontSize: 14 }}>Enter Your Age </Text>

                                            <DatePicker
                                                date={this.state.date}
                                                mode="date"
                                                format="YYYY/MM/DD"
                                                style={{ width: Platform.OS == 'android' ? 230 : 270, height: Platform.OS == 'android' ? 70 : 130, top: Platform.OS == "android" ? 20 : 0 }}
                                                maxDate={new Date("2022-05-05")}
                                                onDateChange={(date) => { this.setState({ date: date }) }}

                                            />
                                        </View>
                                        <View style={{ top: Platform.OS == 'android' ? 10 : -40, alignItems: 'center', height: Platform.OS == 'ios' ? 120 : 120 }}>
                                            <Text style={{ color: 'black', fontSize: 14, fontFamily: APP_FONTS.medium }}>Mobile Money Number</Text>
                                            <View style={{
                                                flexDirection: 'row', borderRadius: 5, top: Platform.OS === 'ios' ? 8 : 10,
                                                borderWidth: 1, borderColor: '#ececec'
                                            }}>
                                                <CountryPicker
                                                    countryCode={this.state.cca2}
                                                    containerButtonStyle={{
                                                        marginRight: Platform.OS == 'ios' ? 8 : 8,
                                                        padding: Platform.OS == 'ios' ? 6 : 6,
                                                        // borderColor:'red',
                                                        // borderWidth:1,
                                                        // paddingTop:20


                                                    }}
                                                    withFlag
                                                    withModal
                                                    withCallingCode
                                                    withAlphaFilter
                                                    withFilter
                                                    withCallingCodeButton
                                                    onSelect={(country) => this.setState({ cca2: country.cca2, countryCode: '+' + country.callingCode, iso: country.cca2 })}

                                                >
                                                </CountryPicker>
                                                <View style={{ borderWidth: 1, borderColor: '#e9e8e9', height: 24, justifyContent: 'center', alignSelf: 'center' }} />
                                                <TextInput
                                                    style={{
                                                        height: 35,
                                                        width: '68%',
                                                        alignSelf: 'center',
                                                        paddingHorizontal: 20,
                                                        borderRadius: 8
                                                    }}

                                                    placeholder="Phone Number"
                                                    keyboardType="numeric"
                                                    ref={(rf) => { this.phone = rf }}
                                                    value={this.state.phone}
                                                    onChangeText={(text) => this.setState({ phone: text })}
                                                />
                                            </View>


                                            {/* <TouchableOpacity onPress={() => {this.closeModal()}}>
                                            <View style={{ top: 10 }}>
                                               
                                                    <Text style={{ color: "#F43297", fontFamily: APP_FONTS.bold, fontSize: 14 }}>
                                                        Set up Later
                                                    </Text>
                                            </View>
                                            </TouchableOpacity> */}
                                            {/* <View style={{ marginLeft: 20, marginRight: 20, bottom: 40 ,width:'80%',borderWidth:1,borderColor:'blue'}}>
                                                <TouchableOpacity onPress={() => this.submit()} style={{
                                                    width: "100%", height: 50,
                                                    backgroundColor: '#F43297',
                                                    borderRadius: 10,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    marginTop: 60
                                                }}>
                                                     <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                                        Submit
                                                    </Text>
                                                    
                                                </TouchableOpacity>
                                            </View> */}
                                            {/* <TouchableOpacity onPress={() => this.login()} style={[BUTTON, { marginTop: 60 }]}> */}
                                            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')} style={[BUTTON, { marginTop: 70 }]}> */}
                                            {/* <TouchableOpacity onPress={() => { this.closeModal() }} style={{borderColor:'red',borderWidth:1,bottom:30}}>
                                            <View style={{ bottom: 0 }}>
                                                    <Text style={{ color: "#F43297", fontFamily: APP_FONTS.bold, fontSize: 14 }}>
                                                        Set up Later
                                                    </Text>
                                            </View>
                                            </TouchableOpacity> */}

                                            {/* <Button> */}


                                            {/* </Button> */}
                                            {/* </TouchableOpacity> */}

                                            {/* </View> */}


                                        </View>
                                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                                            <TouchableOpacity onPress={() => this.submit()} style={[BUTTON, { marginTop: Platform.OS == 'ios' ? -70 : -10 }]}>
                                                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')} style={[BUTTON, { marginTop: 70 }]}> */}
                                                <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                                    Submit
                                                </Text>
                                                {/* <Button> */}



                                                {/* </Button> */}
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{ marginTop: Platform.OS == 'ios' ? -10 : 10 }}>
                                            <TouchableOpacity onPress={() => this.submitQ()} >
                                                <Text style={{ color: "#F43297", fontFamily: APP_FONTS.bold, fontSize: 14, alignSelf: 'center' }}>
                                                    Set Up Later
                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                        {/* <View style={{ marginLeft:20,marginRight:20 }}> */}
                                        {/* <TouchableOpacity onPress={() => this.submit()} style={[BUTTON, { marginTop: -90 }]}>
                                                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')} style={[BUTTON, { marginTop: 70 }]}> */}
                                        {/* <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                                    Set Up Later
                                                </Text> */}
                                        {/* <Button> */}


                                        {/* </Button> */}
                                        {/* </TouchableOpacity> */}

                                        {/* </View> */}


                                        {/* <Text onPress={() => this.closeModal()} style={{ top: 40 }}>Submit</Text> */}



                                    </View>
                                </View>
                                {/* </ScrollView> */}
                            </KeyboardAvoidingView>
                            </View>

                        </Modal>
                    </View>
                </ScrollView>
                {/* </View> */}
            </SafeAreaView>
        )
    }



}
// const styles = StyleSheet.create({

//     pickerStyle: {
//         height: 20,
//         width: 250,
//         marginBottom: 10,
//         justifyContent: 'center',
//         padding: 10,
//         borderWidth: 2,
//         borderColor: '#303030',
//         backgroundColor: 'white',
//     },
//     selectedCountryTextStyle: {
//         paddingLeft: 5,
//         paddingRight: 5,
//         color: '#000',
//         textAlign: 'right',
//     },
//     pickerStyle: {

//     }

// })

export default home;