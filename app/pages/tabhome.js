import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
import CMapCustom  from '../customs/CustomMap'
import CToast from  '../customs/CustomToast'
const title='首页'
export default class TabHomeComponent extends Component{
    static navigationOptions={
        tabBarLabel: title
    }
    showToast=(e)=>{
        console.log(e)
        CToast.rnCallNative(e.Loc.toString(),CToast.SHORT)
    };
    _press=()=>{

    }
    componentWillMount(){
        DeviceEventEmitter.addListener('showloc', this.showToast);
    }
    render(){
        console.log("重新render了")
        return(
            <View style={styles.container} >
                <CMapCustom style={styles.map}/>
                <TouchableHighlight onPress={this._press}>
                    <View style={styles.buttonsblue}/>
                </TouchableHighlight>
            </View>
        )
    }
    componentWillUnmount(){
        console.log('Home卸载了')
        DeviceEventEmitter.removeListener('showloc',this.showToast)
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:ScreenWidth,
    },
    map: {
        width:ScreenWidth,
        height:ScreenHeight/2
    },
    buttonsblue: {
        width :50,
        height :50,
        backgroundColor: '#44f2f4',
        position: 'absolute'
    }
});