import React, { Component } from "react";
import { Text, View, FlatList, Image, ScrollView, TouchableOpacity, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { APP_FONTS, APP_IMAGES, APP_URLS, CATEGORY_URLS } from "../../utils/Common";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const newTaskData = [{
    title: "New Tasks",
    data: [
        {
            id: "1",
            task: "Buy groceries"
        },
        {
            id: "2",
            task: "Feed Cat"
        },
        {
            id: "3",
            task: "Sleep for 3 hours"
        },
        {
            id: "4",
            task: "Water Plants"
        },
        {
            id: "5",
            task: "Drink Water"
        },
    ]
}];
const completedTaskData = [{
    title: "Completed Tasks",
    data: [
        {
            id: "6",
            task: "Make a section list tutorial"
        },
        {
            id: "7",
            task: "Share this tutorial"
        },
        {
            id: "8",
            task: "Ask doubt in the Comments"
        },
        {
            id: "9",
            task: "Subscribe to logrocket"
        },
        {
            id: "10",
            task: "Read next Article"
        },
        {
            id: "11",
            task: "Read next Article 2"
        },
        {
            id: "12",
            task: "Read next Article 3"
        },
        {
            id: "13",
            task: "Read next Article 4"
        },
        {
            id: "14",
            task: "Read next Article 5"
        },
        {
            id: "15",
            task: "Read next Article 6"
        },
        {
            id: "16",
            task: "Read next Article 7"
        },
        {
            id: "17",
            task: "Read next Article 8"
        },
        {
            id: "18",
            task: "Read next Article 9"
        },
        {
            id: "19",
            task: "Read next Article 10"
        },
    ]
}];

const CATEGORY = [
    {
        id: 1,
        category: require('../../../assets/images/popular.png'),
        name: 'Popular'
    },
    {
        id: 2,
        category: require('../../../assets/images/women-inactive.png'),
        name: 'Women Western'
    },
    {
        id: 3,
        category: require('../../../assets/images/men-inactive.png'),
        name: 'Men',

    },
    {
        id: 4,
        category: require('../../../assets/images/kids-inactive.png'),
        name: 'Kids'
    },
    {
        id: 5,
        category: require('../../../assets/images/home&kitchen-inactive.png'),
        name: 'Home & Kitchen'
    },
    {
        id: 6,
        category: require('../../../assets/images/beauty&health-inactive.png'),
        name: 'Beauty & Health'
    },
    {
        id: 7,
        category: require('../../../assets/images/category-inactive.png'),
        name: 'Category'
    }
]

// const POPULAR = [
// const details = [
//     {
//         title: "Topwear",
//         data: [
//             {
//                 list: [
//                     {
//                         _id: "625d5cdc518dce904e8953ab",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "All Tops",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-two.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:08.498Z",
//                         updatedAt: "2022-04-18T12:43:08.498Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d00518dce904e8953ad",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "Maxi",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:44.194Z",
//                         updatedAt: "2022-04-18T12:43:44.194Z",
//                         __v: 0
//                     }, {
//                         _id: "625d5cdc518dce904e8953ab",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "All Tops",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-two.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:08.498Z",
//                         updatedAt: "2022-04-18T12:43:08.498Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d00518dce904e8953ad",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "Maxi",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:44.194Z",
//                         updatedAt: "2022-04-18T12:43:44.194Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5cdc518dce904e8953ab",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "All Tops",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-two.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:08.498Z",
//                         updatedAt: "2022-04-18T12:43:08.498Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d00518dce904e8953ad",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "Maxi",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:44.194Z",
//                         updatedAt: "2022-04-18T12:43:44.194Z",
//                         __v: 0
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         title: "Bottomwear",
//         data: [
//             {
//                 list: [
//                     {

//                         _id: "625d5d0c518dce904e8953af",
//                         parentSubCategoryName: "Top wear",
//                         childSubCategoryName: "Sports",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-three.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:56.201Z",
//                         updatedAt: "2022-04-18T12:43:56.201Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d29518dce904e8953b1",
//                         parentSubCategoryName: "Top wear",
//                         childSubCategoryName: "Jumpsut",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-four.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:44:25.767Z",
//                         updatedAt: "2022-04-18T12:44:25.767Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d29518dce904e8953b1",
//                         parentSubCategoryName: "Top wear",
//                         childSubCategoryName: "Jumpsut",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-four.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:44:25.767Z",
//                         updatedAt: "2022-04-18T12:44:25.767Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d29518dce904e8953b1",
//                         parentSubCategoryName: "Top wear",
//                         childSubCategoryName: "Jumpsut",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-four.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:44:25.767Z",
//                         updatedAt: "2022-04-18T12:44:25.767Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d29518dce904e8953b1",
//                         parentSubCategoryName: "Top wear",
//                         childSubCategoryName: "Jumpsut",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-four.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:44:25.767Z",
//                         updatedAt: "2022-04-18T12:44:25.767Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d29518dce904e8953b1",
//                         parentSubCategoryName: "Top wear",
//                         childSubCategoryName: "Jumpsut",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-four.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:44:25.767Z",
//                         updatedAt: "2022-04-18T12:44:25.767Z",
//                         __v: 0
//                     }
//                 ]
//             }
//         ]
//     }, {
//         title: "Topwear",
//         data: [
//             {
//                 list: [
//                     {
//                         _id: "625d5cdc518dce904e8953ab",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "All Tops",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-two.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:08.498Z",
//                         updatedAt: "2022-04-18T12:43:08.498Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d00518dce904e8953ad",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "Maxis",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:44.194Z",
//                         updatedAt: "2022-04-18T12:43:44.194Z",
//                         __v: 0
//                     }, {
//                         _id: "625d5cdc518dce904e8953ab",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "All Tops",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-two.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:08.498Z",
//                         updatedAt: "2022-04-18T12:43:08.498Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d00518dce904e8953ad",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "Maxis",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:44.194Z",
//                         updatedAt: "2022-04-18T12:43:44.194Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5cdc518dce904e8953ab",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "All Tops",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img-two.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:08.498Z",
//                         updatedAt: "2022-04-18T12:43:08.498Z",
//                         __v: 0
//                     },
//                     {
//                         _id: "625d5d00518dce904e8953ad",
//                         parentSubCategoryName: "Bottom wear",
//                         childSubCategoryName: "Maxis",
//                         category: "625cf768191cf500d6ef8caa",
//                         image: require('../../../assets/images/product-img.png'),
//                         isActive: true,
//                         createdAt: "2022-04-18T12:43:44.194Z",
//                         updatedAt: "2022-04-18T12:43:44.194Z",
//                         __v: 0
//                     }
//                 ]
//             }
//         ]
//     }
// ]


const TopWear = [
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        image: require('../../../assets/images/image-one.png'),
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
        image: require('../../../assets/images/image-two.png'),
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
        image: require('../../../assets/images/image-three.png'),
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
        image: require('../../../assets/images/image-four.png'),
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
        image: require('../../../assets/images/image-five.png'),
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
        image: require('../../../assets/images/image-six.png'),
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },

]

