
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { APP_FONTS, APP_IMAGES, APP_URLS } from "../../utils/Common";
import { SliderBox } from "react-native-image-slider-box";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Rating } from 'react-native-ratings';
import ImageSlider from 'react-native-image-slider';
import wishlist from "../Wishlist/wishlist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ServerContainer } from "@react-navigation/native";
import ShowLoader from "../../utils/Loader";






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

const REVIEWS = [
    {
        id: 1,
        profileImage: require('../../../assets/images/profile-img.png'),
        profileName: 'Palak Sharma',
        rating: 4.1,
        date: '25 Jul,2021',
        imageUpload: require('../../../assets/images/product-img.png'),
        remark: 'Very Good',
        comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'
    },
    {
        id: 2,
        profileImage: require('../../../assets/images/profile-img.png'),
        profileName: 'Palak Sharma',
        rating: 4.1,
        date: '25 Jul,2021',
        remark: 'Very Good',
        imageUpload: require('../../../assets/images/product-img.png'),
        comment: 'Love the color and fit of the top.The delivery was quick.Thank you CHapShop'
    }

]

// handleRating(rate){
//    this.set
// }


class productDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [
                require('../../../assets/images/product-img-four.png'),
                require('../../../assets/images/product-img-three.png'),
                require('../../../assets/images/product-img-two.png'),
                require('../../../assets/images/product-img-four.png'),
                // require('./assets/images/girl.jpg'),          // Local image
            ],
            colorCheck: false,
            productId: this.props.route.params.id,
            multipleImages: [],
            productIId: '',
            colorHeart: false,
            token: '',
            wishData: '',
            boolean: false,
            isLoading: true,
            productName: '',
            sizeArray: '',
            size: '',
            commission:'',
            price:'',
            careInstructions:'',
            fitType:'',
            type:'',
            productDetailArray:[]
        }
    }
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)

    }
    selectImageColor(value) {
        this.setState({
            coloCheck: value
        })
    }

    componentDidMount() {

        this.userDetail()
        console.log('jshjdhds')
        // const { id } = this.props.route.params;
        // console.log(id,'id------->')
        // this.setState({
        //     productId:id
        // })
        // console.log(this.state.id,'idjdijdid')
        this.getProductDetail()
        // console.log(this.state.productId,'product')
    }
    async userDetail() {
        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        this.setState({
            token: userS
        }, () => { this.state.token, 'token2--->' })
        console.log(this.state.token, 'oojojtkt')
        //    {
        //        this.state.token?
        this.wishlist()
        //        :
        //         alert('Please Login/Register')
        //    }
        //    this.wishlist()
    }

    async getProductDetail() {
        let body = {
            // subCategoryName: "625d5d0c518dce904e8953af"
            _id: this.state.productId
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
                            multipleImages: data.productData.multipleImages,
                            productName: data.productData.productName,
                            price: data.productData.price,
                            commission:data.productData.commission,
                            productIId: data.productData._id,
                            sizeArray: data.productData.size,
                            careInstructions:"",
                            fitType:"",
                            type:"",
                            productDetailArray:data.productData.productDetails
                        })
                        console.log(data.productData._id, 'producttttss---')
                        console.log(data.productData.productName, 'producttttssName---')
                        console.log(data.productData.productDetails, 'DETAILSs---')
                        // console.log(data.products[0].images, 'producttttss')
                        // console.log(data.products[0].productName, 'producttttss')
                        // this.setState({
                        //     product: data.products,
                        //     productImages: data.products[0].images,
                        //     productPrice: data.products[0].productPrice,
                        //     productName: data.products[0].productName
                        // })
                        // console.log(this.state.product, 'prppopoopo')


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

    async wishlist() {
        try {
            let response = await fetch(

                APP_URLS.wishList,
                {
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': this.state.token ? "Bearer" + " " + this.state.token.split('"').join('') : null,
                    },
                    // body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {

                    console.log('wishdaata+++', JSON.stringify(data))
                    // console.log('wsiiiiss', JSON.stringify(data.wishlistData.wishList[0]))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        data.wishlistData.wishList.length !== 0 ? data.wishlistData.wishList.forEach(element => {
                            if (element._id == this.state.productIId && this.state.productIId) {
                                this.setState({
                                    boolean: true
                                })
                            } else {
                                this.setState({
                                    boolean: false
                                })
                            }
                        }) : this.setState({
                            boolean: false
                        })

                        this.setState({
                            wishData: data.wishlistData.wishList[0],
                            isLoading: false
                            // wishListAddedId:data..wishlistData.wishList._id

                        })
                        // console.log(this.state.wishData, 'prppopoopo')
                        // console.log(this.state.wishData[0]._id, 'IDsss')


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

    async removeFromWishList(value) {
        console.log('bhadwaa')
        let body = {
            wishlist: value
        }


        try {
            let response = await fetch(

                APP_URLS.removeFromWishlist,
                {
                    'method': 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': this.state.token ? "Bearer" + " " + this.state.token.split('"').join('') : null,
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
                            colorHeart: false,
                            isLoading: false
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
    async addWishList(value) {

        let body = {
            wishlist: value
        }
        console.log(body, 'ndjsdhsjsd')


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

                        this.setState({
                            colorHeart: true,
                            isLoading: false
                            // productID:data.product._id,
                            // productAddded:[...this.state.productAddded,data.product],

                            //   result:array
                        })
                        alert('Added to WishList')
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
    showMessage() {
        alert('Please Login/Register Yourself')
    }

   addTocart(value){
       if(this.state.size == ''){
        alert('Please Select Size')
       }
       
        else{
            if(this.state.token == null){
                alert('Please first login or register ')
              }
              else{
            // if(this.state.token == '')
        //    this.addCartValidation(value)
           this.addCart(value)
              }
        }
       

   }

  

    async addCart(value) {
        console.log('kkautata')
            let body = {
                productId: value,
                quantity: 1,
                size: this.state.size 
            }
        // }
        console.log('nsajsjn', body)
        try {
            let response = await fetch(

                APP_URLS.addToBag,
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

                response.json().then(data => {
                    console.log(data,'opopop')


                    if (data.status == 1) {
                        console.log(data.productDetails, 'details')
                        alert(data.message)
                    }
                    else if (data.status == 0) {
                        // console.log(data.productDetails, 'details')
                        alert(data.message)
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

    setSize(sizePick) {
        this.setState({
            size: sizePick
        }, () => { console.log(this.state.size, 'SIZEPICK') })
    }

    render() {
        console.log(this.state.boolean, 'boolen')

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 0.08, flexDirection: 'row', justifyContent: 'space-between', top: 10 }}>
                    <View style={{ flexDirection: 'row', left: 0 }}>
                        <TouchableOpacity style={{ width: 40, height: 30 }} onPress={() => this.props.navigation.goBack()}>
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 15, fontFamily: APP_FONTS.bold }}>TOPWEAR</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={APP_IMAGES.search} style={{ height: 20, width: 20, right: 30 }} resizeMode="contain" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('wishList', { typeProductDetail: 'productDetail' })}>
                            {/* <TouchableOpacity onPress={()=>console.log('lasaaan')}> */}
                            <Image source={APP_IMAGES.heart} style={{ height: 20, width: 20, right: 20 }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToBag')}>
                            <Image source={APP_IMAGES.cart} style={{ height: 20, width: 20, right: 10 }} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>


                </View>

                {/* <ScrollView style={{ flex: 1, paddingBottom: 10 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}> */}
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1, paddingBottom: 10 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <View style={{ top: 0 }}>
                            <SliderBox
                                // images={this.state.images}
                                images={this.state.multipleImages}
                                sliderBoxHeight={500}
                                padding={0}

                                // width='100%'
                                pagingEnabled={Platform.OS == 'android' ? true : null}
                                // dotColor='#FD873B'
                                dotColor='red'

                            />
                        </View>
                        <View style={{ height: heightPercentageToDP('15%') }}>
                            {/* <Text style={{ fontSize: 15, color: 'black', top: 4, fontFamily: APP_FONTS.semi_bold,right:Platform.OS == 'ios'?6:7}}>Chic Fuchsia Pink Power Shoulder Top</Text> */}
                            <Text style={{ fontSize: 15, color: 'black', top: 20, fontFamily: APP_FONTS.semi_bold, right: Platform.OS == 'ios' ? 10 : 12, marginLeft: 19 }}>{this.state.productName}</Text>
                            <Text style={{ fontSize: 15, color: 'black', fontFamily: APP_FONTS.bold, top: 30, right: Platform.OS == 'ios' ? 6 : 6, marginLeft: 16 }}>{this.state.price} FCFA</Text>
                            <View style={{ flexDirection: 'row', padding: 10, top: 10, padding: 20 }}>
                                {/* <View style={{ flexDirection: 'row',  borderWidth: 1, borderRadius: 20, borderEndWidth: 0, top: 0,right:20,  padding:5 }}> */}
                                <View style={{ flexDirection: 'row', padding: 4, right: Platform.OS == 'ios' ? 18 : 27 }}>
                                    <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14, left: 12, top: 10 }} />
                                    {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold, color: 'black', left: 12, top: 10 }}> Commission: </Text> */}
                                    <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold, color: '#9d9d9d', left: 10, top: 10 }}>  {this.state.commission}</Text>
                                    <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold, color: '#9d9d9d', left: 10, top: 10 }}> FCFA</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderWidth: 3, height: heightPercentageToDP('10%'), borderColor: '#f0f0f0', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontFamily: APP_FONTS.bold, color: 'black', right: Platform.OS == 'ios' ? 4 : 4, left: 7, top: 10 }}>Buy In Bulk</Text>
                            <Image source={APP_IMAGES.rightArrow} style={{ height: 10, width: 10, top: 12, right: 12 }} />
                            {/* <Text>$20.00</Text> */}
                        </View>
                        <View style={{ padding: 0, height: heightPercentageToDP('18%') }}>

                            <Text style={{ fontSize: 16, fontFamily: APP_FONTS.bold, color: 'black', left: 12, top: 10 }}>Select Size</Text>

                            <View style={{ padding: 0, flex: 0.40, flexDirection: 'row', bottom: 0, top: 25, left: 12 }}>
                                <FlatList
                                    horizontal
                                    data={this.state.sizeArray}
                                    style={{ flex: 1, top: 0 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index, separator }) => {
                                        return (
                                            <View style={{ flex: 1 ,width:widthPercentageToDP('15%')}}>

                                                <TouchableOpacity onPress={() => { this.setSize(item) }}>
                                                    {/* <View style={{ borderColor: '#fe6b8e', borderWidth: 1, borderRadius: 18, backgroundColor: '#ffedf1', height: 36, width: 46, justifyContent: 'center' }}> */}
                                                    <View style={{ borderColor: item == this.state.size ? '#fe6b8e' : '#f9f9f9', borderWidth: 1, borderRadius: 18, backgroundColor: item == this.state.size ? '#ffedf1' : '#f9f9f9', height: 36, width: 46, justifyContent: 'center' }}>
                                                        {/* <Text style={{ color: '#fe6b8e', fontSize: 12, fontFamily: APP_FONTS.bold, alignSelf: 'center' }}> {item} </Text> */}
                                                        <Text style={{ color: item == this.state.size ? '#fe6b8e' : '#777777', fontSize: 12, fontFamily: APP_FONTS.bold, alignSelf: 'center' }}> {item} </Text>
                                                    </View>
                                                </TouchableOpacity>

                                                {/* <View style={{ borderWidth: 1, borderColor: '#f0f0f0', bottom: 2, top: 50 }} /> */}
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            {/* <Text>$20.00</Text> */}
                        </View>

                        <View style={{ padding: 0, borderWidth: 3, flex: 0.0, borderColor: '#f0f0f0', height: heightPercentageToDP('25%') }}>
                            <Text style={{ fontSize: 16, fontFamily: APP_FONTS.bold, color: 'black', right: 2, left: 10, top: 10 }}>Select Color</Text>
                            <View style={{ flexDirection: 'row', padding: 10, right: 0, left: 2, left: 15, top: 10 }}>
                                <TouchableOpacity onPress={() => this.selectImageColor(true)}>
                                    <Image source={APP_IMAGES.productImage} style={{ height: 100, width: 80, borderRadius: 10, borderColor: this.state.colorCheck == true ? null : null, right: 15 }} />
                                </TouchableOpacity>
                                <Image source={APP_IMAGES.productImage} style={{ height: 100, width: 80, borderRadius: 10, right: 5 }} />


                            </View>
                        </View>
                        <View style={{ padding: 0, flexDirection: 'row', justifyContent: 'space-between', flex: 0.12 }}>
                            <Text style={{ fontSize: 16, fontFamily: APP_FONTS.bold, color: 'black', top: 6, left: 14 }}>Product Details</Text>
                            <Text style={{ color: '#fe668a', fontSize: 12, fontFamily: APP_FONTS.bold, right: 10, top: 5 }}>Copy</Text>
                        </View>
                        <View style={{borderWidth:0.7,borderColor: '#f0f0f0',top:12}} />
                        <View style={{flex:1,top:2}}>
                            <FlatList 
                            //   horizontal
                              data={this.state.productDetailArray}
                              style={{ flex: 1 ,paddingVertical:0,top:8,paddingBottom:6,right:2}}
                              keyExtractor={item => item.id}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({ item, index, separator }) => {
                                console.log(item,'ijdihdsidshisdhsi')
                                return (

                                    <View style={{
                                         flex:1,paddingHorizontal:16,paddingVertical:2
                                    }}>
                                        <View style={{}}>
                                            <Text style={{fontSize:12,color:'#919191',fontFamily:APP_FONTS.bold}} >{item.title}:</Text>  
                                            <Text style={{fontSize:12,color:'black',fontFamily:APP_FONTS.semi_bold}} >{item.description}</Text>  
                                        </View>
                                         
                                    </View>
                                )
                            }}

                            />
                        </View>
                        {/* <View style={{ padding: 0, top: 20, left: 14, height: heightPercentageToDP('15%') }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9a9a9a', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>Care Instructions: </Text>
                                <Text style={{ color: 'black', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>
                                     {this.state.careInstructions}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9a9a9a', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>Fit Type: </Text>
                                <Text style={{ color: 'black', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>{this.state.fitType}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#9a9a9a', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>Type:</Text>
                                <Text style={{ color: 'black', fontFamily: APP_FONTS.semi_bold, fontSize: 12 }}>{this.state.type}</Text>
                            </View>
                        </View> */}
                        <View style={{ padding: 0, borderColor: '#f0f0f0', borderWidth: 3, flex: 0.25 ,top:2}}>
                            <Text style={{ color: 'black', fontFamily: APP_FONTS.bold, fontSize: 16, top: 10, left: 12 }}>Similar Product</Text>
                            <View style={{ flex: 1, top: 20, left: 12 }}>

                                <FlatList
                                    horizontal
                                    data={ITEMS}
                                    style={{ flex: 1 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index, separator }) => {
                                        return (

                                            <View style={{
                                                marginLeft: 0, justifyContent: 'center', borderRadius: 6, alignItems: 'center', height: 284, width: 160, shadowColor: '#fffff',

                                                //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                                shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 1 : 0 },
                                                // shadowOpacity: 0.5,
                                                // shadowOpacity: 14,
                                                // shadowRadius: 0,
                                                // elevation: 0,
                                                bottom: 10,
                                                shadowOpacity: 0.5,
                                                shadowRadius: Platform.OS == 'ios' ? 2 : 0,
                                                elevation: Platform.OS == 'ios' ? 2 : 0,
                                            }}>
                                                <View style={{ height: 250, width: '98%', top: 46 }}>
                                                    <Image source={item.category} style={{ width: '100%', height: 210 }} resizeMode='stretch' />
                                                </View>
                                                <View style={{
                                                    backgroundColor: 'white', bottom: 46, padding: 5, width: '98%', height: 90, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, shadowOffset: { width: 0, height: 0 },
                                                    shadowOpacity: 0.5,
                                                    shadowRadius: 0,
                                                    elevation: 1,
                                                }}>
                                                    <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Women Black and</Text>
                                                    <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Pink Wrap Dress </Text>
                                                    <Text style={{ color: '#F43297', fontSize: 13, fontFamily: APP_FONTS.bold }}>20.00 FCFA</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} />
                                                        <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>  2 FCFA </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ borderWidth: 0, borderColor: '#f0f0f0', flex: 0.20, left: 12, top: 10 }}>
                            <Text style={{ color: 'black', fontSize: 16, padding: 0, fontFamily: APP_FONTS.bold }}>Catlog Review</Text>

                        </View>
                        <View style={{ top: 20, flex: 0.20, left: 12 }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: APP_FONTS.semi_bold }}>Overall Rating</Text>
                            <Text style={{ color: 'black', fontSize: 26, fontFamily: APP_FONTS.bold }}>4.4</Text>


                        </View>
                        <View style={{ height: heightPercentageToDP('5%'), top: 30 }}>
                            <Rating
                                // showRating
                                type='custom'
                                onFinishRating={this.ratingCompleted}
                                ratingColor='##d2d2d2'
                                tintColor='#34c759'
                                ratingBackgroundColor='#fffff'
                                imageSize={20}
                                style={{ alignSelf: 'flex-start', left: 12, top: 0 }}
                            />
                        </View>
                        <View style={{ padding: 0, flex: 1, top: 20 }}>
                            <Text style={{ color: 'black', fontSize: 12, fontFamily: APP_FONTS.bold, left: 10 }}>Customer Reviews</Text>
                            <FlatList
                                data={REVIEWS}
                                style={{ top: 8, flex: 1, left: 10,paddingBottom:20 }}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index, separator }) => {
                                    return (
                                        <View style={{}}>
                                            <View style={{ flexDirection: 'row',top:5 }}>
                                                <Image source={item.profileImage} style={{ height: 24, width: 24 }} />
                                                <Text style={{ color: 'black', fontSize: 12, fontFamily: APP_FONTS.bold, left: 10 }}>  {item.profileName}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', top: 16 }}>
                                                <View style={{ borderColor: '#7cc7c1', borderWidth: 1, borderRadius: 14, backgroundColor: '#e4f7f5', left: 5 }}>
                                                    <Text style={{ color: 'black', fontSize: 12 }}>  {item.rating} </Text>
                                                </View>
                                                <Text style={{ color: 'black', fontSize: 12, left: 15, fontFamily: APP_FONTS.semi_bold }}>{item.remark}</Text>
                                                <Text style={{ color: '#9d9d9d', fontSize: 10, fontFamily: APP_FONTS.bold, left: 20, top: 1.5 }}> Posted on {item.date}</Text>
                                            </View>
                                            <View style={{}}>
                                                <View style={{ flexDirection: 'row', top: 20 }}>
                                                    <Image source={item.imageUpload} style={{ height: 40, width: 40 }} />
                                                    <Image source={item.imageUpload} style={{ height: 40, width: 40, left: 10 }} />
                                                    <Image source={item.imageUpload} style={{ height: 40, width: 40, left: 20 }} />
                                                </View>
                                                <Text style={{ color: 'black', fontSize: 12, fontFamily: APP_FONTS.semi_bold, top: 30, paddingBottom: 40 }}>{item.comment}</Text>
                                            </View>
                                            <View style={{ borderWidth: 1, borderColor: '#f0f0f0', bottom: 2, top: 0 }} />
                                        </View>


                                    )

                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
                {/* </ScrollView> */}
                <View style={{ flex: 0.10, top: 10 }}>
                    <View style={{ left: 30, flexDirection: 'row', top: 30 }}>
                        <Text style={{ fontSize: 10, color: 'black', right: 10, fontFamily: APP_FONTS.medium }}>Wishlist</Text>
                        <Text style={{ fontSize: 10, color: 'black', right: 5, fontFamily: APP_FONTS.medium }}>Share</Text>
                        <Text style={{ fontSize: 10, color: 'black', fontFamily: APP_FONTS.medium }}>Download</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.state.productId == null || this.state.token == null ? this.showMessage() : this.state.boolean == true ? this.removeFromWishList(this.state.productIId) : this.addWishList(this.state.productIId)} style={{ width: widthPercentageToDP('20%') }}>
                                {/* <TouchableOpacity onPress={()=>this.state.token == ''? this.showMessage():this.state.boolean == true ?this.removeFromWishList(this.state.productIId):this.addWishList(this.state.productIId)} style={{width:widthPercentageToDP('20%')}}> */}
                                <Image source={this.state.boolean == true ? APP_IMAGES.heartActive : APP_IMAGES.heart} style={{ height: 16, width: 16, left: 30 }} resizeMode="contain" />
                            </TouchableOpacity>
                            <Image source={APP_IMAGES.share} style={{ height: 16, width: 16, left: 0, tintColor: 'black' }} resizeMode="contain" />
                            <Image source={APP_IMAGES.downloadDark} style={{ height: 16, width: 16, left: 30 }} resizeMode="contain" />
                        </View>
                         
                        <TouchableOpacity onPress={() => { this.addTocart(this.state.productId) }}>
                            <View style={{ flexDirection: 'row', right: 20, width: 150, height: 45, backgroundColor: '#F43297', borderRadius: 8, bottom: 10 }}>
                                {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToBag')}> */}
                                <View style={{}}>
                                    <Image source={APP_IMAGES.cart} style={{ height: 20, width: 20, top: 12, left: 20, tintColor: 'white' }} resizeMode="contain" />
                                    <Text style={{ fontFamily: APP_FONTS.bold, color: 'white', alignSelf: 'center', left: 50, bottom: 8 }}>Add to Bag</Text>

                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ backgroundColor: 'black' }}>
                        <Text style={{ color: 'black' }}>Wishlist</Text>

                    </View>

                   
                </View>
                {this.state.isLoading ? <ShowLoader /> : null}
            </SafeAreaView>
        )
    }



}

export default productDetail;