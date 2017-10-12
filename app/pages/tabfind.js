import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    NativeModules,
    DeviceEventEmitter
} from 'react-native';
import CToast from '../customs/CustomToast'
import CButton from '../customs/CustomButton'
const title='发现'

export default class TabHomeComponent extends Component{

    static navigationOptions={
        tabBarLabel: title
    }
    componentWillMount(){
        console.log('~~~~~~~~~~~~~~~~~~~~~1')
        DeviceEventEmitter.addListener('showtime', function(e: Event) {
            // handle event.
            console.log(e)
        });
    }
    componentWillUnmount(){
        console.log('Home卸载了')
    }
    render(){
        return(

                <View style={styles.container}>
                    <TouchableHighlight  onPress={()=>{
                        CToast.rnCallNative('Toast',CToast.LONG)
                    }}>
                    <View style={styles.buttonsgreen}/>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress={()=>{
                        CButton.rnCallNative()
                    }}>
                        <View style={styles.buttonsblue}/>
                    </TouchableHighlight>
                    <Text  />
                </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonsgreen: {
        width :50,
        height :50,
        backgroundColor: '#00aa00'
    },
    buttonsblue: {
        width :50,
        height :50,
        backgroundColor: '#44f2f4'
    }
});