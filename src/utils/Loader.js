import React ,{Component} from 'react';
import {
    ActivityIndicator,
    View,
    Platform,} from 'react-native';
 class ShowLoader extends Component{
    render(){ 
        return(
            <View style={{width:'100%',height:'100%',
                            position:'absolute',justifyContent:'center',
                            alignSelf:'center', backgroundColor:'transparent'}}>
                    <View style={{alignSelf:'center',borderRadius:5,padding:10,
                    backgroundColor:'transparent', opacity:1, height:100, width:100,
                     justifyContent:'center', alignItems:'center'}}>
                            <ActivityIndicator 
                            style={{height:100, width:100}}
                            // size={'large'} color='#F43297' 
                            size={'large'} color='red' 
                            />
                    </View>       
            </View>
        )

        }

}
export default ShowLoader;