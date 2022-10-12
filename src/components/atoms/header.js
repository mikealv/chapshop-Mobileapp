import React from "react";
import { View, Image, TouchableOpacity, SafeAreaView } from "react-native";
// import { color } from "react-native-reanimated";
import { APP_IMAGES } from "../../utils/Common";

const Header = ({ navigation, color}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View>
                    <Image style={{top:5,left:8, height: 20 ,width:20,tintColor:color}}
                        resizeMode="contain"
                        source={APP_IMAGES.arrowLeft} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Header;