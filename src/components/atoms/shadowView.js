import React , {Component} from 'react';
import { View,StyleSheet } from 'react-native';
// import {Text} from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
import { APP_COLOR } from '../Utils/Contants';
export default class ShadowView extends Component{
    render(){
        return(
            <View style={[style.shadow , this.props.styles]}>    
                {this.props.children}    
            </View>
        )
    }
}

const style = StyleSheet.create({
    shadow : {
        backgroundColor: 'white',
        borderRadius: 5,
        elevation:1,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        marginTop:16,
        padding:16,
        shadowOpacity:0.5,
        
    }
})
