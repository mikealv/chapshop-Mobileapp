import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "../Screens/Login";
// import Hedge from "../Screens/Hedge";
// import Splash from "../Screens/Splash";
import login from "../screens/Login/login";
import otp from "../screens/Otp/otp";
import editProfile from "../screens/Account/editProfile";
import bottomDrawer from "../components/drawer/bottomDrawer"
import productList from "../screens/Categories/productList";
import productDetail from "../screens/Categories/productDetail";
import drawer from "../screens/Drawer/drawer";
import filter from "../screens/Categories/filter";
import addTobag from "../screens/Categories/addTobag";
import categories from "../screens/Categories/categories";
import BottomDrawer from "../components/drawer/bottomDrawer";
import wishlist from "../screens/Wishlist/wishlist";
import paymentSummary from "../screens/Categories/paymentSummary";
import addNewAddress from "../screens/Categories/addNewAddress";
import placeOrderPage from "../screens/Categories/placeOrderPage";
import deliveryStatus from "../screens/Orders/deliveryStatus";
// import { createDrawerNavigator } from 'react-navigation-drawer';


const Stack = createStackNavigator()

// const drawerStack = createDrawerNavigator({
//     drawer: {
//         screen: bottomStack,
//     },
// }, {
//     contentComponent: Drawer,
//     drawerPosition: 'right',
//     drawerWidth: 100
// })
// const Drawer = createDrawerNavigator();


export default function AppNavigation2(){
    return(
        <NavigationContainer theme={{colors:{background:'white'}}}>
            <Stack.Navigator initialRouteName="bottomDrawer">
                
                <Stack.Screen name="Login"component={login} options={{headerShown:false}}/>
                <Stack.Screen name="Otp"component={otp} options={{headerShown:false}}/>
                <Stack.Screen name="bottomDrawer" component={BottomDrawer} options={{headerShown:false}}/>
                <Stack.Screen name="EditProfile" component={editProfile} options={{headerShown:false}}/>
                <Stack.Screen name="wishList" component={wishlist} options={{headerShown:false}}/>
                {/* <Stack.Screen name="Categories" component={categories} options={{headerShown:false}}/> */}
                 <Stack.Screen name="ProductList" component={productList} options={{headerShown:false}}/>
                 {/* <Stack.Screen name="Drawer" component={drawer} options={{headerShown:false}}/> */}
                <Stack.Screen name="ProductDetail" component={productDetail} options={{headerShown:false}}/>
                <Stack.Screen name="AddToBag" component={addTobag} options={{headerShown:false}}/>
                <Stack.Screen name="PaymentSummary" component={paymentSummary} options={{headerShown:false}}/>
                <Stack.Screen name="AddNewAddress" component={addNewAddress} options={{headerShown:false}}/>
                <Stack.Screen name="PlaceOrderPage" component={placeOrderPage} options={{headerShown:false}}/>
                <Stack.Screen name="deliveryStatus" component={deliveryStatus} options={{headerShown:false}}/>
                
               
              </Stack.Navigator>
        </NavigationContainer>
    )
}

// export default function  DrawerNavigation() {
//     return (
//         <NavigationContainer>
//           <Drawer.Navigator initialRouteName="ProductList">
//             {/* <Drawer.Screen name="Filter" component={filter} /> */}
//             <Drawer.Screen name="Filter" component={filter} />
//             <Drawer.Screen name="ProductList" component={productList} />
//           </Drawer.Navigator>
//         </NavigationContainer>
//       );
    
// }