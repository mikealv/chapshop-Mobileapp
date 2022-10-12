

import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { createDrawerNavigator }
    from '@react-navigation/drawer';
// import { NavigationContainer }
//     from '@react-navigation/native';
import productList from "../Categories/productList";
import filter from "../Categories/filter";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../../components/atoms/header";
import Sidebar from './sidebar';
import productDetail from "../Categories/productDetail";
import addTobag from "../Categories/addTobag";
import categories from "../Categories/categories";




// const Drawer = ({navigation}) => {

//     const [location, setLocation] = useState();
//     const [cuisines, setCuisines] = useState(1);

//     const [open, setOpen] = useState(false);
//     const [creditCard, setCreditCard] = useState(false);
//     const [free, setFree] = useState(false);

const Drawer = createDrawerNavigator(
    
);


class drawer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <NavigationContainer independent={true} >
                <Drawer.Navigator  initialRouteName="ProductList"  screenOptions={{
            drawerPosition: 'right',
            // drawerHideStatusBarOnOpen: false,
            // swipeEnabled: true,
            // drawerStyle: {
                // right:0
            // },
        }}>
{/* drawerContent={props => <Sidebar {...props} mainProps={this.props}/>}   > */}
                    <Drawer.Screen  options={{headerShown:false}} name="ProductList" component={productList} />
                    <Drawer.Screen name="Filters"
                        component={filter} />
                          {/* <Drawer.Screen name="MyTabs" component={categories} initialParams={{screen:categories}}/> */}
                    <Drawer.Screen  options={{headerShown:false}} name="ProductDetail" component={productDetail} />
                    {/* <Drawer.Screen  options={{headerShown:false}} name="Category" component={categories} /> */}
                    <Drawer.Screen  options={{headerShown:false}} name="AddToBag" component={addTobag} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

}

export default drawer;




