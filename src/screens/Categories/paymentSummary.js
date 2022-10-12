
import React, { Component } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, Platform } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { APP_FONTS, APP_IMAGES, APP_URLS } from "../../utils/Common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';





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



class paymentSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            token: '',
            // addressPage: false/
            addressPage: false,
            shoppingBag: '',
            paymentPage: false,
            modalViewSizeBottom: false,
            modalAddressOpen: false,
            changeSizeValue: '',
            modalSizeID: '',
            bagPage: true,
            showSummaryPage: false,
            shoppingBagCartData: this.props.route.params.dataSend,
            totalPrice: this.props.route.params.priceTotal,
            shoppingCartData: this.props.route.params.dataSend,
            nameAdress: this.props.route.params.addressName,
            houseNumber: this.props.route.params.addressHouseNo,
            city: this.props.route.params.addressCity,
            area: this.props.route.params.addressArea,
            mobileNumber: this.props.route.params.mobileNo,
            modalIndexID:''
        }
    }

    componentDidMount() {
        this.userDetail()
        console.log(this.state.shoppingBagCartData, 'dhdhdjshs')

    }

    async userDetail() {
        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })
        console.log(this.state.token, 'oojojtkt')
        this.getShoppingBag()




        //   this.wishlist()
        // await AsyncStorage.getItem('@user',JSON.stringify(user)).then(() => {
        //     console.log(user, 'fcmtokenLoginß')

        // })
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

    placeOrderToAddress() {
        this.setState({
            showSummaryPage: true
        })
    }

    async editCartProduct(productId, operator, quanity, cartId, size) {
        console.log('jdsjhsj')
        console.log(productId, operator, quanity, cartId, 'oOOO')
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

    async getShoppingBag() {
        console.log('UWQ')
        let body = {

        }
        try {
            let response = await fetch(

                APP_URLS.getShoppingBag,
                {
                    'method': 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + this.state.token.split('"').join(''),

                    },
                    body: body
                }
            );
            if (response.status == 200) {


                response.json().then(data => {
                    console.log(data.products, 'fdaatat')

                    // if (data.response.status.statusCode === 200) {
                    if (data.status == 1) {
                        this.setState({
                            shoppingBag: data.products,
                            totalPrice: data.totalPrice
                        })
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

    openAddressBox(houseNo, city, area, mobileNumber, nameAddress) {
        this.setState({
            modalAddressOpen: true,
            houseNumber: houseNo,
            city: city,
            area: area,
            mobileNumber: mobileNumber,
            nameAddress: nameAddress


        })
    }

    changedSize(changedSizeValue) {
        console.log(changedSizeValue, 'changee')
        let temp = [...this.state.shoppingBag]
        let array = []
        console.log(temp, 'temppp')
        temp.forEach((item, index) => {
            let temp1 = { ...item }

            // console.log(temp1,'temp111')
            // if (this.state.modalSizeID == item.productId._id) {
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

   async placeOrder(productID,quantity){
        let body = {
            // {
                productId:productID,
                orderStatus: "Order_Placed",
                quantity: quantity,
                paymentMode: "Cash on Delivery"
            // }
        }
        console.log(body,'BOBOBDY')
        try {
            let response = await fetch(

                APP_URLS.placeOrder,
                {
                    'method': 'POST',
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

                    // console.log('wishdaata+++', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        this.props.navigation.navigate('PlaceOrderPage')
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
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'space-between', top: 0 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        {
                            this.state.showSummaryPage == false ?
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <View>
                                        <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                            resizeMode="contain"
                                            source={APP_IMAGES.arrowLeft} />

                                    </View>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => this.setState({
                                    showSummaryPage: false
                                })}>
                                    <View>
                                        <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                            resizeMode="contain"
                                            source={APP_IMAGES.arrowLeft} />

                                    </View>
                                </TouchableOpacity>
                        }
                        {
                            this.state.showSummaryPage == true ?
                                <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>ORDER DETAILS</Text>
                                :
                                <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>PAYMENT</Text>

                        }
                    </View>
                </View>
                <View style={{ flex: 0.15, bottom: 20 }}>
                    {/* <ProgressSteps activeLabelColor={'#4a6e8b'} activeLabelColor={'#4a6e8b'} activeStepNumColor={'#4a6e8b'} activeStepIconBorderColor={'#4a6e8b'} completedStepIconColor={'#4a6e8b'} completedProgressBarColor={'#4a6e8b'} labelFontFamily={APP_FONTS.semi_bold} labelColor={'lightgray'} activeStep={this.state.showSummaryPage == true ? 3 : 2}> */}
                    <ProgressSteps height={hp('40%')} activeLabelColor={'#333333'} activeStepNumColor={'#5d87ef'} activeStepIconBorderColor={'#5d87ef'} completedStepIconColor={'#5d87ef'} completedProgressBarColor={'#5d87ef'} removeBtnRow={'true'} disabledStepIconColor={'#dfdfdf'} disabledStepNumColor={'#FFFFFF'} labelFontFamily={APP_FONTS.semi_bold} labelColor={'lightgray'} activeStep={this.state.showSummaryPage == true ? 3 : 2}>


                        {/* <ProgressSteps activeLabelColor={'#4a6e8b'} activeStepIconBorderColor={'#4a6e8b'}labelFontFamily={APP_FONTS.semi_bold} labelColor={'lightgray'}> */}
                        <ProgressStep label="Bag">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 1!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Address">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Payment">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Summary">
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>

                {/* <View style={{ flex: 0.12, flexDirection: 'row', justifyContent: 'space-between', top: 0 }}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 40, fontFamily: APP_FONTS.bold }}>PAYMENT</Text>
                    </View>
                    <View style={{ flex: 0, backgroundColor: '#fffff', right: 100, flexDirection: 'row', justifyContent: 'space-between', top: 50 }}>
                        <View style={{ flexDirection: 'row' }}>
                            
                            <View style={{ height: 24, width: 24, borderRadius: 12 }}>
                                 <Image source={APP_IMAGES.blueTick} style={{ height: 22, width: 22 }} />

                            </View>

                            <View style={{ left: 5, top: 2 }}>
                                <Text style={{ color: '#7bc0f7' }}>Bag-----</Text>
                            </View>
                         </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ height: 24, width: 24, borderRadius: 12, }}>
                                 <Image source={APP_IMAGES.blueTick} style={{ height: 23, width: 23, right: 1, bottom: 1 }} />

                            </View>
                             <View style={{ left: 5, top: 2 }}>
                                <Text style={{ color: '#9f9f9f' }}>Address---</Text>
                            </View>
                         </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5, left: 2 }}>
                                {
                                    this.state.showSummaryPage == true ?
                                        <Image source={APP_IMAGES.blueTick} style={{ height: 23, width: 23, right: 1, bottom: 1, left: 3 }} />
                                        :
                                        <Text style={{ alignSelf: 'center' }}>3</Text>
                                }
                            </View>
                            <View style={{ left: 5, top: 2 }}>
                                <Text style={{ color: '#9f9f9f' }}>Payment---</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ borderColor: '#9f9f9f', height: 24, width: 24, borderRadius: 12, borderWidth: 1.5, left: 5 }}>
                                <Text style={{ alignSelf: 'center' }}>4</Text>
                            </View>
                            <View style={{ left: 6, top: 2 }}>
                                <Text style={{ color: '#9f9f9f' }}>Summary</Text>
                            </View>
                        </View>
                    </View> */}
                {/* </View> */}
                <View style={{ borderColor: '#f0f0f0', borderBottomWidth: 2, height: 12 }} />

                {
                    this.state.showSummaryPage == true ?
                        //  <View style={{flex:1}}>

                        <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
                            <ScrollView style={{ flex: 1 }}>
                                {/* <View style={{ backgroundColor: 'white', flex: 0.10, top: 10 ,height:hp('5%')}}>
                                <View style={{ padding: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#3e3e3e', top: 12, left: 12 }}>Order number</Text>
                                    <Text style={{ color: '#3e3e3e', top: 12, right: 12, fontFamily: APP_FONTS.bold, fontSize: 12 }}>1027465833</Text>
                                </View>
                                <View />

                            </View> */}
                                <View style={{ backgroundColor: 'white', flex: 0.20, top: 20, height: hp('7%') }}>
                                    <View style={{ padding: 0, flexDirection: 'row' }}>
                                        <Image source={APP_IMAGES.mdiTruckDelivery} style={{ height: 20, width: 20, top: 12, left: 10 }} resizeMode={'contain'} />
                                        <Text style={{ color: '#3e3e3e', top: 14, left: 20, fontFamily: APP_FONTS.semi_bold, fontSize: 12, right: 0 }}>Estimated Delivery by Friday,Sep 10,2021</Text>
                                    </View>
                                    <View />

                                </View>
                                <View style={{ flex: 1 }}>
                                    <FlatList
                                        // data={this.state.shoppingBagCartData}
                                        data={this.state.shoppingBag}
                                        style={{ flex: 1, top: 10 }}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item, index, separator }) => {
                                            console.log(item, 'itEM-DARR--===')
                                            return (
                                                <View style={{ flex: 0.80 }}>
                                                    <View style={{ backgroundColor: '#f0f0f0', paddingVertical: 5 }}>
                                                        <View style={{ backgroundColor: 'white', padding: 10 }}>
                                                            <View style={{ borderColor: '#f2f2f2', width: '40%', flexDirection: 'row', borderWidth: 1, alignSelf: 'center', borderRadius: 10, bottom: 0, right: 9 }}>
                                                                <Image source={APP_IMAGES.discountDollar} style={{ height: 14, width: 14, left: 2 }} />
                                                                <Text style={{ color: '#bcbcbc', fontSize: 9, fontFamily: APP_FONTS.bold, left: 5 }}>Commission:</Text>
                                                                <Text style={{ color: '#bcbcbc', fontSize: 9, fontFamily: APP_FONTS.bold, left: 5 }}> {item.productId.commission} FCFA</Text>
                                                            </View>
                                                            {/* <Text style={{ padding: 10, color: '#bdbdbd', fontFamily: APP_FONTS.bold, fontSize: 12, left: 90, bottom: 12 }}>Commission {item.productId.commission}</Text> */}

                                                            <View style={{ backgroundColor: 'white', flexDirection: 'row', top: 10, paddingHorizontal: 20 }}>
                                                                <View style={{
                                                                    shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 24 },
                                                                    shadowOpacity: Platform.OS == 'ios' ? 0.1 : 0.9,
                                                                    shadowRadius: Platform.OS == 'ios' ? 10 : 10,
                                                                    elevation: Platform.OS == 'ios' ? 0 : 10,
                                                                    // borderWidth:1,borderColor:'red'
                                                                }}>
                                                                    <Image source={{ uri: item.productId.images }} style={{ height: 70, width: 70, bottom: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }} />
                                                                    {/* <Image source={{ uri: item.productId.images }} style={{ height: 160, width: 120}} /> */}
                                                                </View>
                                                                <View style={{ height: 30, bottom: 5, left: 13, width: wp('70%'), padding: 0 }}>
                                                                    <Text style={{ color: 'black', fontFamily: APP_FONTS.medium, fontSize: 12 }}>{item.productId.productName}</Text>
                                                                    {/* <Text style={{ color: 'black', fontFamily: APP_FONTS.medium, fontSize: 12 }}>https://www.google.com/search?q=gif+for+react+native+page&rlz=1C5CHFA_enIN963IN963</Text> */}
                                                                </View>
                                                                <View style={{ height: 20, top: 26, right: Platform.OS == 'ios' ? 250 : 260, width: wp('100%')}}>
                                                                    <Text style={{ color: 'black', fontSize: 12, fontFamily: APP_FONTS.bold }}> FCFA {item.productId.mrp}</Text>
                                                                    {/* <Text style={{ color: 'black', fontSize: 12, fontFamily: APP_FONTS.bold }}> FCFA 12000</Text> */}
                                                                </View>
                                                            </View>
                                                            <View style={{ alignSelf: 'center', right: 0, bottom: 10 }}>
                                                                <View style={{ flexDirection: 'row', left: 5 }}>
                                                                    <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium, top: 4 }}>Size</Text>
                                                                    {/* <TouchableOpacity onPress={() => { this.modalViewSize(item.productId._id) }}> */}
                                                                    <TouchableOpacity onPress={() => { this.modalViewSize(item.productId._id,item._id) }}>
                                                                        <View style={{ backgroundColor: '#f0f0f0', flexDirection: 'row', left: 7, padding: 7, bottom: 3, borderRadius: 4 }}>
                                                                            {console.log(item.size, 'ssuuuze')}
                                                                            {console.log(item.newSize, 'newSize')}
                                                                            {console.log(item.newSize ? item?.newSize : item.size, 'hiphop')}
                                                                            {/* <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.size}</Text> */}
                                                                            {/* <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.newSize ?item?.newSize : item.size}</Text> */}
                                                                            <Text style={{ fontSize: Platform.OS == 'android' ? 14 : 12, fontFamily: APP_FONTS.bold, color: 'black' }}>{item.newSize ? item?.newSize : item.size}</Text>
                                                                            <Image source={APP_IMAGES.imageArrowDown} style={{ height: Platform.OS == 'android' ? 12 : 10, width: 12, left: 3, top: Platform.OS == 'android' ? 3 : 1 }} />
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                    <View style={{
                                                                        flexDirection: 'row', height: '76%', width: 1.5, top: 3, left: 15,
                                                                        backgroundColor: '#909090'
                                                                    }} />
                                                                    <View style={{ flexDirection: 'row', left:30 , top: 20 }}>
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

                                                                    {/* <View style={{ left: 20, top: 5, flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium }}>Qty </Text>
                                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold }}>{item.quantity}</Text>
                                                                    </View> */}
                                                                </View>

                                                                {/* <View style={{ flexDirection: 'row', top: 3, backgroundColor: 'white' }}>
                                                                    <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium }}>Size {item.size}</Text>
                                                                    <View style={{
                                                                        flexDirection: 'row', height: '76%', width: 1.5, top: 3, left: 5,
                                                                        backgroundColor: '#909090'
                                                                    }} />
                                                                    <Text style={{ left: 10, fontSize: 12, fontFamily: APP_FONTS.medium }}>Qty{item.quantity}</Text>
                                                                </View> */}
                                                            </View>
                                                        </View>

                                                    </View>


                                                </View>
                                            )
                                        }}

                                    />
                                </View>
                                {/* <View style={{ backgroundColor: 'white', padding: 20 }}>
                                     <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
                                         <Text style={{ padding: 10, color: 'black', fontFamily: APP_FONTS.bold, fontSize: 12 }}></Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', right: 30, bottom: 24, backgroundColor: 'white' }}>
                                        <Text style={{ color: '#f53d9c', fontSize: 12, fontFamily: APP_FONTS.bold }}></Text>
                                        <View style={{ flexDirection: 'row', top: 3, backgroundColor: 'white' }}>
                                            <Text style={{ fontSize: 12, fontFamily: APP_FONTS.medium }}>Size </Text>
                                            <View style={{
                                                flexDirection: 'row', height: '76%', width: 1.5, top: 3, left: 5,
                                                backgroundColor: '#909090'
                                            }} />
                                            <Text style={{ left: 10, fontSize: 12, fontFamily: APP_FONTS.medium }}>Qty </Text>
                                        </View>
                                    </View>
                                </View> */}
                                {/* <View style={{ flex: 0.30, backgroundColor: 'white', top: 20, padding: 10, height: hp('20%') }}>
                                    {/* <View style={{ height: hp('15%'), top: 10 }}> */}

                                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f8f8f8' }}> */}
                                {/* <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 25 }}>{this.state.nameAdress}</Text> */}


                                {/* <Image source={APP_IMAGES.check} style={{ height: 16, width: 16, top: 18, right: 10 }} /> */}

                                {/* </View> */}
                                {/* <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 30 }}>{this.state.houseNumber} {this.state.city}  {this.state.area} </Text> */}
                                {/* <Text style={{ fontSize: 12 }}>{"address": {"area": "Ok", "city": "110033", "houseNo": "Hhh", "nearByLocation": "Sector2", "pinCode": 110033, "state": "Punjab"},}</Text> */}
                                {/* <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 50 }}>Mobile: {this.state.mobileNumber}</Text> */}

                                {/* </View> */}
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
                                                            style={{ flex: 1, top: 0 }}
                                                            keyExtractor={item => item.id}
                                                            showsHorizontalScrollIndicator={false}
                                                            renderItem={({ item, index, separator }) => {
                                                                console.log('itemLASSA', item)
                                                                return (
                                                                    <View style={{ width: wp('15%') }}>
                                                                        <TouchableOpacity onPress={() => { this.changedSize(item) }}>
                                                                            <View style={{ borderColor: this.state.changeSizeValue == item ? '#fe5e84' : '#f9f9f9', borderWidth: 1, borderRadius: 18, backgroundColor: this.state.changeSizeValue == item ? '#ffedf1' : '#f9f9f9', height: 36, width: 46, justifyContent: 'center', borderWidth: 1 }}>

                                                                                {/* <View style={{ borderColor: '#f9f9f9', borderWidth: 1, borderRadius: 18, backgroundColor: '#f9f9f9', height: 36, width: 46, justifyContent: 'center' }}> */}
                                                                                <Text style={{ color: this.state.changeSizeValue == item ? '#fe5e84' : '#6f6f6f', fontSize: 12, fontFamily: APP_FONTS.bold, alignSelf: 'center' }}> {item} </Text>
                                                                            </View>

                                                                        </TouchableOpacity>

                                                                    </View>
                                                                )
                                                            }}
                                                        />
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
                                                </View>


                                            </View>
                                        </TouchableWithoutFeedback>

                                    </Modal>
                                </View>

                                <View style={{}}>
                                    <Modal
                                        animationType={'fade'}
                                        transparent={true}
                                        // style={{justifyContent:'flex-end'}}
                                        visible={this.state.modalAddressOpen}
                                        onRequestClose={() => {
                                            this.setFilterModalVisible(!this.state.modalAddressOpen);
                                        }}>
                                        <TouchableWithoutFeedback onPress={() => {
                                            this.setState({
                                                modalAddressOpen: false
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
                                                <View style={{ backgroundColor: '#FFFFFF', width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingHorizontal: 10, height: 320 }}>

                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                                        <Text style={{ fontSize: 14, color: '#8c8c8c', fontFamily: APP_FONTS.bold }}>DELIVERY ADDRESS</Text>
                                                        <TouchableOpacity style={{ height: 26, width: 30 }} onPress={() => {
                                                            this.setState({
                                                                modalAddressOpen: false
                                                            })
                                                        }}>
                                                            <Image source={APP_IMAGES.closedCircle} style={{ height: 12, width: 12, top: 4, left: 6 }} resizeMode={'contain'} />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ borderBottomWidth: 1, width: '105%', borderColor: '#e7e7e7', right: 8 }} />
                                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddNewAddress', { type: 'SummaryNewAddress' }) }}>
                                                        <View style={{ padding: 10, top: 10 }}>
                                                            <Text style={{ fontSize: 12, color: '#fc7192', fontFamily: APP_FONTS.bold }}>+ ADD NEW ADDRESS</Text>
                                                        </View>
                                                    </TouchableOpacity>

                                                    <View style={{ paddingHorizontal: 20, marginTop: 20, flex: 1, backgroundColor: '#f8f8f8', bottom: 10 }}>

                                                        <View style={{ height: hp('15%'), top: 10 }}>

                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 20 }}>{this.state.nameAdress}</Text>

                                                                {/* {
                                                                    item.address.houseNo == this.state.houseNumber ? */}
                                                                <Image source={APP_IMAGES.check} style={{ height: 16, width: 16, top: 25, right: 10 }} />
                                                                {/* : */}
                                                                {/* <Image source={APP_IMAGES.uncheck} style={{ height: 16, width: 16, top: 18, right: 10 }} /> */}
                                                                {/* } */}
                                                            </View>
                                                            <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 25 }}>{this.state.houseNumber} {this.state.city}  {this.state.area} </Text>
                                                            {/* <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 25 }}>H3 SAS NAGAR 101</Text> */}
                                                            {/* <Text style={{ fontSize: 12 }}>{"address": {"area": "Ok", "city": "110033", "houseNo": "Hhh", "nearByLocation": "Sector2", "pinCode": 110033, "state": "Punjab"},}</Text> */}
                                                            <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 40 }}>Mobile: {this.state.mobileNumber}</Text>

                                                        </View>
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
                                                            <View style={{ padding: 10 }}>
                                                                <Text style={{ color: '#fc7192', fontSize: 12, fontFamily: APP_FONTS.bold }}>EDIT</Text>
                                                            </View>
                                                        </TouchableOpacity>

                                                        {/* <FlatList
                                                            horizontal
                                                            // data={sizeArray}
                                                            data={this.state.sizeArray}
                                                            style={{ flex: 1, top: 0 }}
                                                            keyExtractor={item => item.id}
                                                            showsHorizontalScrollIndicator={false}
                                                            renderItem={({ item, index, separator }) => {
                                                                console.log('itemLASSA', item)
                                                                return (
                                                                    <View style={{ width: wp('15%') }}>

                                                                        <View style={{ borderColor: '#f9f9f9', borderWidth: 1, borderRadius: 18, backgroundColor: '#f9f9f9', height: 36, width: 46, justifyContent: 'center' }}>
                                                                            <Text style={{ color: '#6f6f6f', fontSize: 12, fontFamily: APP_FONTS.bold, alignSelf: 'center' }}> {item} </Text>
                                                                        </View>

                                                                    </View>
                                                                )
                                                            }}
                                                        /> */}
                                                    </View>
                                                    <View style={{ backgroundColor: '#f8f8f8', bottom: 10 }}>
                                                        <View style={{ flexDirection: 'row', width: '90%', height: 46, backgroundColor: '#F43297', borderRadius: 8, alignSelf: 'center', justifyContent: 'center' }}>
                                                            <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center' }}>Deliver to this Address </Text>
                                                        </View>
                                                    </View>
                                                </View>


                                            </View>
                                        </TouchableWithoutFeedback>

                                    </Modal>
                                </View>



                                <View style={{ flex: 0.30, backgroundColor: 'white', top: 10, padding: 10, height: hp('20%') }}>
                                    {/* <View style={{ height: hp('15%'), top: 10 }}> */}

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', top: 0, flex: 0.10 }}>
                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 30 }}>{this.state.nameAdress}</Text>


                                        {/* <Image source={APP_IMAGES.arrowRight} style={{ height: 10, width: 10, alignSelf: 'center', right: 10 }} /> */}

                                    </View>
                                    <View style={{ flex: 0.20, top: 40 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: '#acacac', left: 10, top: 0 }}>{this.state.houseNumber} {this.state.city}  {this.state.area} </Text>
                                            <TouchableOpacity onPress={() => { this.openAddressBox(this.state.houseNumber, this.state.city, this.state.area, this.state.mobileNumber, this.state.nameAdress) }}>
                                                <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10, top: 5, right: 12 }} />
                                            </TouchableOpacity>
                                        </View>

                                        {/* <Text style={{ fontSize: 12 }}>{"address": {"area": "Ok", "city": "110033", "houseNo": "Hhh", "nearByLocation": "Sector2", "pinCode": 110033, "state": "Punjab"},}</Text> */}
                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.bold, color: 'black', left: 10, top: 30 }}>Mobile: {this.state.mobileNumber}</Text>
                                    </View>

                                </View>

                                <View style={{ backgroundColor: 'white', flex: 0.20, top: 20, height: hp('15%') }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ color: '#3e3e3e', fontSize: 14, fontFamily: APP_FONTS.semi_bold }}>Payment Method</Text>
                                    </View>
                                    <View />
                                    <View style={{ padding: 10, left: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={APP_IMAGES.cash} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                                            <Text style={{ color: '#3e3e3e', left: 10, fontFamily: APP_FONTS.semi_bold }}>Cash on Delivery</Text>
                                        </View>
                                        <View style={{ right: 20 }}>
                                            <Image source={APP_IMAGES.greenTick} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                                        </View>
                                    </View>

                                </View>



                                <View style={{ backgroundColor: 'white', flex: 0.40, top: 10 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                                        <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }} >Price Details</Text>
                                    </View>
                                    <View style={{ padding: 20 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                                            <Text>Product Charges</Text>
                                            <Text>$20.00</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                                            <Text>Delivery Charges</Text>
                                            <Text>$20.00</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>Discount</Text>
                                            <Text>$20.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ededed', borderWidth: 1.5, top: 20, height: hp('10%') }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Order Total</Text>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>FCFA {this.state.totalPrice}</Text>
                                </View>
                            </ScrollView>
                        </View>


                        :
                        <ScrollView style={{ flex: 1 }}>
                            <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
                                <View style={{ backgroundColor: 'white', flex: 0.20, top: 10 }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ color: '#3e3e3e', fontSize: 14, fontFamily: APP_FONTS.semi_bold }}>Payment Method</Text>
                                    </View>
                                    <View />
                                    <View style={{ padding: 10, left: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={APP_IMAGES.cash} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                                            <Text style={{ color: '#3e3e3e', left: 10, fontFamily: APP_FONTS.semi_bold }}>Cash on Delivery</Text>
                                        </View>
                                        <View style={{ right: 20 }}>
                                            <Image source={APP_IMAGES.greenTick} style={{ height: 20, width: 20 }} resizeMode={'contain'} />
                                        </View>
                                    </View>

                                </View>
                                <View style={{ flex: 0.10, backgroundColor: '#fffff', top: 20 }}>
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
                                                    <View style={{}}>
                                                        <View style={{ margin: 4, padding: 20, justifyContent: 'space-between', flexDirection: 'row', left: 0, backgroundColor: '#f0f0f0', borderRadius: 4, height: hp('8%'), width: wp('90%'), flex: 1 }}>
                                                            <View style={{ flex: 0.7, height: Platform.OS == 'ios' ? hp('4%') : hp('6%'), bottom: 10 }}>
                                                                {/* <Text style={{ color: '#b1b1b1', fontFamily: APP_FONTS.bold,bottom:30}}>{item.productId.productName}</Text> */}
                                                                <Text ellipsizeMode='tail' numberOfLines={1} style={{ color: '#b1b1b1', fontFamily: APP_FONTS.bold, top: 8, flexWrap: 'wrap' }}>{item.productId.productName}</Text>
                                                            </View>
                                                            <View style={{ flex: 0.3, bottom: Platform.OS == 'ios' ? 3 : 10, height: hp('6%') }}>
                                                                <Text style={{ color: '#b1b1b1', fontFamily: APP_FONTS.bold, alignSelf: 'flex-end' }}>FCFA {item.productId.commission}</Text>
                                                            </View>
                                                        </View>



                                                    </View>
                                                )
                                            }}


                                        />
                                    </View>
                                </View>

                                <View style={{ backgroundColor: 'white', flex: 0.40, top: 20 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                                        <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }} >Price Details</Text>
                                    </View>
                                    <View style={{ padding: 20 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                                            <Text>Product Charges</Text>
                                            <Text>$20.00</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                                            <Text>Delivery Charges</Text>
                                            <Text>$20.00</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text>Discount</Text>
                                            <Text>$20.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ededed', borderWidth: 1.5 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Order Total</Text>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>FCFA {this.state.totalPrice}</Text>
                                </View>

                            </View>
                        </ScrollView>

                }

                <View style={{ flex: 0.10, flexDirection: 'row', justifyContent: 'space-between', bottom: 0, borderRadius: 1, borderColor: 'black', padding: 15 }}>

                    <View style={{ flexDirection: 'row', top: 10 }}>
                        <Text style={{ fontFamily: APP_FONTS.bold, color: 'black', fontSize: 14 }}>FCFA {this.state.totalPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', right: 20, width: 140, height: 46, backgroundColor: '#F43297', borderRadius: 8 }}>

                        {
                            this.state.showSummaryPage == true ?
                                // <TouchableOpacity onPress={() => this.props.navigation.navigate('PlaceOrderPage')}>
                                <TouchableOpacity onPress={() => this.placeOrder(this.state.shoppingBag[0].productId._id,this.state.shoppingBag[0].quantity)}>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Place Order</Text>

                                    </View>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => this.placeOrderToAddress()}>
                                    <View style={{}}>
                                        <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 30, top: 10 }}>Continue</Text>

                                    </View>
                                </TouchableOpacity>

                        }
                    </View>

                </View>













            </SafeAreaView>
        )
    }



}

export default paymentSummary;