import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Dimensions,
    UIManager,
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
    }
    componentWillMount(){
        DeviceEventEmitter.addListener('showloc', this.showToast);
    }

    /**
     * 严格意义上说要区分组件关系，在最外层调用的时候，
     * 要 this.refs.子组件别名
     * 拿到子组件并且调用其中的内部方法
     */
    _relocation=()=>{
        this.refs.CM._onReLocation()
    }

    render(){
        console.log("重新render了")
        return(
            <View style={styles.container} >
                <CMapCustom style={styles.map} ref={"CM"}/>
                <View style={{    position: 'absolute', top:0, right:0,}}>
                    <TouchableHighlight onPress={this._relocation}>
                        <View style={styles.buttonsblue}/>
                    </TouchableHighlight>
                </View>
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
        backgroundColor: '#44f2f4'
    }
});