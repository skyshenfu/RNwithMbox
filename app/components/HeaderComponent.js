import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
export default class HeaderComponent extends Component {
    render() {
        if (this.props.type.headertype==1){
            return (
                <View style={stylesheets.headerNormal}>
                    <Text>正常头</Text>
                </View>
            )
        }else {
            return (
                <View style={stylesheets.headerNormal}>
                    <Text>刷新头</Text>
                </View>
            )
        }


    }
}
const stylesheets=StyleSheet.create({
    headerNormal :{
        width :ScreenWidth
    }
})