const Bottomwear = [
    {
        _id: "625d5cdc518dce904e8953ab",
        parentSubCategoryName: "Bottom wear",
        childSubCategoryName: "All Tops",
        category: "625cf768191cf500d6ef8caa",
        image: require('../../../assets/images/image-one.png'),
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
        image: require('../../../assets/images/image-three.png'),
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
        image: require('../../../assets/images/image-two.png'),
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
        image: require('../../../assets/images/image-one.png'),
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
        image: require('../../../assets/images/image-three.png'),
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
        image: require('../../../assets/images/image-two.png'),
        isActive: true,
        createdAt: "2022-04-18T12:43:08.498Z",
        updatedAt: "2022-04-18T12:43:08.498Z",
        __v: 0
    },
    // {
    //    _id:"625d5d00518dce904e8953ad",
    //    parentSubCategoryName:"Bottom wear",
    //    childSubCategoryName:"All Bottom wear",
    //    category:"625cf768191cf500d6ef8caa",
    //    image:"",
    //    isActive:true,
    //    createdAt:"2022-04-18T12:43:44.194Z",
    //    updatedAt:"2022-04-18T12:43:44.194Z",
    //    __v:0
    // }
]




class categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mainCategory: '',
            active: false,
            Isfocus: false,
            categorry: '',
            categorryImg: '',
            categoryNamme: '',
            selectedIndex: 0,
            category: '',
            details:''
            // active:true
        }
    }

    componentDidMount() {
        this.categories()
        // this.subCategory()
    }

    // categories(){
    async categories() {
        console.log('shomoshahaah')
        try {
            let response = await fetch(

                APP_URLS.mainCategories,
                {
                    'method': 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    // body: JSON.stringify(body)
                }
            );
            if (response.status == 200) {
                console.log('normal----->')

                response.json().then(data => {

                    console.log('categories', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status === 1) {
                        console.log(data.category, 'catteetete')
                        this.setState({
                            mainCategory: data.category
                        }, () => { this.state.mainCategory, 'mainCategoriiiess' })
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

    async subCategory(categoryId, item) {
        
        console.log(item, 'yummmm')

        let body = {
            // category: "6287362287ec1cc126ebc338"
            // category: item._id,
            // category : "62b2f61e8c8100b78afe1cb7"
            category : categoryId
        }
        console.log(body, 's-dssd->')

        try {
            let response = await fetch(

                APP_URLS.subCategories,
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

                    console.log('Subcategories', JSON.stringify(data))
                    // console.log('Subcategories--', JSON.stringify(data.details))
                    // console.log('Subcategories', JSON.stringify(data))
                    //console.log('convoeys', JSON.stringify(data.usersChatData[0].message))
                    // if (data.response.status.statusCode === 200) {
                    if (data.status == 1) {
                        this.setState({
                            details:data.details,
                            categoryNamme: item.categoryName,
                            categorryImg: item.categoryImage,
                            category: item
                        }, () => { this.state.categoryNamme, 'catetetteetetevgdhvsdhdsh', this.state.categorryImg, "DETAILS---",this.state.details})
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
                    else if (data.status === 0) {
                        alert(data.message)
                    }
                    else {
                        this.setState({ isLoading: false ,
                            categoryNamme: item.categoryName,
                            categorryImg: item.categoryImage,
                            category: item
                        }, () => {
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



    renderSection = ({ item}) => {
        console.log(item, 'item===>1')
        console.log(item.category, 'item===>C')
        return (
            <FlatList
                data={item.list}
                // data={item.data}
                numColumns={3}
                style={{ padding: 10, justifyContent: 'center', alignContent: 'center' }}
                showsHorizontalScrollIndicator={false}
                // renderItem={this.renderListItem}
                renderItem={({ item }) => {
                    console.log('//item/', item)
                    return (
                        //   <View style={{height: 50, width: 100, borderColor: "green", borderWidth: 1 }}>
                        //     <Text>{item.name}</Text>
                        //     <Text>{item.color}</Text>
                        //   </View>
                        <View style={{ height: 120, width: wp('23.5%') }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductList',{productID:item._id,categoryID:item.category._id}) }}>
                                {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('Drawer') }}> */}
                                <View style={{ padding: 10, right: 5 }}>
                                    <Image source={{uri:item.image}} style={{ height: 72, width: 72, alignSelf: 'center', bottom: 0, borderRadius: 36 }} />
                                    {/* <Image source={{uri:item.image}} style={{ height: 72, width: 72}} /> */}
                                    {/* <Text style={{ left: 0, top: 0, fontSize: 12, alignSelf: 'center' }}>{item.childSubCategoryName}</Text> */}
                                    {/* <Text style={{ left: 0, top: 10, fontSize: 13, alignSelf: 'center', color: '#b6b6b6', fontFamily: APP_FONTS.semi_bold }}>{item.childSubCategoryName}</Text> */}
                                    <Text ellipsizeMode='tail' numberOfLines={2} style={{ left: 0, top: 10, fontSize: 13, alignSelf: 'center', color: '#b6b6b6', fontFamily: APP_FONTS.semi_bold }}>{item.subSubCategoryName}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            // keyExtractor={this.keyExtractor}
            />
        )
    }
    // renderListItem = ({ item }) => {
    //     console.log('//item/',item)
    //     return (
    //         //   <View style={{height: 50, width: 100, borderColor: "green", borderWidth: 1 }}>
    //         //     <Text>{item.name}</Text>
    //         //     <Text>{item.color}</Text>
    //         //   </View>

    //         <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductList') }}>
    //             <View>
    //                 <Image source={item.image} style={{ height: 60, width: 60, bottom: 4, alignSelf: 'center', borderRadius: 30 }} />
    //                 {/* <Text style={{ left: 0, top: 0, fontSize: 12, alignSelf: 'center' }}>{item.childSubCategoryName}</Text> */}
    //                 <Text style={{ left: 0, top: 0, fontSize: 12, alignSelf: 'center', color: '#b6b6b6' }}>{item.childSubCategoryName}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }
    //   renderListItem = ({ item }) => {
    //     return (
    //       <View style={{height: 50, width: 100, borderColor: "green", borderWidth: 1 }}>
    //         <Text>{item.name}</Text>
    //         <Text>{item.color}</Text>
    //       </View>
    //     )
    //   }

    render() {
        // console.log(details, 'detialllss-->')
        // let newArray = []
        // for (let item in jsonData) {
        //     let dict = {
        //         title: item.title,
        //         data: item.Bottomwear
        //     }
        //     newArray.push(dict)
        // }

        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.24, backgroundColor: "#F5F5F5" }}>
                    <FlatList
                        // horizontal
                        data={this.state.mainCategory}
                        style={{ flex: 1 }}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        // showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index, separator }) => {
                            console.log(item, 'Nammmmmeeee--->')
                            var CategoryName = item.categoryName
                            console.log(CategoryName, 'Catatata')
                            return (
                                <View style={{ marginLeft: 0, justifyContent: 'center', borderRadius: 6, alignItems: 'center', backgroundColor: this.state.category == item ? 'white' : null, borderLeftWidth: this.state.category == item ? 4 : 0, borderColor: this.state.category == item ? '#f43397' : null }}>

                                    {/* <TouchableOpacity onPress={() => this.subCategory(item._id)}> */}
                                    {/* <TouchableOpacity onPress={() => this.subCategory('6287362287ec1cc126ebc338', item)}> */}
                                    <TouchableOpacity onPress={() => this.subCategory(item._id, item)}>
                                        {/* // this.setState({ */}
                                        {/* //     CategoryName:item.categoryName
                                    // })
                                // }> */}
                                        {/* { this.state.Isfocus == true ? */}
                                        <View style={{ width: '100%', height: 95, borderRadius: 0, justifyContent: 'center', alignItems: 'center' }}>

                                            <Image source={{ uri: item.categoryImage }} style={{ height: 20, width: 20, right: 0, tintColor: item.categoryImage == this.state.categorryImg ? '#f43397' : null }} resizeMode='contain' />
                                            {/* {
                                                 this.state.categorry == item.categoryName? */}

                                            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, top: 10, color: item.categoryName == this.state.categoryNamme ? '#f43397' : null }}>{item.categoryName}</Text>
                                            {/* :
                                                 <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, top: 10,color:'red' }}>{item.categoryName}</Text>


                                             } */}




                                        </View>
                                        {/* :
                                        <View style={{ width: '100%', height: 93, borderRadius: 0, justifyContent: 'center', alignItems: 'center' }}>

                                            <Image source={{ uri: item.categoryImage }} style={{ height: 20, width: 20, right: 0 }} resizeMode='contain' />
                                            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, top: 10 }}>jdhjdshdsjsh</Text>
                                        </View>
                                    } */}
                                    </TouchableOpacity>
                                    {/* {this.state.active == true ?

                                        <View style={{ width: '100%', height: 90, borderRadius: 0, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={{ uri: item.categoryImage }} style={{ height: 20, width: 20, right: 0 }} resizeMode='contain' />
                                            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, top: 10, color: 'red' }}>{item.categoryName}</Text>
                                        </View>
                                        :
                                        <View style={{ width: '100%', height: 90, borderRadius: 0, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={{ uri: item.categoryImage }} style={{ height: 20, width: 20, right: 0 }} resizeMode='contain' />
                                            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold, top: 10 }}>{item.categoryName}</Text>
                                        </View>

                                    } */}



                                    <View style={{ borderBottomWidth: 1, borderColor: '#eaeaea', width: '100%' }} />
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={{ flex: 0.80, padding: 5 }}>

                    {/* {console.log(details, "kashbd")}/ */}
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        {/* <Text style={{ fontSize: 14, color: 'black', fontFamily: APP_FONTS.bold, padding: 10 }}>All Popular</Text> */}
                        <SectionList
                            // {console.log(this.state.details,'DETAILS')}
                            sections={this.state.details}
                            style={{ flex: 1 }}
                            style={{ flexDirection: 'row', flexWrap: 'wrap' }}
                            showsHorizontalScrollIndicator={false}
                            scrollEnabled={false}
                            
                            // horizontal={true}

                            // style={{ transform: [{ scaleX: -1 }] }}
                            // horizontal={true}
                            // numColumn}


                            // keyExtractor={(item, index) => item + index}
                            // renderItem={({item})=>(
                            //     <Text style={styles.taskItem}>{item.task}</Text>
                            // )}
                            renderItem={this.renderSection}
                            // renderItem={({ item }) =>



                            //     <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductList') }}>
                            //        {console.log(item,'========jhbnhnhj')}
                            //         <View>
                            //             <Image source={item.image} style={{ height: 60, width: 60, bottom: 4, alignSelf: 'center', borderRadius: 30 }} />
                            //             {/* <Text style={{ left: 0, top: 0, fontSize: 12, alignSelf: 'center' }}>{item.childSubCategoryName}</Text> */}
                            //             <Text style={{ left: 0, top: 0, fontSize: 12, alignSelf: 'center',color:'#b6b6b6' }}>{item.childSubCategoryName}</Text>
                            //         </View>
                            //     </TouchableOpacity>


                            // }


                            /* // </TouchableOpacity> */
                            /* // } */
                            //  renderSectionHeader={({ section: { title } }) => 
                            //      <Text style={{ fontSize: 12, color: 'black', padding: 10 }}>{title}</Text>

                            //  )}
                            renderSectionHeader={({ section}) => (
                                // {console}
                                
                                // return(
                                // <Text style={{ fontSize: 14, color: 'black', padding: 15, fontFamily: APP_FONTS.semi_bold }}>All Popular</Text>
                                <Text style={{ fontSize: 14, color: 'black', padding: 15, fontFamily: APP_FONTS.semi_bold }}>{section.title}</Text>
                                // )
                                // <Text style={{ fontSize: 14, color: 'black', padding: 15, fontFamily: APP_FONTS.semi_bold }}>{item.title}</Text>
                            )}
                        />
                    </ScrollView>



                    {/* / <Text style={{ fontSize: 14, bottom: 5, left: 10, color: 'black' }}>Topwear</Text> */}
                    {/* <FlatList
                        data={Bottomwear}
                        style={{ flex: 1 }}
                        numColumns={3}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index, separator }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 12, color: 'black', padding: 10 }}>{item.parentSubCategoryName}</Text>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductList') }}>
                                            <View>
                                                <Image source={item.image} style={{ height: 60, width: 60, bottom: 4, alignSelf: 'center' }} />
                                                <Text style={{ left: 0, top: 0, fontSize: 12, alignSelf: 'center' }}>{item.childSubCategoryName}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <Text style={{ fontSize: 14, bottom: 10, left: 10, color: 'black' }}>Bottomwear</Text>
                    <FlatList
                        data={TopWear}
                        style={{ flex: 1 }}
                        numColumns={3}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index, separator }) => {
                            return (
                                <View style={{ flex: 1 }}>
                                    <View style={{}}>
                                        <Text style={{ fontSize: 12, color: 'black', padding: 10 }}>{item.parentSubCategoryName}</Text>
                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductList', { productId: item._id }) }}>
                                            <View>
                                                <Image source={item.image} style={{ height: 60, width: 60, alignSelf: 'center' }} />
                                                <Text style={{ left: 5, top: 5, fontSize: 12, alignSelf: 'center' }}>{item.childSubCategoryName}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                    </View>
                                </View>
                            )
                        }}
                    /> * */}
                </View>

            </SafeAreaView>
        )
    }



}

export default categories;