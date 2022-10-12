
import React, { Component } from "react";
import { Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, TextInput, PermissionsAndroid, Platform } from "react-native";
import Header from "../../components/atoms/header";
import ShadowView from "../../components/atoms/shadowView";
import shadowView from "../../components/atoms/shadowView";
import { APP_IMAGES, APP_FONTS, APP_COLOR, BUTTON ,APP_URLS} from "../../utils/Common";
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from "react-native-image-resizer";



const createFormData = (image) => {
    var data = new FormData();
    data.append('upload', {
        uri: Platform.OS === "android" ? image : image.replace("file://", ""),
        name: `chapShop${Date.now()}.jpg`,
        type: 'image/*'
    })
    return data
}




class editProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photo : undefined,
            token:''
        }
    }

    componentDidMount(){
        this.userDetail()
    }

    async userDetail(){
        console.log('userDetail===>')
          // let token = ''
          
         let userS = await AsyncStorage.getItem('@userToken')
         console.log(userS,'userssss')
          this.setState({
              token:userS
          },()=>{this.state.token,'token--->'})
      }


    pickPhoto(type) {
        console.log(type, 'typeepepepe')
        if (Platform.OS === 'android') {
            PermissionsAndroid.requestMultiple(
                [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.CAMERA]
            ).then((result) => {
                if (result['android.permission.READ_EXTERNAL_STORAGE']
                    && result['android.permission.WRITE_EXTERNAL_STORAGE']
                    && result['android.permission.CAMERA'] === 'granted') {
                    if (type === 'camera') {
                        ImagePicker.openCamera({
                            useFrontCamera: true
                        }).then(image => {
                            console.log('>>path', image.path)
                            this.setState({ openSheet: false }, () => {
                                this._handleImage(image)

                            })

                        });
                    } else {
                        ImagePicker.openPicker({
                        }).then(image => {
                            console.log('>>path', image.path)
                            this.setState({ openSheet: false }, () => {
                                this._handleImage(image)

                            })
                        });
                    }
                } else if (result['android.permission.READ_EXTERNAL_STORAGE']
                    || result['android.permission.WRITE_EXTERNAL_STORAGE']
                    || result['android.permission.CAMERA'] === 'never_ask_again') {
                    alert("Required permissions denied");
                }
            });
        } else {
            if (type === 'camera') {
                ImagePicker.openCamera({
                    useFrontCamera: true
                }).then(image => {
                    console.log('>>path', image.path)
                    this.setState({ openSheet: false }, () => {
                        this._handleImage(image)
                    })
                });
            } else {
                ImagePicker.openPicker({
                }).then(image => {
                    console.log('>>path', image.path)
                    this.setState({ openSheet: false }, () => {
                        this._handleImage(image)
                    })
                });
            }
        }
    }

    _handleImage(image) {
        ImageResizer.createResizedImage(image.path, image.height, image.width, 'JPEG', 6)
            .then(response => {
                console.log('>>data', response)
                this.setState({ photo: response.uri, }, () => {
                    this.submit()
                })
            })
            .catch(err => {
                console.log('>>data', error)
            });

    }


   async submit() {
        let body = {
            fullName: "usersss",
            gender: "female",
            dateOfBirth: "",
            image:this.state.photo
        }
        console.log('shomoshahaah')
        try {
            let response = await fetch(

                APP_URLS.editAccount,
                {
                    'method': 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer'+this.state.token
                    },
                    // body: JSON.stringify(body)
                    body: createFormData(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {

                    console.log('product', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
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


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <View style={{ flex: 0.20 }} >/ */}
                <View style={{
                    flexDirection: 'row', borderWidth: 0, shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity:Platform.OS == 'ios'?0: 0.5,
                    shadowRadius: 0,
                    elevation: 1,
                    flex: 0.10,
                    width: '100%'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <View style={{ padding: 10 }}>
                            <Image style={{ top: 10, left: 8, height: 20, width: 20, tintColor:'black' }}
                                resizeMode="contain"
                                source={APP_IMAGES.arrowLeft} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ padding: 10 }}>
                        {/* <Text style={{ left: 15, top: 10, fontSize: 16, fontFamily: APP_FONTS.semi_bold, color: 'black' }}>EDIT PROFILE</Text> */}
                        <Text style={{ left: 15, top: 10, fontSize: 16, fontFamily: APP_FONTS.semi_bold, color: 'black' }}>EDIT PROFILE</Text>
                    </View>

                </View>

                <View style={{ flex: 0.80, top: 40 }}>
                    <View style={{
                        flex: 0.15, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => { this.RBSheet.open() }}>
                            <View style={{
                                backgroundColor: '#fff',

                                // marginVertical: 200,
                                // marginHorizontal: 20,
                                borderColor: '#000',
                                height: 90,
                                width: 90,
                                borderRadius: 80,
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                bottom: 20
                            }}>
                                <Image source={APP_IMAGES.camera} style={{ height: 25, width: 25, zIndex: 100, alignSelf: 'center', top: 30 }} resizeMode="contain" />

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.11 }}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 19 }}>Full Name*</Text>
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
                                bottom: 5
                            }}
                            editable={false} selectTextOnFocus={false}


                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ flex: 0.11 }}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 19 }}>Phone Numbers*</Text>
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
                                bottom: 5
                            }}
                            editable={false} selectTextOnFocus={false}


                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ flex: 0.11 }}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 19 }}>Email ID*</Text>
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
                                bottom: 5
                            }}
                            editable={false} selectTextOnFocus={false}


                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ flex: 0.15 }}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 19 }}>Gender*</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', borderColor: 'black', top: 10 }}>
                            <View style={{ borderColor: '#F43297', height: 40, width: 140, flexDirection: 'row', borderWidth: 1, borderRadius: 6, right: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{}}>Male</Text>
                            </View>
                            <View style={{ borderColor: '#F43297', height: 40, width: 140, flexDirection: 'row', borderWidth: 1, borderRadius: 6, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Female</Text>
                            </View>

                        </View>
                        {/* <TextInput
                            style={{
                                height: 40,
                                width: '88%',
                                alignSelf: 'center',
                                // paddingHorizontal: 20,
                                // right: 45,
                                // top: 23,
                                borderBottomColor: 'black',
                                borderBottomWidth: 2,
                                bottom:5
                            }}
                            editable={false} selectTextOnFocus={false}


                            keyboardType="numeric"
                        /> */}
                    </View>
                    <View style={{ flex: 0.11 }}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 19 }}>Spoken Language</Text>
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
                                bottom: 5
                            }}
                            editable={false} selectTextOnFocus={false}


                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ flex: 0.11 }}>
                        <Text style={{ alignSelf: 'flex-start', marginLeft: 19 }}>Occupation</Text>
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
                                bottom: 5,

                            }}
                            editable={false} selectTextOnFocus={false}


                            keyboardType="numeric"
                        />
                    </View>

                    <View style={{ marginLeft: 20, marginRight: 20, bottom: 20, flex: 0.11 }}>
                        <TouchableOpacity style={[BUTTON, { marginTop: 70 }]}>
                            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')} style={[BUTTON, { marginTop: 70 }]}> */}
                            <Text style={{ color: "white", fontFamily: APP_FONTS.bold, fontSize: 18 }}>
                                SUBMIT
                            </Text>
                            {/* <Button> */}


                            {/* </Button> */}
                        </TouchableOpacity>

                    </View>



                </View>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={170}
                    openDuration={0}
                    customStyles={{
                        container: {
                            // justifyContent: "center",
                            // alignItems: "center",
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20
                        },
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ padding: 20, fontFamily: APP_FONTS.semi_bold, fontSize: 16 }}>UPLOAD PHOTO</Text>
                        <TouchableOpacity onPress={() => { this.RBSheet.close() }}>
                            <Image source={APP_IMAGES.closed} style={{ height: 20, width: 20, right: 20, top: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, left: 30 }}>
                        <TouchableOpacity onPress={() => { this.pickPhoto('gallery') }}>
                            <Image source={APP_IMAGES.gallery} style={{ height: 35, width: 35, right: 5 }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.pickPhoto('camera') }}>
                            <Image source={APP_IMAGES.cameraActive} style={{ height: 35, width: 35, left: 30 }} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', left: 30 }}>
                        <Text>Gallery</Text>
                        <Text style={{ left: 30 }}>Camera</Text>
                    </View>
                    {/* <YourOwnComponent /> */}
                </RBSheet>


            </SafeAreaView>
            // <Text>kdskdsdjkd</Text>
        )

    }



}

export default editProfile;