import React, { Component } from 'react';
import { Button, View } from 'react-native';
// import { Text } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
// import { APP_COLOR } from '../Utils/Contants';
export default class LineaGradientView extends Component {
    render() {
        return (
            <Button
            style={{
            width:"100%", height:50,
            // backgroundColor:_colorSet.green,
            backgroundColor:'#52C285',
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center" }}>
                {/* {this.props.children} */}
            </Button>
        )
    }
}





