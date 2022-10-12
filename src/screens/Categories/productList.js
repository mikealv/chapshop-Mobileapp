import React, { Component } from "react";
import { Text, View, FlatList, Image, ScrollView, TouchableOpacity, Platform, Modal, TouchableWithoutFeedback } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { APP_FONTS, APP_IMAGES, APP_URLS, CATEGORY_URLS } from "../../utils/Common";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FadingTransition } from "react-native-reanimated";
import ShowLoader from "../../utils/Loader";
import DeviceInfo from 'react-native-device-info';


const ITEMSFILTER = [
    {
        id: 1,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Category',
        options: [

            'Maxi Dresses'
            ,

            'Kurtis'

        ]
    },
    {
        id: 2,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Gender',
        options: [

            'Kurta'
            ,

            'Kurtis'

        ]
    },
    {
        id: 3,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Fabric',
        options: [

            'Maxi Dresses'
            ,

            'Kurtis'

        ]

    },
    {
        id: 4,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Color',
        options: [

            'Maxi Dresses'
            ,

            'Kurtis'

        ]
    },
    {
        id: 5,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Price',
        options: [

            'Saree'
            ,

            'Kurtis'

        ]
    },
    {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Discount'
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Rating'
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Size',
        options: [

            'Kurta'
            ,

            'Kurtis'

        ]
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Combo'
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Print '
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Styling '
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Neck '
    }, {
        id: 6,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Sleeve '
    }
]

const KUKI = [
    {
        id: 1,
        // category: require('../../../assets/images/product-img.png'),
        // name: "What's new"

    },
    {
        id: 2,
        // category: require('../../../assets/images/product-img.png'),
        // name: 'High to low'

    },
    {
        id: 3,
        // category: require('../../../assets/images/product-img.png'),
        // name: 'Popularity',
        name: 'popularity',

    },
    {
        id: 4,
        // category: require('../../../assets/images/product-img.png'),
        // name: 'Low to High'
        name: 'lowToHigh'
    },
    {
        id: 5,
        // category: require('../../../assets/images/product-img.png'),
        name: 'ratings'
    },
    // {
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Discount'
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Rating'
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Size'
    // },{
    // id: 6,
    // category: require('../../../assets/images/product-img.png'),
    //     name: 'Combo'
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Print '
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Styling '
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Neck '
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Sleeve '
    // }
]


const ProductList = [
    {
        _id: "625d5cdc518dce904e8953ab",
        // parentSubCategoryName: "Bottom wear",
        // childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        productName: "Women Black & Pink Wrap",
        image: require('../../../assets/images/product-img.png'),
        price: '$20.00',
        commission: '$2 Commission',
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        productName: "Women Black & Pink Wrap",
        image: require('../../../assets/images/product-img-two.png'),
        price: '$20.00',
        commission: '$2 Commission',
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        productName: "Women Black & Pink Wrap",
        image: require('../../../assets/images/product-img-three.png'),
        price: '$20.00',
        commission: '$2 Commission',
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        productName: "Women Black & Pink Wrap",
        image: require('../../../assets/images/product-img-four.png'),
        price: '$20.00',
        commission: '$2 Commission',
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        productName: "Women Black & Pink Wrap",
        image: require('../../../assets/images/product-img.png'),
        price: '$20.00',
        commission: '$2 Commission',
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        productName: "Women Black & Pink Wrap",
        image: require('../../../assets/images/product-img.png'),
        price: '$20.00',
        commission: '$2 Commission',
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },

]

const ITEMS = [
    {
        id: 1,
        // category: require('../../../assets/images/product-img.png'),
        // name: "What's new"
        name: "whatsNew"
    },
    {
        id: 2,
        // category: require('../../../assets/images/product-img.png'),
        // name: 'High to low'
        name: 'highToLow'
    },
    {
        id: 3,
        // category: require('../../../assets/images/product-img.png'),
        // name: 'Popularity',
        name: 'popularity',

    },
    {
        id: 4,
        // category: require('../../../assets/images/product-img.png'),
        // name: 'Low to High'
        name: 'lowToHigh'
    },
    {
        id: 5,
        // category: require('../../../assets/images/product-img.png'),
        name: 'ratings'
    },
    // {
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Discount'
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Rating'
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Size'
    // },{
    // id: 6,
    // category: require('../../../assets/images/product-img.png'),
    //     name: 'Combo'
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Print '
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Styling '
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Neck '
    // },{
    //     id: 6,
    //     // category: require('../../../assets/images/product-img.png'),
    //     name: 'Sleeve '
    // }
]


const dummyDynamic = [1, 2, 3]

