
import React, { Component } from "react";
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { APP_FONTS, APP_IMAGES } from "../../utils/Common";
import { Rating } from 'react-native-ratings';





// const ITEMS = [
//   {
//     id: 1,
//     // category: require('../../../assets/images/product-img.png'),
//     // name: "What's new"
//     name: "whatsNew"
//   },
//   {
//     id: 2,
//     // category: require('../../../assets/images/product-img.png'),
//     // name: 'High to low'
//     name: 'highToLow'
//   },
//   {
//     id: 3,
//     // category: require('../../../assets/images/product-img.png'),
//     // name: 'Popularity',
//     name: 'popularity',

//   },
//   {
//     id: 4,
//     // category: require('../../../assets/images/product-img.png'),
//     // name: 'Low to High'
//     name: 'lowToHigh'
//   },
//   {
//     id: 5,
//     // category: require('../../../assets/images/product-img.png'),
//     name: 'ratings'
//   },
//   {
//     id: 6,
//     // category: require('../../../assets/images/product-img.png'),
//     name: 'ratings'
//   },
//   {
//     id: 7,
//     // category: require('../../../assets/images/product-img.png'),
//     name: 'ratings'
//   }, {
//     id: 8,
//     // category: require('../../../assets/images/product-img.png'),
//     name: 'ratings'
//   },
//   // {
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Discount'
//   // },{
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Rating'
//   // },{
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Size'
//   // },{
//   // id: 6,
//   // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Combo'
//   // },{
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Print '
//   // },{
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Styling '
//   // },{
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Neck '
//   // },{
//   //     id: 6,
//   //     // category: require('../../../assets/images/product-img.png'),
//   //     name: 'Sleeve '
//   // }
// ]

// const CATEGORY = [
//   {
//     id: 1,
//     category: require('../../../assets/images/image-six.png'),
//     name: 'Popular'
//   },
//   {
//     id: 2,
//     category: require('../../../assets/images/image-four.png'),
//     name: 'Women Western'
//   },
//   {
//     id: 3,
//     category: require('../../../assets/images/image-two.png'),
//     name: 'Men',

//   },
//   {
//     id: 4,
//     category: require('../../../assets/images/image-one.png'),
//     name: 'Kids'
//   },
//   {
//     id: 5,
//     category: require('../../../assets/images/image-two.png'),
//     name: 'Home '
//   },
//   {
//     id: 6,
//     category: require('../../../assets/images/image-four.png'),
//     name: 'Beauty '
//   },
//   {
//     id: 7,
//     category: require('../../../assets/images/image-four.png'),
//     name: 'Category'
//   }
// ]



class deliveryStatus extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', left: 0, top: 10 }}>
          <TouchableOpacity style={{ width: 40, height: 30 }} onPress={() => {
            this.props.navigation.goBack()
          }}>
            <View>
              <Image style={{ top: 0, left: 8, height: 20, width: 20, tintColor: 'black' }}
                resizeMode="contain"
                source={APP_IMAGES.arrowLeft} />

            </View>
          </TouchableOpacity>
          <Text style={{ left: 20, fontFamily: APP_FONTS.bold }}>ORDER DETAILS</Text>
        </View>
        <View style={{ borderWidth: 2, borderColor: '#f0f0f0', top: 12 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <Text style={{ fontFamily: APP_FONTS.semi_bold, fontSize: 13 }}>Order number</Text>
          <Text style={{ fontFamily: APP_FONTS.semi_bold, fontSize: 13 }}>1027465833</Text>

        </View>
        <View style={{ borderWidth: 2, borderColor: '#f0f0f0', bottom: 10 }} />
        <View style={{ height: 120, flexDirection: 'row' }}>
          <Image style={{ height: 100, width: 100, top: 10, left: 10 }} resizeMode={'contain'} source={APP_IMAGES.productImage} />
          <View style={{ left: 20, top: 20 }}>
            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold }}>Date: May 22nd,2022</Text>
            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold }}>99 items</Text>
            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold }}>TOTAL commission: 10,000 FCFA</Text>
            <Text style={{ fontSize: 11, fontFamily: APP_FONTS.semi_bold }}>TOTAL: 100,000 FCFA</Text>
            {/* <Text style={{fontSize:11,fontFamily:APP_FONTS.semi_bold}}>Date: May 22nd,2022</Text> */}
          </View>
        </View>


        <View style={{ borderWidth: 4, borderColor: '#f0f0f0', bottom: 0 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
          <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: 'black' }}>Rate your experience</Text>
          <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: 'black' }}>1027465833</Text>
        </View>
        <View style={{ borderWidth: 0.9, borderColor: '#f0f0f0', bottom: 0 }} />
        <View style={{}}>
          <Rating
            ratingCount={5}
            type={'star'}
            startingValue={0}
            fractions={1}
            jumpValue={0.5}
            //showRating
            imageSize={30}
            // tintColor={'black'}
            // tintColor={'black'}
            // selectedColor={AppStyles.colorSet.mainTextColor}
            style={{ alignSelf: 'flex-start', left: 15, top: 15 }}
            onFinishRating={this.ratingCompleted}
          />
        </View>
        <View style={{ height: 10, backgroundColor: '#f0f0f0', top: 30 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, top: 30 }}>
          <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: 'black' }}>Order Tracking</Text>
          <Text style={{ fontSize: 12, fontFamily: APP_FONTS.semi_bold, color: 'black' }}>1027465833</Text>
        </View>
        <View style={{ height: 10, backgroundColor: '#f0f0f0', top: 40 }} />
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ top: 35 }}>
            <Text style={{ color: 'red', fontFamily: APP_FONTS.semi_bold,fontSize:13 }}>CANCEL ORDER</Text>
          </View>
          <View style={{ top: 40 }}>
            <Image source={APP_IMAGES.arrowRight} style={{ height: 12, width: 12 }} />
          </View>
        </View>
        <View style={{ height: 10, backgroundColor: '#f0f0f0', top: 32 }} />
        <View style={{ top:30}}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12 }}>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }} >Price Details</Text>
                                    {/* <Text>$20.00</Text> */}
                                </View>
                                <View style={{ padding: 20, right: 8 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 20 }}>
                                        <Text>Product Charges</Text>
                                        <Text>FCFA 20.00</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: 10 }}>
                                        <Text>Delivery Charges</Text>
                                        <Text>FCFA 20.00</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text>Discount</Text>
                                        <Text>FCFA 20.00</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderColor: '#ededed', borderWidth: 1.5 ,top:30}}>
                                <View>
                                    <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>Order Total</Text>
                                    {/* <Text style={{ fontFamily: APP_FONTS.semi_bold, fontSize: 10, color: '#bebebe' }}>Total amount to be paid by the customer</Text> */}
                                </View>
                                <Text style={{ fontFamily: APP_FONTS.bold, fontSize: 14, color: 'black' }}>FCFA {this.state.totalPrice}</Text>
                            </View>



      </SafeAreaView>
    )
  }



}

export default deliveryStatus;