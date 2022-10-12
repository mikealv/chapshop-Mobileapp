import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer'
import {
    View,
    Image,
    FlatList,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Linking,
    Platform
} from 'react-native'
import { APP_FONTS, APP_IMAGES } from '../../utils/Common'
import filter from '../Categories/filter'
import renderItem from '../Categories/renderItem'
// import AppStyles from '../../styles/AppStyles'
// import { CommonActions } from '@react-navigation/native'
// import AsyncStorage from '@react-native-community/async-storage';
// import { sendPostRequestWithAccessToken } from '../../Utils/RestApiService'
// import { LOGOUT } from '../../Utils/UrlClass'
// import { useDispatch } from 'react-redux'
// import {changeLoginStatus, changeSelectedTab} from '../../redux/actions'

const ITEMS = [
    {
        id: 1,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Category'
    },
    {
        id: 2,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Gender'
    },
    {
        id: 3,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Fabric',

    },
    {
        id: 4,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Color'
    },
    {
        id: 5,
        // category: require('../../../assets/images/product-img.png'),
        name: 'Price'
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
        name: 'Size'
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

// const filterValue

function Sidebar({ mainProps, ...props }) {
    state

    
   const selectedFilter = (value) =>{
      
   }
    // const dispatch = useDispatch()
    //let status = {isLoggedIn:false, isFreeDelivery:false}
    //co//nst logout = value => dispatch(changeLoginStatus(status))
    //cons//t changeTab = value => dispatch(changeSelectedTab(value))
    // selectedFilter(values){
    //  filterValue
    // }
    

    return (
        // <DrawerContentScrollView {...props}
        //     contentContainerStyle={{}}
        //     dr
        //     style={{
        //         backgroundColor: 'white', borderRightColor: 'red',
        //         borderRightWidth: 1, height: '100%'
        //     }}>
        <SafeAreaView style={{ height: '100%' }}>
            <View style={{
                height: 60, flexDirection: 'row', backgroundColor: 'white', bottom: 20, padding: 5, width: '98%', height: 90, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
                // shadowOpacity: 0.5,
                // shadowRadius: 0,
                // elevation: 1,
                shadowColor: '#000',

                //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 0 : 12 },
                shadowOpacity: 0.7,
                shadowRadius: 2,
                elevation: Platform.OS == 'ios' ? 0 : 4,
            }}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{ alignSelf: 'flex-end', marginRight: 22, bottom: 6 }}>
                    <Image style={{ backgroundColor: 'white' }} resizeMode={'contain'} source={require('../../../assets/images/close-circle.png')} style={{ height: 12, width: 12, bottom: 20, left: 10 }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontFamily: APP_FONTS.semi_bold, fontSize: 18, alignSelf: 'center', left: 60, top: 10 }}>FILTERS</Text>
            </View>
            <FlatList
                // horizontal
                data={ITEMS}
                style={{ flex: 1 }}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index, separator }) => (
                    renderItem(item)
                )}
                // renderItem={({ item, index, separator }) => {
                //     let showOptions = false
                //     return (

                //         <View style={{ padding: 20 }}>
                //             {/* <View style={{ height: 250, width: '98%', top: 46 }}>
                //                     <Image source={item.category} style={{ width: '100%', height: 210 }} resizeMode='stretch' />
                //                 </View> */}
                //             <View style={{ backgroundColor: 'white', bottom: 0 ,flexDirection:'row',justifyContent:'space-between'}}>
                //                 <View>
                //                 <TouchableOpacity onPress={()=>{selectedFilter(item.name)}}>
                //                 <Text style={{ fontSize: 14, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item.name}</Text>
                //                 </TouchableOpacity>
                //                 </View>
                //                 <View>

                //                 </View>
                //                 <View>
                                    
                //                 </View>
                //                 <TouchableOpacity onPress={()=>showOptions =  !showOptions} style={{alignSelf:'flex-end'}}>
                //                     <Image source={APP_IMAGES.imageArrowDown} style={{height:12,width:12,left:40}}/>
                //                 </TouchableOpacity>
                //                 {/* <View style={{backgroundColor:'red'}}>

                //                 </View> */}
                //                 {/* <Text style={{ fontSize: 12, color: 'black', fontFamily: APP_FONTS.bold }}>Pink Wrap Dress </Text> */}
                //                 {/* <Text style={{ color: '#F43297', fontSize: 13, fontFamily: APP_FONTS.bold }}>$20.00</Text> */}
                //                 <View style={{ flexDirection: 'row' }}>
                //                     {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                //                     {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                //                 </View>
                //             </View>
                //            {showOptions && <View style={{ flexDirection: 'row', height:50, width:50, backgroundColor:'red' }}>
                //                 </View>}
                            
                //             {/* <View>
                //                 <Text>Red</Text>
                //                 <Text>Blue</Text>
                //                 <Text>Male</Text>
                //                 <Text>Female</Text>
                //             </View> */}
                //             <View style={{ borderBottomWidth: 1, top: 20, width: '120%', borderColor: '#ececec', right: 20 }} />

                //         </View>

                //     )
                // }}
            />
            <View style={{
                height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 20,
                shadowColor: '#000',

                //  borderRadius: 5, height: 350, width:Platform.OS == 'ios'?179: 172, marginLeft: 6, marginRight: 0, marginTop: 10, shadowColor: '#000',
                shadowOffset: { width: 0, height: Platform.OS == 'ios' ? 4 : 12 },
                shadowOpacity: Platform.OS == 'ios' ? 0 : 0.7,
                shadowRadius: 2,
                elevation: Platform.OS == 'ios' ? 4 : 4,
            }}>
                <View style={{ padding: 0, left: 10 }}>
                    <Text style={{ alignSelf: 'center', color: '#7b7b7b', fontFamily: APP_FONTS.bold }}>CLEAR ALL</Text>
                </View>
                <View style={{
                    width: "40%", height: 40,
                    backgroundColor: '#F43297',
                    borderRadius: 10,
                    bottom: 10,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontFamily: APP_FONTS.bold }}>APPLY</Text>
                </View>
            </View>
            {/* {mainProps.data.isLoggedIn && <View>
                    <View style={{alignSelf:'center', marginTop:10, justifyContent:'center', alignItems:'center'}}>
                        <Image source={global.profileImage!==''&&global.profileImage!==null&&global.profileImage!==undefined?
                        {uri:global.profileImage}:
                        require('../../../assets/team-placeholder.png')} 
                        style={{ height:100,  width:100, borderRadius:50}}/>
                        <Text style={[AppStyles.styleSet.textWithWhiteColor, 
                            {marginTop:15, fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:20}]}>
                            {global.name}
                        </Text>
                    </View>
                </View>}
                <View style={{marginTop:mainProps.data.isLoggedIn?30:130,flex:1,  }}>
                {!mainProps.data.isLoggedIn && <DrawerItem
                    label={'Login'}
                    onPress={()=>{
                        changeTab('Login')
                        props.navigation.navigate('Login')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='Login'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='Login'?require('../../../assets/login-active.png'):
                                require('../../../assets/login-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >
                </DrawerItem>}
                <DrawerItem
                    label={'Home'}
                    onPress={()=>{
                        changeTab('Home')
                        props.navigation.navigate('Home')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='Home'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='Home'?require('../../../assets/home-active.png'):
                                require('../../../assets/home-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >
                </DrawerItem>
                <DrawerItem
                    label={'Cart'}
                    onPress={()=>{
                        changeTab('Cart')
                        props.navigation.navigate('Cart')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='Cart'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='Cart'?require('../../../assets/cart-active.png'):
                                require('../../../assets/cart-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >
                </DrawerItem>
                {mainProps.data.isLoggedIn && <DrawerItem
                    label={'My Orders'}
                    onPress={()=>{
                        changeTab('MyOrder')
                        props.navigation.navigate('MyOrder')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='MyOrder'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='MyOrder'?require('../../../assets/cart-active.png'):
                                require('../../../assets/cart-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >
                </DrawerItem>}
                {mainProps.data.isLoggedIn && <DrawerItem
                    label={'Profile'}
                    onPress={()=>{
                        changeTab('Profile')
                        props.navigation.navigate('Profile')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='Profile'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='Profile'?require('../../../assets/profile-active.png'):
                                require('../../../assets/profile-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >
                </DrawerItem>}
                <DrawerItem */}
            {/* label={'Contact'}
                    onPress={()=>{
                        changeTab('Contact')
                        props.navigation.navigate('Contact')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='Contact'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='Contact'?require('../../../assets/contact-active.png'):
                                require('../../../assets/contact-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    > */}
            {/* </DrawerItem> */}
            {/* <DrawerItem
                    label={'Blog'}
                    onPress={()=>{
                        changeTab('Blog')
                        props.navigation.navigate('Blog')
                        }}
                    labelStyle={{color:mainProps.data.selectedTab==='Blog'?AppStyles.colorSet.mainTextColor:'#d3d3d3', 
                    fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={mainProps.data.selectedTab==='Blog'?require('../../../assets/contact-active.png'):
                                require('../../../assets/contact-inactive.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >
                </DrawerItem> */}

            {/* <DrawerItem
                 label={'Privacy Policy'}
                 onPress={()=>{
                     props.navigation.closeDrawer()
                     Linking.openURL('https://mysmugglers.com/privacy-policy')
                    }}
                 labelStyle={{color: '#d3d3d3', fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                 icon={({}) => (
                    <Image  resizeMode={'contain'}
                            source={require('../../../assets/privacy-inactive.png')}
                            style={{height:22, width:22}}/>
                 )}
                >
                </DrawerItem>
                <DrawerItem
                 label={'Terms of Conditions'}
                 onPress={()=>{
                     props.navigation.closeDrawer()
                     Linking.openURL('https://mysmugglers.com/terms-of-service')
                    }}
                 labelStyle={{color:'#d3d3d3', fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:17, fontWeight:'bold',flex:1}}
                 icon={({}) => (
                    <Image  resizeMode={'contain'}
                            source={require('../../../assets/privacy-inactive.png')}
                            style={{height:22, width:22}}/>
                 )}
                >
                </DrawerItem>
                
                </View>
                <DrawerItemList {...props}/> */}
            {/* {mainProps.data.isLoggedIn && <View style={{justifyContent:'flex-end', marginBottom:15}}>
                    <DrawerItem 
                    label='Log Out'
                    onPress={async()=>{
                    let res = await sendPostRequestWithAccessToken(LOGOUT,  global.accessToken);
                     //console.log('resLogout', JSON.stringify(res))
                        if(res.hasOwnProperty('response') && res.response.status.statusCode === 200){
                            AsyncStorage.setItem("@userData", '',()=>{
                                global.accessToken = ''
                                props.navigation.closeDrawer()
                                logout(false)
                                    props.navigation.dispatch(
                                        CommonActions.reset({
                                            index: 0,
                                            routes: [
                                                { name: 'Login' },
                                            ],
                                        })
                                    );
                            });
                        }else{
                            AsyncStorage.setItem("@userData", '',()=>{
                                global.accessToken = ''
                                props.navigation.closeDrawer()
                                logout(false)
                                    props.navigation.dispatch(
                                        CommonActions.reset({
                                            index: 0,
                                            routes: [
                                                { name: 'Login' },
                                            ],
                                        })
                                    );
                            });
                        }
                        
                    }}
                    labelStyle={{color:'#d3d3d3', fontFamily:AppStyles.fontFamily.M_BOLD, fontSize:18, fontWeight:'bold',}}
                    icon={({}) => (
                        <Image  resizeMode={'contain'}
                                source={require('../../../assets/log-out.png')}
                                style={{height:22, width:22}}/>
                    )}
                    >

                    </DrawerItem>

                </View>} */}

        </SafeAreaView>

        // </DrawerContentScrollView>
    )

}
export default Sidebar