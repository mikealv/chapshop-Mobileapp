import React,{ Component } from 'react';
// import { Image } from 'react-native';
import home from '../../screens/Home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wishlist from '../../screens/Wishlist/wishlist';
import categories from '../../screens/Categories/categories';
import { Image } from 'react-native';
import APP_IMAGES from '../../utils/Common'
import account from '../../screens/Account/account';
import orders from '../../screens/Orders/orders';
import productList from '../../screens/Categories/productList';
import drawer from '../../screens/Drawer/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

 

const Tab = createBottomTabNavigator();

function drawerLabel(label) {
  return(
    <Text style={{color:"black", 
    fontFamily:APP_FONTS.medium, fontSize:12,}}>
      {label}
    </Text>
  )
}

function tabBarIcon(icon) {
  return(
    <Image source={icon} style={{height:20, width:20}} resizeMode={'contain'}/>
  )
}

const Stack = createStackNavigator()

 function DrawerAppNavigation(){
  return(
      // <NavigationContainer theme={{colors:{background:'white'}}}>
          <Stack.Navigator initialRouteName="Categories">
              
              <Stack.Screen name="Drawer"component={drawer} options={{headerShown:false}}/>
              <Stack.Screen name="Categories" component={categories} options={{headerShown:false}}/>

              {/* <Stack.Screen name="Otp"component={otp} options={{headerShown:false}}/> */}
              {/* <Stack.Screen name="bottomDrawer" component={bottomDrawer} options={{headerShown:false}}/> */}
              {/* <Stack.Screen name="EditProfile" component={editProfile} options={{headerShown:false}}/> */}
              {/* <Stack.Screen name="Categories" component={categories} options={{headerShown:false}}/> */}
               {/* <Stack.Screen name="ProductList" component={productList} options={{headerShown:false}}/> */}
               {/* <Stack.Screen name="Drawer" component={drawer} options={{headerShown:false}}/> */}
              {/* <Stack.Screen name="ProductDetail" component={productDetail} options={{headerShown:false}}/> */}
              {/* <Stack.Screen name="AddToBag" component={addTobag} options={{headerShown:false}}/> */}
             
            </Stack.Navigator>
      // </NavigationContainer>
  )
}

class BottomDrawer extends Component {

  constructor(props){
    super(props)
    this.state={
        tabSelected:'Home',
        // type:this.props.route.params.type
        // type:this.props.route.params.type

    }
    this.props.navigation.addListener(
      'didFocus',
      payload => {
        // const type =  this.props.navigation.getParam('type')
        console.log(payload,'payloaadd')
        // console.log(payload)
      })
}

componentDidMount(){
  console.log(this.state.type,'typpee')
}


    


  render() {
    return (
      // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        // style={{bottom:30}}
        
         screenOptions={{
          tabBarStyle: { height: 55 }
          //  tabBarIconStyle={bottom:10}
          // tabBarStyle:{
            // backgroundColor:'#0000ff',
            // height:100,
            // bottom:2
          // }
          //  tabBarStyle={bottom:10}
          //  tabBarBackground:'red'
          // tabBarActiveTintColor: '#e91e63',
        }}
        tabBarOptions={{
          // activeTintColor: '#fff',
          // inactiveTintColor: 'lightgray',
          activeBackgroundColor: 'white',
          // activeBackgroundColor: '#e91e63',
          inactiveBackgroundColor: 'white',
          tabStyle: {
            // height:50,
            padding: 5, margin:0,   //Padding 0 here
        },
          
          // showLabel: false
          // borderColor:'white'
              // style: {
              //       backgroundColor: '#CE4418',
              //       paddingBottom: 3
              // }
       }}
      >
        <Tab.Screen
          name="Home"
          component={home}
        
           
              options={{
                tabBarLabel:'Home',
                tabBarActiveTintColor:'#F43297',
                headerShown:false,
                tabBarIcon: ({focused}) => (
                  tabBarIcon(focused?require('../../../assets/images/home-active.png'):require('../../../assets/images/home-inactive.png'))
                  // tabBarIco
                  )
            // }}/>
          }}
           
        />
        <Tab.Screen
          name="Category"
          component={categories}
          // component={DrawerAppNavigation}
          // component={productList}
          
           
              options={{
                
                tabBarLabel:'Category',
                tabBarActiveTintColor:'#F43297',
                tabBarIcon: ({focused, color }) => (
                  tabBarIcon(focused?require('../../../assets/images/categories-active.png'):require('../../../assets/images/categories-inactive.png'))
                  )
            // }}/>
          }}
           
        />
       

         <Tab.Screen
          name="WishList"
          component={wishlist}
           
              options={{
                tabBarLabel:'WishList',
                tabBarActiveTintColor:'#F43297',
                // tabBarLabel: ({}) => (
                //     tabBarLabel("WishList")
                //     // <Text>Home</Text>
                // ),
                tabBarIcon: ({focused, color }) => (
                  tabBarIcon(focused?require('../../../assets/images/wishlist-active.png'):require('../../../assets/images/wishlist-inactive.png'))
                  )
            // }}/>
          }}
           
        />
         <Tab.Screen
          name="Orders"
          component={orders}
           
              options={{
                tabBarLabel:'Orders',
                tabBarActiveTintColor:'#F43297',
                // tabBarInactiveBackgroundColor:'white',
                // tabBarLabel: ({}) => (
                //     tabBarLabel("WishList")
                //     // <Text>Home</Text>
                // ),
                tabBarIcon: ({ focused, color }) => (
                  
                  tabBarIcon(focused?require('../../../assets/images/orders-active.png'):require('../../../assets/images/orders-inactive.png'))
                   
                  
                  )
            // }}/>
          }}
           
        />
         <Tab.Screen
          name="Account"
          component={account}
           
              options={{
                headerShown:false,
                // tabBarLabel:'Account',
                tabBarActiveTintColor:'#F43297',
                // tabBarLabel:() => {return null},
                // tabBarLabel: ({}) => (
                //     tabBarLabel("WishList")
                //     // <Text>Home</Text>
                // ),
                // tabBarVisible: false,
                tabBarIcon: ({focused, color }) => (
                  tabBarIcon(focused?require('../../../assets/images/account-active.png'):require('../../../assets/images/account-inactive.png'))
                  // tabBarIcon(require('../../../assets/images/account-inactive.png'))
                  )
            // }}/>
          }}
           
        />



      </Tab.Navigator>

      // </NavigationContainer>
    );
  }
}


export default BottomDrawer

// const App = createAppContainer(AuthNavigator)
// const MainApp = () => <App/>;
// export default MainApp;