  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{Component} from "react";
import {View} from 'react-native'
import { SafeAreaView,StatusBar, LogBox} from "react-native";
import SplashScreen from "react-native-splash-screen";
import AppNavigation from "./src/navigation/AppNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomDrawer from "./src/components/drawer/bottomDrawer";
// import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import BottomDrawer from "./src/components/drawer/bottomDrawer";
import AppNavigation2 from "./src/navigation/AppNavigation2";
LogBox.ignoreAllLogs();



class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      isUserAuthenticated:false        
     }
  }

  async userDetail() {
    console.log('userDetail===>')
    // let token = ''

    let userS = await AsyncStorage.getItem('@userToken')
    console.log(userS, 'userssss')
   
    AsyncStorage.getItem('@user').then(user => {
      if (user) {
        console.log(this.state.isUserAuthenticated,'conslee')
        this.setState({ isUserAuthenticated: true }, () => {
          // this.setState({ loading: false })
        })
      } else {
        this.setState({ isUserAuthenticated: false }, () => {
          // this.setState({ loading: false })
        })
      }
    })
  
    
    //    let shahank =JSON.parse(JSON.stringify(userS))
    // JSON.stringify(userS))
    // console.log('convooo3sWW', JSON.parse(userS))
    // console.log(userS.accessToken\,'hdbjdsdjsdbjsdb')
    //console.log(userS[0]._id,'userS-xx--->')
    // alert(userS)
    // })
    // this.setState({
    //     token: userS
    // }, () => { this.state.token, 'token--->' })

    // await AsyncStorage.getItem('@user',JSON.stringify(user)).then(() => {
    //     console.log(user, 'fcmtokenLoginß')

    // })
}

  componentDidMount(){
    console.log('bababa')
    SplashScreen.hide()
    this.userDetail()
  }

  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={'dark-content'}/>
        {
          this.state.isUserAuthenticated?
          <AppNavigation2/>
          :
          <AppNavigation/>

        }
      </SafeAreaView>
    )
  }
}

export default App;