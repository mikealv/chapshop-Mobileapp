
import React, { Component } from "react";
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { APP_FONTS, APP_IMAGES, APP_URLS } from "../../utils/Common";
import AsyncStorage from '@react-native-async-storage/async-storage';





const ITEMS = [
  {
    id: 1,
    // category: require('../../../assets/images/product-img.png'),
    // name: "What's new"
    name: "All"
  },
  {
    id: 2,
    // category: require('../../../assets/images/product-img.png'),
    // name: 'High to low'
    name: 'Ordered'
  },
  {
    id: 3,
    // category: require('../../../assets/images/product-img.png'),
    // name: 'Popularity',
    name: 'Shipped',

  },
  {
    id: 4,
    // category: require('../../../assets/images/product-img.png'),
    // name: 'Low to High'
    name: 'Delivered'
  },
  {
    id: 5,
    // category: require('../../../assets/images/product-img.png'),
    name: 'ratings'
  },
  {
    id: 6,
    // category: require('../../../assets/images/product-img.png'),
    name: 'ratings'
  },
  {
    id: 7,
    // category: require('../../../assets/images/product-img.png'),
    name: 'ratings'
  }, {
    id: 8,
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

const CATEGORY = [
  {
    id: 1,
    category: require('../../../assets/images/image-six.png'),
    name: 'Popular'
  },
  {
    id: 2,
    category: require('../../../assets/images/image-four.png'),
    name: 'Women Western'
  },
  {
    id: 3,
    category: require('../../../assets/images/image-two.png'),
    name: 'Men',

  },
  {
    id: 4,
    category: require('../../../assets/images/image-one.png'),
    name: 'Kids'
  },
  {
    id: 5,
    category: require('../../../assets/images/image-two.png'),
    name: 'Home '
  },
  {
    id: 6,
    category: require('../../../assets/images/image-four.png'),
    name: 'Beauty '
  },
  {
    id: 7,
    category: require('../../../assets/images/image-four.png'),
    name: 'Category'
  }
]



class orders extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: '',
      product: ''

    }
  }

  componentDidMount() {
    this.userDetail()

  }

  async userDetail() {
    let userS = await AsyncStorage.getItem('@userToken')
    console.log(userS, 'userssss')
    this.setState({
      token: userS
    }, () => { this.state.token, 'token--->' })
    console.log(this.state.token, 'oojojtkt')
    this.placedOrderStatusList()

  }

  async placedOrderStatusList() {
    console.log('lasallala')
    try {
      let response = await fetch(

        // APP_URLS.productWithSorts,
        APP_URLS.orderSummary,
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

          console.log('product00000', JSON.stringify(data))
          if (data.status === 1) {
            // console.log(data.products[0], 'producttttss---')
            console.log(data.data, 'producttttss-SOOORt--')
            // console.log(data.data[0].images, 'producttttss')
            // console.log(data.products[0].productName, 'producttttss')
            this.setState({
              product: data.data,
              // productImages: data.data[0].images,
              // productPrice: data.data[0].productPrice,
              // productName: data.data[0].productName
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

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', top: 20, right: 7 }}>
          <Image source={APP_IMAGES.search} style={{ height: 20, width: 20, top: 10, left: 30, zIndex: 1 }} resizeMode='contain' />
          <TextInput ref={input => { this.textInput = input }}
            // letterSpacing={5}
            style={{
              width: '92%',
              height: 45,
              fontSize: 13,
              fontFamily: APP_FONTS.medium,
              borderRadius: 5,
              // alignSelf: 'flex-start',
              textAlign: 'left',
              color: 'black',
              //fontWeight:'400',
              borderColor: '#D6D6D6',
              // borderWidth: 1,
              backgroundColor: 'white',
              paddingLeft: 40
              // left:30,
              // left: 10
              // padding: 10,
              // textAlign: 'center'
            }}
            placeholder="Search by Product or Order ID"
            // style={{left:10}}
            keyboardType="default"
            value={this.state.search}
            onChangeText={(text) => this.setState({ search: text })}
            placeholderTextColor={'#A0A0A0'}>
            {/* // onChangeText={this.handlesearchText()}> */}
          </TextInput>
          <TouchableOpacity
            style={{ right: Platform.OS == 'ios' ? 0 : 20, width: Platform.OS == 'ios' ? 0 : 30 }}
            onPress={() => {
              this.setState({
                search: ''
              })
            }

            }>
            <Image source={APP_IMAGES.closedCircle} style={{ height: 12, width: 12, right: Platform.OS == 'ios' ? 24 : 10, top: 16 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.20, top: 30 }}>
          <FlatList
            horizontal
            data={ITEMS}
            // numColumns={2}
            // numColumns={ITEMS.length/2}
            style={{ flex: 1 }}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index, separator }) => {
              return (

                <View style={{ padding: 15 }}>

                  <View style={{ bottom: 0, backgroundColor: '#F5F5F5', height: 30, width: 80, borderRadius: 10, padding: 6 }}>
                    {/* <TouchableOpacity onPress={() => { this.sorting(item.name) } */}
                    {/* } > */}
                    <Text style={{ fontSize: 12, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, alignSelf: 'center' }}>{item.name}</Text>
                    {/* </TouchableOpacity> */}
                    <View style={{ flexDirection: 'row' }}>
                      {/* <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14 }} /> */}
                      {/* <Text style={{ fontSize: 10, fontFamily: APP_FONTS.bold }}>$2 Commission</Text> */}
                    </View>
                  </View>
                  {/* <View style={{ borderBottomWidth: 1, top: 15, width: '100%', borderColor: '#ececec', right: 0 }} /> */}

                </View>

              )
            }}
          />

        </View>
        <View style={{ backgroundColor: '#f0f0f0', top: 12, height: 40 }} >
          <Text style={{ color: '#969696', fontFamily: APP_FONTS.semi_bold, top: 10, left: 15 }}>Showing All Orders</Text>
        </View>
        <View style={{ flex: 1, top: 30 }}>
          <FlatList
            // horizontal
            // data={CATEGORY}
            data={this.state.product}
            // numColumns={ITEMS.length/2}
            style={{ flex: 1 }}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index, separator }) => {
              console.log(item, 'ITMMM')
              return (

                // <View>
                //  <Text>ORDERDID</Text> 
                //   </View>

                <View style={{}}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('deliveryStatus') }}>
                    {/* <View style={{ height: 30 }}>
                      <Text style={{ top: 16, left: 16, fontFamily: APP_FONTS.semi_bold, fontSize: 13 }}>Order ID 892016974812</Text>
                    </View> */}
                    <View style={{ borderWidth: 0.7, borderColor: '#f0f0f0', top: 12 }} />
                    <View style={{ height: 30, flexDirection: 'row' }}>
                      <Text style={{ top: 8, left: 16, fontFamily: APP_FONTS.semi_bold, fontSize: 13, top: 16, color: '#a8a8a8' }}>Order ID </Text>
                      <Text style={{ top: 16, left: 16, fontFamily: APP_FONTS.semi_bold, fontSize: 13 }}>{item.orderId}</Text>
                    </View>
                    <View style={{ padding: 30, top: 10, flexDirection: 'row', justifyContent: 'space-between' }}>

                      {/* <View> */}

                      <View style={{ flexDirection: 'row', backgroundColor: '#f7f7f7', width: '100%', height: hp('20%'),padding:10 }}>
                        <View style={{ padding: 6 }}>
                          {/* <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold }}>{item.productId.productName}</Text> */}
                          <Image source={{ uri: item.productId.images }} style={{ height: 90, width: 90 }} />
                        </View>

                        <View style={{ bottom: 0, height: 30, width: 130, borderRadius: 10, padding: 6, left: 0, top: 0 }}>
                          <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 10, borderColor: '#eaeaea', justifyContent: 'center', height: 18 }}>
                            <Image source={APP_IMAGES.commisionImage} style={{ height: 14, width: 14, right: 5, top: 1 }} />
                            <View style={{flexDirection:'row'}}>
                            <Text style={{ fontSize: 10, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, right: 2 }}>{item.productId.commission}</Text>
                            <Text style={{ fontSize: 10, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, right: 0 }}>Commission</Text>
                            </View>
                          </View>
                          <Text style={{ fontSize: 13, color: '#f55bab', fontFamily: APP_FONTS.bold }}>${item.productId.price}</Text>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, color: '#9a9a9a' }}>Items -</Text>
                            <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, color: '#444444' }}>{item.quantity}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, color: '#9a9a9a' }}>Date -</Text>
                            <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, color: '#444444' }}>{item.productId.updatedAt}</Text>
                          </View>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, color: '#9a9a9a' }}>Status -</Text>
                            <Text style={{ fontSize: 13, color: '#8f8f8f', fontFamily: APP_FONTS.semi_bold, color: '#444444' }}>Pending</Text>
                          </View>
                        </View>
                      </View>
                      {/* <View style={{ top: 30 }}>
                        <Image source={APP_IMAGES.arrowRight} style={{ height: 12, width: 12 }} />
                      </View> */}
                    </View>
                    <View style={{ borderWidth: 0.7, borderColor: '#f0f0f0', top: 12 }} />
                  </TouchableOpacity>
                </View>

              )
            }}
          />
        </View>
      </SafeAreaView>
      // <Text style={{fontSize:20,alignSelf:'center',fontFamily:APP_FONTS.bold}}>Pending</Text>
    )
  }



}

export default orders;