
import React, { Component } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Platform, Modal, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { APP_FONTS, APP_IMAGES, APP_URLS } from "../../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
// import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';


const deviceHeight = Dimensions.get("window").height

const buttonTextStyle = {
    color: '#393939'
};

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

const sizeArray = [
    {
        id: 1,
        size: 'M'
    },
    {
        id: 2,
        size: 'S'
    },
    {
        id: 3,
        size: 'X'
    },
    {
        id: 4,
        size: 'XL'
    },
    {
        id: 5,
        size: 'L'
    },
]

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

// const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`


class addTobag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            // addressPage: false/
            addressPage: false,
            shoppingBag: '',
            paymentPage: false,
            bagPage: true,
            totalPrice: '',
            address: '',
            check: false,
            name: '',
            pinCode:'',
            shoppingBagData: '', 
            phoneNumber: '',
            modalViewSizeBottom: false,
            sizeArray: '',
            changeSizeValue: '',
            modalSizeID: '',
            errors: false,
            isNextPressed: false,
            isPreviousPressed: false,
            nearByLocation:'',
            stateS:'',
            city:'',
            modalIndexID:'',
            totalCommission:'',
            totalDiscount:''

        }
        
        this.props.navigation.addListener(
            'focus',
            payload => {
                console.log('gopal', payload)
                if (payload.type == 'focus') {
                    this.userDetail()
                }
            })
    }

    componentDidMount() {
        //   this.focusListener = this.props.navigation.addListener('focus', () => {
            // this.onFocusFunction()
        //  })
  
        this.userDetail()
        //  })

    }

    // componentWillUnmount() {
    //     // Remove the event listener
    //     this.focusListener.remove();
    //   }

    // componentDidUpdate(){
    //     this.userDetail()
    // }

    async userDetail() {
        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })
        console.log(this.state.token, 'oojojtkt')
        {
            this.state.token == null ?
                alert('Please login/register yourself')
                :
                this.getShoppingBag()

        }
        //  this.focusListener = this.props.navigation.addListener('didFocus', () => {       
             this.editAccount()
        //  }
        // this.getProductDetail()




        //   this.wishlist()
        // await AsyncStorage.getItem('@user',JSON.stringify(user)).then(() => {
        //     console.log(user, 'fcmtokenLoginß')

        // })
    }

    // componentDidUpdate(){
    //      this.userDetail()
    //  }

    async addWishList(value) {

        let body = {
            wishlist: value
        }



        try {
            let response = await fetch(

                APP_URLS.addTowishList,
                {
                    'method': 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + this.state.token.split('"').join(''),
                        // 'Authorization': "Bearer"+this.state.token,
                    },
                    body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {


                response.json().then(data => {

                    console.log('wishdaata+++', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        //   this.setState({
                        //       colorHeart:true,
                        //       productID:data.product._id,
                        //       productAddded:[...this.state.productAddded,data.product],

                        //     //   result:array
                        //   })
                        alert('Added to WishList')


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


    async getShoppingBag() {
        console.log('UWQ')
        let body = {

        }
        try {
            let response = await fetch(

                APP_URLS.getShoppingBag,
                {
                    // 'method': 'POST',
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': this.state.token == null ? '' : "Bearer" + " " + this.state.token.split('"').join(''),

                    },
                    // body: body
                }
            );
            if (response.status == 200) {


                response.json().then(data => {
                    console.log(data, 'fdaatat')

                    // if (data.response.status.statusCode === 200) {
                    if (data.status == 1) {
                        this.setState({
                            shoppingBag: data.products,
                            totalPrice: data.totalPrice,
                            totalCommission:data.totalCommission,
                            totalDiscount:data.totalDiscount
                        })
                        console.log(this.state.shoppingBag, 'shoppingBAG')
                        this.getOrderSummary()



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


    async editAccount() {
        console.log('AKAKAK')
        let body = {
            fullName: "",
            gender: "",
            dateOfBirth: "",
            image: ""
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
                        'Authorization': this.state.token == null ? '' : "Bearer" + " " + this.state.token.split('"').join(''),
                    },
                    body: JSON.stringify(body)
                    // body: createFormData(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {

                    console.log('ADDEEEs', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        // alert(data.user.Address)
                        this.setState({
                            address: data.user.Address
                        })
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

    placeOrderToAddress() {
        if (this.state.shoppingBag == '') {
            alert('Please add product in cart')
            this.setState({
                addressPage: false
            })
        }
        else {
            this.setState({
                addressPage: true
            })
        }
    }
    deliveryAddress() {
        console.log(this.state.shoppingBag, 'sHOOPPINGbag')

        // console.log('lakajkajak')
        this.setState({
            paymentPage: true,
            shoppingBagData: this.state.shoppingBag
        })
    }

    // async editCartProduct(productId, operator, quanity, cartId, size) {25sep
    async editCartProduct(productId, operator, quanity, cartId, size) {
        console.log(productId, operator, quanity, cartId,size, 'oOOO')
        var body = {}
        if (operator == '+') {
            body = {
                cartId: cartId,
                productId: productId,
                quantity: quanity + 1,
                size: size
            }
            console.log(body, 'body---')
        }
        else if (operator == 'SIZE') {
            body = {
                cartId: cartId,
                productId: productId,
                quantity: quanity,
                size: size
            }
            console.log(body, 'body1---')
        }
        else {
            if (quanity == '1') {
                alert('User cannot decerease the quantity.Minimum quantity atleast 1')
            }
            else {
                body = {
                    cartId: cartId,
                    productId: productId,
                    quantity: quanity - 1,
                    size: size
                }

            }
        }
        try {
            let response = await fetch(

                APP_URLS.editCartProduct,
                {
                    'method': 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': this.state.token == null ? '' : "Bearer" + " " + this.state.token.split('"').join(''),

                    },
                    body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {


                response.json().then(data => {
                    // console.log(data.products, 'fdaatat0')
                    console.log(data, 'datatatatatat')
                    console.log(data.message, 'fdaatat0')


                    // if (data.response.status.statusCode === 200) {
                    if (data.status == 1) {
                        console.log(data.message, 'fdaatat02')

                        //    this.setState({
                        //        shoppingBag:data.products
                        //    })
                        // if(data.message == "Your quantity exceeding stock of product"){
                        // alert(data.message)
                        // }
                        this.getShoppingBag()


                    }
                    else if (data.status == 0) {
                        alert(data.message)
                    }

                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                        this.getShoppingBag()
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

    async removeFromCart(productID, cartID) {

        let body = {

            cartId: cartID,
            productId: productID

        }
        console.log(body, 'remomomoo')
        try {
            let response = await fetch(

                APP_URLS.removeFromCart,
                {
                    'method': 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': this.state.token == null ? '' : "Bearer" + " " + this.state.token.split('"').join(''),

                    },
                    body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {


                response.json().then(data => {
                    console.log(data, 'removnovne')

                    // if (data.response.status.statusCode === 200) {
                    if (data.status == 1) {
                        //    this.setState({
                        //        shoppingBag:data.products
                        //    })
                        this.getShoppingBag()


                    }

                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                        this.getShoppingBag()
                    }

                });
            } else {

                this.setState({ isLoading: false }, () => {
                    // alert('Something went wrong error code: fdfdf' + response.status)
                })
            }

        }
        catch (error) {

            this.setState({ isLoading: false }, () => {
                alert('Something went wrong error code:' + error)
            })
        }
    }

    async getOrderSummary() {


        try {
            let response = await fetch(

                APP_URLS.orderSummary,
                {
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + this.state.token.split('"').join(''),

                    },
                }
            );
            if (response.status == 200) {


                response.json().then(data => {
                    console.log(data, 'summary---')

                    // if (data.response.status.statusCode === 200) {
                    if (data.status == 1) {
                        //    this.setState({
                        //        shoppingBag:data.products
                        //    })



                    }

                    else {
                        this.setState({ isLoading: false }, () => {
                        })
                    }

                });
            } else {

                this.setState({ isLoading: false }, () => {
                    // alert('Something went wrong error code: fdfdf' + response.status)
                })
            }

        }
        catch (error) {

            this.setState({ isLoading: false }, () => {
                alert('Something went wrong error code:' + error)
            })
        }
    }

    setAddress(name, houseNo, area, city, pincode,phoneNumber,nearLocation,states) {
        console.log(name, houseNo, area, city, pincode,phoneNumber,nearLocation,states,'adress---->') 
        // console.log(name, houseNo, area, city, phoneNumber,pincode,nearLocation,states, 'adress---->')
        this.setState({
            check: true,
            name: name,
            phoneNumber: phoneNumber,
            city: city,
            area: area,
            houseNumber: houseNo,
            pinCode:pincode,
            nearByLocation:nearLocation,
            stateS:states

        },()=>{this.state.phoneNumber,'paoaoaoao'})
    }

    modalViewSize(valueID,iD) {
        // alert('rohan')
        this.setState({
            modalViewSizeBottom: true,
            modalSizeID: valueID,
            modalIndexID:iD
            // modalViewSizeBottom: value
        })
        this.getProductDetail(valueID)
        // }, () => { this.state.modalViewSizeBottom, '1bottom' })
    }
    modalViewSizeClose(value) {
        this.setState({
            modalViewSizeBottom: value
        })
    }
    async getProductDetail(productID) {
        let body = {
            // subCategoryName: "625d5d0c518dce904e8953af"
            // _id: this.state.productId
            _id: productID
        }
        console.log('shomoshahaah', body)
        try {
            let response = await fetch(

                APP_URLS.getProductDetail,
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
                console.log('normal----->')

                response.json().then(data => {

                    console.log('productD+++', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        this.setState({

                            sizeArray: data.productData.size,

                        })


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

    // onFocusFunction = () => {
    //     // do some stuff on every screen focus
    //   }
    //   async componentDidMount () {
    //     this.focusListener = this.props.navigation.addListener('didFocus', () => {
    //       this.onFocusFunction()
    //     })
    //   }
      
      // and don't forget to remove the listener
    //   componentWillUnmount () {
    //     this.focusListener.remove()
    //   }

    // defaultScrollViewProps = {
    //     keyboardShouldPersistTaps: 'handled',
    //     contentContainerStyle: {
    //       flex: 1,
    //       justifyContent: 'center'
    //     }
    //   };

    // onNextStep = () => {
    //     console.log('called next step');
    // };

    onPaymentStepComplete() {
        // this.render()
        return (

            <View style={{
                flex: 0.10, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, borderColor: 'black', padding: 15, shadowColor: '#f0f0f0',
                shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 25 },
                shadowOpacity: Platform.OS == 'ios' ? 0.1 : 0.9,
                shadowRadius: Platform.OS == 'ios' ? 10 : 10,
                elevation: Platform.OS == 'ios' ? 0 : 2,
            }}>

                <View style={{ flexDirection: 'row', top: 10 }}>
                    <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 14 }}>FCFA {this.state.totalPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row', left: 2, width: 140, height: 46, backgroundColor: '#F43297', borderRadius: 8 }}>
                    <TouchableOpacity onPress={() => this.placeOrderToAddress()}>
                        <View style={{}}>
                            <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        )

        // alert('Payment step completed!');
        // if (this.state.addressPage == true ) {
        //     this.setState({ errors: false });
        //   } else {
        //     this.setState({ errors: true });
        //   }
    };

    onPrevStep = () => {
        console.log('called previous step');
    };

    changedSize(changedSizeValue) {
        let temp = [...this.state.shoppingBag]
        let array = []
        // console.log(temp,'temppp')
        temp.forEach((item, index) => {
            let temp1 = { ...item }

            // console.log(modalSizeID,'temp111')
            // if (this.state.modalSizeID == item.productId._id) {//25sep
            if (this.state.modalIndexID == item._id) {
                console.log(item.productId.size, 'SIZZZE')
                let size = item.productId.size
                // if (item.productId.size.includes(changedSizeValue)) {

                // } else {
                //     size.push(changedSizeValue)

                // }

                temp1["newSize"] = changedSizeValue
                array.push(temp1)
                console.log(temp1, 'temp1', item.productId.size)
                let productId = item.productId._id
                let operator = 'SIZE'
                let cartId = this.state.modalIndexID
                let quanity = item.quantity
                let editsize = changedSizeValue
                this.editCartProduct(productId, operator, quanity, cartId, editsize)
            }
            else {
                array.push(item)
            }
        })

        this.setState({
            shoppingBag: array,
            // })
            changeSizeValue: changedSizeValue
        }, () => { console.log(changedSizeValue, 'changeSIZE') })
    }



    nextBtnPress() {
        console.log("NEXT");
        this.setState({ isNextPressed: true });
    }

    prevBtnPress() {
        console.log("PREV");
        this.setState({ isPreviousPressed: true });
    }

    // submitBtnPress = () => {
    //     console.log("SUBMIT");
    //     this.setState({ isSubmitPressed: true });
    // }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'space-between', top: 0 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        {
                            this.state.addressPage == false ?
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <View>
                                        <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                            resizeMode="contain"
                                            source={APP_IMAGES.arrowLeft} />

                                    </View>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => this.setState({
                                    addressPage: false
                                })}>
                                    <View>
                                        <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                            resizeMode="contain"
                                            source={APP_IMAGES.arrowLeft} />

                                    </View>
                                </TouchableOpacity>
                        }
                        {
                            this.state.addressPage == true ?
                                <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>DELIVERY ADDRESS</Text>
                                :
                                <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>SHOPPING BAG</Text>

                        }
                    </View>
                </View>
                <View style={{ borderColor: '#f0f0f0', borderBottomWidth: 2, height: 12 }} />
                <View style={{ flex: 0.15, bottom: 20 }}>
                    <ProgressSteps activeLabelColor={'#333333'} activeStepNumColor={'#5d87ef'} activeStepIconBorderColor={'#5d87ef'} completedStepIconColor={'#5d87ef'} completedProgressBarColor={'#5d87ef'} removeBtnRow={'true'} disabledStepIconColor={'#dfdfdf'} disabledStepNumColor={'#FFFFFF'} labelFontFamily={APP_FONTS.semi_bold} labelColor={'lightgray'} activeStep={this.state.addressPage == true ? 1 : 0}>
                        <ProgressStep
                            label="Bag"
                            removeBtnRow="true"
                        // onNext={this.nextBtnPress()}
                        // onNext={this.onPaymentStepComplete()}
                        // removeBtnRow	
                        // errors={this.state.errors}
                        // onPrevious={this.onPrevStep()}
                        // scrollViewProps={this.defaultScrollViewProps()}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 1!</Text>
                            </View>
                        </ProgressStep>

                        {/* { this.state.addressPage == true ?
                                <ProgressStep label="Bag">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>This is the content within step 1!</Text>
                                    </View>
                                </ProgressStep>
                                :
                                <ProgressStep label="Bag">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>This is the content within step 1!</Text>
                                    </View>
                                </ProgressStep>
                                }  */}


                        <ProgressStep label="Address" removeBtnRow="true" >
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Payment" removeBtnRow	>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Summary" removeBtnRow	>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>

                {/* <View style={{ flex: 0.05, backgroundColor: '#fffff', top: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ borderColor: '#7bc0f7', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5 }}>
                            {
                                this.state.addressPage == true ?
                                    <Image source={APP_IMAGES.blueTick} style={{ height: 22, width: 22 }} />
                                    :
                                    <Text style={{ alignSelf: 'center', color: '#7bc0f7' }}>1</Text>
                            }
                        </View>

                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{ color: '#7bc0f7' }}>Bag----</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5 }}>
                            <Text style={{ alignSelf: 'center' }}>2</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{ color: '#9f9f9f' }}>Address-----</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5 }}>
                            <Text style={{ alignSelf: 'center' }}>3</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{ color: '#9f9f9f' }}>Payment---</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5 }}>
                            <Text style={{ alignSelf: 'center' }}>4</Text>
                        </View>
                        <View style={{ left: 5, top: 2 }}>
                            <Text style={{ color: '#9f9f9f' }}>Summary</Text>
                        </View>
                    </View>
                </View> */}


                {


                    //     :

                    //     <SafeAreaView style={{ flex: 1 }} >
                    //     <View style={{ flex: 0.10, backgroundColor: '#f8f8f8' }}>
                    //         <TouchableOpacity onPress={() => { this.deliveryAddress() }}>
                    //             <Text style={{ alignSelf: 'center', top: 12, color: '#fc7192', fontFamily: APP_FONTS.bold }}>DELIVERY TO THIS ADDRESS</Text>
                    //         </TouchableOpacity>
                    //     </View>
                    //     <View style={{ borderColor: 'yellow', borderWidth: 1, flex: 1 }}>
                    //         <FlatList
                    //             data={deliveryAddress}
                    //             style={{ flex: 1, top: 10 }}
                    //             keyExtractor={item => item.id}
                    //             showsHorizontalScrollIndicator={false}
                    //             renderItem={({ item, index, separator }) => {
                    //                 return (
                    //                     //    <Text>jjsdhsj</Text>
                    //                     <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
                    //                         <View style={{ borderWidth: 1, height: hp('15%'), top: 10 }}>
                    //                             <Text style={{ fontSize: 12 }}>{item.customerName}</Text>
                    //                             <Text style={{ fontSize: 12 }}>{item.customerName}</Text>
                    //                             <Text style={{ fontSize: 12 }}>{item.customerName}</Text>
                    //                         </View>


                    //                     </View>

                    //                 )
                    //             }} />
                    //     </View>


                    //     <View style={{ flex: 0.15, bottom: 0, borderRadius: 1, borderColor: 'red', padding: 0 }}>


                    //         <View style={{ borderRadius: 1, borderColor: 'black' }}>
                    //             <View style={{
                    //                 paddingLeft: 0,
                    //                 height: hp('8%'),
                    //                 marginBottom: 0,
                    //                 width: wp('80%'),
                    //                 borderStyle: 'dashed',
                    //                 borderRadius: 1,
                    //                 borderWidth: 1,
                    //                 borderColor: '#fe6c8e',
                    //                 justifyContent: 'center',
                    //                 alignSelf: 'center',
                    //                 top: 10
                    //             }} >
                    //                 <Text style={{ alignSelf: 'center', fontSize: 18, color: '#fe6c8e' }}>Add a New Address</Text>
                    //             </View>
                    //             {/* <TouchableOpacity onPress={() => this.placeOrderToAddress()}>
                    //                 <View style={{}}>
                    //                     <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                    //                 </View>
                    //             </TouchableOpacity> */}
                    //         </View>

                    //     </View>

                    // </SafeAreaView>


                }

                {
                    this.state.addressPage == true && this.state.paymentPage == false ?


                        <SafeAreaView style={{ flex: 1 }} >
                            <View style={{ flex: 0.10, bottom: Platform.OS == 'ios' ? 0 : 0, borderRadius: 1,  padding: 0, backgroundColor: '#FFFFF' }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddNewAddress', { type: 'AddBag' }) }}>
                                    <View style={{ padding: 10, top: 15, left: 20 }}>
                                        <Text style={{ fontSize: 12, color: '#fc7192', fontFamily: APP_FONTS.bold }}>+ ADD NEW ADDRESS</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* <View style={{ flex: 0.50, backgroundColor: '#e7edff', bottom: 0 }}>
 
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 20 }}>{this.state.name}</Text>


                                    <Image source={APP_IMAGES.check} style={{ height: 16, width: 16, top: 18, right: 10 }} />

                                </View>
                                <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 25 }}>{this.state.houseNo} {this.state.city}  {this.state.area} </Text>
                                <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: '#acacac', left: 10, top: 40 }}>{this.state.mobileNumber}</Text>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('AddNewAddress', {
                                        type: 'update',
                                        nameAddress: this.state.nameAdress,
                                        houseNo: this.state.houseNumber,
                                        city: this.state.city,
                                        area: this.state.area,
                                        mobNo: this.state.mobileNumber

                                    })
                                }}>
                                    <Text style={{ color: '#fc7192', fontSize: 12, fontFamily: APP_FONTS.bold, top: 42, left: 12 }}>EDIT</Text>
                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', left: 30, top: 50, width: wp('80%'), height: 46, backgroundColor: '#F43297', borderRadius: 8, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentSummary', { dataSend: this.state.shoppingBag, priceTotal: this.state.totalPrice, addressName: this.state.name, addressHouseNo: this.state.houseNo, addressCity: this.state.city, addressArea: this.state.area, mobileNo: this.state.phoneNumber })}>
                                        <Text style={{ alignSelf: 'center', top: 12, color: '#ffffff', fontFamily: APP_FONTS.bold }}>Deliver to this Address </Text>
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={this.state.address}
                                    style={{ flex: 1}}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index, separator }) => {
                                        console.log(item, 'itemm')
                                        return (
                                            //    <Text>jjsdhsj</Text>
                                            // <View style={{ flex: 1, borderWidth: 1, borderColor: 'red',backgroundColor:item.contactDetails.name == this.state.name?'#e7edff':null }}>
                                            <View style={{ flex: 1, backgroundColor:item.address.area == this.state.area?'#e7edff':null ,paddingBottom:25}}>
                                                <TouchableOpacity onPress={() => { this.setAddress(item.contactDetails.name, item.address.houseNo, item.address.area, item.address.city, item.address.pinCode,item.contactDetails.phoneNumber,item.address.nearByLocation,item.address.state) }}>
                                                    <View style={{ height:item.address.area == this.state.area? hp('25%') : hp('20%'), top: 10 }}>

                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 20 }}>{item.contactDetails.name}</Text>

                                                            {
                                                                // item.address.houseNo == this.state.houseNumber ?
                                                                item.address.area == this.state.area ?
                                                                // item.contactDetails.name == this.state.name ?
                                                                    <Image source={APP_IMAGES.check} style={{ height: 16, width: 16, top: 18, right: 10, borderWidth: 1 }} />
                                                                    :
                                                                    <Image source={APP_IMAGES.uncheck} style={{ height: 16, width: 16, top: 18, right: 10 }} />
                                                            }
                                                        </View>
                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 25 }}>{item.address.houseNo} {item.address.area} {item.address.city} {item.address.nearByLocation} </Text>
                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 25 }}>{item.address.state}</Text>
                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 25 }}>{item.address.pinCode}</Text>
                                                        {/* <Text style={{ fontSize: 12 }}>{"address": {"area": "Ok", "city": "110033", "houseNo": "Hhh", "nearByLocation": "Sector2", "pinCode": 110033, "state": "Punjab"},}</Text> */}
                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 40 }}>Mobile: {item.contactDetails.phoneNumber}</Text>
                                                        <TouchableOpacity onPress={() => {
                                                            this.props.navigation.navigate('AddNewAddress', {
                                                                type: 'update',
                                                                nameAddress: this.state.name,
                                                                houseNo: this.state.houseNumber,
                                                                city: this.state.city,
                                                                area: this.state.area,
                                                                mobNo: this.state.phoneNumber,
                                                                // mobNo: '9993939393',
                                                                pinCode: this.state.pinCode,
                                                                nearLocation: this.state.nearByLocation,
                                                                states:this.state.stateS,
                                                                iD:item._id

                                                            },()=>{this.state.nameAddress,this.state.houseNumber,this.state.city,this.state.area,this.state.mobNo,this.state.pinCode,this.state.nearLocation,this.state.stateS,'ALALLALALAL'})
                                                        }}
                                                        
                                                        >
                                                            <Text style={{ color: '#fc7192', fontSize: 12, fontFamily: APP_FONTS.bold, top: 42, left: 12 }}>EDIT</Text>
                                                        </TouchableOpacity>
                                                        {/* {item.contactDetails.name == this.state.name ?/ */}
                                                        {item.address.area == this.state.area ?
                                                            <View style={{ flexDirection: 'row', left: 10, top: 60, width: wp('80%'), height: 46, backgroundColor: '#F43297', borderRadius: 8, justifyContent: 'center' }}>
                                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentSummary', { dataSend: this.state.shoppingBag, priceTotal: this.state.totalPrice, addressName: this.state.name, addressHouseNo: this.state.houseNo, addressCity: this.state.city, addressArea: this.state.area, mobileNo: this.state.phoneNumber })}>
                                                                    <Text style={{ alignSelf: 'center', top: 12, color: '#ffffff', fontFamily: APP_FONTS.bold }}>Deliver to this Address </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            :
                                                            //     <View style={{ flexDirection: 'row', left: 30, top: 50, width: wp('80%'), height: 46, backgroundColor: '#F43297', borderRadius: 8, justifyContent: 'center' }}>
                                                            //     <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentSummary', { dataSend: this.state.shoppingBag, priceTotal: this.state.totalPrice, addressName: this.state.name, addressHouseNo: this.state.houseNo, addressCity: this.state.city, addressArea: this.state.area, mobileNo: this.state.phoneNumber })}>
                                                            //         <Text style={{ alignSelf: 'center', top: 12, color: '#ffffff', fontFamily: APP_FONTS.bold }}>Deliver to this Address </Text>
                                                            //     </TouchableOpacity>
                                                            // </View>
                                                            null

                                                        }
                                                    </View>
                                                </TouchableOpacity>



                                            </View>

                                        )
                                    }} />
                            </View>


                            {/* <View style={{ flex: 0.18, bottom: Platform.OS == 'ios' ? 10 : 0, borderRadius: 1, borderColor: 'red', padding: 0 }}>


                                <View style={{ borderRadius: 1, borderColor: 'black' }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddNewAddress',{type:'AddBag'}) }}>
                                        <View style={{
                                            paddingLeft: 0,
                                            height: hp('7%'),
                                            marginBottom: 0,
                                            width: wp('80%'),
                                            borderStyle: 'dashed',
                                            borderRadius: 1,
                                            borderWidth: 1,
                                            borderColor: '#fe6c8e',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            // top: 10
                                            top: 10
                                        }} >
                                            <Text style={{ alignSelf: 'center', fontSize: 18, color: '#fe6c8e' }}>Add a New Address</Text>
                                        </View>
                                    </TouchableOpacity>
                                     
                                </View>

                            </View> */}

                        </SafeAreaView>







                        :

                        // this.state.paymentPage == true ?

                        //     <SafeAreaView style={{ flex: 1 }} >
                        //         <View style={{ flex: 0.20, backgroundColor: '#f8f8f8' }}>
                        //             <View>
                        //                 <Text>PAYMENT METHOD</Text>
                        //             </View>
                        //             <View>
                        //                 <Text>CASH ON DELIVERY</Text>
                        //             </View>

                        //         </View>



                        //         <View style={{ flex: 0.30, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, borderColor: 'black', padding: 15 }}>

                        //             <View style={{ flexDirection: 'row', top: 10 }}>
                        //                 <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 14 }}>$XX.00</Text>
                        //             </View>
                        //             <View style={{ flexDirection: 'row', right: 20, width: 140, height: 46, backgroundColor: '#F43297', borderRadius: 8 }}>
                        //                 <TouchableOpacity onPress={() => this.placeOrderToAddress()}>
                        //                     <View style={{}}>
                        //                         <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                        //                     </View>
                        //                 </TouchableOpacity>
                        //             </View>

                        //         </View>

                        //     </SafeAreaView>
                        //     : 

                        //   this.state.addressPage == false && this.state.paymentPage == false?

                        <ScrollView style={{ flex: 1 }}>
                            <View style={{ flex: 0.80, backgroundColor: '#f0f0f0' }}>
                                {/* <ScrollView> */}
                                <FlatList
                                    data={this.state.shoppingBag}
                                    style={{ flex: 1, top: 10, paddingBottom: 30 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index, separator }) => {
                                        console.log(item, 'itEM---===')
                                        return (
                                            //    <Text>jjsdhsj</Text>
                                            <View style={{ flex: 0.80 }}>
                                                <View style={{
                                                    backgroundColor: '#f0f0f0', marginTop: 12, marginLeft: 15, marginRight: 15
                                                }}>

                                                    <View style={{ backgroundColor: 'white', padding: 10, borderTopLeftRadius: 10, borderTopEndRadius: 10 }}>
                                                        {/* <View style={{  padding: 10 ,borderRadius:2,backgroundColor:'white'}}> */}
                                                        <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                                                            <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                                                                <View style={{
                                                                    shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 24 },
                                                                    shadowOpacity: Platform.OS == 'ios' ? 0.1 : 0.9,
                                                                    shadowRadius: Platform.OS == 'ios' ? 10 : 10,
                                                                    elevation: Platform.OS == 'ios' ? 0 : 10,
                                                                }}>
                                                                    <Image source={{ uri: item?.productId?.images  }} style={{ height: 160, width: 120, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }} />
                                                                </View>

                                                            </View>
                                                            <View style={{ right: 0, top: 0 }}>
                                                                <View style={{ borderColor: '#f2f2f2', width: '60%', flexDirection: 'row', borderWidth: 1, left: 4, borderRadius: 10 }}>
                                                                    <Image source={APP_IMAGES.discountDollar} style={{ height: 14, width: 14, left: 2 }} />
                                                                    <Text style={{ color: '#bcbcbc', fontSize: 9, fontFamily: APP_FONTS.bold, left: 5 }}>Commission:</Text>
                                                                    <Text style={{ color: '#bcbcbc', fontSize: 9, fontFamily: APP_FONTS.bold, left: 5 }}> {item?.productId?.commission} FCFA</Text>
                                                                </View>
                                                                <View style={{ top: 10, width: Platform.OS == 'ios' ? wp('50%') : wp('55%') }}>
                                                                    <Text ellipsizeMode='tail' numberOfLines={1} style={{ left: 10, top: 0, color: 'black', fontFamily: APP_FONTS.bold, fontSize: 12, flexWrap: 'wrap' }}>{item?.productId?.productName}</Text>
                                                                </View>
                                                                <Text style={{ color: '#f53d9c', fontSize: 12, fontFamily: APP_FONTS.bold, top: 15, left: 10 }}>FCFA {item?.productId?.price}</Text>


                                                                <View style={{ flexDirection: 'row', padding: 10, top: 40, paddingHorizontal: 40 }}>
                                                                    {/* <TouchableOpacity onPress={() => { this.modalViewSize(true) }} style={{ borderWidth: 1, borderColor: 'red' }}> */}
                                                                    {/* <View style={{ flexDirection: 'row'}}> */}

                                                                    <View style={{ flexDirection: 'row', right: 30 }}>
                                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium, top: 4 }}>Size</Text>
                                                                        <TouchableOpacity onPress={() => { this.modalViewSize(item.productId._id,item._id) }}>
                                                                            <View style={{ backgroundColor: '#f0f0f0', flexDirection: 'row', left: 7, padding: 7, bottom: 3, borderRadius: 4 }}>
                                                                                {/* {
                                                                                    this.state.modalSizeID == item.productId._id ?
                                                                                        <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{this.state.changeSizeValue}</Text>

                                                                                        : */}
                                                                                {console.log(item.size, 'ssuuuze')}
                                                                                {/* <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.size[0]}</Text> */}
                                                                                {/* {item.size.length >0&&item.size.map(i=> */}
                                                                                {/* // console.log(i,'iiii') */}
                                                                                <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.newSize ? item?.newSize : item.size}</Text>
                                                                                {/* ) */}
                                                                                {/* } */}
                                                                                {/* } */}
                                                                                {/* <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.size}</Text> */}
                                                                                <Image source={APP_IMAGES.imageArrowDown} style={{ height: Platform.OS == 'android' ? 12 : 10, width: 12, left: 3, top: Platform.OS == 'android' ? 3 : 1 }} />
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                    <View style={{ flexDirection: 'row', right: 2, top: 20 }}>
                                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium, bottom: 16, right: 10 }}>Qty</Text>
                                                                        <TouchableOpacity style={{ bottom: 15, right: 7, height: 20, width: Platform.OS == 'ios' ? 18 : 24 }} onPress={() => { this.editCartProduct(item.productId._id, "-", item.quantity, item._id, item.size) }}>
                                                                            <View style={{}}>
                                                                                <Image source={APP_IMAGES.minus} style={{ height: 2, width: 13, top: 8, left: 5 }} />
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                        <View style={{ height: 30, width: 30, borderRadius: 2, backgroundColor: '#f0f0f0', bottom: 22 }}>
                                                                            <Text style={{ color: '#001737', alignSelf: 'center', fontSize: 12, fontFamily: APP_FONTS.bold, top: 5 }}>{item.quantity}</Text>
                                                                        </View>
                                                                        <TouchableOpacity style={{ bottom: 15, left: 7, height: 18, width: 25 }} onPress={() => { this.editCartProduct(item.productId._id, "+", item.quantity, item._id, item.size) }}>
                                                                            <View style={{}}>
                                                                                <Image source={APP_IMAGES.plus} style={{ height: 12, width: 12, left: 5, top: Platform.OS == 'android' ? 3 : 1 }} />
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                    {/* </View> */}
                                                                    {/* </TouchableOpacity> */}
                                                                    {/* <View style={{
                                                                    flexDirection: 'row', height: '76%', width: 1.5, top: 3, left: 5,
                                                                    backgroundColor: '#909090'
                                                                }} /> */}
                                                                    {/* <View style={{ flexDirection: 'row', right: 0 }}>
                                                                    <TouchableOpacity style={{ bottom: 15, right: 7, height: 20, width: 24 }} onPress={() => { this.editCartProduct(item.productId._id, "-", item.quantity, item._id, item.size) }}>
                                                                        <View style={{}}>
                                                                            <Image source={APP_IMAGES.minus} style={{ height: 2, width: 13, top: 8, left: 5 }} />
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                    <View style={{ height: 30, width: 30, borderRadius: 2, backgroundColor: '#f0f0f0', bottom: 22 }}>
                                                                        <Text style={{ color: '#001737', alignSelf: 'center', fontSize: 12, fontFamily: APP_FONTS.bold, top: 5 }}>{item.quantity}</Text>
                                                                    </View>
                                                                    <TouchableOpacity style={{ bottom: 15, left: 7, height: 18, width: 25 }} onPress={() => { this.editCartProduct(item.productId._id, "+", item.quantity, item._id, item.size) }}>
                                                                        <View style={{}}>
                                                                            <Image source={APP_IMAGES.plus} style={{ height: 12, width: 12, left: 5, top: 3 }} />
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </View> */}
                                                                    {/* <Text style={{ left: 10, fontSize: 12, fontFamily: APP_FONTS.medium }}>Qty {item.quantity}</Text> */}
                                                                </View>
                                                            </View>


                                                        </View>

                                                    </View>
                                                    {/* <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
                                                        <View style={{ flexDirection: 'row', right: 20 }}>
                                                            <TouchableOpacity style={{ bottom: 15, right: 7, height: 20, width: 24 }} onPress={() => { this.editCartProduct(item.productId._id, "-", item.quantity, item._id, item.size) }}>
                                                                <View style={{}}>
                                                                    <Image source={APP_IMAGES.minus} style={{ height: 2, width: 13, top: 8, left: 5 }} />
                                                                </View>
                                                            </TouchableOpacity>
                                                            <View style={{ height: 30, width: 30, borderRadius: 2, backgroundColor: '#f0f0f0', bottom: 22 }}>
                                                                <Text style={{ color: '#001737', alignSelf: 'center', fontSize: 12, fontFamily: APP_FONTS.bold, top: 5 }}>{item.quantity}</Text>
                                                            </View>
                                                            <TouchableOpacity style={{ bottom: 15, left: 7, height: 18, width: 25 }} onPress={() => { this.editCartProduct(item.productId._id, "+", item.quantity, item._id, item.size) }}>
                                                                <View style={{}}>
                                                                    <Image source={APP_IMAGES.plus} style={{ height: 12, width: 12, left: 5, top: 3 }} />
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                     </View> */}
                                                    <View style={{ borderWidth: 1, borderColor: '#f0f0f0' }} />
                                                    <View style={{ backgroundColor: 'white', height: 40, flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                                        <TouchableOpacity onPress={() => { this.removeFromCart(item.productId._id, item._id) }}>
                                                            <Text style={{ color: '#949494', fontSize: 12, fontFamily: APP_FONTS.bold, left: 35 }}>REMOVE</Text>
                                                        </TouchableOpacity>
                                                        <View style={{
                                                            flexDirection: 'row', height: '65%', width: 1.5, top: 2, left: 5,
                                                            backgroundColor: '#f0f0f0'
                                                        }} />
                                                        <TouchableOpacity onPress={()=>{this.addWishList(item.productId._id)}}>
                                                        <Text style={{ color: '#f53d9c', fontSize: 12, fontFamily: APP_FONTS.bold, right: 30 }}>MOVE TO WISHLIST</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                </View>


                                            </View>
                                        )
                                    }}

                                />
                            </View>
                            <View style={{}}>
                                <Modal
                                    animationType={'fade'}
                                    transparent={true}
                                    // style={{justifyContent:'flex-end'}}
                                    visible={this.state.modalViewSizeBottom}
                                    onRequestClose={() => {
                                        this.setFilterModalVisible(!this.state.modalViewSizeBottom);
                                    }}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        this.setState({
                                            modalViewSizeBottom: false
                                        })
                                    }}>

                                        <View style={{
                                            justifyContent: 'flex-end',
                                            //  alignSelf:'flex-end',
                                            backgroundColor: '#000000AA',
                                            //  height:200,
                                            flex: 1
                                            //  top:100

                                        }}>


                                            {/* <TouchableOpacity onPress={()=>{this.setState({
                                        modalViewSizeBottom: false
                                    })}}>  */}
                                            <View style={{ backgroundColor: '#FFFFFF', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingHorizontal: 10, height: 200 }}>

                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                                    <Text style={{ fontSize: 14, color: '#8c8c8c', fontFamily: APP_FONTS.bold }}>SELECT SIZE</Text>
                                                    <TouchableOpacity style={{ height: 26, width: 30 }} onPress={() => {
                                                        this.setState({
                                                            modalViewSizeBottom: false
                                                        })
                                                    }}>
                                                        <Image source={APP_IMAGES.closedCircle} style={{ height: 12, width: 12, top: 4, left: 6 }} resizeMode={'contain'} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ borderBottomWidth: 1, width: '105%', borderColor: '#e7e7e7', right: 8 }} />

                                                <View style={{ paddingHorizontal: 20, marginTop: 40, flex: 1 }}>
                                                    <FlatList
                                                        horizontal
                                                        // data={sizeArray}
                                                        data={this.state.sizeArray}
                                                        style={{ flex: 1, bottom: 10 }}
                                                        keyExtractor={item => item.id}
                                                        showsHorizontalScrollIndicator={false}
                                                        renderItem={({ item, index, separator }) => {
                                                            console.log('itemLASSA', item)
                                                            return (
                                                                <View style={{ width: wp('15%') }}>

                                                                    {/* <TouchableOpacity onPress={() => { this.setSize(item) }}> */}
                                                                    {/* <View style={{ borderColor: '#fe6b8e', borderWidth: 1, borderRadius: 18, backgroundColor: '#ffedf1', height: 36, width: 46, justifyContent: 'center' }}> */}
                                                                    {/* <View style={{ borderColor: item == this.state.size ? '#fe6b8e' : '#f9f9f9', borderWidth: 1, borderRadius: 18, backgroundColor: item == this.state.size ? '#ffedf1' : '#f9f9f9', height: 36, width: 46, justifyContent: 'center' }}> */}
                                                                    <TouchableOpacity onPress={() => { this.changedSize(item) }}>
                                                                        <View style={{ borderColor: this.state.changeSizeValue == item ? '#fe5e84' : '#f9f9f9', borderWidth: 1, borderRadius: 18, backgroundColor: this.state.changeSizeValue == item ? '#ffedf1' : '#f9f9f9', height: 36, width: 46, justifyContent: 'center', borderWidth: 1 }}>
                                                                            <Text style={{ color: this.state.changeSizeValue == item ? '#fe5e84' : '#6f6f6f', fontSize: 12, fontFamily: APP_FONTS.bold, alignSelf: 'center' }}> {item} </Text>
                                                                            {/* <Text style={{ color: '#777777', fontSize: 12, fontFamily: APP_FONTS.bold, alignSelf: 'center' }}> jdsdnsj </Text> */}
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                    {/* </TouchableOpacity> */}

                                                                    {/* <View style={{ borderWidth: 1, borderColor: '#f0f0f0', bottom: 2, top: 50 }} /> */}
                                                                </View>
                                                            )
                                                        }}
                                                    />
                                                </View>
                                                <View style={{ bottom: 10 }}>
                                                    <View style={{ flexDirection: 'row', alignSelf: 'center', top: 0, width: wp('80%'), height: 46, backgroundColor: '#F43297', borderRadius: 8, justifyContent: 'center' }}>
                                                        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentSummary', { dataSend: this.state.shoppingBag, priceTotal: this.state.totalPrice, addressName: this.state.name, addressHouseNo: this.state.houseNo, addressCity: this.state.city, addressArea: this.state.area, mobileNo: this.state.phoneNumber })}> */}
                                                        <TouchableOpacity onPress={() => {
                                                            this.setState({
                                                                modalViewSizeBottom: false

                                                            })
                                                        }}>
                                                            <Text style={{ alignSelf: 'center', top: 12, color: '#ffffff', fontFamily: APP_FONTS.bold, left: 0 }}>Done</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                            {/* </TouchableOpacity>   */}
                                            {/* </TouchableWithoutFeedback> */}

                                        </View>
                                    </TouchableWithoutFeedback>
                                    {/* </TouchableWithoutFeedback> */}

                                </Modal>
                            </View>

                            <View style={{ flex: 0.10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Commission</Text>
                                    {/* <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>$20.00</Text> */}
                                </View>
                                <View style={{ padding: 10 }}>
                                    <FlatList
                                        data={this.state.shoppingBag}
                                        style={{ flex: 1, bottom: 10 }}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index, separator }) => {
                                            console.log('COMMOMOO', item)
                                            return (
                                                <View style={{ flex: 1 }}>
                                                    <View style={{ margin: 4, padding: 20, justifyContent: 'space-between', flexDirection: 'row', left: 0, backgroundColor: '#f0f0f0', borderRadius: 4, height: hp('8%'), width: wp('90%'), flex: 1 }}>
                                                        <View style={{ flex: 0.7, height: Platform.OS == 'ios' ? hp('4%') : hp('6%'), bottom: 10 }}>
                                                            {/* <Text style={{ color: '#b1b1b1', fontFamily: APP_FONTS.bold,bottom:30}}>{item.productId.productName}</Text> */}
                                                            <Text ellipsizeMode='tail' numberOfLines={1} style={{ color: '#b1b1b1', fontFamily: APP_FONTS.bold, top: 8, flexWrap: 'wrap' }}>{item?.productId?.productName}</Text>
                                                        </View>
                                                        <View style={{ flex: 0.3, bottom: Platform.OS == 'ios' ? 3 : 10, height: hp('6%') }}>
                                                            <Text style={{ color: '#b1b1b1', fontFamily: APP_FONTS.bold, alignSelf: 'flex-end' }}>FCFA {item?.productId?.commission}</Text>
                                                        </View>
                                                    </View>



                                                </View>
                                            )
                                        }}


                                    />

                                    <View style={{ left: 9, bottom: 6 }}>
                                        <Text style={{ fontFamily: APP_FONTS.semi_bold, fontSize: 12, color: '#5e5e5e', top: 6 }}>Commission Total</Text>
                                        <Text style={{ top: 8, color: '#5e5e5e', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>FCFA {this.state.totalCommission}</Text>
                                        <Text style={{ top: 12, fontSize: 10, fontFamily: APP_FONTS.semi_bold }}>This amount will be transferred to your mobile money number</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#f0f0f0' }} />
                            <View style={{ flex: 0.10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }} >Price Details</Text>
                                    {/* <Text>$20.00</Text> */}
                                </View>
                                <View style={{ padding: 20, right: 8 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                                        <Text>Product Charges</Text>
                                        <Text>FCFA {this.state.totalPrice}</Text>
                                    </View>
                                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                                        <Text>Delivery Charges</Text>
                                        <Text>$20.00</Text>
                                    </View> */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text>Discount</Text>
                                        <Text>FCFA {this.state.totalDiscount}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ededed', borderWidth: 1.5 }}>
                                <View>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Order Total</Text>
                                    <Text style={{ fontFamily: APP_FONTS.semi_bold, fontSize: 10, color: '#bebebe' }}>Total amount to be paid by the customer</Text>
                                </View>
                                <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>FCFA {this.state.totalPrice}</Text>
                            </View>


                            {/* <View style={{
                                flex: 0.30, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, borderColor: 'black', padding: 15, shadowColor: '#f0f0f0',
                                // shadowColor: 'red',

                                //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 25 },
                                shadowOpacity: Platform.OS == 'ios' ? 0.1 : 0.9,
                                shadowRadius: Platform.OS == 'ios' ? 10 : 10,
                                elevation: Platform.OS == 'ios' ? 0 : 2,
                            }}>

                                <View style={{ flexDirection: 'row', top: 10 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 14 }}>FCFA {this.state.totalPrice}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', left: 2, width: 140, height: 46, backgroundColor: '#F43297', borderRadius: 8 }}>
                                    <TouchableOpacity onPress={() => this.placeOrderToAddress()}>
                                        <View style={{}}>
                                            <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View> */}
                        </ScrollView>

                }

                {/* <View style={{ flex: 0.30, top: 10 }}> */}
                {/* <View style={{ left: 30, flexDirection: 'row', top: 30 }}>
                        <Text style={{ fontSize: 10, color: 'black', right: 10, fontFamily: APP_FONTS.medium }}>Wishlist</Text>
                        <Text style={{ fontSize: 10, color: 'black', right: 5, fontFamily: APP_FONTS.medium }}>Share</Text>
                        <Text style={{ fontSize: 10, color: 'black', fontFamily: APP_FONTS.medium }}>Download</Text>
                    </View> */}

                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}> */}
                {/* <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.state.productId == null || this.state.token == null ? this.showMessage() : this.state.boolean == true ? this.removeFromWishList(this.state.productIId) : this.addWishList(this.state.productIId)} style={{ width: widthPercentageToDP('20%') }}>
                                {/* <TouchableOpacity onPress={()=>this.state.token == ''? this.showMessage():this.state.boolean == true ?this.removeFromWishList(this.state.productIId):this.addWishList(this.state.productIId)} style={{width:widthPercentageToDP('20%')}}> */}
                {/* <Image source={this.state.boolean == true ? APP_IMAGES.heartActive : APP_IMAGES.heart} style={{ height: 16, width: 16, left: 30 }} resizeMode="contain" />
                            </TouchableOpacity>
                            <Image source={APP_IMAGES.share} style={{ height: 16, width: 16, left: 0, tintColor: 'black' }} resizeMode="contain" />
                            <Image source={APP_IMAGES.downloadDark} style={{ height: 16, width: 16, left: 30 }} resizeMode="contain" />
                        </View> */}

                {/* <TouchableOpacity onPress={() => { this.addTocart(this.state.productId) }}>
                            <View style={{ flexDirection: 'row', right: 20, width: 150, height: 45, backgroundColor: '#F43297', borderRadius: 8, bottom: 10 }}>
                                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToBag')}> */}
                {/* <View style={{}}>
                                    <Image source={APP_IMAGES.cart} style={{ height: 20, width: 20, top: 12, left: 20, tintColor: 'white' }} resizeMode="contain" />
                                    <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 50, bottom: 8 }}>Add to Bag</Text>

                                </View>
                            </View>
                        </TouchableOpacity> */}

                {/* </View>
                    <View style={{ backgroundColor: 'black' }}>
                        <Text style={{ color: 'black' }}>Wishlist</Text>

                    </View>


                </View> */}
                {/* {this.onPaymentStepComplete()} */}

                {
                    this.state.addressPage == false ?

                        <View style={{
                            flex: 0.10, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, borderColor: 'black', padding: 15, shadowColor: '#f0f0f0',
                            shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 25 },
                            shadowOpacity: Platform.OS == 'ios' ? 0.1 : 0.9,
                            shadowRadius: Platform.OS == 'ios' ? 10 : 10,
                            elevation: Platform.OS == 'ios' ? 0 : 2,
                        }}>

                            <View style={{ flexDirection: 'row', top: 10 }}>
                                <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 14 }}>FCFA {this.state.totalPrice}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', left: 2, width: 140, height: 46, backgroundColor: '#F43297', borderRadius: 8 }}>
                                <TouchableOpacity onPress={() => this.placeOrderToAddress()}>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                        :
                        null
                }



            </SafeAreaView >
        )
    }



}

export default addTobag;