class productList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mainCategory: '',
            isOpen: false,
            productImages: '',
            productPrice: '',
            productName: '',
            product: '',
            whatsNew: 'whatsNew',
            highToLow: 'highToLow',
            lowToHigh: 'lowToHigh',
            popularity: 'popularity',
            ratings: 'ratings',
            isFilterOpen: false,
            showFilterOptionsArray: [],
            selectedSortFilter: '',
            filterValue: '',
            null: '',
            // colorHeart:false,
            colorHeart: '',
            token: '',
            // productID: '',
            productAddded: [],
            result: '',
            wishData: '',
            filterData: '',
            isLoading: true,
            filterSetItem: [],
            colorTrue: false,
            subParameter: [],
            isSizeOpen: false,
            isTypeOpen: false,
            // filterSelectData:[],
            // fabric:"
            fabric: "",
            gender: "",
            colour: "",
            size: "",
            ratings: "",
            combo: "",
            category: "",
            printOrPatternType: "",
            price: "",
            discount: "",
            ghany: [],
            paramName: '',
            type: '',
            booleanColor: false,
            filterTopTypeData: '',
            filterTopSizeData: '',
            signTopFilter: '',
            arrowUp: false,
            deviceIOS: '',
            nineteenSEP: '',
            subparameterNAME: '',
            // types:this.props.route.params.type,
            productID: this.props.route.params.productID,
            categoryID: this.props.route.params.categoryID,


        }
    }


    componentDidMount() {
        console.log('lassan')
        console.log('lassan', this.state.productID)
        this.userDetail()
        this.getProduct()
        this.getFilters()
        this.getTopFilters()
        let showFilterOptionsArray = []
        // ITEMSFILTER.map((item, i) => {
        this.state.filterData && this.state.filterData.length > 0 &&
            this.state.filterData && this.state.filterData.map((itemxxx, i) => {
                //      x = this.state.filterData
                //         x.map((item, i) => {
                showFilterOptionsArray.push(false)
            })
        this.setState({ showFilterOptionsArray })
        console.log('kdjkadjakad')
        console.log(this.state.token, 'tokokok')
        DeviceInfo.getDeviceName().then((deviceName) => {
            // iOS: "Becca's iPhone 6"
            // Android: ?
            this.setState({
                deviceIOS: deviceName
            })
            console.log(deviceName, 'evicijcij')

            // Windows: ?
        });
        // this.wishlist()

        // this.productList()
        // this.subCategory()
    }

    async userDetail() {
        let userS = await AsyncStorage.getItem('@userToken')
        console.log(userS, 'userssss')
        this.setState({
            token: userS
        }, () => { this.state.token, 'token--->' })
        console.log(this.state.token, 'oojojtkt')
        // this.wishlist()




        //   this.wishlist()
        // await AsyncStorage.getItem('@user',JSON.stringify(user)).then(() => {
        //     console.log(user, 'fcmtokenLoginß')

        // })
    }

    async wishlist() {
        console.log('nsajsjn')
        try {
            let response = await fetch(

                APP_URLS.wishList,
                {
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + this.state.token.split('"').join(''),
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
                            wishData: data.wishlistData.wishList,

                        })

                        let temp = [...this.state.product]
                        // let Boolean = false
                        let arr = []

                        if (temp.length !== 0) {
                            temp.forEach(element => {
                                if (data.wishlistData.wishList.length !== 0) {
                                    data.wishlistData.wishList.forEach(item => {
                                        if (element._id == item._id) {
                                            element.wishStatus = true
                                            arr.push(element)
                                        } else {
                                            arr.push(element)
                                        }
                                    })
                                }
                                // else if(data.wi)



                            });
                        }
                        console.log(temp, "tesmp -----")
                        this.setState({
                            product: temp
                        })

                        console.log(this.state.wishData, 'WishDATA')

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

    async getFilters() {
        let body = {
            // subCategoryName: "625d5d0c518dce904e8953af"
            // subSubCategory: "62b3f2e38c8100b78afe22c3"
            subSubCategory: this.state.productID

        }
        console.log('dsdss', body)
        try {
            let response = await fetch(

                APP_URLS.getFilters,
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
                console.log('normal-dd---->')

                response.json().then(data => {

                    console.log('getFilter+++', JSON.stringify(data))

                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        if (data.data.parameterName == 'Type') {
                            this.setState({
                                fi
                            })
                        }

                        this.setState({
                            filterData: data.data
                            // product: data.products,
                            // result:data.prodcuts,
                            // productImages: data.products[0].images,
                            // productPrice: data.products[0].productPrice,
                            // productName: data.products[0].productName
                        })
                        console.log(this.state.product, 'prppopoopo')
                        {
                            this.state.token ? this.wishlist() : null
                        }
                        // this.wishlist()

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


    async getTopFilters() {
        let body = {
            // subCategoryName: "625d5d0c518dce904e8953af"
            // subSubCategory: "62b3f2e38c8100b78afe22c3"
            subSubCategory: this.state.productID
        }
        console.log('dsdss', body)
        try {
            let response = await fetch(

                APP_URLS.getTopFilters,
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

                response.json().then(data => {

                    console.log('getTopFilter+++', JSON.stringify(data))

                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        // if(data.data[0].parameterName == "Type"){
                        // console.log('xxxx', data.data[0].parameterName)
                        // console.log('xxxx', data.data)
                        // console.log('kdshksh',data.data[0].parameterName)

                        this.setState({
                            // filterTopTypeData: data.data[0].parameterName == "Type" ? data.data[0].subParameter : '',//19sep
                            // filterTopSizeData: data.data[3].parameterName == "size" ? data.data[3].subParameter : '',//19sep
                            nineteenSEP: data.data

                            // product: data.products,
                            // result:data.prodcuts,
                            // productImages: data.products[0].images,
                            // productPrice: data.products[0].productPrice,
                            // productName: data.products[0].productName
                        }, () => { console.log(this.state.filterTopTypeData, 'OIOIOIOI', this.state.filterTopSizeData, '19SEPP', this.state.nineteenSEP) })
                        // }   
                        // if(data.data[0].parameterName == "size"){
                        //     console.log('plplpl',data.data[0].parameterName)
                        //     this.setState({
                        //         filterTopSizeData: data.data[0].subParameter
                        //         // product: data.products,
                        //         // result:data.prodcuts,
                        //         // productImages: data.products[0].images,
                        //         // productPrice: data.products[0].productPrice,
                        //         // productName: data.products[0].productName
                        // },()=>{console.log(this.state.filterTopSizeData,'O2O2O2O2')})
                        // }
                        //    }

                        // this.setState({
                        //     filterTopData: data.data
                        //     // product: data.products,
                        //     // result:data.prodcuts,
                        //     // productImages: data.products[0].images,
                        //     // productPrice: data.products[0].productPrice,
                        //     // productName: data.products[0].productName
                        // },()=>{console.log(this.state.filterTopData,'OIOIOIOI')})
                        // console.log(this.state.filterT, 'prppopoopo')
                        {
                            this.state.token ? this.wishlist() : null
                        }
                        // this.wishlist()

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


    async getProduct() {
        let body = {
            // subCategoryName: "625d5d0c518dce904e8953af"
            // subSubCategoryName: "62b3f2e38c8100b78afe22c3",
            subSubCategoryName: this.state.productID,

        }
        console.log('shomoshahaah', body)
        try {
            let response = await fetch(

                APP_URLS.getProduct,
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

                    console.log('product+++', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {

                        if (data.products == '') {
                            this.setState({
                                isLoading: false
                            })
                            alert("No Product is added")
                        }
                        // console.log(data.products[0], 'producttttss---')
                        // console.log(data.products[0].images, 'producttttss')
                        // console.log(data.products[0].productName, 'producttttss')
                        this.setState({
                            product: data.products,
                            // result:data.prodcuts,
                            // productImages: data.products[0].images.length>0?data.products[0].images:'',
                            productImages: data.products[0].images,
                            productPrice: data.products[0].productPrice,
                            productName: data.products[0].productName,
                            isLoading: false
                        })
                        console.log(this.state.product, 'prppopoopo')
                        {
                            this.state.token ? this.wishlist() : null
                        }
                        // this.wishlist()



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
                            // alert("No Product is added")
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

    openView(value) {
        console.log('valueeeuue', value)
        this.setState({
            isOpen: !value,
            // isSizeOpen: value,
            // isTypeOpen:value/

        })
    }
    openTypeView(value, name) {
        this.setState({
            isTypeOpen: !value,
            paramName: name
            // isOpen:value,
            // isSizeOpen:value
        })
    }

    openSizeView(value, name, item) {
        console.log(item, 'IIID')
        this.setState({
            isSizeOpen: !value,
            paramName: name,
            subparameterNAME: item.subParameter
            // isOpen: value,
            // isTypeOpen: value
        })
    }

    async sorting(value) {
        console.log('valuuee2', value)
        let whatsNew
        let highToLow
        let lowToHigh
        let popularity
        let ratings
        let body = {
            whatsNew: this.state.whatsNew == value ? true : false,
            highToLow: this.state.highToLow == value ? true : false,
            lowToHigh: this.state.lowToHigh == value ? true : false,
            popularity: this.state.popularity == value ? true : false,
            ratings: this.state.ratings == value ? true : false,
            // subSubCategoryName: "628e192e396ef1cb89ea4f25"
            // subSubCategoryName: "62b3f2e38c8100b78afe22c3" --27SEP
            subSubCategoryName: this.state.productID
        }
        console.log(body, 'bodyyy---SORT')
        try {
            let response = await fetch(

                APP_URLS.productWithSorts,
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

                    console.log('product00000', JSON.stringify(data))
                    if (data.status === 1) {
                        // console.log(data.products[0], 'producttttss---')
                        console.log(data.data, 'producttttss-SOOORt--')
                        // console.log(data.data[0].images, 'producttttss')
                        // console.log(data.products[0].productName, 'producttttss')
                        this.setState({
                            product: data.data,
                            productImages: data.data[0].images,
                            productPrice: data.data[0].productPrice,
                            productName: data.data[0].productName
                        })
                        console.log(this.state.product, 'prppopoopo')


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

    setFilterModalVisible() {
        this.setState({
            isFilterOpen: true
        })
    }

    showFilterOptions(index, Name) {
        this.setState({
            arrowUp: true
        })
        console.log(Name, '------------')
        let showFilterOptionsArray = this.state.showFilterOptionsArray
        showFilterOptionsArray[index] = !showFilterOptionsArray[index]
        this.setState({ showFilterOptionsArray })
        this.setState({
            paramName: Name
        }, () => { console.log(this.state.paramName, 'paramNAMME') })
        // console.log(this.state.paramName,'paramNAMME')

    }

    filterApplySet(value) {
        this.setState({
            filterSetItem: value,
            colorTrue: true
        })



    }

    async filterApply(item, sign) {
        console.log(item, 'valuee-->')
        this.setState({
            isFilterOpen: false,
            signTopFilter: sign

        }, () => { console.log(this.state.signTopFilter, 'poaoa', item) })

        let body = {
            // fabric: value.name == "Fabric" ? value.name.options[0] : "",
            fabric: this.state.fabric,
            // fabric: this.state.fabri,
            type: "TypesTopFilter" == this.state.signTopFilter ? item : this.state.type,
            // type: this.state.type,
            gender: "",
            // gender: this.state.gender,
            colour: this.state.colour,
            // colour:"Red",
            // size:this.state.size,
            size: "TypeofSizeFilter" == this.state.signTopFilter ? item : this.state.size,
            // catgeory: "",//categoryID
            // catgeory: this.state.productID,//categoryID
            // category:"631ee5f61a7caa52300ea911",//categoryID
            category:this.state.categoryID,//categoryID
            // size: this.state.size,
            ratings: "",
            combo: "",
            printOrPatternType: "",
            price: "",
            discount: "",


            //  gender: value == "Gender" ? value.options[0] : "",
            // gender: value == "Gender" ? value.options[0] : "",
            // colour: value == "Color" ? value.options[0] : "",
            // size: value == "" ? "" : "",
            // ratings: value == "" ? "" : "",
            // combo: value == "" ? "" : "",
            // printOrPatternType: value == "" ? "" : "",
            // price: value == "Price" ? value.options[0] : "",
            // discount: value == "" ? "" : "",
            // category: value == "" ? "" : ""

        }
        console.log(body, 'bodyyyFilter')
        try {
            let response = await fetch(

                APP_URLS.productWithFilters,
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

                    console.log('productfilter', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        // console.log(data.products[0], 'producttttss---')
                        // console.log(data.products[0].images, 'producttttss')
                        // console.log(data.products[0].productName, 'producttttss')
                        this.setState({
                            product: data.data.length > 0 ? data.data : [],
                            productImages: data.data.length > 0 ? data.data[0].images : '',
                            // productPrice: data.data[0].productPrice,
                            productPrice: data.data.length > 0 ? data.data[0].price : '',
                            productName: data.data.length > 0 ? data.data[0].productName : ''
                        })
                        console.log(this.state.product, 'prppopoopo')

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
                        'Authorization': "Bearer" + " " + this.state.token.split('"').join(''),
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
                            colorHeart: false
                        })
                        alert('Removed from WishList')
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

    handleAdd(id) {
        let arr = [...this.state.product];


        let temp = [];

        for (let i of arr) {
            if (i._id == id) {
                if (i.wishStatus && i.wishStatus) {
                    i.wishStatus = false;
                    this.removeFromWishList(id)
                } else {
                    i.wishStatus = true;
                    this.addWishList(id)
                }

                temp.push(i);
            } else {
                temp.push(i);
            }
        }

        console.log(temp, "temp");
        this.setState({
            product: temp
        })
    };


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

    handleFilter(name, subparamName) {


        this.setState({
            fabric: name == "Color" ? subparamName : "",
            gender: name == "Gender" ? subparamName : "",
            colour: name == "Color" ? subparamName : "",
            size: name == "" ? "" : "",
            ratings: name == "" ? "" : "",
            combo: name == "" ? "" : "",
            printOrPatternType: name == "" ? "" : "",
            price: name == "Price" ? subparamName : "",
            discount: name == "" ? "" : "",
            category: name == "Category" ? "" : ""
        })


    }

    showTokenMessage() {
        alert('Please Login/Register yourself')
    }

    clearFilter() {
        this.setState({
            filterSetItem: [],
            colorTrue: false,
            isFilterOpen: false,
            fabric: '',
            type: '',
            gender: '',
            colour: '',
            size: '',
        })
        // this.filterApply()
        this.getProduct()
    }

    setyy(value) {

        console.log(value, 'popa')
        console.log(this.state.paramName, 'popaPARA', value)
        // console.log(sign, 'SIGN')

        // if('Type' == this.state.paramName){
        //     this.setState({
        //     type:value,
        //     },()=>{ console.log(this.state.type,'typepepeiepi')})


        // }

        this.setState({
            fabric: this.state.paramName == 'Fabric' ? value : this.state.fabric,
            type: 'Type' == this.state.paramName ? value : this.state.type,
            colour: 'color' == this.state.paramName ? value : this.state.colour,
            gender: 'gender' == this.state.paramName ? value : this.state.gender,
            size: 'size' == this.state.paramName ? value : this.state.size,
            Category: 'Category' == this.state.paramName ? value : this.state.category,
            // ratings:'Type'== this.state.paramName ?value:this.state.type,
            price: 'Price' == this.state.paramName ? value : this.state.price,
            // fabric:this.state.paramName == 'fabric'?value:''
            ghany: value,
            booleanColor: true,
        }, () => { console.log(this.state.type, 'valueeeeeS', this.state.fabric) })

        //  if(this.state.signTopFilter == 'TypesTopFilter'){
        //      console.log('BAD')
        //      this.filterApply()
        //  }
        // console.log(this.state.ghany,'ghannyy')
        // console.log(this.state.fabric,'ghannyy')
        // console.log(this.state.type,'ghannyy')

    }

    // paramName(name){
    //     console.log('popa2',name)
    //     this.setState({
    //         paramName:name
    //     })
    //     console.log(this.state.paramName,'ghannyy')

    // }


    render() {
        console.log(this.state.product, 'resultttt')
        // console.log(this.state.filterData && this.state.filterData, 'filterResult')

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 10 }}>
                    <View style={{ flexDirection: 'row', left: 0 }}>
                        <TouchableOpacity style={{ width: 40, height: 30 }} onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                            <View>
                                <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                                    resizeMode="contain"
                                    source={APP_IMAGES.arrowLeft} />

                            </View>
                        </TouchableOpacity>
                        <Text style={{ left: 20, fontFamily: APP_FONTS.bold }}>TOPWEAR</Text>
                    </View>
                    {/* <View> */}
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={APP_IMAGES.search} style={{ height: 20, width: 20, right: 30 }} resizeMode="contain" />
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('wishList', { type: 'productList' })}>
                            <Image source={APP_IMAGES.heart} style={{ height: 20, width: 20, right: 20 }} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddToBag')}>
                            <Image source={APP_IMAGES.cart} style={{ height: 20, width: 20, right: 10 }} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{
                    top: 20, flexDirection: 'row', height: 55, justifyContent: 'space-around', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: Platform.OS == 'ios' ? 0 : 0.8,
                    shadowRadius: 0,
                    elevation: 1,
                    // borderColor:'red',
                    // borderWidth:1,
                    // flex:1
                }}>

                    {/* <View style={{ flexDirection: 'row', right: 10, width: wp('17%') }}> 19sep */}
                    {/* <TouchableWithoutFeedback style={{ flexDirection: 'row' }} onPress={() => this.openView(this.state.isOpen)}> */}
                    {/* <TouchableOpacity style={{ flexDirection: 'row', left: 12, width: wp('17%') }} onPress={() => this.openView(this.state.isOpen)}>
                            <Text style={{ color: "#F43297", fontSize: 14, fontFamily: APP_FONTS.semi_bold, top: 5 }}>Sort</Text>
                            <Image source={APP_IMAGES.arrowDown} style={{ height: 12, width: 12, left: 7, top: 10 }} resizeMode="contain" />
                        </TouchableOpacity> 19sep */}
                    {/* </TouchableWithoutFeedback> */}
                    {/* </View> */}
                    {/* {dummyDynamic.map((item => {( */}
                    {this.state.nineteenSEP.length != 0 && this.state.nineteenSEP.map((item, index) => (
                        //    retu


                        <View style={{ flexDirection: 'row', width: wp('17%') }}>

                            <TouchableOpacity style={{ flexDirection: 'row', left: 12, width: wp('17%') }} onPress={() => this.openSizeView(this.state.isSizeOpen, 'size', item)}>
                                {/* <Text style={{ color: "#F43297", fontFamily: APP_FONTS.semi_bold, top: 5 }}>Size</Text> 19SEP */}
                                <Text style={{ color: "#F43297", fontFamily: APP_FONTS.semi_bold, top: 5 }}>{item.parameterName}</Text>
                                <Image source={APP_IMAGES.arrowDown} style={{ height: 12, width: 12, top: 10, left: 7 }} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                    ))}
                    {/* <View style={{ flexDirection: 'row', width: wp('17%') }}>
                        <TouchableOpacity style={{ flexDirection: 'row', left: 12, width: wp('17%') }} onPress={() => this.openTypeView(this.state.isTypeOpen, 'Type')}>
                            <Text style={{ color: "#F43297", fontFamily: APP_FONTS.semi_bold, top: 5 }}>Type</Text>
                            <Image source={APP_IMAGES.arrowDown} style={{ height: 12, width: 12, top: 10, left: 7 }} resizeMode="contain" />
                        </TouchableOpacity> */}
                    {/* </View> 19sep*  */}
                    {/* <View style={{borderColor:'black',borderWidth:1}} /> */}
                    <View style={{ flexDirection: 'row', left: 10, width: wp('17%') }}>
                        <View style={{ borderColor: '#ececec', borderWidth: 1, height: 25, top: 4, right: 10 }} />
                        {/* <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}> */}
                        <TouchableOpacity onPress={() => {
                            this.setState({
                                isFilterOpen: true
                            })
                        }}>
                            <Text style={{ color: "#F43297", fontFamily: APP_FONTS.semi_bold, top: 5 }}>Filter</Text>
                        </TouchableOpacity>
                        <Image source={APP_IMAGES.filter} style={{ height: 12, width: 12, top: 8, left: 5 }} resizeMode="contain" />

                    </View>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    this.setState({
                        isOpen: false,
                        isSizeOpen: false,
                        isTypeOpen: false
                    })
                }}>
                    <View style={{ flex: 1, top: 0, backgroundColor: 'white' }}>
                        {/* {

                             this.state.isOpen == true && this.state.isSizeOpen == false && this.state.isTypeOpen == false ?



                                <TouchableWithoutFeedback onPress={() => {
                                    this.setState({
                                        // isOpen: false
                                        isOpen: false,
                                        // isSizeOpen: false,
                                        // isTypeOpen: false
                                    })
                                }}>
                                    <View style={{ backgroundColor: 'white', height: 280, top: 0, }}>
                                        <View style={{ height: 250, padding: 10 }}>

                                            <FlatList
                                                // horizontal
                                                data={ITEMS}
                                                style={{ flex: 1 }}
                                                keyExtractor={item => item.id}
                                                showsVerticalScrollIndicator={false}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item, index, separator }) => {
                                                    return (

                                                        <View style={{ padding: 15 }}>

                                                            <View style={{ backgroundColor: 'white', bottom: 0 }}>
                                                                <TouchableOpacity onPress={() => { this.sorting(item.name) }
                                                                } >
                                                                    <Text style={{ fontSize: 12, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item.name}</Text>
                                                                </TouchableOpacity>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                        {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                        {/* </View>
                                                            </View>
                                                            <View style={{ borderBottomWidth: 1, top: 15, width: '100%', borderColor: '#ececec', right: 0 }} />

                                                        </View>

                                                    )
                                                }}
                                            />

                                        </View>

                                    </View>
                                </TouchableWithoutFeedback> */}

                        {/* :

                                <View style={{ backgroundColor: 'red' }}>
                                </View>
                        } */}

                        {

                            //  this.state.isSizeOpen == true?
                            this.state.isSizeOpen == true && this.state.isOpen == false && this.state.isTypeOpen == false ?


                                <TouchableWithoutFeedback onPress={() => {
                                    this.setState({
                                        isSizeOpen: false,
                                        // isSizeOpen: false,
                                        // isTypeOpen: false
                                    })
                                }}>
                                    <View style={{ backgroundColor: 'white', height: 280, top: 0, }}>
                                        <View style={{ height: 250, padding: 10 }}>
                                            <FlatList
                                                // horizontal
                                                // data={this.state.filterTopSizeData}
                                                data={this.state.subparameterNAME}
                                                // data={this.state.filterTopSizeData}//19sep
                                                style={{ flex: 1 }}
                                                keyExtractor={item => item.id}
                                                showsVerticalScrollIndicator={false}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item, index, separator }) => {
                                                    console.log(item, 'SUBUBUUU')
                                                    return (

                                                        <View style={{ padding: 15 }}>
                                                            { item.parameterName == 'highToLow'||'lowToHigh'||'popularity'||'rating'? 

                                                            <View style={{ backgroundColor: 'white', bottom: 0 }}>

                                                                {/* <View> */}
                                                                 <TouchableOpacity onPress={() => { this.sorting(item) }}>

                                                                 <Text style={{ fontSize: 12, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item}</Text>
                                                             </TouchableOpacity>
                                                             {/* </View> */}
                                                             <View style={{ flexDirection: 'row' }}>
                                                                 {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                                                                 {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                                                             </View>

                                                               
                                                                {/* // } */}
                                                            </View>
                                                              :
                                                              <View style={{ backgroundColor: 'white', bottom: 0 }}>

                                                              <TouchableOpacity onPress={() => { this.filterApply(item, 'TypeofSizeFilter') }}>

                                                                  <Text style={{ fontSize: 12, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item}</Text>
                                                              </TouchableOpacity>
                                                              <View style={{ flexDirection: 'row' }}>
                                                                  {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                                                                  {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                                                              </View>
                                                              </View>
                                                           }
                                                            <View style={{ borderBottomWidth: 1, top: 15, width: '100%', borderColor: '#ececec', right: 0 }} />

                                                        </View>

                                                    )
                                                }}
                                            />

                                        </View>

                                    </View>
                                </TouchableWithoutFeedback>

                                :

                                <View style={{ backgroundColor: 'red' }}>
                                </View>
                        }

                        {

                            // this.state.isTypeOpen == true ?
                            this.state.isTypeOpen == true && this.state.isSizeOpen == false && this.state.isOpen == false ?


                                <TouchableWithoutFeedback onPress={() => {
                                    this.setState({
                                        isTypeOpen: false,
                                        // isSizeOpen: false,
                                        // isTypeOpen: false
                                    })
                                }}>
                                    <View style={{ backgroundColor: 'white', height: 280, top: 0, }}>
                                        <View style={{ height: 250, padding: 10 }}>
                                            <FlatList
                                                // horizontal
                                                data={this.state.filterTopTypeData}
                                                style={{ flex: 1 }}
                                                keyExtractor={item => item.id}
                                                showsVerticalScrollIndicator={false}
                                                showsHorizontalScrollIndicator={false}
                                                renderItem={({ item, index, separator }) => {
                                                    console.log('itemmmmm',item)
                                                    return (

                                                        <View style={{ padding: 15 }}>

                                                            <View style={{ backgroundColor: 'white', bottom: 0 }}>
                                                                {/* <TouchableOpacity onPress={() => { this.setyy(item,'TypesTopFilter')} */}
                                                                <TouchableOpacity onPress={() => { this.filterApply(item, 'TypesTopFilter') }
                                                                } >
                                                                    <Text style={{ fontSize: 12, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item}</Text>
                                                                </TouchableOpacity>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                                                                    {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                                                                </View>
                                                            </View>
                                                            <View style={{ borderBottomWidth: 1, top: 15, width: '100%', borderColor: '#ececec', right: 0 }} />

                                                        </View>

                                                    )
                                                }}
                                            />

                                        </View>

                                    </View>
                                </TouchableWithoutFeedback>

                                :

                                <View style={{ backgroundColor: 'red' }}>
                                </View>
                        }

                        <Modal
                            //    animationType="slide"
                            animationIn="slideInLeft"
                            //    animationIn=""
                            animationOut="slideOutRight"
                            //    animationOut="slideOutLeft"
                            animationInTiming={500}
                            animationOutTiming={750}
                            transparent={true}
                            // style={{backgroundColor:'red'}}
                            visible={this.state.isFilterOpen}
                            onRequestClose={() => {
                                this.setFilterModalVisible(!this.state.isFilterOpen);
                            }}
                        >
                            <View style={{
                                backgroundColor: "white",
                                // backgroundColor: "red",
                                // borderWidth:1,
                                borderRadius: 0,
                                height: Platform.OS === "android" ? '100%' : this.state.deviceIOS == 'iPhone 12 mini' ? '95%' : 640,
                                width: '85%',
                                // width: '90%',

                                shadowColor: "#000",
                                // shadowColor: "red",
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                                left: 0,
                                top: Platform.OS == "android" ? 0 : 30,
                                alignSelf: 'flex-end',
                                overflow: 'hidden'
                                // borderColor:'black',
                                // borderWidth:1

                            }}>
                                <View style={{
                                    flexDirection: 'row', backgroundColor: 'white',
                                    bottom: 20, padding: 5, width: '100%', height: 90,
                                    borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
                                    // borderWidth:1,
                                    // shadowOpacity: 0.5,
                                    // shadowRadius: 0,
                                    // elevation: 1,
                                    shadowColor: '#000',
                                    // shadowColor: 'red',

                                    //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                    shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 24 },
                                    shadowOpacity: Platform.OS == 'ios' ? 0.1 : 0.9,
                                    shadowRadius: Platform.OS == 'ios' ? 10 : 10,
                                    elevation: Platform.OS == 'ios' ? 0 : 10,
                                }}>
                                    <TouchableOpacity onPress={() => this.setState({ isFilterOpen: false })} style={{ alignSelf: 'flex-end', marginRight: 22, bottom: 6 }}>
                                        <Image style={{ backgroundColor: 'white' }} resizeMode={'contain'} source={require('../../../assets/images/close-circle.png')} style={{ height: 12, width: 12, bottom: 20, left: 10 }} />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black', fontFamily: APP_FONTS.semi_bold, fontSize: 18, alignSelf: 'center', left: 60, top: 10 }}>FILTERS</Text>
                                </View>
                                <FlatList
                                    // horizontal
                                    // data={ITEMSFILTER}
                                    data={this.state.filterData}
                                    style={{ flex: 1 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({ item, index, separator }) => {
                                        console.log(item, 'iteemmmmmm')

                                        let showOptions = false
                                        if (this.state.showFilterOptionsArray[index]) showOptions = true

                                        return (

                                            // return (

                                            <View style={{ padding: 20 }}>

                                                <View style={{ backgroundColor: 'white', bottom: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                                        {/* <TouchableOpacity onPress={()=>{selectedFilter(item.name)}}> */}
                                                        {/* <Text style={{ fontSize: 14, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item.name}</Text> */}
                                                        <View>
                                                            <Text style={{ fontSize: 14, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item.parameterName}</Text>
                                                        </View>

                                                        <TouchableOpacity onPress={() => this.showFilterOptions(index, item.parameterName)} style={{ alignSelf: 'flex-end', width: 30, height: 20 }}>

                                                            {/* this.state.arrowUp == false ?  */}
                                                            <View style={{ right: 10 }}>
                                                                {
                                                                    this.state.paramName == item.parameterName ?
                                                                        <Image source={APP_IMAGES.arrowUp} style={{ height: 12, width: 12, left: 24 }} />
                                                                        :
                                                                        <Image source={APP_IMAGES.imageArrowDown} style={{ height: 12, width: 12, left: 20 }} />


                                                                }
                                                            </View>
                                                        </TouchableOpacity>

                                                        {/* :
                                                            <Image source={APP_IMAGES.arrowLeft} style={{ height: 10, width: 10, left: 6 }} />

                                                        }
                                                     </TouchableOpacity> */}
                                                        {/* </TouchableOpacity> */}
                                                    </View>
                                                    <View>

                                                    </View>
                                                    <View>

                                                    </View>

                                                </View>
                                                {showOptions &&
                                                    <View style={{ flexDirection: 'row', backgroundColor: 'white', flex: 1 }}>
                                                        {/* <TouchableOpacity onPress={()=>{this.filterApply(item.name[0].name)}}> */}
                                                        {/* <TouchableOpacity onPress={() => { this.filterApplySet(items) }}> */}
                                                        {/* <TouchableOpacity onPress={() => { this.filterApplySet(items) }}> */}
                                                        {console.log(item.subParameter, 'SUBUBUBU')}
                                                        <FlatList data={item.subParameter}
                                                            numColumns={2}
                                                            style={{ flex: 1, width: wp('100%') }}
                                                            renderItem={({ item, index }) => {
                                                                return (
                                                                    <View style={{ padding: 3, top: 10 }}>
                                                                        <TouchableOpacity onPress={() => { this.setyy(item) }}>
                                                                            {/* <TouchableOpacity onPress={() => { this.filterApply(item) }}> */}
                                                                            <View style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 6, top: 0, borderColor: this.state.type == item || this.state.fabric == item || this.state.size == item || this.state.price == item || this.state.colour == item ? '#F43297' : '#ebebeb' }}>

                                                                                <Text style={{ padding: 10, color: this.state.type == item ? "#F43297" : null, alignSelf: 'center' }}>{item}</Text>
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                )
                                                            }} keyExtractor={(item) => item} />
                                                        {/* <FlatList
                                                            // horizontal
                                                            // data={ITEMSFILTER}
                                                            // data={this.state.filterData}
                                                            data={item.subParameter}
                                                            style={{ color: 'red', height: 100, width: 100, borderWidth: 1 }}
                                                            keyExtractor={itemss => itemss}
                                                            showsHorizontalScrollIndicator={false}
                                                            renderItem={({ itemss, index, separator }) => {
                                                                return (

                                                                    <View style={{ borderWidth: 1, borderColor: 'red' }}>
                                                                        {/* <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, top: 20, padding: 0, color: this.state.colorTrue ? "#F43297" : 'red', }}>{items.item}</Text> */}
                                                        {/* <Text style={{ padding: 0, fontSize: 12, color: 'red' }}>{index + 1}. {itemss}</Text>
                                                                    </View>)
                                                            }} /> */}
                                                        {/* <View style={{ top: 10 }}> */}

                                                        {/* <FlatList
                                                                    // horizontal
                                                                    // data={ITEMSFILTER}
                                                                    // data={this.state.filterData}
                                                                    data={item.subParameter}
                                                                    style={{ flex: 1 }}
                                                                    keyExtractor={item => item.id}
                                                                    showsHorizontalScrollIndicator={false}
                                                                    renderItem={({ item, index, separator }) => {
                                                                        <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, top: 20, padding: 0, color: this.state.colorTrue ? "#F43297" : null, flexDirection: 'row' }}>{item}</Text>
                                                                    }}/> */}
                                                        {/* <ScrollView style={{flex:1}}> */}
                                                        {/* <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, top: 10}}>{item.options[0]}</Text> */}
                                                        {/* {// NEEERRAAJ CODE
                                                                item.subParameter.length > 0 ?
                                                                    item.subParameter.map((items, index) => (
                                                                        <TouchableOpacity onPress={() => { this.handleFilter(items) }}>
                                                                             <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, top: 20, padding: 0, color: this.state.colorTrue ? "#F43297" : null, flexDirection: 'row' }}>{items}</Text>
                                                                         </TouchableOpacity>
                                                                    ))
                                                                    :
                                                                    <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, top: 10 }}></Text>
                                                           
                                                            } // NEEERRAAJ CODE */}
                                                        {/* </ScrollView> */}


                                                        {/* </View> */}
                                                        {/* </TouchableOpacity> */}
                                                    </View>}

                                                <View style={{ borderBottomWidth: 1, top: 20, width: '120%', borderColor: '#ececec', right: 20 }} />

                                            </View>
                                            // )
                                        )
                                    }}

                                />
                                <View style={{
                                    // borderWidth:1,
                                    height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 20,
                                    shadowColor: '#000',

                                    //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                    shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 4 : 12 },
                                    shadowOpacity: Platform.OS == 'ios' ? 0 : 0.7,
                                    shadowRadius: 2,
                                    elevation: Platform.OS == 'ios' ? 4 : 4,
                                }}>
                                    <TouchableOpacity onPress={() => { this.clearFilter() }}>
                                        <View style={{ padding: 0, left: 10 }}>
                                            <Text style={{ alignSelf: 'center', color: '#7b7b7b', fontFamily: APP_FONTS.bold }}>CLEAR ALL</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        width: "40%", height: 40,
                                        backgroundColor: '#F43297',
                                        borderRadius: 10,
                                        bottom: 10,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                        // onPress={() => { this.filterApply(this.state.filterSetItem) }}
                                        onPress={() => { this.filterApply() }}
                                    >
                                        <View>
                                            <Text style={{ alignSelf: 'center', color: 'white', fontFamily: APP_FONTS.bold }}>APPLY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>



                        <FlatList
                            // horizontal
                            // data={ProductList}
                            data={this.state.product}
                            // data={this.state.result}
                            style={{ flex: 1, backgroundColor: this.state.isOpen || this.state.isSizeOpen == true || this.state.isTypeOpen == true ? 'rgba(70,70,70,0.8)' : 'white', padding: 0 }}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            // showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index, separator }) => {
                                console.log(item, 'ksakaj')
                                return (


                                    <View style={{
                                        // backgroundColor: '#ffffff', borderRadius: 5, height: 350, width: Platform.OS == 'ios' ? 179 : wp('47.2%'), marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                        backgroundColor: this.state.isOpen == true || this.state.isSizeOpen == true || this.state.isTypeOpen == true ? 'rgba(50,50,50,0.9)' : '#ffffff', borderRadius: 5, height: 355, width: Platform.OS == 'ios' ? 179 : wp('47%'), marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                        // borderWidth:1,
                                        //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.5,
                                        shadowRadius: 2,
                                        elevation: 2,
                                        opacity: this.state.isOpen == true || this.state.isSizeOpen == true || this.state.isTypeOpen == true ? 0.6 : null

                                    }}>

                                        <TouchableOpacity onPress={() => {
                                            this.state.isOpen == true || this.state.isSizeOpen == true || this.state.isTypeOpen == true ? this.setState({
                                                isOpen: false,
                                                isSizeOpen: false,
                                                isTypeOpen: false
                                            }) : this.props.navigation.push('ProductDetail', { id: item._id })
                                        }}>
                                            <Image source={{ uri: item.images }} style={{ height: 240, width: Platform.OS == 'ios' ? '100%' : '101%', borderTopRightRadius: 6, borderTopLeftRadius: 6, right: 0, top: 0 }} resizeMode='cover' />

                                            <TouchableOpacity onPress={() => { this.state.token == null ? this.showTokenMessage() : this.handleAdd(item._id) }}>
                                                <View style={{ backgroundColor: '#CECFD4', height: 25, width: 25, borderRadius: 12, zIndex: 100, bottom: 30, alignSelf: 'flex-end', right: 10 }}>
                                                    <Image source={item.wishStatus && item.wishStatus ? APP_IMAGES.heartActive : APP_IMAGES.heart} style={{ height: 14, width: 14, alignSelf: 'center', top: 6 }} resizeMode='contain' />
                                                </View>
                                            </TouchableOpacity>
                                            <View style={{ left: 7, flexDirection: 'row', width: Platform.OS == 'ios' ? wp('43%') : wp('46%') }}>
                                                <Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 11, color: 'black', fontFamily: APP_FONTS.bold, flexWrap: 'wrap' }}>{item.productName}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', bottom: 8 }}>
                                                {/* <Text style={{ color: "#F43297", fontSize: 12, fontFamily: APP_FONTS.bold }}>20.600FCFA</Text> */}
                                                <Text style={{ color: "#F43297", fontSize: 12, fontFamily: APP_FONTS.bold }}>{item.price}FCFA</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold, right: 3 }}>{item.commission}</Text>
                                                    <Image source={APP_IMAGES.info} style={{ height: 15, width: 15 }} />
                                                </View>

                                            </View>
                                            <View style={{ height: 30, flexDirection: 'row', justifyContent: 'space-around', left: 3 }}>
                                                <Image source={APP_IMAGES.whatsapp} style={{ height: 70, width: wp('20%'), bottom: 23 }} />
                                                <Image source={APP_IMAGES.facebook} style={{ height: 70, width: wp('20%'), bottom: 23 }} />
                                                <Image source={APP_IMAGES.instagram} style={{ height: 70, width: wp('20%'), bottom: 23 }} />
                                                <Image source={APP_IMAGES.download} style={{ height: 70, width: wp('20%'), bottom: 23 }} />

                                            </View>

                                        </TouchableOpacity>

                                    </View>
                                )
                            }}
                        />
                    </View>

                </TouchableWithoutFeedback>

                {this.state.isLoading ? <ShowLoader /> : null}

            </SafeAreaView>
        )
    }



}

export default productList;